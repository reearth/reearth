import { useCallback, useMemo, useRef } from "react";

import { ComputedFeature, ComputedLayer } from "@reearth/core";

import { BuiltinWidgets } from "./Crust";
import { getBuiltinWidgetOptions } from "./Crust/Widgets/Widget";

export default function useHooks({
  ownBuiltinWidgets,
  onCoreLayerSelect,
}: {
  ownBuiltinWidgets?: (keyof BuiltinWidgets)[];
  onCoreLayerSelect?: (
    layerId: string | undefined,
    layer: ComputedLayer | undefined,
    feature: ComputedFeature | undefined,
  ) => void;
}) {
  const shouldRender = useMemo(() => {
    const shouldWidgetAnimate = ownBuiltinWidgets?.some(
      id => !!getBuiltinWidgetOptions(id).animation,
    );
    return shouldWidgetAnimate;
  }, [ownBuiltinWidgets]);

  const storyWrapperRef = useRef<HTMLDivElement>(null);

  const handleCoreLayerSelect = useCallback(
    async (
      layerId: string | undefined,
      layer: (() => Promise<ComputedLayer | undefined>) | undefined,
      feature: ComputedFeature | undefined,
    ) => {
      onCoreLayerSelect?.(layerId, await layer?.(), feature);
    },
    [onCoreLayerSelect],
  );

  return {
    shouldRender,
    storyWrapperRef,
    handleCoreLayerSelect,
  };
}
