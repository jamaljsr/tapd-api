// Original file: protos/universerpc/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface SupplyCommitChainDataPartial {
  'txn'?: (Buffer | Uint8Array | string);
  'txOutIdx'?: (number);
  'internalKey'?: (Buffer | Uint8Array | string);
  'outputKey'?: (Buffer | Uint8Array | string);
  'supplyRootHash'?: (Buffer | Uint8Array | string);
  'supplyRootSum'?: (number | string | Long);
  'blockHeader'?: (Buffer | Uint8Array | string);
  'blockHash'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'txBlockMerkleProof'?: (Buffer | Uint8Array | string);
  'txIndex'?: (number);
  'commitOutpoint'?: (string);
}

export interface SupplyCommitChainData {
  'txn': (Buffer);
  'txOutIdx': (number);
  'internalKey': (Buffer);
  'outputKey': (Buffer);
  'supplyRootHash': (Buffer);
  'supplyRootSum': (string);
  'blockHeader': (Buffer);
  'blockHash': (Buffer);
  'blockHeight': (number);
  'txBlockMerkleProof': (Buffer);
  'txIndex': (number);
  'commitOutpoint': (string);
}
