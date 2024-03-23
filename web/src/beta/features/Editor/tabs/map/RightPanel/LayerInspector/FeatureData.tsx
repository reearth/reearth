import { useEffect, useState } from "react";
import "react18-json-view/src/style.css";
import "react18-json-view/src/dark.css";
import JsonView from "react18-json-view";
import { v4 as uuidv4 } from "uuid";

import SidePanelSectionField from "@reearth/beta/components/SidePanelSectionField";
import Text from "@reearth/beta/components/Text";
import { Geometry } from "@reearth/beta/lib/core/engines";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import { FieldComponent } from "./CustomPropertField";

type Props = {
  selectedFeature?: {
    id: string;
    geometry: Geometry | undefined;
    properties: any;
  };
  isSketchLayer?: boolean;
  customProperties?: any;
};

type FieldProp = {
  id: string;
  type: string;
  title: string;
  value?: string | number | boolean | undefined;
};

const FeatureData: React.FC<Props> = ({ selectedFeature, isSketchLayer, customProperties }) => {
  const t = useT();

  const [field, setField] = useState<FieldProp[]>([]);
  useEffect(() => {
    if (!customProperties) return;

    const fieldArray = Object.entries(customProperties).map(([title, type]) => ({
      id: uuidv4(),
      type: type as string,
      title,
      value: undefined,
    }));

    setField(fieldArray);
  }, [customProperties]);

  return (
    <Wrapper>
      <Text size="body">{t("ID")}</Text>
      <ValueWrapper>
        <Text size="body" otherProperties={{ userSelect: "auto" }}>
          {selectedFeature?.id}
        </Text>
      </ValueWrapper>
      <StyledSidePanelSectionField title={t("Geometry")} border="1">
        <ValueWrapper>
          <JsonView src={selectedFeature?.geometry} theme="a11y" dark />
        </ValueWrapper>
      </StyledSidePanelSectionField>
      <StyledSidePanelSectionField title={t("Properties")} border="1">
        <ValueWrapper>
          <JsonView src={selectedFeature?.properties} theme="a11y" dark />
        </ValueWrapper>
      </StyledSidePanelSectionField>
      {isSketchLayer && (
        <StyledSidePanelSectionField title={t("Custom Properties")} border="1">
          {field.map(f => (
            <FieldComponent field={f} key={f.id} />
          ))}
        </StyledSidePanelSectionField>
      )}
    </Wrapper>
  );
};

export default FeatureData;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-all;
`;

const ValueWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.outline.weak};
  border-radius: 4px;
  padding: 4px 8px;
`;

const StyledSidePanelSectionField = styled(SidePanelSectionField)`
  background: ${({ theme }) => theme.outline.weaker};
`;
