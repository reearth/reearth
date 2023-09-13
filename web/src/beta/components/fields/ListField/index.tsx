import { useCallback, useState } from "react";

import Button from "@reearth/beta/components/Button";
import DragAndDropList, {
  Props as DragAndDropProps,
} from "@reearth/beta/components/DragAndDropList";
import Property from "@reearth/beta/components/fields";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

type ListItem = {
  id: string;
  value: string;
};

export type Props = {
  name?: string;
  description?: string;
  items: ListItem[];
  removeItem: (key: string) => void;
  addItem: () => void;
} & Pick<DragAndDropProps, "onItemDrop">;

// TODO: where would the field rendering logic go??

const ListField: React.FC<Props> = ({
  name,
  description,
  items,
  removeItem,
  addItem,
  onItemDrop,
}: Props) => {
  const t = useT();
  const [selected, setSelected] = useState<string | null>(null);

  const deleteItem = useCallback(() => {
    if (!selected) return;
    removeItem(selected);
    setSelected(null);
  }, [selected, removeItem]);

  const getId = useCallback(({ id }: ListItem) => {
    return id;
  }, []);

  return (
    <Property name={name} description={description}>
      <FieldWrapper>
        <DragAndDropList<ListItem>
          uniqueKey="ListField"
          items={items}
          onItemDrop={onItemDrop}
          getId={getId}
          renderItem={({ id, value }) => (
            <Item onClick={() => setSelected(id)} selected={selected === id}>
              {value}
            </Item>
          )}
          gap={0}
        />
      </FieldWrapper>
      <ButtonGroup>
        <ButtonWrapper
          onClick={deleteItem}
          icon="trash"
          buttonType="secondary"
          text={t("Remove")}
          size="medium"
          disabled={!selected}
        />
        <ButtonWrapper
          onClick={addItem}
          icon="plus"
          buttonType="secondary"
          text={t("Add Item")}
          size="medium"
        />
      </ButtonGroup>
    </Property>
  );
};

const FieldWrapper = styled.div`
  min-height: 84px;
  max-height: 224px;
  border-radius: 4px;
  border: 1px solid rgba(77, 83, 88, 1);
  overflow: auto;
`;

const Item = styled.p<{ selected: boolean }>`
  padding: 0 12px;
  height: 28px;
  font-size: 12px;
  cursor: pointer;
  background: ${({ theme, selected }) => (selected ? theme.select.main : "inherit")};
  &:hover {
    background: ${({ theme, selected }) => (selected ? theme.select.main : theme.bg[2])};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const ButtonWrapper = styled(Button)`
  height: 28px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export default ListField;
