// Original file: protos/universerpc/universe.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface FetchSupplyCommitRequestPartial {
  'groupKeyBytes'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'commitOutpoint'?: (_taprpc_OutPointPartial | null);
  'spentCommitOutpoint'?: (_taprpc_OutPointPartial | null);
  'veryFirst'?: (boolean);
  'latest'?: (boolean);
  'groupKey'?: "groupKeyBytes"|"groupKeyStr";
  'locator'?: "commitOutpoint"|"spentCommitOutpoint"|"veryFirst"|"latest";
}

export interface FetchSupplyCommitRequest {
  'groupKeyBytes'?: (Buffer);
  'groupKeyStr'?: (string);
  'commitOutpoint'?: (_taprpc_OutPoint | null);
  'spentCommitOutpoint'?: (_taprpc_OutPoint | null);
  'veryFirst'?: (boolean);
  'latest'?: (boolean);
  'groupKey': "groupKeyBytes"|"groupKeyStr";
  'locator': "commitOutpoint"|"spentCommitOutpoint"|"veryFirst"|"latest";
}
