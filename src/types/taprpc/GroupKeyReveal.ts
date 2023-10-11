// Original file: protos/taprootassets.proto


export interface GroupKeyRevealPartial {
  'rawGroupKey'?: (Buffer | Uint8Array | string);
  'tapscriptRoot'?: (Buffer | Uint8Array | string);
}

export interface GroupKeyReveal {
  'rawGroupKey': (Buffer);
  'tapscriptRoot': (Buffer);
}
