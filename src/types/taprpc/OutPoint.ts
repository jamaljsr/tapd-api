// Original file: protos/taprootassets.proto


export interface OutPointPartial {
  'txid'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
}

export interface OutPoint {
  'txid': (Buffer);
  'outputIndex': (number);
}
