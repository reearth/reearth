import { useState } from "react";

import Resizable from "@reearth/beta/components/Resizable";
import useBottomPanel from "@reearth/beta/features/Editor/useBottomPanel";
import useLeftPanel from "@reearth/beta/features/Editor/useLeftPanel";
import useRightPanel from "@reearth/beta/features/Editor/useRightPanel";
import useSecondaryNavbar from "@reearth/beta/features/Editor/useSecondaryNavbar";
import useStorytelling from "@reearth/beta/features/Editor/useStorytelling";
import Visualizer from "@reearth/beta/features/Editor/Visualizer";
import Navbar, { type Tab } from "@reearth/beta/features/Navbar";
import { Provider as DndProvider } from "@reearth/beta/utils/use-dnd";
import { metrics, styled } from "@reearth/services/theme";

import DataSourceManager from "./DataSourceManager";
import useHooks from "./hooks";
import { navbarHeight } from "./SecondaryNav";
import useAppearances from "./useAppearances";
import useLayers from "./useLayers";

type Props = {
  sceneId: string;
  tab: Tab;
  projectId?: string;
  workspaceId?: string;
};

const Editor: React.FC<Props> = ({ sceneId, projectId, workspaceId, tab }) => {
  const {
    visualizerRef,
    selectedSceneSetting,
    selectedDevice,
    selectedProjectType,
    visualizerWidth,
    showWidgetEditor,
    showDataSourceManager,
    currentCamera,
    handleDataSourceManagerCloser,
    handleDataSourceManagerOpener,
    handleSceneSettingSelect,
    handleDeviceChange,
    handleProjectTypeChange,
    handleWidgetEditorToggle,
    handleFlyTo,
    handleCameraUpdate,
  } = useHooks({ sceneId, tab });

  const {
    selectedStory,
    currentPage,
    isAutoScrolling,
    installableStoryBlocks,
    handleCurrentPageChange,
    handlePageDuplicate,
    handlePageDelete,
    handlePageAdd,
    handlePageMove,
    handleStoryBlockMove: onStoryBlockMove,
  } = useStorytelling({
    sceneId,
    onFlyTo: handleFlyTo,
  });

  const {
    nlsLayers,
    selectedLayer,
    setSelectedLayerId,
    handleLayerAdd,
    handleLayerDelete,
    handleLayerSelect,
    handleLayerNameUpdate,
    handleLayerConfigUpdate,
  } = useLayers({
    sceneId,
  });

  const handleLayerSelected = (layerId: string) => {
    setSelectedAppearanceId(undefined);
    handleLayerSelect(layerId);
  };

  const {
    appearances,
    selectedAppearance,
    setSelectedAppearanceId,
    handleAppearanceAdd,
    handleAppearanceDelete,
    handleAppearanceNameUpdate,
    handleAppearanceValueUpdate,
    handleAppearanceSelect,
  } = useAppearances({ sceneId });

  const handleAppearanceSelected = (appearanceId: string) => {
    setSelectedLayerId(undefined);
    handleAppearanceSelect(appearanceId);
  };

  const { leftPanel } = useLeftPanel({
    tab,
    nlsLayers,
    selectedStory,
    selectedLayerId: selectedLayer?.id,
    currentPageId: currentPage?.id,
    selectedSceneSetting,
    onCurrentPageChange: handleCurrentPageChange,
    onPageDuplicate: handlePageDuplicate,
    onPageDelete: handlePageDelete,
    onPageAdd: handlePageAdd,
    onPageMove: handlePageMove,
    onLayerDelete: handleLayerDelete,
    onLayerSelect: handleLayerSelected,
    onLayerNameUpdate: handleLayerNameUpdate,
    onSceneSettingSelect: handleSceneSettingSelect,
    onDataSourceManagerOpen: handleDataSourceManagerOpener,
  });

  const { rightPanel } = useRightPanel({
    appearances,
    tab,
    sceneId,
    nlsLayers,
    currentPage,
    currentCamera,
    showSceneSettings: selectedSceneSetting,
    selectedAppearanceId: selectedAppearance?.id,
    selectedLayerId: selectedLayer?.id,
    onFlyTo: handleFlyTo,
    onAppearanceValueUpdate: handleAppearanceValueUpdate,
    onLayerConfigUpdate: handleLayerConfigUpdate,
  });

  const { bottomPanel } = useBottomPanel({
    tab,
    sceneId,
    appearances,
    selectedAppearanceId: selectedAppearance?.id,
    onAppearanceAdd: handleAppearanceAdd,
    onAppearanceDelete: handleAppearanceDelete,
    onAppearanceNameUpdate: handleAppearanceNameUpdate,
    onAppearanceSelect: handleAppearanceSelected,
  });

  const { secondaryNavbar } = useSecondaryNavbar({
    tab,
    projectId,
    selectedDevice,
    selectedProjectType,
    showWidgetEditor,
    handleProjectTypeChange,
    handleDeviceChange,
    handleWidgetEditorToggle,
  });

  const [leftPanelSize, setLeftPanelSize] = useState(metrics.propertyMenuWidth);
  const [rightPanelSize, setRightPanelSize] = useState(metrics.propertyMenuWidth);

  return (
    <DndProvider>
      <Wrapper>
        <Navbar
          sceneId={sceneId}
          projectId={projectId}
          workspaceId={workspaceId}
          currentTab={tab}
        />
        <MainSection>
          {leftPanel && (
            <Resizable
              direction="vertical"
              gutter="end"
              initialSize={metrics.propertyMenuWidth}
              minSize={metrics.propertyMenuMinWidth}
              onResizeEnd={newSize => setLeftPanelSize(newSize)}>
              {leftPanel}
            </Resizable>
          )}
          <Center>
            {secondaryNavbar}
            <VisualizerWrapper
              tab={tab}
              hasNav={!!secondaryNavbar}
              visualizerWidth={visualizerWidth}>
              <Visualizer
                inEditor
                visualizerRef={visualizerRef}
                sceneId={sceneId}
                showStoryPanel={selectedProjectType === "story"}
                selectedStory={selectedStory}
                currentPageId={currentPage?.id}
                isAutoScrolling={isAutoScrolling}
                installableBlocks={installableStoryBlocks}
                currentCamera={currentCamera}
                onCurrentPageChange={handleCurrentPageChange}
                onStoryBlockMove={onStoryBlockMove}
                onCameraChange={handleCameraUpdate}
              />
            </VisualizerWrapper>
          </Center>
          {rightPanel && (
            <Resizable
              direction="vertical"
              gutter="start"
              initialSize={metrics.propertyMenuWidth}
              minSize={metrics.propertyMenuMinWidth}
              onResizeEnd={newSize => setRightPanelSize(newSize)}>
              {rightPanel}
            </Resizable>
          )}
        </MainSection>
        <BottomPanelWrapper leftSize={leftPanelSize} rightSize={rightPanelSize}>
          {bottomPanel && (
            <Resizable
              direction="horizontal"
              gutter="start"
              initialSize={metrics.appearancePanelMinWidth}
              minSize={metrics.appearancePanelMinWidth}>
              {bottomPanel}
            </Resizable>
          )}
        </BottomPanelWrapper>
        {showDataSourceManager && (
          <DataSourceManager
            sceneId={sceneId}
            onClose={handleDataSourceManagerCloser}
            onSubmit={handleLayerAdd}
          />
        )}
      </Wrapper>
    </DndProvider>
  );
};

export default Editor;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.content.main};
`;

const MainSection = styled.div`
  display: flex;
  flex-grow: 1;
  height: 0;
  background: ${({ theme }) => theme.bg[0]};
`;

const BottomPanelWrapper = styled.div<{
  leftSize: number;
  rightSize: number;
}>`
  position: relative;
  z-index: 1; // To ensure it's above other content, adjust as needed

  & > div {
    // Targeting the Resizable component
    position: absolute;
    bottom: 0;
    left: ${({ leftSize }) => `${leftSize}px`};
    right: ${({ rightSize }) => `${rightSize}px`};
  }
`;

const Center = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const VisualizerWrapper = styled.div<{
  tab?: Tab;
  hasNav?: boolean;
  visualizerWidth?: string | number;
}>`
  border-radius: 4px;
  height: ${({ hasNav }) => (hasNav ? `calc(100% - ${navbarHeight})` : "100%")};
  width: ${({ visualizerWidth }) =>
    typeof visualizerWidth === "number" ? `${visualizerWidth}px` : visualizerWidth};
`;
