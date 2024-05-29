// Original file: protos/rfq.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddAssetBuyOfferRequestPartial as _rfqrpc_AddAssetBuyOfferRequestPartial, AddAssetBuyOfferRequest as _rfqrpc_AddAssetBuyOfferRequest } from '../rfqrpc/AddAssetBuyOfferRequest';
import type { AddAssetBuyOfferResponsePartial as _rfqrpc_AddAssetBuyOfferResponsePartial, AddAssetBuyOfferResponse as _rfqrpc_AddAssetBuyOfferResponse } from '../rfqrpc/AddAssetBuyOfferResponse';
import type { AddAssetBuyOrderRequestPartial as _rfqrpc_AddAssetBuyOrderRequestPartial, AddAssetBuyOrderRequest as _rfqrpc_AddAssetBuyOrderRequest } from '../rfqrpc/AddAssetBuyOrderRequest';
import type { AddAssetBuyOrderResponsePartial as _rfqrpc_AddAssetBuyOrderResponsePartial, AddAssetBuyOrderResponse as _rfqrpc_AddAssetBuyOrderResponse } from '../rfqrpc/AddAssetBuyOrderResponse';
import type { AddAssetSellOfferRequestPartial as _rfqrpc_AddAssetSellOfferRequestPartial, AddAssetSellOfferRequest as _rfqrpc_AddAssetSellOfferRequest } from '../rfqrpc/AddAssetSellOfferRequest';
import type { AddAssetSellOfferResponsePartial as _rfqrpc_AddAssetSellOfferResponsePartial, AddAssetSellOfferResponse as _rfqrpc_AddAssetSellOfferResponse } from '../rfqrpc/AddAssetSellOfferResponse';
import type { AddAssetSellOrderRequestPartial as _rfqrpc_AddAssetSellOrderRequestPartial, AddAssetSellOrderRequest as _rfqrpc_AddAssetSellOrderRequest } from '../rfqrpc/AddAssetSellOrderRequest';
import type { AddAssetSellOrderResponsePartial as _rfqrpc_AddAssetSellOrderResponsePartial, AddAssetSellOrderResponse as _rfqrpc_AddAssetSellOrderResponse } from '../rfqrpc/AddAssetSellOrderResponse';
import type { QueryPeerAcceptedQuotesRequestPartial as _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, QueryPeerAcceptedQuotesRequest as _rfqrpc_QueryPeerAcceptedQuotesRequest } from '../rfqrpc/QueryPeerAcceptedQuotesRequest';
import type { QueryPeerAcceptedQuotesResponsePartial as _rfqrpc_QueryPeerAcceptedQuotesResponsePartial, QueryPeerAcceptedQuotesResponse as _rfqrpc_QueryPeerAcceptedQuotesResponse } from '../rfqrpc/QueryPeerAcceptedQuotesResponse';
import type { RfqEventPartial as _rfqrpc_RfqEventPartial, RfqEvent as _rfqrpc_RfqEvent } from '../rfqrpc/RfqEvent';
import type { SubscribeRfqEventNtfnsRequestPartial as _rfqrpc_SubscribeRfqEventNtfnsRequestPartial, SubscribeRfqEventNtfnsRequest as _rfqrpc_SubscribeRfqEventNtfnsRequest } from '../rfqrpc/SubscribeRfqEventNtfnsRequest';

export interface RfqClient extends grpc.Client {
  AddAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  addAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  addAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  addAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  addAssetBuyOffer(argument: _rfqrpc_AddAssetBuyOfferRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOfferResponse>): grpc.ClientUnaryCall;
  
  AddAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  AddAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  addAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  addAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  addAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  addAssetBuyOrder(argument: _rfqrpc_AddAssetBuyOrderRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetBuyOrderResponse>): grpc.ClientUnaryCall;
  
  AddAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  AddAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  AddAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  AddAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  addAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  addAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  addAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  addAssetSellOffer(argument: _rfqrpc_AddAssetSellOfferRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOfferResponse>): grpc.ClientUnaryCall;
  
  AddAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  AddAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  AddAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  AddAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  addAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  addAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  addAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  addAssetSellOrder(argument: _rfqrpc_AddAssetSellOrderRequestPartial, callback: grpc.requestCallback<_rfqrpc_AddAssetSellOrderResponse>): grpc.ClientUnaryCall;
  
  QueryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  QueryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  QueryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  QueryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  queryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  queryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  queryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  queryPeerAcceptedQuotes(argument: _rfqrpc_QueryPeerAcceptedQuotesRequestPartial, callback: grpc.requestCallback<_rfqrpc_QueryPeerAcceptedQuotesResponse>): grpc.ClientUnaryCall;
  
  SubscribeRfqEventNtfns(argument: _rfqrpc_SubscribeRfqEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rfqrpc_RfqEvent>;
  SubscribeRfqEventNtfns(argument: _rfqrpc_SubscribeRfqEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_rfqrpc_RfqEvent>;
  subscribeRfqEventNtfns(argument: _rfqrpc_SubscribeRfqEventNtfnsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_rfqrpc_RfqEvent>;
  subscribeRfqEventNtfns(argument: _rfqrpc_SubscribeRfqEventNtfnsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_rfqrpc_RfqEvent>;
  
}

export interface RfqHandlers extends grpc.UntypedServiceImplementation {
  AddAssetBuyOffer: grpc.handleUnaryCall<_rfqrpc_AddAssetBuyOfferRequest, _rfqrpc_AddAssetBuyOfferResponsePartial>;
  
  AddAssetBuyOrder: grpc.handleUnaryCall<_rfqrpc_AddAssetBuyOrderRequest, _rfqrpc_AddAssetBuyOrderResponsePartial>;
  
  AddAssetSellOffer: grpc.handleUnaryCall<_rfqrpc_AddAssetSellOfferRequest, _rfqrpc_AddAssetSellOfferResponsePartial>;
  
  AddAssetSellOrder: grpc.handleUnaryCall<_rfqrpc_AddAssetSellOrderRequest, _rfqrpc_AddAssetSellOrderResponsePartial>;
  
  QueryPeerAcceptedQuotes: grpc.handleUnaryCall<_rfqrpc_QueryPeerAcceptedQuotesRequest, _rfqrpc_QueryPeerAcceptedQuotesResponsePartial>;
  
  SubscribeRfqEventNtfns: grpc.handleServerStreamingCall<_rfqrpc_SubscribeRfqEventNtfnsRequest, _rfqrpc_RfqEventPartial>;
  
}

export interface RfqDefinition extends grpc.ServiceDefinition {
  AddAssetBuyOffer: MethodDefinition<_rfqrpc_AddAssetBuyOfferRequestPartial, _rfqrpc_AddAssetBuyOfferResponsePartial, _rfqrpc_AddAssetBuyOfferRequest, _rfqrpc_AddAssetBuyOfferResponse>
  AddAssetBuyOrder: MethodDefinition<_rfqrpc_AddAssetBuyOrderRequestPartial, _rfqrpc_AddAssetBuyOrderResponsePartial, _rfqrpc_AddAssetBuyOrderRequest, _rfqrpc_AddAssetBuyOrderResponse>
  AddAssetSellOffer: MethodDefinition<_rfqrpc_AddAssetSellOfferRequestPartial, _rfqrpc_AddAssetSellOfferResponsePartial, _rfqrpc_AddAssetSellOfferRequest, _rfqrpc_AddAssetSellOfferResponse>
  AddAssetSellOrder: MethodDefinition<_rfqrpc_AddAssetSellOrderRequestPartial, _rfqrpc_AddAssetSellOrderResponsePartial, _rfqrpc_AddAssetSellOrderRequest, _rfqrpc_AddAssetSellOrderResponse>
  QueryPeerAcceptedQuotes: MethodDefinition<_rfqrpc_QueryPeerAcceptedQuotesRequestPartial, _rfqrpc_QueryPeerAcceptedQuotesResponsePartial, _rfqrpc_QueryPeerAcceptedQuotesRequest, _rfqrpc_QueryPeerAcceptedQuotesResponse>
  SubscribeRfqEventNtfns: MethodDefinition<_rfqrpc_SubscribeRfqEventNtfnsRequestPartial, _rfqrpc_RfqEventPartial, _rfqrpc_SubscribeRfqEventNtfnsRequest, _rfqrpc_RfqEvent>
}
