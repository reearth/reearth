import { styled } from "@reearth/classic/theme";
import fonts from "@reearth/classic/theme/reearthTheme/common/fonts";
import { typographyStyles } from "@reearth/classic/util/value";

import type { InfoboxProperty } from "../Infobox";

export const Title = styled.div<{ infoboxProperty?: InfoboxProperty }>`
  color: ${props => props.theme.infoBox.mainText};
  font-size: ${fonts.sizes.xs}px;
  ${({ infoboxProperty }) => typographyStyles(infoboxProperty?.default?.typography)}
`;

export const Border = styled.div<{
  isSelected?: boolean;
  isHovered?: boolean;
  isEditable?: boolean;
}>`
  border: 1px solid
    ${({ isSelected, isHovered, isEditable, theme }) =>
      (!isHovered && !isSelected) || !isEditable
        ? "transparent"
        : isHovered
        ? theme.infoBox.border
        : isSelected
        ? theme.infoBox.accent2
        : theme.infoBox.weakText};
  border-radius: 6px;
`;
