// Original file: protos/rfqrpc/rfq.proto

import type { FixedPointPartial as _rfqrpc_FixedPointPartial, FixedPoint as _rfqrpc_FixedPoint } from '../rfqrpc/FixedPoint';
import type { AssetSpecPartial as _rfqrpc_AssetSpecPartial, AssetSpec as _rfqrpc_AssetSpec } from '../rfqrpc/AssetSpec';
import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedBuyQuotePartial {
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'scid'?: (number | string | Long);
  'assetMaxAmount'?: (number | string | Long);
  'askAssetRate'?: (_rfqrpc_FixedPointPartial | null);
  'expiry'?: (number | string | Long);
  'minTransportableUnits'?: (number | string | Long);
  'priceOracleMetadata'?: (string);
  'assetSpec'?: (_rfqrpc_AssetSpecPartial | null);
}

export interface PeerAcceptedBuyQuote {
  'peer': (string);
  'id': (Buffer);
  'scid': (string);
  'assetMaxAmount': (string);
  'askAssetRate': (_rfqrpc_FixedPoint | null);
  'expiry': (string);
  'minTransportableUnits': (string);
  'priceOracleMetadata': (string);
  'assetSpec': (_rfqrpc_AssetSpec | null);
}
