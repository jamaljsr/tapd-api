// Original file: protos/assetwalletrpc/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface ProveAssetOwnershipRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_taprpc_OutPointPartial | null);
  'challenge'?: (Buffer | Uint8Array | string);
}

export interface ProveAssetOwnershipRequest {
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'outpoint': (_taprpc_OutPoint | null);
  'challenge': (Buffer);
}
