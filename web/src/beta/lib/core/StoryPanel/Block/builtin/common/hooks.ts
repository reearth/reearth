import { useCallback, useMemo, useState } from "react";

import { Spacing } from "@reearth/beta/lib/core/mantle";
import useDoubleClick from "@reearth/beta/utils/use-double-click";

import { calculatePaddingValue } from "../../../utils";

export const DEFAULT_BLOCK_PADDING: Spacing = { top: 0, bottom: 0, left: 0, right: 0 };

export default ({
  name,
  isSelected,
  property,
  isEditable,
  onClick,
  onBlockDoubleClick,
}: {
  name?: string | null;
  isSelected?: boolean;
  property?: any;
  isEditable?: boolean;
  onClick: (() => void) | undefined;
  onBlockDoubleClick: (() => void) | undefined;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const title = useMemo(() => name ?? property?.title, [name, property?.title]);

  const handleBlockClick = useCallback(() => {
    if ((showSettings && isSelected) || editMode) return;
    onClick?.();
  }, [showSettings, isSelected, editMode, onClick]);

  const handleBlockDoubleClick = useCallback(() => {
    onBlockDoubleClick?.(), setEditMode(true);
  }, [onBlockDoubleClick]);

  const [handleSingleClick, handleDoubleClick] = useDoubleClick(
    () => handleBlockClick?.(),
    () => handleBlockDoubleClick?.(),
  );

  const defaultSettings = useMemo(() => property?.default ?? property?.title, [property]);

  const groupId = useMemo(
    () => (property?.default ? "default" : property?.title ? "title" : undefined),
    [property],
  );

  const panelSettings = useMemo(
    () => ({
      padding: {
        ...property?.panel?.padding,
        value: calculatePaddingValue(
          DEFAULT_BLOCK_PADDING,
          property?.panel?.padding.value,
          isEditable,
        ),
      },
    }),
    [property?.panel, isEditable],
  );

  const handleEditModeToggle = useCallback(() => setEditMode?.(em => !em), []);

  const handleSettingsToggle = useCallback(() => setShowSettings?.(s => !s), []);

  return {
    title,
    groupId,
    editMode,
    showSettings,
    defaultSettings,
    panelSettings,
    setEditMode,
    handleEditModeToggle,
    handleSettingsToggle,
    handleSingleClick,
    handleDoubleClick,
  };
};
