// Original file: protos/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface AddAssetSellOrderRequestPartial {
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'maxAssetAmount'?: (number | string | Long);
  'minAsk'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'peerPubKey'?: (Buffer | Uint8Array | string);
  'timeoutSeconds'?: (number);
}

export interface AddAssetSellOrderRequest {
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'maxAssetAmount': (string);
  'minAsk': (string);
  'expiry': (string);
  'peerPubKey': (Buffer);
  'timeoutSeconds': (number);
}
