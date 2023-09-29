import type { PropsWithChildren, RefObject } from "react";

import type {
  Camera,
  ComputedFeature,
  SelectedFeatureInfo,
  Tag,
} from "@reearth/beta/lib/core/mantle";
import type {
  ComputedLayer,
  LayerEditEvent,
  LayerSelectionReason,
} from "@reearth/beta/lib/core/Map";
import type { Viewport } from "@reearth/beta/lib/core/Visualizer";

import { TimelineManager } from "../../Visualizer/useTimelineManager";
import type { MapRef, InteractionModeType } from "../types";
import type { InternalWidget, WidgetAlignSystem } from "../Widgets";

import type { CommonReearth } from "./api";
import type { ClientStorage } from "./useClientStorage";
import type { PluginInstances } from "./usePluginInstances";

export type Props = PropsWithChildren<{
  engineName?: string;
  mapRef?: RefObject<MapRef>;
  sceneProperty?: any;
  inEditor?: boolean;
  built?: boolean;
  tags?: Tag[];
  selectedLayer?: ComputedLayer;
  selectedFeature?: ComputedFeature;
  selectedFeatureInfo?: SelectedFeatureInfo;
  layerSelectionReason?: LayerSelectionReason;
  viewport?: Viewport;
  alignSystem?: WidgetAlignSystem;
  floatingWidgets?: InternalWidget[];
  useExperimentalSandbox?: boolean;
  timelineManager?: TimelineManager;
  overrideSceneProperty: (id: string, property: any) => void;
  camera?: Camera;
  interactionMode: InteractionModeType;
  overrideInteractionMode: (mode: InteractionModeType) => void;
  onLayerEdit: (cb: (e: LayerEditEvent) => void) => void;
}>;

export type Context = {
  reearth: CommonReearth;
  pluginInstances: PluginInstances;
  clientStorage: ClientStorage;
  useExperimentalSandbox?: boolean;
  overrideSceneProperty: (id: string, property: any) => void;
};
