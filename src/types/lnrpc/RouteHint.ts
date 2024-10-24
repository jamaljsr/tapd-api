// Original file: protos/lightning.proto

import type { HopHintPartial as _lnrpc_HopHintPartial, HopHint as _lnrpc_HopHint } from '../lnrpc/HopHint';

export interface RouteHintPartial {
  'hopHints'?: (_lnrpc_HopHintPartial)[];
}

export interface RouteHint {
  'hopHints': (_lnrpc_HopHint)[];
}
