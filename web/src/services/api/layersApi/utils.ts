import { GetSceneQuery } from "../../gql";

// export type NLSInfoboxBlock = {

// }

export type NLSInfobox = {
  id: string;
  sceneId: string;
  layerId: string;
  propertyId?: string;
  property?: any;
  blocks?: any[];
};

export type NLSLayer = {
  id: string;
  title: string;
  visible: boolean;
  layerType: string;
  config?: any;
  children?: NLSLayer[] | null;
  infobox?: NLSInfobox; // TODO: define infobox type
};

export const getLayers = (rawScene?: GetSceneQuery) => {
  const scene = rawScene?.node?.__typename === "Scene" ? rawScene.node : undefined;

  return scene?.newLayers?.map((l): NLSLayer => {
    return {
      id: l.id,
      title: l.title,
      visible: l.visible,
      layerType: l.layerType,
      config: l.config,
      infobox: l.infobox
        ? {
            id: l.infobox.id,
            sceneId: l.infobox.sceneId,
            layerId: l.infobox.layerId,
            propertyId: l.infobox.propertyId,
            property: l.infobox.property,
            blocks: l.infobox.blocks,
          }
        : undefined,
    };
  });
};
