import { Fragment, useCallback, useState } from "react";

import Text from "@reearth/beta/components/Text";
import { InstallableStoryBlock } from "@reearth/services/api/storytellingApi/blocks";
import { styled } from "@reearth/services/theme";

import BlockAddBar from "./BlockAddBar";
import useHooks from "./hooks";

type Props = {
  sceneId?: string;
  storyId?: string;
  pageId?: string;
  pageTitle?: string;
  installableStoryBlocks?: InstallableStoryBlock[];
};

const StoryPage: React.FC<Props> = ({
  sceneId,
  storyId,
  pageId,
  pageTitle,
  installableStoryBlocks,
}) => {
  const [openBlocks, setOpenBlocks] = useState(false);

  const { installedStoryBlocks, handleStoryBlockCreate } = useHooks({ sceneId, storyId, pageId });

  const handleBlockOpen = useCallback(() => {
    setOpenBlocks(o => !o);
  }, []);

  const handleBlockAdd = useCallback(
    (extensionId: string, pluginId: string) => {
      handleStoryBlockCreate(extensionId, pluginId);
    },
    [handleStoryBlockCreate],
  );

  return (
    <Wrapper>
      <Text size="h2" customColor>
        {pageTitle ?? "No Title"}
      </Text>
      {installedStoryBlocks && installedStoryBlocks.length > 0 ? (
        installedStoryBlocks?.map((b, idx) => (
          <Fragment key={idx}>
            <Block>{b.title}</Block>
            <BlockAddBar
              openBlocks={openBlocks}
              installableStoryBlocks={installableStoryBlocks}
              onBlockOpen={handleBlockOpen}
              onBlockAdd={handleBlockAdd}
            />
          </Fragment>
        ))
      ) : (
        <BlockAddBar
          openBlocks={openBlocks}
          installableStoryBlocks={installableStoryBlocks}
          onBlockOpen={handleBlockOpen}
          onBlockAdd={handleBlockAdd}
        />
      )}
    </Wrapper>
  );
};

export default StoryPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.content.weaker};
`;

const Block = styled.div`
  padding: 5px;
  height: 50px;
  border: 1px dotted black;
`;
