// Original file: protos/rfq.proto

import type { PeerAcceptedBuyQuotePartial as _rfqrpc_PeerAcceptedBuyQuotePartial, PeerAcceptedBuyQuote as _rfqrpc_PeerAcceptedBuyQuote } from '../rfqrpc/PeerAcceptedBuyQuote';
import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';

export interface QueryPeerAcceptedQuotesResponsePartial {
  'buyQuotes'?: (_rfqrpc_PeerAcceptedBuyQuotePartial)[];
  'sellQuotes'?: (_rfqrpc_PeerAcceptedSellQuotePartial)[];
}

export interface QueryPeerAcceptedQuotesResponse {
  'buyQuotes': (_rfqrpc_PeerAcceptedBuyQuote)[];
  'sellQuotes': (_rfqrpc_PeerAcceptedSellQuote)[];
}
