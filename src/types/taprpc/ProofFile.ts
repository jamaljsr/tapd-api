// Original file: protos/taprootassets.proto


export interface ProofFilePartial {
  'rawProofFile'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
}

export interface ProofFile {
  'rawProofFile': (Buffer);
  'genesisPoint': (string);
}
