import React, { useCallback, useMemo } from "react";

import Button from "@reearth/beta/components/Button";
import SelectField from "@reearth/beta/components/fields/SelectField";
import URLField from "@reearth/beta/components/fields/URLField";
import RadioGroup from "@reearth/beta/components/RadioGroup";
import Text from "@reearth/beta/components/Text";
import generateRandomString from "@reearth/beta/utils/generate-random-string";
import { useT } from "@reearth/services/i18n";

import { DataProps, FileFormatType, SourceType } from "..";
import {
  ColJustifyBetween,
  AssetWrapper,
  InputGroup,
  Input,
  SourceTypeWrapper,
  SubmitWrapper,
} from "../utils";

const DelimitedText: React.FC<DataProps> = ({ sceneId, onSubmit, onClose }) => {
  const t = useT();

  const [sourceType, setSourceType] = React.useState<SourceType>("local");
  const [value, setValue] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");
  const [fileFormat, setFileFormat] = React.useState<FileFormatType>("CSV");

  const DataSourceOptions = useMemo(
    () => [
      { label: t("From Assets"), keyValue: "local" },
      { label: t("From Web"), keyValue: "url" },
    ],
    [t],
  );

  const FileFormatOptions = useMemo(() => ["CSV"], []);

  const handleSubmit = () => {
    onSubmit({
      layerType: "simple",
      sceneId,
      title: generateRandomString(5),
      visible: true,
      config: {
        data: {
          url: (sourceType === "url" || sourceType === "local") && value !== "" ? value : null,
          type: fileFormat,
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

  const handleOnChange = useCallback((value?: string) => setValue(value || ""), []);

  return (
    <ColJustifyBetween>
      <AssetWrapper>
        <InputGroup
          label="Source Type"
          description="Select the type of data source you want to add.">
          <SourceTypeWrapper>
            <RadioGroup
              options={DataSourceOptions}
              selectedValue={sourceType}
              onChange={(newValue: string) => setSourceType(newValue as SourceType)}
            />
          </SourceTypeWrapper>
        </InputGroup>

        <SelectField
          value={fileFormat}
          options={FileFormatOptions.map(v => ({ key: v, label: v }))}
          name={t("File Format")}
          description={t("File format of the data source you want to add.")}
          onChange={(f: string) => setFileFormat(f as FileFormatType)}
        />

        {sourceType == "url" && (
          <InputGroup
            label={t("Resource URL")}
            description={t("URL of the data source you want to add.")}>
            <Input
              type="text"
              placeholder="Input Text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </InputGroup>
        )}
        {sourceType == "local" && (
          <URLField fileType="asset" value={value} name={t("Asset")} onChange={handleOnChange} />
        )}
        <Text size="body">Point coordinates</Text>
        <InputGroup label="Latitude Field" description="Description around">
          <Input
            type="text"
            placeholder="Input Text"
            value={lat}
            onChange={e => setLat(e.target.value)}
          />
        </InputGroup>
        <InputGroup label="Longitude Field" description="Description around">
          <Input
            type="text"
            placeholder="Input Text"
            value={long}
            onChange={e => setLong(e.target.value)}
          />
        </InputGroup>
      </AssetWrapper>
      <SubmitWrapper>
        <Button
          text="Add to Layer"
          buttonType="primary"
          size="medium"
          onClick={handleSubmit}
          disabled={(sourceType === "url" || sourceType === "value") && !value}
        />
      </SubmitWrapper>
    </ColJustifyBetween>
  );
};

export default DelimitedText;
