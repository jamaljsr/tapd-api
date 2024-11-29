// Original file: protos/rfqrpc/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface AddAssetBuyOrderRequestPartial {
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'assetMaxAmt'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'peerPubKey'?: (Buffer | Uint8Array | string);
  'timeoutSeconds'?: (number);
  'skipAssetChannelCheck'?: (boolean);
}

export interface AddAssetBuyOrderRequest {
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'assetMaxAmt': (string);
  'expiry': (string);
  'peerPubKey': (Buffer);
  'timeoutSeconds': (number);
  'skipAssetChannelCheck': (boolean);
}
