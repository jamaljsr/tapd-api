// Original file: protos/lightning.proto


export interface BlindedHopPartial {
  'blindedNode'?: (Buffer | Uint8Array | string);
  'encryptedData'?: (Buffer | Uint8Array | string);
}

export interface BlindedHop {
  'blindedNode': (Buffer);
  'encryptedData': (Buffer);
}
