import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  Addr,
  AddrReceivesRequestPartial,
  AddrReceivesResponse,
  BurnAssetRequestPartial,
  BurnAssetResponse,
  DebugLevelRequestPartial,
  DebugLevelResponse,
  DecodeAddrRequestPartial,
  DecodeProofRequestPartial,
  DecodeProofResponse,
  GetInfoRequestPartial,
  GetInfoResponse,
  ListAssetRequestPartial,
  ListAssetResponse,
  ListBalancesRequestPartial,
  ListBalancesResponse,
  ListGroupsRequestPartial,
  ListGroupsResponse,
  ListTransfersRequestPartial,
  ListTransfersResponse,
  ListUtxosRequestPartial,
  ListUtxosResponse,
  NewAddrRequestPartial,
  ProofFilePartial,
  QueryAddrRequestPartial,
  QueryAddrResponse,
  SendAssetRequestPartial,
  SendAssetResponse,
  StopRequestPartial,
  StopResponse,
  TaprootAssetsClient,
  VerifyProofResponse,
} from './types';
import { ProtoGrpcType } from './types/taprootassets';

/**
 * @TaprootAssetsApi API interface for Tap's daemon.
 */

export class TaprootAssetsApi {
  /**
   * @create Create a new TaprootAssetsApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'taprootassets.proto',
      options
    );

    return new TaprootAssetsApi(
      new proto.taprpc.TaprootAssets(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: TaprootAssetsClient;

  constructor(client: TaprootAssetsClient) {
    this.client = client;
  }

  /**
   * @listAssets ListAssets lists the set of assets owned by the target daemon.
   */

  async listAssets(
    request: ListAssetRequestPartial = {}
  ): Promise<ListAssetResponse> {
    return promisify(this.client.ListAssets.bind(this.client))(request);
  }

  /**
   * @listBalances ListBalances lists asset balances.
   */

  async listBalances(
    request: ListBalancesRequestPartial = {}
  ): Promise<ListBalancesResponse> {
    return promisify(this.client.ListBalances.bind(this.client))(request);
  }

  /**
   * @listGroups ListGroups lists the asset groups known to
   * the target daemon, and the assets held in each group.
   */

  async listGroups(
    request: ListGroupsRequestPartial = {}
  ): Promise<ListGroupsResponse> {
    return promisify(this.client.ListGroups.bind(this.client))(request);
  }

  /**
   * @listTransfers ListTransfers lists asset transfers.
   */

  async listTransfers(
    request: ListTransfersRequestPartial = {}
  ): Promise<ListTransfersResponse> {
    return promisify(this.client.ListTransfers.bind(this.client))(request);
  }

  /**
   * @listUtxos ListUtxos lists the UTXOs managed by the
   * target daemon, and the assets they hold.
   */

  async listUtxos(
    request: ListUtxosRequestPartial = {}
  ): Promise<ListUtxosResponse> {
    return promisify(this.client.ListUtxos.bind(this.client))(request);
  }

  /**
   * @stopDaemon StopDaemon will send a shutdown request to the interrupt handler,
   * triggering a graceful shutdown of the daemon.
   */

  async stopDaemon(request: StopRequestPartial = {}): Promise<StopResponse> {
    return promisify(this.client.StopDaemon.bind(this.client))(request);
  }

  /**
   * @debugLevel DebugLevel allows a caller to programmatically set the logging verbosity of
    tarod. The logging can be targeted according to a coarse daemon-wide logging
    level, or in a granular fashion to specify the logging for a target
    sub-system.
   */

  async debugLevel(
    request: DebugLevelRequestPartial = {}
  ): Promise<DebugLevelResponse> {
    return promisify(this.client.DebugLevel.bind(this.client))(request);
  }

  /**
   * @queryAddrs QueryAddrs queries the set of Taproot Asset addresses stored in the database.
   */

  async queryAddrs(
    request: QueryAddrRequestPartial = {}
  ): Promise<QueryAddrResponse> {
    return promisify(this.client.QueryAddrs.bind(this.client))(request);
  }

  /**
   * @newAddr NewAddr makes a new address from the set of request params.
   */

  async newAddr(request: NewAddrRequestPartial = {}): Promise<Addr> {
    return promisify(this.client.NewAddr.bind(this.client))(request);
  }

  /**
   * @decodeAddr DecodeAddr decode a Taproot Assets address into a partial asset message that
   * represents the asset it wants to receive.
   */

  async decodeAddr(request: DecodeAddrRequestPartial = {}): Promise<Addr> {
    return promisify(this.client.DecodeAddr.bind(this.client))(request);
  }

  /**
   * @addrReceives List all receives for incoming asset transfers for addresses
   * that were created previously.
   */

  async addrReceives(
    request: AddrReceivesRequestPartial = {}
  ): Promise<AddrReceivesResponse> {
    return promisify(this.client.AddrReceives.bind(this.client))(request);
  }

  /**
   * @verifyProof VerifyProof attempts to verify a given proof file that claims
   * to be anchored at the specified genesis point.
   */

  async verifyProof(
    request: ProofFilePartial = {}
  ): Promise<VerifyProofResponse> {
    return promisify(this.client.VerifyProof.bind(this.client))(request);
  }

  /**
   * @decodeProof attempts to decode a given proof file into human readable
   * format.
   */

  async decodeProof(
    request: DecodeProofRequestPartial = {}
  ): Promise<DecodeProofResponse> {
    return promisify(this.client.DecodeProof.bind(this.client))(request);
  }

  /**
   * @sendAsset SendAsset uses a passed taro address to attempt to complete an asset send.
   * The method returns information w.r.t the on chain send, as well as the
   * proof file information the receiver needs to fully receive the asset.
   */

  async sendAsset(
    request: SendAssetRequestPartial = {}
  ): Promise<SendAssetResponse> {
    return promisify(this.client.SendAsset.bind(this.client))(request);
  }

  /**
   * @burnAsset burns the given number of units of a given asset by sending them
   * to a provably un-spendable script key. Burning means irrevocably destroying
   * a certain number of assets, reducing the total supply of the asset. Because
   * burning is such a destructive and non-reversible operation, some specific
   * values need to be set in the request to avoid accidental burns.
   */

  async burnAsset(
    request: BurnAssetRequestPartial = {}
  ): Promise<BurnAssetResponse> {
    return promisify(this.client.BurnAsset.bind(this.client))(request);
  }

  /**
   * @getInfo returns the information for the node.
   */
  async getInfo(request: GetInfoRequestPartial = {}): Promise<GetInfoResponse> {
    return promisify(this.client.GetInfo.bind(this.client))(request);
  }
}
