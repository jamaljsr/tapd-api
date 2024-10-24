// Original file: protos/routerrpc/router.proto

import type { HtlcInfoPartial as _routerrpc_HtlcInfoPartial, HtlcInfo as _routerrpc_HtlcInfo } from '../routerrpc/HtlcInfo';

export interface ForwardEventPartial {
  'info'?: (_routerrpc_HtlcInfoPartial | null);
}

export interface ForwardEvent {
  'info': (_routerrpc_HtlcInfo | null);
}
