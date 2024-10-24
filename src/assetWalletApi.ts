import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  AnchorVirtualPsbtsRequestPartial,
  AssetWalletClient,
  CommitVirtualPsbtsRequestPartial,
  CommitVirtualPsbtsResponse,
  FundVirtualPsbtRequestPartial,
  FundVirtualPsbtResponse,
  NextInternalKeyRequestPartial,
  NextInternalKeyResponse,
  NextScriptKeyRequestPartial,
  NextScriptKeyResponse,
  ProveAssetOwnershipRequestPartial,
  ProveAssetOwnershipResponse,
  PublishAndLogRequestPartial,
  QueryInternalKeyRequestPartial,
  QueryInternalKeyResponse,
  QueryScriptKeyRequestPartial,
  QueryScriptKeyResponse,
  RemoveUTXOLeaseRequestPartial,
  RemoveUTXOLeaseResponse,
  SendAssetResponse,
  SignVirtualPsbtRequestPartial,
  SignVirtualPsbtResponse,
  VerifyAssetOwnershipRequestPartial,
  VerifyAssetOwnershipResponse,
} from './types';
import { ProtoGrpcType } from './types/assetwallet';

/**
 * @AssetWalletApi API interface for tapd's AssetWallet RPC sub-server.
 */

export class AssetWalletApi {
  /**
   * @create Create a new AssetWalletApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'assetwalletrpc/assetwallet.proto',
      options
    );

    return new AssetWalletApi(
      new proto.assetwalletrpc.AssetWallet(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: AssetWalletClient;

  constructor(client: AssetWalletClient) {
    this.client = client;
  }

  /**
   * @fundVirtualPsbt FundVirtualPsbt selects inputs from the available asset commitments to fund
   * a virtual transaction matching the template.
   */
  async fundVirtualPsbt(
    request: FundVirtualPsbtRequestPartial = {}
  ): Promise<FundVirtualPsbtResponse> {
    return promisify(this.client.FundVirtualPsbt.bind(this.client))(request);
  }

  /**
   * @signVirtualPsbt SignVirtualPsbt signs the inputs of a virtual transaction and prepares the
   * commitments of the inputs and outputs.
   */
  async signVirtualPsbt(
    request: SignVirtualPsbtRequestPartial = {}
  ): Promise<SignVirtualPsbtResponse> {
    return promisify(this.client.SignVirtualPsbt.bind(this.client))(request);
  }

  /**
   * @anchorVirtualPsbts merges and then commits multiple virtual transactions in
   * a single BTC level anchor transaction. This RPC should be used if the BTC
   * level anchor transaction of the assets to be spent are encumbered by a
   * normal key and don't require any special spending conditions. For any custom
   * spending conditions on the BTC level, the two RPCs CommitVirtualPsbts and
   * PublishAndLogTransfer should be used instead (which in combination do the
   * same as this RPC but allow for more flexibility).
   */
  async anchorVirtualPsbts(
    request: AnchorVirtualPsbtsRequestPartial = {}
  ): Promise<SendAssetResponse> {
    return promisify(this.client.AnchorVirtualPsbts.bind(this.client))(request);
  }

  /**
   * @commitVirtualPsbts creates the output commitments and proofs for the given
   * virtual transactions by committing them to the BTC level anchor transaction.
   * In addition, the BTC level anchor transaction is funded and prepared up to
   * the point where it is ready to be signed.
   */
  async commitVirtualPsbts(
    request: CommitVirtualPsbtsRequestPartial = {}
  ): Promise<CommitVirtualPsbtsResponse> {
    return promisify(this.client.CommitVirtualPsbts.bind(this.client))(request);
  }

  /**
   * @publishAndLogTransfer accepts a fully committed and signed anchor
   * transaction and publishes it to the Bitcoin network. It also logs the
   * transfer of the given active and passive assets in the database and ships
   * any outgoing proofs to the counterparties.
   */
  async publishAndLogTransfer(
    request: PublishAndLogRequestPartial = {}
  ): Promise<SendAssetResponse> {
    return promisify(this.client.PublishAndLogTransfer.bind(this.client))(
      request
    );
  }

  /**
   * @nextInternalKey NextInternalKey derives the next internal key for the given key family and
   * stores it as an internal key in the database to make sure it is identified
   * as a local key later on when importing proofs. While an internal key can
   * also be used as the internal key of a script key, it is recommended to use
   * the NextScriptKey RPC instead, to make sure the tweaked Taproot output key
   * is also recognized as a local key.
   */
  async nextInternalKey(
    request: NextInternalKeyRequestPartial = {}
  ): Promise<NextInternalKeyResponse> {
    return promisify(this.client.NextInternalKey.bind(this.client))(request);
  }

  /**
   * @nextScriptKey NextScriptKey derives the next script key (and its corresponding internal
   * key) and stores them both in the database to make sure they are identified
   * as local keys later on when importing proofs.
   */
  async nextScriptKey(
    request: NextScriptKeyRequestPartial = {}
  ): Promise<NextScriptKeyResponse> {
    return promisify(this.client.NextScriptKey.bind(this.client))(request);
  }

  /**
   * @queryInternalKey returns the key descriptor for the given internal key.
   */
  async queryInternalKey(
    request: QueryInternalKeyRequestPartial = {}
  ): Promise<QueryInternalKeyResponse> {
    return promisify(this.client.QueryInternalKey.bind(this.client))(request);
  }

  /**
   * @queryScriptKey returns the full script key descriptor for the given tweaked
   * script key.
   */
  async queryScriptKey(
    request: QueryScriptKeyRequestPartial = {}
  ): Promise<QueryScriptKeyResponse> {
    return promisify(this.client.QueryScriptKey.bind(this.client))(request);
  }

  /**
   * @proveAssetOwnership creates an ownership proof embedded in an asset
   * transition proof. That ownership proof is a signed virtual transaction
   * spending the asset with a valid witness to prove the prover owns the keys
   * that can spend the asset.
   */
  async proveAssetOwnership(
    request: ProveAssetOwnershipRequestPartial = {}
  ): Promise<ProveAssetOwnershipResponse> {
    return promisify(this.client.ProveAssetOwnership.bind(this.client))(
      request
    );
  }

  /**
   * @verifyAssetOwnership verifies the asset ownership proof embedded in the
   * given transition proof of an asset and returns true if the proof is valid.
   */
  async verifyAssetOwnership(
    request: VerifyAssetOwnershipRequestPartial = {}
  ): Promise<VerifyAssetOwnershipResponse> {
    return promisify(this.client.VerifyAssetOwnership.bind(this.client))(
      request
    );
  }

  /**
   * @removeUTXOLease removes the lease/lock/reservation of the given managed
   * UTXO.
   */
  async removeUTXOLease(
    request: RemoveUTXOLeaseRequestPartial = {}
  ): Promise<RemoveUTXOLeaseResponse> {
    return promisify(this.client.RemoveUTXOLease.bind(this.client))(request);
  }
}
