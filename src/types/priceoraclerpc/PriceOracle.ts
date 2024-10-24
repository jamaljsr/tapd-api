// Original file: protos/priceoraclerpc/price_oracle.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { QueryRateTickRequestPartial as _priceoraclerpc_QueryRateTickRequestPartial, QueryRateTickRequest as _priceoraclerpc_QueryRateTickRequest } from '../priceoraclerpc/QueryRateTickRequest';
import type { QueryRateTickResponsePartial as _priceoraclerpc_QueryRateTickResponsePartial, QueryRateTickResponse as _priceoraclerpc_QueryRateTickResponse } from '../priceoraclerpc/QueryRateTickResponse';

export interface PriceOracleClient extends grpc.Client {
  QueryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  QueryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  QueryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  QueryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  queryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  queryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  queryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  queryRateTick(argument: _priceoraclerpc_QueryRateTickRequestPartial, callback: grpc.requestCallback<_priceoraclerpc_QueryRateTickResponse>): grpc.ClientUnaryCall;
  
}

export interface PriceOracleHandlers extends grpc.UntypedServiceImplementation {
  QueryRateTick: grpc.handleUnaryCall<_priceoraclerpc_QueryRateTickRequest, _priceoraclerpc_QueryRateTickResponsePartial>;
  
}

export interface PriceOracleDefinition extends grpc.ServiceDefinition {
  QueryRateTick: MethodDefinition<_priceoraclerpc_QueryRateTickRequestPartial, _priceoraclerpc_QueryRateTickResponsePartial, _priceoraclerpc_QueryRateTickRequest, _priceoraclerpc_QueryRateTickResponse>
}
