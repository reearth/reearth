import { merge } from "lodash-es";

import { UnsafeBuiltinPlugin } from "@reearth/services/config/unsafePlugins";

import type { Component } from "..";

export type { Component } from "..";

export type UnsafeBuiltinWidgets<T = unknown> = Record<string, T>;

const unsafeBuiltinPlugins = (
  await import(/* @vite-ignore */ "@reearth/beta/lib/unsafeBuiltinPlugins")
).default;

export const unsafeBuiltinWidgets = processUnsafeBuiltinWidgets(unsafeBuiltinPlugins);

function processUnsafeBuiltinWidgets(plugin?: UnsafeBuiltinPlugin[]) {
  if (!plugin) return;

  const unsafeWidgets: UnsafeBuiltinWidgets<Component> | undefined = plugin
    .map(p =>
      p.widgets.map(w => {
        return {
          widgetId: `${p.id}/${w.extensionId}`,
          ...w,
        };
      }),
    )
    .reduce((a, b) => {
      const newObject: { [key: string]: Component } = {};
      b.forEach(w => {
        newObject[w.widgetId] = w.component;
      });
      return merge(a, newObject);
    }, {});

  return unsafeWidgets;
}
