import React from "react";

import Text from "@reearth/classic/components/atoms/Text";
import ToggleButton from "@reearth/classic/components/atoms/ToggleButton";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

export type Props = {
  checked?: boolean;
  onChange?: () => Promise<void> | void;
};

const WidgetAlignSystemToggle: React.FC<Props> = ({ checked, onChange }) => {
  const t = useT();
  return (
    <ToggleWrapper>
      <Text size="xs" otherProperties={{ userSelect: "none" }}>
        {t("Enable Editor Mode")}
      </Text>
      <ToggleButton checked={checked} onChange={onChange} />
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
`;

export default WidgetAlignSystemToggle;
