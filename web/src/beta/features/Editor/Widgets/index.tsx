import { FC, useRef } from "react";

import { Window, Area, AreaRef } from "@reearth/beta/ui/layout";

import ContainerSettingsPanel from "./ContainerSettingsPanel";
import { useWidgetsPage } from "./context";
import WASToolsPanel from "./WASToolsPanel";
import WidgetInspectorPanel from "./WidgetInspectorPanel";
import WidgetManagerPanel from "./WidgetManagerPanel";

const Widgets: FC = () => {
  const { onVisualizerResize, selectedWidgetArea, selectedWidget } = useWidgetsPage();

  const windowRef = useRef<HTMLDivElement>(null);
  const rightAreaRef = useRef<AreaRef>(null);

  return (
    <Window ref={windowRef}>
      <Area extend asWrapper>
        <Area direction="column" extend asWrapper>
          <Area height={34}>
            <WASToolsPanel />
          </Area>
          <Area extend onResize={onVisualizerResize} windowRef={windowRef} passive />
        </Area>
        <Area
          direction="column"
          resizableEdge="left"
          storageId="editor-widgets-right-area"
          ref={rightAreaRef}>
          <WidgetManagerPanel showCollapseArea areaRef={rightAreaRef} />
          {selectedWidget && <WidgetInspectorPanel />}
          {selectedWidgetArea && <ContainerSettingsPanel />}
        </Area>
      </Area>
    </Window>
  );
};

export default Widgets;
