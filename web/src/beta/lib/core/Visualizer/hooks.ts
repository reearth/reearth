import { clone } from "lodash-es";
import { Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

// TODO: Move these utils
import { type DropOptions, useDrop } from "@reearth/beta/utils/use-dnd";

import type { Block, BuiltinWidgets, InteractionModeType } from "../Crust";
import { INTERACTION_MODES } from "../Crust/interactionMode";
import { getBuiltinWidgetOptions } from "../Crust/Widgets/Widget";
import type { ComputedFeature, Feature, LatLng, SelectedFeatureInfo } from "../mantle";
import type {
  Ref as MapRef,
  LayerSelectionReason,
  Camera,
  ComputedLayer,
  SceneProperty,
  LayerEditEvent,
  DefaultInfobox,
} from "../Map";
import { useOverriddenProperty } from "../Map";
import { TimelineManagerRef } from "../Map/useTimelineManager";

import useViewport from "./useViewport";

const viewportMobileMaxWidth = 768;

export default function useHooks(
  {
    selectedBlockId: initialSelectedBlockId,
    camera: initialCamera,
    interactionMode: initialInteractionMode,
    sceneProperty,
    isEditable,
    rootLayerId,
    zoomedLayerId,
    ownBuiltinWidgets,
    onLayerSelect,
    onBlockSelect,
    onCameraChange,
    onInteractionModeChange,
    onZoomToLayer,
    onLayerDrop,
  }: {
    selectedBlockId?: string;
    camera?: Camera;
    interactionMode?: InteractionModeType;
    isEditable?: boolean;
    rootLayerId?: string;
    sceneProperty?: SceneProperty;
    zoomedLayerId?: string;
    ownBuiltinWidgets?: (keyof BuiltinWidgets)[];
    onLayerSelect?: (
      layerId: string | undefined,
      featureId: string | undefined,
      layer: (() => Promise<ComputedLayer | undefined>) | undefined,
      reason: LayerSelectionReason | undefined,
    ) => void;
    onBlockSelect?: (blockId?: string) => void;
    onCameraChange?: (camera: Camera) => void;
    onInteractionModeChange?: (mode: InteractionModeType) => void;
    onZoomToLayer?: (layerId: string | undefined) => void;
    onLayerDrop?: (layerId: string, propertyKey: string, position: LatLng | undefined) => void;
  },
  ref: Ref<MapRef | null>,
) {
  const mapRef = useRef<MapRef>(null);

  useImperativeHandle(ref, () => mapRef.current, []);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { ref: dropRef, isDroppable } = useDrop(
    useMemo(
      (): DropOptions => ({
        accept: ["primitive"],
        drop(_item, context) {
          if (!rootLayerId || !isEditable) return;
          const loc = context.position
            ? mapRef.current?.engine.getLocationFromScreen(context.position.x, context.position.y)
            : undefined;
          return {
            type: "earth",
            layerId: rootLayerId,
            position: loc ? { lat: loc.lat, lng: loc.lng, height: loc.height } : undefined,
          };
        },
        wrapperRef,
      }),
      [rootLayerId, isEditable],
    ),
  );
  dropRef(wrapperRef);

  const viewport = useViewport({
    wrapperRef,
  });

  // layer
  const [selectedLayer, selectLayer] = useState<{
    layerId?: string;
    featureId?: string;
    layer?: ComputedLayer;
    reason?: LayerSelectionReason;
  }>({});
  const [selectedFeature, selectFeature] = useState<Feature>();
  const [selectedComputedFeature, selectComputedFeature] = useState<ComputedFeature>();

  const handleLayerSelect = useCallback(
    async (
      layerId: string | undefined,
      featureId: string | undefined,
      layer: (() => Promise<ComputedLayer | undefined>) | undefined,
      reason: LayerSelectionReason | undefined,
      info: SelectedFeatureInfo | undefined,
    ) => {
      const computedLayer = await layer?.();

      selectFeature(f =>
        f?.id === featureId
          ? f
          : layerId && featureId
          ? mapRef.current?.engine.findFeatureById?.(layerId, featureId)
          : undefined,
      );
      selectComputedFeature(f => {
        const res =
          f?.id === featureId
            ? f
            : layerId && featureId
            ? mapRef.current?.engine.findComputedFeatureById?.(layerId, featureId) ??
              (f && f.id === info?.feature?.id ? f : info?.feature)
            : undefined;
        return res;
      });

      selectLayer(l =>
        l.layerId === layerId && l.featureId === featureId
          ? l
          : { layerId, featureId, layer: computedLayer, reason },
      );

      onLayerSelect?.(layerId, featureId, async () => layer?.(), reason);
    },
    [onLayerSelect],
  );

  // blocks
  const blocks = useMemo(
    () =>
      selectedLayer.layer?.layer?.infobox?.blocks?.map(b => ({
        ...b,
        property: b.property?.default ?? b.property,
      })),
    [selectedLayer.layer?.layer?.infobox?.blocks],
  );

  // Infobox
  const defaultInfobox = selectedLayer.reason?.defaultInfobox;
  const infobox = useMemo(
    () =>
      selectedLayer.layer?.layer?.infobox
        ? {
            title: selectedLayer.layer?.layer?.title || defaultInfobox?.title,
            isEditable: !!selectedLayer.layer?.layer?.infobox,
            property: selectedLayer.layer?.layer?.infobox?.property?.default,
            blocks: blocks?.length ? blocks : defaultInfoboxBlocks(defaultInfobox),
          }
        : undefined,
    [selectedLayer, defaultInfobox, blocks],
  );
  const handleInfoboxClose = useCallback(() => {
    if (infobox?.property?.unselectOnClose) {
      mapRef?.current?.layers.select(undefined);
    }
  }, [infobox]);

  const timelineManagerRef: TimelineManagerRef = useRef();

  // scene
  const [overriddenSceneProperty, originalOverrideSceneProperty] =
    useOverriddenProperty(sceneProperty);

  const overrideSceneProperty = useCallback(
    (pluginId: string, property: SceneProperty) => {
      if (property.timeline) {
        const filteredTimeline = clone(property.timeline);
        delete filteredTimeline.visible;
        if (Object.keys(filteredTimeline).length > 0) {
          if (
            filteredTimeline.current !== undefined ||
            filteredTimeline.start !== undefined ||
            filteredTimeline.stop !== undefined
          ) {
            timelineManagerRef?.current?.commit({
              cmd: "SET_TIME",
              payload: {
                start:
                  filteredTimeline.start ?? timelineManagerRef?.current?.computedTimeline.start,
                stop: filteredTimeline.stop ?? timelineManagerRef?.current?.computedTimeline.stop,
                current:
                  filteredTimeline.current ?? timelineManagerRef?.current?.computedTimeline.current,
              },
              committer: {
                source: "overrideSceneProperty",
                id: pluginId,
              },
            });
          }
          if (
            filteredTimeline.multiplier !== undefined ||
            filteredTimeline.stepType !== undefined ||
            filteredTimeline.rangeType !== undefined
          ) {
            timelineManagerRef?.current?.commit({
              cmd: "SET_OPTIONS",
              payload: {
                stepType: filteredTimeline.stepType,
                multiplier: filteredTimeline.multiplier,
                rangeType: filteredTimeline.rangeType,
              },
              committer: {
                source: "overrideSceneProperty",
                id: pluginId,
              },
            });
          }
          if (filteredTimeline.animation !== undefined) {
            timelineManagerRef?.current?.commit({
              cmd: filteredTimeline.animation ? "PLAY" : "PAUSE",
              committer: {
                source: "overrideSceneProperty",
                id: pluginId,
              },
            });
          }
        }
      }
      originalOverrideSceneProperty(pluginId, property);
    },
    [timelineManagerRef, originalOverrideSceneProperty],
  );

  // block
  const [selectedBlock, selectBlock] = useValue(initialSelectedBlockId, onBlockSelect);

  // camera
  const [camera, changeCamera] = useValue(initialCamera, onCameraChange);

  // interaction mode
  const [_interactionMode, changeInteractionMode] = useValue(
    initialInteractionMode,
    onInteractionModeChange,
  );
  const interactionMode = _interactionMode || "default";

  // feature flags
  const featureFlags = INTERACTION_MODES[interactionMode];

  // mobile
  const { width } = useWindowSize();
  const isMobile = width < viewportMobileMaxWidth;

  // layer edit
  const onLayerEditRef = useRef<(e: LayerEditEvent) => void>();
  const onLayerEdit = useCallback((cb: (e: LayerEditEvent) => void) => {
    onLayerEditRef.current = cb;
  }, []);
  const handleLayerEdit = useCallback((e: LayerEditEvent) => {
    onLayerEditRef.current?.(e);
  }, []);

  // zoom to layer
  useEffect(() => {
    if (zoomedLayerId) {
      mapRef.current?.engine?.lookAtLayer(zoomedLayerId);
      onZoomToLayer?.(undefined);
    }
  }, [zoomedLayerId, onZoomToLayer]);

  // dnd
  const [isLayerDragging, setIsLayerDragging] = useState(false);
  const handleLayerDrag = useCallback(() => {
    setIsLayerDragging(true);
  }, []);
  const handleLayerDrop = useCallback(
    (layerId: string, _featureId: string | undefined, latlng: LatLng | undefined) => {
      setIsLayerDragging(false);
      const layer = mapRef.current?.layers.findById(layerId);
      const propertyKey = layer?.property.default.location
        ? "default.location"
        : layer?.property.default.position
        ? "default.position"
        : undefined;
      if (latlng && layer && layer.propertyId && propertyKey) {
        onLayerDrop?.(layer.propertyId, propertyKey, latlng);
      }
    },
    [onLayerDrop, mapRef],
  );

  // shouldRender
  const shouldRender = useMemo(() => {
    const shouldWidgetAnimate = ownBuiltinWidgets?.some(
      id => !!getBuiltinWidgetOptions(id).animation,
    );
    return shouldWidgetAnimate;
  }, [ownBuiltinWidgets]);

  return {
    mapRef,
    wrapperRef,
    selectedLayer,
    selectedFeature,
    selectedComputedFeature,
    selectedBlock,
    viewport,
    camera,
    interactionMode,
    featureFlags,
    isMobile,
    overriddenSceneProperty,
    isDroppable,
    infobox,
    isLayerDragging,
    shouldRender,
    timelineManagerRef,
    handleLayerSelect,
    handleBlockSelect: selectBlock,
    handleCameraChange: changeCamera,
    handleInteractionModeChange: changeInteractionMode,
    handleLayerDrag,
    handleLayerDrop,
    overrideSceneProperty,
    handleLayerEdit,
    onLayerEdit,
    handleInfoboxClose,
  };
}

function useValue<T>(
  initial: T | undefined,
  onChange: ((t: T) => void) | undefined,
): [T | undefined, (v?: T) => void] {
  const [state, set] = useState(initial);

  const handleOnChange = useCallback(
    (v?: T) => {
      if (v) {
        set(v);
        onChange?.(v);
      }
    },
    [onChange],
  );

  useEffect(() => {
    set(initial);
  }, [initial]);

  return [state, handleOnChange];
}

function defaultInfoboxBlocks(defaultInfobox: DefaultInfobox | undefined): Block[] | undefined {
  if (defaultInfobox?.content.type === "table") {
    return Array.isArray(defaultInfobox?.content.value)
      ? [
          {
            id: "content",
            pluginId: "reearth",
            extensionId: "dlblock",
            property: {
              items: defaultInfobox.content.value.map((c, i) => ({
                id: i,
                item_title: c.key,
                item_datastr: String(c.value),
                item_datatype: "string",
              })),
            },
          },
        ]
      : undefined;
  }

  if (defaultInfobox?.content.type === "html") {
    return defaultInfobox.content.value
      ? [
          {
            id: "content",
            pluginId: "reearth",
            extensionId: "htmlblock",
            property: {
              html: defaultInfobox.content.value,
            },
          },
        ]
      : undefined;
  }

  return undefined;
}
