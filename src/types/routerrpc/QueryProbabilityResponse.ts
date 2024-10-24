// Original file: protos/routerrpc/router.proto

import type { PairDataPartial as _routerrpc_PairDataPartial, PairData as _routerrpc_PairData } from '../routerrpc/PairData';

export interface QueryProbabilityResponsePartial {
  'probability'?: (number | string);
  'history'?: (_routerrpc_PairDataPartial | null);
}

export interface QueryProbabilityResponse {
  'probability': (number);
  'history': (_routerrpc_PairData | null);
}
