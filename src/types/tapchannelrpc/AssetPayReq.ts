// Original file: protos/tapchannelrpc/tapchannel.proto


export interface AssetPayReqPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'payReqString'?: (string);
  'groupKey'?: (Buffer | Uint8Array | string);
}

export interface AssetPayReq {
  'assetId': (Buffer);
  'payReqString': (string);
  'groupKey': (Buffer);
}
