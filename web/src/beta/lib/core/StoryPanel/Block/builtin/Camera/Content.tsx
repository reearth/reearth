import { useCallback, useContext, useMemo, useState } from "react";

import Button from "@reearth/beta/components/Button";
import { useVisualizer } from "@reearth/beta/lib/core/Visualizer";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import { BlockContext } from "../common/Wrapper";

import CameraEditor, { type CameraBlock as CameraBlockType } from "./Editor";

type Props = {
  propertyId?: string;
  cameraButtons: CameraBlockType[];
  isEditable?: boolean;
};

const Content: React.FC<Props> = ({ propertyId, cameraButtons, isEditable }) => {
  const t = useT();
  const context = useContext(BlockContext);
  const visualizer = useVisualizer();
  const [selected, setSelected] = useState<string>(cameraButtons[0]?.id);

  const handleFlyTo = useMemo(() => visualizer.current?.engine.flyTo, [visualizer]);

  const handleClick = useCallback(
    (itemId: string) => {
      if (isEditable) {
        setSelected(itemId);
        return;
      }
      const item = cameraButtons.find(i => i.id === itemId);
      if (!item?.cameraPosition?.value) return;
      handleFlyTo?.(item.cameraPosition?.value);
    },
    [cameraButtons, isEditable, handleFlyTo],
  );

  return (
    <Wrapper>
      <ButtonWrapper>
        {cameraButtons.map(({ title, color, bgColor, id }) => {
          return (
            <StyledButton
              key={id}
              color={color?.value}
              bgColor={bgColor?.value}
              icon="cameraButtonStoryBlock"
              buttonType="primary"
              text={title?.value ?? t("New Camera")}
              size="small"
              onClick={() => handleClick(id)}
            />
          );
        })}
      </ButtonWrapper>
      {context?.editMode && (
        <CameraEditor
          items={cameraButtons}
          propertyId={propertyId}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  max-width: 400px;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)<{ color?: string; bgColor?: string }>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border-color: ${({ color }) => color};

  &:hover {
    color: ${({ bgColor }) => bgColor};
    background-color: ${({ color }) => color};
  }
`;