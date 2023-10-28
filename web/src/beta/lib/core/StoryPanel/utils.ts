import { ValueTypes, ValueType } from "@reearth/beta/utils/value";
import type { Item } from "@reearth/services/api/propertyApi/utils";

import type { Spacing } from "../mantle";

export const getFieldValue = (items: Item[], fieldId: string, fieldGroup?: string) => {
  const d = items.find(i => i.schemaGroup === (fieldGroup ?? "default")) ?? items[0];
  const isList = d && "items" in d;
  const schemaField = d?.schemaFields.find(sf => sf.id === fieldId);
  return !isList
    ? d?.fields.find(f => f.id === schemaField?.id)?.value
    : d.items.map(item => ({
        id: item.id,
        ...item.fields.reduce((obj: { [id: string]: ValueTypes[ValueType] | undefined }, field) => {
          obj[field.id] = field.value;
          return obj;
        }, {}),
      }));
};

export const calculatePaddingValue = (
  defaultValue: Spacing,
  value?: Spacing,
  editorMode?: boolean,
) => {
  const calculateValue = (position: keyof Spacing, v?: number): { [key: string]: number } => {
    if (!v) {
      return {
        [position]: editorMode ? defaultValue[position] : 0,
      };
    }
    return {
      [position]: editorMode && v < defaultValue[position] ? defaultValue[position] : v,
    };
  };

  return value
    ? Object.assign(
        {},
        ...Object.keys(value).map(p =>
          calculateValue(p as keyof Spacing, value[p as keyof Spacing]),
        ),
      )
    : defaultValue;
};

const MONTH_LABEL_LIST = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateForTimeline = (time: number, options: { detail?: boolean } = {}) => {
  const d = new Date(time);

  const year = d.getFullYear();
  const month = MONTH_LABEL_LIST[d.getMonth()];
  const date = `${d.getDate()}`.padStart(2, "0");
  const hour = `${d.getHours()}`.padStart(2, "0");
  if (!options.detail) {
    return `${year} ${month} ${date} ${hour}:00:00.00`;
  }
  const minutes = `${d.getMinutes()}`.padStart(2, "0");
  const seconds = `${d.getSeconds()}`.padStart(2, "0");
  return `${year} ${month} ${date} ${hour}:${minutes}:${seconds}.00`;
};

export const formatDateForSliderTimeline = (time: number, options: { detail?: boolean } = {}) => {
  const d = new Date(time);

  const month = MONTH_LABEL_LIST[d.getMonth()];
  const date = `${d.getDate()}`.padStart(2, "0");
  const hour = `${d.getHours()}`.padStart(2, "0");
  if (!options.detail) {
    return `${month} ${date} ${hour}`;
  }
  const minutes = `${d.getMinutes()}`.padStart(2, "0");
  return ` ${month} ${date} ${hour}:${minutes}`;
};

export const formatDateToSting = (d: number) => {
  const date = new Date(d);
  return date.toISOString();
};

const timeStringToSeconds = (timeString: string) => {
  const parts = timeString.split("/");
  const valueUnit = parts[0].trim();
  const value = parseFloat(valueUnit);
  const unit = valueUnit.substr(value.toString().length).trim().toLowerCase();

  switch (unit) {
    case "sec":
    case "secs":
      return value;
    case "min":
    case "mins":
      return value * 60;
    case "hr":
    case "hrs":
      return value * 3600;
    default:
      return NaN;
  }
};

export const convertOptionToSeconds = (data: string[]) => {
  const objectsArray = [];

  for (const timeString of data) {
    const seconds = timeStringToSeconds(timeString);
    if (!isNaN(seconds)) {
      objectsArray.push({ timeString, seconds });
    }
  }

  return objectsArray;
};

export const formatRangeDateAndTime = (data: string) => {
  const lastIdx = data.lastIndexOf(" ");
  const date = data.slice(0, lastIdx);
  const time = data.slice(lastIdx + 1);
  return {
    date,
    time,
  };
};
