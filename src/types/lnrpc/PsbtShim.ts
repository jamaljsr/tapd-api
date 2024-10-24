// Original file: protos/lightning.proto


export interface PsbtShimPartial {
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'basePsbt'?: (Buffer | Uint8Array | string);
  'noPublish'?: (boolean);
}

export interface PsbtShim {
  'pendingChanId': (Buffer);
  'basePsbt': (Buffer);
  'noPublish': (boolean);
}
