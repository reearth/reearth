import { useCallback } from "react";

import { Format } from "@reearth/classic/components/molecules/EarthEditor/ExportPane";
import { useAuth } from "@reearth/services/auth";
import { useRootLayerId, useSelected } from "@reearth/services/state";

const ext: { [key in Format]: string } = {
  kml: "kml",
  geojson: "geojson",
  czml: "czml",
  shape: "shp",
};

export default () => {
  const { getAccessToken } = useAuth();
  const [rootLayerId] = useRootLayerId();
  const [selected] = useSelected();

  const onExport = useCallback(
    async (format: Format) => {
      if (!rootLayerId || !window.REEARTH_CONFIG?.api) return;

      const accessToken = await getAccessToken();
      if (!accessToken) return;

      const filename = `${selected?.type === "layer" ? selected.layerId : rootLayerId}.${
        ext[format]
      }`;
      const type =
        format === "kml"
          ? "application/xml"
          : ["geojson", "czml"].includes(format)
          ? "application/json"
          : "application/octet-stream";

      const res = await fetch(`${window.REEARTH_CONFIG.api}/layers/${filename}`, {
        headers: {
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
      });

      const download = document.createElement("a");
      download.download = filename;
      download.href = URL.createObjectURL(await res.blob());
      download.dataset.downloadurl = [type, download.download, download.href].join(":");
      download.click();
    },
    [getAccessToken, rootLayerId, selected],
  );

  return { onExport };
};
