// Original file: protos/rfq.proto

import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedSellQuotePartial {
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'scid'?: (number | string | Long);
  'assetAmount'?: (number | string | Long);
  'bidPrice'?: (number | string | Long);
  'expiry'?: (number | string | Long);
}

export interface PeerAcceptedSellQuote {
  'peer': (string);
  'id': (Buffer);
  'scid': (string);
  'assetAmount': (string);
  'bidPrice': (string);
  'expiry': (string);
}
