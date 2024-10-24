// Original file: protos/lightning.proto


export interface NodePairPartial {
  'from'?: (Buffer | Uint8Array | string);
  'to'?: (Buffer | Uint8Array | string);
}

export interface NodePair {
  'from': (Buffer);
  'to': (Buffer);
}
