import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RfqClient as _rfqrpc_RfqClient, RfqDefinition as _rfqrpc_RfqDefinition } from './rfqrpc/Rfq';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rfqrpc: {
    AcceptHtlcEvent: MessageTypeDefinition
    AddAssetBuyOfferRequest: MessageTypeDefinition
    AddAssetBuyOfferResponse: MessageTypeDefinition
    AddAssetBuyOrderRequest: MessageTypeDefinition
    AddAssetBuyOrderResponse: MessageTypeDefinition
    AddAssetSellOfferRequest: MessageTypeDefinition
    AddAssetSellOfferResponse: MessageTypeDefinition
    AddAssetSellOrderRequest: MessageTypeDefinition
    AddAssetSellOrderResponse: MessageTypeDefinition
    AssetSpecifier: MessageTypeDefinition
    InvalidQuoteResponse: MessageTypeDefinition
    PeerAcceptedBuyQuote: MessageTypeDefinition
    PeerAcceptedBuyQuoteEvent: MessageTypeDefinition
    PeerAcceptedSellQuote: MessageTypeDefinition
    PeerAcceptedSellQuoteEvent: MessageTypeDefinition
    QueryPeerAcceptedQuotesRequest: MessageTypeDefinition
    QueryPeerAcceptedQuotesResponse: MessageTypeDefinition
    QuoteRespStatus: EnumTypeDefinition
    RejectedQuoteResponse: MessageTypeDefinition
    Rfq: SubtypeConstructor<typeof grpc.Client, _rfqrpc_RfqClient> & { service: _rfqrpc_RfqDefinition }
    RfqEvent: MessageTypeDefinition
    SubscribeRfqEventNtfnsRequest: MessageTypeDefinition
  }
}

