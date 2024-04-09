import { useContext, useMemo } from "react";

import { Layer } from "@reearth/beta/lib/core/mantle";
import coreContext from "@reearth/beta/lib/core/Visualizer/coreContext";

import { Infobox } from "./Crust/Infobox/types";

export default function useInfobox({ layers }: { layers?: Layer[] }) {
  // TODO: get selectedLayer from context
  const { selectedLayer } = useContext(coreContext);
  // const selectedLayer = useMemo(() => ({ layerId: "", layer: { layer: { infobox: true } } }), []);

  // Infobox
  const infobox: Infobox | undefined = useMemo(() => {
    if (!selectedLayer?.layer?.layer.infobox) return undefined;
    const selected = layers?.find(l => l.id === selectedLayer.layerId);
    return {
      property: selected?.infobox?.property,
      blocks: [...(selected?.infobox?.blocks ?? [])],
    };
  }, [selectedLayer, layers]);

  return {
    infobox,
  };
}
