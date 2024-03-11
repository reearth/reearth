import { clone } from "lodash-es";
import { Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

// TODO: Move these utils
import { type DropOptions, useDrop } from "@reearth/beta/utils/use-dnd";

import type { BuiltinWidgets, InteractionModeType } from "../Crust";
import { Infobox as InfoboxType } from "../Crust/Infobox/types";
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
  CursorType,
  LayerVisibilityEvent,
} from "../Map";
import { useOverriddenProperty } from "../Map";
import { SketchEventCallback, SketchEventProps, SketchType } from "../Map/Sketch/types";
import { TimelineManagerRef } from "../Map/useTimelineManager";

import useViewport from "./useViewport";

const viewportMobileMaxWidth = 768;

export default function useHooks(
  {
    camera: initialCamera,
    interactionMode: initialInteractionMode,
    sceneProperty,
    isEditable,
    rootLayerId,
    zoomedLayerId,
    ownBuiltinWidgets,
    onLayerSelect,
    onCameraChange,
    onInteractionModeChange,
    onZoomToLayer,
    onLayerDrop,
    onSketchTypeChangeProp,
  }: {
    camera?: Camera;
    interactionMode?: InteractionModeType;
    isEditable?: boolean;
    rootLayerId?: string;
    sceneProperty?: SceneProperty;
    zoomedLayerId?: string;
    ownBuiltinWidgets?: (keyof BuiltinWidgets)[];
    onLayerSelect?: (
      layerId: string | undefined,
      layer: (() => Promise<ComputedLayer | undefined>) | undefined,
      feature: ComputedFeature | undefined,
      reason: LayerSelectionReason | undefined,
    ) => void;
    onCameraChange?: (camera: Camera) => void;
    onInteractionModeChange?: (mode: InteractionModeType) => void;
    onZoomToLayer?: (layerId: string | undefined) => void;
    onLayerDrop?: (layerId: string, propertyKey: string, position: LatLng | undefined) => void;
    onSketchTypeChangeProp?: (type: SketchType | undefined, from?: "editor" | "plugin") => void;
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
      if (selectedLayer.layerId === layerId && selectedLayer.featureId === featureId) return;

      const computedLayer = await layer?.();
      const computedFeature =
        layerId && featureId
          ? mapRef.current?.engine.findComputedFeatureById?.(layerId, featureId) ?? info?.feature
          : undefined;

      selectFeature(
        layerId && featureId
          ? mapRef.current?.engine.findFeatureById?.(layerId, featureId)
          : undefined,
      );
      selectComputedFeature(computedFeature);

      selectLayer(l =>
        l.layerId === layerId && l.featureId === featureId
          ? l
          : { layerId, featureId, layer: computedLayer, reason },
      );

      onLayerSelect?.(layerId, layer, computedFeature, reason);
    },
    [selectedLayer, onLayerSelect],
  );

  // Infobox
  const infobox: InfoboxType | undefined = useMemo(
    () =>
      selectedLayer.featureId
        ? {
            title: "Test",
            property: {
              default: {
                enabled: true,
                position: "right", // left | right
                // padding: {
                //   top: 0,
                //   bottom: 0,
                //   left: 0,
                //   right: 0,
                // },
                gap: 12,
              },
            },
            blocks: [
              // {
              //   id: "plugin-block-test",
              //   name: "Test block",
              //   pluginId: "myPlugin",
              //   extensionId: "testBlock",
              //   propertyId: "1231l2kj",
              //   property: {
              //     default: {
              //       someField: {
              //         type: "string",
              //         value: "Some cool field value",
              //         title: "Some field",
              //       },
              //     },
              //   },
              // },
              {
                id: "sadfl3333222",
                name: "Property",
                pluginId: "reearth",
                extensionId: "propertyInfoboxBlock",
                propertyId: "sadfl3333222",
                property: {
                  default: {
                    displayType: {
                      type: "string",
                      ui: "selection",
                      title: "Display Type",
                      choices: [
                        { key: "root", label: "Root only" },
                        { key: "all", label: "All fields" },
                        { key: "custom", label: "Custom" },
                      ],
                      value: "custom", // root | all | custom
                    },
                    propertyList: {
                      availableIf: {
                        field: "displayType",
                        type: "string",
                        value: "custom",
                      },
                      type: "array",
                      title: "Property List",
                      value: [
                        {
                          key: "key1",
                          title: "My Title",
                          field: "someField",
                        },
                        {
                          key: "key2",
                          title: "My Title2",
                          field: "someField2",
                        },
                      ],
                    },
                  },
                  panel: {
                    padding: {
                      title: "PADDDING!@#",
                      type: "spacing",
                      max: 100,
                      value: {
                        // top: 42,
                        bottom: 2,
                        left: 2,
                        right: 2,
                      },
                    },
                  },
                },
              },
              {
                id: "asdfasdf",
                name: "Image",
                pluginId: "reearth",
                extensionId: "imageInfoboxBlock",
                propertyId: "sadfl333322211",
                property: {
                  default: {
                    src: {
                      value: "https://www.w3schools.com/w3images/lights.jpg",
                      type: "url",
                      title: "ImageT",
                    },
                  },
                  panel: {
                    padding: {
                      title: "PADDDING!@#",
                      type: "spacing",
                      max: 100,
                      value: {
                        top: 2,
                        bottom: 2,
                        left: 2,
                        right: 2,
                      },
                    },
                  },
                },
              },
              {
                id: "sadfl3333",
                name: "Text",
                pluginId: "reearth",
                extensionId: "textInfoboxBlock",
                propertyId: "sadfl333322112",
                property: {
                  default: {
                    src: {
                      value: "https://www.w3schools.com/w3images/lights.jpg",
                      type: "text",
                      title: "Text text text",
                    },
                  },
                  panel: {
                    padding: {
                      title: "PADDDING!@#",
                      type: "spacing",
                      max: 100,
                      value: {
                        // top: 42,
                        bottom: 2,
                        left: 2,
                        right: 2,
                      },
                    },
                  },
                },
              },
            ],
          }
        : undefined,
    [selectedLayer],
  );

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

  // camera
  const [camera, changeCamera] = useValue(initialCamera, onCameraChange);

  const [cameraForceHorizontalRoll, setCameraForceHorizontalRoll] = useState(false);
  const handleCameraForceHorizontalRollChange = useCallback((enable?: boolean) => {
    setCameraForceHorizontalRoll(!!enable);
  }, []);

  // interaction mode
  const [_interactionMode, changeInteractionMode] = useValue(
    initialInteractionMode,
    onInteractionModeChange,
  );
  const interactionMode = _interactionMode || "default";

  const [cursor, setCursor] = useState<CursorType>("auto");
  useEffect(() => {
    setCursor(
      interactionMode === "sketch" ? "crosshair" : interactionMode === "move" ? "grab" : "auto",
    );
  }, [interactionMode]);

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

  // layer visiblity
  const onLayerVisibilityRef = useRef<(e: LayerVisibilityEvent) => void>();
  const onLayerVisibility = useCallback((cb: (e: LayerVisibilityEvent) => void) => {
    onLayerVisibilityRef.current = cb;
  }, []);
  const handleLayerVisibility = useCallback((e: LayerVisibilityEvent) => {
    onLayerVisibilityRef.current?.(e);
  }, []);

  // plugin sketch feature events
  const onPluginSketchFeatureCreatedCallbacksRef = useRef<SketchEventCallback[]>([]);
  const onPluginSketchFeatureCreated = useCallback((cb: SketchEventCallback) => {
    onPluginSketchFeatureCreatedCallbacksRef.current.push(cb);
  }, []);
  const handlePluginSketchFeatureCreated = useCallback((props: SketchEventProps) => {
    onPluginSketchFeatureCreatedCallbacksRef.current.forEach(fn => fn(props));
  }, []);

  const onSketchTypeChangeCallbacksRef = useRef<((type: SketchType | undefined) => void)[]>([]);
  const onSketchTypeChange = useCallback((cb: (type: SketchType | undefined) => void) => {
    onSketchTypeChangeCallbacksRef.current.push(cb);
  }, []);
  const handleSketchTypeChange = useCallback(
    (type: SketchType | undefined, from?: "editor" | "plugin") => {
      onSketchTypeChangeCallbacksRef.current.forEach(fn => fn(type));
      onSketchTypeChangeProp?.(type, from);
    },
    [onSketchTypeChangeProp],
  );

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
    cursor,
    cameraForceHorizontalRoll,
    overrideSceneProperty,
    handleCameraForceHorizontalRollChange,
    handleLayerSelect,
    handleLayerDrag,
    handleLayerDrop,
    handleLayerEdit,
    onLayerEdit,
    handleCameraChange: changeCamera,
    handleInteractionModeChange: changeInteractionMode,
    onPluginSketchFeatureCreated,
    handlePluginSketchFeatureCreated,
    onSketchTypeChange,
    handleSketchTypeChange,
    onLayerVisibility,
    handleLayerVisibility,
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
