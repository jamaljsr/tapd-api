// Original file: protos/lightning.proto

import type { LightningNodePartial as _lnrpc_LightningNodePartial, LightningNode as _lnrpc_LightningNode } from '../lnrpc/LightningNode';
import type { ChannelEdgePartial as _lnrpc_ChannelEdgePartial, ChannelEdge as _lnrpc_ChannelEdge } from '../lnrpc/ChannelEdge';
import type { Long } from '@grpc/proto-loader';

export interface NodeInfoPartial {
  'node'?: (_lnrpc_LightningNodePartial | null);
  'numChannels'?: (number);
  'totalCapacity'?: (number | string | Long);
  'channels'?: (_lnrpc_ChannelEdgePartial)[];
}

export interface NodeInfo {
  'node': (_lnrpc_LightningNode | null);
  'numChannels': (number);
  'totalCapacity': (string);
  'channels': (_lnrpc_ChannelEdge)[];
}
