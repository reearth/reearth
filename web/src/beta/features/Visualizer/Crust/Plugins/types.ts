import type { PropsWithChildren, RefObject } from "react";

import type {
  ComputedFeature,
  SelectedFeatureInfo,
  Viewport,
  ComputedLayer,
  LayerEditEvent,
  LayerLoadEvent,
  LayerSelectionReason,
  LayerSelectWithRectEnd,
  LayerSelectWithRectMove,
  LayerSelectWithRectStart,
  LayerVisibilityEvent,
} from "@reearth/core";
import { SketchEventCallback, SketchType, TimelineManagerRef } from "@reearth/core";

import type { MapRef, InteractionModeType } from "../types";
import type { InternalWidget, WidgetAlignSystem } from "../Widgets";

import type { CommonReearth } from "./api";
import type { ClientStorage } from "./useClientStorage";
import type { PluginInstances } from "./usePluginInstances";

export type Props = PropsWithChildren<{
  engineName?: string;
  mapRef?: RefObject<MapRef>;
  sceneProperty?: any;
  isInEditor?: boolean;
  isBuilt?: boolean;
  selectedLayer?: ComputedLayer;
  selectedFeature?: ComputedFeature;
  selectedFeatureInfo?: SelectedFeatureInfo;
  layerSelectionReason?: LayerSelectionReason;
  viewport?: Viewport;
  alignSystem?: WidgetAlignSystem;
  floatingWidgets?: InternalWidget[];
  useExperimentalSandbox?: boolean;
  timelineManagerRef?: TimelineManagerRef;
  overrideSceneProperty?: (id: string, property: any) => void;
  interactionMode: InteractionModeType;
  overrideInteractionMode?: (mode: InteractionModeType) => void;
  onLayerEdit?: (cb: (e: LayerEditEvent) => void) => void;
  onLayerSelectWithRectStart?: (cb: (e: LayerSelectWithRectStart) => void) => void;
  onLayerSelectWithRectMove?: (cb: (e: LayerSelectWithRectMove) => void) => void;
  onLayerSelectWithRectEnd?: (cb: (e: LayerSelectWithRectEnd) => void) => void;
  onSketchPluginFeatureCreate?: (cb: SketchEventCallback) => void;
  onSketchTypeChange?: (cb: (type: SketchType | undefined) => void) => void;
  onLayerVisibility?: (cb: (e: LayerVisibilityEvent) => void) => void;
  onLayerLoad?: (cb: (e: LayerLoadEvent) => void) => void;
  onCameraForceHorizontalRollChange?: (enable?: boolean) => void;
}>;

export type Context = {
  reearth: CommonReearth;
  pluginInstances: PluginInstances;
  clientStorage: ClientStorage;
  timelineManagerRef?: TimelineManagerRef;
  useExperimentalSandbox?: boolean;
  overrideSceneProperty?: (id: string, property: any) => void;
};
