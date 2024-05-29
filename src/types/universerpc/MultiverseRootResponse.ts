// Original file: protos/universe.proto

import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';

export interface MultiverseRootResponsePartial {
  'multiverseRoot'?: (_universerpc_MerkleSumNodePartial | null);
}

export interface MultiverseRootResponse {
  'multiverseRoot': (_universerpc_MerkleSumNode | null);
}
