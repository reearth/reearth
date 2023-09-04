import React from "react";

import Button from "@reearth/beta/components/Button";
import Text from "@reearth/beta/components/Text";
import generateRandomString from "@reearth/beta/utils/generate-random-string";
import RadioButton from "@reearth/classic/components/atoms/RadioButton";

import { ColJustiftBetween, AssetWrapper, InputGroup, Input } from "./utils";

import { DataProps } from ".";

const DelimitedText: React.FC<DataProps> = ({ sceneId, onSubmit, onClose }) => {
  const [sourceType, setSourceType] = React.useState("url"); // ["url", "local", "value"]
  const [value, setValue] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  const handleSubmit = () => {
    onSubmit({
      layerType: "simple",
      sceneId,
      title: generateRandomString(5),
      config: {
        data: {
          url: sourceType === "url" && value !== "" ? value : null,
          type: "csv",
          csv: {
            latColumn: lat,
            lngColumn: long,
          },
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
    <ColJustiftBetween>
      <AssetWrapper>
        <InputGroup
          label="Source Type"
          description="Select the type of data source you want to add.">
          <div style={{ display: "flex", gap: "24px" }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <RadioButton
                value="url"
                checked={sourceType == "url"}
                handleChange={c => c && setSourceType("url")}
              />
              <span style={{ fontSize: "0.75rem" }}>From URL</span>
            </label>
          </div>
        </InputGroup>
        <InputGroup label="Resource URL" description="URL of the data source you want to add.">
          <Input
            type="text"
            placeholder="Input Text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </InputGroup>
        <Text size="body">Point coordinates</Text>
        <InputGroup label="Latitude Field" description="Description around">
          <Input
            type="number"
            placeholder="Input Text"
            value={lat}
            onChange={e => setLat(e.target.value)}
          />
        </InputGroup>
        <InputGroup label="Longitude Field" description="Description around">
          <Input
            type="number"
            placeholder="Input Text"
            value={long}
            onChange={e => setLong(e.target.value)}
          />
        </InputGroup>
      </AssetWrapper>
      <div
        style={{
          marginTop: "24px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <Button
          text="Add to Layer"
          buttonType="primary"
          size="medium"
          onClick={handleSubmit}
          disabled={(sourceType === "url" || sourceType === "value") && !value}
        />
      </div>
    </ColJustiftBetween>
  );
};

export default DelimitedText;
