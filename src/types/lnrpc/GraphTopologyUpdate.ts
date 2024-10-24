// Original file: protos/lightning.proto

import type { NodeUpdatePartial as _lnrpc_NodeUpdatePartial, NodeUpdate as _lnrpc_NodeUpdate } from '../lnrpc/NodeUpdate';
import type { ChannelEdgeUpdatePartial as _lnrpc_ChannelEdgeUpdatePartial, ChannelEdgeUpdate as _lnrpc_ChannelEdgeUpdate } from '../lnrpc/ChannelEdgeUpdate';
import type { ClosedChannelUpdatePartial as _lnrpc_ClosedChannelUpdatePartial, ClosedChannelUpdate as _lnrpc_ClosedChannelUpdate } from '../lnrpc/ClosedChannelUpdate';

export interface GraphTopologyUpdatePartial {
  'nodeUpdates'?: (_lnrpc_NodeUpdatePartial)[];
  'channelUpdates'?: (_lnrpc_ChannelEdgeUpdatePartial)[];
  'closedChans'?: (_lnrpc_ClosedChannelUpdatePartial)[];
}

export interface GraphTopologyUpdate {
  'nodeUpdates': (_lnrpc_NodeUpdate)[];
  'channelUpdates': (_lnrpc_ChannelEdgeUpdate)[];
  'closedChans': (_lnrpc_ClosedChannelUpdate)[];
}
