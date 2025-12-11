// Original file: protos/universerpc/universe.proto

import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';

export interface SupplyCommitSubtreeRootPartial {
  'type'?: (string);
  'rootNode'?: (_universerpc_MerkleSumNodePartial | null);
  'supplyTreeLeafKey'?: (Buffer | Uint8Array | string);
  'supplyTreeInclusionProof'?: (Buffer | Uint8Array | string);
}

export interface SupplyCommitSubtreeRoot {
  'type': (string);
  'rootNode': (_universerpc_MerkleSumNode | null);
  'supplyTreeLeafKey': (Buffer);
  'supplyTreeInclusionProof': (Buffer);
}
