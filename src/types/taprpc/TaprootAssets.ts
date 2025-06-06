// Original file: protos/taprootassets.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { AddrReceivesRequestPartial as _taprpc_AddrReceivesRequestPartial, AddrReceivesRequest as _taprpc_AddrReceivesRequest } from '../taprpc/AddrReceivesRequest';
import type { AddrReceivesResponsePartial as _taprpc_AddrReceivesResponsePartial, AddrReceivesResponse as _taprpc_AddrReceivesResponse } from '../taprpc/AddrReceivesResponse';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { BurnAssetRequestPartial as _taprpc_BurnAssetRequestPartial, BurnAssetRequest as _taprpc_BurnAssetRequest } from '../taprpc/BurnAssetRequest';
import type { BurnAssetResponsePartial as _taprpc_BurnAssetResponsePartial, BurnAssetResponse as _taprpc_BurnAssetResponse } from '../taprpc/BurnAssetResponse';
import type { DebugLevelRequestPartial as _taprpc_DebugLevelRequestPartial, DebugLevelRequest as _taprpc_DebugLevelRequest } from '../taprpc/DebugLevelRequest';
import type { DebugLevelResponsePartial as _taprpc_DebugLevelResponsePartial, DebugLevelResponse as _taprpc_DebugLevelResponse } from '../taprpc/DebugLevelResponse';
import type { DecodeAddrRequestPartial as _taprpc_DecodeAddrRequestPartial, DecodeAddrRequest as _taprpc_DecodeAddrRequest } from '../taprpc/DecodeAddrRequest';
import type { DecodeProofRequestPartial as _taprpc_DecodeProofRequestPartial, DecodeProofRequest as _taprpc_DecodeProofRequest } from '../taprpc/DecodeProofRequest';
import type { DecodeProofResponsePartial as _taprpc_DecodeProofResponsePartial, DecodeProofResponse as _taprpc_DecodeProofResponse } from '../taprpc/DecodeProofResponse';
import type { ExportProofRequestPartial as _taprpc_ExportProofRequestPartial, ExportProofRequest as _taprpc_ExportProofRequest } from '../taprpc/ExportProofRequest';
import type { FetchAssetMetaRequestPartial as _taprpc_FetchAssetMetaRequestPartial, FetchAssetMetaRequest as _taprpc_FetchAssetMetaRequest } from '../taprpc/FetchAssetMetaRequest';
import type { GetInfoRequestPartial as _taprpc_GetInfoRequestPartial, GetInfoRequest as _taprpc_GetInfoRequest } from '../taprpc/GetInfoRequest';
import type { GetInfoResponsePartial as _taprpc_GetInfoResponsePartial, GetInfoResponse as _taprpc_GetInfoResponse } from '../taprpc/GetInfoResponse';
import type { ListAssetRequestPartial as _taprpc_ListAssetRequestPartial, ListAssetRequest as _taprpc_ListAssetRequest } from '../taprpc/ListAssetRequest';
import type { ListAssetResponsePartial as _taprpc_ListAssetResponsePartial, ListAssetResponse as _taprpc_ListAssetResponse } from '../taprpc/ListAssetResponse';
import type { ListBalancesRequestPartial as _taprpc_ListBalancesRequestPartial, ListBalancesRequest as _taprpc_ListBalancesRequest } from '../taprpc/ListBalancesRequest';
import type { ListBalancesResponsePartial as _taprpc_ListBalancesResponsePartial, ListBalancesResponse as _taprpc_ListBalancesResponse } from '../taprpc/ListBalancesResponse';
import type { ListBurnsRequestPartial as _taprpc_ListBurnsRequestPartial, ListBurnsRequest as _taprpc_ListBurnsRequest } from '../taprpc/ListBurnsRequest';
import type { ListBurnsResponsePartial as _taprpc_ListBurnsResponsePartial, ListBurnsResponse as _taprpc_ListBurnsResponse } from '../taprpc/ListBurnsResponse';
import type { ListGroupsRequestPartial as _taprpc_ListGroupsRequestPartial, ListGroupsRequest as _taprpc_ListGroupsRequest } from '../taprpc/ListGroupsRequest';
import type { ListGroupsResponsePartial as _taprpc_ListGroupsResponsePartial, ListGroupsResponse as _taprpc_ListGroupsResponse } from '../taprpc/ListGroupsResponse';
import type { ListTransfersRequestPartial as _taprpc_ListTransfersRequestPartial, ListTransfersRequest as _taprpc_ListTransfersRequest } from '../taprpc/ListTransfersRequest';
import type { ListTransfersResponsePartial as _taprpc_ListTransfersResponsePartial, ListTransfersResponse as _taprpc_ListTransfersResponse } from '../taprpc/ListTransfersResponse';
import type { ListUtxosRequestPartial as _taprpc_ListUtxosRequestPartial, ListUtxosRequest as _taprpc_ListUtxosRequest } from '../taprpc/ListUtxosRequest';
import type { ListUtxosResponsePartial as _taprpc_ListUtxosResponsePartial, ListUtxosResponse as _taprpc_ListUtxosResponse } from '../taprpc/ListUtxosResponse';
import type { NewAddrRequestPartial as _taprpc_NewAddrRequestPartial, NewAddrRequest as _taprpc_NewAddrRequest } from '../taprpc/NewAddrRequest';
import type { ProofFilePartial as _taprpc_ProofFilePartial, ProofFile as _taprpc_ProofFile } from '../taprpc/ProofFile';
import type { QueryAddrRequestPartial as _taprpc_QueryAddrRequestPartial, QueryAddrRequest as _taprpc_QueryAddrRequest } from '../taprpc/QueryAddrRequest';
import type { QueryAddrResponsePartial as _taprpc_QueryAddrResponsePartial, QueryAddrResponse as _taprpc_QueryAddrResponse } from '../taprpc/QueryAddrResponse';
import type { ReceiveEventPartial as _taprpc_ReceiveEventPartial, ReceiveEvent as _taprpc_ReceiveEvent } from '../taprpc/ReceiveEvent';
import type { RegisterTransferRequestPartial as _taprpc_RegisterTransferRequestPartial, RegisterTransferRequest as _taprpc_RegisterTransferRequest } from '../taprpc/RegisterTransferRequest';
import type { RegisterTransferResponsePartial as _taprpc_RegisterTransferResponsePartial, RegisterTransferResponse as _taprpc_RegisterTransferResponse } from '../taprpc/RegisterTransferResponse';
import type { SendAssetRequestPartial as _taprpc_SendAssetRequestPartial, SendAssetRequest as _taprpc_SendAssetRequest } from '../taprpc/SendAssetRequest';
import type { SendAssetResponsePartial as _taprpc_SendAssetResponsePartial, SendAssetResponse as _taprpc_SendAssetResponse } from '../taprpc/SendAssetResponse';
import type { SendEventPartial as _taprpc_SendEventPartial, SendEvent as _taprpc_SendEvent } from '../taprpc/SendEvent';
import type { StopRequestPartial as _taprpc_StopRequestPartial, StopRequest as _taprpc_StopRequest } from '../taprpc/StopRequest';
import type { StopResponsePartial as _taprpc_StopResponsePartial, StopResponse as _taprpc_StopResponse } from '../taprpc/StopResponse';
import type { SubscribeReceiveEventsRequestPartial as _taprpc_SubscribeReceiveEventsRequestPartial, SubscribeReceiveEventsRequest as _taprpc_SubscribeReceiveEventsRequest } from '../taprpc/SubscribeReceiveEventsRequest';
import type { SubscribeSendEventsRequestPartial as _taprpc_SubscribeSendEventsRequestPartial, SubscribeSendEventsRequest as _taprpc_SubscribeSendEventsRequest } from '../taprpc/SubscribeSendEventsRequest';
import type { UnpackProofFileRequestPartial as _taprpc_UnpackProofFileRequestPartial, UnpackProofFileRequest as _taprpc_UnpackProofFileRequest } from '../taprpc/UnpackProofFileRequest';
import type { UnpackProofFileResponsePartial as _taprpc_UnpackProofFileResponsePartial, UnpackProofFileResponse as _taprpc_UnpackProofFileResponse } from '../taprpc/UnpackProofFileResponse';
import type { VerifyProofResponsePartial as _taprpc_VerifyProofResponsePartial, VerifyProofResponse as _taprpc_VerifyProofResponse } from '../taprpc/VerifyProofResponse';

export interface TaprootAssetsClient extends grpc.Client {
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  AddrReceives(argument: _taprpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  addrReceives(argument: _taprpc_AddrReceivesRequestPartial, callback: grpc.requestCallback<_taprpc_AddrReceivesResponse>): grpc.ClientUnaryCall;
  
  BurnAsset(argument: _taprpc_BurnAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  BurnAsset(argument: _taprpc_BurnAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  BurnAsset(argument: _taprpc_BurnAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  BurnAsset(argument: _taprpc_BurnAssetRequestPartial, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  burnAsset(argument: _taprpc_BurnAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  burnAsset(argument: _taprpc_BurnAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  burnAsset(argument: _taprpc_BurnAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  burnAsset(argument: _taprpc_BurnAssetRequestPartial, callback: grpc.requestCallback<_taprpc_BurnAssetResponse>): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _taprpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _taprpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_taprpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  DecodeAddr(argument: _taprpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  decodeAddr(argument: _taprpc_DecodeAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  
  DecodeProof(argument: _taprpc_DecodeProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  DecodeProof(argument: _taprpc_DecodeProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  DecodeProof(argument: _taprpc_DecodeProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  DecodeProof(argument: _taprpc_DecodeProofRequestPartial, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  decodeProof(argument: _taprpc_DecodeProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  decodeProof(argument: _taprpc_DecodeProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  decodeProof(argument: _taprpc_DecodeProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  decodeProof(argument: _taprpc_DecodeProofRequestPartial, callback: grpc.requestCallback<_taprpc_DecodeProofResponse>): grpc.ClientUnaryCall;
  
  ExportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  ExportProof(argument: _taprpc_ExportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  exportProof(argument: _taprpc_ExportProofRequestPartial, callback: grpc.requestCallback<_taprpc_ProofFile>): grpc.ClientUnaryCall;
  
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  FetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  fetchAssetMeta(argument: _taprpc_FetchAssetMetaRequestPartial, callback: grpc.requestCallback<_taprpc_AssetMeta>): grpc.ClientUnaryCall;
  
  GetInfo(argument: _taprpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _taprpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _taprpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _taprpc_GetInfoRequestPartial, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _taprpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _taprpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _taprpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _taprpc_GetInfoRequestPartial, callback: grpc.requestCallback<_taprpc_GetInfoResponse>): grpc.ClientUnaryCall;
  
  ListAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  ListAssets(argument: _taprpc_ListAssetRequestPartial, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  listAssets(argument: _taprpc_ListAssetRequestPartial, callback: grpc.requestCallback<_taprpc_ListAssetResponse>): grpc.ClientUnaryCall;
  
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  ListBalances(argument: _taprpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  listBalances(argument: _taprpc_ListBalancesRequestPartial, callback: grpc.requestCallback<_taprpc_ListBalancesResponse>): grpc.ClientUnaryCall;
  
  ListBurns(argument: _taprpc_ListBurnsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  ListBurns(argument: _taprpc_ListBurnsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  ListBurns(argument: _taprpc_ListBurnsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  ListBurns(argument: _taprpc_ListBurnsRequestPartial, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  listBurns(argument: _taprpc_ListBurnsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  listBurns(argument: _taprpc_ListBurnsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  listBurns(argument: _taprpc_ListBurnsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  listBurns(argument: _taprpc_ListBurnsRequestPartial, callback: grpc.requestCallback<_taprpc_ListBurnsResponse>): grpc.ClientUnaryCall;
  
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  ListGroups(argument: _taprpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: _taprpc_ListGroupsRequestPartial, callback: grpc.requestCallback<_taprpc_ListGroupsResponse>): grpc.ClientUnaryCall;
  
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  ListTransfers(argument: _taprpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  listTransfers(argument: _taprpc_ListTransfersRequestPartial, callback: grpc.requestCallback<_taprpc_ListTransfersResponse>): grpc.ClientUnaryCall;
  
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  ListUtxos(argument: _taprpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  listUtxos(argument: _taprpc_ListUtxosRequestPartial, callback: grpc.requestCallback<_taprpc_ListUtxosResponse>): grpc.ClientUnaryCall;
  
  NewAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  NewAddr(argument: _taprpc_NewAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  newAddr(argument: _taprpc_NewAddrRequestPartial, callback: grpc.requestCallback<_taprpc_Addr>): grpc.ClientUnaryCall;
  
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  QueryAddrs(argument: _taprpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  queryAddrs(argument: _taprpc_QueryAddrRequestPartial, callback: grpc.requestCallback<_taprpc_QueryAddrResponse>): grpc.ClientUnaryCall;
  
  RegisterTransfer(argument: _taprpc_RegisterTransferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  RegisterTransfer(argument: _taprpc_RegisterTransferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  RegisterTransfer(argument: _taprpc_RegisterTransferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  RegisterTransfer(argument: _taprpc_RegisterTransferRequestPartial, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  registerTransfer(argument: _taprpc_RegisterTransferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  registerTransfer(argument: _taprpc_RegisterTransferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  registerTransfer(argument: _taprpc_RegisterTransferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  registerTransfer(argument: _taprpc_RegisterTransferRequestPartial, callback: grpc.requestCallback<_taprpc_RegisterTransferResponse>): grpc.ClientUnaryCall;
  
  SendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  SendAsset(argument: _taprpc_SendAssetRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  sendAsset(argument: _taprpc_SendAssetRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _taprpc_StopRequestPartial, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _taprpc_StopRequestPartial, callback: grpc.requestCallback<_taprpc_StopResponse>): grpc.ClientUnaryCall;
  
  SubscribeReceiveEvents(argument: _taprpc_SubscribeReceiveEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_ReceiveEvent>;
  SubscribeReceiveEvents(argument: _taprpc_SubscribeReceiveEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_ReceiveEvent>;
  subscribeReceiveEvents(argument: _taprpc_SubscribeReceiveEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_ReceiveEvent>;
  subscribeReceiveEvents(argument: _taprpc_SubscribeReceiveEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_ReceiveEvent>;
  
  SubscribeSendEvents(argument: _taprpc_SubscribeSendEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendEvent>;
  SubscribeSendEvents(argument: _taprpc_SubscribeSendEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendEvent>;
  subscribeSendEvents(argument: _taprpc_SubscribeSendEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendEvent>;
  subscribeSendEvents(argument: _taprpc_SubscribeSendEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_taprpc_SendEvent>;
  
  UnpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  UnpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  UnpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  UnpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  unpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  unpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  unpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  unpackProofFile(argument: _taprpc_UnpackProofFileRequestPartial, callback: grpc.requestCallback<_taprpc_UnpackProofFileResponse>): grpc.ClientUnaryCall;
  
  VerifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  VerifyProof(argument: _taprpc_ProofFilePartial, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  verifyProof(argument: _taprpc_ProofFilePartial, callback: grpc.requestCallback<_taprpc_VerifyProofResponse>): grpc.ClientUnaryCall;
  
}

export interface TaprootAssetsHandlers extends grpc.UntypedServiceImplementation {
  AddrReceives: grpc.handleUnaryCall<_taprpc_AddrReceivesRequest, _taprpc_AddrReceivesResponsePartial>;
  
  BurnAsset: grpc.handleUnaryCall<_taprpc_BurnAssetRequest, _taprpc_BurnAssetResponsePartial>;
  
  DebugLevel: grpc.handleUnaryCall<_taprpc_DebugLevelRequest, _taprpc_DebugLevelResponsePartial>;
  
  DecodeAddr: grpc.handleUnaryCall<_taprpc_DecodeAddrRequest, _taprpc_AddrPartial>;
  
  DecodeProof: grpc.handleUnaryCall<_taprpc_DecodeProofRequest, _taprpc_DecodeProofResponsePartial>;
  
  ExportProof: grpc.handleUnaryCall<_taprpc_ExportProofRequest, _taprpc_ProofFilePartial>;
  
  FetchAssetMeta: grpc.handleUnaryCall<_taprpc_FetchAssetMetaRequest, _taprpc_AssetMetaPartial>;
  
  GetInfo: grpc.handleUnaryCall<_taprpc_GetInfoRequest, _taprpc_GetInfoResponsePartial>;
  
  ListAssets: grpc.handleUnaryCall<_taprpc_ListAssetRequest, _taprpc_ListAssetResponsePartial>;
  
  ListBalances: grpc.handleUnaryCall<_taprpc_ListBalancesRequest, _taprpc_ListBalancesResponsePartial>;
  
  ListBurns: grpc.handleUnaryCall<_taprpc_ListBurnsRequest, _taprpc_ListBurnsResponsePartial>;
  
  ListGroups: grpc.handleUnaryCall<_taprpc_ListGroupsRequest, _taprpc_ListGroupsResponsePartial>;
  
  ListTransfers: grpc.handleUnaryCall<_taprpc_ListTransfersRequest, _taprpc_ListTransfersResponsePartial>;
  
  ListUtxos: grpc.handleUnaryCall<_taprpc_ListUtxosRequest, _taprpc_ListUtxosResponsePartial>;
  
  NewAddr: grpc.handleUnaryCall<_taprpc_NewAddrRequest, _taprpc_AddrPartial>;
  
  QueryAddrs: grpc.handleUnaryCall<_taprpc_QueryAddrRequest, _taprpc_QueryAddrResponsePartial>;
  
  RegisterTransfer: grpc.handleUnaryCall<_taprpc_RegisterTransferRequest, _taprpc_RegisterTransferResponsePartial>;
  
  SendAsset: grpc.handleUnaryCall<_taprpc_SendAssetRequest, _taprpc_SendAssetResponsePartial>;
  
  StopDaemon: grpc.handleUnaryCall<_taprpc_StopRequest, _taprpc_StopResponsePartial>;
  
  SubscribeReceiveEvents: grpc.handleServerStreamingCall<_taprpc_SubscribeReceiveEventsRequest, _taprpc_ReceiveEventPartial>;
  
  SubscribeSendEvents: grpc.handleServerStreamingCall<_taprpc_SubscribeSendEventsRequest, _taprpc_SendEventPartial>;
  
  UnpackProofFile: grpc.handleUnaryCall<_taprpc_UnpackProofFileRequest, _taprpc_UnpackProofFileResponsePartial>;
  
  VerifyProof: grpc.handleUnaryCall<_taprpc_ProofFile, _taprpc_VerifyProofResponsePartial>;
  
}

export interface TaprootAssetsDefinition extends grpc.ServiceDefinition {
  AddrReceives: MethodDefinition<_taprpc_AddrReceivesRequestPartial, _taprpc_AddrReceivesResponsePartial, _taprpc_AddrReceivesRequest, _taprpc_AddrReceivesResponse>
  BurnAsset: MethodDefinition<_taprpc_BurnAssetRequestPartial, _taprpc_BurnAssetResponsePartial, _taprpc_BurnAssetRequest, _taprpc_BurnAssetResponse>
  DebugLevel: MethodDefinition<_taprpc_DebugLevelRequestPartial, _taprpc_DebugLevelResponsePartial, _taprpc_DebugLevelRequest, _taprpc_DebugLevelResponse>
  DecodeAddr: MethodDefinition<_taprpc_DecodeAddrRequestPartial, _taprpc_AddrPartial, _taprpc_DecodeAddrRequest, _taprpc_Addr>
  DecodeProof: MethodDefinition<_taprpc_DecodeProofRequestPartial, _taprpc_DecodeProofResponsePartial, _taprpc_DecodeProofRequest, _taprpc_DecodeProofResponse>
  ExportProof: MethodDefinition<_taprpc_ExportProofRequestPartial, _taprpc_ProofFilePartial, _taprpc_ExportProofRequest, _taprpc_ProofFile>
  FetchAssetMeta: MethodDefinition<_taprpc_FetchAssetMetaRequestPartial, _taprpc_AssetMetaPartial, _taprpc_FetchAssetMetaRequest, _taprpc_AssetMeta>
  GetInfo: MethodDefinition<_taprpc_GetInfoRequestPartial, _taprpc_GetInfoResponsePartial, _taprpc_GetInfoRequest, _taprpc_GetInfoResponse>
  ListAssets: MethodDefinition<_taprpc_ListAssetRequestPartial, _taprpc_ListAssetResponsePartial, _taprpc_ListAssetRequest, _taprpc_ListAssetResponse>
  ListBalances: MethodDefinition<_taprpc_ListBalancesRequestPartial, _taprpc_ListBalancesResponsePartial, _taprpc_ListBalancesRequest, _taprpc_ListBalancesResponse>
  ListBurns: MethodDefinition<_taprpc_ListBurnsRequestPartial, _taprpc_ListBurnsResponsePartial, _taprpc_ListBurnsRequest, _taprpc_ListBurnsResponse>
  ListGroups: MethodDefinition<_taprpc_ListGroupsRequestPartial, _taprpc_ListGroupsResponsePartial, _taprpc_ListGroupsRequest, _taprpc_ListGroupsResponse>
  ListTransfers: MethodDefinition<_taprpc_ListTransfersRequestPartial, _taprpc_ListTransfersResponsePartial, _taprpc_ListTransfersRequest, _taprpc_ListTransfersResponse>
  ListUtxos: MethodDefinition<_taprpc_ListUtxosRequestPartial, _taprpc_ListUtxosResponsePartial, _taprpc_ListUtxosRequest, _taprpc_ListUtxosResponse>
  NewAddr: MethodDefinition<_taprpc_NewAddrRequestPartial, _taprpc_AddrPartial, _taprpc_NewAddrRequest, _taprpc_Addr>
  QueryAddrs: MethodDefinition<_taprpc_QueryAddrRequestPartial, _taprpc_QueryAddrResponsePartial, _taprpc_QueryAddrRequest, _taprpc_QueryAddrResponse>
  RegisterTransfer: MethodDefinition<_taprpc_RegisterTransferRequestPartial, _taprpc_RegisterTransferResponsePartial, _taprpc_RegisterTransferRequest, _taprpc_RegisterTransferResponse>
  SendAsset: MethodDefinition<_taprpc_SendAssetRequestPartial, _taprpc_SendAssetResponsePartial, _taprpc_SendAssetRequest, _taprpc_SendAssetResponse>
  StopDaemon: MethodDefinition<_taprpc_StopRequestPartial, _taprpc_StopResponsePartial, _taprpc_StopRequest, _taprpc_StopResponse>
  SubscribeReceiveEvents: MethodDefinition<_taprpc_SubscribeReceiveEventsRequestPartial, _taprpc_ReceiveEventPartial, _taprpc_SubscribeReceiveEventsRequest, _taprpc_ReceiveEvent>
  SubscribeSendEvents: MethodDefinition<_taprpc_SubscribeSendEventsRequestPartial, _taprpc_SendEventPartial, _taprpc_SubscribeSendEventsRequest, _taprpc_SendEvent>
  UnpackProofFile: MethodDefinition<_taprpc_UnpackProofFileRequestPartial, _taprpc_UnpackProofFileResponsePartial, _taprpc_UnpackProofFileRequest, _taprpc_UnpackProofFileResponse>
  VerifyProof: MethodDefinition<_taprpc_ProofFilePartial, _taprpc_VerifyProofResponsePartial, _taprpc_ProofFile, _taprpc_VerifyProofResponse>
}
