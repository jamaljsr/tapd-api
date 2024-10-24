// Original file: protos/rfqrpc/rfq.proto

import type { FixedPointPartial as _rfqrpc_FixedPointPartial, FixedPoint as _rfqrpc_FixedPoint } from '../rfqrpc/FixedPoint';
import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedSellQuotePartial {
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'scid'?: (number | string | Long);
  'assetAmount'?: (number | string | Long);
  'bidAssetRate'?: (_rfqrpc_FixedPointPartial | null);
  'expiry'?: (number | string | Long);
}

export interface PeerAcceptedSellQuote {
  'peer': (string);
  'id': (Buffer);
  'scid': (string);
  'assetAmount': (string);
  'bidAssetRate': (_rfqrpc_FixedPoint | null);
  'expiry': (string);
}
