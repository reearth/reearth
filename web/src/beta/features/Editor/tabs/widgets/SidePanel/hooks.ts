import { useReactiveVar } from "@apollo/client";
import { useCallback, useMemo } from "react";

import { useWidgetsFetcher } from "@reearth/services/api";
import { selectedWidgetVar } from "@reearth/services/state";

export default ({ sceneId }: { sceneId?: string }) => {
  const { useInstallableWidgetsQuery, useInstalledWidgetsQuery, useAddWidget } =
    useWidgetsFetcher();
  const { installableWidgets } = useInstallableWidgetsQuery({ sceneId });
  const { installedWidgets } = useInstalledWidgetsQuery({ sceneId });

  const selectedWidget = useReactiveVar(selectedWidgetVar);

  const properties = useMemo(
    () => installedWidgets?.find(w => w.id === selectedWidget?.id)?.properties,
    [installedWidgets, selectedWidget],
  );

  const handleWidgetSelection = (id: string) => {
    const w = installedWidgets?.find(w => w.id === id);
    if (!w) return;

    if (w.id === selectedWidget?.id) {
      selectedWidgetVar(undefined);
    } else {
      selectedWidgetVar({
        id: w.id,
        pluginId: w.pluginId,
        extensionId: w.extensionId,
      });
    }
  };

  const handleWidgetAdd = useCallback(
    async (id?: string) => {
      await useAddWidget(sceneId, id);
    },
    [sceneId, useAddWidget],
  );

  return {
    selectedWidget,
    properties,
    installedWidgets,
    installableWidgets,
    handleWidgetAdd,
    handleWidgetSelection,
  };
};
