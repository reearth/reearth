import { useMemo } from "react";

import Text from "@reearth/beta/components/Text";
import BlockWrapper from "@reearth/beta/lib/core/shared/components/BlockWrapper";
import type { CommonBlockProps as BlockProps } from "@reearth/beta/lib/core/shared/types";
import type { ValueTypes } from "@reearth/beta/utils/value";
import { styled } from "@reearth/services/theme";

import { InfoboxBlock } from "../../../types";

const TextBlock: React.FC<BlockProps<InfoboxBlock>> = ({ block, isSelected, ...props }) => {
  const src = useMemo(
    () => block?.property?.default?.src?.value as ValueTypes["string"],
    [block?.property?.default?.src],
  );

  return (
    <BlockWrapper
      name={block?.name}
      icon={block?.extensionId}
      isSelected={isSelected}
      propertyId={block?.propertyId}
      property={block?.property}
      {...props}>
      {src && (
        <StyledText size="body" customColor>
          {src}
        </StyledText>
      )}
    </BlockWrapper>
  );
};

export default TextBlock;

const StyledText = styled(Text)`
  word-wrap: break-word;
  min-width: 0;
`;
