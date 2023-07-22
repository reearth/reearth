import { CSSProperties, ReactNode } from "react";

import { styled } from "@reearth/services/theme";

export type SidePanelContent = {
  id: string;
  title: ReactNode;
  children: ReactNode;
  maxHeight?: CSSProperties["maxHeight"];
};
type Props = {
  location: "left" | "right";
  contents: SidePanelContent[];
};

const SidePanel: React.FC<Props> = ({ location, contents }) => {
  return (
    <Wrapper location={location}>
      {contents.map(content => (
        <Section key={content.id} maxHeight={content.maxHeight}>
          <Card>
            <Title>{content.title}</Title>
            <Content>{content.children}</Content>
          </Card>
        </Section>
      ))}
    </Wrapper>
  );
};

export default SidePanel;

const Wrapper = styled.div<{ location: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  gap: 4px;
  padding: 4px;

  // for Resizable gutter width
  ${({ location }) => location === "left" && `padding-right: 0;`}
  ${({ location }) => location === "right" && `padding-left: 0;`}
`;

const Section = styled.div<{ maxHeight?: CSSProperties["maxHeight"] }>`
  flex-grow: 1;
  height: 100%;
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
`;

const Card = styled.div`
  background: ${({ theme }) => theme.general.bg.strong};
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  background: ${({ theme }) => theme.general.bg.veryWeak};
  padding: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.34;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const Content = styled.div`
  padding: 12px 8px;
  box-sizing: border-box;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow-y: auto;
  flex-grow: 1;
  height: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;
