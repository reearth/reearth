import { styled } from "@reearth/services/theme";

import type { ComponentProps as WidgetProps } from "../..";
import { useVisible } from "../../useVisible";

import MenuButton, { Button as ButtonType, MenuItem as MenuItemType } from "./MenuButton";

export type Props = WidgetProps<Property>;
export type Button = ButtonType;
export type MenuItem = MenuItemType;
export type Property = {
  default?: Button;
  menu?: MenuItem[];
};

const Menu = ({
  widget,
  theme,
  onVisibilityChange,
  context: { onFlyTo } = {},
}: Props): JSX.Element | null => {
  const { default: button, menu: menuItems } = widget.property ?? {};

  useVisible({
    visible: widget.property?.default?.visible,
    onVisibilityChange,
  });

  return (
    <Wrapper>
      <MenuButton
        theme={theme}
        button={button}
        location={widget.layout?.location}
        align={widget.layout?.align}
        menuItems={menuItems}
        onFlyTo={onFlyTo}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Menu;
