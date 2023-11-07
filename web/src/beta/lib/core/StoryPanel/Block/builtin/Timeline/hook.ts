import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  TickEventCallback,
  TimelineCommitter,
} from "@reearth/beta/lib/core/Map/useTimelineManager";
import { Range } from "@reearth/beta/lib/core/StoryPanel/Block/types";
import {
  convertPositionToTime,
  formatDateForSliderTimeline,
  formatDateForTimeline,
  formatRangeDateAndTime,
} from "@reearth/beta/lib/core/StoryPanel/utils";

import { getNewDate } from "../../../hooks/useTimelineBlock";

import { TimelineValues } from ".";

type TimelineProps = {
  currentTime: number;
  range?: Range;
  isSelected?: boolean;
  blockId?: string;
  inEditor?: boolean;
  speed: number;
  playMode?: string;
  timelineValues?: TimelineValues;
  onPlay?: (committer: TimelineCommitter) => void;
  onSpeedChange?: (speed: number, committerId?: string) => void;
  onPause: (committerId: string) => void;
  onTimeChange?: (time: Date, committerId?: string) => void;
  onCommit?: (cb: (committer: TimelineCommitter) => void) => void | undefined;
  removeOnCommitEventListener?: (cb: (committer: TimelineCommitter) => void) => void | undefined;
  onTick?: (cb: TickEventCallback) => void | undefined;
  removeTickEventListener?: (cb: TickEventCallback) => void | undefined;
  setCurrentTime?: (t: number) => void;
};

type TimeEventHandler = (time: Date, committerId: string) => void;

export default ({
  currentTime,
  range,
  isSelected,
  blockId,
  inEditor,
  speed,
  playMode,
  timelineValues,
  onPlay,
  onSpeedChange,
  onPause,
  onTimeChange,
  onCommit,
  onTick,
  removeOnCommitEventListener,
  removeTickEventListener,
  setCurrentTime,
}: TimelineProps) => {
  const [isPause, setIsPause] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeBlock, setActiveBlock] = useState("");
  const [isPlayingReversed, setIsPlayingReversed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [committer, setCommiter] = useState<TimelineCommitter>({
    source: "storyTimelineBlock",
    id: blockId,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [selected, setSelected] = useState("1min/sec");
  const formattedCurrentTime = useMemo(() => {
    const textDate = formatDateForTimeline(currentTime, { detail: true });
    return textDate;
  }, [currentTime]);

  const current = formatRangeDateAndTime(
    formatDateForSliderTimeline(currentTime, { detail: true }),
  );

  const timeRange = useMemo(() => {
    if (range) {
      return {
        startTime: formatRangeDateAndTime(
          formatDateForSliderTimeline(range.start, { detail: true }),
        ),
        midTime: formatRangeDateAndTime(formatDateForSliderTimeline(range.mid, { detail: true })),
        endTime: formatRangeDateAndTime(formatDateForSliderTimeline(range.end, { detail: true })),
      };
    }
    return {};
  }, [range]);

  const handlePopOver = useCallback(() => {
    !inEditor && setIsOpen(!isOpen);
  }, [inEditor, isOpen]);

  const handleOnSelect = useCallback(
    (value: string, second: number) => {
      if (!inEditor) {
        setIsOpen(false);
        value !== selected && setSelected(value);
        isPlayingReversed
          ? onSpeedChange?.(second * -1, committer.id)
          : onSpeedChange?.(second, committer.id);
      }
    },
    [committer.id, inEditor, isPlayingReversed, onSpeedChange, selected],
  );

  useEffect(() => {
    if (isSelected)
      setCommiter(prev => {
        return { source: prev.source, id: blockId };
      });
  }, [blockId, isSelected]);

  const handleOnSpeedChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      onSpeedChange?.(parseInt(e.currentTarget.value, 10), committer.id);
    },
    [committer, onSpeedChange],
  );

  const handleOnPlay = useCallback(() => {
    if (!inEditor) {
      if (isPlayingReversed || isPause) {
        setIsPlayingReversed?.(false);
        setIsPause(false);
      }
      onPlay?.(committer);
      setIsActive(true);
      committer?.id && setActiveBlock(committer.id);
      onTimeChange?.(new Date(currentTime), committer.id);
      onSpeedChange?.(Math.abs(speed), committer.id);
      setIsPlaying(true);
    }
  }, [
    inEditor,
    isPlayingReversed,
    isPause,
    onPlay,
    committer,
    onTimeChange,
    currentTime,
    onSpeedChange,
    speed,
  ]);

  const handleOnPlayReversed = useCallback(() => {
    if (!inEditor) {
      if (isPlaying || isPause) {
        setIsPause(false);
        setIsPlaying(false);
      }
      onPlay?.(committer);
      setIsActive(true);
      setIsPlayingReversed(true);
      committer?.id && setActiveBlock(committer.id);
      onTimeChange?.(new Date(currentTime), committer.id);
      onSpeedChange?.(Math.abs(speed) * -1, committer.id);
    }
  }, [
    committer,
    currentTime,
    inEditor,
    isPause,
    isPlaying,
    onPlay,
    onSpeedChange,
    onTimeChange,
    speed,
  ]);

  const handleOnPause = useCallback(() => {
    if (!inEditor) {
      if (isPlayingReversed || isPlaying) {
        setIsPlayingReversed?.(false);
        setIsPlaying?.(false);
      }
      committer?.id && onPause?.(committer.id);
      setIsPause(!isPause);
    }
  }, [committer.id, inEditor, isPause, isPlaying, isPlayingReversed, onPause]);

  const handleTick = useCallback(
    (current: Date) => {
      return setCurrentTime?.(current.getTime());
    },
    [setCurrentTime],
  );

  const handleOnReset = useCallback(() => {
    if (!range) return;
    onTimeChange?.(new Date(range?.start), committer.id);
    setCurrentTime?.(range?.start);
    isPlaying && setIsPlaying(false);
    isPlayingReversed && setIsPlayingReversed(false);
    committer.id && onPause(committer.id);
  }, [range, onTimeChange, committer.id, setCurrentTime, isPlaying, isPlayingReversed, onPause]);

  const handleOnResetAndPlay = useCallback(() => {
    if (!range) return;
    onTimeChange?.(new Date(range?.start), committer.id);
    if (isPlayingReversed) onTimeChange?.(new Date(range?.end), committer.id);
  }, [range, onTimeChange, committer.id, isPlayingReversed]);

  const handleTimelineCommitterChange = useCallback(
    (committer: TimelineCommitter) => {
      if (
        isActive &&
        (committer.source !== "storyTimelineBlock" || committer.id !== activeBlock) &&
        range
      ) {
        setActiveBlock(" ");
        setIsActive(false);
        setIsPause(false);
        setIsPlaying(false);
        setIsPlayingReversed(false);

        const currentTimeValue = timelineValues?.currentTime ?? "";
        timelineValues
          ? setCurrentTime?.(getNewDate(new Date(currentTimeValue.substring(0, 19))).getTime())
          : setCurrentTime?.(range?.start);
      }
    },
    [activeBlock, isActive, range, setCurrentTime, timelineValues],
  );

  useEffect(() => {
    if (
      (isPlaying && JSON.stringify(current) >= JSON.stringify(timeRange.endTime)) ||
      (isPlayingReversed && JSON.stringify(current) <= JSON.stringify(timeRange.startTime))
    ) {
      if (playMode === "loop") {
        return handleOnResetAndPlay();
      } else {
        return handleOnReset();
      }
    }
  }, [
    current,
    handleOnPause,
    handleOnPlay,
    handleOnReset,
    handleOnResetAndPlay,
    isPlaying,
    isPlayingReversed,
    playMode,
    timeRange.endTime,
    timeRange.startTime,
  ]);

  useEffect(() => {
    if (isActive) onTick?.(handleTick), onCommit?.(handleTimelineCommitterChange);
    return () => {
      removeTickEventListener?.(handleTick);
      removeOnCommitEventListener?.(handleTimelineCommitterChange);
    };
  }, [
    handleTick,
    handleTimelineCommitterChange,
    isActive,
    isPlaying,
    isPlayingReversed,
    onCommit,
    onTick,
    removeOnCommitEventListener,
    removeTickEventListener,
  ]);

  const handleOnDrag: TimeEventHandler = useCallback(
    (time: Date, committerId: string) => {
      onTimeChange?.(time, committerId);
      setCurrentTime?.(currentTime);
    },
    [currentTime, onTimeChange, setCurrentTime],
  );

  const handleOnMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleOnMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleOnMouseMove: MouseEventHandler = useCallback(
    e => {
      if (isDragging || !handleOnDrag || !e.target || !range) {
        return;
      }
      if (isPlaying || isPlayingReversed) {
        const conv = convertPositionToTime(e as unknown as MouseEvent, range.start, range.end);
        committer?.id && handleOnDrag(new Date(conv), committer?.id);
      }
    },
    [isDragging, handleOnDrag, range, isPlaying, isPlayingReversed, committer?.id],
  );

  useEffect(() => {
    window.addEventListener("mouseup", handleOnMouseUp, { passive: true });
    return () => {
      window.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [handleOnMouseUp]);

  const handleOnClick: MouseEventHandler = useCallback(
    e => {
      if ((isPlaying || isPlayingReversed) && range) {
        const conv = convertPositionToTime(e as unknown as MouseEvent, range.start, range.end);
        committer?.id && handleOnDrag(new Date(conv), committer?.id);
      }
    },
    [handleOnDrag, isPlaying, isPlayingReversed, range, committer?.id],
  );

  const sliderPosition = useMemo(() => {
    if (range) {
      if (!inEditor) {
        const totalRange = range?.end - range.start;
        const currentPosition = currentTime - range.start;
        let positionPercentage = (currentPosition / totalRange) * 370;

        positionPercentage = Math.max(positionPercentage, 16);
        positionPercentage = Math.round(positionPercentage);
        return positionPercentage;
      }
    }
    return 16;
  }, [range, inEditor, currentTime]);

  return {
    formattedCurrentTime,
    timeRange,
    isPlaying: isPlaying,
    isPlayingReversed,
    isPause,
    sliderPosition,
    isOpen,
    selected,
    isActive,
    handleOnSelect,
    handlePopOver,
    toggleIsPlaying: handleOnPlay,
    toggleIsPlayingReversed: handleOnPlayReversed,
    toggleIsPause: handleOnPause,
    handleOnSpeedChange,
    handleOnMouseDown,
    handleOnMouseMove,
    handleOnClick,
  };
};
