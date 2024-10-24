// Original file: protos/rfqrpc/rfq.proto

import type { PeerAcceptedBuyQuoteEventPartial as _rfqrpc_PeerAcceptedBuyQuoteEventPartial, PeerAcceptedBuyQuoteEvent as _rfqrpc_PeerAcceptedBuyQuoteEvent } from '../rfqrpc/PeerAcceptedBuyQuoteEvent';
import type { PeerAcceptedSellQuoteEventPartial as _rfqrpc_PeerAcceptedSellQuoteEventPartial, PeerAcceptedSellQuoteEvent as _rfqrpc_PeerAcceptedSellQuoteEvent } from '../rfqrpc/PeerAcceptedSellQuoteEvent';
import type { AcceptHtlcEventPartial as _rfqrpc_AcceptHtlcEventPartial, AcceptHtlcEvent as _rfqrpc_AcceptHtlcEvent } from '../rfqrpc/AcceptHtlcEvent';

export interface RfqEventPartial {
  'peerAcceptedBuyQuote'?: (_rfqrpc_PeerAcceptedBuyQuoteEventPartial | null);
  'peerAcceptedSellQuote'?: (_rfqrpc_PeerAcceptedSellQuoteEventPartial | null);
  'acceptHtlc'?: (_rfqrpc_AcceptHtlcEventPartial | null);
  'event'?: "peerAcceptedBuyQuote"|"peerAcceptedSellQuote"|"acceptHtlc";
}

export interface RfqEvent {
  'peerAcceptedBuyQuote'?: (_rfqrpc_PeerAcceptedBuyQuoteEvent | null);
  'peerAcceptedSellQuote'?: (_rfqrpc_PeerAcceptedSellQuoteEvent | null);
  'acceptHtlc'?: (_rfqrpc_AcceptHtlcEvent | null);
  'event': "peerAcceptedBuyQuote"|"peerAcceptedSellQuote"|"acceptHtlc";
}
