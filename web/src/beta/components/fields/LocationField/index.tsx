import { useCallback, useEffect, useState } from "react";

import { styled } from "@reearth/services/theme";

import Property from "..";
import NumberInput from "../common/NumberInput";

export type LatLng = {
  lat?: number;
  lng?: number;
};

type Props = {
  name?: string;
  description?: string;
  value?: LatLng;
  onChange?: (location: LatLng) => void;
};

const TextInput: React.FC<Props> = ({ name, description, value, onChange }) => {
  const [location, setLocation] = useState<LatLng>();

  useEffect(() => {
    if (value) setLocation(value);
  }, [value]);

  console.log(location);

  const handleChange = useCallback((coordination: string, newValue: number | undefined) => {
    if (newValue === undefined) return;

    setLocation(prevLocation => ({
      ...prevLocation,
      [coordination === "Latitude" ? "lat" : "lng"]: newValue,
    }));
  }, []);
  useEffect(() => {
    if (location) onChange?.(location);
  }, [location, onChange]);

  return (
    <Property name={name} description={description}>
      <Wrapper>
        <NumberInput
          inputDescription="Latitude"
          onChange={newValue => handleChange("Latitude", newValue)}
        />
        <NumberInput
          inputDescription="Longtitude"
          onChange={newValue => handleChange("Longtitude", newValue)}
        />
      </Wrapper>
    </Property>
  );
};

export default TextInput;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 289px;
  gap: 4px;
`;
