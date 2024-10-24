// Original file: protos/routerrpc/router.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { ChanStatusActionPartial as _routerrpc_ChanStatusActionPartial, ChanStatusAction as _routerrpc_ChanStatusAction } from '../routerrpc/ChanStatusAction';

export interface UpdateChanStatusRequestPartial {
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'action'?: (_routerrpc_ChanStatusActionPartial);
}

export interface UpdateChanStatusRequest {
  'chanPoint': (_lnrpc_ChannelPoint | null);
  'action': (_routerrpc_ChanStatusAction);
}
