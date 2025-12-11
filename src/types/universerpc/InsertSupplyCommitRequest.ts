// Original file: protos/universerpc/universe.proto

import type { SupplyCommitChainDataPartial as _universerpc_SupplyCommitChainDataPartial, SupplyCommitChainData as _universerpc_SupplyCommitChainData } from '../universerpc/SupplyCommitChainData';
import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';
import type { SupplyLeafEntryPartial as _universerpc_SupplyLeafEntryPartial, SupplyLeafEntry as _universerpc_SupplyLeafEntry } from '../universerpc/SupplyLeafEntry';

export interface InsertSupplyCommitRequestPartial {
  'groupKeyBytes'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'chainData'?: (_universerpc_SupplyCommitChainDataPartial | null);
  'spentCommitmentOutpoint'?: (_taprpc_OutPointPartial | null);
  'issuanceLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'burnLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'ignoreLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'groupKey'?: "groupKeyBytes"|"groupKeyStr";
}

export interface InsertSupplyCommitRequest {
  'groupKeyBytes'?: (Buffer);
  'groupKeyStr'?: (string);
  'chainData': (_universerpc_SupplyCommitChainData | null);
  'spentCommitmentOutpoint': (_taprpc_OutPoint | null);
  'issuanceLeaves': (_universerpc_SupplyLeafEntry)[];
  'burnLeaves': (_universerpc_SupplyLeafEntry)[];
  'ignoreLeaves': (_universerpc_SupplyLeafEntry)[];
  'groupKey': "groupKeyBytes"|"groupKeyStr";
}
