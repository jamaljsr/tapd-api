// Original file: protos/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface AddAssetSellOfferRequestPartial {
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'maxUnits'?: (number | string | Long);
}

export interface AddAssetSellOfferRequest {
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'maxUnits': (string);
}
