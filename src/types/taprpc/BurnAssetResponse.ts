// Original file: protos/taprootassets.proto

import type { AssetTransferPartial as _taprpc_AssetTransferPartial, AssetTransfer as _taprpc_AssetTransfer } from '../taprpc/AssetTransfer';
import type { DecodedProofPartial as _taprpc_DecodedProofPartial, DecodedProof as _taprpc_DecodedProof } from '../taprpc/DecodedProof';

export interface BurnAssetResponsePartial {
  'burnTransfer'?: (_taprpc_AssetTransferPartial | null);
  'burnProof'?: (_taprpc_DecodedProofPartial | null);
}

export interface BurnAssetResponse {
  'burnTransfer': (_taprpc_AssetTransfer | null);
  'burnProof': (_taprpc_DecodedProof | null);
}
