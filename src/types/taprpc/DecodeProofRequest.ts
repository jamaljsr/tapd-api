// Original file: protos/taprootassets.proto


export interface DecodeProofRequestPartial {
  'rawProof'?: (Buffer | Uint8Array | string);
  'proofAtDepth'?: (number);
  'withPrevWitnesses'?: (boolean);
  'withMetaReveal'?: (boolean);
}

export interface DecodeProofRequest {
  'rawProof': (Buffer);
  'proofAtDepth': (number);
  'withPrevWitnesses': (boolean);
  'withMetaReveal': (boolean);
}
