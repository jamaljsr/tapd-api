// Original file: protos/taprootassets.proto


export interface UnpackProofFileResponsePartial {
  'rawProofs'?: (Buffer | Uint8Array | string)[];
}

export interface UnpackProofFileResponse {
  'rawProofs': (Buffer)[];
}
