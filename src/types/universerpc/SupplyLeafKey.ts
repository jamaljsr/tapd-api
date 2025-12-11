// Original file: protos/universerpc/universe.proto

import type { OutpointPartial as _universerpc_OutpointPartial, Outpoint as _universerpc_Outpoint } from '../universerpc/Outpoint';

export interface SupplyLeafKeyPartial {
  'outpoint'?: (_universerpc_OutpointPartial | null);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'assetId'?: (Buffer | Uint8Array | string);
}

export interface SupplyLeafKey {
  'outpoint': (_universerpc_Outpoint | null);
  'scriptKey': (Buffer);
  'assetId': (Buffer);
}
