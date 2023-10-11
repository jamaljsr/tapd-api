// Original file: protos/taprootassets.proto

import type { DecodedProofPartial as _taprpc_DecodedProofPartial, DecodedProof as _taprpc_DecodedProof } from '../taprpc/DecodedProof';

export interface DecodeProofResponsePartial {
  'decodedProof'?: (_taprpc_DecodedProofPartial | null);
}

export interface DecodeProofResponse {
  'decodedProof': (_taprpc_DecodedProof | null);
}
