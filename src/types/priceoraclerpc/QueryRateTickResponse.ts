// Original file: protos/priceoraclerpc/price_oracle.proto

import type { QueryRateTickSuccessResponsePartial as _priceoraclerpc_QueryRateTickSuccessResponsePartial, QueryRateTickSuccessResponse as _priceoraclerpc_QueryRateTickSuccessResponse } from '../priceoraclerpc/QueryRateTickSuccessResponse';
import type { QueryRateTickErrResponsePartial as _priceoraclerpc_QueryRateTickErrResponsePartial, QueryRateTickErrResponse as _priceoraclerpc_QueryRateTickErrResponse } from '../priceoraclerpc/QueryRateTickErrResponse';

export interface QueryRateTickResponsePartial {
  'success'?: (_priceoraclerpc_QueryRateTickSuccessResponsePartial | null);
  'error'?: (_priceoraclerpc_QueryRateTickErrResponsePartial | null);
  'result'?: "success"|"error";
}

export interface QueryRateTickResponse {
  'success'?: (_priceoraclerpc_QueryRateTickSuccessResponse | null);
  'error'?: (_priceoraclerpc_QueryRateTickErrResponse | null);
  'result': "success"|"error";
}
