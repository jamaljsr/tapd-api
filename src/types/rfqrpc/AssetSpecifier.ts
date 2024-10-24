// Original file: protos/rfqrpc/rfq.proto


export interface AssetSpecifierPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'id'?: "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}

export interface AssetSpecifier {
  'assetId'?: (Buffer);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer);
  'groupKeyStr'?: (string);
  'id': "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}
