// Original file: protos/lightning.proto

import type { RoutingPolicyPartial as _lnrpc_RoutingPolicyPartial, RoutingPolicy as _lnrpc_RoutingPolicy } from '../lnrpc/RoutingPolicy';
import type { ChannelAuthProofPartial as _lnrpc_ChannelAuthProofPartial, ChannelAuthProof as _lnrpc_ChannelAuthProof } from '../lnrpc/ChannelAuthProof';
import type { Long } from '@grpc/proto-loader';

export interface ChannelEdgePartial {
  'channelId'?: (number | string | Long);
  'chanPoint'?: (string);
  'lastUpdate'?: (number);
  'node1Pub'?: (string);
  'node2Pub'?: (string);
  'capacity'?: (number | string | Long);
  'node1Policy'?: (_lnrpc_RoutingPolicyPartial | null);
  'node2Policy'?: (_lnrpc_RoutingPolicyPartial | null);
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'authProof'?: (_lnrpc_ChannelAuthProofPartial | null);
}

export interface ChannelEdge {
  'channelId': (string);
  'chanPoint': (string);
  'lastUpdate': (number);
  'node1Pub': (string);
  'node2Pub': (string);
  'capacity': (string);
  'node1Policy': (_lnrpc_RoutingPolicy | null);
  'node2Policy': (_lnrpc_RoutingPolicy | null);
  'customRecords': ({[key: number]: Buffer});
  'authProof': (_lnrpc_ChannelAuthProof | null);
}
