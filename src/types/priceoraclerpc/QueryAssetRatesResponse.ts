// Original file: protos/priceoraclerpc/price_oracle.proto

import type { QueryAssetRatesOkResponsePartial as _priceoraclerpc_QueryAssetRatesOkResponsePartial, QueryAssetRatesOkResponse as _priceoraclerpc_QueryAssetRatesOkResponse } from '../priceoraclerpc/QueryAssetRatesOkResponse';
import type { QueryAssetRatesErrResponsePartial as _priceoraclerpc_QueryAssetRatesErrResponsePartial, QueryAssetRatesErrResponse as _priceoraclerpc_QueryAssetRatesErrResponse } from '../priceoraclerpc/QueryAssetRatesErrResponse';

export interface QueryAssetRatesResponsePartial {
  'ok'?: (_priceoraclerpc_QueryAssetRatesOkResponsePartial | null);
  'error'?: (_priceoraclerpc_QueryAssetRatesErrResponsePartial | null);
  'result'?: "ok"|"error";
}

export interface QueryAssetRatesResponse {
  'ok'?: (_priceoraclerpc_QueryAssetRatesOkResponse | null);
  'error'?: (_priceoraclerpc_QueryAssetRatesErrResponse | null);
  'result': "ok"|"error";
}
