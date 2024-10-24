// Original file: protos/routerrpc/router.proto

import type { PairHistoryPartial as _routerrpc_PairHistoryPartial, PairHistory as _routerrpc_PairHistory } from '../routerrpc/PairHistory';

export interface QueryMissionControlResponsePartial {
  'pairs'?: (_routerrpc_PairHistoryPartial)[];
}

export interface QueryMissionControlResponse {
  'pairs': (_routerrpc_PairHistory)[];
}
