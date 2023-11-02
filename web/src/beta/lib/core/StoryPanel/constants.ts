import { Spacing } from "../mantle";

// Story Panel
export const STORY_PANEL_WIDTH = 442;
export const STORY_PANEL_CONTENT_ELEMENT_ID = "story-page-content";

// Story Page
export const DEFAULT_STORY_PAGE_DURATION = 2;
export const DEFAULT_STORY_PAGE_GAP = 2;
export const DEFAULT_STORY_PAGE_PADDING: Spacing = { top: 4, bottom: 4, left: 4, right: 4 };

// Story Block
export const TITLE_BUILTIN_STORY_BLOCK_ID = "reearth/titleStoryBlock"; // pseudo storyblock

export const IMAGE_BUILTIN_STORY_BLOCK_ID = "reearth/imageStoryBlock";
export const TEXT_BUILTIN_STORY_BLOCK_ID = "reearth/textStoryBlock";
export const VIDEO_BUILTIN_STORY_BLOCK_ID = "reearth/videoStoryBlock";
export const MD_BUILTIN_STORY_BLOCK_ID = "reearth/mdTextStoryBlock";
export const CAMERA_BUILTIN_STORY_BLOCK_ID = "reearth/cameraButtonStoryBlock";

export const AVAILABLE_STORY_BLOCK_IDS = [
  IMAGE_BUILTIN_STORY_BLOCK_ID,
  TEXT_BUILTIN_STORY_BLOCK_ID,
  VIDEO_BUILTIN_STORY_BLOCK_ID,
  MD_BUILTIN_STORY_BLOCK_ID,
  CAMERA_BUILTIN_STORY_BLOCK_ID,
];
