import { FC, ReactNode, useCallback, useEffect, useState } from "react";

import { styled } from "@reearth/services/theme";

import { Icon } from "../Icon";
import { Typography } from "../Typography";

export type CollapseProps = {
  title?: string;
  background?: string;
  headerBg?: string;
  size?: "normal" | "small";
  collapsed?: boolean;
  noPadding?: boolean;
  disabled?: boolean;
  actions?: ReactNode;
  children: ReactNode;
  onCollapse?: (collapsed: boolean) => void;
};

export const Collapse: FC<CollapseProps> = ({
  title,
  background,
  headerBg,
  size = "normal",
  collapsed,
  disabled,
  noPadding,
  actions,
  children,
  onCollapse,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed ?? false);

  useEffect(() => {
    setIsCollapsed(collapsed ?? false);
  }, [collapsed]);

  const handleCollapse = useCallback(() => {
    if (disabled) return;
    setIsCollapsed(!isCollapsed);
    onCollapse?.(!isCollapsed);
  }, [disabled, isCollapsed, onCollapse]);

  return (
    <StyledWrapper>
      <StyledHeader
        onClick={handleCollapse}
        isCollapsed={isCollapsed}
        size={size}
        headerBg={headerBg}
        disabled={disabled}>
        <Typography size="body">{title}</Typography>
        <ActionsWapper>
          {actions}
          {!disabled && (
            <IconWrapper isCollapsed={isCollapsed}>
              <Icon size="small" icon="triangle" />
            </IconWrapper>
          )}
        </ActionsWapper>
      </StyledHeader>
      {!isCollapsed && (
        <ChildWrapper size={size} background={background} noPadding={noPadding}>
          {children}
        </ChildWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled("div")<{
  background?: string;
}>(({ theme }) => ({
  position: "relative",
  borderRadius: `${theme.radius.small}px`,
  flexGrow: 1,
  flexShrink: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
}));

const StyledHeader = styled("div")<{
  size?: "normal" | "small";
  headerBg?: string;
  isCollapsed?: boolean;
  disabled?: boolean;
}>(({ headerBg, size, isCollapsed, disabled, theme }) => ({
  display: "flex",
  borderRadius: isCollapsed
    ? `${theme.radius.small}px`
    : `${theme.radius.small}px ${theme.radius.small}px 0px 0px`,
  padding:
    size === "normal"
      ? `${theme.spacing.small}px`
      : `${theme.spacing.smallest}px ${theme.spacing.small}px`,
  minHeight: size === "normal" ? "40px" : "28px",
  justifyContent: "space-between",
  alignItems: "center",
  color: `${theme.content.main}`,
  cursor: disabled ? "auto" : "pointer",
  backgroundColor: headerBg ?? "",
  fontSize: 0,
}));

const ActionsWapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.micro,
}));

const ChildWrapper = styled("div")<{
  size?: "normal" | "small";
  background?: string;
  noPadding?: boolean;
}>(({ size, background, noPadding, theme }) => ({
  position: "relative",
  backgroundColor: background ? background : `${theme.bg[1]}`,
  padding: noPadding
    ? 0
    : size === "normal"
    ? `${theme.spacing.small}px`
    : `${theme.spacing.smallest}px`,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
}));

const IconWrapper = styled("div")<{
  isCollapsed?: boolean;
}>(({ isCollapsed }) => ({
  rotate: isCollapsed ? "0deg" : "-90deg",
  transition: "rotate 0.2s ease-in",
}));
