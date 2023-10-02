import { useCallback, useEffect, useMemo } from "react";

import type { CameraPosition, ComputedFeature, NaiveLayer } from "@reearth/beta/lib/core/mantle";
import {
  events,
  useGet,
  type MouseEventHandles,
  type MouseEvents,
  type LayerSelectionReason,
  type TickEventCallback,
} from "@reearth/beta/lib/core/Map";

import { CameraOptions, FlyTo, FlyToDestination, LookAtDestination } from "../../types";

import { commonReearth } from "./api";
import { InteractionMode, ReearthEventType, Viewport, ViewportSize } from "./plugin_types";
import { Context, Props } from "./types";
import useClientStorage from "./useClientStorage";
import usePluginInstances from "./usePluginInstances";

export type SelectedReearthEventType = Pick<
  ReearthEventType,
  "cameramove" | "select" | "tick" | "resize" | keyof MouseEvents | "layeredit"
>;

export default function ({
  engineName,
  mapRef,
  sceneProperty,
  inEditor,
  built,
  tags,
  viewport,
  selectedLayer,
  selectedFeature,
  layerSelectionReason,
  alignSystem,
  floatingWidgets,
  camera,
  interactionMode,
  overrideInteractionMode,
  useExperimentalSandbox,
  overrideSceneProperty,
  onLayerEdit,
}: Props) {
  const [ev, emit] = useMemo(() => events<SelectedReearthEventType>(), []);

  const layersRef = mapRef?.current?.layers;
  const engineRef = mapRef?.current?.engine;

  const pluginInstances = usePluginInstances({
    alignSystem,
    floatingWidgets,
    blocks: selectedLayer?.layer?.infobox?.blocks,
  });
  const clientStorage = useClientStorage();

  const getLayers = useGet(layersRef);
  const getSceneProperty = useGet(sceneProperty);
  const getInEditor = useGet(!!inEditor);
  const getBuilt = useGet(!!built);
  const getTags = useGet(tags ?? []);
  const getCamera = useGet(camera);
  const getClock = useCallback(() => {
    const clock = engineRef?.getClock();
    return {
      startTime: clock?.start,
      stopTime: clock?.stop,
      currentTime: clock?.current,
      playing: clock?.playing,
      paused: !clock?.playing,
      speed: clock?.speed,
      play: engineRef?.play,
      pause: engineRef?.pause,
      tick: engineRef?.tick,
    };
  }, [engineRef]);
  const getInteractionMode = useGet(
    useMemo<InteractionMode>(
      () => ({ mode: interactionMode, override: overrideInteractionMode }),
      [interactionMode, overrideInteractionMode],
    ),
  );
  const getPluginInstances = useGet(pluginInstances);
  const getViewport = useGet(viewport as Viewport);
  const getSelectedLayer = useGet(selectedLayer);
  const getSelectedFeature = useGet(selectedFeature);
  const getLayerSelectionReason = useGet(layerSelectionReason);
  const overrideScenePropertyCommon = useCallback(
    (property: any) => {
      return overrideSceneProperty("", property);
    },
    [overrideSceneProperty],
  );

  const flyTo: FlyTo = useCallback(
    (target, options) => {
      engineRef?.flyTo(target, options);
    },
    [engineRef],
  );

  const lookAt = useCallback(
    (dest: LookAtDestination, options?: CameraOptions) => {
      engineRef?.lookAt(dest, options);
    },
    [engineRef],
  );

  const cameraViewport = useCallback(() => {
    return engineRef?.getViewport();
  }, [engineRef]);

  const getCameraFovInfo = useCallback(
    (options: { withTerrain?: boolean; calcViewSize?: boolean }) => {
      return engineRef?.getCameraFovInfo(options);
    },
    [engineRef],
  );

  const layersInViewport = useCallback(() => {
    return layersRef?.findAll(layer => !!engineRef?.inViewport(layer?.property?.default?.location));
  }, [engineRef, layersRef]);

  const zoomIn = useCallback(
    (amount: number) => {
      engineRef?.zoomIn(amount);
    },
    [engineRef],
  );

  const zoomOut = useCallback(
    (amount: number) => {
      engineRef?.zoomOut(amount);
    },
    [engineRef],
  );

  const rotateRight = useCallback(
    (radian: number) => {
      engineRef?.rotateRight(radian);
    },
    [engineRef],
  );

  const orbit = useCallback(
    (radian: number) => {
      engineRef?.orbit(radian);
    },
    [engineRef],
  );

  const captureScreen = useCallback(
    (type?: string, encoderOptions?: number) => {
      return engineRef?.captureScreen(type, encoderOptions);
    },
    [engineRef],
  );

  const getLocationFromScreen = useCallback(
    (x: number, y: number, withTerrain?: boolean) => {
      return engineRef?.getLocationFromScreen(x, y, withTerrain);
    },
    [engineRef],
  );

  const sampleTerrainHeight = useCallback(
    async (lng: number, lat: number) => {
      return await engineRef?.sampleTerrainHeight(lng, lat);
    },
    [engineRef],
  );

  const enableScreenSpaceCameraController = useCallback(
    (enabled: boolean) => engineRef?.enableScreenSpaceCameraController(enabled),
    [engineRef],
  );

  const lookHorizontal = useCallback(
    (amount: number) => {
      engineRef?.lookHorizontal(amount);
    },
    [engineRef],
  );

  const lookVertical = useCallback(
    (amount: number) => {
      engineRef?.lookVertical(amount);
    },
    [engineRef],
  );

  const moveForward = useCallback(
    (amount: number) => {
      engineRef?.moveForward(amount);
    },
    [engineRef],
  );

  const moveBackward = useCallback(
    (amount: number) => {
      engineRef?.moveBackward(amount);
    },
    [engineRef],
  );

  const moveUp = useCallback(
    (amount: number) => {
      engineRef?.moveUp(amount);
    },
    [engineRef],
  );

  const moveDown = useCallback(
    (amount: number) => {
      engineRef?.moveDown(amount);
    },
    [engineRef],
  );

  const moveLeft = useCallback(
    (amount: number) => {
      engineRef?.moveLeft(amount);
    },
    [engineRef],
  );

  const moveRight = useCallback(
    (amount: number) => {
      engineRef?.moveRight(amount);
    },
    [engineRef],
  );

  const moveOverTerrain = useCallback(
    (offset?: number) => {
      return engineRef?.moveOverTerrain(offset);
    },
    [engineRef],
  );

  const flyToGround = useCallback(
    (dest: FlyToDestination, options?: CameraOptions, offset?: number) => {
      engineRef?.flyToGround(dest, options, offset);
    },
    [engineRef],
  );

  const findFeatureById = useCallback(
    (layerId: string, featureId: string) => {
      return engineRef?.findFeatureById(layerId, featureId);
    },
    [engineRef],
  );

  const findFeaturesByIds = useCallback(
    (layerId: string, featureIds: string[]) => {
      return engineRef?.findFeaturesByIds(layerId, featureIds);
    },
    [engineRef],
  );

  const addLayer = useCallback(
    (layer: NaiveLayer) => {
      return layersRef?.add(layer)?.id;
    },
    [layersRef],
  );

  const overrideLayerProperty = useCallback(
    (id: string, property?: Partial<any> | null | undefined) => {
      layersRef?.override(id, { property });
    },
    [layersRef],
  );

  const selectLayer = useCallback(
    (layerId: string | undefined, reason?: LayerSelectionReason | undefined) => {
      layersRef?.select(layerId, reason);
    },
    [layersRef],
  );

  const selectFeatures = useCallback(
    (layers: { layerId?: string; featureId?: string[] }[]) => {
      layersRef?.selectFeatures(layers);
    },
    [layersRef],
  );

  const showLayer = useCallback(
    (...args: string[]) => {
      layersRef?.show(...args);
    },
    [layersRef],
  );

  const hideLayer = useCallback(
    (...args: string[]) => {
      layersRef?.hide(...args);
    },
    [layersRef],
  );

  const pickManyFromViewport = useCallback(
    (
      windowPosition: [x: number, y: number],
      windowWidth: number,
      windowHeight: number,
      // TODO: Get condition as expression for plugin
      condition?: (f: ComputedFeature) => boolean,
    ) => {
      return engineRef?.pickManyFromViewport(windowPosition, windowWidth, windowHeight, condition);
    },
    [engineRef],
  );

  const value = useMemo<Context>(
    () => ({
      reearth: commonReearth({
        engineName,
        events: ev,
        layers: getLayers,
        sceneProperty: getSceneProperty,
        inEditor: getInEditor,
        built: getBuilt,
        tags: getTags,
        camera: getCamera,
        clock: getClock,
        interactionMode: getInteractionMode,
        pluginInstances: getPluginInstances,
        viewport: getViewport,
        selectedLayer: getSelectedLayer,
        selectedFeature: getSelectedFeature,
        layerSelectionReason: getLayerSelectionReason,
        showLayer,
        hideLayer,
        addLayer,
        selectLayer,
        selectFeatures,
        overrideLayerProperty,
        overrideSceneProperty: overrideScenePropertyCommon,
        layersInViewport,
        flyTo,
        lookAt,
        zoomIn,
        zoomOut,
        cameraViewport,
        getCameraFovInfo,
        rotateRight,
        orbit,
        captureScreen,
        getLocationFromScreen,
        sampleTerrainHeight,
        enableScreenSpaceCameraController,
        lookHorizontal,
        lookVertical,
        moveForward,
        moveBackward,
        moveUp,
        moveDown,
        moveLeft,
        moveRight,
        moveOverTerrain,
        flyToGround,
        findFeatureById,
        findFeaturesByIds,
        pickManyFromViewport,
      }),
      overrideSceneProperty,
      pluginInstances,
      clientStorage,
      useExperimentalSandbox,
    }),
    [
      engineName,
      ev,
      getLayers,
      getSceneProperty,
      getInEditor,
      getBuilt,
      getTags,
      getCamera,
      getClock,
      getInteractionMode,
      getPluginInstances,
      getViewport,
      getSelectedLayer,
      getSelectedFeature,
      getLayerSelectionReason,
      showLayer,
      hideLayer,
      addLayer,
      selectLayer,
      selectFeatures,
      overrideLayerProperty,
      overrideScenePropertyCommon,
      layersInViewport,
      flyTo,
      lookAt,
      zoomIn,
      zoomOut,
      cameraViewport,
      getCameraFovInfo,
      rotateRight,
      orbit,
      captureScreen,
      getLocationFromScreen,
      sampleTerrainHeight,
      enableScreenSpaceCameraController,
      lookHorizontal,
      lookVertical,
      moveForward,
      moveBackward,
      moveUp,
      moveDown,
      moveLeft,
      moveRight,
      moveOverTerrain,
      flyToGround,
      overrideSceneProperty,
      pluginInstances,
      clientStorage,
      useExperimentalSandbox,
      findFeatureById,
      findFeaturesByIds,
      pickManyFromViewport,
    ],
  );

  useEmit<SelectedReearthEventType>(
    {
      select: useMemo<[layerId: string | undefined, featureId: string | undefined]>(
        () => (selectedLayer ? [selectedLayer.id, selectedFeature?.id] : [undefined, undefined]),
        [selectedLayer, selectedFeature],
      ),
      cameramove: useMemo<[camera: CameraPosition] | undefined>(
        () => (camera ? [camera] : undefined),
        [camera],
      ),
      resize: useMemo<[viewport: ViewportSize] | undefined>(
        () => [
          {
            width: viewport?.width,
            height: viewport?.height,
            isMobile: viewport?.isMobile,
          } as ViewportSize,
        ],
        [viewport?.width, viewport?.height, viewport?.isMobile],
      ),
    },
    emit,
  );

  const onMouseEvent = useCallback(
    (eventType: keyof MouseEventHandles, fn: any) => {
      mapRef?.current?.engine[eventType]?.(fn);
    },
    [mapRef],
  );

  const onTickEvent = useCallback(
    (fn: TickEventCallback) => {
      mapRef?.current?.engine.onTick?.(fn);
    },
    [mapRef],
  );

  useEffect(() => {
    const eventHandles: {
      [index in keyof MouseEvents]: keyof MouseEventHandles;
    } = {
      click: "onClick",
      doubleclick: "onDoubleClick",
      mousedown: "onMouseDown",
      mouseup: "onMouseUp",
      rightclick: "onRightClick",
      rightdown: "onRightDown",
      rightup: "onRightUp",
      middleclick: "onMiddleClick",
      middledown: "onMiddleDown",
      middleup: "onMiddleUp",
      mousemove: "onMouseMove",
      mouseenter: "onMouseEnter",
      mouseleave: "onMouseLeave",
      wheel: "onWheel",
    };
    (Object.keys(eventHandles) as (keyof MouseEvents)[]).forEach((event: keyof MouseEvents) => {
      onMouseEvent(eventHandles[event], (props: MouseEvent) => {
        emit(event, props);
      });
    });
    onLayerEdit(e => {
      emit("layeredit", e);
    });
    onTickEvent(e => {
      emit("tick", e);
    });
  }, [emit, onMouseEvent, onLayerEdit, onTickEvent]);

  // expose plugin API for developers
  useEffect(() => {
    window.reearth = value.reearth;
    return () => {
      delete window.reearth;
    };
  }, [value]);

  return value;
}

export function useEmit<T extends { [K in string]: any[] }>(
  values: { [K in keyof T]?: T[K] | undefined },
  emit: (<K extends keyof T>(key: K, ...args: T[K]) => void) | undefined,
) {
  for (const k of Object.keys(values)) {
    const args = values[k];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!args) return;
      emit?.(k, ...args);
    }, [emit, k, args]);
  }
}
