/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Cursor: { input: string; output: string; }
  DateTime: { input: Date; output: Date; }
  FileSize: { input: number; output: number; }
  Lang: { input: string; output: string; }
  TranslatedString: { input: { [lang in string]?: string } | null; output: { [lang in string]?: string } | null; }
  URL: { input: string; output: string; }
  Upload: { input: any; output: any; }
};

export type AddClusterInput = {
  name: Scalars['String']['input'];
  sceneId: Scalars['ID']['input'];
};

export type AddClusterPayload = {
  __typename?: 'AddClusterPayload';
  cluster: Cluster;
  scene: Scene;
};

export type AddDatasetSchemaInput = {
  name: Scalars['String']['input'];
  representativefield?: InputMaybe<Scalars['ID']['input']>;
  sceneId: Scalars['ID']['input'];
};

export type AddDatasetSchemaPayload = {
  __typename?: 'AddDatasetSchemaPayload';
  datasetSchema?: Maybe<DatasetSchema>;
};

export type AddInfoboxFieldInput = {
  extensionId: Scalars['ID']['input'];
  index?: InputMaybe<Scalars['Int']['input']>;
  layerId: Scalars['ID']['input'];
  pluginId: Scalars['ID']['input'];
};

export type AddInfoboxFieldPayload = {
  __typename?: 'AddInfoboxFieldPayload';
  infoboxField: InfoboxField;
  layer: Layer;
};

export type AddLayerGroupInput = {
  extensionId?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  linkedDatasetSchemaID?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentLayerId: Scalars['ID']['input'];
  pluginId?: InputMaybe<Scalars['ID']['input']>;
  representativeFieldId?: InputMaybe<Scalars['ID']['input']>;
};

export type AddLayerGroupPayload = {
  __typename?: 'AddLayerGroupPayload';
  index?: Maybe<Scalars['Int']['output']>;
  layer: LayerGroup;
  parentLayer: LayerGroup;
};

export type AddLayerItemInput = {
  extensionId: Scalars['ID']['input'];
  index?: InputMaybe<Scalars['Int']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentLayerId: Scalars['ID']['input'];
  pluginId: Scalars['ID']['input'];
};

export type AddLayerItemPayload = {
  __typename?: 'AddLayerItemPayload';
  index?: Maybe<Scalars['Int']['output']>;
  layer: LayerItem;
  parentLayer: LayerGroup;
};

export type AddMemberToTeamInput = {
  role: Role;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type AddMemberToTeamPayload = {
  __typename?: 'AddMemberToTeamPayload';
  team: Team;
};

export type AddPropertyItemInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  nameFieldType?: InputMaybe<ValueType>;
  nameFieldValue?: InputMaybe<Scalars['Any']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId: Scalars['ID']['input'];
};

export type AddWidgetInput = {
  extensionId: Scalars['ID']['input'];
  pluginId: Scalars['ID']['input'];
  sceneId: Scalars['ID']['input'];
};

export type AddWidgetPayload = {
  __typename?: 'AddWidgetPayload';
  scene: Scene;
  sceneWidget: SceneWidget;
};

export type Asset = Node & {
  __typename?: 'Asset';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  size: Scalars['FileSize']['output'];
  team?: Maybe<Team>;
  teamId: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type AssetConnection = {
  __typename?: 'AssetConnection';
  edges: Array<AssetEdge>;
  nodes: Array<Maybe<Asset>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Asset>;
};

export enum AssetSortType {
  Date = 'DATE',
  Name = 'NAME',
  Size = 'SIZE'
}

export type AttachTagItemToGroupInput = {
  groupID: Scalars['ID']['input'];
  itemID: Scalars['ID']['input'];
};

export type AttachTagItemToGroupPayload = {
  __typename?: 'AttachTagItemToGroupPayload';
  tag: TagGroup;
};

export type AttachTagToLayerInput = {
  layerID: Scalars['ID']['input'];
  tagID: Scalars['ID']['input'];
};

export type AttachTagToLayerPayload = {
  __typename?: 'AttachTagToLayerPayload';
  layer: Layer;
};

export type Camera = {
  __typename?: 'Camera';
  altitude: Scalars['Float']['output'];
  fov: Scalars['Float']['output'];
  heading: Scalars['Float']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  pitch: Scalars['Float']['output'];
  roll: Scalars['Float']['output'];
};

export type Cluster = {
  __typename?: 'Cluster';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  property?: Maybe<Property>;
  propertyId: Scalars['ID']['output'];
};

export type CreateAssetInput = {
  file: Scalars['Upload']['input'];
  teamId: Scalars['ID']['input'];
};

export type CreateAssetPayload = {
  __typename?: 'CreateAssetPayload';
  asset: Asset;
};

export type CreateInfoboxInput = {
  layerId: Scalars['ID']['input'];
};

export type CreateInfoboxPayload = {
  __typename?: 'CreateInfoboxPayload';
  layer: Layer;
};

export type CreateProjectInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  coreSupport?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['URL']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
  visualizer: Visualizer;
};

export type CreateSceneInput = {
  projectId: Scalars['ID']['input'];
};

export type CreateScenePayload = {
  __typename?: 'CreateScenePayload';
  scene: Scene;
};

export type CreateTagGroupInput = {
  label: Scalars['String']['input'];
  sceneId: Scalars['ID']['input'];
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateTagGroupPayload = {
  __typename?: 'CreateTagGroupPayload';
  tag: TagGroup;
};

export type CreateTagItemInput = {
  label: Scalars['String']['input'];
  linkedDatasetField?: InputMaybe<Scalars['ID']['input']>;
  linkedDatasetID?: InputMaybe<Scalars['ID']['input']>;
  linkedDatasetSchemaID?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  sceneId: Scalars['ID']['input'];
};

export type CreateTagItemPayload = {
  __typename?: 'CreateTagItemPayload';
  parent?: Maybe<TagGroup>;
  tag: TagItem;
};

export type CreateTeamInput = {
  name: Scalars['String']['input'];
};

export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  team: Team;
};

export type Dataset = Node & {
  __typename?: 'Dataset';
  fields: Array<DatasetField>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<DatasetSchema>;
  schemaId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
};

export type DatasetConnection = {
  __typename?: 'DatasetConnection';
  edges: Array<DatasetEdge>;
  nodes: Array<Maybe<Dataset>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DatasetEdge = {
  __typename?: 'DatasetEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Dataset>;
};

export type DatasetField = {
  __typename?: 'DatasetField';
  field?: Maybe<DatasetSchemaField>;
  fieldId: Scalars['ID']['output'];
  schema?: Maybe<DatasetSchema>;
  schemaId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
  type: ValueType;
  value?: Maybe<Scalars['Any']['output']>;
  valueRef?: Maybe<Dataset>;
};

export type DatasetSchema = Node & {
  __typename?: 'DatasetSchema';
  datasets: DatasetConnection;
  dynamic?: Maybe<Scalars['Boolean']['output']>;
  fields: Array<DatasetSchemaField>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  representativeField?: Maybe<DatasetSchemaField>;
  representativeFieldId?: Maybe<Scalars['ID']['output']>;
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
  totalCount: Scalars['Int']['output'];
};


export type DatasetSchemaDatasetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DatasetSchemaConnection = {
  __typename?: 'DatasetSchemaConnection';
  edges: Array<DatasetSchemaEdge>;
  nodes: Array<Maybe<DatasetSchema>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DatasetSchemaEdge = {
  __typename?: 'DatasetSchemaEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<DatasetSchema>;
};

export type DatasetSchemaField = Node & {
  __typename?: 'DatasetSchemaField';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ref?: Maybe<DatasetSchema>;
  refId?: Maybe<Scalars['ID']['output']>;
  schema?: Maybe<DatasetSchema>;
  schemaId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
  type: ValueType;
};

export type DeleteMeInput = {
  userId: Scalars['ID']['input'];
};

export type DeleteMePayload = {
  __typename?: 'DeleteMePayload';
  userId: Scalars['ID']['output'];
};

export type DeleteProjectInput = {
  projectId: Scalars['ID']['input'];
};

export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  projectId: Scalars['ID']['output'];
};

export type DeleteTeamInput = {
  teamId: Scalars['ID']['input'];
};

export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload';
  teamId: Scalars['ID']['output'];
};

export type DetachTagFromLayerInput = {
  layerID: Scalars['ID']['input'];
  tagID: Scalars['ID']['input'];
};

export type DetachTagFromLayerPayload = {
  __typename?: 'DetachTagFromLayerPayload';
  layer: Layer;
};

export type DetachTagItemFromGroupInput = {
  groupID: Scalars['ID']['input'];
  itemID: Scalars['ID']['input'];
};

export type DetachTagItemFromGroupPayload = {
  __typename?: 'DetachTagItemFromGroupPayload';
  tag: TagGroup;
};

export type ImportDatasetFromGoogleSheetInput = {
  accessToken: Scalars['String']['input'];
  datasetSchemaId?: InputMaybe<Scalars['ID']['input']>;
  fileId: Scalars['String']['input'];
  sceneId: Scalars['ID']['input'];
  sheetName: Scalars['String']['input'];
};

export type ImportDatasetInput = {
  datasetSchemaId?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
  sceneId: Scalars['ID']['input'];
};

export type ImportDatasetPayload = {
  __typename?: 'ImportDatasetPayload';
  datasetSchema: DatasetSchema;
};

export type ImportLayerInput = {
  file: Scalars['Upload']['input'];
  format: LayerEncodingFormat;
  layerId: Scalars['ID']['input'];
};

export type ImportLayerPayload = {
  __typename?: 'ImportLayerPayload';
  layers: Array<Layer>;
  parentLayer: LayerGroup;
};

export type Infobox = {
  __typename?: 'Infobox';
  fields: Array<InfoboxField>;
  layer: Layer;
  layerId: Scalars['ID']['output'];
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetId?: Maybe<Scalars['ID']['output']>;
  merged?: Maybe<MergedInfobox>;
  property?: Maybe<Property>;
  propertyId: Scalars['ID']['output'];
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
};

export type InfoboxField = {
  __typename?: 'InfoboxField';
  extension?: Maybe<PluginExtension>;
  extensionId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  infobox: Infobox;
  layer: Layer;
  layerId: Scalars['ID']['output'];
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetId?: Maybe<Scalars['ID']['output']>;
  merged?: Maybe<MergedInfoboxField>;
  plugin?: Maybe<Plugin>;
  pluginId: Scalars['ID']['output'];
  property?: Maybe<Property>;
  propertyId: Scalars['ID']['output'];
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
  scenePlugin?: Maybe<ScenePlugin>;
};

export type InstallPluginInput = {
  pluginId: Scalars['ID']['input'];
  sceneId: Scalars['ID']['input'];
};

export type InstallPluginPayload = {
  __typename?: 'InstallPluginPayload';
  scene: Scene;
  scenePlugin: ScenePlugin;
};

export type LatLng = {
  __typename?: 'LatLng';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type LatLngHeight = {
  __typename?: 'LatLngHeight';
  height: Scalars['Float']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type Layer = {
  extension?: Maybe<PluginExtension>;
  extensionId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  infobox?: Maybe<Infobox>;
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<LayerGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['ID']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  sceneId: Scalars['ID']['output'];
  scenePlugin?: Maybe<ScenePlugin>;
  tags: Array<LayerTag>;
};

export enum LayerEncodingFormat {
  Czml = 'CZML',
  Geojson = 'GEOJSON',
  Kml = 'KML',
  Reearth = 'REEARTH',
  Shape = 'SHAPE'
}

export type LayerGroup = Layer & {
  __typename?: 'LayerGroup';
  extension?: Maybe<PluginExtension>;
  extensionId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  infobox?: Maybe<Infobox>;
  isVisible: Scalars['Boolean']['output'];
  layerIds: Array<Scalars['ID']['output']>;
  layers: Array<Maybe<Layer>>;
  linkedDatasetSchema?: Maybe<DatasetSchema>;
  linkedDatasetSchemaId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<LayerGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['ID']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  root: Scalars['Boolean']['output'];
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
  scenePlugin?: Maybe<ScenePlugin>;
  tags: Array<LayerTag>;
};

export type LayerItem = Layer & {
  __typename?: 'LayerItem';
  extension?: Maybe<PluginExtension>;
  extensionId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  infobox?: Maybe<Infobox>;
  isVisible: Scalars['Boolean']['output'];
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetId?: Maybe<Scalars['ID']['output']>;
  merged?: Maybe<MergedLayer>;
  name: Scalars['String']['output'];
  parent?: Maybe<LayerGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  plugin?: Maybe<Plugin>;
  pluginId?: Maybe<Scalars['ID']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
  scenePlugin?: Maybe<ScenePlugin>;
  tags: Array<LayerTag>;
};

export type LayerTag = {
  tag?: Maybe<Tag>;
  tagId: Scalars['ID']['output'];
};

export type LayerTagGroup = LayerTag & {
  __typename?: 'LayerTagGroup';
  children: Array<LayerTagItem>;
  tag?: Maybe<Tag>;
  tagId: Scalars['ID']['output'];
};

export type LayerTagItem = LayerTag & {
  __typename?: 'LayerTagItem';
  tag?: Maybe<Tag>;
  tagId: Scalars['ID']['output'];
};

export type LinkDatasetToPropertyValueInput = {
  datasetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  datasetSchemaFieldIds: Array<Scalars['ID']['input']>;
  datasetSchemaIds: Array<Scalars['ID']['input']>;
  fieldId: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ListOperation {
  Add = 'ADD',
  Move = 'MOVE',
  Remove = 'REMOVE'
}

export type Me = {
  __typename?: 'Me';
  auths: Array<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lang: Scalars['Lang']['output'];
  myTeam: Team;
  myTeamId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  teams: Array<Team>;
  theme: Theme;
};

export type MergedInfobox = {
  __typename?: 'MergedInfobox';
  fields: Array<MergedInfoboxField>;
  property?: Maybe<MergedProperty>;
  scene?: Maybe<Scene>;
  sceneID: Scalars['ID']['output'];
};

export type MergedInfoboxField = {
  __typename?: 'MergedInfoboxField';
  extension?: Maybe<PluginExtension>;
  extensionId: Scalars['ID']['output'];
  originalId: Scalars['ID']['output'];
  plugin?: Maybe<Plugin>;
  pluginId: Scalars['ID']['output'];
  property?: Maybe<MergedProperty>;
  scene?: Maybe<Scene>;
  sceneID: Scalars['ID']['output'];
  scenePlugin?: Maybe<ScenePlugin>;
};

export type MergedLayer = {
  __typename?: 'MergedLayer';
  infobox?: Maybe<MergedInfobox>;
  original?: Maybe<LayerItem>;
  originalId: Scalars['ID']['output'];
  parent?: Maybe<LayerGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  property?: Maybe<MergedProperty>;
  scene?: Maybe<Scene>;
  sceneID: Scalars['ID']['output'];
};

export type MergedProperty = {
  __typename?: 'MergedProperty';
  groups: Array<MergedPropertyGroup>;
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetId?: Maybe<Scalars['ID']['output']>;
  original?: Maybe<Property>;
  originalId?: Maybe<Scalars['ID']['output']>;
  parent?: Maybe<Property>;
  parentId?: Maybe<Scalars['ID']['output']>;
  schema?: Maybe<PropertySchema>;
  schemaId?: Maybe<Scalars['ID']['output']>;
};

export type MergedPropertyField = {
  __typename?: 'MergedPropertyField';
  actualValue?: Maybe<Scalars['Any']['output']>;
  field?: Maybe<PropertySchemaField>;
  fieldId: Scalars['ID']['output'];
  links?: Maybe<Array<PropertyFieldLink>>;
  overridden: Scalars['Boolean']['output'];
  schema?: Maybe<PropertySchema>;
  schemaId: Scalars['ID']['output'];
  type: ValueType;
  value?: Maybe<Scalars['Any']['output']>;
};

export type MergedPropertyGroup = {
  __typename?: 'MergedPropertyGroup';
  fields: Array<MergedPropertyField>;
  groups: Array<MergedPropertyGroup>;
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetId?: Maybe<Scalars['ID']['output']>;
  original?: Maybe<PropertyGroup>;
  originalId?: Maybe<Scalars['ID']['output']>;
  originalProperty?: Maybe<Property>;
  originalPropertyId?: Maybe<Scalars['ID']['output']>;
  parent?: Maybe<PropertyGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  parentProperty?: Maybe<Property>;
  parentPropertyId?: Maybe<Scalars['ID']['output']>;
  schema?: Maybe<PropertySchema>;
  schemaGroupId: Scalars['ID']['output'];
  schemaId?: Maybe<Scalars['ID']['output']>;
};

export type MoveInfoboxFieldInput = {
  index: Scalars['Int']['input'];
  infoboxFieldId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
};

export type MoveInfoboxFieldPayload = {
  __typename?: 'MoveInfoboxFieldPayload';
  index: Scalars['Int']['output'];
  infoboxFieldId: Scalars['ID']['output'];
  layer: Layer;
};

export type MoveLayerInput = {
  destLayerId?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  layerId: Scalars['ID']['input'];
};

export type MoveLayerPayload = {
  __typename?: 'MoveLayerPayload';
  fromParentLayer: LayerGroup;
  index: Scalars['Int']['output'];
  layerId: Scalars['ID']['output'];
  toParentLayer: LayerGroup;
};

export type MovePropertyItemInput = {
  index: Scalars['Int']['input'];
  itemId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
  schemaGroupId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCluster?: Maybe<AddClusterPayload>;
  addDatasetSchema?: Maybe<AddDatasetSchemaPayload>;
  addInfoboxField?: Maybe<AddInfoboxFieldPayload>;
  addLayerGroup?: Maybe<AddLayerGroupPayload>;
  addLayerItem?: Maybe<AddLayerItemPayload>;
  addMemberToTeam?: Maybe<AddMemberToTeamPayload>;
  addPropertyItem?: Maybe<PropertyItemPayload>;
  addWidget?: Maybe<AddWidgetPayload>;
  attachTagItemToGroup?: Maybe<AttachTagItemToGroupPayload>;
  attachTagToLayer?: Maybe<AttachTagToLayerPayload>;
  createAsset?: Maybe<CreateAssetPayload>;
  createInfobox?: Maybe<CreateInfoboxPayload>;
  createProject?: Maybe<ProjectPayload>;
  createScene?: Maybe<CreateScenePayload>;
  createTagGroup?: Maybe<CreateTagGroupPayload>;
  createTagItem?: Maybe<CreateTagItemPayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  deleteMe?: Maybe<DeleteMePayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteTeam?: Maybe<DeleteTeamPayload>;
  detachTagFromLayer?: Maybe<DetachTagFromLayerPayload>;
  detachTagItemFromGroup?: Maybe<DetachTagItemFromGroupPayload>;
  importDataset?: Maybe<ImportDatasetPayload>;
  importDatasetFromGoogleSheet?: Maybe<ImportDatasetPayload>;
  importLayer?: Maybe<ImportLayerPayload>;
  installPlugin?: Maybe<InstallPluginPayload>;
  linkDatasetToPropertyValue?: Maybe<PropertyFieldPayload>;
  moveInfoboxField?: Maybe<MoveInfoboxFieldPayload>;
  moveLayer?: Maybe<MoveLayerPayload>;
  movePropertyItem?: Maybe<PropertyItemPayload>;
  publishProject?: Maybe<ProjectPayload>;
  removeAsset?: Maybe<RemoveAssetPayload>;
  removeCluster?: Maybe<RemoveClusterPayload>;
  removeDatasetSchema?: Maybe<RemoveDatasetSchemaPayload>;
  removeInfobox?: Maybe<RemoveInfoboxPayload>;
  removeInfoboxField?: Maybe<RemoveInfoboxFieldPayload>;
  removeLayer?: Maybe<RemoveLayerPayload>;
  removeMemberFromTeam?: Maybe<RemoveMemberFromTeamPayload>;
  removeMyAuth?: Maybe<UpdateMePayload>;
  removePropertyField?: Maybe<PropertyFieldPayload>;
  removePropertyItem?: Maybe<PropertyItemPayload>;
  removeTag?: Maybe<RemoveTagPayload>;
  removeWidget?: Maybe<RemoveWidgetPayload>;
  signup?: Maybe<SignupPayload>;
  syncDataset?: Maybe<SyncDatasetPayload>;
  uninstallPlugin?: Maybe<UninstallPluginPayload>;
  unlinkPropertyValue?: Maybe<PropertyFieldPayload>;
  updateCluster?: Maybe<UpdateClusterPayload>;
  updateDatasetSchema?: Maybe<UpdateDatasetSchemaPayload>;
  updateLayer?: Maybe<UpdateLayerPayload>;
  updateMe?: Maybe<UpdateMePayload>;
  updateMemberOfTeam?: Maybe<UpdateMemberOfTeamPayload>;
  updateProject?: Maybe<ProjectPayload>;
  updatePropertyItems?: Maybe<PropertyItemPayload>;
  updatePropertyValue?: Maybe<PropertyFieldPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  updateWidget?: Maybe<UpdateWidgetPayload>;
  updateWidgetAlignSystem?: Maybe<UpdateWidgetAlignSystemPayload>;
  upgradePlugin?: Maybe<UpgradePluginPayload>;
  uploadFileToProperty?: Maybe<PropertyFieldPayload>;
  uploadPlugin?: Maybe<UploadPluginPayload>;
};


export type MutationAddClusterArgs = {
  input: AddClusterInput;
};


export type MutationAddDatasetSchemaArgs = {
  input: AddDatasetSchemaInput;
};


export type MutationAddInfoboxFieldArgs = {
  input: AddInfoboxFieldInput;
};


export type MutationAddLayerGroupArgs = {
  input: AddLayerGroupInput;
};


export type MutationAddLayerItemArgs = {
  input: AddLayerItemInput;
};


export type MutationAddMemberToTeamArgs = {
  input: AddMemberToTeamInput;
};


export type MutationAddPropertyItemArgs = {
  input: AddPropertyItemInput;
};


export type MutationAddWidgetArgs = {
  input: AddWidgetInput;
};


export type MutationAttachTagItemToGroupArgs = {
  input: AttachTagItemToGroupInput;
};


export type MutationAttachTagToLayerArgs = {
  input: AttachTagToLayerInput;
};


export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


export type MutationCreateInfoboxArgs = {
  input: CreateInfoboxInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSceneArgs = {
  input: CreateSceneInput;
};


export type MutationCreateTagGroupArgs = {
  input: CreateTagGroupInput;
};


export type MutationCreateTagItemArgs = {
  input: CreateTagItemInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationDeleteMeArgs = {
  input: DeleteMeInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationDetachTagFromLayerArgs = {
  input: DetachTagFromLayerInput;
};


export type MutationDetachTagItemFromGroupArgs = {
  input: DetachTagItemFromGroupInput;
};


export type MutationImportDatasetArgs = {
  input: ImportDatasetInput;
};


export type MutationImportDatasetFromGoogleSheetArgs = {
  input: ImportDatasetFromGoogleSheetInput;
};


export type MutationImportLayerArgs = {
  input: ImportLayerInput;
};


export type MutationInstallPluginArgs = {
  input: InstallPluginInput;
};


export type MutationLinkDatasetToPropertyValueArgs = {
  input: LinkDatasetToPropertyValueInput;
};


export type MutationMoveInfoboxFieldArgs = {
  input: MoveInfoboxFieldInput;
};


export type MutationMoveLayerArgs = {
  input: MoveLayerInput;
};


export type MutationMovePropertyItemArgs = {
  input: MovePropertyItemInput;
};


export type MutationPublishProjectArgs = {
  input: PublishProjectInput;
};


export type MutationRemoveAssetArgs = {
  input: RemoveAssetInput;
};


export type MutationRemoveClusterArgs = {
  input: RemoveClusterInput;
};


export type MutationRemoveDatasetSchemaArgs = {
  input: RemoveDatasetSchemaInput;
};


export type MutationRemoveInfoboxArgs = {
  input: RemoveInfoboxInput;
};


export type MutationRemoveInfoboxFieldArgs = {
  input: RemoveInfoboxFieldInput;
};


export type MutationRemoveLayerArgs = {
  input: RemoveLayerInput;
};


export type MutationRemoveMemberFromTeamArgs = {
  input: RemoveMemberFromTeamInput;
};


export type MutationRemoveMyAuthArgs = {
  input: RemoveMyAuthInput;
};


export type MutationRemovePropertyFieldArgs = {
  input: RemovePropertyFieldInput;
};


export type MutationRemovePropertyItemArgs = {
  input: RemovePropertyItemInput;
};


export type MutationRemoveTagArgs = {
  input: RemoveTagInput;
};


export type MutationRemoveWidgetArgs = {
  input: RemoveWidgetInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationSyncDatasetArgs = {
  input: SyncDatasetInput;
};


export type MutationUninstallPluginArgs = {
  input: UninstallPluginInput;
};


export type MutationUnlinkPropertyValueArgs = {
  input: UnlinkPropertyValueInput;
};


export type MutationUpdateClusterArgs = {
  input: UpdateClusterInput;
};


export type MutationUpdateDatasetSchemaArgs = {
  input: UpdateDatasetSchemaInput;
};


export type MutationUpdateLayerArgs = {
  input: UpdateLayerInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateMemberOfTeamArgs = {
  input: UpdateMemberOfTeamInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdatePropertyItemsArgs = {
  input: UpdatePropertyItemInput;
};


export type MutationUpdatePropertyValueArgs = {
  input: UpdatePropertyValueInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateWidgetArgs = {
  input: UpdateWidgetInput;
};


export type MutationUpdateWidgetAlignSystemArgs = {
  input: UpdateWidgetAlignSystemInput;
};


export type MutationUpgradePluginArgs = {
  input: UpgradePluginInput;
};


export type MutationUploadFileToPropertyArgs = {
  input: UploadFileToPropertyInput;
};


export type MutationUploadPluginArgs = {
  input: UploadPluginInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export enum NodeType {
  Asset = 'ASSET',
  Dataset = 'DATASET',
  DatasetSchema = 'DATASET_SCHEMA',
  LayerGroup = 'LAYER_GROUP',
  LayerItem = 'LAYER_ITEM',
  Plugin = 'PLUGIN',
  Project = 'PROJECT',
  Property = 'PROPERTY',
  PropertySchema = 'PROPERTY_SCHEMA',
  Scene = 'SCENE',
  Team = 'TEAM',
  User = 'USER'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pagination = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Plugin = {
  __typename?: 'Plugin';
  allTranslatedDescription?: Maybe<Scalars['TranslatedString']['output']>;
  allTranslatedName?: Maybe<Scalars['TranslatedString']['output']>;
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  extensions: Array<PluginExtension>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  propertySchema?: Maybe<PropertySchema>;
  propertySchemaId?: Maybe<Scalars['ID']['output']>;
  repositoryUrl: Scalars['String']['output'];
  scene?: Maybe<Scene>;
  sceneId?: Maybe<Scalars['ID']['output']>;
  scenePlugin?: Maybe<ScenePlugin>;
  translatedDescription: Scalars['String']['output'];
  translatedName: Scalars['String']['output'];
  version: Scalars['String']['output'];
};


export type PluginScenePluginArgs = {
  sceneId?: InputMaybe<Scalars['ID']['input']>;
};


export type PluginTranslatedDescriptionArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};


export type PluginTranslatedNameArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};

export type PluginExtension = {
  __typename?: 'PluginExtension';
  allTranslatedDescription?: Maybe<Scalars['TranslatedString']['output']>;
  allTranslatedName?: Maybe<Scalars['TranslatedString']['output']>;
  description: Scalars['String']['output'];
  extensionId: Scalars['ID']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  plugin?: Maybe<Plugin>;
  pluginId: Scalars['ID']['output'];
  propertySchema?: Maybe<PropertySchema>;
  propertySchemaId: Scalars['ID']['output'];
  sceneWidget?: Maybe<SceneWidget>;
  singleOnly?: Maybe<Scalars['Boolean']['output']>;
  translatedDescription: Scalars['String']['output'];
  translatedName: Scalars['String']['output'];
  type: PluginExtensionType;
  visualizer?: Maybe<Visualizer>;
  widgetLayout?: Maybe<WidgetLayout>;
};


export type PluginExtensionSceneWidgetArgs = {
  sceneId: Scalars['ID']['input'];
};


export type PluginExtensionTranslatedDescriptionArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};


export type PluginExtensionTranslatedNameArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};

export enum PluginExtensionType {
  Block = 'BLOCK',
  Infobox = 'INFOBOX',
  Primitive = 'PRIMITIVE',
  Visualizer = 'VISUALIZER',
  Widget = 'WIDGET'
}

export type Policy = {
  __typename?: 'Policy';
  assetStorageSize?: Maybe<Scalars['FileSize']['output']>;
  datasetCount?: Maybe<Scalars['Int']['output']>;
  datasetSchemaCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  layerCount?: Maybe<Scalars['Int']['output']>;
  memberCount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  projectCount?: Maybe<Scalars['Int']['output']>;
  publishedProjectCount?: Maybe<Scalars['Int']['output']>;
};

export type Project = Node & {
  __typename?: 'Project';
  alias: Scalars['String']['output'];
  basicAuthPassword: Scalars['String']['output'];
  basicAuthUsername: Scalars['String']['output'];
  coreSupport: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['URL']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isBasicAuthActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  publicDescription: Scalars['String']['output'];
  publicImage: Scalars['String']['output'];
  publicNoIndex: Scalars['Boolean']['output'];
  publicTitle: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishmentStatus: PublishmentStatus;
  scene?: Maybe<Scene>;
  team?: Maybe<Team>;
  teamId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visualizer: Visualizer;
};

export type ProjectAliasAvailability = {
  __typename?: 'ProjectAliasAvailability';
  alias: Scalars['String']['output'];
  available: Scalars['Boolean']['output'];
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Maybe<Project>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Project>;
};

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  project: Project;
};

export type Property = Node & {
  __typename?: 'Property';
  id: Scalars['ID']['output'];
  items: Array<PropertyItem>;
  layer?: Maybe<Layer>;
  merged?: Maybe<MergedProperty>;
  schema?: Maybe<PropertySchema>;
  schemaId: Scalars['ID']['output'];
};

export type PropertyCondition = {
  __typename?: 'PropertyCondition';
  fieldId: Scalars['ID']['output'];
  type: ValueType;
  value?: Maybe<Scalars['Any']['output']>;
};

export type PropertyField = {
  __typename?: 'PropertyField';
  actualValue?: Maybe<Scalars['Any']['output']>;
  field?: Maybe<PropertySchemaField>;
  fieldId: Scalars['ID']['output'];
  id: Scalars['String']['output'];
  links?: Maybe<Array<PropertyFieldLink>>;
  parent?: Maybe<Property>;
  parentId: Scalars['ID']['output'];
  schema?: Maybe<PropertySchema>;
  schemaId: Scalars['ID']['output'];
  type: ValueType;
  value?: Maybe<Scalars['Any']['output']>;
};

export type PropertyFieldLink = {
  __typename?: 'PropertyFieldLink';
  dataset?: Maybe<Dataset>;
  datasetField?: Maybe<DatasetField>;
  datasetId?: Maybe<Scalars['ID']['output']>;
  datasetSchema?: Maybe<DatasetSchema>;
  datasetSchemaField?: Maybe<DatasetSchemaField>;
  datasetSchemaFieldId: Scalars['ID']['output'];
  datasetSchemaId: Scalars['ID']['output'];
};

export type PropertyFieldPayload = {
  __typename?: 'PropertyFieldPayload';
  property: Property;
  propertyField?: Maybe<PropertyField>;
};

export type PropertyGroup = {
  __typename?: 'PropertyGroup';
  fields: Array<PropertyField>;
  id: Scalars['ID']['output'];
  schema?: Maybe<PropertySchema>;
  schemaGroup?: Maybe<PropertySchemaGroup>;
  schemaGroupId: Scalars['ID']['output'];
  schemaId: Scalars['ID']['output'];
};

export type PropertyGroupList = {
  __typename?: 'PropertyGroupList';
  groups: Array<PropertyGroup>;
  id: Scalars['ID']['output'];
  schema?: Maybe<PropertySchema>;
  schemaGroup?: Maybe<PropertySchemaGroup>;
  schemaGroupId: Scalars['ID']['output'];
  schemaId: Scalars['ID']['output'];
};

export type PropertyItem = PropertyGroup | PropertyGroupList;

export type PropertyItemPayload = {
  __typename?: 'PropertyItemPayload';
  property: Property;
  propertyItem?: Maybe<PropertyItem>;
};

export type PropertyLinkableFields = {
  __typename?: 'PropertyLinkableFields';
  latlng?: Maybe<Scalars['ID']['output']>;
  latlngField?: Maybe<PropertySchemaField>;
  schema?: Maybe<PropertySchema>;
  schemaId: Scalars['ID']['output'];
  url?: Maybe<Scalars['ID']['output']>;
  urlField?: Maybe<PropertySchemaField>;
};

export type PropertySchema = {
  __typename?: 'PropertySchema';
  groups: Array<PropertySchemaGroup>;
  id: Scalars['ID']['output'];
  linkableFields: PropertyLinkableFields;
};

export type PropertySchemaField = {
  __typename?: 'PropertySchemaField';
  allTranslatedDescription?: Maybe<Scalars['TranslatedString']['output']>;
  allTranslatedTitle?: Maybe<Scalars['TranslatedString']['output']>;
  choices?: Maybe<Array<PropertySchemaFieldChoice>>;
  defaultValue?: Maybe<Scalars['Any']['output']>;
  description: Scalars['String']['output'];
  fieldId: Scalars['ID']['output'];
  isAvailableIf?: Maybe<PropertyCondition>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  translatedDescription: Scalars['String']['output'];
  translatedTitle: Scalars['String']['output'];
  type: ValueType;
  ui?: Maybe<PropertySchemaFieldUi>;
};


export type PropertySchemaFieldTranslatedDescriptionArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};


export type PropertySchemaFieldTranslatedTitleArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};

export type PropertySchemaFieldChoice = {
  __typename?: 'PropertySchemaFieldChoice';
  allTranslatedTitle?: Maybe<Scalars['TranslatedString']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translatedTitle: Scalars['String']['output'];
};


export type PropertySchemaFieldChoiceTranslatedTitleArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};

export enum PropertySchemaFieldUi {
  CameraPose = 'CAMERA_POSE',
  Color = 'COLOR',
  Datetime = 'DATETIME',
  File = 'FILE',
  Image = 'IMAGE',
  Layer = 'LAYER',
  Multiline = 'MULTILINE',
  Range = 'RANGE',
  Selection = 'SELECTION',
  Slider = 'SLIDER',
  Video = 'VIDEO'
}

export type PropertySchemaGroup = {
  __typename?: 'PropertySchemaGroup';
  allTranslatedTitle?: Maybe<Scalars['TranslatedString']['output']>;
  fields: Array<PropertySchemaField>;
  isAvailableIf?: Maybe<PropertyCondition>;
  isList: Scalars['Boolean']['output'];
  representativeField?: Maybe<PropertySchemaField>;
  representativeFieldId?: Maybe<Scalars['ID']['output']>;
  schema?: Maybe<PropertySchema>;
  schemaGroupId: Scalars['ID']['output'];
  schemaId: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  translatedTitle: Scalars['String']['output'];
};


export type PropertySchemaGroupTranslatedTitleArgs = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
};

export type PublishProjectInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  status: PublishmentStatus;
};

export enum PublishmentStatus {
  Limited = 'LIMITED',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Query = {
  __typename?: 'Query';
  assets: AssetConnection;
  checkProjectAlias: ProjectAliasAvailability;
  datasetSchemas: DatasetSchemaConnection;
  datasets: DatasetConnection;
  layer?: Maybe<Layer>;
  me?: Maybe<Me>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  plugin?: Maybe<Plugin>;
  plugins: Array<Plugin>;
  projects: ProjectConnection;
  propertySchema?: Maybe<PropertySchema>;
  propertySchemas: Array<PropertySchema>;
  scene?: Maybe<Scene>;
  searchUser?: Maybe<User>;
};


export type QueryAssetsArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<AssetSortType>;
  teamId: Scalars['ID']['input'];
};


export type QueryCheckProjectAliasArgs = {
  alias: Scalars['String']['input'];
};


export type QueryDatasetSchemasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sceneId: Scalars['ID']['input'];
};


export type QueryDatasetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  datasetSchemaId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  type: NodeType;
};


export type QueryNodesArgs = {
  id: Array<Scalars['ID']['input']>;
  type: NodeType;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['ID']['input'];
};


export type QueryPropertySchemaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPropertySchemasArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type QuerySceneArgs = {
  projectId: Scalars['ID']['input'];
};


export type QuerySearchUserArgs = {
  nameOrEmail: Scalars['String']['input'];
};

export type Rect = {
  __typename?: 'Rect';
  east: Scalars['Float']['output'];
  north: Scalars['Float']['output'];
  south: Scalars['Float']['output'];
  west: Scalars['Float']['output'];
};

export type RemoveAssetInput = {
  assetId: Scalars['ID']['input'];
};

export type RemoveAssetPayload = {
  __typename?: 'RemoveAssetPayload';
  assetId: Scalars['ID']['output'];
};

export type RemoveClusterInput = {
  clusterId: Scalars['ID']['input'];
  sceneId: Scalars['ID']['input'];
};

export type RemoveClusterPayload = {
  __typename?: 'RemoveClusterPayload';
  clusterId: Scalars['ID']['output'];
  scene: Scene;
};

export type RemoveDatasetSchemaInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  schemaId: Scalars['ID']['input'];
};

export type RemoveDatasetSchemaPayload = {
  __typename?: 'RemoveDatasetSchemaPayload';
  schemaId: Scalars['ID']['output'];
};

export type RemoveInfoboxFieldInput = {
  infoboxFieldId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
};

export type RemoveInfoboxFieldPayload = {
  __typename?: 'RemoveInfoboxFieldPayload';
  infoboxFieldId: Scalars['ID']['output'];
  layer: Layer;
};

export type RemoveInfoboxInput = {
  layerId: Scalars['ID']['input'];
};

export type RemoveInfoboxPayload = {
  __typename?: 'RemoveInfoboxPayload';
  layer: Layer;
};

export type RemoveLayerInput = {
  layerId: Scalars['ID']['input'];
};

export type RemoveLayerPayload = {
  __typename?: 'RemoveLayerPayload';
  layerId: Scalars['ID']['output'];
  parentLayer: LayerGroup;
};

export type RemoveMemberFromTeamInput = {
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type RemoveMemberFromTeamPayload = {
  __typename?: 'RemoveMemberFromTeamPayload';
  team: Team;
};

export type RemoveMyAuthInput = {
  auth: Scalars['String']['input'];
};

export type RemovePropertyFieldInput = {
  fieldId: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemovePropertyItemInput = {
  itemId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
  schemaGroupId: Scalars['ID']['input'];
};

export type RemoveTagInput = {
  tagID: Scalars['ID']['input'];
};

export type RemoveTagPayload = {
  __typename?: 'RemoveTagPayload';
  tagId: Scalars['ID']['output'];
  updatedLayers: Array<Layer>;
};

export type RemoveWidgetInput = {
  sceneId: Scalars['ID']['input'];
  widgetId: Scalars['ID']['input'];
};

export type RemoveWidgetPayload = {
  __typename?: 'RemoveWidgetPayload';
  scene: Scene;
  widgetId: Scalars['ID']['output'];
};

export enum Role {
  Owner = 'OWNER',
  Reader = 'READER',
  Writer = 'WRITER'
}

export type Scene = Node & {
  __typename?: 'Scene';
  clusters: Array<Cluster>;
  createdAt: Scalars['DateTime']['output'];
  datasetSchemas: DatasetSchemaConnection;
  id: Scalars['ID']['output'];
  plugins: Array<ScenePlugin>;
  project?: Maybe<Project>;
  projectId: Scalars['ID']['output'];
  property?: Maybe<Property>;
  propertyId: Scalars['ID']['output'];
  rootLayer?: Maybe<LayerGroup>;
  rootLayerId: Scalars['ID']['output'];
  tagIds: Array<Scalars['ID']['output']>;
  tags: Array<Tag>;
  team?: Maybe<Team>;
  teamId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  widgetAlignSystem?: Maybe<WidgetAlignSystem>;
  widgets: Array<SceneWidget>;
};


export type SceneDatasetSchemasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ScenePlugin = {
  __typename?: 'ScenePlugin';
  plugin?: Maybe<Plugin>;
  pluginId: Scalars['ID']['output'];
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
};

export type SceneWidget = {
  __typename?: 'SceneWidget';
  enabled: Scalars['Boolean']['output'];
  extended: Scalars['Boolean']['output'];
  extension?: Maybe<PluginExtension>;
  extensionId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  plugin?: Maybe<Plugin>;
  pluginId: Scalars['ID']['output'];
  property?: Maybe<Property>;
  propertyId: Scalars['ID']['output'];
};

export type SignupInput = {
  lang?: InputMaybe<Scalars['Lang']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  theme?: InputMaybe<Theme>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SignupPayload = {
  __typename?: 'SignupPayload';
  team: Team;
  user: User;
};

export type SyncDatasetInput = {
  sceneId: Scalars['ID']['input'];
  url: Scalars['String']['input'];
};

export type SyncDatasetPayload = {
  __typename?: 'SyncDatasetPayload';
  dataset: Array<Dataset>;
  datasetSchema: Array<DatasetSchema>;
  sceneId: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Tag = {
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  layers: Array<Layer>;
  sceneId: Scalars['ID']['output'];
};

export type TagGroup = Tag & {
  __typename?: 'TagGroup';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  layers: Array<Layer>;
  scene?: Maybe<Scene>;
  sceneId: Scalars['ID']['output'];
  tagIds?: Maybe<Array<Scalars['ID']['output']>>;
  tags: Array<TagItem>;
};

export type TagItem = Tag & {
  __typename?: 'TagItem';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  layers: Array<Layer>;
  linkedDataset?: Maybe<Dataset>;
  linkedDatasetField?: Maybe<DatasetField>;
  linkedDatasetFieldID?: Maybe<Scalars['ID']['output']>;
  linkedDatasetID?: Maybe<Scalars['ID']['output']>;
  linkedDatasetSchema?: Maybe<DatasetSchema>;
  linkedDatasetSchemaID?: Maybe<Scalars['ID']['output']>;
  parent?: Maybe<TagGroup>;
  parentId?: Maybe<Scalars['ID']['output']>;
  sceneId: Scalars['ID']['output'];
};

export type Team = Node & {
  __typename?: 'Team';
  assets: AssetConnection;
  id: Scalars['ID']['output'];
  members: Array<TeamMember>;
  name: Scalars['String']['output'];
  personal: Scalars['Boolean']['output'];
  policy?: Maybe<Policy>;
  policyId?: Maybe<Scalars['ID']['output']>;
  projects: ProjectConnection;
};


export type TeamAssetsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  role: Role;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export enum TextAlign {
  Center = 'CENTER',
  Justify = 'JUSTIFY',
  JustifyAll = 'JUSTIFY_ALL',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum Theme {
  Dark = 'DARK',
  Default = 'DEFAULT',
  Light = 'LIGHT'
}

export type Typography = {
  __typename?: 'Typography';
  bold?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  fontFamily?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['Int']['output']>;
  fontWeight?: Maybe<Scalars['String']['output']>;
  italic?: Maybe<Scalars['Boolean']['output']>;
  textAlign?: Maybe<TextAlign>;
  underline?: Maybe<Scalars['Boolean']['output']>;
};

export type UninstallPluginInput = {
  pluginId: Scalars['ID']['input'];
  sceneId: Scalars['ID']['input'];
};

export type UninstallPluginPayload = {
  __typename?: 'UninstallPluginPayload';
  pluginId: Scalars['ID']['output'];
  scene: Scene;
};

export type UnlinkPropertyValueInput = {
  fieldId: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateClusterInput = {
  clusterId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  sceneId: Scalars['ID']['input'];
};

export type UpdateClusterPayload = {
  __typename?: 'UpdateClusterPayload';
  cluster: Cluster;
  scene: Scene;
};

export type UpdateDatasetSchemaInput = {
  name: Scalars['String']['input'];
  schemaId: Scalars['ID']['input'];
};

export type UpdateDatasetSchemaPayload = {
  __typename?: 'UpdateDatasetSchemaPayload';
  datasetSchema?: Maybe<DatasetSchema>;
};

export type UpdateLayerInput = {
  layerId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateLayerPayload = {
  __typename?: 'UpdateLayerPayload';
  layer: Layer;
};

export type UpdateMeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['Lang']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Theme>;
};

export type UpdateMePayload = {
  __typename?: 'UpdateMePayload';
  me: Me;
};

export type UpdateMemberOfTeamInput = {
  role: Role;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateMemberOfTeamPayload = {
  __typename?: 'UpdateMemberOfTeamPayload';
  team: Team;
};

export type UpdateProjectInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  basicAuthPassword?: InputMaybe<Scalars['String']['input']>;
  basicAuthUsername?: InputMaybe<Scalars['String']['input']>;
  deleteImageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  deletePublicImage?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['URL']['input']>;
  isBasicAuthActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  publicDescription?: InputMaybe<Scalars['String']['input']>;
  publicImage?: InputMaybe<Scalars['String']['input']>;
  publicNoIndex?: InputMaybe<Scalars['Boolean']['input']>;
  publicTitle?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePropertyItemInput = {
  operations: Array<UpdatePropertyItemOperationInput>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId: Scalars['ID']['input'];
};

export type UpdatePropertyItemOperationInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  nameFieldType?: InputMaybe<ValueType>;
  nameFieldValue?: InputMaybe<Scalars['Any']['input']>;
  operation: ListOperation;
};

export type UpdatePropertyValueInput = {
  fieldId: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId?: InputMaybe<Scalars['ID']['input']>;
  type: ValueType;
  value?: InputMaybe<Scalars['Any']['input']>;
};

export type UpdateTagInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  sceneId: Scalars['ID']['input'];
  tagId: Scalars['ID']['input'];
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  tag: Tag;
};

export type UpdateTeamInput = {
  name: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};

export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  team: Team;
};

export type UpdateWidgetAlignSystemInput = {
  align?: InputMaybe<WidgetAreaAlign>;
  background?: InputMaybe<Scalars['String']['input']>;
  centered?: InputMaybe<Scalars['Boolean']['input']>;
  gap?: InputMaybe<Scalars['Int']['input']>;
  location: WidgetLocationInput;
  padding?: InputMaybe<WidgetAreaPaddingInput>;
  sceneId: Scalars['ID']['input'];
};

export type UpdateWidgetAlignSystemPayload = {
  __typename?: 'UpdateWidgetAlignSystemPayload';
  scene: Scene;
};

export type UpdateWidgetInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  extended?: InputMaybe<Scalars['Boolean']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<WidgetLocationInput>;
  sceneId: Scalars['ID']['input'];
  widgetId: Scalars['ID']['input'];
};

export type UpdateWidgetPayload = {
  __typename?: 'UpdateWidgetPayload';
  scene: Scene;
  sceneWidget: SceneWidget;
};

export type UpgradePluginInput = {
  pluginId: Scalars['ID']['input'];
  sceneId: Scalars['ID']['input'];
  toPluginId: Scalars['ID']['input'];
};

export type UpgradePluginPayload = {
  __typename?: 'UpgradePluginPayload';
  scene: Scene;
  scenePlugin: ScenePlugin;
};

export type UploadFileToPropertyInput = {
  fieldId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  schemaGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type UploadPluginInput = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  sceneId: Scalars['ID']['input'];
  url?: InputMaybe<Scalars['URL']['input']>;
};

export type UploadPluginPayload = {
  __typename?: 'UploadPluginPayload';
  plugin: Plugin;
  scene: Scene;
  scenePlugin: ScenePlugin;
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum ValueType {
  Bool = 'BOOL',
  Camera = 'CAMERA',
  Coordinates = 'COORDINATES',
  Latlng = 'LATLNG',
  Latlngheight = 'LATLNGHEIGHT',
  Number = 'NUMBER',
  Polygon = 'POLYGON',
  Rect = 'RECT',
  Ref = 'REF',
  String = 'STRING',
  Typography = 'TYPOGRAPHY',
  Url = 'URL'
}

export enum Visualizer {
  Cesium = 'CESIUM'
}

export type WidgetAlignSystem = {
  __typename?: 'WidgetAlignSystem';
  inner?: Maybe<WidgetZone>;
  outer?: Maybe<WidgetZone>;
};

export type WidgetArea = {
  __typename?: 'WidgetArea';
  align: WidgetAreaAlign;
  background?: Maybe<Scalars['String']['output']>;
  centered: Scalars['Boolean']['output'];
  gap?: Maybe<Scalars['Int']['output']>;
  padding?: Maybe<WidgetAreaPadding>;
  widgetIds: Array<Scalars['ID']['output']>;
};

export enum WidgetAreaAlign {
  Centered = 'CENTERED',
  End = 'END',
  Start = 'START'
}

export type WidgetAreaPadding = {
  __typename?: 'WidgetAreaPadding';
  bottom: Scalars['Int']['output'];
  left: Scalars['Int']['output'];
  right: Scalars['Int']['output'];
  top: Scalars['Int']['output'];
};

export type WidgetAreaPaddingInput = {
  bottom: Scalars['Int']['input'];
  left: Scalars['Int']['input'];
  right: Scalars['Int']['input'];
  top: Scalars['Int']['input'];
};

export enum WidgetAreaType {
  Bottom = 'BOTTOM',
  Middle = 'MIDDLE',
  Top = 'TOP'
}

export type WidgetExtendable = {
  __typename?: 'WidgetExtendable';
  horizontally: Scalars['Boolean']['output'];
  vertically: Scalars['Boolean']['output'];
};

export type WidgetLayout = {
  __typename?: 'WidgetLayout';
  defaultLocation?: Maybe<WidgetLocation>;
  extendable: WidgetExtendable;
  extended: Scalars['Boolean']['output'];
  floating: Scalars['Boolean']['output'];
};

export type WidgetLocation = {
  __typename?: 'WidgetLocation';
  area: WidgetAreaType;
  section: WidgetSectionType;
  zone: WidgetZoneType;
};

export type WidgetLocationInput = {
  area: WidgetAreaType;
  section: WidgetSectionType;
  zone: WidgetZoneType;
};

export type WidgetSection = {
  __typename?: 'WidgetSection';
  bottom?: Maybe<WidgetArea>;
  middle?: Maybe<WidgetArea>;
  top?: Maybe<WidgetArea>;
};

export enum WidgetSectionType {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type WidgetZone = {
  __typename?: 'WidgetZone';
  center?: Maybe<WidgetSection>;
  left?: Maybe<WidgetSection>;
  right?: Maybe<WidgetSection>;
};

export enum WidgetZoneType {
  Inner = 'INNER',
  Outer = 'OUTER'
}

export type WidgetAlignSystemFragmentFragment = { __typename?: 'WidgetAlignSystem', outer?: (
    { __typename?: 'WidgetZone' }
    & { ' $fragmentRefs'?: { 'WidgetZoneFragmentFragment': WidgetZoneFragmentFragment } }
  ) | null, inner?: (
    { __typename?: 'WidgetZone' }
    & { ' $fragmentRefs'?: { 'WidgetZoneFragmentFragment': WidgetZoneFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'WidgetAlignSystemFragmentFragment' };

export type WidgetZoneFragmentFragment = { __typename?: 'WidgetZone', left?: (
    { __typename?: 'WidgetSection' }
    & { ' $fragmentRefs'?: { 'WidgetSectionFragmentFragment': WidgetSectionFragmentFragment } }
  ) | null, center?: (
    { __typename?: 'WidgetSection' }
    & { ' $fragmentRefs'?: { 'WidgetSectionFragmentFragment': WidgetSectionFragmentFragment } }
  ) | null, right?: (
    { __typename?: 'WidgetSection' }
    & { ' $fragmentRefs'?: { 'WidgetSectionFragmentFragment': WidgetSectionFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'WidgetZoneFragmentFragment' };

export type WidgetSectionFragmentFragment = { __typename?: 'WidgetSection', top?: (
    { __typename?: 'WidgetArea' }
    & { ' $fragmentRefs'?: { 'WidgetAreaFragmentFragment': WidgetAreaFragmentFragment } }
  ) | null, middle?: (
    { __typename?: 'WidgetArea' }
    & { ' $fragmentRefs'?: { 'WidgetAreaFragmentFragment': WidgetAreaFragmentFragment } }
  ) | null, bottom?: (
    { __typename?: 'WidgetArea' }
    & { ' $fragmentRefs'?: { 'WidgetAreaFragmentFragment': WidgetAreaFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'WidgetSectionFragmentFragment' };

export type WidgetAreaFragmentFragment = { __typename?: 'WidgetArea', widgetIds: Array<string>, align: WidgetAreaAlign, gap?: number | null, centered: boolean, background?: string | null, padding?: { __typename?: 'WidgetAreaPadding', top: number, bottom: number, left: number, right: number } | null } & { ' $fragmentName'?: 'WidgetAreaFragmentFragment' };

export type DatasetFragmentFragment = { __typename?: 'Dataset', id: string, source: string, schemaId: string, name?: string | null, fields: Array<{ __typename?: 'DatasetField', fieldId: string, type: ValueType, value?: any | null, field?: { __typename?: 'DatasetSchemaField', id: string, name: string } | null }> } & { ' $fragmentName'?: 'DatasetFragmentFragment' };

export type InfoboxFragmentFragment = { __typename?: 'Infobox', propertyId: string, property?: (
    { __typename?: 'Property', id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null, fields: Array<{ __typename?: 'InfoboxField', id: string, pluginId: string, extensionId: string, propertyId: string, property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null }> } & { ' $fragmentName'?: 'InfoboxFragmentFragment' };

export type MergedInfoboxFragmentFragment = { __typename?: 'MergedInfobox', property?: (
    { __typename?: 'MergedProperty' }
    & { ' $fragmentRefs'?: { 'MergedPropertyFragmentFragment': MergedPropertyFragmentFragment } }
  ) | null, fields: Array<{ __typename?: 'MergedInfoboxField', originalId: string, pluginId: string, extensionId: string, property?: (
      { __typename?: 'MergedProperty' }
      & { ' $fragmentRefs'?: { 'MergedPropertyFragmentFragment': MergedPropertyFragmentFragment } }
    ) | null }> } & { ' $fragmentName'?: 'MergedInfoboxFragmentFragment' };

type LayerSystemLayer_LayerGroup_Fragment = { __typename?: 'LayerGroup', linkedDatasetSchemaId?: string | null, id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null, layers: Array<{ __typename?: 'LayerGroup', id: string } | { __typename?: 'LayerItem', id: string } | null> } & { ' $fragmentName'?: 'LayerSystemLayer_LayerGroup_Fragment' };

type LayerSystemLayer_LayerItem_Fragment = { __typename?: 'LayerItem', linkedDatasetId?: string | null, id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null } & { ' $fragmentName'?: 'LayerSystemLayer_LayerItem_Fragment' };

export type LayerSystemLayerFragment = LayerSystemLayer_LayerGroup_Fragment | LayerSystemLayer_LayerItem_Fragment;

type LayerSystemLayer1_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer1_LayerGroup_Fragment' };

type LayerSystemLayer1_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer1_LayerItem_Fragment' };

export type LayerSystemLayer1Fragment = LayerSystemLayer1_LayerGroup_Fragment | LayerSystemLayer1_LayerItem_Fragment;

type LayerSystemLayer2_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer1_LayerGroup_Fragment': LayerSystemLayer1_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer1_LayerItem_Fragment': LayerSystemLayer1_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer2_LayerGroup_Fragment' };

type LayerSystemLayer2_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer2_LayerItem_Fragment' };

export type LayerSystemLayer2Fragment = LayerSystemLayer2_LayerGroup_Fragment | LayerSystemLayer2_LayerItem_Fragment;

type LayerSystemLayer3_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer2_LayerGroup_Fragment': LayerSystemLayer2_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer2_LayerItem_Fragment': LayerSystemLayer2_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer3_LayerGroup_Fragment' };

type LayerSystemLayer3_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer3_LayerItem_Fragment' };

export type LayerSystemLayer3Fragment = LayerSystemLayer3_LayerGroup_Fragment | LayerSystemLayer3_LayerItem_Fragment;

type LayerSystemLayer4_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer3_LayerGroup_Fragment': LayerSystemLayer3_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer3_LayerItem_Fragment': LayerSystemLayer3_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer4_LayerGroup_Fragment' };

type LayerSystemLayer4_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer4_LayerItem_Fragment' };

export type LayerSystemLayer4Fragment = LayerSystemLayer4_LayerGroup_Fragment | LayerSystemLayer4_LayerItem_Fragment;

type LayerSystemLayer5_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer4_LayerGroup_Fragment': LayerSystemLayer4_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerSystemLayer4_LayerItem_Fragment': LayerSystemLayer4_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerGroup_Fragment': LayerSystemLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer5_LayerGroup_Fragment' };

type LayerSystemLayer5_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerSystemLayer_LayerItem_Fragment': LayerSystemLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'LayerSystemLayer5_LayerItem_Fragment' };

export type LayerSystemLayer5Fragment = LayerSystemLayer5_LayerGroup_Fragment | LayerSystemLayer5_LayerItem_Fragment;

type EarthLayerCommon_LayerGroup_Fragment = { __typename?: 'LayerGroup', linkedDatasetSchemaId?: string | null, id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null, propertyId?: string | null, layers: Array<{ __typename?: 'LayerGroup', id: string } | { __typename?: 'LayerItem', id: string } | null>, scenePlugin?: { __typename?: 'ScenePlugin', property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null } | null, property?: (
    { __typename?: 'Property', id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null, tags: Array<{ __typename?: 'LayerTagGroup', tagId: string, children: Array<{ __typename?: 'LayerTagItem', tagId: string, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null }>, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null } | { __typename?: 'LayerTagItem', tagId: string, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null }>, infobox?: { __typename?: 'Infobox', propertyId: string, property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null, fields: Array<{ __typename?: 'InfoboxField', id: string, pluginId: string, extensionId: string, propertyId: string, scenePlugin?: { __typename?: 'ScenePlugin', property?: (
          { __typename?: 'Property', id: string }
          & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
        ) | null } | null, property?: (
        { __typename?: 'Property', id: string }
        & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
      ) | null }> } | null } & { ' $fragmentName'?: 'EarthLayerCommon_LayerGroup_Fragment' };

type EarthLayerCommon_LayerItem_Fragment = { __typename?: 'LayerItem', id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null, propertyId?: string | null, scenePlugin?: { __typename?: 'ScenePlugin', property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null } | null, property?: (
    { __typename?: 'Property', id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null, tags: Array<{ __typename?: 'LayerTagGroup', tagId: string, children: Array<{ __typename?: 'LayerTagItem', tagId: string, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null }>, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null } | { __typename?: 'LayerTagItem', tagId: string, tag?: { __typename?: 'TagGroup', id: string, label: string } | { __typename?: 'TagItem', id: string, label: string } | null }>, infobox?: { __typename?: 'Infobox', propertyId: string, property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null, fields: Array<{ __typename?: 'InfoboxField', id: string, pluginId: string, extensionId: string, propertyId: string, scenePlugin?: { __typename?: 'ScenePlugin', property?: (
          { __typename?: 'Property', id: string }
          & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
        ) | null } | null, property?: (
        { __typename?: 'Property', id: string }
        & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
      ) | null }> } | null } & { ' $fragmentName'?: 'EarthLayerCommon_LayerItem_Fragment' };

export type EarthLayerCommonFragment = EarthLayerCommon_LayerGroup_Fragment | EarthLayerCommon_LayerItem_Fragment;

export type EarthLayerItemFragment = { __typename?: 'LayerItem', id: string, linkedDatasetId?: string | null, scenePlugin?: { __typename?: 'ScenePlugin', property?: (
      { __typename?: 'Property', id: string }
      & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'EarthLayerItemFragment' };

type EarthLayer_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayerCommon_LayerGroup_Fragment': EarthLayerCommon_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer_LayerGroup_Fragment' };

type EarthLayer_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayerCommon_LayerItem_Fragment': EarthLayerCommon_LayerItem_Fragment;'EarthLayerItemFragment': EarthLayerItemFragment } }
) & { ' $fragmentName'?: 'EarthLayer_LayerItem_Fragment' };

export type EarthLayerFragment = EarthLayer_LayerGroup_Fragment | EarthLayer_LayerItem_Fragment;

type EarthLayer1_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer1_LayerGroup_Fragment' };

type EarthLayer1_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer1_LayerItem_Fragment' };

export type EarthLayer1Fragment = EarthLayer1_LayerGroup_Fragment | EarthLayer1_LayerItem_Fragment;

type EarthLayer2_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer1_LayerGroup_Fragment': EarthLayer1_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer1_LayerItem_Fragment': EarthLayer1_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer2_LayerGroup_Fragment' };

type EarthLayer2_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer2_LayerItem_Fragment' };

export type EarthLayer2Fragment = EarthLayer2_LayerGroup_Fragment | EarthLayer2_LayerItem_Fragment;

type EarthLayer3_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer2_LayerGroup_Fragment': EarthLayer2_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer2_LayerItem_Fragment': EarthLayer2_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer3_LayerGroup_Fragment' };

type EarthLayer3_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer3_LayerItem_Fragment' };

export type EarthLayer3Fragment = EarthLayer3_LayerGroup_Fragment | EarthLayer3_LayerItem_Fragment;

type EarthLayer4_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer3_LayerGroup_Fragment': EarthLayer3_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer3_LayerItem_Fragment': EarthLayer3_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer4_LayerGroup_Fragment' };

type EarthLayer4_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer4_LayerItem_Fragment' };

export type EarthLayer4Fragment = EarthLayer4_LayerGroup_Fragment | EarthLayer4_LayerItem_Fragment;

type EarthLayer5_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer4_LayerGroup_Fragment': EarthLayer4_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'EarthLayer4_LayerItem_Fragment': EarthLayer4_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerGroup_Fragment': EarthLayer_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer5_LayerGroup_Fragment' };

type EarthLayer5_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'EarthLayer_LayerItem_Fragment': EarthLayer_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'EarthLayer5_LayerItem_Fragment' };

export type EarthLayer5Fragment = EarthLayer5_LayerGroup_Fragment | EarthLayer5_LayerItem_Fragment;

type LayerFragment_LayerGroup_Fragment = { __typename?: 'LayerGroup', linkedDatasetSchemaId?: string | null, id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null, property?: (
    { __typename?: 'Property', id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null, infobox?: (
    { __typename?: 'Infobox' }
    & { ' $fragmentRefs'?: { 'InfoboxFragmentFragment': InfoboxFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'LayerFragment_LayerGroup_Fragment' };

type LayerFragment_LayerItem_Fragment = { __typename?: 'LayerItem', linkedDatasetId?: string | null, id: string, name: string, isVisible: boolean, pluginId?: string | null, extensionId?: string | null, merged?: { __typename?: 'MergedLayer', parentId?: string | null, property?: (
      { __typename?: 'MergedProperty' }
      & { ' $fragmentRefs'?: { 'MergedPropertyFragmentFragment': MergedPropertyFragmentFragment } }
    ) | null, infobox?: (
      { __typename?: 'MergedInfobox' }
      & { ' $fragmentRefs'?: { 'MergedInfoboxFragmentFragment': MergedInfoboxFragmentFragment } }
    ) | null } | null, property?: (
    { __typename?: 'Property', id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null, infobox?: (
    { __typename?: 'Infobox' }
    & { ' $fragmentRefs'?: { 'InfoboxFragmentFragment': InfoboxFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'LayerFragment_LayerItem_Fragment' };

export type LayerFragmentFragment = LayerFragment_LayerGroup_Fragment | LayerFragment_LayerItem_Fragment;

type Layer0Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<{ __typename?: 'LayerGroup', id: string } | { __typename?: 'LayerItem', id: string } | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer0Fragment_LayerGroup_Fragment' };

type Layer0Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer0Fragment_LayerItem_Fragment' };

export type Layer0FragmentFragment = Layer0Fragment_LayerGroup_Fragment | Layer0Fragment_LayerItem_Fragment;

type Layer1Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer1Fragment_LayerGroup_Fragment' };

type Layer1Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer1Fragment_LayerItem_Fragment' };

export type Layer1FragmentFragment = Layer1Fragment_LayerGroup_Fragment | Layer1Fragment_LayerItem_Fragment;

type Layer2Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string, layers: Array<(
      { __typename?: 'LayerGroup', id: string }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
    ) | (
      { __typename?: 'LayerItem', id: string }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
    ) | null> }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer2Fragment_LayerGroup_Fragment' };

type Layer2Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer2Fragment_LayerItem_Fragment' };

export type Layer2FragmentFragment = Layer2Fragment_LayerGroup_Fragment | Layer2Fragment_LayerItem_Fragment;

type Layer3Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string, layers: Array<(
      { __typename?: 'LayerGroup', id: string, layers: Array<(
        { __typename?: 'LayerGroup', id: string }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
      ) | (
        { __typename?: 'LayerItem', id: string }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
      ) | null> }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
    ) | (
      { __typename?: 'LayerItem', id: string }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
    ) | null> }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer3Fragment_LayerGroup_Fragment' };

type Layer3Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer3Fragment_LayerItem_Fragment' };

export type Layer3FragmentFragment = Layer3Fragment_LayerGroup_Fragment | Layer3Fragment_LayerItem_Fragment;

type Layer4Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string, layers: Array<(
      { __typename?: 'LayerGroup', id: string, layers: Array<(
        { __typename?: 'LayerGroup', id: string, layers: Array<(
          { __typename?: 'LayerGroup', id: string }
          & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
        ) | (
          { __typename?: 'LayerItem', id: string }
          & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
        ) | null> }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
      ) | (
        { __typename?: 'LayerItem', id: string }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
      ) | null> }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
    ) | (
      { __typename?: 'LayerItem', id: string }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
    ) | null> }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer4Fragment_LayerGroup_Fragment' };

type Layer4Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer4Fragment_LayerItem_Fragment' };

export type Layer4FragmentFragment = Layer4Fragment_LayerGroup_Fragment | Layer4Fragment_LayerItem_Fragment;

type Layer5Fragment_LayerGroup_Fragment = (
  { __typename?: 'LayerGroup', id: string, layers: Array<(
    { __typename?: 'LayerGroup', id: string, layers: Array<(
      { __typename?: 'LayerGroup', id: string, layers: Array<(
        { __typename?: 'LayerGroup', id: string, layers: Array<(
          { __typename?: 'LayerGroup', id: string, layers: Array<(
            { __typename?: 'LayerGroup', id: string }
            & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
          ) | (
            { __typename?: 'LayerItem', id: string }
            & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
          ) | null> }
          & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
        ) | (
          { __typename?: 'LayerItem', id: string }
          & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
        ) | null> }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
      ) | (
        { __typename?: 'LayerItem', id: string }
        & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
      ) | null> }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
    ) | (
      { __typename?: 'LayerItem', id: string }
      & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
    ) | null> }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
  ) | (
    { __typename?: 'LayerItem', id: string }
    & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
  ) | null> }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerGroup_Fragment': LayerFragment_LayerGroup_Fragment } }
) & { ' $fragmentName'?: 'Layer5Fragment_LayerGroup_Fragment' };

type Layer5Fragment_LayerItem_Fragment = (
  { __typename?: 'LayerItem', id: string }
  & { ' $fragmentRefs'?: { 'LayerFragment_LayerItem_Fragment': LayerFragment_LayerItem_Fragment } }
) & { ' $fragmentName'?: 'Layer5Fragment_LayerItem_Fragment' };

export type Layer5FragmentFragment = Layer5Fragment_LayerGroup_Fragment | Layer5Fragment_LayerItem_Fragment;

export type PluginFragmentFragment = { __typename?: 'Plugin', id: string, name: string, extensions: Array<{ __typename?: 'PluginExtension', extensionId: string, type: PluginExtensionType, name: string, description: string, icon: string, translatedName: string }> } & { ' $fragmentName'?: 'PluginFragmentFragment' };

export type ProjectFragmentFragment = { __typename?: 'Project', id: string, name: string, description: string, imageUrl?: string | null, isArchived: boolean, isBasicAuthActive: boolean, basicAuthUsername: string, basicAuthPassword: string, publicTitle: string, publicDescription: string, publicImage: string, alias: string, publishmentStatus: PublishmentStatus, updatedAt: Date, coreSupport: boolean } & { ' $fragmentName'?: 'ProjectFragmentFragment' };

export type PropertySchemaFieldFragmentFragment = { __typename?: 'PropertySchemaField', fieldId: string, title: string, description: string, translatedTitle: string, translatedDescription: string, prefix?: string | null, suffix?: string | null, type: ValueType, defaultValue?: any | null, ui?: PropertySchemaFieldUi | null, min?: number | null, max?: number | null, choices?: Array<{ __typename?: 'PropertySchemaFieldChoice', key: string, icon?: string | null, title: string, translatedTitle: string }> | null, isAvailableIf?: { __typename?: 'PropertyCondition', fieldId: string, type: ValueType, value?: any | null } | null } & { ' $fragmentName'?: 'PropertySchemaFieldFragmentFragment' };

export type PropertySchemaGroupFragmentFragment = { __typename?: 'PropertySchemaGroup', schemaGroupId: string, title?: string | null, translatedTitle: string, isList: boolean, representativeFieldId?: string | null, isAvailableIf?: { __typename?: 'PropertyCondition', fieldId: string, type: ValueType, value?: any | null } | null, fields: Array<(
    { __typename?: 'PropertySchemaField' }
    & { ' $fragmentRefs'?: { 'PropertySchemaFieldFragmentFragment': PropertySchemaFieldFragmentFragment } }
  )> } & { ' $fragmentName'?: 'PropertySchemaGroupFragmentFragment' };

export type PropertyFieldFragmentFragment = { __typename?: 'PropertyField', id: string, fieldId: string, type: ValueType, value?: any | null, links?: Array<(
    { __typename?: 'PropertyFieldLink' }
    & { ' $fragmentRefs'?: { 'PropertyFieldLinkFragment': PropertyFieldLinkFragment } }
  )> | null } & { ' $fragmentName'?: 'PropertyFieldFragmentFragment' };

export type PropertyGroupFragmentFragment = { __typename?: 'PropertyGroup', id: string, schemaGroupId: string, fields: Array<(
    { __typename?: 'PropertyField' }
    & { ' $fragmentRefs'?: { 'PropertyFieldFragmentFragment': PropertyFieldFragmentFragment } }
  )> } & { ' $fragmentName'?: 'PropertyGroupFragmentFragment' };

type PropertyItemFragment_PropertyGroup_Fragment = (
  { __typename?: 'PropertyGroup' }
  & { ' $fragmentRefs'?: { 'PropertyGroupFragmentFragment': PropertyGroupFragmentFragment } }
) & { ' $fragmentName'?: 'PropertyItemFragment_PropertyGroup_Fragment' };

type PropertyItemFragment_PropertyGroupList_Fragment = { __typename?: 'PropertyGroupList', id: string, schemaGroupId: string, groups: Array<(
    { __typename?: 'PropertyGroup' }
    & { ' $fragmentRefs'?: { 'PropertyGroupFragmentFragment': PropertyGroupFragmentFragment } }
  )> } & { ' $fragmentName'?: 'PropertyItemFragment_PropertyGroupList_Fragment' };

export type PropertyItemFragmentFragment = PropertyItemFragment_PropertyGroup_Fragment | PropertyItemFragment_PropertyGroupList_Fragment;

export type PropertyFragmentWithoutSchemaFragment = { __typename?: 'Property', id: string, items: Array<(
    { __typename?: 'PropertyGroup' }
    & { ' $fragmentRefs'?: { 'PropertyItemFragment_PropertyGroup_Fragment': PropertyItemFragment_PropertyGroup_Fragment } }
  ) | (
    { __typename?: 'PropertyGroupList' }
    & { ' $fragmentRefs'?: { 'PropertyItemFragment_PropertyGroupList_Fragment': PropertyItemFragment_PropertyGroupList_Fragment } }
  )> } & { ' $fragmentName'?: 'PropertyFragmentWithoutSchemaFragment' };

export type PropertyFragmentFragment = (
  { __typename?: 'Property', id: string, schema?: { __typename?: 'PropertySchema', id: string, groups: Array<(
      { __typename?: 'PropertySchemaGroup' }
      & { ' $fragmentRefs'?: { 'PropertySchemaGroupFragmentFragment': PropertySchemaGroupFragmentFragment } }
    )> } | null }
  & { ' $fragmentRefs'?: { 'PropertyFragmentWithoutSchemaFragment': PropertyFragmentWithoutSchemaFragment } }
) & { ' $fragmentName'?: 'PropertyFragmentFragment' };

export type MergedPropertyGroupCommonFragmentFragment = { __typename?: 'MergedPropertyGroup', schemaGroupId: string, fields: Array<{ __typename?: 'MergedPropertyField', fieldId: string, type: ValueType, actualValue?: any | null, overridden: boolean, links?: Array<(
      { __typename?: 'PropertyFieldLink' }
      & { ' $fragmentRefs'?: { 'PropertyFieldLinkFragment': PropertyFieldLinkFragment } }
    )> | null }> } & { ' $fragmentName'?: 'MergedPropertyGroupCommonFragmentFragment' };

export type MergedPropertyGroupFragmentFragment = (
  { __typename?: 'MergedPropertyGroup', groups: Array<(
    { __typename?: 'MergedPropertyGroup' }
    & { ' $fragmentRefs'?: { 'MergedPropertyGroupCommonFragmentFragment': MergedPropertyGroupCommonFragmentFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'MergedPropertyGroupCommonFragmentFragment': MergedPropertyGroupCommonFragmentFragment } }
) & { ' $fragmentName'?: 'MergedPropertyGroupFragmentFragment' };

export type MergedPropertyFragmentWithoutSchemaFragment = { __typename?: 'MergedProperty', originalId?: string | null, parentId?: string | null, linkedDatasetId?: string | null, groups: Array<(
    { __typename?: 'MergedPropertyGroup' }
    & { ' $fragmentRefs'?: { 'MergedPropertyGroupFragmentFragment': MergedPropertyGroupFragmentFragment } }
  )> } & { ' $fragmentName'?: 'MergedPropertyFragmentWithoutSchemaFragment' };

export type MergedPropertyFragmentFragment = (
  { __typename?: 'MergedProperty', schema?: { __typename?: 'PropertySchema', id: string } | null }
  & { ' $fragmentRefs'?: { 'MergedPropertyFragmentWithoutSchemaFragment': MergedPropertyFragmentWithoutSchemaFragment } }
) & { ' $fragmentName'?: 'MergedPropertyFragmentFragment' };

export type PropertyFieldLinkFragment = { __typename?: 'PropertyFieldLink', datasetId?: string | null, datasetSchemaId: string, datasetSchemaFieldId: string } & { ' $fragmentName'?: 'PropertyFieldLinkFragment' };

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', node?: { __typename?: 'Asset', id: string } | { __typename?: 'Dataset', id: string } | { __typename?: 'DatasetSchema', id: string } | { __typename?: 'DatasetSchemaField', id: string } | (
    { __typename?: 'Project', id: string, scene?: { __typename?: 'Scene', id: string } | null }
    & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
  ) | { __typename?: 'Property', id: string } | { __typename?: 'Scene', id: string } | { __typename?: 'Team', id: string } | { __typename?: 'User', id: string } | null };

export type GetProjectsQueryVariables = Exact<{
  teamId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectConnection', totalCount: number, edges: Array<{ __typename?: 'ProjectEdge', node?: (
        { __typename?: 'Project', id: string, scene?: { __typename?: 'Scene', id: string } | null }
        & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
      ) | null }>, nodes: Array<(
      { __typename?: 'Project', id: string, scene?: { __typename?: 'Scene', id: string } | null }
      & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
    ) | null>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type CheckProjectAliasQueryVariables = Exact<{
  alias: Scalars['String']['input'];
}>;


export type CheckProjectAliasQuery = { __typename?: 'Query', checkProjectAlias: { __typename?: 'ProjectAliasAvailability', alias: string, available: boolean } };

export type CreateProjectMutationVariables = Exact<{
  teamId: Scalars['ID']['input'];
  visualizer: Visualizer;
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['URL']['input']>;
  coreSupport?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'ProjectPayload', project: { __typename?: 'Project', id: string, name: string, description: string, imageUrl?: string | null, coreSupport: boolean } } | null };

export type UpdateProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['URL']['input']>;
  publicTitle?: InputMaybe<Scalars['String']['input']>;
  publicDescription?: InputMaybe<Scalars['String']['input']>;
  publicImage?: InputMaybe<Scalars['String']['input']>;
  deleteImageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  deletePublicImage?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'ProjectPayload', project: (
      { __typename?: 'Project', id: string }
      & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
    ) } | null };

export type UpdateProjectBasicAuthMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  isBasicAuthActive?: InputMaybe<Scalars['Boolean']['input']>;
  basicAuthUsername?: InputMaybe<Scalars['String']['input']>;
  basicAuthPassword?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProjectBasicAuthMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'ProjectPayload', project: { __typename?: 'Project', id: string, name: string, isBasicAuthActive: boolean, basicAuthUsername: string, basicAuthPassword: string } } | null };

export type UpdateProjectAliasMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  alias: Scalars['String']['input'];
}>;


export type UpdateProjectAliasMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'ProjectPayload', project: { __typename?: 'Project', id: string, name: string, alias: string } } | null };

export type PublishProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  alias?: InputMaybe<Scalars['String']['input']>;
  status: PublishmentStatus;
}>;


export type PublishProjectMutation = { __typename?: 'Mutation', publishProject?: { __typename?: 'ProjectPayload', project: { __typename?: 'Project', id: string, alias: string, publishmentStatus: PublishmentStatus } } | null };

export type ArchiveProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  archived: Scalars['Boolean']['input'];
}>;


export type ArchiveProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'ProjectPayload', project: { __typename?: 'Project', id: string, isArchived: boolean } } | null };

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'DeleteProjectPayload', projectId: string } | null };

export type GetSceneQueryVariables = Exact<{
  sceneId: Scalars['ID']['input'];
}>;


export type GetSceneQuery = { __typename?: 'Query', node?: { __typename?: 'Asset', id: string } | { __typename?: 'Dataset', id: string } | { __typename?: 'DatasetSchema', id: string } | { __typename?: 'DatasetSchemaField', id: string } | { __typename?: 'Project', id: string } | { __typename?: 'Property', id: string } | { __typename?: 'Scene', rootLayerId: string, teamId: string, projectId: string, id: string } | { __typename?: 'Team', id: string } | { __typename?: 'User', id: string } | null };

export type CreateSceneMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type CreateSceneMutation = { __typename?: 'Mutation', createScene?: { __typename?: 'CreateScenePayload', scene: { __typename?: 'Scene', id: string } } | null };

export type GetUserBySearchQueryVariables = Exact<{
  nameOrEmail: Scalars['String']['input'];
}>;


export type GetUserBySearchQuery = { __typename?: 'Query', searchUser?: { __typename?: 'User', id: string, name: string, email: string } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'Me', id: string, name: string, email: string, lang: string, theme: Theme, auths: Array<string>, myTeam: { __typename?: 'Team', id: string, name: string, policyId?: string | null, policy?: { __typename?: 'Policy', id: string, name: string, projectCount?: number | null, memberCount?: number | null, publishedProjectCount?: number | null, layerCount?: number | null, assetStorageSize?: number | null, datasetSchemaCount?: number | null, datasetCount?: number | null } | null }, teams: Array<{ __typename?: 'Team', id: string, name: string, policyId?: string | null, members: Array<{ __typename?: 'TeamMember', userId: string, role: Role, user?: { __typename?: 'User', id: string, name: string, email: string } | null }>, policy?: { __typename?: 'Policy', id: string, name: string, projectCount?: number | null, memberCount?: number | null, publishedProjectCount?: number | null, layerCount?: number | null, assetStorageSize?: number | null, datasetSchemaCount?: number | null, datasetCount?: number | null } | null }> } | null };

export type UpdateMeMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['Lang']['input']>;
  theme?: InputMaybe<Theme>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe?: { __typename?: 'UpdateMePayload', me: { __typename?: 'Me', id: string, name: string, email: string, lang: string, theme: Theme, myTeam: { __typename?: 'Team', id: string, name: string } } } | null };

export type DeleteMeMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type DeleteMeMutation = { __typename?: 'Mutation', deleteMe?: { __typename?: 'DeleteMePayload', userId: string } | null };

export type CreateWorkspaceMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateWorkspaceMutation = { __typename?: 'Mutation', createTeam?: { __typename?: 'CreateTeamPayload', team: { __typename?: 'Team', id: string, name: string, personal: boolean, policyId?: string | null, members: Array<{ __typename?: 'TeamMember', userId: string, role: Role, user?: { __typename?: 'User', id: string, name: string, email: string } | null }>, policy?: { __typename?: 'Policy', id: string, name: string, projectCount?: number | null, memberCount?: number | null, publishedProjectCount?: number | null, layerCount?: number | null, assetStorageSize?: number | null, datasetSchemaCount?: number | null, datasetCount?: number | null } | null } } | null };

export const WidgetAreaFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetAreaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"widgetIds"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"}},{"kind":"Field","name":{"kind":"Name","value":"bottom"}},{"kind":"Field","name":{"kind":"Name","value":"left"}},{"kind":"Field","name":{"kind":"Name","value":"right"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"centered"}},{"kind":"Field","name":{"kind":"Name","value":"background"}}]}}]} as unknown as DocumentNode<WidgetAreaFragmentFragment, unknown>;
export const WidgetSectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetAreaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"widgetIds"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"}},{"kind":"Field","name":{"kind":"Name","value":"bottom"}},{"kind":"Field","name":{"kind":"Name","value":"left"}},{"kind":"Field","name":{"kind":"Name","value":"right"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"centered"}},{"kind":"Field","name":{"kind":"Name","value":"background"}}]}}]} as unknown as DocumentNode<WidgetSectionFragmentFragment, unknown>;
export const WidgetZoneFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetZoneFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetZone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetAreaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"widgetIds"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"}},{"kind":"Field","name":{"kind":"Name","value":"bottom"}},{"kind":"Field","name":{"kind":"Name","value":"left"}},{"kind":"Field","name":{"kind":"Name","value":"right"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"centered"}},{"kind":"Field","name":{"kind":"Name","value":"background"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}}]}}]} as unknown as DocumentNode<WidgetZoneFragmentFragment, unknown>;
export const WidgetAlignSystemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetAlignSystemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetAlignSystem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"outer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetZoneFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetZoneFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetAreaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"widgetIds"}},{"kind":"Field","name":{"kind":"Name","value":"align"}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"}},{"kind":"Field","name":{"kind":"Name","value":"bottom"}},{"kind":"Field","name":{"kind":"Name","value":"left"}},{"kind":"Field","name":{"kind":"Name","value":"right"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gap"}},{"kind":"Field","name":{"kind":"Name","value":"centered"}},{"kind":"Field","name":{"kind":"Name","value":"background"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetAreaFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WidgetZoneFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WidgetZone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WidgetSectionFragment"}}]}}]}}]} as unknown as DocumentNode<WidgetAlignSystemFragmentFragment, unknown>;
export const DatasetFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"schemaId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"field"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<DatasetFragmentFragment, unknown>;
export const LayerSystemLayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayerFragment, unknown>;
export const LayerSystemLayer1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayer1Fragment, unknown>;
export const LayerSystemLayer2FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}}]}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayer2Fragment, unknown>;
export const LayerSystemLayer3FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer2"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer1"}}]}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayer3Fragment, unknown>;
export const LayerSystemLayer4FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer4"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer3"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer2"}}]}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayer4Fragment, unknown>;
export const LayerSystemLayer5FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer5"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer4"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer2"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerSystemLayer4"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerSystemLayer3"}}]}}]}}]}}]} as unknown as DocumentNode<LayerSystemLayer5Fragment, unknown>;
export const PropertyFieldLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}}]} as unknown as DocumentNode<PropertyFieldLinkFragment, unknown>;
export const PropertyFieldFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}}]} as unknown as DocumentNode<PropertyFieldFragmentFragment, unknown>;
export const PropertyGroupFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]} as unknown as DocumentNode<PropertyGroupFragmentFragment, unknown>;
export const PropertyItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}}]} as unknown as DocumentNode<PropertyItemFragmentFragment, unknown>;
export const PropertyFragmentWithoutSchemaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}}]} as unknown as DocumentNode<PropertyFragmentWithoutSchemaFragment, unknown>;
export const PropertySchemaFieldFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<PropertySchemaFieldFragmentFragment, unknown>;
export const PropertySchemaGroupFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<PropertySchemaGroupFragmentFragment, unknown>;
export const PropertyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}}]} as unknown as DocumentNode<PropertyFragmentFragment, unknown>;
export const EarthLayerCommonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayerCommonFragment, unknown>;
export const EarthLayerItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayerItemFragment, unknown>;
export const EarthLayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayerFragment, unknown>;
export const EarthLayer1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}}]} as unknown as DocumentNode<EarthLayer1Fragment, unknown>;
export const EarthLayer2FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayer2Fragment, unknown>;
export const EarthLayer3FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer2"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer1"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayer3Fragment, unknown>;
export const EarthLayer4FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer4"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer3"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer2"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayer4Fragment, unknown>;
export const EarthLayer5FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer5"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer4"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerTagGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayerItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"scenePlugin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerCommon"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayerItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer2"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer1"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer3"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer2"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EarthLayer4"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EarthLayer3"}}]}}]}}]}}]} as unknown as DocumentNode<EarthLayer5Fragment, unknown>;
export const InfoboxFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}}]} as unknown as DocumentNode<InfoboxFragmentFragment, unknown>;
export const MergedPropertyGroupCommonFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}}]} as unknown as DocumentNode<MergedPropertyGroupCommonFragmentFragment, unknown>;
export const MergedPropertyGroupFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}}]} as unknown as DocumentNode<MergedPropertyGroupFragmentFragment, unknown>;
export const MergedPropertyFragmentWithoutSchemaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}}]} as unknown as DocumentNode<MergedPropertyFragmentWithoutSchemaFragment, unknown>;
export const MergedPropertyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}}]} as unknown as DocumentNode<MergedPropertyFragmentFragment, unknown>;
export const MergedInfoboxFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MergedInfoboxFragmentFragment, unknown>;
export const LayerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}}]} as unknown as DocumentNode<LayerFragmentFragment, unknown>;
export const Layer0FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer0Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer0FragmentFragment, unknown>;
export const Layer1FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer1Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer1FragmentFragment, unknown>;
export const Layer2FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer2Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer2FragmentFragment, unknown>;
export const Layer3FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer3Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer3FragmentFragment, unknown>;
export const Layer4FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer4Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer4FragmentFragment, unknown>;
export const Layer5FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Layer5Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayerFragment"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFieldLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaFieldId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroupList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"translatedDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"choices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertySchemaGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertySchemaGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]},{"kind":"Field","name":{"kind":"Name","value":"isList"}},{"kind":"Field","name":{"kind":"Name","value":"representativeFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailableIf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaFieldFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertySchemaGroupFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Infobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"propertyId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schemaGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"actualValue"}},{"kind":"Field","name":{"kind":"Name","value":"overridden"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFieldLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedPropertyGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupCommonFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedPropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragmentWithoutSchema"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MergedInfoboxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MergedInfobox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalId"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Layer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}},{"kind":"Field","name":{"kind":"Name","value":"pluginId"}},{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InfoboxFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetSchemaId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayerItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedDatasetId"}},{"kind":"Field","name":{"kind":"Name","value":"merged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedPropertyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infobox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MergedInfoboxFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Layer5FragmentFragment, unknown>;
export const PluginFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PluginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Plugin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"extensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extensionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"translatedName"}}]}}]}}]} as unknown as DocumentNode<PluginFragmentFragment, unknown>;
export const ProjectFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isBasicAuthActive"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthUsername"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthPassword"}},{"kind":"Field","name":{"kind":"Name","value":"publicTitle"}},{"kind":"Field","name":{"kind":"Name","value":"publicDescription"}},{"kind":"Field","name":{"kind":"Name","value":"publicImage"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"publishmentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"coreSupport"}}]}}]} as unknown as DocumentNode<ProjectFragmentFragment, unknown>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"PROJECT"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectFragment"}},{"kind":"Field","name":{"kind":"Name","value":"scene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isBasicAuthActive"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthUsername"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthPassword"}},{"kind":"Field","name":{"kind":"Name","value":"publicTitle"}},{"kind":"Field","name":{"kind":"Name","value":"publicDescription"}},{"kind":"Field","name":{"kind":"Name","value":"publicImage"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"publishmentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"coreSupport"}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectFragment"}},{"kind":"Field","name":{"kind":"Name","value":"scene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectFragment"}},{"kind":"Field","name":{"kind":"Name","value":"scene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isBasicAuthActive"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthUsername"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthPassword"}},{"kind":"Field","name":{"kind":"Name","value":"publicTitle"}},{"kind":"Field","name":{"kind":"Name","value":"publicDescription"}},{"kind":"Field","name":{"kind":"Name","value":"publicImage"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"publishmentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"coreSupport"}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const CheckProjectAliasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckProjectAlias"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alias"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkProjectAlias"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"alias"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alias"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"available"}}]}}]}}]} as unknown as DocumentNode<CheckProjectAliasQuery, CheckProjectAliasQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"visualizer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Visualizer"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"URL"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coreSupport"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"visualizer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"visualizer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"coreSupport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coreSupport"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coreSupport"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"URL"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicImage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteImageUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletePublicImage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publicTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicTitle"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publicDescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicDescription"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publicImage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicImage"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"deleteImageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteImageUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"deletePublicImage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletePublicImage"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"isBasicAuthActive"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthUsername"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthPassword"}},{"kind":"Field","name":{"kind":"Name","value":"publicTitle"}},{"kind":"Field","name":{"kind":"Name","value":"publicDescription"}},{"kind":"Field","name":{"kind":"Name","value":"publicImage"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"publishmentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"coreSupport"}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateProjectBasicAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjectBasicAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBasicAuthActive"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basicAuthUsername"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basicAuthPassword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isBasicAuthActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBasicAuthActive"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"basicAuthUsername"},"value":{"kind":"Variable","name":{"kind":"Name","value":"basicAuthUsername"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"basicAuthPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"basicAuthPassword"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isBasicAuthActive"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthUsername"}},{"kind":"Field","name":{"kind":"Name","value":"basicAuthPassword"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectBasicAuthMutation, UpdateProjectBasicAuthMutationVariables>;
export const UpdateProjectAliasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjectAlias"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alias"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"alias"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alias"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProjectAliasMutation, UpdateProjectAliasMutationVariables>;
export const PublishProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alias"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublishmentStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"alias"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alias"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"publishmentStatus"}}]}}]}}]}}]} as unknown as DocumentNode<PublishProjectMutation, PublishProjectMutationVariables>;
export const ArchiveProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ArchiveProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"archived"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"archived"},"value":{"kind":"Variable","name":{"kind":"Name","value":"archived"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}}]}}]}}]}}]} as unknown as DocumentNode<ArchiveProjectMutation, ArchiveProjectMutationVariables>;
export const DeleteProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const GetSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sceneId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sceneId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"SCENE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Scene"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootLayerId"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]}}]} as unknown as DocumentNode<GetSceneQuery, GetSceneQueryVariables>;
export const CreateSceneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScene"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScene"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scene"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSceneMutation, CreateSceneMutationVariables>;
export const GetUserBySearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBySearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nameOrEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nameOrEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nameOrEmail"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserBySearchQuery, GetUserBySearchQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"myTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"policyId"}},{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"publishedProjectCount"}},{"kind":"Field","name":{"kind":"Name","value":"layerCount"}},{"kind":"Field","name":{"kind":"Name","value":"assetStorageSize"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaCount"}},{"kind":"Field","name":{"kind":"Name","value":"datasetCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"policyId"}},{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"publishedProjectCount"}},{"kind":"Field","name":{"kind":"Name","value":"layerCount"}},{"kind":"Field","name":{"kind":"Name","value":"assetStorageSize"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaCount"}},{"kind":"Field","name":{"kind":"Name","value":"datasetCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"auths"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const UpdateMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Lang"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"theme"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Theme"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirmation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"theme"},"value":{"kind":"Variable","name":{"kind":"Name","value":"theme"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"passwordConfirmation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passwordConfirmation"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"myTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMeMutation, UpdateMeMutationVariables>;
export const DeleteMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<DeleteMeMutation, DeleteMeMutationVariables>;
export const CreateWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"}},{"kind":"Field","name":{"kind":"Name","value":"policyId"}},{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"publishedProjectCount"}},{"kind":"Field","name":{"kind":"Name","value":"layerCount"}},{"kind":"Field","name":{"kind":"Name","value":"assetStorageSize"}},{"kind":"Field","name":{"kind":"Name","value":"datasetSchemaCount"}},{"kind":"Field","name":{"kind":"Name","value":"datasetCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;