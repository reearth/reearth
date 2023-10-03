import { FC } from "react";

import Button from "@reearth/beta/components/Button";
import generateRandomString from "@reearth/beta/utils/generate-random-string";
import { useT } from "@reearth/services/i18n";

import { DataProps } from "..";
import useHooks from "../hooks";
import {
  AddLayerWrapper,
  AssetWrapper,
  ColJustifyBetween,
  DeleteLayerIcon,
  Input,
  InputGroup,
  LayerWrapper,
  SubmitWrapper,
} from "../utils";

const VectorTiles: FC<DataProps> = ({ sceneId, onSubmit, onClose }) => {
  const {
    urlValue,
    layerValue,
    layerInput,
    layers,
    setUrlValue,
    setLayerValue,
    handleAddLayer,
    handleDeleteLayer,
    handleLayerInput,
  } = useHooks();

  const t = useT();

  const handleSubmit = () => {
    onSubmit({
      layerType: "simple",
      sceneId,
      title: generateRandomString(5),
      visible: true,
      config: {
        data: {
          url: urlValue !== "" ? urlValue : null,
          type: "mvt",
          layers: layers.length === 1 ? layers[0] : layers,
        },
        resource: {
          clampToGround: true,
        },
        marker: {
          heightReference: "clamp",
        },
        polygon: {
          heightReference: "clamp",
        },
        polyline: {
          clampToGround: true,
        },
      },
    });
    onClose();
  };

  return (
    <ColJustifyBetween>
      <AssetWrapper>
        <InputGroup
          label={t("Resource URL")}
          description={t("URL of the data source you want to add.")}>
          <Input
            type="text"
            placeholder="https://"
            value={urlValue}
            onChange={e => setUrlValue(e.target.value)}
          />
        </InputGroup>
        <InputGroup
          label={t("Choose layer to add")}
          description={t("Layer of the data source you want to add.")}>
          {layers.map((layer: string, index: number) => (
            <LayerWrapper key={index}>
              <Input type="text" placeholder={`${layer}`} disabled={true} />
              <DeleteLayerIcon icon="bin" size={16} onClick={() => handleDeleteLayer(index)} />
            </LayerWrapper>
          ))}
          {(!layers.length || layerInput) && (
            <LayerWrapper>
              <Input
                type="text"
                placeholder={t("layer name")}
                value={layerValue}
                onChange={e => setLayerValue(e.target.value)}
                onKeyDown={handleAddLayer}
              />
              <DeleteLayerIcon disabled={true} icon="bin" size={16} />
            </LayerWrapper>
          )}

          <AddLayerWrapper>
            <Button
              icon="plus"
              text={t("Layer")}
              buttonType="primary"
              size="small"
              onClick={handleLayerInput}
              disabled={!layerValue && !layers.length}
            />
          </AddLayerWrapper>
        </InputGroup>
      </AssetWrapper>
      <SubmitWrapper>
        <Button
          text={t("Add to Layer")}
          buttonType="primary"
          size="medium"
          onClick={handleSubmit}
          disabled={!urlValue}
        />
      </SubmitWrapper>
    </ColJustifyBetween>
  );
};

export default VectorTiles;
