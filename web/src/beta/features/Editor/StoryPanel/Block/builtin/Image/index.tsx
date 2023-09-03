import { useMemo } from "react";

import { ValueTypes } from "@reearth/beta/utils/value";
import { styled } from "@reearth/services/theme";

import { getFieldValue } from "../../../utils";
import { CommonProps as BlockProps } from "../../types";
import BlockWrapper from "../common/Wrapper";

const ImageBlock: React.FC<BlockProps> = ({ block, isSelected, ...props }) => {
  const src = useMemo(
    () => getFieldValue(block?.property?.items ?? [], "src") as ValueTypes["string"],
    [block?.property?.items],
  );

  return (
    <BlockWrapper
      title={block?.title}
      icon={block?.extensionId}
      isSelected={isSelected}
      isEmpty={!src}
      propertyId={block?.property?.id}
      propertyItems={block?.property?.items}
      renderItem={() => <Image src={src} />}
      {...props}
    />
  );
};

export default ImageBlock;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
