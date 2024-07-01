import { useCallback, useEffect, useState } from "react";

import EditPanel from "@reearth/beta/components/fields/TimelineField/EditPanel";
import { Button, Icon, Typography } from "@reearth/beta/lib/reearth-ui";
import { useT } from "@reearth/services/i18n";
import { styled, useTheme } from "@reearth/services/theme";

import CommonField, { CommonFieldProps } from "./CommonField";

export type TimePeriodFieldProp = {
  currentTime: string;
  startTime: string;
  endTime: string;
};

export type TimePeriodFieldProps = CommonFieldProps & {
  value?: TimePeriodFieldProp;
  onChange?: (value?: TimePeriodFieldProp) => void;
};

const TimePeriodField: React.FC<TimePeriodFieldProps> = ({
  commonTitle,
  description,
  value,
  onChange,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const t = useT();
  const theme = useTheme();

  const handleTimePeriodModalClose = useCallback(() => setOpenModal(false), []);

  const handleTimePeriodModalOpen = useCallback(() => setOpenModal(true), []);

  const [timePeriodValues, setTimePeriodValues] = useState(value);

  const handleRemoveSetting = useCallback(() => {
    if (!value) return;
    onChange?.();
  }, [value, onChange]);

  useEffect(() => {
    setTimePeriodValues(value);
  }, [value]);

  return (
    <CommonField commonTitle={commonTitle} description={description}>
      <Wrapper>
        <InputWrapper disabled={true}>
          <SectionInput dataTimeSet={!!timePeriodValues}>
            <Timeline>
              <TextWrapper size="footnote" color={theme.content.main}>
                {timePeriodValues?.startTime ? timePeriodValues?.startTime : t("not set")}
              </TextWrapper>
              <TextWrapper size="footnote" color={theme.content.main}>
                {timePeriodValues?.currentTime ? timePeriodValues?.currentTime : t("not set")}
              </TextWrapper>
              <TextWrapper size="footnote" color={theme.content.main}>
                {timePeriodValues?.endTime ? timePeriodValues?.endTime : t("not set")}
              </TextWrapper>
            </Timeline>
            <DeleteIconWrapper onClick={handleRemoveSetting}>
              <DeleteIcon
                icon="trash"
                size="small"
                color={timePeriodValues ? theme.content.main : theme.content.weaker}
                disabled={!timePeriodValues}
              />
            </DeleteIconWrapper>
          </SectionInput>
          <TriggerButton
            appearance="secondary"
            title={t("set")}
            icon="clock"
            size="small"
            onClick={() => handleTimePeriodModalOpen()}
          />
        </InputWrapper>
      </Wrapper>
      {openModal && (
        <EditPanel
          timelineValues={timePeriodValues}
          onChange={onChange}
          onClose={handleTimePeriodModalClose}
          isVisible={openModal}
          setTimelineValues={setTimePeriodValues}
        />
      )}
    </CommonField>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
`;

const InputWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const SectionInput = styled.div<{ dataTimeSet?: boolean }>`
  gap: 14px;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.outline.weak};
  border-radius: 4px;
  height: auto;
  align-items: center;
  color: ${({ theme, dataTimeSet }) => (dataTimeSet ? theme.content.strong : theme.content.weak)};
`;

const Timeline = styled.div`
  padding-left: 26px;
  position: relative;
  width: 90%;
  &:before {
    position: absolute;
    content: "";
    width: 2px;
    background: ${({ theme }) => theme.outline.weak};
    top: 8px;
    bottom: 10px;
    left: 15px;
  }
  &:nth-of-type(2n) {
    &:before {
      display: none;
    }
  }
`;

const TextWrapper = styled(Typography)`
  position: relative;
  margin: 5px 0;
  :before {
    position: absolute;
  }
  ::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 22%;
    left: -15px;
    background: ${({ theme }) => theme.content.main};
    border: 1px solid ${({ theme }) => theme.outline.main};
  }
  &:nth-of-type(2) {
    ::after {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.outline.main};
    }
  }
`;

const TriggerButton = styled(Button)`
  margin: 0;
  height: 28px;
`;

const DeleteIconWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const DeleteIcon = styled(Icon)<{ disabled?: boolean }>`
  width: 10%;
`;

export default TimePeriodField;
