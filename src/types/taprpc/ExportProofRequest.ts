// Original file: protos/taprootassets.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface ExportProofRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_taprpc_OutPointPartial | null);
}

export interface ExportProofRequest {
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'outpoint': (_taprpc_OutPoint | null);
}
