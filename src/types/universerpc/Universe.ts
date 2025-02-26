// Original file: protos/universerpc/universe.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddFederationServerRequestPartial as _universerpc_AddFederationServerRequestPartial, AddFederationServerRequest as _universerpc_AddFederationServerRequest } from '../universerpc/AddFederationServerRequest';
import type { AddFederationServerResponsePartial as _universerpc_AddFederationServerResponsePartial, AddFederationServerResponse as _universerpc_AddFederationServerResponse } from '../universerpc/AddFederationServerResponse';
import type { AssetLeafKeyResponsePartial as _universerpc_AssetLeafKeyResponsePartial, AssetLeafKeyResponse as _universerpc_AssetLeafKeyResponse } from '../universerpc/AssetLeafKeyResponse';
import type { AssetLeafKeysRequestPartial as _universerpc_AssetLeafKeysRequestPartial, AssetLeafKeysRequest as _universerpc_AssetLeafKeysRequest } from '../universerpc/AssetLeafKeysRequest';
import type { AssetLeafResponsePartial as _universerpc_AssetLeafResponsePartial, AssetLeafResponse as _universerpc_AssetLeafResponse } from '../universerpc/AssetLeafResponse';
import type { AssetProofPartial as _universerpc_AssetProofPartial, AssetProof as _universerpc_AssetProof } from '../universerpc/AssetProof';
import type { AssetProofResponsePartial as _universerpc_AssetProofResponsePartial, AssetProofResponse as _universerpc_AssetProofResponse } from '../universerpc/AssetProofResponse';
import type { AssetRootQueryPartial as _universerpc_AssetRootQueryPartial, AssetRootQuery as _universerpc_AssetRootQuery } from '../universerpc/AssetRootQuery';
import type { AssetRootRequestPartial as _universerpc_AssetRootRequestPartial, AssetRootRequest as _universerpc_AssetRootRequest } from '../universerpc/AssetRootRequest';
import type { AssetRootResponsePartial as _universerpc_AssetRootResponsePartial, AssetRootResponse as _universerpc_AssetRootResponse } from '../universerpc/AssetRootResponse';
import type { AssetStatsQueryPartial as _universerpc_AssetStatsQueryPartial, AssetStatsQuery as _universerpc_AssetStatsQuery } from '../universerpc/AssetStatsQuery';
import type { DeleteFederationServerRequestPartial as _universerpc_DeleteFederationServerRequestPartial, DeleteFederationServerRequest as _universerpc_DeleteFederationServerRequest } from '../universerpc/DeleteFederationServerRequest';
import type { DeleteFederationServerResponsePartial as _universerpc_DeleteFederationServerResponsePartial, DeleteFederationServerResponse as _universerpc_DeleteFederationServerResponse } from '../universerpc/DeleteFederationServerResponse';
import type { DeleteRootQueryPartial as _universerpc_DeleteRootQueryPartial, DeleteRootQuery as _universerpc_DeleteRootQuery } from '../universerpc/DeleteRootQuery';
import type { DeleteRootResponsePartial as _universerpc_DeleteRootResponsePartial, DeleteRootResponse as _universerpc_DeleteRootResponse } from '../universerpc/DeleteRootResponse';
import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { InfoRequestPartial as _universerpc_InfoRequestPartial, InfoRequest as _universerpc_InfoRequest } from '../universerpc/InfoRequest';
import type { InfoResponsePartial as _universerpc_InfoResponsePartial, InfoResponse as _universerpc_InfoResponse } from '../universerpc/InfoResponse';
import type { ListFederationServersRequestPartial as _universerpc_ListFederationServersRequestPartial, ListFederationServersRequest as _universerpc_ListFederationServersRequest } from '../universerpc/ListFederationServersRequest';
import type { ListFederationServersResponsePartial as _universerpc_ListFederationServersResponsePartial, ListFederationServersResponse as _universerpc_ListFederationServersResponse } from '../universerpc/ListFederationServersResponse';
import type { MultiverseRootRequestPartial as _universerpc_MultiverseRootRequestPartial, MultiverseRootRequest as _universerpc_MultiverseRootRequest } from '../universerpc/MultiverseRootRequest';
import type { MultiverseRootResponsePartial as _universerpc_MultiverseRootResponsePartial, MultiverseRootResponse as _universerpc_MultiverseRootResponse } from '../universerpc/MultiverseRootResponse';
import type { PushProofRequestPartial as _universerpc_PushProofRequestPartial, PushProofRequest as _universerpc_PushProofRequest } from '../universerpc/PushProofRequest';
import type { PushProofResponsePartial as _universerpc_PushProofResponsePartial, PushProofResponse as _universerpc_PushProofResponse } from '../universerpc/PushProofResponse';
import type { QueryEventsRequestPartial as _universerpc_QueryEventsRequestPartial, QueryEventsRequest as _universerpc_QueryEventsRequest } from '../universerpc/QueryEventsRequest';
import type { QueryEventsResponsePartial as _universerpc_QueryEventsResponsePartial, QueryEventsResponse as _universerpc_QueryEventsResponse } from '../universerpc/QueryEventsResponse';
import type { QueryFederationSyncConfigRequestPartial as _universerpc_QueryFederationSyncConfigRequestPartial, QueryFederationSyncConfigRequest as _universerpc_QueryFederationSyncConfigRequest } from '../universerpc/QueryFederationSyncConfigRequest';
import type { QueryFederationSyncConfigResponsePartial as _universerpc_QueryFederationSyncConfigResponsePartial, QueryFederationSyncConfigResponse as _universerpc_QueryFederationSyncConfigResponse } from '../universerpc/QueryFederationSyncConfigResponse';
import type { QueryRootResponsePartial as _universerpc_QueryRootResponsePartial, QueryRootResponse as _universerpc_QueryRootResponse } from '../universerpc/QueryRootResponse';
import type { SetFederationSyncConfigRequestPartial as _universerpc_SetFederationSyncConfigRequestPartial, SetFederationSyncConfigRequest as _universerpc_SetFederationSyncConfigRequest } from '../universerpc/SetFederationSyncConfigRequest';
import type { SetFederationSyncConfigResponsePartial as _universerpc_SetFederationSyncConfigResponsePartial, SetFederationSyncConfigResponse as _universerpc_SetFederationSyncConfigResponse } from '../universerpc/SetFederationSyncConfigResponse';
import type { StatsRequestPartial as _universerpc_StatsRequestPartial, StatsRequest as _universerpc_StatsRequest } from '../universerpc/StatsRequest';
import type { StatsResponsePartial as _universerpc_StatsResponsePartial, StatsResponse as _universerpc_StatsResponse } from '../universerpc/StatsResponse';
import type { SyncRequestPartial as _universerpc_SyncRequestPartial, SyncRequest as _universerpc_SyncRequest } from '../universerpc/SyncRequest';
import type { SyncResponsePartial as _universerpc_SyncResponsePartial, SyncResponse as _universerpc_SyncResponse } from '../universerpc/SyncResponse';
import type { UniverseAssetStatsPartial as _universerpc_UniverseAssetStatsPartial, UniverseAssetStats as _universerpc_UniverseAssetStats } from '../universerpc/UniverseAssetStats';
import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';

export interface UniverseClient extends grpc.Client {
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  AddFederationServer(argument: _universerpc_AddFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  addFederationServer(argument: _universerpc_AddFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_AddFederationServerResponse>): grpc.ClientUnaryCall;
  
  AssetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  AssetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  assetLeafKeys(argument: _universerpc_AssetLeafKeysRequestPartial, callback: grpc.requestCallback<_universerpc_AssetLeafKeyResponse>): grpc.ClientUnaryCall;
  
  AssetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  AssetLeaves(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  assetLeaves(argument: _universerpc_IDPartial, callback: grpc.requestCallback<_universerpc_AssetLeafResponse>): grpc.ClientUnaryCall;
  
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  AssetRoots(argument: _universerpc_AssetRootRequestPartial, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  assetRoots(argument: _universerpc_AssetRootRequestPartial, callback: grpc.requestCallback<_universerpc_AssetRootResponse>): grpc.ClientUnaryCall;
  
  DeleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  DeleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  DeleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  DeleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  deleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  deleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  deleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  deleteAssetRoot(argument: _universerpc_DeleteRootQueryPartial, callback: grpc.requestCallback<_universerpc_DeleteRootResponse>): grpc.ClientUnaryCall;
  
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  DeleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  deleteFederationServer(argument: _universerpc_DeleteFederationServerRequestPartial, callback: grpc.requestCallback<_universerpc_DeleteFederationServerResponse>): grpc.ClientUnaryCall;
  
  Info(argument: _universerpc_InfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  Info(argument: _universerpc_InfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  Info(argument: _universerpc_InfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  Info(argument: _universerpc_InfoRequestPartial, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  info(argument: _universerpc_InfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  info(argument: _universerpc_InfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  info(argument: _universerpc_InfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  info(argument: _universerpc_InfoRequestPartial, callback: grpc.requestCallback<_universerpc_InfoResponse>): grpc.ClientUnaryCall;
  
  InsertProof(argument: _universerpc_AssetProofPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  InsertProof(argument: _universerpc_AssetProofPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  InsertProof(argument: _universerpc_AssetProofPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  InsertProof(argument: _universerpc_AssetProofPartial, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  insertProof(argument: _universerpc_AssetProofPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  insertProof(argument: _universerpc_AssetProofPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  insertProof(argument: _universerpc_AssetProofPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  insertProof(argument: _universerpc_AssetProofPartial, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  ListFederationServers(argument: _universerpc_ListFederationServersRequestPartial, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  listFederationServers(argument: _universerpc_ListFederationServersRequestPartial, callback: grpc.requestCallback<_universerpc_ListFederationServersResponse>): grpc.ClientUnaryCall;
  
  MultiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  MultiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  MultiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  MultiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  multiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  multiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  multiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  multiverseRoot(argument: _universerpc_MultiverseRootRequestPartial, callback: grpc.requestCallback<_universerpc_MultiverseRootResponse>): grpc.ClientUnaryCall;
  
  PushProof(argument: _universerpc_PushProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  PushProof(argument: _universerpc_PushProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  PushProof(argument: _universerpc_PushProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  PushProof(argument: _universerpc_PushProofRequestPartial, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  pushProof(argument: _universerpc_PushProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  pushProof(argument: _universerpc_PushProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  pushProof(argument: _universerpc_PushProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  pushProof(argument: _universerpc_PushProofRequestPartial, callback: grpc.requestCallback<_universerpc_PushProofResponse>): grpc.ClientUnaryCall;
  
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  QueryAssetRoots(argument: _universerpc_AssetRootQueryPartial, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  queryAssetRoots(argument: _universerpc_AssetRootQueryPartial, callback: grpc.requestCallback<_universerpc_QueryRootResponse>): grpc.ClientUnaryCall;
  
  QueryAssetStats(argument: _universerpc_AssetStatsQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  QueryAssetStats(argument: _universerpc_AssetStatsQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  QueryAssetStats(argument: _universerpc_AssetStatsQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  QueryAssetStats(argument: _universerpc_AssetStatsQueryPartial, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  queryAssetStats(argument: _universerpc_AssetStatsQueryPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  queryAssetStats(argument: _universerpc_AssetStatsQueryPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  queryAssetStats(argument: _universerpc_AssetStatsQueryPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  queryAssetStats(argument: _universerpc_AssetStatsQueryPartial, callback: grpc.requestCallback<_universerpc_UniverseAssetStats>): grpc.ClientUnaryCall;
  
  QueryEvents(argument: _universerpc_QueryEventsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  QueryEvents(argument: _universerpc_QueryEventsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  QueryEvents(argument: _universerpc_QueryEventsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  QueryEvents(argument: _universerpc_QueryEventsRequestPartial, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  queryEvents(argument: _universerpc_QueryEventsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  queryEvents(argument: _universerpc_QueryEventsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  queryEvents(argument: _universerpc_QueryEventsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  queryEvents(argument: _universerpc_QueryEventsRequestPartial, callback: grpc.requestCallback<_universerpc_QueryEventsResponse>): grpc.ClientUnaryCall;
  
  QueryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  QueryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  QueryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  QueryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  queryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  queryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  queryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  queryFederationSyncConfig(argument: _universerpc_QueryFederationSyncConfigRequestPartial, callback: grpc.requestCallback<_universerpc_QueryFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  
  QueryProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  QueryProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  QueryProof(argument: _universerpc_UniverseKeyPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  QueryProof(argument: _universerpc_UniverseKeyPartial, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  queryProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  queryProof(argument: _universerpc_UniverseKeyPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  queryProof(argument: _universerpc_UniverseKeyPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  queryProof(argument: _universerpc_UniverseKeyPartial, callback: grpc.requestCallback<_universerpc_AssetProofResponse>): grpc.ClientUnaryCall;
  
  SetFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  SetFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  SetFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  SetFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  setFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  setFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  setFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  setFederationSyncConfig(argument: _universerpc_SetFederationSyncConfigRequestPartial, callback: grpc.requestCallback<_universerpc_SetFederationSyncConfigResponse>): grpc.ClientUnaryCall;
  
  SyncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  SyncUniverse(argument: _universerpc_SyncRequestPartial, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  syncUniverse(argument: _universerpc_SyncRequestPartial, callback: grpc.requestCallback<_universerpc_SyncResponse>): grpc.ClientUnaryCall;
  
  UniverseStats(argument: _universerpc_StatsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  UniverseStats(argument: _universerpc_StatsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  UniverseStats(argument: _universerpc_StatsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  UniverseStats(argument: _universerpc_StatsRequestPartial, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  universeStats(argument: _universerpc_StatsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  universeStats(argument: _universerpc_StatsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  universeStats(argument: _universerpc_StatsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  universeStats(argument: _universerpc_StatsRequestPartial, callback: grpc.requestCallback<_universerpc_StatsResponse>): grpc.ClientUnaryCall;
  
}

export interface UniverseHandlers extends grpc.UntypedServiceImplementation {
  AddFederationServer: grpc.handleUnaryCall<_universerpc_AddFederationServerRequest, _universerpc_AddFederationServerResponsePartial>;
  
  AssetLeafKeys: grpc.handleUnaryCall<_universerpc_AssetLeafKeysRequest, _universerpc_AssetLeafKeyResponsePartial>;
  
  AssetLeaves: grpc.handleUnaryCall<_universerpc_ID, _universerpc_AssetLeafResponsePartial>;
  
  AssetRoots: grpc.handleUnaryCall<_universerpc_AssetRootRequest, _universerpc_AssetRootResponsePartial>;
  
  DeleteAssetRoot: grpc.handleUnaryCall<_universerpc_DeleteRootQuery, _universerpc_DeleteRootResponsePartial>;
  
  DeleteFederationServer: grpc.handleUnaryCall<_universerpc_DeleteFederationServerRequest, _universerpc_DeleteFederationServerResponsePartial>;
  
  Info: grpc.handleUnaryCall<_universerpc_InfoRequest, _universerpc_InfoResponsePartial>;
  
  InsertProof: grpc.handleUnaryCall<_universerpc_AssetProof, _universerpc_AssetProofResponsePartial>;
  
  ListFederationServers: grpc.handleUnaryCall<_universerpc_ListFederationServersRequest, _universerpc_ListFederationServersResponsePartial>;
  
  MultiverseRoot: grpc.handleUnaryCall<_universerpc_MultiverseRootRequest, _universerpc_MultiverseRootResponsePartial>;
  
  PushProof: grpc.handleUnaryCall<_universerpc_PushProofRequest, _universerpc_PushProofResponsePartial>;
  
  QueryAssetRoots: grpc.handleUnaryCall<_universerpc_AssetRootQuery, _universerpc_QueryRootResponsePartial>;
  
  QueryAssetStats: grpc.handleUnaryCall<_universerpc_AssetStatsQuery, _universerpc_UniverseAssetStatsPartial>;
  
  QueryEvents: grpc.handleUnaryCall<_universerpc_QueryEventsRequest, _universerpc_QueryEventsResponsePartial>;
  
  QueryFederationSyncConfig: grpc.handleUnaryCall<_universerpc_QueryFederationSyncConfigRequest, _universerpc_QueryFederationSyncConfigResponsePartial>;
  
  QueryProof: grpc.handleUnaryCall<_universerpc_UniverseKey, _universerpc_AssetProofResponsePartial>;
  
  SetFederationSyncConfig: grpc.handleUnaryCall<_universerpc_SetFederationSyncConfigRequest, _universerpc_SetFederationSyncConfigResponsePartial>;
  
  SyncUniverse: grpc.handleUnaryCall<_universerpc_SyncRequest, _universerpc_SyncResponsePartial>;
  
  UniverseStats: grpc.handleUnaryCall<_universerpc_StatsRequest, _universerpc_StatsResponsePartial>;
  
}

export interface UniverseDefinition extends grpc.ServiceDefinition {
  AddFederationServer: MethodDefinition<_universerpc_AddFederationServerRequestPartial, _universerpc_AddFederationServerResponsePartial, _universerpc_AddFederationServerRequest, _universerpc_AddFederationServerResponse>
  AssetLeafKeys: MethodDefinition<_universerpc_AssetLeafKeysRequestPartial, _universerpc_AssetLeafKeyResponsePartial, _universerpc_AssetLeafKeysRequest, _universerpc_AssetLeafKeyResponse>
  AssetLeaves: MethodDefinition<_universerpc_IDPartial, _universerpc_AssetLeafResponsePartial, _universerpc_ID, _universerpc_AssetLeafResponse>
  AssetRoots: MethodDefinition<_universerpc_AssetRootRequestPartial, _universerpc_AssetRootResponsePartial, _universerpc_AssetRootRequest, _universerpc_AssetRootResponse>
  DeleteAssetRoot: MethodDefinition<_universerpc_DeleteRootQueryPartial, _universerpc_DeleteRootResponsePartial, _universerpc_DeleteRootQuery, _universerpc_DeleteRootResponse>
  DeleteFederationServer: MethodDefinition<_universerpc_DeleteFederationServerRequestPartial, _universerpc_DeleteFederationServerResponsePartial, _universerpc_DeleteFederationServerRequest, _universerpc_DeleteFederationServerResponse>
  Info: MethodDefinition<_universerpc_InfoRequestPartial, _universerpc_InfoResponsePartial, _universerpc_InfoRequest, _universerpc_InfoResponse>
  InsertProof: MethodDefinition<_universerpc_AssetProofPartial, _universerpc_AssetProofResponsePartial, _universerpc_AssetProof, _universerpc_AssetProofResponse>
  ListFederationServers: MethodDefinition<_universerpc_ListFederationServersRequestPartial, _universerpc_ListFederationServersResponsePartial, _universerpc_ListFederationServersRequest, _universerpc_ListFederationServersResponse>
  MultiverseRoot: MethodDefinition<_universerpc_MultiverseRootRequestPartial, _universerpc_MultiverseRootResponsePartial, _universerpc_MultiverseRootRequest, _universerpc_MultiverseRootResponse>
  PushProof: MethodDefinition<_universerpc_PushProofRequestPartial, _universerpc_PushProofResponsePartial, _universerpc_PushProofRequest, _universerpc_PushProofResponse>
  QueryAssetRoots: MethodDefinition<_universerpc_AssetRootQueryPartial, _universerpc_QueryRootResponsePartial, _universerpc_AssetRootQuery, _universerpc_QueryRootResponse>
  QueryAssetStats: MethodDefinition<_universerpc_AssetStatsQueryPartial, _universerpc_UniverseAssetStatsPartial, _universerpc_AssetStatsQuery, _universerpc_UniverseAssetStats>
  QueryEvents: MethodDefinition<_universerpc_QueryEventsRequestPartial, _universerpc_QueryEventsResponsePartial, _universerpc_QueryEventsRequest, _universerpc_QueryEventsResponse>
  QueryFederationSyncConfig: MethodDefinition<_universerpc_QueryFederationSyncConfigRequestPartial, _universerpc_QueryFederationSyncConfigResponsePartial, _universerpc_QueryFederationSyncConfigRequest, _universerpc_QueryFederationSyncConfigResponse>
  QueryProof: MethodDefinition<_universerpc_UniverseKeyPartial, _universerpc_AssetProofResponsePartial, _universerpc_UniverseKey, _universerpc_AssetProofResponse>
  SetFederationSyncConfig: MethodDefinition<_universerpc_SetFederationSyncConfigRequestPartial, _universerpc_SetFederationSyncConfigResponsePartial, _universerpc_SetFederationSyncConfigRequest, _universerpc_SetFederationSyncConfigResponse>
  SyncUniverse: MethodDefinition<_universerpc_SyncRequestPartial, _universerpc_SyncResponsePartial, _universerpc_SyncRequest, _universerpc_SyncResponse>
  UniverseStats: MethodDefinition<_universerpc_StatsRequestPartial, _universerpc_StatsResponsePartial, _universerpc_StatsRequest, _universerpc_StatsResponse>
}
