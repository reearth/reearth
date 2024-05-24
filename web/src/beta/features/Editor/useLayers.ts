import { MutableRefObject, useCallback, useState } from "react";

import type { MapRef, ComputedFeature, ComputedLayer, LayerSimple } from "@reearth/core";
import { useLayersFetcher } from "@reearth/services/api";
import { NLSLayer } from "@reearth/services/api/layersApi/utils";
import { useT } from "@reearth/services/i18n";

type LayerProps = {
  sceneId: string;
  isVisualizerReady?: boolean;
  visualizerRef?: MutableRefObject<MapRef | null>;
};

export type LayerSelectProps =
  | {
      layerId?: string;
      computedLayer?: ComputedLayer;
      computedFeature?: ComputedFeature;
    }
  | undefined;

export type LayerAddProps = {
  config?: Omit<LayerSimple, "type" | "id">;
  index?: any;
  layerType: string;
  sceneId: string;
  title: string;
  visible?: boolean;
  schema?: any;
};

export type LayerNameUpdateProps = {
  layerId: string;
  name: string;
};

export type LayerConfigUpdateProps = {
  layerId: string;
  config: Omit<LayerSimple, "type" | "id">;
};

export type LayerVisibilityUpdateProps = {
  layerId: string;
  visible: boolean;
};

export type SelectedLayer = {
  layer?: NLSLayer;
  computedLayer?: ComputedLayer;
  computedFeature?: ComputedFeature;
};

export default function ({ sceneId, isVisualizerReady, visualizerRef }: LayerProps) {
  const t = useT();
  const { useGetLayersQuery, useAddNLSLayerSimple, useRemoveNLSLayer, useUpdateNLSLayer } =
    useLayersFetcher();
  const { nlsLayers = [] } = useGetLayersQuery({ sceneId });

  const [selectedLayer, setSelectedLayer] = useState<SelectedLayer | undefined>();

  const handleLayerSelect = useCallback(
    (props: LayerSelectProps) => {
      if (!isVisualizerReady) return;

      if (props?.layerId) {
        setSelectedLayer({
          layer: nlsLayers.find(l => l.id === props.layerId),
          computedLayer: props?.computedLayer,
          computedFeature: props?.computedFeature,
        });
      } else {
        setSelectedLayer(undefined);
      }
      // Layer selection does not specific any feature, we do unselect for core.
      visualizerRef?.current?.layers.select(undefined);
    },
    [isVisualizerReady, visualizerRef, nlsLayers],
  );

  const handleLayerDelete = useCallback(
    async (layerId: string) => {
      const deletedPageIndex = nlsLayers.findIndex(l => l.id === layerId);
      if (deletedPageIndex === undefined) return;

      await useRemoveNLSLayer({
        layerId,
      });
      if (layerId === selectedLayer?.layer?.id) {
        handleLayerSelect({
          layerId: nlsLayers[deletedPageIndex + 1]?.id ?? nlsLayers[deletedPageIndex - 1]?.id,
        });
      }
    },
    [nlsLayers, selectedLayer, handleLayerSelect, useRemoveNLSLayer],
  );

  const handleLayerAdd = useCallback(
    async (inp: LayerAddProps) => {
      await useAddNLSLayerSimple({
        sceneId: inp.sceneId,
        config: inp.config,
        visible: inp.visible,
        layerType: inp.layerType,
        title: t(inp.title),
        index: inp.index,
        schema: inp.schema,
      });
    },
    [t, useAddNLSLayerSimple],
  );

  const handleLayerNameUpdate = useCallback(
    async (inp: LayerNameUpdateProps) => {
      await useUpdateNLSLayer({
        layerId: inp.layerId,
        name: inp.name,
      });
    },
    [useUpdateNLSLayer],
  );

  const handleLayerConfigUpdate = useCallback(
    async (inp: LayerConfigUpdateProps) => {
      await useUpdateNLSLayer({
        layerId: inp.layerId,
        config: inp.config,
      });
    },
    [useUpdateNLSLayer],
  );
  const handleLayerVisibilityUpdate = useCallback(
    async (inp: LayerVisibilityUpdateProps) => {
      await useUpdateNLSLayer({
        layerId: inp.layerId,
        visible: inp.visible,
      });
    },
    [useUpdateNLSLayer],
  );

  return {
    nlsLayers,
    selectedLayer,
    handleLayerSelect,
    handleLayerAdd,
    handleLayerDelete,
    handleLayerNameUpdate,
    handleLayerConfigUpdate,
    handleLayerVisibilityUpdate,
  };
}
