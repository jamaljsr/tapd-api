// Original file: protos/taprootassets.proto


export interface ChainHashPartial {
  'hash'?: (Buffer | Uint8Array | string);
  'hashStr'?: (string);
}

export interface ChainHash {
  'hash': (Buffer);
  'hashStr': (string);
}
