import { useMemo } from "react";

import Text from "@reearth/beta/components/Text";
import { ValueTypes } from "@reearth/beta/utils/value";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import { CommonProps as BlockProps } from "../../types";
import BlockWrapper from "../common/Wrapper";

export type Props = BlockProps;

const TitleBlock: React.FC<Props> = ({ block, isSelected, ...props }) => {
  const t = useT();

  const property = useMemo(() => block?.property, [block?.property]);

  const title = useMemo(
    () => property?.title?.title?.value as ValueTypes["string"],
    [property?.title?.title?.value],
  );

  const color = useMemo(
    () => property?.title?.color?.value as ValueTypes["string"],
    [property?.title?.color?.value],
  );
  const hasEmptySpace = /^ *$/.test(title);

  return (
    <BlockWrapper
      name={block?.name}
      icon={block?.extensionId}
      isSelected={isSelected}
      propertyId={block?.propertyId}
      property={property}
      dndEnabled={false}
      {...props}>
      <Title size="h2" hasText={!!title && !hasEmptySpace} color={color} customColor>
        {hasEmptySpace || !title ? t("Untitled") : title}
      </Title>
    </BlockWrapper>
  );
};

export default TitleBlock;

const Title = styled(Text)<{ hasText?: boolean; color?: string }>`
  color: ${({ color, hasText, theme }) => (hasText ? color ?? "black" : theme.content.weak)};
`;
