// Original file: protos/routerrpc/router.proto

import type { PairDataPartial as _routerrpc_PairDataPartial, PairData as _routerrpc_PairData } from '../routerrpc/PairData';

export interface PairHistoryPartial {
  'nodeFrom'?: (Buffer | Uint8Array | string);
  'nodeTo'?: (Buffer | Uint8Array | string);
  'history'?: (_routerrpc_PairDataPartial | null);
}

export interface PairHistory {
  'nodeFrom': (Buffer);
  'nodeTo': (Buffer);
  'history': (_routerrpc_PairData | null);
}
