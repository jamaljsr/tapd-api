// Original file: protos/priceoraclerpc/price_oracle.proto

import type { TransactionTypePartial as _priceoraclerpc_TransactionTypePartial, TransactionType as _priceoraclerpc_TransactionType } from '../priceoraclerpc/TransactionType';
import type { AssetSpecifierPartial as _priceoraclerpc_AssetSpecifierPartial, AssetSpecifier as _priceoraclerpc_AssetSpecifier } from '../priceoraclerpc/AssetSpecifier';
import type { RateTickPartial as _priceoraclerpc_RateTickPartial, RateTick as _priceoraclerpc_RateTick } from '../priceoraclerpc/RateTick';
import type { Long } from '@grpc/proto-loader';

export interface QueryRateTickRequestPartial {
  'transactionType'?: (_priceoraclerpc_TransactionTypePartial);
  'subjectAsset'?: (_priceoraclerpc_AssetSpecifierPartial | null);
  'subjectAssetMaxAmount'?: (number | string | Long);
  'paymentAsset'?: (_priceoraclerpc_AssetSpecifierPartial | null);
  'rateTickHint'?: (_priceoraclerpc_RateTickPartial | null);
}

export interface QueryRateTickRequest {
  'transactionType': (_priceoraclerpc_TransactionType);
  'subjectAsset': (_priceoraclerpc_AssetSpecifier | null);
  'subjectAssetMaxAmount': (string);
  'paymentAsset': (_priceoraclerpc_AssetSpecifier | null);
  'rateTickHint': (_priceoraclerpc_RateTick | null);
}
