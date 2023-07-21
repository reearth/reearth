import Resizable from "@reearth/beta/components/Resizable";
import StoryPanel from "@reearth/beta/features/Editor/tabs/story/StoryPanel";
import useLeftPanel from "@reearth/beta/features/Editor/useLeftPanel";
import useRightPanel from "@reearth/beta/features/Editor/useRightPanel";
import useSecondaryNav from "@reearth/beta/features/Editor/useSecondaryNav";
import Visualizer from "@reearth/beta/features/Editor/Visualizer";
import Navbar, { Tab } from "@reearth/beta/features/Navbar";
import { Provider as DndProvider } from "@reearth/beta/utils/use-dnd";
import { metrics, styled } from "@reearth/services/theme";

import useHooks from "./hooks";

type Props = {
  sceneId: string;
  projectId?: string; // gotten through injection
  workspaceId?: string; // gotten through injection
  tab: Tab;
};

const Editor: React.FC<Props> = ({ sceneId, projectId, workspaceId, tab }) => {
  const {
    selectedDevice,
    visualizerWidth,
    showWidgetEditor,
    handleDeviceChange,
    handleWidgetEditorToggle,
  } = useHooks({ tab });

  const { leftPanel } = useLeftPanel({ tab });
  const { rightPanel } = useRightPanel({ tab, sceneId });
  const { secondaryNav } = useSecondaryNav({
    tab,
    selectedDevice,
    showWidgetEditor,
    handleDeviceChange,
    handleWidgetEditorToggle,
  });

  const isStory = tab === "story";

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
              minSize={metrics.propertyMenuMinWidth}>
              {leftPanel}
            </Resizable>
          )}
          <Center>
            {secondaryNav}
            <CenterContents hasNav={!!secondaryNav}>
              {isStory && <StoryPanel />}
              <VisualizerWrapper tab={tab} visualizerWidth={visualizerWidth}>
                <Visualizer sceneId={sceneId} />
              </VisualizerWrapper>
            </CenterContents>
          </Center>
          {rightPanel && (
            <Resizable
              direction="vertical"
              gutter="start"
              initialSize={metrics.propertyMenuWidth}
              minSize={metrics.propertyMenuMinWidth}>
              {rightPanel}
            </Resizable>
          )}
        </MainSection>
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
  color: ${({ theme }) => theme.general.content.main};
`;

const MainSection = styled.div`
  display: flex;
  flex-grow: 1;
  height: 0;
  background: ${({ theme }) => theme.general.bg.veryStrong};
`;

const Center = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CenterContents = styled.div<{ hasNav?: boolean }>`
  display: flex;
  justify-content: center;
  height: ${({ hasNav }) => (hasNav ? "calc(100% - 52px)" : "100%")};
`;

const VisualizerWrapper = styled.div<{ tab?: Tab; visualizerWidth?: string | number }>`
  border-radius: 4px;
  width: ${({ visualizerWidth }) =>
    typeof visualizerWidth === "number" ? `${visualizerWidth}px` : visualizerWidth};
`;
