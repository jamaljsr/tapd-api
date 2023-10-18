// Original file: protos/taprootassets.proto


export interface SendAssetRequestPartial {
  'tapAddrs'?: (string)[];
  'feeRate'?: (number);
}

export interface SendAssetRequest {
  'tapAddrs': (string)[];
  'feeRate': (number);
}
