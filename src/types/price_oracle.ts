import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PriceOracleClient as _priceoraclerpc_PriceOracleClient, PriceOracleDefinition as _priceoraclerpc_PriceOracleDefinition } from './priceoraclerpc/PriceOracle';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  priceoraclerpc: {
    AssetRates: MessageTypeDefinition
    AssetSpecifier: MessageTypeDefinition
    FixedPoint: MessageTypeDefinition
    PriceOracle: SubtypeConstructor<typeof grpc.Client, _priceoraclerpc_PriceOracleClient> & { service: _priceoraclerpc_PriceOracleDefinition }
    QueryAssetRatesErrResponse: MessageTypeDefinition
    QueryAssetRatesOkResponse: MessageTypeDefinition
    QueryAssetRatesRequest: MessageTypeDefinition
    QueryAssetRatesResponse: MessageTypeDefinition
    TransactionType: EnumTypeDefinition
  }
}

