// Original file: protos/universerpc/universe.proto

import type { SupplyCommitChainDataPartial as _universerpc_SupplyCommitChainDataPartial, SupplyCommitChainData as _universerpc_SupplyCommitChainData } from '../universerpc/SupplyCommitChainData';
import type { SupplyCommitSubtreeRootPartial as _universerpc_SupplyCommitSubtreeRootPartial, SupplyCommitSubtreeRoot as _universerpc_SupplyCommitSubtreeRoot } from '../universerpc/SupplyCommitSubtreeRoot';
import type { SupplyLeafEntryPartial as _universerpc_SupplyLeafEntryPartial, SupplyLeafEntry as _universerpc_SupplyLeafEntry } from '../universerpc/SupplyLeafEntry';
import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';
import type { SupplyLeafBlockHeaderPartial as _universerpc_SupplyLeafBlockHeaderPartial, SupplyLeafBlockHeader as _universerpc_SupplyLeafBlockHeader } from '../universerpc/SupplyLeafBlockHeader';
import type { Long } from '@grpc/proto-loader';

export interface FetchSupplyCommitResponsePartial {
  'chainData'?: (_universerpc_SupplyCommitChainDataPartial | null);
  'txChainFeesSats'?: (number | string | Long);
  'issuanceSubtreeRoot'?: (_universerpc_SupplyCommitSubtreeRootPartial | null);
  'burnSubtreeRoot'?: (_universerpc_SupplyCommitSubtreeRootPartial | null);
  'ignoreSubtreeRoot'?: (_universerpc_SupplyCommitSubtreeRootPartial | null);
  'issuanceLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'burnLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'ignoreLeaves'?: (_universerpc_SupplyLeafEntryPartial)[];
  'totalOutstandingSupply'?: (number | string | Long);
  'spentCommitmentOutpoint'?: (_taprpc_OutPointPartial | null);
  'blockHeaders'?: ({[key: number]: _universerpc_SupplyLeafBlockHeaderPartial});
}

export interface FetchSupplyCommitResponse {
  'chainData': (_universerpc_SupplyCommitChainData | null);
  'txChainFeesSats': (string);
  'issuanceSubtreeRoot': (_universerpc_SupplyCommitSubtreeRoot | null);
  'burnSubtreeRoot': (_universerpc_SupplyCommitSubtreeRoot | null);
  'ignoreSubtreeRoot': (_universerpc_SupplyCommitSubtreeRoot | null);
  'issuanceLeaves': (_universerpc_SupplyLeafEntry)[];
  'burnLeaves': (_universerpc_SupplyLeafEntry)[];
  'ignoreLeaves': (_universerpc_SupplyLeafEntry)[];
  'totalOutstandingSupply': (string);
  'spentCommitmentOutpoint': (_taprpc_OutPoint | null);
  'blockHeaders': ({[key: number]: _universerpc_SupplyLeafBlockHeader});
}
