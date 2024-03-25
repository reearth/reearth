import React, { useCallback, useMemo, useState } from "react";

import TabMenu, { TabObject } from "@reearth/beta/components/TabMenu";
import { GeoJsonFeatureUpdateProps } from "@reearth/beta/features/Editor/useSketch";
import { Feature } from "@reearth/beta/lib/core/mantle";
import { NLSLayer } from "@reearth/services/api/layersApi/utils";
import { LayerStyle } from "@reearth/services/api/layerStyleApi/utils";
import { useT } from "@reearth/services/i18n"; // If needed
import { SelectedLayer } from "@reearth/services/state";

import { LayerConfigUpdateProps } from "../../../../useLayers";

import FeatureData from "./FeatureData";
import LayerData from "./LayerData";
import LayerTab from "./LayerStyle";

type Props = {
  layerStyles?: LayerStyle[];
  layers?: NLSLayer[];
  selectedLayerId: SelectedLayer;
  sceneId?: string;
  onLayerConfigUpdate?: (inp: LayerConfigUpdateProps) => void;
  onGeoJsonFeatureUpdate?: (inp: GeoJsonFeatureUpdateProps) => void;
};

const InspectorTabs: React.FC<Props> = ({
  layers,
  layerStyles,
  selectedLayerId,
  sceneId,
  onLayerConfigUpdate,
  onGeoJsonFeatureUpdate,
}) => {
  const t = useT();
  const [selectedTab, setSelectedTab] = useState("layerData");

  const handleTabChange = useCallback((newTab: string) => {
    setSelectedTab(newTab);
  }, []);

  const selectedLayer = useMemo(
    () => layers?.find(l => l.id === selectedLayerId.layerId),
    [layers, selectedLayerId],
  );

  const selectedFeature = useMemo(() => {
    if (!selectedLayerId?.feature?.id) return;
    const { id, geometry, properties } =
      selectedLayer?.config?.data?.type === "3dtiles"
        ? selectedLayerId.feature
        : selectedLayerId.layer?.features?.find(f => f.id === selectedLayerId.feature?.id) ?? {};
    if (!id) return;
    return {
      id,
      geometry,
      properties,
    };
  }, [selectedLayerId, selectedLayer?.config?.data?.type]);

  const sketchLayerFeatureId = useMemo(() => {
    if (!selectedLayer?.sketch) return;

    const { sketch } = selectedLayer;
    const features = sketch.featureCollection.features;

    if (!selectedFeature?.properties?.id) return;

    const selectedFeatureId = selectedFeature.properties.id;

    const filtedFeature = features.find(
      (feature: Feature) => feature.properties.id === selectedFeatureId,
    );

    return filtedFeature ? filtedFeature.id : null;
  }, [selectedLayer, selectedFeature]);

  const tabs: TabObject[] = useMemo(
    () => [
      {
        id: "layerData",
        name: t("Data"),
        component: selectedLayer && <LayerData selectedLayer={selectedLayer} />,
        icon: "layerInspector",
      },
      {
        id: "featureData",
        name: t("Feature"),
        component: selectedFeature && (
          <FeatureData
            selectedFeature={selectedFeature}
            isSketchLayer={selectedLayer?.isSketch}
            customProperties={selectedLayer?.sketch?.customPropertySchema}
            layerId={selectedLayerId.layerId}
            featureId={sketchLayerFeatureId}
            onGeoJsonFeatureUpdate={onGeoJsonFeatureUpdate}
          />
        ),
        icon: "location",
      },
      {
        id: "layerStyleSelector",
        name: t("Styling"),
        component: selectedLayer && (
          <LayerTab
            layerStyles={layerStyles}
            layers={layers}
            sceneId={sceneId}
            selectedLayerId={selectedLayer.id}
            onLayerConfigUpdate={onLayerConfigUpdate}
          />
        ),
        icon: "layerStyle",
      },
      // TODO: new beta infobox implementation
      // {
      //   id: "infobox",
      //   name: t("Infobox"),
      //   component: <div>TODO</div>,
      //   icon: "infobox",
      // },
    ],
    [
      t,
      selectedLayer,
      selectedFeature,
      selectedLayerId.layerId,
      sketchLayerFeatureId,
      onGeoJsonFeatureUpdate,
      layerStyles,
      layers,
      sceneId,
      onLayerConfigUpdate,
    ],
  );

  return <TabMenu tabs={tabs} selectedTab={selectedTab} onSelectedTabChange={handleTabChange} />;
};

export default InspectorTabs;
