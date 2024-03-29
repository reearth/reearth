import { Meta } from "@storybook/react";

import DatasetSchemaCell from ".";

export default {
  title: "classic/molecules/EarthEditor/DatasetPane/DatasetSchemaCell",
  component: DatasetSchemaCell,
} as Meta;

export const Default = () => <DatasetSchemaCell name="Hoge" totalCount={10} />;
