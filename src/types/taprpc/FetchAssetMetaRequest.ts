// Original file: protos/taprootassets.proto


export interface FetchAssetMetaRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'metaHashStr'?: (string);
  'asset'?: "assetId"|"metaHash"|"assetIdStr"|"metaHashStr";
}

export interface FetchAssetMetaRequest {
  'assetId'?: (Buffer);
  'metaHash'?: (Buffer);
  'assetIdStr'?: (string);
  'metaHashStr'?: (string);
  'asset': "assetId"|"metaHash"|"assetIdStr"|"metaHashStr";
}
