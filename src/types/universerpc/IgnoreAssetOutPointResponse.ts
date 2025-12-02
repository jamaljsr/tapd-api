// Original file: protos/universerpc/universe.proto

import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';

export interface IgnoreAssetOutPointResponsePartial {
  'leafKey'?: (Buffer | Uint8Array | string);
  'leaf'?: (_universerpc_MerkleSumNodePartial | null);
}

export interface IgnoreAssetOutPointResponse {
  'leafKey': (Buffer);
  'leaf': (_universerpc_MerkleSumNode | null);
}
