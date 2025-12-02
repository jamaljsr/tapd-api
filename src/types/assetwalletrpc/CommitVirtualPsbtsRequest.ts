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
  'customLockId'?: (Buffer | Uint8Array | string);
  'lockExpirationSeconds'?: (number | string | Long);
  'skipFunding'?: (boolean);
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
  'customLockId': (Buffer);
  'lockExpirationSeconds': (string);
  'skipFunding': (boolean);
  'anchorChangeOutput': "existingOutputIndex"|"add";
  'fees': "targetConf"|"satPerVbyte";
}
