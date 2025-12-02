// Original file: protos/tapchannelrpc/tapchannel.proto

import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';

export interface AcceptedSellQuotesPartial {
  'acceptedSellOrders'?: (_rfqrpc_PeerAcceptedSellQuotePartial)[];
}

export interface AcceptedSellQuotes {
  'acceptedSellOrders': (_rfqrpc_PeerAcceptedSellQuote)[];
}
