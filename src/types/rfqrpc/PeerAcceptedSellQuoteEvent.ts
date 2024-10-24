// Original file: protos/rfqrpc/rfq.proto

import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';
import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedSellQuoteEventPartial {
  'timestamp'?: (number | string | Long);
  'peerAcceptedSellQuote'?: (_rfqrpc_PeerAcceptedSellQuotePartial | null);
}

export interface PeerAcceptedSellQuoteEvent {
  'timestamp': (string);
  'peerAcceptedSellQuote': (_rfqrpc_PeerAcceptedSellQuote | null);
}
