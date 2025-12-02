// Original file: protos/tapcommon.proto


export interface OutPointPartial {
  'txid'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
}

export interface OutPoint {
  'txid': (Buffer);
  'outputIndex': (number);
}
