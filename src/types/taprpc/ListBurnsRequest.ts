// Original file: protos/taprootassets.proto


export interface ListBurnsRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'tweakedGroupKey'?: (Buffer | Uint8Array | string);
  'anchorTxid'?: (Buffer | Uint8Array | string);
}

export interface ListBurnsRequest {
  'assetId': (Buffer);
  'tweakedGroupKey': (Buffer);
  'anchorTxid': (Buffer);
}
