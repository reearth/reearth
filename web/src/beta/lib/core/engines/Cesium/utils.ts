import {
  Cartesian3,
  Viewer as CesiumViewer,
  Math as CesiumMath,
  TranslationRotationScale,
  Cartographic,
  Entity,
  Cesium3DTile,
  Cesium3DTileset,
  Cesium3DTileContent,
  Cesium3DTileFeature,
  JulianDate,
  Model,
  ImageryLayerFeatureInfo,
  Scene,
  Viewer,
  Cesium3DTilePointFeature,
} from "cesium";

import { InfoboxProperty } from "@reearth/beta/lib/core/Crust/Infobox";
import { ComputedFeature, DefaultInfobox } from "@reearth/beta/lib/core/Map";

import { getTag } from "./Feature";
import type { InternalCesium3DTileFeature } from "./types";

export const convertCartesian3ToPosition = (
  cesium?: CesiumViewer,
  pos?: Cartesian3,
): { lat: number; lng: number; height: number } | undefined => {
  if (!pos) return;
  const cartographic = cesium?.scene.globe.ellipsoid.cartesianToCartographic(pos);
  if (!cartographic) return;
  return {
    lat: CesiumMath.toDegrees(cartographic.latitude),
    lng: CesiumMath.toDegrees(cartographic.longitude),
    height: cartographic.height,
  };
};

export const translationWithClamping = (
  trs: TranslationRotationScale,
  allowEnterGround: boolean,
  terrainHeightEstimate: number,
) => {
  if (!allowEnterGround) {
    const cartographic = Cartographic.fromCartesian(trs.translation, undefined, new Cartographic());
    const boxBottomHeight = cartographic.height - trs.scale.z / 2;
    const floorHeight = terrainHeightEstimate;
    if (boxBottomHeight < floorHeight) {
      cartographic.height += floorHeight - boxBottomHeight;
      Cartographic.toCartesian(cartographic, undefined, trs.translation);
    }
  }
};

export const getModelFromTileContent = (c: Cesium3DTileContent) => {
  if (!c.featuresLength && "_model" in c && c._model instanceof Model) {
    return c._model;
  }
  return;
};

export function lookupFeatures(
  c: Cesium3DTileContent,
  cb: (
    feature: InternalCesium3DTileFeature,
    content: Cesium3DTileContent,
    batchId?: number,
  ) => void | Promise<void>,
) {
  if (!c) return;

  // Use model, if featuresLength is 0.
  const model = getModelFromTileContent(c);
  if (model) {
    return cb(model, c);
  }

  const length = c.featuresLength;
  for (let i = 0; i < length; i++) {
    const f = c.getFeature(i);
    if (!f) {
      continue;
    }
    cb(f, c, i);
  }
  c.innerContents?.forEach(c => lookupFeatures(c, cb));
  return;
}

const findFeatureFrom3DTile = (
  tile: Cesium3DTile,
  featureId?: string,
): Cesium3DTileFeature | void => {
  let target: InternalCesium3DTileFeature | undefined = undefined;
  lookupFeatures(tile.content, f => {
    const tag = getTag(f);
    if (tag?.featureId === featureId) {
      target = f;
    }
  });

  if (target) {
    return target;
  }

  for (const child of tile.children) {
    const t = findFeatureFrom3DTile(child, featureId);
    if (t) {
      return t;
    }
  }
};

const findFeaturesFrom3DTile = <T = InternalCesium3DTileFeature>(
  tile: Cesium3DTile,
  featureId: string[],
  convert?: (f: InternalCesium3DTileFeature) => T,
  targets: Set<T> = new Set(),
) => {
  lookupFeatures(tile.content, f => {
    const tag = getTag(f);
    if (featureId.includes(tag?.featureId ?? "")) {
      const r = convert?.(f);
      if (r) {
        targets.add(r);
      } else {
        targets.add(f as T);
      }
    }
  });

  for (const child of tile.children) {
    findFeaturesFrom3DTile(child, featureId, convert, targets);
  }
};

export function findEntity(
  viewer: CesiumViewer,
  layerId?: string,
  featureId?: string,
): Entity | Cesium3DTileset | InternalCesium3DTileFeature | undefined {
  const id = featureId ?? layerId;
  const keyName = featureId ? "featureId" : "layerId";
  if (!id) return;

  let entity = viewer.entities.getById(id);
  if (entity) return entity;

  entity = viewer.entities.values.find(e => getTag(e)?.[keyName] === id);
  if (entity) return entity;

  for (const ds of [viewer.dataSourceDisplay.dataSources, viewer.dataSources]) {
    for (let i = 0; i < ds.length; i++) {
      const entities = ds.get(i).entities.values;
      const e = entities.find(e => getTag(e)?.[keyName] === id);
      if (e) {
        return e;
      }
    }
  }

  // Find Cesium3DTileFeature
  for (let i = 0; i < viewer.scene.primitives.length; i++) {
    const prim = viewer.scene.primitives.get(i);
    if (!(prim instanceof Cesium3DTileset) || !prim.ready) {
      continue;
    }

    const target = findFeatureFrom3DTile(prim.root, featureId);
    if (target) {
      return target;
    }
  }

  // Find Cesium3DTileset
  for (let i = 0; i < viewer.scene.primitives.length; i++) {
    const prim = viewer.scene.primitives.get(i);
    if (!(prim instanceof Cesium3DTileset)) {
      continue;
    }

    const tag = getTag(prim);
    if (tag?.layerId && layerId && tag?.layerId === layerId) {
      return prim;
    }
  }

  return;
}

export function findFeaturesFromLayer<T = Entity | Cesium3DTileset | InternalCesium3DTileFeature>(
  viewer: CesiumViewer,
  layerId: string,
  featureId: string[],
  convert?: (e: Entity | Cesium3DTileset | InternalCesium3DTileFeature) => T,
): NonNullable<T>[] | undefined {
  const filterEntity = (es: Entity[]) => {
    const result: T[] = [];
    for (const e of es) {
      const tag = getTag(e);
      if (tag?.layerId === layerId && featureId.includes(tag.featureId || "")) {
        const f = convert?.(e);
        if (f) {
          result.push(f);
        } else if (e) {
          result.push(e as T);
        }
      }
    }
    return result;
  };
  const entity = filterEntity(viewer.entities.values);
  if (entity.length) return entity as NonNullable<T>[];

  let datasources: T[] = [];
  for (const ds of [viewer.dataSourceDisplay.dataSources, viewer.dataSources]) {
    for (let i = 0; i < ds.length; i++) {
      const entities = ds.get(i).entities.values;
      const e = filterEntity(entities);
      if (e.length) {
        datasources = datasources.concat(e);
      }
    }
  }

  if (datasources.length) {
    return datasources as NonNullable<T>[];
  }

  const targets: Set<T> = new Set();
  // Find Cesium3DTileFeature
  for (let i = 0; i < viewer.scene.primitives.length; i++) {
    const prim = viewer.scene.primitives.get(i);
    if (!(prim instanceof Cesium3DTileset) || !prim.ready) {
      continue;
    }

    findFeaturesFrom3DTile(prim.root, featureId, convert, targets);
  }

  if (targets.size) {
    return Array.from(targets.values()) as NonNullable<T>[];
  }

  return;
}

export const getEntityContent = (
  entity: Entity | ImageryLayerFeatureInfo,
  time: JulianDate,
  defaultContent: InfoboxProperty["defaultContent"],
): DefaultInfobox["content"] => {
  const content: Record<
    Exclude<InfoboxProperty["defaultContent"], undefined>,
    DefaultInfobox["content"]
  > = {
    description: {
      type: "html",
      value:
        entity instanceof ImageryLayerFeatureInfo
          ? entity.description
          : entity.description?.getValue(time),
    },
    attributes: {
      type: "table",
      value:
        !(entity instanceof Entity) &&
        "properties" in entity &&
        entity.properties &&
        typeof entity.properties === "object"
          ? propertiesToTableContent(entity.properties)
          : entity instanceof Entity && entity.properties
          ? propertiesToTableContent(entity.properties.getValue(time))
          : [],
    },
  };

  return defaultContent ? content[defaultContent] : content.attributes ?? content.description;
};

function propertiesToTableContent(properties: Record<string, any>): { key: string; value: any }[] {
  return Object.entries(properties).reduce<{ key: string; value: [string, string] }[]>(
    (a, [key, value]) => [...a, { key, value }],
    [],
  );
}

// Just a shortcut to the private property.
export function getPixelRatio(scene: Scene): number {
  return (
    scene as Scene & {
      pixelRatio: number;
    }
  ).pixelRatio;
}

export const convertObjToComputedFeature = (
  viewer: Viewer,
  obj: object,
): [layerId: string | undefined, feature: ComputedFeature] | undefined => {
  if (obj instanceof Cesium3DTileFeature || obj instanceof Cesium3DTilePointFeature) {
    const tag = getTag(obj);
    return [
      tag?.layerId,
      tag?.computedFeature ?? {
        type: "computedFeature",
        id: tag?.featureId ?? "",
        properties: Object.fromEntries(obj.getPropertyIds().map(id => [id, obj.getProperty(id)])),
      },
    ];
  }

  if (obj instanceof Model) {
    const tag = getTag(obj);
    return [
      tag?.layerId,
      {
        type: "computedFeature",
        id: tag?.featureId ?? "",
        properties: {},
      },
    ];
  }

  if (obj instanceof Entity) {
    const tag = getTag(obj);
    return [
      tag?.layerId,
      tag?.computedFeature ?? {
        type: "computedFeature",
        id: tag?.featureId ?? "",
        properties: obj.properties?.getValue(viewer.clock.currentTime),
      },
    ];
  }

  return;
};
