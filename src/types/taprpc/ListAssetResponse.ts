// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';
import type { Long } from '@grpc/proto-loader';

export interface ListAssetResponsePartial {
  'assets'?: (_taprpc_AssetPartial)[];
  'unconfirmedTransfers'?: (number | string | Long);
  'unconfirmedMints'?: (number | string | Long);
}

export interface ListAssetResponse {
  'assets': (_taprpc_Asset)[];
  'unconfirmedTransfers': (string);
  'unconfirmedMints': (string);
}
