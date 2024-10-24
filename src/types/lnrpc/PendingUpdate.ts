// Original file: protos/lightning.proto


export interface PendingUpdatePartial {
  'txid'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
}

export interface PendingUpdate {
  'txid': (Buffer);
  'outputIndex': (number);
}
