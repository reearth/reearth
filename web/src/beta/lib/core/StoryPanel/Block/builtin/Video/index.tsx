import { useMemo } from "react";

import type { CommonProps as BlockProps } from "@reearth//beta/lib/core/StoryPanel/Block/types";
import BlockWrapper from "@reearth/beta/lib/core/StoryPanel/Block/builtin/common/Wrapper";
import VideoPlayer from "@reearth/beta/lib/core/StoryPanel/Block/builtin/Video/VideoPlayer";
import type { ValueTypes } from "@reearth/beta/utils/value";

const VideoBlock: React.FC<BlockProps> = ({ block, isSelected, ...props }) => {
  const src = useMemo(() => block?.property?.src as ValueTypes["string"], [block?.property?.src]);

  return (
    <BlockWrapper
      name={block?.name}
      icon={block?.extensionId}
      isSelected={isSelected}
      propertyId={block?.property?.id}
      property={block?.property}
      {...props}>
      {src && <VideoPlayer isSelected={isSelected} src={src} inEditor={!!props.isEditable} />}
    </BlockWrapper>
  );
};

export default VideoBlock;
