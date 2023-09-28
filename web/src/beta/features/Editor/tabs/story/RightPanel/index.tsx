import { useEffect, useMemo, useState } from "react";

import Settings from "@reearth/beta/features/Editor/Settings";
import SidePanelCommon from "@reearth/beta/features/Editor/SidePanel";
import type { FlyTo } from "@reearth/beta/lib/core/types";
import type { Camera } from "@reearth/beta/utils/value";
import { NLSLayer } from "@reearth/services/api/layersApi/utils";
import type { Page } from "@reearth/services/api/storytellingApi/utils";
import { useT } from "@reearth/services/i18n";

type Props = {
  sceneId?: string;
  selectedPage?: Page;
  currentCamera?: Camera;
  layers: NLSLayer[];
  onFlyTo?: FlyTo;
  onPageUpdate?: (id: string, layers: string[]) => void;
};

const StoryRightPanel: React.FC<Props> = ({
  selectedPage,
  currentCamera,
  layers,
  onPageUpdate,
  onFlyTo,
}) => {
  const t = useT();
  const [hasStory, setHasStory] = useState(false);

  const propertyItems = useMemo(
    () =>
      selectedPage?.property.items?.filter(
        p => p.schemaGroup !== "panel" && p.schemaGroup !== "title",
      ),
    [selectedPage?.property],
  );

  useEffect(() => {
    const containsStory = window.location.pathname.includes("/story");
    setHasStory(containsStory);
  }, []);

  return (
    <SidePanelCommon
      location="right"
      contents={[
        {
          id: "story",
          title: t("Page Settings"),
          children: selectedPage && (
            <Settings
              propertyId={selectedPage.property.id}
              propertyItems={propertyItems}
              currentCamera={currentCamera}
              layers={layers}
              hasStory={hasStory}
              selectedPage={selectedPage}
              onPageUpdate={onPageUpdate}
              onFlyTo={onFlyTo}
            />
          ),
        },
      ]}
    />
  );
};

export default StoryRightPanel;
