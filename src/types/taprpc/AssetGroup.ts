// Original file: protos/taprootassets.proto


export interface AssetGroupPartial {
  'rawGroupKey'?: (Buffer | Uint8Array | string);
  'tweakedGroupKey'?: (Buffer | Uint8Array | string);
  'assetWitness'?: (Buffer | Uint8Array | string);
}

export interface AssetGroup {
  'rawGroupKey': (Buffer);
  'tweakedGroupKey': (Buffer);
  'assetWitness': (Buffer);
}
