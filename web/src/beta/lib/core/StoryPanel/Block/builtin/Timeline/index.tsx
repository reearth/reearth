import { useMemo } from "react";

import type { CommonProps as BlockProps } from "@reearth//beta/lib/core/StoryPanel/Block/types";
import BlockWrapper from "@reearth/beta/lib/core/StoryPanel/Block/builtin/common/Wrapper";

import TimelineEditor from "./Editor";

export type TimelineValues = {
  currentTime: string;
  startTime: string;
  endTime: string;
};

const TimelineBlock: React.FC<BlockProps> = ({ block, isSelected, ...props }) => {
  const timeline = useMemo(() => {
    return {
      timelineValues: block?.property?.default?.timelineSetting?.value,
      blockId: block?.id,
    };
  }, [block?.id, block?.property?.default?.timelineSetting?.value]);

  const { blockId, timelineValues } = timeline;

  return (
    <BlockWrapper
      name={block?.name}
      icon={block?.extensionId}
      isSelected={isSelected}
      propertyId={block?.propertyId}
      property={block?.property}
      {...props}>
      <TimelineEditor
        inEditor={!!props.isEditable}
        timelineValues={timelineValues}
        blockId={blockId}
      />
    </BlockWrapper>
  );
};

export default TimelineBlock;
