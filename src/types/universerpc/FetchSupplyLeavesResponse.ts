// Original file: protos/universerpc/universe.proto

import type { SupplyLeafEntryPartial as _universerpc_SupplyLeafEntryPartial, SupplyLeafEntry as _universerpc_SupplyLeafEntry } from '../universerpc/SupplyLeafEntry';
import type { SupplyLeafBlockHeaderPartial as _universerpc_SupplyLeafBlockHeaderPartial, SupplyLeafBlockHeader as _universerpc_SupplyLeafBlockHeader } from '../universerpc/SupplyLeafBlockHeader';

export interface FetchSupplyLeavesResponsePartial {
  'issuanceLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'burnLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'ignoreLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'issuanceLeafInclusionProofs'?: (Buffer | Uint8Array | string)[];
  'burnLeafInclusionProofs'?: (Buffer | Uint8Array | string)[];
  'ignoreLeafInclusionProofs'?: (Buffer | Uint8Array | string)[];
  'blockHeaders'?: ({[key: number]: _universerpc_SupplyLeafBlockHeaderPartial});
}

export interface FetchSupplyLeavesResponse {
  'issuanceLeaves': (_universerpc_SupplyLeafEntry)[];
  'burnLeaves': (_universerpc_SupplyLeafEntry)[];
  'ignoreLeaves': (_universerpc_SupplyLeafEntry)[];
  'issuanceLeafInclusionProofs': (Buffer)[];
  'burnLeafInclusionProofs': (Buffer)[];
  'ignoreLeafInclusionProofs': (Buffer)[];
  'blockHeaders': ({[key: number]: _universerpc_SupplyLeafBlockHeader});
}
