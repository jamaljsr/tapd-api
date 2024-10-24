// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';

export interface ClosedChannelUpdatePartial {
  'chanId'?: (number | string | Long);
  'capacity'?: (number | string | Long);
  'closedHeight'?: (number);
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
}

export interface ClosedChannelUpdate {
  'chanId': (string);
  'capacity': (string);
  'closedHeight': (number);
  'chanPoint': (_lnrpc_ChannelPoint | null);
}
