import type { Identifier } from "dnd-core";
import type { FC, ReactNode } from "react";
import { memo, useRef, createContext, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import { styled } from "@reearth/services/theme";

type DragItem = {
  index: number;
  id: string;
  type: string;
};

type Props = {
  itemGroupKey: string;
  id: string;
  index: number;
  item?: any;
  onItemMove: (dragIndex: number, hoverIndex: number) => void;
  onItemDropOnItem: (dropIndex: number) => void;
  onItemDropOutside: () => void;
  children: ReactNode;
};

const ItemContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

export const useItemContext = () => useContext(ItemContext);
const Item: FC<Props> = ({
  itemGroupKey,
  id,
  children,
  index,
  item,
  onItemMove,
  onItemDropOnItem,
  onItemDropOutside,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: itemGroupKey,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Get vertical middle Y
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      onItemMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: itemGroupKey,
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        onItemDropOnItem(item.index);
      } else {
        onItemDropOutside();
      }
    },
  });

  drag(drop(ref));
  // eslint-disable-next-line no-prototype-builtins
  return item.hasOwnProperty("extensionId") ? (
    <ItemContext.Provider value={ref}>
      <SItem ref={preview} data-handler-id={handlerId} isDragging={isDragging}>
        {children}
      </SItem>
    </ItemContext.Provider>
  ) : (
    <SItem ref={ref} data-handler-id={handlerId} isDragging={isDragging}>
      {children}
    </SItem>
  );
};

export default memo(Item);

const SItem = styled.div<{ isDragging: boolean }>`
  ${({ isDragging }) => `opacity: ${isDragging ? 0 : 1};`}
  cursor: move;
`;
