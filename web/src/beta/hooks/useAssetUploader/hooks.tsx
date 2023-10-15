import { useCallback } from "react";
import useFileInput from "use-file-input";

import { useAssetsFetcher } from "@reearth/services/api";

import { FILE_FORMATS, IMAGE_FORMATS } from "../../features/Assets/constants";
//pass the asset type
export default ({
  workspaceId,
  onAssetSelect,
}: {
  workspaceId?: string;
  onAssetSelect?: (inputValue?: string) => void;
}) => {
  const { useCreateAssets } = useAssetsFetcher();

  const handleAssetsCreate = useCallback(
    async (files?: FileList) => {
      if (!files) return;
      const result = await useCreateAssets({ teamId: workspaceId ?? "", file: files });
      const assetUrl = result?.data[0].data?.createAsset?.asset.url;

      onAssetSelect?.(assetUrl);
    },
    [workspaceId, useCreateAssets, onAssetSelect],
  );
  const handleFileUpload = useFileInput(files => handleAssetsCreate?.(files), {
    accept: IMAGE_FORMATS + "," + FILE_FORMATS,
    multiple: true,
  });

  return { handleFileUpload };
};
