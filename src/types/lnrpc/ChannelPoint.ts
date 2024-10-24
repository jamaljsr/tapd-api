// Original file: protos/lightning.proto


export interface ChannelPointPartial {
  'fundingTxidBytes'?: (Buffer | Uint8Array | string);
  'fundingTxidStr'?: (string);
  'outputIndex'?: (number);
  'fundingTxid'?: "fundingTxidBytes"|"fundingTxidStr";
}

export interface ChannelPoint {
  'fundingTxidBytes'?: (Buffer);
  'fundingTxidStr'?: (string);
  'outputIndex': (number);
  'fundingTxid': "fundingTxidBytes"|"fundingTxidStr";
}
