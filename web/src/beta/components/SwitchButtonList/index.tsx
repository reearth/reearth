import type { FC } from "react";

import Text from "@reearth/beta/components/Text";
import useManageSwitchState, { SwitchField } from "@reearth/beta/hooks/useManageSwitchState/hooks";
import { styled, useTheme } from "@reearth/services/theme";

type AdditionalField = {
  text: string;
};
type SwitchAdditionalField = SwitchField<AdditionalField>;

export type Props = {
  list: SwitchAdditionalField[];
  onClick?: (id: string) => void;
};
const SwitchButtonList: FC<Props> = ({ list, onClick }) => {
  const theme = useTheme();
  const { handleActivate, fields } = useManageSwitchState({ fields: list });
  const handleClick = (id: string) => {
    handleActivate(id);
    onClick?.(id);
  };
  return (
    <>
      {fields.map((item, index) => (
        <SwitchButton
          key={item.id}
          disabled={!!item?.active}
          onClick={() => handleClick(item.id)}
          first={index === 0}
          end={index === fields.length - 1}>
          <Text
            size="footnote"
            color={item.active ? theme.general.content.strong : theme.general.content.main}>
            {item.text}
          </Text>
        </SwitchButton>
      ))}
    </>
  );
};
const SwitchButton = styled.button<{
  disabled: boolean;
  first: boolean;
  end: boolean;
}>`
  background: ${props =>
    props.disabled ? props.theme.general.select : props.theme.general.bg.strong};
  padding: 8px;
  height: 32px;
  border-radius: ${props =>
    props.first ? "4px 0px 0px 4px" : props.end ? "0px 4px 4px 0px" : "0px"};
  :hover {
    background: ${props => props.theme.general.select};
    transition: all 0.5s ease;
  }
  :not(:hover) {
    transition: all 0.5s ease;
  }
`;

export default SwitchButtonList;
