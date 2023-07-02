import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../server/gql/*.graphql",
  documents: [
    "src/services/gql/fragments/*.ts",
    "src/services/gql/queries/*.ts",
    "src/services/**/*.graphql",
  ],
  generates: {
    "./src/services/gql/graphql-client-api.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        useTypeImports: true,
        scalars: {
          DateTime: "Date",
          FileSize: "number",
          ID: "string",
          Cursor: "string",
          URL: "string",
          Lang: "string",
          TranslatedString: "{ [lang in string]?: string } | null",
        },
      },
    },
    "./src/services/gql/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/services/gql/fragmentMatcher.json": {
      plugins: ["fragment-matcher"],
    },
  },
};

export default config;
