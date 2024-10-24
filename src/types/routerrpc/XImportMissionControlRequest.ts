// Original file: protos/routerrpc/router.proto

import type { PairHistoryPartial as _routerrpc_PairHistoryPartial, PairHistory as _routerrpc_PairHistory } from '../routerrpc/PairHistory';

export interface XImportMissionControlRequestPartial {
  'pairs'?: (_routerrpc_PairHistoryPartial)[];
  'force'?: (boolean);
}

export interface XImportMissionControlRequest {
  'pairs': (_routerrpc_PairHistory)[];
  'force': (boolean);
}
