import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from "@apollo/client";
import type { Preview } from "@storybook/react";
import { ReactElement } from "react";

import { Provider as DndProvider } from "../src/classic/util/use-dnd";
import { Provider as I18nProvider } from "../src/services/i18n";
import { Provider as ThemeProvider } from "../src/services/theme";

// apollo client that does nothing
const mockClient = new ApolloClient({
  link: new ApolloLink(
    () =>
      new Observable(observer => {
        observer.complete();
      }),
  ),
  cache: new InMemoryCache(),
});

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
  decorators: [
    (storyFn: () => ReactElement) => (
      <ApolloProvider client={mockClient}>
        <ThemeProvider>
          <I18nProvider>
            <DndProvider>{storyFn()}</DndProvider>
          </I18nProvider>
        </ThemeProvider>
      </ApolloProvider>
    ),
  ],
};

export default preview;
