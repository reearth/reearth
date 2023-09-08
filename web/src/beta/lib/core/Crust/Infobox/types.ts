import type { Layer } from "@reearth/beta/lib/core/mantle";

import type { Typography } from "../types";

export type { LatLng, Typography, ValueTypes, ValueType, Theme } from "../types";

export type Infobox<BP = any> = {
  property?: DeprecatedInfoboxProperty;
  blocks?: Block<BP>[];
};

// TODO: Remove `default` property later.
export type DeprecatedInfoboxProperty = { default?: InfoboxProperty };

export type InfoboxProperty = {
  // TODO: Deprecate `default` property
  showTitle?: boolean;
  title?: string;
  height?: number;
  heightType?: "auto" | "manual";
  infoboxPaddingTop?: number;
  infoboxPaddingBottom?: number;
  infoboxPaddingLeft?: number;
  infoboxPaddingRight?: number;
  size?: "small" | "medium" | "large";
  position?: "right" | "middle" | "left";
  typography?: Typography;
  bgcolor?: string;
  outlineColor?: string;
  outlineWidth?: number;
  useMask?: boolean;
  defaultContent?: "description" | "attributes";
  visible?: boolean;
  unselectOnClose?: boolean;
};

export type Block<P = any> = {
  id: string;
  pluginId?: string;
  extensionId?: string;
  property?: P;
  propertyId?: string;
};

export type BlockProps<P = any> = {
  block?: Block<P>;
  layer?: Layer;
  onClick?: () => void;
};
