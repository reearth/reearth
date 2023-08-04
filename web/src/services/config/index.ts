import { type Viewer } from "cesium";

import { type CognitoParams, configureCognito } from "./aws";
import { defaultConfig } from "./defaultConfig";
import { type Extensions, loadExtensions } from "./extensions";
import { type PasswordPolicy, convertPasswordPolicy } from "./passwordPolicy";
import { UnsafeBuiltinPlugin, unsafeBuiltinPlugins } from "./unsafeBuiltinPlugin";

export type Config = {
  version?: string;
  api: string;
  plugins: string;
  published: string;
  auth0ClientId?: string;
  auth0Domain?: string;
  auth0Audience?: string;
  authProvider?: string;
  cognito?: CognitoParams;
  googleApiKey?: string;
  googleClientId?: string;
  sentryDsn?: string;
  sentryEnv?: string;
  cesiumIonAccessToken?: string;
  developerMode?: boolean;
  brand?: {
    logoUrl?: string;
    background?: string;
  };
  passwordPolicy?: PasswordPolicy;
  ip?: string;
  policy?: {
    modalTitle: Record<string, string> | string;
    modalDescription: Record<string, string> | string;
    url?: Record<string, string> | string;
    limitNotifications?: {
      asset?: Record<string, string> | string;
      createProject?: Record<string, string> | string;
      dataset?: Record<string, string> | string;
      member?: Record<string, string> | string;
      layer?: Record<string, string> | string;
      publishProject?: Record<string, string> | string;
    };
  };
  documentationUrl?: string;
  marketplaceUrl?: string;
  extensionUrls?: string[];
  extensions?: Extensions;
  unsafeBuiltinPlugins?: UnsafeBuiltinPlugin[];
};

declare global {
  let __APP_VERSION__: string;
  interface Window {
    REEARTH_CONFIG?: Config;
    REEARTH_E2E_ACCESS_TOKEN?: string;
    REEARTH_E2E_CESIUM_VIEWER?: any;
  }
}

export default async function loadConfig() {
  if (window.REEARTH_CONFIG) return;
  window.REEARTH_CONFIG = defaultConfig;
  const config = {
    ...defaultConfig,
    ...(await (await fetch("/reearth_config.json")).json()),
  };

  if (config?.cognito) {
    configureCognito(config);
  }

  if (config?.passwordPolicy) {
    config.passwordPolicy = convertPasswordPolicy(
      config.passwordPolicy as { [key: string]: string },
    );
  }

  if (config?.extensionUrls) {
    const extensions = await loadExtensions(config.extensionUrls);
    config.extensions = extensions;
  }

  config.unsafeBuiltinPlugins = unsafeBuiltinPlugins;

  window.REEARTH_CONFIG = config;
}

export function config(): Config | undefined {
  return window.REEARTH_CONFIG;
}

export function e2eAccessToken(): string | undefined {
  return window.REEARTH_E2E_ACCESS_TOKEN;
}

export function setE2ECesiumViewer(viewer: Viewer | undefined) {
  if (viewer) {
    window.REEARTH_E2E_CESIUM_VIEWER = viewer;
  } else {
    delete window.REEARTH_E2E_CESIUM_VIEWER;
  }
}
