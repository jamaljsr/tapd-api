// Original file: protos/taprootassets.proto


export interface SendAssetRequestPartial {
  'tapAddrs'?: (string)[];
  'feeRate'?: (number);
  'label'?: (string);
  'skipProofCourierPingCheck'?: (boolean);
}

export interface SendAssetRequest {
  'tapAddrs': (string)[];
  'feeRate': (number);
  'label': (string);
  'skipProofCourierPingCheck': (boolean);
}
