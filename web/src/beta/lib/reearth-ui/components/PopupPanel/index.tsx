import { FC, ReactNode } from "react";

import { Button } from "@reearth/beta/lib/reearth-ui";
import { fonts, styled } from "@reearth/services/theme";

const DEFAULT_PANEL_WIDTH = 286;

export type PopupPanelProps = {
  title?: string;
  width?: number;
  children: ReactNode;
  onCancel?: () => void;
  onApply?: () => void;
};

export const PopupPanel: FC<PopupPanelProps> = ({ title, width, children, onCancel, onApply }) => {
  return (
    <Wrapper width={width}>
      <HeaderWrapper>
        <Title>{title}</Title>
        <Button iconButton icon="close" size="small" onClick={onCancel} appearance="simple" />
      </HeaderWrapper>
      <Content>{children}</Content>
      <ActionWrapper>
        <Button extendWidth size="small" title="Cancel" onClick={onCancel} />
        <Button extendWidth size="small" title="Apply" appearance="primary" onClick={onApply} />
      </ActionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ width?: number }>(({ width, theme }) => ({
  width: `${width ?? DEFAULT_PANEL_WIDTH}px`,
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.outline.weak}`,
  borderRadius: theme.radius.small,
  background: theme.bg[1],
  boxShadow: theme.shadow.popup,
}));

const HeaderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  padding: `${theme.spacing.smallest}px ${theme.spacing.small}px`,
  borderBottom: `1px solid ${theme.outline.weak}`,
  color: theme.content.main,
}));

const Title = styled("div")(() => ({
  flex: "1 0 0",
  fontSize: fonts.sizes.body,
  lineHeight: `${fonts.lineHeights.body}px`,
}));

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing.small,
  alignSelf: "stretch",
}));

const ActionWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  alignSelf: "stretch",
  padding: theme.spacing.small,
  borderTop: `1px solid ${theme.outline.weak}`,
  gap: theme.spacing.small,
}));
