/**
 * This file refers this implementation.
 * https://github.com/takram-design-engineering/plateau-view/blob/8ea8bf1d5ef64319d92d0eb05b936cca7f1a2e8f/libs/cesium/src/useGlobeShader.tsx
 */

import { ShaderSource } from "@cesium/engine";
import { Viewer, Globe, Material, Cartesian3 } from "cesium";
import { RefObject, useEffect } from "react";
import { CesiumComponentRef } from "resium";

import { useImmutableFunction } from "../../hooks/useRefFunction";
import { StringMatcher } from "../../utils/StringMatcher";

import GlobeFSCustoms from "./Shaders/OverriddenShaders/GlobeFS/Customs.glsl?raw";
import GlobeFSDefinitions from "./Shaders/OverriddenShaders/GlobeFS/Definitions.glsl?raw";
import { PrivateCesiumGlobe } from "./types";

function makeGlobeShadersDirty(globe: Globe): void {
  // Invoke the internal makeShadersDirty() by setting a material to globe to
  // reset surface shader source to the initial state (assuming that we never
  // use custom material on globe).
  // ref: https://github.com/CesiumGS/cesium/blob/1.106/packages/engine/Source/Scene/Globe.js#L562-L572
  const material = globe.material;
  if (material == null) {
    globe.material = Material.fromType("Color");
    globe.material = undefined;
  } else {
    globe.material = undefined;
    globe.material = material;
  }
}

export const useOverrideGlobeShader = ({
  cesium,
  sphericalHarmonicCoefficients,
  globeShadowDarkness,
  globeImageBasedLighting,
  hasVertexNormals,
}: {
  cesium: RefObject<CesiumComponentRef<Viewer>>;
  sphericalHarmonicCoefficients?: Cartesian3[];
  globeShadowDarkness?: number;
  globeImageBasedLighting?: boolean;
  hasVertexNormals?: boolean;
}) => {
  const sphericalHarmonicCoefficientsRefFunc = useImmutableFunction(
    sphericalHarmonicCoefficients || [],
  );
  const globeImageBasedLightingRefFunc = useImmutableFunction(globeImageBasedLighting);

  useEffect(() => {
    if (!cesium.current?.cesiumElement || !globeShadowDarkness || !hasVertexNormals) return;
    const globe = cesium.current.cesiumElement.scene.globe as PrivateCesiumGlobe;

    globe.vertexShadowDarkness = globeShadowDarkness;
  }, [cesium, globeShadowDarkness, hasVertexNormals]);

  // This need to be invoked before Globe is updated.
  useEffect(() => {
    if (!cesium.current?.cesiumElement || !hasVertexNormals) return;
    const globe = cesium.current.cesiumElement.scene.globe as PrivateCesiumGlobe;

    const surfaceShaderSet = globe._surfaceShaderSet;
    if (!surfaceShaderSet) {
      if (import.meta.env.DEV) {
        throw new Error("`globe._surfaceShaderSet` could not found");
      }
      return;
    }

    const baseFragmentShaderSource = surfaceShaderSet.baseFragmentShaderSource;

    const GlobeFS = baseFragmentShaderSource?.sources[baseFragmentShaderSource.sources.length - 1];

    if (!GlobeFS) {
      if (import.meta.env.DEV) {
        throw new Error("GlobeFS could not find.");
      }
      return;
    }

    let replacedGlobeFS;
    try {
      replacedGlobeFS = new StringMatcher()
        .replace(
          [
            "float diffuseIntensity = clamp(czm_getLambertDiffuse(czm_lightDirectionEC, normalize(v_normalEC)) * u_lambertDiffuseMultiplier + u_vertexShadowDarkness, 0.0, 1.0);",
            "vec4 finalColor = vec4(color.rgb * czm_lightColor * diffuseIntensity, color.a);",
          ],
          "vec4 finalColor = reearth_computeImageBasedLightingColor(color);",
        )
        .execute(GlobeFS);
    } catch (e) {
      if (import.meta.env.DEV) {
        throw new Error(`Failed to override GlobeFS: ${JSON.stringify(e)}`);
      }
      return;
    }

    if (!globe?._surface?._tileProvider?.materialUniformMap) {
      if (import.meta.env.DEV) {
        throw new Error("`globe._surface._tileProvider.materialUniformMap` could not found");
      }
      return;
    }

    makeGlobeShadersDirty(globe);

    globe._surface._tileProvider.materialUniformMap = {
      ...globe._surface._tileProvider.materialUniformMap,
      u_reearth_sphericalHarmonicCoefficients: sphericalHarmonicCoefficientsRefFunc,
      u_reearth_globeImageBasedLighting: globeImageBasedLightingRefFunc, // Avoid to rerender globe.
    };

    surfaceShaderSet.baseFragmentShaderSource = new ShaderSource({
      sources: [
        ...baseFragmentShaderSource.sources.slice(0, -1),
        GlobeFSDefinitions + replacedGlobeFS + GlobeFSCustoms,
      ],
      defines: baseFragmentShaderSource.defines,
    });
    return () => {
      // Reset customized shader to default
      makeGlobeShadersDirty(globe);
    };
  }, [
    sphericalHarmonicCoefficientsRefFunc,
    globeImageBasedLightingRefFunc,
    cesium,
    hasVertexNormals,
  ]);
};
