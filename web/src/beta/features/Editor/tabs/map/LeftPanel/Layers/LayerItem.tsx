import { MouseEvent, useCallback, useState } from "react";

import TextInput from "@reearth/beta/components/fields/common/TextInput";
import ListItem from "@reearth/beta/components/ListItem";
import PopoverMenuContent from "@reearth/beta/components/PopoverMenuContent";
import Text from "@reearth/beta/components/Text";
import type {
  LayerNameUpdateProps,
  LayerVisibilityUpdateProps,
} from "@reearth/beta/features/Editor/useLayers";
import useDoubleClick from "@reearth/beta/utils/use-double-click";
import { styled } from "@reearth/services/theme";

type LayerItemProps = {
  id: string;
  layerTitle: string;
  isSelected: boolean;
  visible: boolean;
  onDelete: () => void;
  onSelect: () => void;
  onLayerNameUpdate: (inp: LayerNameUpdateProps) => void;
  onLayerVisibilityUpate: (inp: LayerVisibilityUpdateProps) => void;
};

const LayerItem = ({
  id,
  layerTitle,
  isSelected,
  visible,
  onDelete,
  onSelect,
  onLayerNameUpdate,
  onLayerVisibilityUpate,
}: LayerItemProps) => {
  const [isActionOpen, setActionOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(layerTitle);
  const [isVisible, setIsVisible] = useState(visible);
  const [value, setValue] = useState(isVisible ? "V" : "");

  const handleActionMenuToggle = useCallback(() => setActionOpen(prev => !prev), []);

  const [handleSingleClick, handleDoubleClick] = useDoubleClick(
    () => onSelect?.(),
    () => setIsEditing(true),
  );

  const handleChange = useCallback((newTitle: string) => setNewValue(newTitle), []);

  const handleTitleSubmit = useCallback(() => {
    setIsEditing(false);
    if (newValue.trim() !== "") {
      onLayerNameUpdate({ layerId: id, name: newValue });
    }
  }, [id, newValue, onLayerNameUpdate]);

  const handleEditExit = useCallback(
    (e?: React.KeyboardEvent<HTMLInputElement>) => {
      if (layerTitle !== newValue && e?.key !== "Escape") {
        handleTitleSubmit();
      } else {
        setNewValue(layerTitle);
      }
      setIsEditing(false);
    },
    [layerTitle, newValue, handleTitleSubmit],
  );

  const handleUpdateVisibility = useCallback(
    (e?: MouseEvent<Element>) => {
      e?.stopPropagation();
      const newVisibility = !isVisible;
      onLayerVisibilityUpate({ layerId: id, visible: newVisibility });
      setIsVisible(newVisibility);
      setValue(isVisible ? "" : "V");
    },
    [id, isVisible, onLayerVisibilityUpate],
  );

  return (
    <ListItem
      isSelected={isSelected}
      isOpenAction={isActionOpen}
      actionPlacement="bottom-end"
      onItemClick={handleSingleClick}
      onActionClick={handleActionMenuToggle}
      onOpenChange={isOpen => setActionOpen(!!isOpen)}
      actionContent={
        <PopoverMenuContent
          size="sm"
          items={[
            {
              name: "Delete",
              icon: "bin",
              onClick: onDelete,
            },
          ]}
        />
      }>
      <ContentWrapper>
        {isEditing ? (
          <StyledTextInput
            value={newValue}
            timeout={0}
            autoFocus
            onChange={handleChange}
            onExit={handleEditExit}
            onBlur={handleEditExit}
          />
        ) : (
          <LayerTitle onDoubleClick={handleDoubleClick}>{layerTitle}</LayerTitle>
        )}
        <HideLayer onClick={handleUpdateVisibility}>
          <Text size="footnote">{value}</Text>
        </HideLayer>
      </ContentWrapper>
    </ListItem>
  );
};

export default LayerItem;

const LayerTitle = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.content.main};
  text-overflow: ellipsis;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HideLayer = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.bg[1]};
  color: ${({ theme }) => theme.content.strong};
  background: ${({ theme }) => theme.bg[2]};

  :hover {
    background: ${({ theme }) => theme.bg[2]};
  }
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
  font-size: 12px;
  color: ${({ theme }) => theme.content.main};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
