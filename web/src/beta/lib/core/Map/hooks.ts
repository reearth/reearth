import { useImperativeHandle, useRef, type Ref, useState, useCallback } from "react";

import { SelectedFeatureInfo } from "../mantle";

import { type MapRef, mapRef } from "./ref";
import type {
  EngineRef,
  LayersRef,
  LayerSelectionReason,
  ComputedLayer,
  RequestingRenderMode,
  SceneProperty,
} from "./types";
import useTimelineManager, { TimelineManagerRef } from "./useTimelineManager";

export type { MapRef } from "./ref";

export const FORCE_REQUEST_RENDER = -1;
export const NO_REQUEST_RENDER = 0;
export const REQUEST_RENDER_ONCE = 1;

export default function ({
  ref,
  sceneProperty,
  timelineManagerRef,
  onLayerSelect,
}: {
  ref: Ref<MapRef>;
  sceneProperty?: SceneProperty;
  timelineManagerRef?: TimelineManagerRef;
  onLayerSelect?: (
    layerId: string | undefined,
    featureId: string | undefined,
    layer: (() => Promise<ComputedLayer | undefined>) | undefined,
    options?: LayerSelectionReason,
    info?: SelectedFeatureInfo,
  ) => void;
}) {
  const engineRef = useRef<EngineRef>(null);
  const layersRef = useRef<LayersRef>(null);
  const requestingRenderMode = useRef<RequestingRenderMode>(NO_REQUEST_RENDER);

  useImperativeHandle(
    ref,
    () =>
      mapRef({
        engineRef,
        layersRef,
        timelineManagerRef,
      }),
    [timelineManagerRef],
  );

  // selectLayer logic
  // 1. Map/hooks(here) is the source
  //    1.2 State updates propagate up, through onLayerSelect, to update
  //        the pluginAPI(in Crust) and to update external state through
  //        the Visualizer's onLayerselect prop.
  // 2. Passes down from Map to Layers
  // 3. Passes down from Map to Engine
  // 4. Source state can be updated only from the Engine (through the layersRef)

  const [selectedLayer, selectLayer] = useState<{
    layerId?: string;
    featureId?: string;
    reason?: LayerSelectionReason;
  }>({});

  const handleLayerSelect = useCallback(
    async (
      layerId: string | undefined,
      featureId: string | undefined,
      layer: (() => Promise<ComputedLayer | undefined>) | undefined,
      reason?: LayerSelectionReason,
      info?: SelectedFeatureInfo,
    ) => {
      selectLayer({ layerId, featureId, reason });
      onLayerSelect?.(layerId, featureId, layer, reason, info);
    },
    [onLayerSelect],
  );

  const handleEngineLayerSelect = useCallback(
    (
      layerId: string | undefined,
      featureId?: string,
      reason?: LayerSelectionReason,
      info?: SelectedFeatureInfo,
    ) => {
      layersRef.current?.selectFeatures(
        [{ layerId, featureId: featureId ? [featureId] : undefined }],
        reason,
        info,
      );
    },
    [],
  );

  useTimelineManager({
    init: sceneProperty?.timeline,
    engineRef,
    timelineManagerRef,
  });

  return {
    engineRef,
    layersRef,
    selectedLayer,
    requestingRenderMode,
    handleLayerSelect,
    handleEngineLayerSelect,
  };
}
