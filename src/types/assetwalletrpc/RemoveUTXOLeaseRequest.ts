// Original file: protos/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface RemoveUTXOLeaseRequestPartial {
  'outpoint'?: (_taprpc_OutPointPartial | null);
}

export interface RemoveUTXOLeaseRequest {
  'outpoint': (_taprpc_OutPoint | null);
}
