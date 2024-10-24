// Original file: protos/universerpc/universe.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface AssetLeafPartial {
  'asset'?: (_taprpc_AssetPartial | null);
  'proof'?: (Buffer | Uint8Array | string);
}

export interface AssetLeaf {
  'asset': (_taprpc_Asset | null);
  'proof': (Buffer);
}
