// Original file: protos/taprootassets.proto


export interface TapLeafPartial {
  'script'?: (Buffer | Uint8Array | string);
}

export interface TapLeaf {
  'script': (Buffer);
}
