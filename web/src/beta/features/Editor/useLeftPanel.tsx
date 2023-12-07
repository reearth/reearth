import { ReactNode, useMemo } from "react";

import Resizable from "@reearth/beta/components/Resizable";
import MapSidePanel from "@reearth/beta/features/Editor/tabs/map/LeftPanel";
import StorySidePanel from "@reearth/beta/features/Editor/tabs/story/LeftPanel";
import { Tab } from "@reearth/beta/features/Navbar";
import { FlyTo } from "@reearth/beta/lib/core/types";
import { ValueType, ValueTypes } from "@reearth/beta/utils/value";
import type { NLSLayer } from "@reearth/services/api/layersApi/utils";
import type { Scene } from "@reearth/services/api/sceneApi";
import type { Story } from "@reearth/services/api/storytellingApi/utils";
import { metrics } from "@reearth/services/theme";

import type { LayerNameUpdateProps, LayerVisibilityUpdateProps } from "./useLayers";

type Props = {
  tab: Tab;
  nlsLayers: NLSLayer[];

  // storytelling
  selectedStory?: Story;
  currentPageId?: string;
  onCurrentPageChange: (id: string) => void;
  onPageDuplicate: (id: string) => void;
  onPageDelete: (id: string) => void;
  onPageAdd: (isSwipeable: boolean) => void;
  onPageMove: (id: string, targetIndex: number) => void;

  // scene
  selectedSceneSetting?: string;
  onSceneSettingSelect: (groupId: string) => void;
  scene?: Scene;

  // layers
  selectedLayerId?: string;
  onLayerDelete: (id: string) => void;
  onLayerNameUpdate: (inp: LayerNameUpdateProps) => void;
  onLayerVisibilityUpate: (inp: LayerVisibilityUpdateProps) => void;
  onLayerSelect: (id: string) => void;
  onDataSourceManagerOpen: () => void;
  onFlyTo?: FlyTo;
  onPropertyUpdate?: (
    propertyId?: string,
    schemaItemId?: string,
    fieldId?: string,
    itemId?: string,
    vt?: ValueType,
    v?: ValueTypes[ValueType],
  ) => Promise<void>;
};

export default ({
  tab,
  nlsLayers,
  scene,
  selectedStory,
  selectedLayerId,
  selectedSceneSetting,
  currentPageId,
  onCurrentPageChange,
  onPageDuplicate,
  onPageDelete,
  onPageAdd,
  onPageMove,
  onLayerDelete,
  onLayerNameUpdate,
  onLayerSelect,
  onSceneSettingSelect,
  onDataSourceManagerOpen,
  onLayerVisibilityUpate,
  onFlyTo,
  onPropertyUpdate,
}: Props) => {
  const leftPanel = useMemo<ReactNode | undefined>(() => {
    switch (tab) {
      case "map":
        return (
          <Resizable
            direction="vertical"
            gutter="end"
            initialSize={metrics.propertyMenuWidth}
            minSize={metrics.propertyMenuMinWidth}
            localStorageKey="mapLeftPanel"
            tab="map">
            <MapSidePanel
              scene={scene}
              layers={nlsLayers}
              selectedLayerId={selectedLayerId}
              selectedSceneSetting={selectedSceneSetting}
              onLayerDelete={onLayerDelete}
              onLayerNameUpdate={onLayerNameUpdate}
              onLayerVisibilityUpate={onLayerVisibilityUpate}
              onLayerSelect={onLayerSelect}
              onSceneSettingSelect={onSceneSettingSelect}
              onDataSourceManagerOpen={onDataSourceManagerOpen}
              onFlyTo={onFlyTo}
            />
          </Resizable>
        );
      case "story":
        return (
          <Resizable
            direction="vertical"
            gutter="end"
            initialSize={metrics.propertyMenuWidth}
            minSize={metrics.propertyMenuMinWidth}
            localStorageKey="storyLeftPanel"
            tab="story">
            <StorySidePanel
              selectedStory={selectedStory}
              selectedPageId={currentPageId}
              onPageSelect={onCurrentPageChange}
              onPageDuplicate={onPageDuplicate}
              onPageDelete={onPageDelete}
              onPageAdd={onPageAdd}
              onPageMove={onPageMove}
              onPropertyUpdate={onPropertyUpdate}
            />
          </Resizable>
        );
      case "widgets":
      case "publish":
      default:
        return undefined;
    }
  }, [
    tab,
    scene,
    nlsLayers,
    selectedLayerId,
    selectedSceneSetting,
    onLayerDelete,
    onLayerNameUpdate,
    onLayerVisibilityUpate,
    onLayerSelect,
    onSceneSettingSelect,
    onDataSourceManagerOpen,
    onFlyTo,
    selectedStory,
    currentPageId,
    onCurrentPageChange,
    onPageDuplicate,
    onPageDelete,
    onPageAdd,
    onPageMove,
    onPropertyUpdate,
  ]);

  return {
    leftPanel,
  };
};
