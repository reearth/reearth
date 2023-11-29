import { useEffect, useRef } from "react";

export type Visible = "always" | "desktop" | "mobile";

export const useVisible = ({
  visible: defaultVisible,
  onVisibilityChange,
}: {
  visible: Visible | undefined;
  onVisibilityChange: (() => void) | undefined;
}) => {
  const onVisibilityChangeRef = useRef(onVisibilityChange);
  onVisibilityChangeRef.current = onVisibilityChange;

  useEffect(() => {
    onVisibilityChangeRef.current?.();
  }, [defaultVisible]);
};