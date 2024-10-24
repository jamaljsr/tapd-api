// Original file: protos/rfqrpc/rfq.proto

import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedBuyQuotePartial {
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'scid'?: (number | string | Long);
  'assetAmount'?: (number | string | Long);
  'askPrice'?: (number | string | Long);
  'expiry'?: (number | string | Long);
}

export interface PeerAcceptedBuyQuote {
  'peer': (string);
  'id': (Buffer);
  'scid': (string);
  'assetAmount': (string);
  'askPrice': (string);
  'expiry': (string);
}
