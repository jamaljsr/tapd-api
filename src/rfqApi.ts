import { ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  AddAssetBuyOfferRequestPartial,
  AddAssetBuyOfferResponse,
  AddAssetBuyOrderRequestPartial,
  AddAssetBuyOrderResponse,
  AddAssetSellOfferRequestPartial,
  AddAssetSellOfferResponse,
  AddAssetSellOrderRequestPartial,
  AddAssetSellOrderResponse,
  QueryPeerAcceptedQuotesRequestPartial,
  QueryPeerAcceptedQuotesResponse,
  RfqClient,
  RfqEvent,
  SubscribeRfqEventNtfnsRequestPartial,
} from './types';
import { ProtoGrpcType } from './types/rfq';

/**
 * @RfqApi API interface for tapd's Universe RPC sub-server.
 */

export class RfqApi {
  /**
   * @create Create a new RfqApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'rfqrpc/rfq.proto',
      options
    );

    return new RfqApi(
      new proto.rfqrpc.Rfq(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: RfqClient;

  constructor(client: RfqClient) {
    this.client = client;
  }

  /**
   * @addAssetBuyOrder is used to add a buy order for a specific asset. If a buy
   * order already exists for the asset, it will be updated.
   */
  async addAssetBuyOrder(
    request: AddAssetBuyOrderRequestPartial = {}
  ): Promise<AddAssetBuyOrderResponse> {
    return promisify(this.client.AddAssetBuyOrder.bind(this.client))(request);
  }

  /**
   * @addAssetSellOrder is used to add a sell order for a specific asset. If a
   * sell order already exists for the asset, it will be updated.
   */
  async addAssetSellOrder(
    request: AddAssetSellOrderRequestPartial = {}
  ): Promise<AddAssetSellOrderResponse> {
    return promisify(this.client.AddAssetSellOrder.bind(this.client))(request);
  }

  /**
   * @addAssetSellOffer is used to add a sell offer for a specific asset. If a
    sell offer already exists for the asset, it will be updated.
   */
  async addAssetSellOffer(
    request: AddAssetSellOfferRequestPartial = {}
  ): Promise<AddAssetSellOfferResponse> {
    return promisify(this.client.AddAssetSellOffer.bind(this.client))(request);
  }

  /**
   * @addAssetBuyOffer is used to add a buy offer for a specific asset. If a
   * buy offer already exists for the asset, it will be updated.
   *
   * A buy offer is used by the node to selectively accept or reject incoming
   * asset sell quote requests before price is considered.
   */
  async addAssetBuyOffer(
    request: AddAssetBuyOfferRequestPartial = {}
  ): Promise<AddAssetBuyOfferResponse> {
    return promisify(this.client.AddAssetBuyOffer.bind(this.client))(request);
  }

  /**
   * @queryPeerAcceptedQuotes is used to query for quotes that were requested by
   * our node and have been accepted our peers.
   */
  async queryPeerAcceptedQuotes(
    request: QueryPeerAcceptedQuotesRequestPartial = {}
  ): Promise<QueryPeerAcceptedQuotesResponse> {
    const call = this.subscribeRfqEventNtfns();
    return promisify(this.client.QueryPeerAcceptedQuotes.bind(this.client))(
      request
    );
  }

  /**
   * @subscribeRfqEventNtfns is used to subscribe to RFQ events.
   */
  subscribeRfqEventNtfns(
    request: SubscribeRfqEventNtfnsRequestPartial = {}
  ): ClientReadableStream<RfqEvent> {
    return this.client.SubscribeRfqEventNtfns(request);
  }
}
