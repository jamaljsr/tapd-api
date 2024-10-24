// Original file: protos/lightning.proto

import type { HopPartial as _lnrpc_HopPartial, Hop as _lnrpc_Hop } from '../lnrpc/Hop';
import type { Long } from '@grpc/proto-loader';

export interface RoutePartial {
  'totalTimeLock'?: (number);
  'totalFees'?: (number | string | Long);
  'totalAmt'?: (number | string | Long);
  'hops'?: (_lnrpc_HopPartial)[];
  'totalFeesMsat'?: (number | string | Long);
  'totalAmtMsat'?: (number | string | Long);
}

export interface Route {
  'totalTimeLock': (number);
  'totalFees': (string);
  'totalAmt': (string);
  'hops': (_lnrpc_Hop)[];
  'totalFeesMsat': (string);
  'totalAmtMsat': (string);
}
