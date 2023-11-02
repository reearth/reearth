import { MutableRefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { STORY_PANEL_CONTENT_ELEMENT_ID } from "../constants";
import type { StoryPage } from "../hooks";

export type { StoryPage } from "../hooks";
export { STORY_PANEL_CONTENT_ELEMENT_ID } from "../constants";

export default ({
  pages,
  currentPageId,
  isAutoScrolling,
  onBlockCreate,
  onBlockDelete,
  onCurrentPageChange,
}: {
  pages?: StoryPage[];
  currentPageId?: string;
  isAutoScrolling?: MutableRefObject<boolean>;
  onBlockCreate?: (
    pageId?: string | undefined,
    extensionId?: string | undefined,
    pluginId?: string | undefined,
    index?: number | undefined,
  ) => Promise<void>;
  onBlockDelete?: (pageId?: string | undefined, blockId?: string | undefined) => Promise<void>;
  onCurrentPageChange?: (pageId: string, disableScrollIntoView?: boolean) => void;
}) => {
  const scrollRef = useRef<number | undefined>(undefined);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const [pageGap, setPageGap] = useState<number>();

  const handleBlockCreate = useCallback(
    (pageId: string) =>
      (
        extensionId?: string | undefined,
        pluginId?: string | undefined,
        index?: number | undefined,
      ) =>
        onBlockCreate?.(pageId, extensionId, pluginId, index),
    [onBlockCreate],
  );

  const handleBlockDelete = useCallback(
    (pageId: string) => (blockId?: string) => onBlockDelete?.(pageId, blockId),
    [onBlockDelete],
  );

  useLayoutEffect(() => {
    const pageWrapperElement = document.getElementById(STORY_PANEL_CONTENT_ELEMENT_ID);
    if (pageWrapperElement) setPageGap(pageWrapperElement.clientHeight - 40); // 40px is the height of the page title block
  }, [setPageGap]);

  useEffect(() => {
    const resizeCallback = () => {
      const pageWrapperElement = document.getElementById(STORY_PANEL_CONTENT_ELEMENT_ID);
      if (pageWrapperElement) setPageGap(pageWrapperElement.clientHeight - 40); // 40px is the height of the page title block
    };
    window.addEventListener("resize", resizeCallback);
    return () => window.removeEventListener("resize", resizeCallback);
  }, []);

  useEffect(() => {
    const ids = pages?.map(p => p.id) as string[];
    const panelContentElement = document.getElementById(STORY_PANEL_CONTENT_ELEMENT_ID);

    const observer = new IntersectionObserver(
      entries => {
        // to avoid conflicts with page selection in core's parent
        if (isAutoScrolling?.current) {
          const wrapperElement = document.getElementById(STORY_PANEL_CONTENT_ELEMENT_ID);

          wrapperElement?.addEventListener("scroll", () => {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(function () {
              isAutoScrolling.current = false;
            }, 100);
          });

          return;
        }

        entries.forEach(entry => {
          const id = entry.target.getAttribute("id") ?? "";
          if (!id ?? currentPageId === id) return;

          const diff = (scrollRef.current as number) - (panelContentElement?.scrollTop as number);
          const isScrollingUp = diff > 0;

          if (entry.isIntersecting) {
            onCurrentPageChange?.(id, true);
            scrollRef.current = panelContentElement?.scrollTop;
            return;
          }
          const currentIndex = ids?.indexOf(id) as number;
          const prevEntry = ids[currentIndex - 1];
          if (isScrollingUp) {
            const id = prevEntry;
            onCurrentPageChange?.(id, true);
          }
        });
      },
      {
        root: panelContentElement,
        threshold: 0.2,
      },
    );
    ids?.forEach(id => {
      const e = document.getElementById(id);
      if (e) {
        observer.observe(e);
      }
    });
    return () => {
      ids?.forEach(id => {
        const e = document.getElementById(id);
        if (e) {
          observer.unobserve(e);
        }
      });
    };
  }, [pages, currentPageId, isAutoScrolling, onCurrentPageChange]);

  return {
    pageGap,
    handleBlockCreate,
    handleBlockDelete,
  };
};
