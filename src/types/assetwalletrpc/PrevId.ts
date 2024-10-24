// Original file: protos/assetwalletrpc/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface PrevIdPartial {
  'outpoint'?: (_taprpc_OutPointPartial | null);
  'id'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
}

export interface PrevId {
  'outpoint': (_taprpc_OutPoint | null);
  'id': (Buffer);
  'scriptKey': (Buffer);
}
