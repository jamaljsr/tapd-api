// Original file: protos/rfq.proto

import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';

export interface AddAssetSellOrderResponsePartial {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedSellQuotePartial | null);
}

export interface AddAssetSellOrderResponse {
  'acceptedQuote': (_rfqrpc_PeerAcceptedSellQuote | null);
}
