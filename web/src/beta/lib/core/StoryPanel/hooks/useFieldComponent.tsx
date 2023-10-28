import CameraField from "@reearth/beta/components/fields/CameraField";
import ColorField from "@reearth/beta/components/fields/ColorField";
import LocationField from "@reearth/beta/components/fields/LocationField";
import NumberField from "@reearth/beta/components/fields/NumberField";
import SelectField from "@reearth/beta/components/fields/SelectField";
import SliderField from "@reearth/beta/components/fields/SliderField";
import SpacingInput from "@reearth/beta/components/fields/SpacingInput";
import TextField from "@reearth/beta/components/fields/TextField";
import TimelineField from "@reearth/beta/components/fields/TimelineField";
import ToggleField from "@reearth/beta/components/fields/ToggleField";
import URLField from "@reearth/beta/components/fields/URLField";
import { useT } from "@reearth/services/i18n";

import usePropertyUpdateHook from "../Block/builtin/common/useActionPropertyApi";

export const FieldComponent = ({
  propertyId,
  groupId,
  fieldId,
  field,
}: {
  propertyId: string;
  groupId: string;
  fieldId: string;
  field: any;
}) => {
  const t = useT();
  const { handlePropertyValueUpdate } = usePropertyUpdateHook();

  return field?.type === "spacing" ? (
    <SpacingInput
      key={field?.id}
      name={field?.title}
      value={field?.value}
      description={field?.description}
      min={field?.min}
      max={field?.max}
      onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
    />
  ) : field?.type === "bool" ? (
    <ToggleField
      key={field?.id}
      name={field?.title}
      checked={!!field?.value}
      description={field?.description}
      onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
    />
  ) : field?.type === "latlng" ? (
    <LocationField
      key={field?.id}
      name={field?.title}
      value={field?.value}
      description={field?.description}
      onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
    />
  ) : field?.type === "camera" ? (
    <CameraField
      key={field?.id}
      name={field?.name}
      value={field?.value}
      description={field?.description}
      // currentCamera={currentCamera}
      onSave={handlePropertyValueUpdate(propertyId, groupId, fieldId, field?.type)}
      // onFlyTo={onFlyTo}
    />
  ) : field?.type === "number" ? (
    field?.ui === "slider" ? (
      <SliderField
        name={field?.title}
        value={field?.value}
        min={field?.min}
        max={field?.max}
        description={field?.description}
        onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
      />
    ) : (
      <NumberField
        name={field?.title}
        value={field?.value}
        description={field?.description}
        onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
      />
    )
  ) : field?.type === "url" ? (
    <URLField
      name={field?.title}
      entityType={field?.ui === "image" ? "image" : field?.ui === "file" ? "file" : undefined}
      fileType={field?.ui === "video" || field?.ui === undefined ? "URL" : "asset"}
      value={field?.value}
      description={field?.description}
      onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
    />
  ) : field?.type === "string" ? (
    field?.ui === "color" ? (
      <ColorField
        name={field?.title}
        description={field?.description}
        onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
      />
    ) : field?.ui === "selection" || field?.choices ? (
      <SelectField
        name={field?.title}
        value={field?.value}
        description={field?.description}
        options={field?.choices}
        onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
      />
    ) : field?.ui === "buttons" ? (
      <p key={field?.id}>Button radio field</p>
    ) : (
      <TextField
        name={field?.title}
        value={field?.value}
        description={field?.description}
        onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
      />
    )
  ) : field?.type === "timeline" ? (
    <TimelineField
      name={field?.title}
      value={field?.value}
      description={field?.description}
      onChange={handlePropertyValueUpdate(groupId, propertyId, fieldId, field?.type)}
    />
  ) : (
    <div>{t("Unsupported field type")}</div>
  );
};
