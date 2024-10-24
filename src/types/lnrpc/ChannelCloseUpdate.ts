// Original file: protos/lightning.proto


export interface ChannelCloseUpdatePartial {
  'closingTxid'?: (Buffer | Uint8Array | string);
  'success'?: (boolean);
}

export interface ChannelCloseUpdate {
  'closingTxid': (Buffer);
  'success': (boolean);
}
