// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { RoutingPolicyPartial as _lnrpc_RoutingPolicyPartial, RoutingPolicy as _lnrpc_RoutingPolicy } from '../lnrpc/RoutingPolicy';
import type { Long } from '@grpc/proto-loader';

export interface ChannelEdgeUpdatePartial {
  'chanId'?: (number | string | Long);
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'capacity'?: (number | string | Long);
  'routingPolicy'?: (_lnrpc_RoutingPolicyPartial | null);
  'advertisingNode'?: (string);
  'connectingNode'?: (string);
}

export interface ChannelEdgeUpdate {
  'chanId': (string);
  'chanPoint': (_lnrpc_ChannelPoint | null);
  'capacity': (string);
  'routingPolicy': (_lnrpc_RoutingPolicy | null);
  'advertisingNode': (string);
  'connectingNode': (string);
}
