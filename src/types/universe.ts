import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaprootAssetsClient as _taprpc_TaprootAssetsClient, TaprootAssetsDefinition as _taprpc_TaprootAssetsDefinition } from './taprpc/TaprootAssets';
import type { UniverseClient as _universerpc_UniverseClient, UniverseDefinition as _universerpc_UniverseDefinition } from './universerpc/Universe';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  taprpc: {
    Addr: MessageTypeDefinition
    AddrEvent: MessageTypeDefinition
    AddrEventStatus: EnumTypeDefinition
    AddrReceivesRequest: MessageTypeDefinition
    AddrReceivesResponse: MessageTypeDefinition
    AddrVersion: EnumTypeDefinition
    AnchorInfo: MessageTypeDefinition
    AnchorTransaction: MessageTypeDefinition
    Asset: MessageTypeDefinition
    AssetBalance: MessageTypeDefinition
    AssetGroup: MessageTypeDefinition
    AssetGroupBalance: MessageTypeDefinition
    AssetHumanReadable: MessageTypeDefinition
    AssetMeta: MessageTypeDefinition
    AssetMetaType: EnumTypeDefinition
    AssetTransfer: MessageTypeDefinition
    AssetType: EnumTypeDefinition
    AssetVersion: EnumTypeDefinition
    BurnAssetRequest: MessageTypeDefinition
    BurnAssetResponse: MessageTypeDefinition
    DebugLevelRequest: MessageTypeDefinition
    DebugLevelResponse: MessageTypeDefinition
    DecimalDisplay: MessageTypeDefinition
    DecodeAddrRequest: MessageTypeDefinition
    DecodeProofRequest: MessageTypeDefinition
    DecodeProofResponse: MessageTypeDefinition
    DecodedProof: MessageTypeDefinition
    ExportProofRequest: MessageTypeDefinition
    FetchAssetMetaRequest: MessageTypeDefinition
    GenesisInfo: MessageTypeDefinition
    GenesisReveal: MessageTypeDefinition
    GetInfoRequest: MessageTypeDefinition
    GetInfoResponse: MessageTypeDefinition
    GroupKeyRequest: MessageTypeDefinition
    GroupKeyReveal: MessageTypeDefinition
    GroupVirtualTx: MessageTypeDefinition
    GroupWitness: MessageTypeDefinition
    GroupedAssets: MessageTypeDefinition
    KeyDescriptor: MessageTypeDefinition
    KeyLocator: MessageTypeDefinition
    ListAssetRequest: MessageTypeDefinition
    ListAssetResponse: MessageTypeDefinition
    ListBalancesRequest: MessageTypeDefinition
    ListBalancesResponse: MessageTypeDefinition
    ListGroupsRequest: MessageTypeDefinition
    ListGroupsResponse: MessageTypeDefinition
    ListTransfersRequest: MessageTypeDefinition
    ListTransfersResponse: MessageTypeDefinition
    ListUtxosRequest: MessageTypeDefinition
    ListUtxosResponse: MessageTypeDefinition
    ManagedUtxo: MessageTypeDefinition
    NewAddrRequest: MessageTypeDefinition
    OutPoint: MessageTypeDefinition
    OutputType: EnumTypeDefinition
    ParcelType: EnumTypeDefinition
    PrevInputAsset: MessageTypeDefinition
    PrevWitness: MessageTypeDefinition
    ProofFile: MessageTypeDefinition
    QueryAddrRequest: MessageTypeDefinition
    QueryAddrResponse: MessageTypeDefinition
    ReceiveEvent: MessageTypeDefinition
    ScriptKey: MessageTypeDefinition
    SendAssetRequest: MessageTypeDefinition
    SendAssetResponse: MessageTypeDefinition
    SendEvent: MessageTypeDefinition
    SendState: EnumTypeDefinition
    SplitCommitment: MessageTypeDefinition
    StopRequest: MessageTypeDefinition
    StopResponse: MessageTypeDefinition
    SubscribeReceiveEventsRequest: MessageTypeDefinition
    SubscribeSendEventsRequest: MessageTypeDefinition
    TapBranch: MessageTypeDefinition
    TapLeaf: MessageTypeDefinition
    TaprootAssets: SubtypeConstructor<typeof grpc.Client, _taprpc_TaprootAssetsClient> & { service: _taprpc_TaprootAssetsDefinition }
    TapscriptFullTree: MessageTypeDefinition
    TransferInput: MessageTypeDefinition
    TransferOutput: MessageTypeDefinition
    TransferOutputAnchor: MessageTypeDefinition
    TxOut: MessageTypeDefinition
    VerifyProofResponse: MessageTypeDefinition
  }
  universerpc: {
    AddFederationServerRequest: MessageTypeDefinition
    AddFederationServerResponse: MessageTypeDefinition
    AssetFederationSyncConfig: MessageTypeDefinition
    AssetKey: MessageTypeDefinition
    AssetLeaf: MessageTypeDefinition
    AssetLeafKeyResponse: MessageTypeDefinition
    AssetLeafKeysRequest: MessageTypeDefinition
    AssetLeafResponse: MessageTypeDefinition
    AssetProof: MessageTypeDefinition
    AssetProofResponse: MessageTypeDefinition
    AssetQuerySort: EnumTypeDefinition
    AssetRootQuery: MessageTypeDefinition
    AssetRootRequest: MessageTypeDefinition
    AssetRootResponse: MessageTypeDefinition
    AssetStatsAsset: MessageTypeDefinition
    AssetStatsQuery: MessageTypeDefinition
    AssetStatsSnapshot: MessageTypeDefinition
    AssetTypeFilter: EnumTypeDefinition
    DeleteFederationServerRequest: MessageTypeDefinition
    DeleteFederationServerResponse: MessageTypeDefinition
    DeleteRootQuery: MessageTypeDefinition
    DeleteRootResponse: MessageTypeDefinition
    GlobalFederationSyncConfig: MessageTypeDefinition
    GroupedUniverseEvents: MessageTypeDefinition
    ID: MessageTypeDefinition
    InfoRequest: MessageTypeDefinition
    InfoResponse: MessageTypeDefinition
    ListFederationServersRequest: MessageTypeDefinition
    ListFederationServersResponse: MessageTypeDefinition
    MerkleSumNode: MessageTypeDefinition
    MultiverseRootRequest: MessageTypeDefinition
    MultiverseRootResponse: MessageTypeDefinition
    Outpoint: MessageTypeDefinition
    ProofType: EnumTypeDefinition
    QueryEventsRequest: MessageTypeDefinition
    QueryEventsResponse: MessageTypeDefinition
    QueryFederationSyncConfigRequest: MessageTypeDefinition
    QueryFederationSyncConfigResponse: MessageTypeDefinition
    QueryRootResponse: MessageTypeDefinition
    SetFederationSyncConfigRequest: MessageTypeDefinition
    SetFederationSyncConfigResponse: MessageTypeDefinition
    SortDirection: EnumTypeDefinition
    StatsRequest: MessageTypeDefinition
    StatsResponse: MessageTypeDefinition
    SyncRequest: MessageTypeDefinition
    SyncResponse: MessageTypeDefinition
    SyncTarget: MessageTypeDefinition
    SyncedUniverse: MessageTypeDefinition
    Universe: SubtypeConstructor<typeof grpc.Client, _universerpc_UniverseClient> & { service: _universerpc_UniverseDefinition }
    UniverseAssetStats: MessageTypeDefinition
    UniverseFederationServer: MessageTypeDefinition
    UniverseKey: MessageTypeDefinition
    UniverseRoot: MessageTypeDefinition
    UniverseSyncMode: EnumTypeDefinition
  }
}

