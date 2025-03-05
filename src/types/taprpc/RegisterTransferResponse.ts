// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface RegisterTransferResponsePartial {
  'registeredAsset'?: (_taprpc_AssetPartial | null);
}

export interface RegisterTransferResponse {
  'registeredAsset': (_taprpc_Asset | null);
}
