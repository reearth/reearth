import { Theme } from "@reearth/beta/lib/core/Crust/types";
import type { Layer } from "@reearth/beta/lib/core/mantle";
import type { FlyTo } from "@reearth/beta/lib/core/types";
import { ValueType, ValueTypes } from "@reearth/beta/utils/value";
import type { Camera } from "@reearth/beta/utils/value";

import { StoryBlock } from "../types";

export type BlockProps = {
  block?: StoryBlock;
  layer?: Layer;
  onClick?: () => void;
};

export type CommonProps = {
  isEditable?: boolean;
  isBuilt?: boolean;
  isSelected?: boolean;
  block?: StoryBlock;
  theme?: Theme;
  currentCamera?: Camera;
  onClick?: () => void;
  onClickAway?: () => void;
  onRemove?: (pageId?: string, id?: string) => void;
  onChange?: (
    propertyId?: string,
    schemaItemId?: string,
    fieldId?: string,
    itemId?: string,
    vt?: ValueType,
    v?: ValueTypes[ValueType],
  ) => Promise<void>;
  onFlyTo?: FlyTo;
};
