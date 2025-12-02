// Original file: protos/universerpc/universe.proto

import type { SupplyLeafKeyPartial as _universerpc_SupplyLeafKeyPartial, SupplyLeafKey as _universerpc_SupplyLeafKey } from '../universerpc/SupplyLeafKey';
import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';

export interface SupplyLeafEntryPartial {
  'leafKey'?: (_universerpc_SupplyLeafKeyPartial | null);
  'leafNode'?: (_universerpc_MerkleSumNodePartial | null);
  'blockHeight'?: (number);
  'rawLeaf'?: (Buffer | Uint8Array | string);
}

export interface SupplyLeafEntry {
  'leafKey': (_universerpc_SupplyLeafKey | null);
  'leafNode': (_universerpc_MerkleSumNode | null);
  'blockHeight': (number);
  'rawLeaf': (Buffer);
}
