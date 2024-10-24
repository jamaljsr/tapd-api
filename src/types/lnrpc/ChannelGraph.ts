// Original file: protos/lightning.proto

import type { LightningNodePartial as _lnrpc_LightningNodePartial, LightningNode as _lnrpc_LightningNode } from '../lnrpc/LightningNode';
import type { ChannelEdgePartial as _lnrpc_ChannelEdgePartial, ChannelEdge as _lnrpc_ChannelEdge } from '../lnrpc/ChannelEdge';

export interface ChannelGraphPartial {
  'nodes'?: (_lnrpc_LightningNodePartial)[];
  'edges'?: (_lnrpc_ChannelEdgePartial)[];
}

export interface ChannelGraph {
  'nodes': (_lnrpc_LightningNode)[];
  'edges': (_lnrpc_ChannelEdge)[];
}
