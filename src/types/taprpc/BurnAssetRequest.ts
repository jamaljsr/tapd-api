// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface BurnAssetRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'amountToBurn'?: (number | string | Long);
  'confirmationText'?: (string);
  'asset'?: "assetId"|"assetIdStr";
}

export interface BurnAssetRequest {
  'assetId'?: (Buffer);
  'assetIdStr'?: (string);
  'amountToBurn': (string);
  'confirmationText': (string);
  'asset': "assetId"|"assetIdStr";
}
