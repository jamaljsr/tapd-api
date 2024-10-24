// Original file: protos/assetwalletrpc/assetwallet.proto

import type { Long } from '@grpc/proto-loader';

export interface CommitVirtualPsbtsRequestPartial {
  'virtualPsbts'?: (Buffer | Uint8Array | string)[];
  'passiveAssetPsbts'?: (Buffer | Uint8Array | string)[];
  'anchorPsbt'?: (Buffer | Uint8Array | string);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'anchorChangeOutput'?: "existingOutputIndex"|"add";
  'fees'?: "targetConf"|"satPerVbyte";
}

export interface CommitVirtualPsbtsRequest {
  'virtualPsbts': (Buffer)[];
  'passiveAssetPsbts': (Buffer)[];
  'anchorPsbt': (Buffer);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'targetConf'?: (number);
  'satPerVbyte'?: (string);
  'anchorChangeOutput': "existingOutputIndex"|"add";
  'fees': "targetConf"|"satPerVbyte";
}
