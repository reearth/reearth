import { ReactNode, useMemo } from "react";

import MapSidePanel from "@reearth/beta/features/Editor/tabs/map/LeftPanel";
import StorySidePanel from "@reearth/beta/features/Editor/tabs/story/LeftPanel";
import { Tab } from "@reearth/beta/features/Navbar";
import type { NLSLayer } from "@reearth/services/api/layersApi/utils";
import type { Page, Story } from "@reearth/services/api/storytellingApi/utils";

import type { LayerNameUpdateProps } from "./useLayers";

type Props = {
  tab: Tab;
  nlsLayers: NLSLayer[];

  // storytelling
  selectedStory?: Story;
  currentPage?: Page;
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
};

export default ({
  tab,
  nlsLayers,
  selectedStory,
  selectedLayerId,
  selectedSceneSetting,
  currentPage,
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
          />
        );
      case "story":
        return (
          <StorySidePanel
            selectedStory={selectedStory}
            selectedPage={currentPage}
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
    selectedStory,
    selectedLayerId,
    selectedSceneSetting,
    currentPage,
    onLayerDelete,
    onLayerNameUpdate,
    onLayerSelect,
    onSceneSettingSelect,
    onDataSourceManagerOpen,
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
