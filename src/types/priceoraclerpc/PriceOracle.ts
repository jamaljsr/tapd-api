// Original file: protos/priceoraclerpc/price_oracle.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { QueryAssetRatesRequestPartial as _priceoraclerpc_QueryAssetRatesRequestPartial, QueryAssetRatesRequest as _priceoraclerpc_QueryAssetRatesRequest } from '../priceoraclerpc/QueryAssetRatesRequest';
import type { QueryAssetRatesResponsePartial as _priceoraclerpc_QueryAssetRatesResponsePartial, QueryAssetRatesResponse as _priceoraclerpc_QueryAssetRatesResponse } from '../priceoraclerpc/QueryAssetRatesResponse';

export interface PriceOracleClient extends grpc.Client {
  QueryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _priceoraclerpc_QueryAssetRatesRequestPartial, callback: grpc.requestCallback<_priceoraclerpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  
}

export interface PriceOracleHandlers extends grpc.UntypedServiceImplementation {
  QueryAssetRates: grpc.handleUnaryCall<_priceoraclerpc_QueryAssetRatesRequest, _priceoraclerpc_QueryAssetRatesResponsePartial>;
  
}

export interface PriceOracleDefinition extends grpc.ServiceDefinition {
  QueryAssetRates: MethodDefinition<_priceoraclerpc_QueryAssetRatesRequestPartial, _priceoraclerpc_QueryAssetRatesResponsePartial, _priceoraclerpc_QueryAssetRatesRequest, _priceoraclerpc_QueryAssetRatesResponse>
}
