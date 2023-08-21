import { useCallback, useState } from "react";

type Props = {
  isSelected?: boolean;
  onClick: (() => void) | undefined;
};

export default ({ isSelected, onClick }: Props) => {
  const [isHovered, setHover] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPadding, setShowPadding] = useState(false);

  const handleEditModeToggle = useCallback(() => setEditMode(em => !em), []);

  const handleSettingsToggle = useCallback(() => setShowSettings(s => !s), []);

  const handleMouseEnter = useCallback(() => setHover(true), []);

  const handleMouseLeave = useCallback(() => setHover(false), []);

  const handleBlockClick = useCallback(() => {
    if (showSettings && isSelected) return;
    onClick?.();
  }, [onClick, showSettings, isSelected]);

  return {
    isHovered,
    editMode,
    showSettings,
    showPadding,
    setShowPadding,
    handleMouseEnter,
    handleMouseLeave,
    handleBlockClick,
    handleEditModeToggle,
    handleSettingsToggle,
  };
};
