// Original file: protos/mint.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelBatchRequestPartial as _mintrpc_CancelBatchRequestPartial, CancelBatchRequest as _mintrpc_CancelBatchRequest } from '../mintrpc/CancelBatchRequest';
import type { CancelBatchResponsePartial as _mintrpc_CancelBatchResponsePartial, CancelBatchResponse as _mintrpc_CancelBatchResponse } from '../mintrpc/CancelBatchResponse';
import type { FinalizeBatchRequestPartial as _mintrpc_FinalizeBatchRequestPartial, FinalizeBatchRequest as _mintrpc_FinalizeBatchRequest } from '../mintrpc/FinalizeBatchRequest';
import type { FinalizeBatchResponsePartial as _mintrpc_FinalizeBatchResponsePartial, FinalizeBatchResponse as _mintrpc_FinalizeBatchResponse } from '../mintrpc/FinalizeBatchResponse';
import type { FundBatchRequestPartial as _mintrpc_FundBatchRequestPartial, FundBatchRequest as _mintrpc_FundBatchRequest } from '../mintrpc/FundBatchRequest';
import type { FundBatchResponsePartial as _mintrpc_FundBatchResponsePartial, FundBatchResponse as _mintrpc_FundBatchResponse } from '../mintrpc/FundBatchResponse';
import type { ListBatchRequestPartial as _mintrpc_ListBatchRequestPartial, ListBatchRequest as _mintrpc_ListBatchRequest } from '../mintrpc/ListBatchRequest';
import type { ListBatchResponsePartial as _mintrpc_ListBatchResponsePartial, ListBatchResponse as _mintrpc_ListBatchResponse } from '../mintrpc/ListBatchResponse';
import type { MintAssetRequestPartial as _mintrpc_MintAssetRequestPartial, MintAssetRequest as _mintrpc_MintAssetRequest } from '../mintrpc/MintAssetRequest';
import type { MintAssetResponsePartial as _mintrpc_MintAssetResponsePartial, MintAssetResponse as _mintrpc_MintAssetResponse } from '../mintrpc/MintAssetResponse';
import type { MintEventPartial as _mintrpc_MintEventPartial, MintEvent as _mintrpc_MintEvent } from '../mintrpc/MintEvent';
import type { SealBatchRequestPartial as _mintrpc_SealBatchRequestPartial, SealBatchRequest as _mintrpc_SealBatchRequest } from '../mintrpc/SealBatchRequest';
import type { SealBatchResponsePartial as _mintrpc_SealBatchResponsePartial, SealBatchResponse as _mintrpc_SealBatchResponse } from '../mintrpc/SealBatchResponse';
import type { SubscribeMintEventsRequestPartial as _mintrpc_SubscribeMintEventsRequestPartial, SubscribeMintEventsRequest as _mintrpc_SubscribeMintEventsRequest } from '../mintrpc/SubscribeMintEventsRequest';

export interface MintClient extends grpc.Client {
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  CancelBatch(argument: _mintrpc_CancelBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  cancelBatch(argument: _mintrpc_CancelBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_CancelBatchResponse>): grpc.ClientUnaryCall;
  
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  FinalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  finalizeBatch(argument: _mintrpc_FinalizeBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FinalizeBatchResponse>): grpc.ClientUnaryCall;
  
  FundBatch(argument: _mintrpc_FundBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  FundBatch(argument: _mintrpc_FundBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  FundBatch(argument: _mintrpc_FundBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  FundBatch(argument: _mintrpc_FundBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  fundBatch(argument: _mintrpc_FundBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  fundBatch(argument: _mintrpc_FundBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  fundBatch(argument: _mintrpc_FundBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  fundBatch(argument: _mintrpc_FundBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_FundBatchResponse>): grpc.ClientUnaryCall;
  
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  ListBatches(argument: _mintrpc_ListBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  listBatches(argument: _mintrpc_ListBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_ListBatchResponse>): grpc.ClientUnaryCall;
  
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  MintAsset(argument: _mintrpc_MintAssetRequestPartial, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  mintAsset(argument: _mintrpc_MintAssetRequestPartial, callback: grpc.requestCallback<_mintrpc_MintAssetResponse>): grpc.ClientUnaryCall;
  
  SealBatch(argument: _mintrpc_SealBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  SealBatch(argument: _mintrpc_SealBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  SealBatch(argument: _mintrpc_SealBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  SealBatch(argument: _mintrpc_SealBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  sealBatch(argument: _mintrpc_SealBatchRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  sealBatch(argument: _mintrpc_SealBatchRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  sealBatch(argument: _mintrpc_SealBatchRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  sealBatch(argument: _mintrpc_SealBatchRequestPartial, callback: grpc.requestCallback<_mintrpc_SealBatchResponse>): grpc.ClientUnaryCall;
  
  SubscribeMintEvents(argument: _mintrpc_SubscribeMintEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_mintrpc_MintEvent>;
  SubscribeMintEvents(argument: _mintrpc_SubscribeMintEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_mintrpc_MintEvent>;
  subscribeMintEvents(argument: _mintrpc_SubscribeMintEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_mintrpc_MintEvent>;
  subscribeMintEvents(argument: _mintrpc_SubscribeMintEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_mintrpc_MintEvent>;
  
}

export interface MintHandlers extends grpc.UntypedServiceImplementation {
  CancelBatch: grpc.handleUnaryCall<_mintrpc_CancelBatchRequest, _mintrpc_CancelBatchResponsePartial>;
  
  FinalizeBatch: grpc.handleUnaryCall<_mintrpc_FinalizeBatchRequest, _mintrpc_FinalizeBatchResponsePartial>;
  
  FundBatch: grpc.handleUnaryCall<_mintrpc_FundBatchRequest, _mintrpc_FundBatchResponsePartial>;
  
  ListBatches: grpc.handleUnaryCall<_mintrpc_ListBatchRequest, _mintrpc_ListBatchResponsePartial>;
  
  MintAsset: grpc.handleUnaryCall<_mintrpc_MintAssetRequest, _mintrpc_MintAssetResponsePartial>;
  
  SealBatch: grpc.handleUnaryCall<_mintrpc_SealBatchRequest, _mintrpc_SealBatchResponsePartial>;
  
  SubscribeMintEvents: grpc.handleServerStreamingCall<_mintrpc_SubscribeMintEventsRequest, _mintrpc_MintEventPartial>;
  
}

export interface MintDefinition extends grpc.ServiceDefinition {
  CancelBatch: MethodDefinition<_mintrpc_CancelBatchRequestPartial, _mintrpc_CancelBatchResponsePartial, _mintrpc_CancelBatchRequest, _mintrpc_CancelBatchResponse>
  FinalizeBatch: MethodDefinition<_mintrpc_FinalizeBatchRequestPartial, _mintrpc_FinalizeBatchResponsePartial, _mintrpc_FinalizeBatchRequest, _mintrpc_FinalizeBatchResponse>
  FundBatch: MethodDefinition<_mintrpc_FundBatchRequestPartial, _mintrpc_FundBatchResponsePartial, _mintrpc_FundBatchRequest, _mintrpc_FundBatchResponse>
  ListBatches: MethodDefinition<_mintrpc_ListBatchRequestPartial, _mintrpc_ListBatchResponsePartial, _mintrpc_ListBatchRequest, _mintrpc_ListBatchResponse>
  MintAsset: MethodDefinition<_mintrpc_MintAssetRequestPartial, _mintrpc_MintAssetResponsePartial, _mintrpc_MintAssetRequest, _mintrpc_MintAssetResponse>
  SealBatch: MethodDefinition<_mintrpc_SealBatchRequestPartial, _mintrpc_SealBatchResponsePartial, _mintrpc_SealBatchRequest, _mintrpc_SealBatchResponse>
  SubscribeMintEvents: MethodDefinition<_mintrpc_SubscribeMintEventsRequestPartial, _mintrpc_MintEventPartial, _mintrpc_SubscribeMintEventsRequest, _mintrpc_MintEvent>
}
