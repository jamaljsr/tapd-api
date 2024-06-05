// Original file: protos/rfq.proto

import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';
import type { InvalidQuoteResponsePartial as _rfqrpc_InvalidQuoteResponsePartial, InvalidQuoteResponse as _rfqrpc_InvalidQuoteResponse } from '../rfqrpc/InvalidQuoteResponse';
import type { RejectedQuoteResponsePartial as _rfqrpc_RejectedQuoteResponsePartial, RejectedQuoteResponse as _rfqrpc_RejectedQuoteResponse } from '../rfqrpc/RejectedQuoteResponse';

export interface AddAssetSellOrderResponsePartial {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedSellQuotePartial | null);
  'invalidQuote'?: (_rfqrpc_InvalidQuoteResponsePartial | null);
  'rejectedQuote'?: (_rfqrpc_RejectedQuoteResponsePartial | null);
  'response'?: "acceptedQuote"|"invalidQuote"|"rejectedQuote";
}

export interface AddAssetSellOrderResponse {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedSellQuote | null);
  'invalidQuote'?: (_rfqrpc_InvalidQuoteResponse | null);
  'rejectedQuote'?: (_rfqrpc_RejectedQuoteResponse | null);
  'response': "acceptedQuote"|"invalidQuote"|"rejectedQuote";
}
