// Original file: protos/lightning.proto


export interface AMPPartial {
  'rootShare'?: (Buffer | Uint8Array | string);
  'setId'?: (Buffer | Uint8Array | string);
  'childIndex'?: (number);
  'hash'?: (Buffer | Uint8Array | string);
  'preimage'?: (Buffer | Uint8Array | string);
}

export interface AMP {
  'rootShare': (Buffer);
  'setId': (Buffer);
  'childIndex': (number);
  'hash': (Buffer);
  'preimage': (Buffer);
}
