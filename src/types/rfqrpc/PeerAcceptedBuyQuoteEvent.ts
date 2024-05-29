// Original file: protos/rfq.proto

import type { PeerAcceptedBuyQuotePartial as _rfqrpc_PeerAcceptedBuyQuotePartial, PeerAcceptedBuyQuote as _rfqrpc_PeerAcceptedBuyQuote } from '../rfqrpc/PeerAcceptedBuyQuote';
import type { Long } from '@grpc/proto-loader';

export interface PeerAcceptedBuyQuoteEventPartial {
  'timestamp'?: (number | string | Long);
  'peerAcceptedBuyQuote'?: (_rfqrpc_PeerAcceptedBuyQuotePartial | null);
}

export interface PeerAcceptedBuyQuoteEvent {
  'timestamp': (string);
  'peerAcceptedBuyQuote': (_rfqrpc_PeerAcceptedBuyQuote | null);
}
