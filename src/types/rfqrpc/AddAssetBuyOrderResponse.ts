// Original file: protos/rfq.proto

import type { PeerAcceptedBuyQuotePartial as _rfqrpc_PeerAcceptedBuyQuotePartial, PeerAcceptedBuyQuote as _rfqrpc_PeerAcceptedBuyQuote } from '../rfqrpc/PeerAcceptedBuyQuote';

export interface AddAssetBuyOrderResponsePartial {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedBuyQuotePartial | null);
}

export interface AddAssetBuyOrderResponse {
  'acceptedQuote': (_rfqrpc_PeerAcceptedBuyQuote | null);
}
