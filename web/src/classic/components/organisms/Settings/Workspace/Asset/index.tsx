import React from "react";

import { useT } from "@reearth/beta/services/i18n";
import SettingsHeader from "@reearth/classic/components/molecules/Settings/SettingsHeader";
import AssetContainer from "@reearth/classic/components/organisms/Common/AssetContainer";
import SettingPage from "@reearth/classic/components/organisms/Settings/SettingPage";

import useHooks from "./hooks";

type Props = {
  workspaceId: string;
};

const Asset: React.FC<Props> = ({ workspaceId }: Props) => {
  const t = useT();
  const { currentProject, currentWorkspace } = useHooks({ workspaceId });

  return (
    <SettingPage workspaceId={workspaceId} projectId={currentProject?.id}>
      <SettingsHeader title={t("Assets")} currentWorkspace={currentWorkspace} />
      <AssetContainer workspaceId={workspaceId} isMultipleSelectable height={700} allowDeletion />
    </SettingPage>
  );
};

export default Asset;
