// Original file: protos/taprootassets.proto


export interface UnpackProofFileRequestPartial {
  'rawProofFile'?: (Buffer | Uint8Array | string);
}

export interface UnpackProofFileRequest {
  'rawProofFile': (Buffer);
}
