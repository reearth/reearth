import { Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

import type { Story, StoryPage } from "@reearth/beta/lib/core/StoryPanel/types";

import { useVisualizer } from "../Visualizer";

import { DEFAULT_STORY_PAGE_DURATION } from "./constants";

export type { Story, StoryPage } from "@reearth/beta/lib/core/StoryPanel/types";

export type StoryPanelRef = {
  currentPageId?: string;
  handleCurrentPageChange: (pageId: string, disableScrollIntoView?: boolean) => void;
};

export default (
  {
    selectedStory,
    isEditable,
    onCurrentPageChange,
  }: {
    selectedStory?: Story;
    isEditable?: boolean;
    onCurrentPageChange?: (id: string, disableScrollIntoView?: boolean) => void;
  },
  ref: Ref<StoryPanelRef>,
) => {
  const isAutoScrolling = useRef(false);

  const visualizer = useVisualizer();

  const [showPageSettings, setShowPageSettings] = useState(false);
  const [currentPageId, setCurrentPageId] = useState<string>();
  const [selectedPageId, setSelectedPageId] = useState<string>();
  const [selectedBlockId, setSelectedBlockId] = useState<string>();

  const handlePageSettingsToggle = useCallback(() => {
    if (!selectedPageId && !isEditable) return;
    setShowPageSettings(show => !show);
  }, [selectedPageId, isEditable]);

  const handlePageSelect = useCallback(
    (pageId?: string) => {
      if (!isEditable) return;
      if (selectedBlockId) {
        setSelectedBlockId(undefined);
      }
      setSelectedPageId(pid => (pageId && pid !== pageId ? pageId : undefined));
    },
    [selectedBlockId, isEditable],
  );

  const handleBlockSelect = useCallback(
    (blockId?: string) => {
      if (!isEditable) return;
      if (selectedPageId) {
        setSelectedPageId(undefined);
      }
      setSelectedBlockId(id => (!blockId || id === blockId ? undefined : blockId));
    },
    [selectedPageId, isEditable],
  );

  const onTimeChange = useCallback(
    (time: Date) => {
      return visualizer?.current?.timeline?.current?.commit({
        cmd: "SET_TIME",
        payload: {
          start: visualizer?.current?.timeline?.current?.computedTimeline?.start,
          current: time,
          stop: visualizer?.current?.timeline?.current?.computedTimeline?.stop,
        },
        committer: { source: "storyPage", id: currentPageId },
      });
    },
    [currentPageId, visualizer],
  );

  const handlePageTime = useCallback(
    (page: StoryPage) => {
      const timePointField = page.property?.timePoint;
      const currentTime = timePointField?.timePoint?.value;
      if (!currentTime) onTimeChange?.(new Date());
      else {
        const getNewDate = new Date(currentTime.substring(0, 19)).getTime();
        return onTimeChange?.(new Date(getNewDate));
      }
    },
    [onTimeChange],
  );

  const handleCurrentPageChange = useCallback(
    (pageId: string, disableScrollIntoView?: boolean) => {
      if (pageId === currentPageId) return;

      const newPage = getPage(pageId, selectedStory?.pages);
      if (!newPage) return;

      onCurrentPageChange?.(pageId);
      setCurrentPageId(pageId);

      if (!disableScrollIntoView) {
        const element = document.getElementById(newPage.id);
        isAutoScrolling.current = true;
        element?.scrollIntoView({ behavior: "smooth" });
      }
      handlePageTime(newPage);
      const cameraAnimation = newPage.property?.cameraAnimation;

      const destination = cameraAnimation?.cameraPosition?.value;
      if (!destination) return;

      const duration = cameraAnimation?.cameraDuration?.value ?? DEFAULT_STORY_PAGE_DURATION;

      visualizer.current?.engine.flyTo({ ...destination }, { duration });
    },
    [currentPageId, selectedStory?.pages, onCurrentPageChange, handlePageTime, visualizer],
  );

  const pageInfo = useMemo(() => {
    const pages = selectedStory?.pages ?? [];
    if ((pages?.length ?? 0) < 2) return;

    const currentIndex = pages.findIndex(p => p.id === currentPageId);
    return {
      currentPage: currentIndex + 1,
      maxPage: pages.length,
      onPageChange: (pageIndex: number) => handleCurrentPageChange(pages[pageIndex - 1]?.id),
    };
  }, [selectedStory, currentPageId, handleCurrentPageChange]);

  useImperativeHandle(
    ref,
    () => ({
      currentPageId,
      handleCurrentPageChange,
    }),
    [currentPageId, handleCurrentPageChange],
  );

  // Update what layers will be shown in the Visualizer on page change.
  useEffect(() => {
    const visualizerRef = visualizer.current;
    const currentPage = getPage(currentPageId, selectedStory?.pages);
    if (currentPage) {
      const currentLayerIds = visualizerRef?.layers.layers()?.map(l => l.id);
      if (currentLayerIds) {
        visualizerRef?.layers.show(
          ...currentLayerIds.filter(id => currentPage.layerIds?.includes(id)),
        );
        visualizerRef?.layers.hide(
          ...currentLayerIds.filter(id => !currentPage.layerIds?.includes(id)),
        );
      }
    }
    return () => {
      const currentLayerIds = visualizerRef?.layers.layers()?.map(l => l.id);
      // Resetting the layers so that the parent can modify layers' visibility
      // again through the layer object being passed to core/Visualizer
      visualizerRef?.layers.show(...(currentLayerIds ?? []));
    };
  }, [currentPageId, selectedStory?.pages, visualizer]);

  return {
    pageInfo,
    currentPageId,
    selectedPageId,
    selectedBlockId,
    showPageSettings,
    isAutoScrolling,
    handlePageSettingsToggle,
    handlePageSelect,
    handleBlockSelect,
    handleCurrentPageChange,
  };
};

const getPage = (id?: string, pages?: StoryPage[]) => {
  if (!id || !pages || !pages.length) return;
  return pages.find(p => p.id === id);
};
