// Original file: protos/assetwalletrpc/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface VerifyAssetOwnershipResponsePartial {
  'validProof'?: (boolean);
  'outpoint'?: (_taprpc_OutPointPartial | null);
  'outpointStr'?: (string);
  'blockHash'?: (Buffer | Uint8Array | string);
  'blockHashStr'?: (string);
  'blockHeight'?: (number);
}

export interface VerifyAssetOwnershipResponse {
  'validProof': (boolean);
  'outpoint': (_taprpc_OutPoint | null);
  'outpointStr': (string);
  'blockHash': (Buffer);
  'blockHashStr': (string);
  'blockHeight': (number);
}
