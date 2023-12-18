import * as turf from "@turf/turf";
import { BoundingSphere, Intersect, PerspectiveFrustum, Rectangle, Cartesian3 } from "cesium";
import { useEffect, useMemo, useState } from "react";
import { useCesium } from "resium";
import invariant from "tiny-invariant";

import { HeatMapAppearance } from "@reearth/beta/lib/core/mantle";

import { FeatureComponentConfig, FeatureProps } from "../utils";

import { flareColorMapLUT } from "./constants";
import { fetchImageAndCreateMeshImageData, MeshImageData } from "./createMeshImageData";
import { HeatmapMesh } from "./HeatmapMesh";

export type Props = FeatureProps<Property>;

export type Property = HeatMapAppearance;

export default function HeatMap({ property, isVisible }: Props) {
  const {
    valueMap,
    colorMap = flareColorMapLUT,
    width,
    height,
    bounds,
    cropBounds,
    minValue,
    maxValue,
    opacity = 0.8,
    contourThickness = 1,
    contourAlpha = 0.2,
    logarithmic = false,
  } = property ?? {};

  const { scene } = useCesium();

  const boundingSphere = BoundingSphere.fromRectangle3D(
    Rectangle.fromDegrees(bounds?.west, bounds?.south, bounds?.east, bounds?.north),
  );

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const isVisible = (): boolean => {
      const camera = scene?.camera;
      const frustum = camera?.frustum;
      invariant(frustum instanceof PerspectiveFrustum);
      const cullingVolume = frustum.computeCullingVolume(
        camera?.position || Cartesian3.ONE,
        camera?.direction || Cartesian3.ONE,
        camera?.up || Cartesian3.ONE,
      );
      return cullingVolume.computeVisibility(boundingSphere) !== Intersect.OUTSIDE;
    };
    if (isVisible()) {
      setVisible(true);
      return;
    }
    const callback = (): void => {
      if (isVisible()) {
        setVisible(true);
        scene?.camera?.changed.removeEventListener(callback);
      }
    };
    scene?.camera?.changed.addEventListener(callback);
    return () => {
      scene?.camera?.changed.removeEventListener(callback);
    };
  }, [boundingSphere, scene]);

  useEffect(() => {
    return () => {
      if (!scene?.isDestroyed()) {
        scene?.requestRender();
      }
    };
  }, [scene]);

  const [meshImageData, setMeshImageData] = useState<MeshImageData>();
  useEffect(() => {
    if (!visible) return;

    fetchImageAndCreateMeshImageData(valueMap)
      .then(meshImageData => {
        setMeshImageData(meshImageData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [valueMap, visible]);

  const { contourSpacing = Math.max(10, meshImageData?.outlierThreshold || 0 / 20) } =
    property ?? {};

  const colorRange =
    minValue != null && maxValue != null
      ? [minValue, maxValue]
      : extendRange([0, 100], [0, meshImageData?.outlierThreshold || 0]);

  const geometry = useMemo(
    () =>
      meshImageData != null && bounds
        ? turf.bboxPolygon([bounds.east, bounds.south, bounds.west, bounds.north]).geometry
        : undefined,
    [bounds, meshImageData],
  );

  if (!isVisible || meshImageData == null || geometry == null) {
    return null;
  }
  return (
    <HeatmapMesh
      meshImageData={meshImageData}
      geometry={geometry}
      colorMapLUT={colorMap}
      opacity={opacity}
      minValue={colorRange[0]}
      maxValue={colorRange[1]}
      contourSpacing={contourSpacing}
      contourThickness={contourThickness}
      contourAlpha={contourAlpha}
      bound={bounds}
      cropBound={cropBounds}
      logarithmic={logarithmic}
      width={width || meshImageData.width}
      height={height || meshImageData.height}
    />
  );
}

function extendRange(a: number[], b: number[]): [number, number] {
  invariant(a.length === 2);
  invariant(b.length === 2);
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

export const config: FeatureComponentConfig = {
  noFeature: true,
};
