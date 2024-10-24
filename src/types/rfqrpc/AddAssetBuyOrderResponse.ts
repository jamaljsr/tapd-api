// Original file: protos/rfqrpc/rfq.proto

import type { PeerAcceptedBuyQuotePartial as _rfqrpc_PeerAcceptedBuyQuotePartial, PeerAcceptedBuyQuote as _rfqrpc_PeerAcceptedBuyQuote } from '../rfqrpc/PeerAcceptedBuyQuote';
import type { InvalidQuoteResponsePartial as _rfqrpc_InvalidQuoteResponsePartial, InvalidQuoteResponse as _rfqrpc_InvalidQuoteResponse } from '../rfqrpc/InvalidQuoteResponse';
import type { RejectedQuoteResponsePartial as _rfqrpc_RejectedQuoteResponsePartial, RejectedQuoteResponse as _rfqrpc_RejectedQuoteResponse } from '../rfqrpc/RejectedQuoteResponse';

export interface AddAssetBuyOrderResponsePartial {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedBuyQuotePartial | null);
  'invalidQuote'?: (_rfqrpc_InvalidQuoteResponsePartial | null);
  'rejectedQuote'?: (_rfqrpc_RejectedQuoteResponsePartial | null);
  'response'?: "acceptedQuote"|"invalidQuote"|"rejectedQuote";
}

export interface AddAssetBuyOrderResponse {
  'acceptedQuote'?: (_rfqrpc_PeerAcceptedBuyQuote | null);
  'invalidQuote'?: (_rfqrpc_InvalidQuoteResponse | null);
  'rejectedQuote'?: (_rfqrpc_RejectedQuoteResponse | null);
  'response': "acceptedQuote"|"invalidQuote"|"rejectedQuote";
}
