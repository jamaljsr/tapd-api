// Original file: protos/taprootassets.proto

import type { DecodedProofPartial as _taprpc_DecodedProofPartial, DecodedProof as _taprpc_DecodedProof } from '../taprpc/DecodedProof';

export interface VerifyProofResponsePartial {
  'valid'?: (boolean);
  'decodedProof'?: (_taprpc_DecodedProofPartial | null);
}

export interface VerifyProofResponse {
  'valid': (boolean);
  'decodedProof': (_taprpc_DecodedProof | null);
}
