import moment from "moment-timezone";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getUniqueTimezones } from "@reearth/beta/utils/moment-timezone";

type Props = {
  value?: string;
  onChange?: (value?: string | undefined) => void;
  setDateTime?: (value?: string | undefined) => void;
};

type TimezoneInfo = {
  timezone: string;
  offset: string;
};

export default ({ value, onChange, setDateTime }: Props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState<TimezoneInfo>({
    offset: "+0:00",
    timezone: "Africa/Abidjan",
  });

  const handleTimeChange = useCallback((newValue: string | undefined) => {
    if (newValue === undefined) return;
    setTime(newValue);
  }, []);

  const handleDateChange = useCallback((newValue: string | undefined) => {
    if (newValue === undefined) return;
    setDate(newValue);
  }, []);

  const offsetFromUTC: TimezoneInfo[] = useMemo(() => {
    return getUniqueTimezones(moment.tz.names());
  }, []);

  const handleApplyChange = useCallback(() => {
    const selectedTimezoneInfo = offsetFromUTC.find(
      info => info.timezone === selectedTimezone.timezone,
    );
    if (selectedTimezoneInfo) {
      const formattedDateTime = `${date}T${time}:00${selectedTimezoneInfo.offset}`;
      setDateTime?.(formattedDateTime);
      onChange?.(formattedDateTime);
    }
  }, [offsetFromUTC, selectedTimezone, date, time, setDateTime, onChange]);

  const handleTimezoneSelect = useCallback(
    (newValue: string) => {
      const updatedTimezone = offsetFromUTC.find(info => info.timezone === newValue);
      setSelectedTimezone(updatedTimezone || selectedTimezone);
    },
    [offsetFromUTC, selectedTimezone],
  );

  useEffect(() => {
    if (value) {
      const [parsedDate, timeWithOffset] = value.split("T");
      const [parsedTime, timezoneOffset] = timeWithOffset.split(/[-+]/);

      setDate(parsedDate);
      setTime(parsedTime);

      const updatedTimezone = offsetFromUTC.find(
        info =>
          info.offset ===
          (timeWithOffset.includes("-") ? `-${timezoneOffset}` : `+${timezoneOffset}`),
      );
      updatedTimezone && setSelectedTimezone(updatedTimezone);
    } else {
      setDate("");
      setTime("");
      setSelectedTimezone({ offset: "+0:00", timezone: "Africa/Abidjan" });
    }
  }, [value, offsetFromUTC]);

  return {
    date,
    time,
    selectedTimezone,
    offsetFromUTC,
    onTimeChange: handleTimeChange,
    onTimezoneSelect: handleTimezoneSelect,
    onDateChange: handleDateChange,
    onDateTimeApply: handleApplyChange,
  };
};
