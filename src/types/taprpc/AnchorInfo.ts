// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface AnchorInfoPartial {
  'anchorTx'?: (Buffer | Uint8Array | string);
  'anchorBlockHash'?: (string);
  'anchorOutpoint'?: (string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'blockTimestamp'?: (number | string | Long);
}

export interface AnchorInfo {
  'anchorTx': (Buffer);
  'anchorBlockHash': (string);
  'anchorOutpoint': (string);
  'internalKey': (Buffer);
  'merkleRoot': (Buffer);
  'tapscriptSibling': (Buffer);
  'blockHeight': (number);
  'blockTimestamp': (string);
}
