// Original file: protos/lightning.proto


export interface OutPointPartial {
  'txidBytes'?: (Buffer | Uint8Array | string);
  'txidStr'?: (string);
  'outputIndex'?: (number);
}

export interface OutPoint {
  'txidBytes': (Buffer);
  'txidStr': (string);
  'outputIndex': (number);
}
