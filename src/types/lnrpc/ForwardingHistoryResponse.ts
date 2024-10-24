// Original file: protos/lightning.proto

import type { ForwardingEventPartial as _lnrpc_ForwardingEventPartial, ForwardingEvent as _lnrpc_ForwardingEvent } from '../lnrpc/ForwardingEvent';

export interface ForwardingHistoryResponsePartial {
  'forwardingEvents'?: (_lnrpc_ForwardingEventPartial)[];
  'lastOffsetIndex'?: (number);
}

export interface ForwardingHistoryResponse {
  'forwardingEvents': (_lnrpc_ForwardingEvent)[];
  'lastOffsetIndex': (number);
}
