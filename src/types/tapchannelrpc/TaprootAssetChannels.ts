// Original file: protos/tapchannel.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EncodeCustomRecordsRequestPartial as _tapchannelrpc_EncodeCustomRecordsRequestPartial, EncodeCustomRecordsRequest as _tapchannelrpc_EncodeCustomRecordsRequest } from '../tapchannelrpc/EncodeCustomRecordsRequest';
import type { EncodeCustomRecordsResponsePartial as _tapchannelrpc_EncodeCustomRecordsResponsePartial, EncodeCustomRecordsResponse as _tapchannelrpc_EncodeCustomRecordsResponse } from '../tapchannelrpc/EncodeCustomRecordsResponse';
import type { FundChannelRequestPartial as _tapchannelrpc_FundChannelRequestPartial, FundChannelRequest as _tapchannelrpc_FundChannelRequest } from '../tapchannelrpc/FundChannelRequest';
import type { FundChannelResponsePartial as _tapchannelrpc_FundChannelResponsePartial, FundChannelResponse as _tapchannelrpc_FundChannelResponse } from '../tapchannelrpc/FundChannelResponse';

export interface TaprootAssetChannelsClient extends grpc.Client {
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  
}

export interface TaprootAssetChannelsHandlers extends grpc.UntypedServiceImplementation {
  EncodeCustomRecords: grpc.handleUnaryCall<_tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponsePartial>;
  
  FundChannel: grpc.handleUnaryCall<_tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponsePartial>;
  
}

export interface TaprootAssetChannelsDefinition extends grpc.ServiceDefinition {
  EncodeCustomRecords: MethodDefinition<_tapchannelrpc_EncodeCustomRecordsRequestPartial, _tapchannelrpc_EncodeCustomRecordsResponsePartial, _tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponse>
  FundChannel: MethodDefinition<_tapchannelrpc_FundChannelRequestPartial, _tapchannelrpc_FundChannelResponsePartial, _tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponse>
}
