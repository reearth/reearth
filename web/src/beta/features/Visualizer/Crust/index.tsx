import { useMemo, type RefObject, useContext } from "react";

import { ValueType, ValueTypes } from "@reearth/beta/utils/value";
import {
  coreContext,
  type ViewerProperty,
  type Layer,
  type SelectedFeatureInfo,
  type Camera,
  type MapRef,
} from "@reearth/core";

import { useWidgetContext } from "./context";
import useHooks from "./hooks";
import Infobox, { InstallableInfoboxBlock } from "./Infobox";
import { Infobox as InfoboxType } from "./Infobox/types";
import Plugins, { type ExternalPluginProps, ModalContainer, PopupContainer } from "./Plugins";
import { WidgetThemeOptions, usePublishTheme } from "./theme";
import Widgets, {
  type WidgetAlignSystem as WidgetAlignSystemType,
  type Alignment,
  type Location,
  type WidgetLayoutConstraint,
  type InternalWidget,
  type WidgetAreaType,
} from "./Widgets";

export type { ValueTypes, ValueType, InteractionModeType } from "./types";

export type { InfoboxBlock as Block } from "./Infobox/types";

export type { ExternalPluginProps } from "./Plugins";

export type {
  Context,
  WidgetLayoutConstraint,
  WidgetAlignSystem,
  Alignment,
  Location,
  InternalWidget,
  WidgetZone,
  WidgetSection,
  BuiltinWidgets,
  WidgetArea,
  WidgetAlignment,
  WidgetAreaType,
} from "./Widgets";
export { isBuiltinWidget } from "./Widgets";

export type Props = {
  // common
  engineName?: string;
  isEditable?: boolean;
  inEditor?: boolean;
  isBuilt?: boolean;
  mapRef?: RefObject<MapRef>;
  layers?: Layer[];
  camera?: Camera;
  selectedFeatureInfo?: SelectedFeatureInfo;
  // viewer
  viewerProperty?: ViewerProperty;
  overrideViewerProperty?: (pluginId: string, property: ViewerProperty) => void;
  // widgets
  widgetThemeOptions?: WidgetThemeOptions;
  widgetAlignSystem?: WidgetAlignSystemType;
  widgetAlignSystemEditing?: boolean;
  widgetLayoutConstraint?: { [w: string]: WidgetLayoutConstraint };
  floatingWidgets?: InternalWidget[];
  selectedWidgetArea?: WidgetAreaType;
  // infobox
  infobox?: InfoboxType;
  installableInfoboxBlocks?: InstallableInfoboxBlock[];
  // plugin
  externalPlugin: ExternalPluginProps;
  useExperimentalSandbox?: boolean;
  // widget events
  onWidgetLayoutUpdate?: (
    id: string,
    update: {
      location?: Location;
      extended?: boolean;
      index?: number;
    },
  ) => void;
  onWidgetAlignmentUpdate?: (location: Location, align: Alignment) => void;
  onWidgetAreaSelect?: (widgetArea?: WidgetAreaType) => void;
  // infobox events
  onInfoboxBlockCreate?: (
    pluginId: string,
    extensionId: string,
    index?: number | undefined,
  ) => Promise<void>;
  onInfoboxBlockMove?: (id: string, targetIndex: number, layerId?: string) => Promise<void>;
  onInfoboxBlockDelete?: (id?: string) => Promise<void>;
  // Infobox
  onPropertyUpdate?: (
    propertyId?: string,
    schemaItemId?: string,
    fieldId?: string,
    itemId?: string,
    vt?: ValueType,
    v?: ValueTypes[ValueType],
  ) => Promise<void>;
  onPropertyItemAdd?: (propertyId?: string, schemaGroupId?: string) => Promise<void>;
  onPropertyItemMove?: (
    propertyId?: string,
    schemaGroupId?: string,
    itemId?: string,
    index?: number,
  ) => Promise<void>;
  onPropertyItemDelete?: (
    propertyId?: string,
    schemaGroupId?: string,
    itemId?: string,
  ) => Promise<void>;
};

export default function Crust({
  engineName,
  isBuilt,
  isEditable,
  inEditor,
  mapRef,
  camera,
  selectedFeatureInfo,
  externalPlugin,
  useExperimentalSandbox,
  layers,
  // Viewer
  viewerProperty,
  overrideViewerProperty,
  // Widget
  widgetThemeOptions,
  widgetAlignSystem,
  widgetAlignSystemEditing,
  widgetLayoutConstraint,
  floatingWidgets,
  selectedWidgetArea,
  onWidgetLayoutUpdate,
  onWidgetAlignmentUpdate,
  onWidgetAreaSelect,
  // Infobox
  installableInfoboxBlocks,
  onInfoboxBlockCreate,
  onInfoboxBlockMove,
  onInfoboxBlockDelete,
  // common
  onPropertyUpdate,
  onPropertyItemAdd,
  onPropertyItemMove,
  onPropertyItemDelete,
}: Props): JSX.Element | null {
  const {
    interactionMode,
    selectedLayer,
    selectedComputedFeature,
    viewport,
    handleCameraForceHorizontalRollChange,
    onLayerEdit,
    handleInteractionModeChange,
    onSketchPluginFeatureCreate,
    onSketchTypeChange,
    onLayerVisibility,
    onLayerLoad,
    onLayerSelectWithRectStart,
    onLayerSelectWithRectMove,
    onLayerSelectWithRectEnd,
  } = useContext(coreContext);

  const widgetTheme = usePublishTheme(widgetThemeOptions);

  const selectedLayerId = useMemo(
    () => ({ layerId: selectedLayer?.layerId, featureId: selectedLayer?.featureId }),
    [selectedLayer?.featureId, selectedLayer?.layerId],
  );

  const {
    shownPluginModalInfo,
    shownPluginPopupInfo,
    pluginModalContainerRef,
    pluginPopupContainerRef,
    renderWidget,
    renderBlock,
    onPluginModalShow,
  } = useHooks({ mapRef, ...externalPlugin });

  const widgetContext = useWidgetContext({
    mapRef,
    camera,
    viewerProperty,
    selectedLayerId,
    timelineManagerRef: mapRef?.current?.timeline,
  });

  const featuredInfobox = useMemo(() => {
    const selected = layers?.find(l => l.id === selectedLayer?.layerId);
    const infobox = selectedLayer?.layer?.layer.infobox
      ? {
          property: selected?.infobox?.property,
          blocks: [...(selected?.infobox?.blocks ?? [])],
        }
      : undefined;
    return selectedLayerId?.featureId && infobox
      ? {
          ...infobox,
          featureId: selectedLayerId.featureId,
        }
      : undefined;
  }, [layers, selectedLayer, selectedLayerId?.featureId]);

  return (
    <Plugins
      engineName={engineName}
      mapRef={mapRef}
      viewerProperty={viewerProperty}
      built={isBuilt}
      inEditor={inEditor}
      selectedLayer={selectedLayer?.layer}
      selectedFeature={selectedComputedFeature}
      selectedFeatureInfo={selectedFeatureInfo}
      layerSelectionReason={selectedLayer?.reason}
      viewport={viewport}
      alignSystem={widgetAlignSystem}
      floatingWidgets={floatingWidgets}
      camera={camera}
      interactionMode={interactionMode ?? "default"}
      timelineManagerRef={mapRef?.current?.timeline}
      useExperimentalSandbox={useExperimentalSandbox}
      overrideInteractionMode={handleInteractionModeChange}
      overrideViewerProperty={overrideViewerProperty}
      onLayerEdit={onLayerEdit}
      onLayerSelectWithRectStart={onLayerSelectWithRectStart}
      onLayerSelectWithRectMove={onLayerSelectWithRectMove}
      onLayerSelectWithRectEnd={onLayerSelectWithRectEnd}
      onSketchPluginFeatureCreate={onSketchPluginFeatureCreate}
      onLayerVisibility={onLayerVisibility}
      onLayerLoad={onLayerLoad}
      onSketchTypeChange={onSketchTypeChange}
      onCameraForceHorizontalRollChange={handleCameraForceHorizontalRollChange}>
      <Widgets
        isMobile={viewport?.isMobile}
        isBuilt={isBuilt}
        isEditable={isEditable}
        inEditor={inEditor}
        alignSystem={widgetAlignSystem}
        floatingWidgets={floatingWidgets}
        selectedWidgetArea={selectedWidgetArea}
        editing={widgetAlignSystemEditing}
        layoutConstraint={widgetLayoutConstraint}
        theme={widgetTheme}
        context={widgetContext}
        onWidgetLayoutUpdate={onWidgetLayoutUpdate}
        onAlignmentUpdate={onWidgetAlignmentUpdate}
        onWidgetAreaSelect={onWidgetAreaSelect}
        renderWidget={renderWidget}
      />
      <ModalContainer
        ref={pluginModalContainerRef}
        shownPluginModalInfo={shownPluginModalInfo}
        onPluginModalShow={onPluginModalShow}
      />
      <PopupContainer shownPluginPopupInfo={shownPluginPopupInfo} ref={pluginPopupContainerRef} />
      <Infobox
        infobox={featuredInfobox}
        installableInfoboxBlocks={installableInfoboxBlocks}
        isEditable={!!inEditor}
        renderBlock={renderBlock}
        onBlockCreate={onInfoboxBlockCreate}
        onBlockDelete={onInfoboxBlockDelete}
        onBlockMove={onInfoboxBlockMove}
        onPropertyUpdate={onPropertyUpdate}
        onPropertyItemAdd={onPropertyItemAdd}
        onPropertyItemDelete={onPropertyItemDelete}
        onPropertyItemMove={onPropertyItemMove}
      />
    </Plugins>
  );
}
