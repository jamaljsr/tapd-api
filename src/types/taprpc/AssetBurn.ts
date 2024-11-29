// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetBurnPartial {
  'note'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'tweakedGroupKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'anchorTxid'?: (Buffer | Uint8Array | string);
}

export interface AssetBurn {
  'note': (string);
  'assetId': (Buffer);
  'tweakedGroupKey': (Buffer);
  'amount': (string);
  'anchorTxid': (Buffer);
}
