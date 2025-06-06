import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaprootAssetsClient as _taprpc_TaprootAssetsClient, TaprootAssetsDefinition as _taprpc_TaprootAssetsDefinition } from './taprpc/TaprootAssets';

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
    AssetBurn: MessageTypeDefinition
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
    ChainHash: MessageTypeDefinition
    DebugLevelRequest: MessageTypeDefinition
    DebugLevelResponse: MessageTypeDefinition
    DecimalDisplay: MessageTypeDefinition
    DecodeAddrRequest: MessageTypeDefinition
    DecodeProofRequest: MessageTypeDefinition
    DecodeProofResponse: MessageTypeDefinition
    DecodedProof: MessageTypeDefinition
    ExportProofRequest: MessageTypeDefinition
    ExternalKey: MessageTypeDefinition
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
    ListBurnsRequest: MessageTypeDefinition
    ListBurnsResponse: MessageTypeDefinition
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
    ProofDeliveryStatus: EnumTypeDefinition
    ProofFile: MessageTypeDefinition
    QueryAddrRequest: MessageTypeDefinition
    QueryAddrResponse: MessageTypeDefinition
    ReceiveEvent: MessageTypeDefinition
    RegisterTransferRequest: MessageTypeDefinition
    RegisterTransferResponse: MessageTypeDefinition
    ScriptKey: MessageTypeDefinition
    ScriptKeyType: EnumTypeDefinition
    ScriptKeyTypeQuery: MessageTypeDefinition
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
    UnpackProofFileRequest: MessageTypeDefinition
    UnpackProofFileResponse: MessageTypeDefinition
    VerifyProofResponse: MessageTypeDefinition
  }
}

