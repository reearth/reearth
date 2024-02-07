import type { Layer, Spacing } from "@reearth/beta/lib/core/mantle";

export type Infobox<BP = any> = {
  property?: InfoboxProperty;
  blocks?: InfoboxBlock<BP>[];
};

export type InfoboxProperty = {
  default?: {
    position?: "right" | "left";
    padding?: Spacing;
    gap?: number;
    // showTitle?: boolean;
    // height?: number;
    // title?: string;
    // heightType?: "auto" | "manual";
    // size?: "small" | "medium" | "large";
    // typography?: Typography;
    // bgcolor?: string;
    // outlineColor?: string;
    // outlineWidth?: number;
    // useMask?: boolean;
    // defaultContent?: "description" | "attributes";
    // unselectOnClose?: boolean;
  };
};

export type InfoboxBlock<P = any> = {
  id: string;
  name?: string;
  pluginId?: string;
  extensionId?: string;
  property?: P;
  propertyId?: string;
};

export type InfoboxBlockProps<P = any> = {
  block?: InfoboxBlock<P>;
  layer?: Layer;
  onClick?: () => void;
};
