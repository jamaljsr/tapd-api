// Original file: protos/taprootassets.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface RegisterTransferRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'groupKey'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_taprpc_OutPointPartial | null);
}

export interface RegisterTransferRequest {
  'assetId': (Buffer);
  'groupKey': (Buffer);
  'scriptKey': (Buffer);
  'outpoint': (_taprpc_OutPoint | null);
}
