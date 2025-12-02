// Original file: protos/tapcommon.proto


export interface AssetOutPointPartial {
  'anchorOutPoint'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface AssetOutPoint {
  'anchorOutPoint': (string);
  'assetId': (Buffer);
  'scriptKey': (Buffer);
}
