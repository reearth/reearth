import { useState, ReactNode, useEffect } from "react";

import { styled, useTheme } from "@reearth/services/theme";

import Icon from "../Icon";
import Text from "../Text";

const SidePanelSectionField: React.FC<{
  className?: string;
  title?: string;
  startCollapsed?: boolean;
  children?: ReactNode;
}> = ({ className, title, startCollapsed, children }) => {
  const theme = useTheme();
  const [opened, setOpened] = useState<boolean>();

  useEffect(() => {
    setOpened(!startCollapsed ?? true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Field className={className}>
      {title && (
        <Header onClick={() => setOpened(!opened)}>
          <Text size="body" color={theme.content.main}>
            {title}
          </Text>
          <ArrowIcon icon="arrowToggle" size={12} color={theme.content.main} opened={opened} />
        </Header>
      )}
      {opened && children && <Content>{children}</Content>}
    </Field>
  );
};

const Field = styled.div`
  background: ${({ theme }) => theme.bg[1]};
  border-radius: 4px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
  height: 38px;
`;

const ArrowIcon = styled(Icon)<{ opened?: boolean }>`
  transform: rotate(${props => (props.opened ? 90 : 180)}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default SidePanelSectionField;
