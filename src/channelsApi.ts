import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  EncodeCustomRecordsRequestPartial,
  EncodeCustomRecordsResponse,
  FundChannelRequestPartial,
  FundChannelResponse,
  TaprootAssetChannelsClient,
} from './types';
import { ProtoGrpcType } from './types/tapchannel';

/**
 * @ChannelsApi API interface for Tap's daemon.
 */

export class ChannelsApi {
  /**
   * @create Create a new ChannelsApi instance.
   */
  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'tapchannel.proto',
      options
    );

    return new ChannelsApi(
      new proto.tapchannelrpc.TaprootAssetChannels(
        options.socket,
        credentials,
        params
      )
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */
  client: TaprootAssetChannelsClient;

  constructor(client: TaprootAssetChannelsClient) {
    this.client = client;
  }

  /**
   * @fundChannel initiates the channel funding negotiation with a peer for the
   * creation of a channel that contains a specified amount of a given asset.
   */
  async fundChannel(
    request: FundChannelRequestPartial = {}
  ): Promise<FundChannelResponse> {
    return promisify(this.client.FundChannel.bind(this.client))(request);
  }

  /**
   * @encodeCustomRecords allows RPC users to encode Taproot Asset channel related
   * data into the TLV format that is used in the custom records of the lnd
   * payment or other channel related RPCs. This RPC is completely stateless and
   * does not perform any checks on the data provided, other than pure format
   * validation.
   */
  async encodeCustomRecords(
    request: EncodeCustomRecordsRequestPartial = {}
  ): Promise<EncodeCustomRecordsResponse> {
    return promisify(this.client.EncodeCustomRecords.bind(this.client))(
      request
    );
  }
}
