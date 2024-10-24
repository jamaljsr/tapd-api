// Original file: protos/priceoraclerpc/price_oracle.proto

import type { AssetRatesPartial as _priceoraclerpc_AssetRatesPartial, AssetRates as _priceoraclerpc_AssetRates } from '../priceoraclerpc/AssetRates';

export interface QueryAssetRatesOkResponsePartial {
  'assetRates'?: (_priceoraclerpc_AssetRatesPartial | null);
}

export interface QueryAssetRatesOkResponse {
  'assetRates': (_priceoraclerpc_AssetRates | null);
}
