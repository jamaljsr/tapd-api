// Original file: protos/tapchannelrpc/tapchannel.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddInvoiceRequestPartial as _tapchannelrpc_AddInvoiceRequestPartial, AddInvoiceRequest as _tapchannelrpc_AddInvoiceRequest } from '../tapchannelrpc/AddInvoiceRequest';
import type { AddInvoiceResponsePartial as _tapchannelrpc_AddInvoiceResponsePartial, AddInvoiceResponse as _tapchannelrpc_AddInvoiceResponse } from '../tapchannelrpc/AddInvoiceResponse';
import type { EncodeCustomRecordsRequestPartial as _tapchannelrpc_EncodeCustomRecordsRequestPartial, EncodeCustomRecordsRequest as _tapchannelrpc_EncodeCustomRecordsRequest } from '../tapchannelrpc/EncodeCustomRecordsRequest';
import type { EncodeCustomRecordsResponsePartial as _tapchannelrpc_EncodeCustomRecordsResponsePartial, EncodeCustomRecordsResponse as _tapchannelrpc_EncodeCustomRecordsResponse } from '../tapchannelrpc/EncodeCustomRecordsResponse';
import type { FundChannelRequestPartial as _tapchannelrpc_FundChannelRequestPartial, FundChannelRequest as _tapchannelrpc_FundChannelRequest } from '../tapchannelrpc/FundChannelRequest';
import type { FundChannelResponsePartial as _tapchannelrpc_FundChannelResponsePartial, FundChannelResponse as _tapchannelrpc_FundChannelResponse } from '../tapchannelrpc/FundChannelResponse';
import type { SendPaymentRequestPartial as _tapchannelrpc_SendPaymentRequestPartial, SendPaymentRequest as _tapchannelrpc_SendPaymentRequest } from '../tapchannelrpc/SendPaymentRequest';
import type { SendPaymentResponsePartial as _tapchannelrpc_SendPaymentResponsePartial, SendPaymentResponse as _tapchannelrpc_SendPaymentResponse } from '../tapchannelrpc/SendPaymentResponse';

export interface TaprootAssetChannelsClient extends grpc.Client {
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  
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
  
  SendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  SendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  sendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  sendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  
}

export interface TaprootAssetChannelsHandlers extends grpc.UntypedServiceImplementation {
  AddInvoice: grpc.handleUnaryCall<_tapchannelrpc_AddInvoiceRequest, _tapchannelrpc_AddInvoiceResponsePartial>;
  
  EncodeCustomRecords: grpc.handleUnaryCall<_tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponsePartial>;
  
  FundChannel: grpc.handleUnaryCall<_tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponsePartial>;
  
  SendPayment: grpc.handleServerStreamingCall<_tapchannelrpc_SendPaymentRequest, _tapchannelrpc_SendPaymentResponsePartial>;
  
}

export interface TaprootAssetChannelsDefinition extends grpc.ServiceDefinition {
  AddInvoice: MethodDefinition<_tapchannelrpc_AddInvoiceRequestPartial, _tapchannelrpc_AddInvoiceResponsePartial, _tapchannelrpc_AddInvoiceRequest, _tapchannelrpc_AddInvoiceResponse>
  EncodeCustomRecords: MethodDefinition<_tapchannelrpc_EncodeCustomRecordsRequestPartial, _tapchannelrpc_EncodeCustomRecordsResponsePartial, _tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponse>
  FundChannel: MethodDefinition<_tapchannelrpc_FundChannelRequestPartial, _tapchannelrpc_FundChannelResponsePartial, _tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponse>
  SendPayment: MethodDefinition<_tapchannelrpc_SendPaymentRequestPartial, _tapchannelrpc_SendPaymentResponsePartial, _tapchannelrpc_SendPaymentRequest, _tapchannelrpc_SendPaymentResponse>
}
