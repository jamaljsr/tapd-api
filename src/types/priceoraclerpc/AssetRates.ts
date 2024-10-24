// Original file: protos/priceoraclerpc/price_oracle.proto

import type { FixedPointPartial as _priceoraclerpc_FixedPointPartial, FixedPoint as _priceoraclerpc_FixedPoint } from '../priceoraclerpc/FixedPoint';
import type { Long } from '@grpc/proto-loader';

export interface AssetRatesPartial {
  'subjectAssetRate'?: (_priceoraclerpc_FixedPointPartial | null);
  'paymentAssetRate'?: (_priceoraclerpc_FixedPointPartial | null);
  'expiryTimestamp'?: (number | string | Long);
}

export interface AssetRates {
  'subjectAssetRate': (_priceoraclerpc_FixedPoint | null);
  'paymentAssetRate': (_priceoraclerpc_FixedPoint | null);
  'expiryTimestamp': (string);
}
