import type { DataType, SceneProperty } from "@reearth/beta/lib/core/Map/types";
import { Story } from "@reearth/beta/lib/core/StoryPanel";

export type PublishedData = {
  schemaVersion: number;
  id: string;
  publishedAt: string;
  property?: SceneProperty;
  plugins?: Record<string, Plugin>;
  nlsLayers?: NLSLayer[];
  widgets?: Widget[];
  widgetAlignSystem?: WidgetAlignSystem;
  story?: Story;
};

export type Plugin = {
  id: string;
  property: any;
};

export type NLSLayer = {
  id: string;
  title: string;
  layerType: "simple";
  isVisible?: boolean;
  config: {
    layerStyleId?: string;
    data: {
      type: DataType;
      url?: string;
      value?: any;
    };
  };
};

export type Block = {
  id: string;
  pluginId: string;
  extensionId: string;
  property: any;
};

export type Widget = {
  id: string;
  pluginId: string;
  extensionId: string;
  property: any;
  extended?: boolean;
  extendable?:
    | {
        vertically?: boolean | undefined;
        horizontally?: boolean | undefined;
      }
    | undefined;
  floating?: boolean;
};

export type WidgetAlignSystem = {
  inner?: WidgetZone | null;
  outer?: WidgetZone | null;
};

export type WidgetZone = {
  left?: WidgetSection | null;
  center?: WidgetSection | null;
  right?: WidgetSection | null;
};

export type WidgetSection = {
  top?: WidgetArea | null;
  middle?: WidgetArea | null;
  bottom?: WidgetArea | null;
};

export type WidgetArea = {
  widgetIds: string[];
  align: WidgetAlignment;
  padding?: WidgetAreaPadding;
  gap?: number | null;
  centered?: boolean;
  background?: string;
};

export type WidgetAlignment = "start" | "centered" | "end";

export type WidgetAreaPadding = { top: number; bottom: number; left: number; right: number };
