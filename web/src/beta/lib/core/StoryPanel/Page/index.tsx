import { Fragment, useMemo } from "react";

import { convert } from "@reearth/services/api/propertyApi/utils";
import { InstallableStoryBlock } from "@reearth/services/api/storytellingApi/blocks";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import StoryBlock from "../Block";
import { GQLStoryPage } from "../hooks";
import SelectableArea from "../SelectableArea";

import BlockAddBar from "./BlockAddBar";
import useHooks from "./hooks";

type Props = {
  sceneId?: string;
  storyId?: string;
  page?: GQLStoryPage;
  selectedPageId?: string;
  installableStoryBlocks?: InstallableStoryBlock[];
  selectedStoryBlockId?: string;
  showPageSettings?: boolean;
  onPageSettingsToggle?: () => void;
  onPageSelect?: (pageId?: string | undefined) => void;
  onBlockSelect: (blockId?: string) => void;
};

const StoryPage: React.FC<Props> = ({
  sceneId,
  storyId,
  page,
  selectedPageId,
  installableStoryBlocks,
  selectedStoryBlockId,
  showPageSettings,
  onPageSettingsToggle,
  onPageSelect,
  onBlockSelect,
}) => {
  const t = useT();
  const propertyItems = useMemo(() => convert(page?.property), [page?.property]);

  const {
    openBlocksIndex,
    installedStoryBlocks,
    titleId,
    titleProperty,
    handleStoryBlockCreate,
    handleStoryBlockDelete,
    handleBlockOpen,
    handlePropertyValueUpdate,
  } = useHooks({
    sceneId,
    storyId,
    pageId: page?.id,
    propertyItems,
  });

  return (
    <SelectableArea
      title={page?.title ?? t("Page")}
      position="left-bottom"
      icon="storyPage"
      noBorder
      isSelected={selectedPageId === page?.id}
      propertyId={page?.property?.id}
      propertyItems={propertyItems}
      onClick={() => onPageSelect?.(page?.id)}
      showSettings={showPageSettings}
      onSettingsToggle={onPageSettingsToggle}>
      <Wrapper id={page?.id}>
        {titleProperty && (
          <StoryBlock
            block={{
              id: titleId,
              pluginId: "reearth",
              extensionId: "titleStoryBlock",
              title: titleProperty.title,
              property: {
                id: page?.property?.id ?? "",
                items: [titleProperty],
              },
            }}
            isSelected={selectedStoryBlockId === titleId}
            onClick={() => onBlockSelect(titleId)}
            onClickAway={onBlockSelect}
            onChange={handlePropertyValueUpdate}
          />
        )}
        <BlockAddBar
          openBlocks={openBlocksIndex === -1}
          installableStoryBlocks={installableStoryBlocks}
          onBlockOpen={() => handleBlockOpen(-1)}
          onBlockAdd={handleStoryBlockCreate(0)}
        />
        {installedStoryBlocks &&
          installedStoryBlocks.length > 0 &&
          installedStoryBlocks.map((b, idx) => (
            <Fragment key={idx}>
              <StoryBlock
                block={b}
                isSelected={selectedStoryBlockId === b.id}
                onClick={() => onBlockSelect(b.id)}
                onClickAway={onBlockSelect}
                onChange={handlePropertyValueUpdate}
                onRemove={handleStoryBlockDelete}
              />
              <BlockAddBar
                openBlocks={openBlocksIndex === idx}
                installableStoryBlocks={installableStoryBlocks}
                onBlockOpen={() => handleBlockOpen(idx)}
                onBlockAdd={handleStoryBlockCreate(idx + 1)}
              />
            </Fragment>
          ))}
      </Wrapper>
    </SelectableArea>
  );
};

export default StoryPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.content.weaker};
  padding: 20px;
  box-sizing: border-box;
`;
