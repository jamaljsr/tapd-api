// Original file: protos/assetwallet.proto


export interface FundVirtualPsbtResponsePartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
  'changeOutputIndex'?: (number);
  'passiveAssetPsbts'?: (Buffer | Uint8Array | string)[];
}

export interface FundVirtualPsbtResponse {
  'fundedPsbt': (Buffer);
  'changeOutputIndex': (number);
  'passiveAssetPsbts': (Buffer)[];
}
