import { forwardRef, useMemo, type Ref } from "react";

import { INTERACTION_MODES } from "../Crust";

import useHooks, { MapRef } from "./hooks";
import Layers, { type Props as LayersProps } from "./Layers";
import type { Engine, EngineProps } from "./types";

export * from "./types";
export { useGet, type WrappedRef, type Undefinable, useOverriddenProperty } from "./utils";

export type {
  NaiveLayer,
  LazyLayer,
  FeatureComponentType,
  FeatureComponentProps,
  ClusterProperty,
  Layer,
  LayerSelectionReason,
  Cluster,
  EvalFeature,
  DefaultInfobox,
  OverriddenLayer,
} from "./Layers";

export type { MapRef as Ref } from "./hooks";

export type Props = {
  engines?: Record<string, Engine>;
  engine?: string;
} & Omit<
  LayersProps,
  "Feature" | "clusterComponent" | "selectionReason" | "delegatedDataTypes" | "selectedLayerId"
> &
  Omit<EngineProps, "onLayerSelect" | "layerSelectionReason" | "selectedLayerId">;

function Map(
  {
    engines,
    engine,
    isBuilt,
    isEditable,
    clusters,
    hiddenLayers,
    layers,
    overrides,
    timelineManagerRef,
    sceneProperty,
    onLayerSelect,
    featureFlags = INTERACTION_MODES.default,
    ...props
  }: Props,
  ref: Ref<MapRef>,
): JSX.Element | null {
  const currentEngine = engine ? engines?.[engine] : undefined;
  const Engine = currentEngine?.component;
  const {
    engineRef,
    layersRef,
    selectedLayer,
    requestingRenderMode,
    handleLayerSelect,
    handleEngineLayerSelect,
  } = useHooks({
    ref,
    sceneProperty,
    timelineManagerRef,
    onLayerSelect,
  });

  const selectedLayerIds = useMemo(
    () => ({
      layerId: selectedLayer.layerId,
      featureId: selectedLayer.featureId,
    }),
    [selectedLayer.layerId, selectedLayer.featureId],
  );

  const selectedReason = useMemo(() => selectedLayer.reason, [selectedLayer.reason]);

  return Engine ? (
    <Engine
      ref={engineRef}
      isBuilt={isBuilt}
      isEditable={isEditable}
      selectedLayerId={selectedLayerIds}
      layerSelectionReason={selectedReason}
      layersRef={layersRef}
      requestingRenderMode={requestingRenderMode}
      timelineManagerRef={timelineManagerRef}
      onLayerSelect={handleEngineLayerSelect}
      featureFlags={featureFlags}
      {...props}>
      <Layers
        ref={layersRef}
        engineRef={engineRef}
        clusters={clusters}
        hiddenLayers={hiddenLayers}
        isBuilt={isBuilt}
        isEditable={isEditable}
        layers={layers}
        overrides={overrides}
        selectedLayer={selectedLayer}
        Feature={currentEngine?.featureComponent}
        clusterComponent={currentEngine?.clusterComponent}
        delegatedDataTypes={currentEngine.delegatedDataTypes}
        meta={props.meta}
        sceneProperty={props.property}
        requestingRenderMode={requestingRenderMode}
        onLayerSelect={handleLayerSelect}
      />
    </Engine>
  ) : null;
}

export default forwardRef(Map);
