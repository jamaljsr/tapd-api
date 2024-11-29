// Original file: protos/priceoraclerpc/price_oracle.proto

import type { TransactionTypePartial as _priceoraclerpc_TransactionTypePartial, TransactionType as _priceoraclerpc_TransactionType } from '../priceoraclerpc/TransactionType';
import type { AssetSpecifierPartial as _priceoraclerpc_AssetSpecifierPartial, AssetSpecifier as _priceoraclerpc_AssetSpecifier } from '../priceoraclerpc/AssetSpecifier';
import type { AssetRatesPartial as _priceoraclerpc_AssetRatesPartial, AssetRates as _priceoraclerpc_AssetRates } from '../priceoraclerpc/AssetRates';
import type { Long } from '@grpc/proto-loader';

export interface QueryAssetRatesRequestPartial {
  'transactionType'?: (_priceoraclerpc_TransactionTypePartial);
  'subjectAsset'?: (_priceoraclerpc_AssetSpecifierPartial | null);
  'subjectAssetMaxAmount'?: (number | string | Long);
  'paymentAsset'?: (_priceoraclerpc_AssetSpecifierPartial | null);
  'paymentAssetMaxAmount'?: (number | string | Long);
  'assetRatesHint'?: (_priceoraclerpc_AssetRatesPartial | null);
}

export interface QueryAssetRatesRequest {
  'transactionType': (_priceoraclerpc_TransactionType);
  'subjectAsset': (_priceoraclerpc_AssetSpecifier | null);
  'subjectAssetMaxAmount': (string);
  'paymentAsset': (_priceoraclerpc_AssetSpecifier | null);
  'paymentAssetMaxAmount': (string);
  'assetRatesHint': (_priceoraclerpc_AssetRates | null);
}
