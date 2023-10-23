import { useCallback, useMemo } from "react";

import { ValueTypes } from "@reearth/beta/utils/value";

import { CommonProps as BlockProps } from "../../types";
import usePropertyValueUpdate from "../common/useActionPropertyApi";
import BlockWrapper from "../common/Wrapper";

import MdEditor from "./Editor";

export type Props = BlockProps;

const MdBlock: React.FC<Props> = ({ block, isSelected, ...props }) => {
  const text = useMemo(
    () => block?.property?.default?.text?.value as ValueTypes["string"],
    [block?.property?.default?.text?.value],
  );

  const { handlePropertyValueUpdate } = usePropertyValueUpdate();

  const handleTextUpdate = useCallback(
    (text: string) => {
      if (!block?.propertyId) return;
      handlePropertyValueUpdate("default", block?.propertyId, "text", "string")(text);
    },
    [block?.propertyId, handlePropertyValueUpdate],
  );

  return (
    <BlockWrapper
      name={block?.name}
      icon={block?.extensionId}
      isSelected={isSelected}
      propertyId={block?.propertyId}
      property={block?.property}
      settingsEnabled={false}
      {...props}>
      <MdEditor text={text} onUpdate={handleTextUpdate} />
    </BlockWrapper>
  );
};

export default MdBlock;
