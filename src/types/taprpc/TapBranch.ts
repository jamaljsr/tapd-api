// Original file: protos/taprootassets.proto


export interface TapBranchPartial {
  'leftTaphash'?: (Buffer | Uint8Array | string);
  'rightTaphash'?: (Buffer | Uint8Array | string);
}

export interface TapBranch {
  'leftTaphash': (Buffer);
  'rightTaphash': (Buffer);
}
