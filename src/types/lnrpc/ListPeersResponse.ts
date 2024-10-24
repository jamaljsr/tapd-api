// Original file: protos/lightning.proto

import type { PeerPartial as _lnrpc_PeerPartial, Peer as _lnrpc_Peer } from '../lnrpc/Peer';

export interface ListPeersResponsePartial {
  'peers'?: (_lnrpc_PeerPartial)[];
}

export interface ListPeersResponse {
  'peers': (_lnrpc_Peer)[];
}
