import { GetSceneQuery, PluginExtensionType } from "../../gql";

export type WidgetType = {
  pluginId: string;
  extensionId: string;
  title: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
};

export const getInstallableWidgets = (rawScene?: GetSceneQuery) => {
  const scene = rawScene?.node?.__typename === "Scene" ? rawScene.node : undefined;

  return scene?.plugins
    ?.map(p => {
      const plugin = p.plugin;
      return plugin?.extensions
        .filter(e => e.type === PluginExtensionType.Widget)
        .map((e): WidgetType => {
          return {
            pluginId: plugin.id,
            extensionId: e.extensionId,
            title: e.translatedName,
            description: e.description,
            icon: e.icon || (plugin.id === "reearth" && e.extensionId) || "plugin",
            disabled:
              (e.singleOnly && !!scene?.widgets?.find(w => w.extensionId === e.extensionId)) ??
              undefined,
          };
        })
        .filter((w): w is WidgetType => !!w);
    })
    .reduce<WidgetType[]>((a, b) => (b ? [...a, ...b] : a), []);
};

export const getInstalledWidgets = (rawScene?: GetSceneQuery) => {
  const scene = rawScene?.node?.__typename === "Scene" ? rawScene.node : undefined;

  return scene?.widgets?.map(w => {
    const e = getInstallableWidgets(rawScene)?.find(e => e.extensionId === w.extensionId);

    return {
      id: w.id,
      pluginId: w.pluginId,
      extensionId: w.extensionId,
      enabled: w.enabled,
      extended: w.extended,
      title: e?.title || "",
      description: e?.description,
      icon: e?.icon || (w.pluginId === "reearth" && w.extensionId) || "plugin",
    };
  });
};
