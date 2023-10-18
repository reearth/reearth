import { ReactNode, useMemo } from "react";

import MapSidePanel from "@reearth/beta/features/Editor/tabs/map/LeftPanel";
import StorySidePanel from "@reearth/beta/features/Editor/tabs/story/LeftPanel";
import { Tab } from "@reearth/beta/features/Navbar";
import { FlyTo } from "@reearth/beta/lib/core/types";
import type { NLSLayer } from "@reearth/services/api/layersApi/utils";
import type { Story } from "@reearth/services/api/storytellingApi/utils";

import type { LayerNameUpdateProps } from "./useLayers";

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
  selectedSceneSetting?: boolean;
  onSceneSettingSelect: () => void;

  // layers
  selectedLayerId?: string;
  onLayerDelete: (id: string) => void;
  onLayerNameUpdate: (inp: LayerNameUpdateProps) => void;
  onLayerSelect: (id: string) => void;
  onDataSourceManagerOpen: () => void;
  onFlyTo?: FlyTo;
};

export default ({
  tab,
  nlsLayers,
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
  onFlyTo,
}: Props) => {
  const leftPanel = useMemo<ReactNode | undefined>(() => {
    switch (tab) {
      case "map":
        return (
          <MapSidePanel
            layers={nlsLayers}
            selectedLayerId={selectedLayerId}
            selectedSceneSetting={selectedSceneSetting}
            onLayerDelete={onLayerDelete}
            onLayerNameUpdate={onLayerNameUpdate}
            onLayerSelect={onLayerSelect}
            onSceneSettingSelect={onSceneSettingSelect}
            onDataSourceManagerOpen={onDataSourceManagerOpen}
            onFlyTo={onFlyTo}
          />
        );
      case "story":
        return (
          <StorySidePanel
            selectedStory={selectedStory}
            selectedPageId={currentPageId}
            onPageSelect={onCurrentPageChange}
            onPageDuplicate={onPageDuplicate}
            onPageDelete={onPageDelete}
            onPageAdd={onPageAdd}
            onPageMove={onPageMove}
          />
        );
      case "widgets":
      case "publish":
      default:
        return undefined;
    }
  }, [
    tab,
    nlsLayers,
    selectedLayerId,
    selectedSceneSetting,
    onLayerDelete,
    onLayerNameUpdate,
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
  ]);

  return {
    leftPanel,
  };
};
