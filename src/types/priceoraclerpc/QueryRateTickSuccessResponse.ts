// Original file: protos/priceoraclerpc/price_oracle.proto

import type { RateTickPartial as _priceoraclerpc_RateTickPartial, RateTick as _priceoraclerpc_RateTick } from '../priceoraclerpc/RateTick';

export interface QueryRateTickSuccessResponsePartial {
  'rateTick'?: (_priceoraclerpc_RateTickPartial | null);
}

export interface QueryRateTickSuccessResponse {
  'rateTick': (_priceoraclerpc_RateTick | null);
}
