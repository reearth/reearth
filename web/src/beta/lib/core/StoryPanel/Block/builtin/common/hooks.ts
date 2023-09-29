import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  isSelected?: boolean;
  property?: any;
  onClick: (() => void) | undefined;
};

export default ({ isSelected, property, onClick }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!isSelected && editMode) {
      setEditMode(false);
    }
  }, [isSelected, editMode]);

  const handleBlockClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if ((showSettings && isSelected) || editMode) return;
      onClick?.();
    },
    [onClick, showSettings, isSelected, editMode],
  );

  const defaultSettings = useMemo(() => property?.default ?? property?.title, [property]);

  const padding = useMemo(() => property?.padding, [property]);

  const handleEditModeToggle = () => setEditMode?.(em => !em);

  const handleSettingsToggle = () => setShowSettings?.(s => !s);

  return {
    editMode,
    showSettings,
    defaultSettings,
    padding,
    setEditMode,
    handleEditModeToggle,
    handleSettingsToggle,
    handleBlockClick,
  };
};
