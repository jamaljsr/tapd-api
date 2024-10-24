// Original file: protos/rfqrpc/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface AddAssetBuyOrderRequestPartial {
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'minAssetAmount'?: (number | string | Long);
  'maxBid'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'peerPubKey'?: (Buffer | Uint8Array | string);
  'timeoutSeconds'?: (number);
}

export interface AddAssetBuyOrderRequest {
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'minAssetAmount': (string);
  'maxBid': (string);
  'expiry': (string);
  'peerPubKey': (Buffer);
  'timeoutSeconds': (number);
}
