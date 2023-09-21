import {
  Fragment,
  useMemo,
  MouseEvent,
  useRef,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useDragDropManager } from "react-dnd";

import DragAndDropList from "@reearth/beta/components/DragAndDropList";
import { useScroll } from "@reearth/beta/components/DragAndDropList/scrollItem";
import { Provider as DndProvider } from "@reearth/beta/utils/use-dnd";
import type { Spacing, ValueType, ValueTypes } from "@reearth/beta/utils/value";
import type { InstallableStoryBlock } from "@reearth/services/api/storytellingApi/blocks";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import StoryBlock from "../Block";
import type { Page } from "../hooks";
import SelectableArea from "../SelectableArea";

import BlockAddBar from "./BlockAddBar";
import useHooks from "./hooks";

type Props = {
  page?: Page;
  selectedPageId?: string;
  installableStoryBlocks?: InstallableStoryBlock[];
  selectedStoryBlockId?: string;
  showPageSettings?: boolean;
  isEditable?: boolean;
  onPageSettingsToggle?: () => void;
  onPageSelect?: (pageId?: string | undefined) => void;
  onBlockCreate?: (index?: number) => (extensionId?: string, pluginId?: string) => Promise<void>;
  onBlockDelete?: (blockId?: string) => Promise<void>;
  onBlockSelect?: (blockId?: string) => void;
  onPropertyUpdate?: (
    propertyId?: string,
    schemaItemId?: string,
    fieldId?: string,
    itemId?: string,
    vt?: ValueType,
    v?: ValueTypes[ValueType],
  ) => Promise<void>;
  handleMoveBlock: (id: string, targetId: number, blockId: string) => void;
};

const StoryPageContext = createContext({
  isHovered: false,
  handleOnMouseOut: () => {},
  handleOnMouseOver: (e: MouseEvent<HTMLDivElement>) => {
    e;
  },
});

export const useStoryPageContext = () => useContext(StoryPageContext);

const StoryPage: React.FC<Props> = ({
  page,
  selectedPageId,
  installableStoryBlocks,
  selectedStoryBlockId,
  showPageSettings,
  isEditable,
  onPageSettingsToggle,
  onPageSelect,
  onBlockCreate,
  onBlockDelete,
  onBlockSelect,
  onPropertyUpdate,
  handleMoveBlock,
}) => {
  const t = useT();
  const propertyItems = useMemo(() => page?.property.items, [page?.property]);

  const storyBlocks = useMemo(() => page?.blocks, [page?.blocks]);

  const {
    openBlocksIndex,
    titleId,
    titleProperty,
    isHovered,
    handleOnMouseOver,
    handleOnMouseOut,
    handleBlockOpen,
  } = useHooks({
    pageId: page?.id,
    propertyItems,
  });

  const [items, setItems] = useState(storyBlocks ? storyBlocks : []);
  const listRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    storyBlocks && setItems(storyBlocks);
  }, [storyBlocks]);

  const { updatePosition } = useScroll(listRef);

  const dragDropManager = useDragDropManager();
  const monitor = dragDropManager.getMonitor();

  useEffect(() => {
    const unsubscribe = monitor.subscribeToOffsetChange(() => {
      const offset = monitor.getSourceClientOffset()?.y as number;
      updatePosition({ position: offset, isScrollAllowed: true });
    });
    return unsubscribe;
  }, [monitor, updatePosition]);

  return (
    <DndProvider>
      <StoryPageContext.Provider value={{ isHovered, handleOnMouseOver, handleOnMouseOut }}>
        <SelectableArea
          title={page?.title ?? t("Page")}
          position="left-bottom"
          icon="storyPage"
          noBorder
          isSelected={selectedPageId === page?.id}
          propertyId={page?.property?.id}
          propertyItems={propertyItems}
          showSettings={showPageSettings}
          isEditable={isEditable}
          onClick={() => onPageSelect?.(page?.id)}
          onClickAway={onPageSelect}
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
                isEditable={isEditable}
                isSelected={selectedStoryBlockId === titleId}
                onClick={() => onBlockSelect?.(titleId)}
                onClickAway={onBlockSelect}
                onChange={onPropertyUpdate}
              />
            )}
            {isEditable && (
              <BlockAddBar
                openBlocks={openBlocksIndex === -1}
                installableStoryBlocks={installableStoryBlocks}
                onBlockOpen={() => handleBlockOpen(-1)}
                onBlockAdd={onBlockCreate?.(0)}
              />
            )}
            {storyBlocks && storyBlocks.length > 0 && (
              <DragAndDropList
                uniqueKey="LeftPanelPages"
                gap={8}
                items={items}
                getId={item => item.id}
                onItemDrop={async (item, index) => {
                  setItems(old => {
                    const items = [...old];
                    items.splice(
                      old.findIndex(o => o.id === item.id),
                      1,
                    );
                    items.splice(index, 0, item);
                    return items;
                  });
                  await handleMoveBlock(page?.id || "", index, item.id);
                }}
                renderItem={(b, idx) => {
                  return (
                    <Fragment key={idx}>
                      <StoryBlock
                        block={b}
                        isSelected={selectedStoryBlockId === b.id}
                        isEditable={isEditable}
                        onClick={() => onBlockSelect?.(b.id)}
                        onClickAway={onBlockSelect}
                        onChange={onPropertyUpdate}
                        onRemove={onBlockDelete}
                      />
                      {isEditable && (
                        <BlockAddBar
                          openBlocks={openBlocksIndex === idx}
                          installableStoryBlocks={installableStoryBlocks}
                          onBlockOpen={() => handleBlockOpen(idx)}
                          onBlockAdd={onBlockCreate?.(idx + 1)}
                        />
                      )}
                    </Fragment>
                  );
                }}
              />
            )}
          </Wrapper>
        </SelectableArea>
      </StoryPageContext.Provider>
    </DndProvider>
  );
};

export default StoryPage;

const Wrapper = styled.div<{ padding?: Spacing }>`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.content.weaker};

  padding: 20px;
  padding-top: ${({ padding }) => padding?.top + "px" ?? 0};
  padding-bottom: ${({ padding }) => padding?.bottom + "px" ?? 0};
  padding-left: ${({ padding }) => padding?.left + "px" ?? 0};
  padding-right: ${({ padding }) => padding?.right + "px" ?? 0};

  box-sizing: border-box;
`;
