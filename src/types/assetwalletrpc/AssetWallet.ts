// Original file: protos/assetwallet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AnchorVirtualPsbtsRequestPartial as _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, AnchorVirtualPsbtsRequest as _assetwalletrpc_AnchorVirtualPsbtsRequest } from '../assetwalletrpc/AnchorVirtualPsbtsRequest';
import type { CommitVirtualPsbtsRequestPartial as _assetwalletrpc_CommitVirtualPsbtsRequestPartial, CommitVirtualPsbtsRequest as _assetwalletrpc_CommitVirtualPsbtsRequest } from '../assetwalletrpc/CommitVirtualPsbtsRequest';
import type { CommitVirtualPsbtsResponsePartial as _assetwalletrpc_CommitVirtualPsbtsResponsePartial, CommitVirtualPsbtsResponse as _assetwalletrpc_CommitVirtualPsbtsResponse } from '../assetwalletrpc/CommitVirtualPsbtsResponse';
import type { FundVirtualPsbtRequestPartial as _assetwalletrpc_FundVirtualPsbtRequestPartial, FundVirtualPsbtRequest as _assetwalletrpc_FundVirtualPsbtRequest } from '../assetwalletrpc/FundVirtualPsbtRequest';
import type { FundVirtualPsbtResponsePartial as _assetwalletrpc_FundVirtualPsbtResponsePartial, FundVirtualPsbtResponse as _assetwalletrpc_FundVirtualPsbtResponse } from '../assetwalletrpc/FundVirtualPsbtResponse';
import type { NextInternalKeyRequestPartial as _assetwalletrpc_NextInternalKeyRequestPartial, NextInternalKeyRequest as _assetwalletrpc_NextInternalKeyRequest } from '../assetwalletrpc/NextInternalKeyRequest';
import type { NextInternalKeyResponsePartial as _assetwalletrpc_NextInternalKeyResponsePartial, NextInternalKeyResponse as _assetwalletrpc_NextInternalKeyResponse } from '../assetwalletrpc/NextInternalKeyResponse';
import type { NextScriptKeyRequestPartial as _assetwalletrpc_NextScriptKeyRequestPartial, NextScriptKeyRequest as _assetwalletrpc_NextScriptKeyRequest } from '../assetwalletrpc/NextScriptKeyRequest';
import type { NextScriptKeyResponsePartial as _assetwalletrpc_NextScriptKeyResponsePartial, NextScriptKeyResponse as _assetwalletrpc_NextScriptKeyResponse } from '../assetwalletrpc/NextScriptKeyResponse';
import type { ProveAssetOwnershipRequestPartial as _assetwalletrpc_ProveAssetOwnershipRequestPartial, ProveAssetOwnershipRequest as _assetwalletrpc_ProveAssetOwnershipRequest } from '../assetwalletrpc/ProveAssetOwnershipRequest';
import type { ProveAssetOwnershipResponsePartial as _assetwalletrpc_ProveAssetOwnershipResponsePartial, ProveAssetOwnershipResponse as _assetwalletrpc_ProveAssetOwnershipResponse } from '../assetwalletrpc/ProveAssetOwnershipResponse';
import type { PublishAndLogRequestPartial as _assetwalletrpc_PublishAndLogRequestPartial, PublishAndLogRequest as _assetwalletrpc_PublishAndLogRequest } from '../assetwalletrpc/PublishAndLogRequest';
import type { QueryInternalKeyRequestPartial as _assetwalletrpc_QueryInternalKeyRequestPartial, QueryInternalKeyRequest as _assetwalletrpc_QueryInternalKeyRequest } from '../assetwalletrpc/QueryInternalKeyRequest';
import type { QueryInternalKeyResponsePartial as _assetwalletrpc_QueryInternalKeyResponsePartial, QueryInternalKeyResponse as _assetwalletrpc_QueryInternalKeyResponse } from '../assetwalletrpc/QueryInternalKeyResponse';
import type { QueryScriptKeyRequestPartial as _assetwalletrpc_QueryScriptKeyRequestPartial, QueryScriptKeyRequest as _assetwalletrpc_QueryScriptKeyRequest } from '../assetwalletrpc/QueryScriptKeyRequest';
import type { QueryScriptKeyResponsePartial as _assetwalletrpc_QueryScriptKeyResponsePartial, QueryScriptKeyResponse as _assetwalletrpc_QueryScriptKeyResponse } from '../assetwalletrpc/QueryScriptKeyResponse';
import type { RemoveUTXOLeaseRequestPartial as _assetwalletrpc_RemoveUTXOLeaseRequestPartial, RemoveUTXOLeaseRequest as _assetwalletrpc_RemoveUTXOLeaseRequest } from '../assetwalletrpc/RemoveUTXOLeaseRequest';
import type { RemoveUTXOLeaseResponsePartial as _assetwalletrpc_RemoveUTXOLeaseResponsePartial, RemoveUTXOLeaseResponse as _assetwalletrpc_RemoveUTXOLeaseResponse } from '../assetwalletrpc/RemoveUTXOLeaseResponse';
import type { SendAssetResponsePartial as _taprpc_SendAssetResponsePartial, SendAssetResponse as _taprpc_SendAssetResponse } from '../taprpc/SendAssetResponse';
import type { SignVirtualPsbtRequestPartial as _assetwalletrpc_SignVirtualPsbtRequestPartial, SignVirtualPsbtRequest as _assetwalletrpc_SignVirtualPsbtRequest } from '../assetwalletrpc/SignVirtualPsbtRequest';
import type { SignVirtualPsbtResponsePartial as _assetwalletrpc_SignVirtualPsbtResponsePartial, SignVirtualPsbtResponse as _assetwalletrpc_SignVirtualPsbtResponse } from '../assetwalletrpc/SignVirtualPsbtResponse';
import type { VerifyAssetOwnershipRequestPartial as _assetwalletrpc_VerifyAssetOwnershipRequestPartial, VerifyAssetOwnershipRequest as _assetwalletrpc_VerifyAssetOwnershipRequest } from '../assetwalletrpc/VerifyAssetOwnershipRequest';
import type { VerifyAssetOwnershipResponsePartial as _assetwalletrpc_VerifyAssetOwnershipResponsePartial, VerifyAssetOwnershipResponse as _assetwalletrpc_VerifyAssetOwnershipResponse } from '../assetwalletrpc/VerifyAssetOwnershipResponse';

export interface AssetWalletClient extends grpc.Client {
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  AnchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  anchorVirtualPsbts(argument: _assetwalletrpc_AnchorVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  CommitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  CommitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  CommitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  CommitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  commitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  commitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  commitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  commitVirtualPsbts(argument: _assetwalletrpc_CommitVirtualPsbtsRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_CommitVirtualPsbtsResponse>): grpc.ClientUnaryCall;
  
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  FundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  fundVirtualPsbt(argument: _assetwalletrpc_FundVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_FundVirtualPsbtResponse>): grpc.ClientUnaryCall;
  
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  NextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  nextInternalKey(argument: _assetwalletrpc_NextInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextInternalKeyResponse>): grpc.ClientUnaryCall;
  
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  NextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  nextScriptKey(argument: _assetwalletrpc_NextScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_NextScriptKeyResponse>): grpc.ClientUnaryCall;
  
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  ProveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  proveAssetOwnership(argument: _assetwalletrpc_ProveAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_ProveAssetOwnershipResponse>): grpc.ClientUnaryCall;
  
  PublishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  PublishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  PublishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  PublishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  publishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  publishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  publishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  publishAndLogTransfer(argument: _assetwalletrpc_PublishAndLogRequestPartial, callback: grpc.requestCallback<_taprpc_SendAssetResponse>): grpc.ClientUnaryCall;
  
  QueryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  QueryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  QueryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  QueryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  queryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  queryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  queryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  queryInternalKey(argument: _assetwalletrpc_QueryInternalKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_QueryInternalKeyResponse>): grpc.ClientUnaryCall;
  
  QueryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  QueryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  QueryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  QueryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  queryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  queryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  queryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  queryScriptKey(argument: _assetwalletrpc_QueryScriptKeyRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_QueryScriptKeyResponse>): grpc.ClientUnaryCall;
  
  RemoveUTXOLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  RemoveUTXOLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  RemoveUTXOLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  RemoveUTXOLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  removeUtxoLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  removeUtxoLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  removeUtxoLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  removeUtxoLease(argument: _assetwalletrpc_RemoveUTXOLeaseRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_RemoveUTXOLeaseResponse>): grpc.ClientUnaryCall;
  
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  SignVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  signVirtualPsbt(argument: _assetwalletrpc_SignVirtualPsbtRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_SignVirtualPsbtResponse>): grpc.ClientUnaryCall;
  
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  VerifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  verifyAssetOwnership(argument: _assetwalletrpc_VerifyAssetOwnershipRequestPartial, callback: grpc.requestCallback<_assetwalletrpc_VerifyAssetOwnershipResponse>): grpc.ClientUnaryCall;
  
}

export interface AssetWalletHandlers extends grpc.UntypedServiceImplementation {
  AnchorVirtualPsbts: grpc.handleUnaryCall<_assetwalletrpc_AnchorVirtualPsbtsRequest, _taprpc_SendAssetResponsePartial>;
  
  CommitVirtualPsbts: grpc.handleUnaryCall<_assetwalletrpc_CommitVirtualPsbtsRequest, _assetwalletrpc_CommitVirtualPsbtsResponsePartial>;
  
  FundVirtualPsbt: grpc.handleUnaryCall<_assetwalletrpc_FundVirtualPsbtRequest, _assetwalletrpc_FundVirtualPsbtResponsePartial>;
  
  NextInternalKey: grpc.handleUnaryCall<_assetwalletrpc_NextInternalKeyRequest, _assetwalletrpc_NextInternalKeyResponsePartial>;
  
  NextScriptKey: grpc.handleUnaryCall<_assetwalletrpc_NextScriptKeyRequest, _assetwalletrpc_NextScriptKeyResponsePartial>;
  
  ProveAssetOwnership: grpc.handleUnaryCall<_assetwalletrpc_ProveAssetOwnershipRequest, _assetwalletrpc_ProveAssetOwnershipResponsePartial>;
  
  PublishAndLogTransfer: grpc.handleUnaryCall<_assetwalletrpc_PublishAndLogRequest, _taprpc_SendAssetResponsePartial>;
  
  QueryInternalKey: grpc.handleUnaryCall<_assetwalletrpc_QueryInternalKeyRequest, _assetwalletrpc_QueryInternalKeyResponsePartial>;
  
  QueryScriptKey: grpc.handleUnaryCall<_assetwalletrpc_QueryScriptKeyRequest, _assetwalletrpc_QueryScriptKeyResponsePartial>;
  
  RemoveUTXOLease: grpc.handleUnaryCall<_assetwalletrpc_RemoveUTXOLeaseRequest, _assetwalletrpc_RemoveUTXOLeaseResponsePartial>;
  
  SignVirtualPsbt: grpc.handleUnaryCall<_assetwalletrpc_SignVirtualPsbtRequest, _assetwalletrpc_SignVirtualPsbtResponsePartial>;
  
  VerifyAssetOwnership: grpc.handleUnaryCall<_assetwalletrpc_VerifyAssetOwnershipRequest, _assetwalletrpc_VerifyAssetOwnershipResponsePartial>;
  
}

export interface AssetWalletDefinition extends grpc.ServiceDefinition {
  AnchorVirtualPsbts: MethodDefinition<_assetwalletrpc_AnchorVirtualPsbtsRequestPartial, _taprpc_SendAssetResponsePartial, _assetwalletrpc_AnchorVirtualPsbtsRequest, _taprpc_SendAssetResponse>
  CommitVirtualPsbts: MethodDefinition<_assetwalletrpc_CommitVirtualPsbtsRequestPartial, _assetwalletrpc_CommitVirtualPsbtsResponsePartial, _assetwalletrpc_CommitVirtualPsbtsRequest, _assetwalletrpc_CommitVirtualPsbtsResponse>
  FundVirtualPsbt: MethodDefinition<_assetwalletrpc_FundVirtualPsbtRequestPartial, _assetwalletrpc_FundVirtualPsbtResponsePartial, _assetwalletrpc_FundVirtualPsbtRequest, _assetwalletrpc_FundVirtualPsbtResponse>
  NextInternalKey: MethodDefinition<_assetwalletrpc_NextInternalKeyRequestPartial, _assetwalletrpc_NextInternalKeyResponsePartial, _assetwalletrpc_NextInternalKeyRequest, _assetwalletrpc_NextInternalKeyResponse>
  NextScriptKey: MethodDefinition<_assetwalletrpc_NextScriptKeyRequestPartial, _assetwalletrpc_NextScriptKeyResponsePartial, _assetwalletrpc_NextScriptKeyRequest, _assetwalletrpc_NextScriptKeyResponse>
  ProveAssetOwnership: MethodDefinition<_assetwalletrpc_ProveAssetOwnershipRequestPartial, _assetwalletrpc_ProveAssetOwnershipResponsePartial, _assetwalletrpc_ProveAssetOwnershipRequest, _assetwalletrpc_ProveAssetOwnershipResponse>
  PublishAndLogTransfer: MethodDefinition<_assetwalletrpc_PublishAndLogRequestPartial, _taprpc_SendAssetResponsePartial, _assetwalletrpc_PublishAndLogRequest, _taprpc_SendAssetResponse>
  QueryInternalKey: MethodDefinition<_assetwalletrpc_QueryInternalKeyRequestPartial, _assetwalletrpc_QueryInternalKeyResponsePartial, _assetwalletrpc_QueryInternalKeyRequest, _assetwalletrpc_QueryInternalKeyResponse>
  QueryScriptKey: MethodDefinition<_assetwalletrpc_QueryScriptKeyRequestPartial, _assetwalletrpc_QueryScriptKeyResponsePartial, _assetwalletrpc_QueryScriptKeyRequest, _assetwalletrpc_QueryScriptKeyResponse>
  RemoveUTXOLease: MethodDefinition<_assetwalletrpc_RemoveUTXOLeaseRequestPartial, _assetwalletrpc_RemoveUTXOLeaseResponsePartial, _assetwalletrpc_RemoveUTXOLeaseRequest, _assetwalletrpc_RemoveUTXOLeaseResponse>
  SignVirtualPsbt: MethodDefinition<_assetwalletrpc_SignVirtualPsbtRequestPartial, _assetwalletrpc_SignVirtualPsbtResponsePartial, _assetwalletrpc_SignVirtualPsbtRequest, _assetwalletrpc_SignVirtualPsbtResponse>
  VerifyAssetOwnership: MethodDefinition<_assetwalletrpc_VerifyAssetOwnershipRequestPartial, _assetwalletrpc_VerifyAssetOwnershipResponsePartial, _assetwalletrpc_VerifyAssetOwnershipRequest, _assetwalletrpc_VerifyAssetOwnershipResponse>
}
