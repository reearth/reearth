/// <reference types="vite/client" />
/// <reference types="vitest" />

import { readFileSync } from "fs";
import { resolve } from "path";

import yaml from "@rollup/plugin-yaml";
import react from "@vitejs/plugin-react";
import { readEnv } from "read-env";
import { defineConfig, loadEnv, type Plugin } from "vite";
import cesium from "vite-plugin-cesium";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

import pkg from "./package.json";

export default defineConfig({
  envPrefix: "REEARTH_WEB_",
  plugins: [react(), yaml(), cesium(), serverHeaders(), config(), tsconfigPaths()],
  define: {
    "process.env.QTS_DEBUG": "false", // quickjs-emscripten
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  server: {
    port: 3000,
  },
  build: {
    assetsDir: "static", // avoid conflicts with backend asset endpoints
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        published: resolve(__dirname, "published.html"),
      },
    },
  },
  resolve: {
    alias: [
      { find: "crypto", replacement: "crypto-js" }, // quickjs-emscripten
      { find: "csv-parse", replacement: "csv-parse/browser/esm" },
    ],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["src/test/setup.ts"],
    exclude: [...configDefaults.exclude, "e2e/*"],
    coverage: {
      all: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "src/**/*.d.ts",
        "src/**/*.cy.tsx",
        "src/**/*.stories.tsx",
        "src/services/gql/graphql-client-api.tsx",
        "src/test/**/*",
      ],
      reporter: ["text", "json", "lcov"],
    },
    alias: [
      { find: "crypto", replacement: "crypto" }, // reset setting for quickjs-emscripten
      { find: "csv-parse", replacement: "csv-parse" },
    ],
  },
});

function serverHeaders(): Plugin {
  return {
    name: "server-headers",
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        res.setHeader("Service-Worker-Allowed", "/");
        next();
      });
    },
  };
}

function config(): Plugin {
  return {
    name: "reearth-config",
    async configureServer(server) {
      const envs = loadEnv(
        server.config.mode,
        server.config.envDir ?? process.cwd(),
        server.config.envPrefix,
      );
      const reearthConfigUrl = envs.REEARTH_WEB_CONFIG_URL;
      const remoteReearthConfig = reearthConfigUrl
        ? await (await fetch(reearthConfigUrl)).json()
        : {};
      const configRes = JSON.stringify(
        {
          api: "http://localhost:8080/api",
          published: "/published.html?alias={}",
          // If Cesium version becomes outdated, you can set the Ion token as an environment variables here.
          // ex: `CESIUM_ION_ACCESS_TOKEN="ION_TOKEN" yarn start`
          // ref: https://github.com/CesiumGS/cesium/blob/main/packages/engine/Source/Core/Ion.js#L6-L7
          cesiumIonAccessToken:
            process.env.CESIUM_ION_ACCESS_TOKEN || remoteReearthConfig.cesiumIonAccessToken,
          ...readEnv("REEARTH_WEB", {
            source: envs,
          }),
          ...loadJSON("./reearth-config.json"),
        },
        null,
        2,
      );

      server.middlewares.use((req, res, next) => {
        if (req.method === "GET" && req.url === "/reearth_config.json") {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.write(configRes);
          res.end();
        } else {
          next();
        }
      });
    },
  };
}

function loadJSON(path: string): any {
  try {
    return JSON.parse(readFileSync(path, "utf8")) || {};
  } catch (err) {
    return {};
  }
}
