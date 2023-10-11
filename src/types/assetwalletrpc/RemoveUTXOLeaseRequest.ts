// Original file: protos/assetwallet.proto

import type { OutPointPartial as _assetwalletrpc_OutPointPartial, OutPoint as _assetwalletrpc_OutPoint } from '../assetwalletrpc/OutPoint';

export interface RemoveUTXOLeaseRequestPartial {
  'outpoint'?: (_assetwalletrpc_OutPointPartial | null);
}

export interface RemoveUTXOLeaseRequest {
  'outpoint': (_assetwalletrpc_OutPoint | null);
}
