import { useCallback, useEffect, useMemo, useState } from "react";

import type { FlyTo } from "@reearth/beta/lib/core/types";
import type { Camera } from "@reearth/beta/utils/value";
import useStorytellingAPI from "@reearth/services/api/storytellingApi";
import type { Page } from "@reearth/services/api/storytellingApi/utils";
import { useT } from "@reearth/services/i18n";

type Props = {
  sceneId: string;
  onFlyTo: FlyTo;
};

const getPage = (id?: string, pages?: Page[]) => {
  if (!id || !pages || !pages.length) return;
  return pages.find(p => p.id === id);
};

export default function ({ sceneId, onFlyTo }: Props) {
  const t = useT();
  const {
    useStoriesQuery,
    useCreateStoryPage,
    useDeleteStoryPage,
    useMoveStoryPage,
    useMoveStoryBlock,
    useUpdateStoryPage,
    useInstallableStoryBlocksQuery,
  } = useStorytellingAPI();

  const { stories } = useStoriesQuery({ sceneId });

  const { installableStoryBlocks } = useInstallableStoryBlocksQuery({ sceneId });
  const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);
  const [isAutoScrolling, setAutoScrolling] = useState(false);

  const selectedStory = useMemo(() => {
    return stories?.length ? stories[0] : undefined;
  }, [stories]);

  const handleAutoScrollingChange = useCallback(
    (isScrolling: boolean) => setAutoScrolling(isScrolling),
    [],
  );

  useEffect(() => {
    if (!currentPage) {
      setCurrentPage(selectedStory?.pages?.[0]);
    }
  }, [currentPage, selectedStory?.pages]);

  const handleCurrentPageChange = useCallback(
    (pageId: string, disableScrollIntoView?: boolean) => {
      const newPage = getPage(pageId, selectedStory?.pages);
      if (!newPage) return;

      setCurrentPage(newPage);

      if (!disableScrollIntoView) {
        const element = document.getElementById(newPage.id);
        setAutoScrolling(true);
        element?.scrollIntoView({ behavior: "smooth" });
      }
      const camera = newPage.property.items?.find(i => i.schemaGroup === "cameraAnimation");
      if (camera && "fields" in camera) {
        const destination = camera.fields.find(f => f.id === "cameraPosition")?.value as Camera;
        if (!destination) return;

        const duration = camera.fields.find(f => f.id === "cameraDuration")?.value as number;
        onFlyTo({ ...destination }, { duration });
      }
    },
    [selectedStory?.pages, onFlyTo],
  );

  const handlePageDuplicate = useCallback(async (pageId: string) => {
    console.log("onPageDuplicate", pageId);
    alert("not implemented");
  }, []);

  const handlePageDelete = useCallback(
    async (pageId: string) => {
      if (!selectedStory) return;
      const pages = selectedStory?.pages ?? [];
      const deletedPageIndex = pages.findIndex(p => p.id === pageId);

      await useDeleteStoryPage({
        sceneId,
        storyId: selectedStory.id,
        pageId,
      });
      if (pageId === currentPage?.id) {
        setCurrentPage(pages[deletedPageIndex + 1] ?? pages[deletedPageIndex - 1]);
      }
    },
    [sceneId, currentPage?.id, selectedStory, useDeleteStoryPage],
  );

  const handlePageAdd = useCallback(
    async (isSwipeable: boolean) => {
      if (!selectedStory) return;
      await useCreateStoryPage({
        sceneId,
        storyId: selectedStory.id,
        swipeable: isSwipeable,
        title: t("Page"),
        index: selectedStory.pages?.length,
        layers: [],
        swipeableLayers: [],
      });
    },
    [useCreateStoryPage, sceneId, selectedStory, t],
  );

  const handlePageMove = useCallback(
    async (id: string, targetIndex: number) => {
      if (!selectedStory) return;
      await useMoveStoryPage({
        storyId: selectedStory.id,
        pageId: id,
        index: targetIndex,
      });
    },
    [useMoveStoryPage, selectedStory],
  );

  const handleStoryBlockMove = useCallback(
    async (id: string, targetIndex: number, blockId: string) => {
      if (!selectedStory) return;
      await useMoveStoryBlock({
        storyId: selectedStory.id,
        pageId: id,
        index: targetIndex,
        blockId,
      });
    },
    [useMoveStoryBlock, selectedStory],
  );

  const handlePageUpdate = useCallback(
    async (pageId: string, layers: string[]) => {
      if (!selectedStory) return;
      await useUpdateStoryPage({
        sceneId,
        storyId: selectedStory.id,
        pageId,
        layers,
      });
    },
    [sceneId, selectedStory, useUpdateStoryPage],
  );

  return {
    selectedStory,
    currentPage,
    isAutoScrolling,
    installableStoryBlocks,
    handleAutoScrollingChange,
    handleCurrentPageChange,
    handlePageDuplicate,
    handlePageDelete,
    handlePageAdd,
    handlePageMove,
    handleStoryBlockMove,
    handlePageUpdate,
  };
}
