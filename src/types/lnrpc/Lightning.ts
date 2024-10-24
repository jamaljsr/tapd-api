// Original file: protos/lightning.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AbandonChannelRequestPartial as _lnrpc_AbandonChannelRequestPartial, AbandonChannelRequest as _lnrpc_AbandonChannelRequest } from '../lnrpc/AbandonChannelRequest';
import type { AbandonChannelResponsePartial as _lnrpc_AbandonChannelResponsePartial, AbandonChannelResponse as _lnrpc_AbandonChannelResponse } from '../lnrpc/AbandonChannelResponse';
import type { AddInvoiceResponsePartial as _lnrpc_AddInvoiceResponsePartial, AddInvoiceResponse as _lnrpc_AddInvoiceResponse } from '../lnrpc/AddInvoiceResponse';
import type { BakeMacaroonRequestPartial as _lnrpc_BakeMacaroonRequestPartial, BakeMacaroonRequest as _lnrpc_BakeMacaroonRequest } from '../lnrpc/BakeMacaroonRequest';
import type { BakeMacaroonResponsePartial as _lnrpc_BakeMacaroonResponsePartial, BakeMacaroonResponse as _lnrpc_BakeMacaroonResponse } from '../lnrpc/BakeMacaroonResponse';
import type { BatchOpenChannelRequestPartial as _lnrpc_BatchOpenChannelRequestPartial, BatchOpenChannelRequest as _lnrpc_BatchOpenChannelRequest } from '../lnrpc/BatchOpenChannelRequest';
import type { BatchOpenChannelResponsePartial as _lnrpc_BatchOpenChannelResponsePartial, BatchOpenChannelResponse as _lnrpc_BatchOpenChannelResponse } from '../lnrpc/BatchOpenChannelResponse';
import type { ChanBackupExportRequestPartial as _lnrpc_ChanBackupExportRequestPartial, ChanBackupExportRequest as _lnrpc_ChanBackupExportRequest } from '../lnrpc/ChanBackupExportRequest';
import type { ChanBackupSnapshotPartial as _lnrpc_ChanBackupSnapshotPartial, ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot } from '../lnrpc/ChanBackupSnapshot';
import type { ChanInfoRequestPartial as _lnrpc_ChanInfoRequestPartial, ChanInfoRequest as _lnrpc_ChanInfoRequest } from '../lnrpc/ChanInfoRequest';
import type { ChannelAcceptRequestPartial as _lnrpc_ChannelAcceptRequestPartial, ChannelAcceptRequest as _lnrpc_ChannelAcceptRequest } from '../lnrpc/ChannelAcceptRequest';
import type { ChannelAcceptResponsePartial as _lnrpc_ChannelAcceptResponsePartial, ChannelAcceptResponse as _lnrpc_ChannelAcceptResponse } from '../lnrpc/ChannelAcceptResponse';
import type { ChannelBackupPartial as _lnrpc_ChannelBackupPartial, ChannelBackup as _lnrpc_ChannelBackup } from '../lnrpc/ChannelBackup';
import type { ChannelBackupSubscriptionPartial as _lnrpc_ChannelBackupSubscriptionPartial, ChannelBackupSubscription as _lnrpc_ChannelBackupSubscription } from '../lnrpc/ChannelBackupSubscription';
import type { ChannelBalanceRequestPartial as _lnrpc_ChannelBalanceRequestPartial, ChannelBalanceRequest as _lnrpc_ChannelBalanceRequest } from '../lnrpc/ChannelBalanceRequest';
import type { ChannelBalanceResponsePartial as _lnrpc_ChannelBalanceResponsePartial, ChannelBalanceResponse as _lnrpc_ChannelBalanceResponse } from '../lnrpc/ChannelBalanceResponse';
import type { ChannelEdgePartial as _lnrpc_ChannelEdgePartial, ChannelEdge as _lnrpc_ChannelEdge } from '../lnrpc/ChannelEdge';
import type { ChannelEventSubscriptionPartial as _lnrpc_ChannelEventSubscriptionPartial, ChannelEventSubscription as _lnrpc_ChannelEventSubscription } from '../lnrpc/ChannelEventSubscription';
import type { ChannelEventUpdatePartial as _lnrpc_ChannelEventUpdatePartial, ChannelEventUpdate as _lnrpc_ChannelEventUpdate } from '../lnrpc/ChannelEventUpdate';
import type { ChannelGraphPartial as _lnrpc_ChannelGraphPartial, ChannelGraph as _lnrpc_ChannelGraph } from '../lnrpc/ChannelGraph';
import type { ChannelGraphRequestPartial as _lnrpc_ChannelGraphRequestPartial, ChannelGraphRequest as _lnrpc_ChannelGraphRequest } from '../lnrpc/ChannelGraphRequest';
import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { CheckMacPermRequestPartial as _lnrpc_CheckMacPermRequestPartial, CheckMacPermRequest as _lnrpc_CheckMacPermRequest } from '../lnrpc/CheckMacPermRequest';
import type { CheckMacPermResponsePartial as _lnrpc_CheckMacPermResponsePartial, CheckMacPermResponse as _lnrpc_CheckMacPermResponse } from '../lnrpc/CheckMacPermResponse';
import type { CloseChannelRequestPartial as _lnrpc_CloseChannelRequestPartial, CloseChannelRequest as _lnrpc_CloseChannelRequest } from '../lnrpc/CloseChannelRequest';
import type { CloseStatusUpdatePartial as _lnrpc_CloseStatusUpdatePartial, CloseStatusUpdate as _lnrpc_CloseStatusUpdate } from '../lnrpc/CloseStatusUpdate';
import type { ClosedChannelsRequestPartial as _lnrpc_ClosedChannelsRequestPartial, ClosedChannelsRequest as _lnrpc_ClosedChannelsRequest } from '../lnrpc/ClosedChannelsRequest';
import type { ClosedChannelsResponsePartial as _lnrpc_ClosedChannelsResponsePartial, ClosedChannelsResponse as _lnrpc_ClosedChannelsResponse } from '../lnrpc/ClosedChannelsResponse';
import type { ConnectPeerRequestPartial as _lnrpc_ConnectPeerRequestPartial, ConnectPeerRequest as _lnrpc_ConnectPeerRequest } from '../lnrpc/ConnectPeerRequest';
import type { ConnectPeerResponsePartial as _lnrpc_ConnectPeerResponsePartial, ConnectPeerResponse as _lnrpc_ConnectPeerResponse } from '../lnrpc/ConnectPeerResponse';
import type { CustomMessagePartial as _lnrpc_CustomMessagePartial, CustomMessage as _lnrpc_CustomMessage } from '../lnrpc/CustomMessage';
import type { DebugLevelRequestPartial as _lnrpc_DebugLevelRequestPartial, DebugLevelRequest as _lnrpc_DebugLevelRequest } from '../lnrpc/DebugLevelRequest';
import type { DebugLevelResponsePartial as _lnrpc_DebugLevelResponsePartial, DebugLevelResponse as _lnrpc_DebugLevelResponse } from '../lnrpc/DebugLevelResponse';
import type { DeleteAllPaymentsRequestPartial as _lnrpc_DeleteAllPaymentsRequestPartial, DeleteAllPaymentsRequest as _lnrpc_DeleteAllPaymentsRequest } from '../lnrpc/DeleteAllPaymentsRequest';
import type { DeleteAllPaymentsResponsePartial as _lnrpc_DeleteAllPaymentsResponsePartial, DeleteAllPaymentsResponse as _lnrpc_DeleteAllPaymentsResponse } from '../lnrpc/DeleteAllPaymentsResponse';
import type { DeleteMacaroonIDRequestPartial as _lnrpc_DeleteMacaroonIDRequestPartial, DeleteMacaroonIDRequest as _lnrpc_DeleteMacaroonIDRequest } from '../lnrpc/DeleteMacaroonIDRequest';
import type { DeleteMacaroonIDResponsePartial as _lnrpc_DeleteMacaroonIDResponsePartial, DeleteMacaroonIDResponse as _lnrpc_DeleteMacaroonIDResponse } from '../lnrpc/DeleteMacaroonIDResponse';
import type { DeletePaymentRequestPartial as _lnrpc_DeletePaymentRequestPartial, DeletePaymentRequest as _lnrpc_DeletePaymentRequest } from '../lnrpc/DeletePaymentRequest';
import type { DeletePaymentResponsePartial as _lnrpc_DeletePaymentResponsePartial, DeletePaymentResponse as _lnrpc_DeletePaymentResponse } from '../lnrpc/DeletePaymentResponse';
import type { DisconnectPeerRequestPartial as _lnrpc_DisconnectPeerRequestPartial, DisconnectPeerRequest as _lnrpc_DisconnectPeerRequest } from '../lnrpc/DisconnectPeerRequest';
import type { DisconnectPeerResponsePartial as _lnrpc_DisconnectPeerResponsePartial, DisconnectPeerResponse as _lnrpc_DisconnectPeerResponse } from '../lnrpc/DisconnectPeerResponse';
import type { EstimateFeeRequestPartial as _lnrpc_EstimateFeeRequestPartial, EstimateFeeRequest as _lnrpc_EstimateFeeRequest } from '../lnrpc/EstimateFeeRequest';
import type { EstimateFeeResponsePartial as _lnrpc_EstimateFeeResponsePartial, EstimateFeeResponse as _lnrpc_EstimateFeeResponse } from '../lnrpc/EstimateFeeResponse';
import type { ExportChannelBackupRequestPartial as _lnrpc_ExportChannelBackupRequestPartial, ExportChannelBackupRequest as _lnrpc_ExportChannelBackupRequest } from '../lnrpc/ExportChannelBackupRequest';
import type { FeeReportRequestPartial as _lnrpc_FeeReportRequestPartial, FeeReportRequest as _lnrpc_FeeReportRequest } from '../lnrpc/FeeReportRequest';
import type { FeeReportResponsePartial as _lnrpc_FeeReportResponsePartial, FeeReportResponse as _lnrpc_FeeReportResponse } from '../lnrpc/FeeReportResponse';
import type { ForwardingHistoryRequestPartial as _lnrpc_ForwardingHistoryRequestPartial, ForwardingHistoryRequest as _lnrpc_ForwardingHistoryRequest } from '../lnrpc/ForwardingHistoryRequest';
import type { ForwardingHistoryResponsePartial as _lnrpc_ForwardingHistoryResponsePartial, ForwardingHistoryResponse as _lnrpc_ForwardingHistoryResponse } from '../lnrpc/ForwardingHistoryResponse';
import type { FundingStateStepRespPartial as _lnrpc_FundingStateStepRespPartial, FundingStateStepResp as _lnrpc_FundingStateStepResp } from '../lnrpc/FundingStateStepResp';
import type { FundingTransitionMsgPartial as _lnrpc_FundingTransitionMsgPartial, FundingTransitionMsg as _lnrpc_FundingTransitionMsg } from '../lnrpc/FundingTransitionMsg';
import type { GetDebugInfoRequestPartial as _lnrpc_GetDebugInfoRequestPartial, GetDebugInfoRequest as _lnrpc_GetDebugInfoRequest } from '../lnrpc/GetDebugInfoRequest';
import type { GetDebugInfoResponsePartial as _lnrpc_GetDebugInfoResponsePartial, GetDebugInfoResponse as _lnrpc_GetDebugInfoResponse } from '../lnrpc/GetDebugInfoResponse';
import type { GetInfoRequestPartial as _lnrpc_GetInfoRequestPartial, GetInfoRequest as _lnrpc_GetInfoRequest } from '../lnrpc/GetInfoRequest';
import type { GetInfoResponsePartial as _lnrpc_GetInfoResponsePartial, GetInfoResponse as _lnrpc_GetInfoResponse } from '../lnrpc/GetInfoResponse';
import type { GetRecoveryInfoRequestPartial as _lnrpc_GetRecoveryInfoRequestPartial, GetRecoveryInfoRequest as _lnrpc_GetRecoveryInfoRequest } from '../lnrpc/GetRecoveryInfoRequest';
import type { GetRecoveryInfoResponsePartial as _lnrpc_GetRecoveryInfoResponsePartial, GetRecoveryInfoResponse as _lnrpc_GetRecoveryInfoResponse } from '../lnrpc/GetRecoveryInfoResponse';
import type { GetTransactionsRequestPartial as _lnrpc_GetTransactionsRequestPartial, GetTransactionsRequest as _lnrpc_GetTransactionsRequest } from '../lnrpc/GetTransactionsRequest';
import type { GraphTopologySubscriptionPartial as _lnrpc_GraphTopologySubscriptionPartial, GraphTopologySubscription as _lnrpc_GraphTopologySubscription } from '../lnrpc/GraphTopologySubscription';
import type { GraphTopologyUpdatePartial as _lnrpc_GraphTopologyUpdatePartial, GraphTopologyUpdate as _lnrpc_GraphTopologyUpdate } from '../lnrpc/GraphTopologyUpdate';
import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { InvoiceSubscriptionPartial as _lnrpc_InvoiceSubscriptionPartial, InvoiceSubscription as _lnrpc_InvoiceSubscription } from '../lnrpc/InvoiceSubscription';
import type { ListAliasesRequestPartial as _lnrpc_ListAliasesRequestPartial, ListAliasesRequest as _lnrpc_ListAliasesRequest } from '../lnrpc/ListAliasesRequest';
import type { ListAliasesResponsePartial as _lnrpc_ListAliasesResponsePartial, ListAliasesResponse as _lnrpc_ListAliasesResponse } from '../lnrpc/ListAliasesResponse';
import type { ListChannelsRequestPartial as _lnrpc_ListChannelsRequestPartial, ListChannelsRequest as _lnrpc_ListChannelsRequest } from '../lnrpc/ListChannelsRequest';
import type { ListChannelsResponsePartial as _lnrpc_ListChannelsResponsePartial, ListChannelsResponse as _lnrpc_ListChannelsResponse } from '../lnrpc/ListChannelsResponse';
import type { ListInvoiceRequestPartial as _lnrpc_ListInvoiceRequestPartial, ListInvoiceRequest as _lnrpc_ListInvoiceRequest } from '../lnrpc/ListInvoiceRequest';
import type { ListInvoiceResponsePartial as _lnrpc_ListInvoiceResponsePartial, ListInvoiceResponse as _lnrpc_ListInvoiceResponse } from '../lnrpc/ListInvoiceResponse';
import type { ListMacaroonIDsRequestPartial as _lnrpc_ListMacaroonIDsRequestPartial, ListMacaroonIDsRequest as _lnrpc_ListMacaroonIDsRequest } from '../lnrpc/ListMacaroonIDsRequest';
import type { ListMacaroonIDsResponsePartial as _lnrpc_ListMacaroonIDsResponsePartial, ListMacaroonIDsResponse as _lnrpc_ListMacaroonIDsResponse } from '../lnrpc/ListMacaroonIDsResponse';
import type { ListPaymentsRequestPartial as _lnrpc_ListPaymentsRequestPartial, ListPaymentsRequest as _lnrpc_ListPaymentsRequest } from '../lnrpc/ListPaymentsRequest';
import type { ListPaymentsResponsePartial as _lnrpc_ListPaymentsResponsePartial, ListPaymentsResponse as _lnrpc_ListPaymentsResponse } from '../lnrpc/ListPaymentsResponse';
import type { ListPeersRequestPartial as _lnrpc_ListPeersRequestPartial, ListPeersRequest as _lnrpc_ListPeersRequest } from '../lnrpc/ListPeersRequest';
import type { ListPeersResponsePartial as _lnrpc_ListPeersResponsePartial, ListPeersResponse as _lnrpc_ListPeersResponse } from '../lnrpc/ListPeersResponse';
import type { ListPermissionsRequestPartial as _lnrpc_ListPermissionsRequestPartial, ListPermissionsRequest as _lnrpc_ListPermissionsRequest } from '../lnrpc/ListPermissionsRequest';
import type { ListPermissionsResponsePartial as _lnrpc_ListPermissionsResponsePartial, ListPermissionsResponse as _lnrpc_ListPermissionsResponse } from '../lnrpc/ListPermissionsResponse';
import type { ListUnspentRequestPartial as _lnrpc_ListUnspentRequestPartial, ListUnspentRequest as _lnrpc_ListUnspentRequest } from '../lnrpc/ListUnspentRequest';
import type { ListUnspentResponsePartial as _lnrpc_ListUnspentResponsePartial, ListUnspentResponse as _lnrpc_ListUnspentResponse } from '../lnrpc/ListUnspentResponse';
import type { LookupHtlcResolutionRequestPartial as _lnrpc_LookupHtlcResolutionRequestPartial, LookupHtlcResolutionRequest as _lnrpc_LookupHtlcResolutionRequest } from '../lnrpc/LookupHtlcResolutionRequest';
import type { LookupHtlcResolutionResponsePartial as _lnrpc_LookupHtlcResolutionResponsePartial, LookupHtlcResolutionResponse as _lnrpc_LookupHtlcResolutionResponse } from '../lnrpc/LookupHtlcResolutionResponse';
import type { NetworkInfoPartial as _lnrpc_NetworkInfoPartial, NetworkInfo as _lnrpc_NetworkInfo } from '../lnrpc/NetworkInfo';
import type { NetworkInfoRequestPartial as _lnrpc_NetworkInfoRequestPartial, NetworkInfoRequest as _lnrpc_NetworkInfoRequest } from '../lnrpc/NetworkInfoRequest';
import type { NewAddressRequestPartial as _lnrpc_NewAddressRequestPartial, NewAddressRequest as _lnrpc_NewAddressRequest } from '../lnrpc/NewAddressRequest';
import type { NewAddressResponsePartial as _lnrpc_NewAddressResponsePartial, NewAddressResponse as _lnrpc_NewAddressResponse } from '../lnrpc/NewAddressResponse';
import type { NodeInfoPartial as _lnrpc_NodeInfoPartial, NodeInfo as _lnrpc_NodeInfo } from '../lnrpc/NodeInfo';
import type { NodeInfoRequestPartial as _lnrpc_NodeInfoRequestPartial, NodeInfoRequest as _lnrpc_NodeInfoRequest } from '../lnrpc/NodeInfoRequest';
import type { NodeMetricsRequestPartial as _lnrpc_NodeMetricsRequestPartial, NodeMetricsRequest as _lnrpc_NodeMetricsRequest } from '../lnrpc/NodeMetricsRequest';
import type { NodeMetricsResponsePartial as _lnrpc_NodeMetricsResponsePartial, NodeMetricsResponse as _lnrpc_NodeMetricsResponse } from '../lnrpc/NodeMetricsResponse';
import type { OpenChannelRequestPartial as _lnrpc_OpenChannelRequestPartial, OpenChannelRequest as _lnrpc_OpenChannelRequest } from '../lnrpc/OpenChannelRequest';
import type { OpenStatusUpdatePartial as _lnrpc_OpenStatusUpdatePartial, OpenStatusUpdate as _lnrpc_OpenStatusUpdate } from '../lnrpc/OpenStatusUpdate';
import type { PayReqPartial as _lnrpc_PayReqPartial, PayReq as _lnrpc_PayReq } from '../lnrpc/PayReq';
import type { PayReqStringPartial as _lnrpc_PayReqStringPartial, PayReqString as _lnrpc_PayReqString } from '../lnrpc/PayReqString';
import type { PaymentHashPartial as _lnrpc_PaymentHashPartial, PaymentHash as _lnrpc_PaymentHash } from '../lnrpc/PaymentHash';
import type { PeerEventPartial as _lnrpc_PeerEventPartial, PeerEvent as _lnrpc_PeerEvent } from '../lnrpc/PeerEvent';
import type { PeerEventSubscriptionPartial as _lnrpc_PeerEventSubscriptionPartial, PeerEventSubscription as _lnrpc_PeerEventSubscription } from '../lnrpc/PeerEventSubscription';
import type { PendingChannelsRequestPartial as _lnrpc_PendingChannelsRequestPartial, PendingChannelsRequest as _lnrpc_PendingChannelsRequest } from '../lnrpc/PendingChannelsRequest';
import type { PendingChannelsResponsePartial as _lnrpc_PendingChannelsResponsePartial, PendingChannelsResponse as _lnrpc_PendingChannelsResponse } from '../lnrpc/PendingChannelsResponse';
import type { PolicyUpdateRequestPartial as _lnrpc_PolicyUpdateRequestPartial, PolicyUpdateRequest as _lnrpc_PolicyUpdateRequest } from '../lnrpc/PolicyUpdateRequest';
import type { PolicyUpdateResponsePartial as _lnrpc_PolicyUpdateResponsePartial, PolicyUpdateResponse as _lnrpc_PolicyUpdateResponse } from '../lnrpc/PolicyUpdateResponse';
import type { QueryRoutesRequestPartial as _lnrpc_QueryRoutesRequestPartial, QueryRoutesRequest as _lnrpc_QueryRoutesRequest } from '../lnrpc/QueryRoutesRequest';
import type { QueryRoutesResponsePartial as _lnrpc_QueryRoutesResponsePartial, QueryRoutesResponse as _lnrpc_QueryRoutesResponse } from '../lnrpc/QueryRoutesResponse';
import type { RPCMiddlewareRequestPartial as _lnrpc_RPCMiddlewareRequestPartial, RPCMiddlewareRequest as _lnrpc_RPCMiddlewareRequest } from '../lnrpc/RPCMiddlewareRequest';
import type { RPCMiddlewareResponsePartial as _lnrpc_RPCMiddlewareResponsePartial, RPCMiddlewareResponse as _lnrpc_RPCMiddlewareResponse } from '../lnrpc/RPCMiddlewareResponse';
import type { RestoreBackupResponsePartial as _lnrpc_RestoreBackupResponsePartial, RestoreBackupResponse as _lnrpc_RestoreBackupResponse } from '../lnrpc/RestoreBackupResponse';
import type { RestoreChanBackupRequestPartial as _lnrpc_RestoreChanBackupRequestPartial, RestoreChanBackupRequest as _lnrpc_RestoreChanBackupRequest } from '../lnrpc/RestoreChanBackupRequest';
import type { SendCoinsRequestPartial as _lnrpc_SendCoinsRequestPartial, SendCoinsRequest as _lnrpc_SendCoinsRequest } from '../lnrpc/SendCoinsRequest';
import type { SendCoinsResponsePartial as _lnrpc_SendCoinsResponsePartial, SendCoinsResponse as _lnrpc_SendCoinsResponse } from '../lnrpc/SendCoinsResponse';
import type { SendCustomMessageRequestPartial as _lnrpc_SendCustomMessageRequestPartial, SendCustomMessageRequest as _lnrpc_SendCustomMessageRequest } from '../lnrpc/SendCustomMessageRequest';
import type { SendCustomMessageResponsePartial as _lnrpc_SendCustomMessageResponsePartial, SendCustomMessageResponse as _lnrpc_SendCustomMessageResponse } from '../lnrpc/SendCustomMessageResponse';
import type { SendManyRequestPartial as _lnrpc_SendManyRequestPartial, SendManyRequest as _lnrpc_SendManyRequest } from '../lnrpc/SendManyRequest';
import type { SendManyResponsePartial as _lnrpc_SendManyResponsePartial, SendManyResponse as _lnrpc_SendManyResponse } from '../lnrpc/SendManyResponse';
import type { SendRequestPartial as _lnrpc_SendRequestPartial, SendRequest as _lnrpc_SendRequest } from '../lnrpc/SendRequest';
import type { SendResponsePartial as _lnrpc_SendResponsePartial, SendResponse as _lnrpc_SendResponse } from '../lnrpc/SendResponse';
import type { SendToRouteRequestPartial as _lnrpc_SendToRouteRequestPartial, SendToRouteRequest as _lnrpc_SendToRouteRequest } from '../lnrpc/SendToRouteRequest';
import type { SignMessageRequestPartial as _lnrpc_SignMessageRequestPartial, SignMessageRequest as _lnrpc_SignMessageRequest } from '../lnrpc/SignMessageRequest';
import type { SignMessageResponsePartial as _lnrpc_SignMessageResponsePartial, SignMessageResponse as _lnrpc_SignMessageResponse } from '../lnrpc/SignMessageResponse';
import type { StopRequestPartial as _lnrpc_StopRequestPartial, StopRequest as _lnrpc_StopRequest } from '../lnrpc/StopRequest';
import type { StopResponsePartial as _lnrpc_StopResponsePartial, StopResponse as _lnrpc_StopResponse } from '../lnrpc/StopResponse';
import type { SubscribeCustomMessagesRequestPartial as _lnrpc_SubscribeCustomMessagesRequestPartial, SubscribeCustomMessagesRequest as _lnrpc_SubscribeCustomMessagesRequest } from '../lnrpc/SubscribeCustomMessagesRequest';
import type { TransactionPartial as _lnrpc_TransactionPartial, Transaction as _lnrpc_Transaction } from '../lnrpc/Transaction';
import type { TransactionDetailsPartial as _lnrpc_TransactionDetailsPartial, TransactionDetails as _lnrpc_TransactionDetails } from '../lnrpc/TransactionDetails';
import type { VerifyChanBackupResponsePartial as _lnrpc_VerifyChanBackupResponsePartial, VerifyChanBackupResponse as _lnrpc_VerifyChanBackupResponse } from '../lnrpc/VerifyChanBackupResponse';
import type { VerifyMessageRequestPartial as _lnrpc_VerifyMessageRequestPartial, VerifyMessageRequest as _lnrpc_VerifyMessageRequest } from '../lnrpc/VerifyMessageRequest';
import type { VerifyMessageResponsePartial as _lnrpc_VerifyMessageResponsePartial, VerifyMessageResponse as _lnrpc_VerifyMessageResponse } from '../lnrpc/VerifyMessageResponse';
import type { WalletBalanceRequestPartial as _lnrpc_WalletBalanceRequestPartial, WalletBalanceRequest as _lnrpc_WalletBalanceRequest } from '../lnrpc/WalletBalanceRequest';
import type { WalletBalanceResponsePartial as _lnrpc_WalletBalanceResponsePartial, WalletBalanceResponse as _lnrpc_WalletBalanceResponse } from '../lnrpc/WalletBalanceResponse';

export interface LightningClient extends grpc.Client {
  AbandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_AbandonChannelResponse>): grpc.ClientUnaryCall;
  
  AddInvoice(argument: _lnrpc_InvoicePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_InvoicePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_InvoicePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_InvoicePartial, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_InvoicePartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_InvoicePartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_InvoicePartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_InvoicePartial, callback: grpc.requestCallback<_lnrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequestPartial, callback: grpc.requestCallback<_lnrpc_BakeMacaroonResponse>): grpc.ClientUnaryCall;
  
  BatchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  BatchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  BatchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  BatchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  batchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  batchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  batchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  batchOpenChannel(argument: _lnrpc_BatchOpenChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_BatchOpenChannelResponse>): grpc.ClientUnaryCall;
  
  ChannelAcceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponsePartial, _lnrpc_ChannelAcceptRequest>;
  ChannelAcceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponsePartial, _lnrpc_ChannelAcceptRequest>;
  channelAcceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponsePartial, _lnrpc_ChannelAcceptRequest>;
  channelAcceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponsePartial, _lnrpc_ChannelAcceptRequest>;
  
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelBalanceResponse>): grpc.ClientUnaryCall;
  
  CheckMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  CheckMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  CheckMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  CheckMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  checkMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  checkMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  checkMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  checkMacaroonPermissions(argument: _lnrpc_CheckMacPermRequestPartial, callback: grpc.requestCallback<_lnrpc_CheckMacPermResponse>): grpc.ClientUnaryCall;
  
  CloseChannel(argument: _lnrpc_CloseChannelRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate>;
  CloseChannel(argument: _lnrpc_CloseChannelRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate>;
  closeChannel(argument: _lnrpc_CloseChannelRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate>;
  closeChannel(argument: _lnrpc_CloseChannelRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate>;
  
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_ClosedChannelsResponse>): grpc.ClientUnaryCall;
  
  ConnectPeer(argument: _lnrpc_ConnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequestPartial, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequestPartial, callback: grpc.requestCallback<_lnrpc_ConnectPeerResponse>): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _lnrpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequestPartial, callback: grpc.requestCallback<_lnrpc_DebugLevelResponse>): grpc.ClientUnaryCall;
  
  DecodePayReq(argument: _lnrpc_PayReqStringPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqStringPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqStringPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqStringPartial, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqStringPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqStringPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqStringPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqStringPartial, callback: grpc.requestCallback<_lnrpc_PayReq>): grpc.ClientUnaryCall;
  
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequestPartial, callback: grpc.requestCallback<_lnrpc_DeleteAllPaymentsResponse>): grpc.ClientUnaryCall;
  
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequestPartial, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequestPartial, callback: grpc.requestCallback<_lnrpc_DeleteMacaroonIDResponse>): grpc.ClientUnaryCall;
  
  DeletePayment(argument: _lnrpc_DeletePaymentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  DeletePayment(argument: _lnrpc_DeletePaymentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  DeletePayment(argument: _lnrpc_DeletePaymentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  DeletePayment(argument: _lnrpc_DeletePaymentRequestPartial, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  deletePayment(argument: _lnrpc_DeletePaymentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  deletePayment(argument: _lnrpc_DeletePaymentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  deletePayment(argument: _lnrpc_DeletePaymentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  deletePayment(argument: _lnrpc_DeletePaymentRequestPartial, callback: grpc.requestCallback<_lnrpc_DeletePaymentResponse>): grpc.ClientUnaryCall;
  
  DescribeGraph(argument: _lnrpc_ChannelGraphRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelGraph>): grpc.ClientUnaryCall;
  
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequestPartial, callback: grpc.requestCallback<_lnrpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  
  EstimateFee(argument: _lnrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequestPartial, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequestPartial, callback: grpc.requestCallback<_lnrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequestPartial, callback: grpc.requestCallback<_lnrpc_ChanBackupSnapshot>): grpc.ClientUnaryCall;
  
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelBackup>): grpc.ClientUnaryCall;
  
  FeeReport(argument: _lnrpc_FeeReportRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequestPartial, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequestPartial, callback: grpc.requestCallback<_lnrpc_FeeReportResponse>): grpc.ClientUnaryCall;
  
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequestPartial, callback: grpc.requestCallback<_lnrpc_ForwardingHistoryResponse>): grpc.ClientUnaryCall;
  
  FundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsgPartial, callback: grpc.requestCallback<_lnrpc_FundingStateStepResp>): grpc.ClientUnaryCall;
  
  GetChanInfo(argument: _lnrpc_ChanInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelEdge>): grpc.ClientUnaryCall;
  
  GetDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  GetDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  GetDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  GetDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  getDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  getDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  getDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  getDebugInfo(argument: _lnrpc_GetDebugInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetDebugInfoResponse>): grpc.ClientUnaryCall;
  
  GetInfo(argument: _lnrpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_NetworkInfo>): grpc.ClientUnaryCall;
  
  GetNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_NodeInfo>): grpc.ClientUnaryCall;
  
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequestPartial, callback: grpc.requestCallback<_lnrpc_NodeMetricsResponse>): grpc.ClientUnaryCall;
  
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequestPartial, callback: grpc.requestCallback<_lnrpc_GetRecoveryInfoResponse>): grpc.ClientUnaryCall;
  
  GetTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequestPartial, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequestPartial, callback: grpc.requestCallback<_lnrpc_TransactionDetails>): grpc.ClientUnaryCall;
  
  ListAliases(argument: _lnrpc_ListAliasesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  ListAliases(argument: _lnrpc_ListAliasesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  ListAliases(argument: _lnrpc_ListAliasesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  ListAliases(argument: _lnrpc_ListAliasesRequestPartial, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  listAliases(argument: _lnrpc_ListAliasesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  listAliases(argument: _lnrpc_ListAliasesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  listAliases(argument: _lnrpc_ListAliasesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  listAliases(argument: _lnrpc_ListAliasesRequestPartial, callback: grpc.requestCallback<_lnrpc_ListAliasesResponse>): grpc.ClientUnaryCall;
  
  ListChannels(argument: _lnrpc_ListChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListChannelsResponse>): grpc.ClientUnaryCall;
  
  ListInvoices(argument: _lnrpc_ListInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequestPartial, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequestPartial, callback: grpc.requestCallback<_lnrpc_ListInvoiceResponse>): grpc.ClientUnaryCall;
  
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListMacaroonIDsResponse>): grpc.ClientUnaryCall;
  
  ListPayments(argument: _lnrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  
  ListPeers(argument: _lnrpc_ListPeersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPeersResponse>): grpc.ClientUnaryCall;
  
  ListPermissions(argument: _lnrpc_ListPermissionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequestPartial, callback: grpc.requestCallback<_lnrpc_ListPermissionsResponse>): grpc.ClientUnaryCall;
  
  ListUnspent(argument: _lnrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequestPartial, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequestPartial, callback: grpc.requestCallback<_lnrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  
  LookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  LookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  LookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  LookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  lookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  lookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  lookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  lookupHtlcResolution(argument: _lnrpc_LookupHtlcResolutionRequestPartial, callback: grpc.requestCallback<_lnrpc_LookupHtlcResolutionResponse>): grpc.ClientUnaryCall;
  
  LookupInvoice(argument: _lnrpc_PaymentHashPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHashPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHashPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHashPartial, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHashPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHashPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHashPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHashPartial, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  
  NewAddress(argument: _lnrpc_NewAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequestPartial, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequestPartial, callback: grpc.requestCallback<_lnrpc_NewAddressResponse>): grpc.ClientUnaryCall;
  
  OpenChannel(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate>;
  OpenChannel(argument: _lnrpc_OpenChannelRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate>;
  openChannel(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate>;
  openChannel(argument: _lnrpc_OpenChannelRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate>;
  
  OpenChannelSync(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequestPartial, callback: grpc.requestCallback<_lnrpc_ChannelPoint>): grpc.ClientUnaryCall;
  
  PendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequestPartial, callback: grpc.requestCallback<_lnrpc_PendingChannelsResponse>): grpc.ClientUnaryCall;
  
  QueryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequestPartial, callback: grpc.requestCallback<_lnrpc_QueryRoutesResponse>): grpc.ClientUnaryCall;
  
  RegisterRPCMiddleware(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_RPCMiddlewareResponsePartial, _lnrpc_RPCMiddlewareRequest>;
  RegisterRPCMiddleware(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_RPCMiddlewareResponsePartial, _lnrpc_RPCMiddlewareRequest>;
  registerRpcMiddleware(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_RPCMiddlewareResponsePartial, _lnrpc_RPCMiddlewareRequest>;
  registerRpcMiddleware(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_RPCMiddlewareResponsePartial, _lnrpc_RPCMiddlewareRequest>;
  
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequestPartial, callback: grpc.requestCallback<_lnrpc_RestoreBackupResponse>): grpc.ClientUnaryCall;
  
  SendCoins(argument: _lnrpc_SendCoinsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequestPartial, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequestPartial, callback: grpc.requestCallback<_lnrpc_SendCoinsResponse>): grpc.ClientUnaryCall;
  
  SendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  SendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  SendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  SendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  sendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  sendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  sendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  sendCustomMessage(argument: _lnrpc_SendCustomMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_SendCustomMessageResponse>): grpc.ClientUnaryCall;
  
  SendMany(argument: _lnrpc_SendManyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequestPartial, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequestPartial, callback: grpc.requestCallback<_lnrpc_SendManyResponse>): grpc.ClientUnaryCall;
  
  SendPayment(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequestPartial, _lnrpc_SendResponse>;
  SendPayment(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequestPartial, _lnrpc_SendResponse>;
  sendPayment(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequestPartial, _lnrpc_SendResponse>;
  sendPayment(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequestPartial, _lnrpc_SendResponse>;
  
  SendPaymentSync(argument: _lnrpc_SendRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequestPartial, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequestPartial, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  
  SendToRoute(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponse>;
  SendToRoute(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponse>;
  sendToRoute(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponse>;
  sendToRoute(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponse>;
  
  SendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_lnrpc_SendResponse>): grpc.ClientUnaryCall;
  
  SignMessage(argument: _lnrpc_SignMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_SignMessageResponse>): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _lnrpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequestPartial, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequestPartial, callback: grpc.requestCallback<_lnrpc_StopResponse>): grpc.ClientUnaryCall;
  
  SubscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot>;
  SubscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot>;
  subscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot>;
  subscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot>;
  
  SubscribeChannelEvents(argument: _lnrpc_ChannelEventSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate>;
  SubscribeChannelEvents(argument: _lnrpc_ChannelEventSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate>;
  subscribeChannelEvents(argument: _lnrpc_ChannelEventSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate>;
  subscribeChannelEvents(argument: _lnrpc_ChannelEventSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate>;
  
  SubscribeChannelGraph(argument: _lnrpc_GraphTopologySubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate>;
  SubscribeChannelGraph(argument: _lnrpc_GraphTopologySubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate>;
  subscribeChannelGraph(argument: _lnrpc_GraphTopologySubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate>;
  subscribeChannelGraph(argument: _lnrpc_GraphTopologySubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate>;
  
  SubscribeCustomMessages(argument: _lnrpc_SubscribeCustomMessagesRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CustomMessage>;
  SubscribeCustomMessages(argument: _lnrpc_SubscribeCustomMessagesRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CustomMessage>;
  subscribeCustomMessages(argument: _lnrpc_SubscribeCustomMessagesRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CustomMessage>;
  subscribeCustomMessages(argument: _lnrpc_SubscribeCustomMessagesRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CustomMessage>;
  
  SubscribeInvoices(argument: _lnrpc_InvoiceSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  SubscribeInvoices(argument: _lnrpc_InvoiceSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  subscribeInvoices(argument: _lnrpc_InvoiceSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  subscribeInvoices(argument: _lnrpc_InvoiceSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  
  SubscribePeerEvents(argument: _lnrpc_PeerEventSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent>;
  SubscribePeerEvents(argument: _lnrpc_PeerEventSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent>;
  subscribePeerEvents(argument: _lnrpc_PeerEventSubscriptionPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent>;
  subscribePeerEvents(argument: _lnrpc_PeerEventSubscriptionPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent>;
  
  SubscribeTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction>;
  SubscribeTransactions(argument: _lnrpc_GetTransactionsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction>;
  subscribeTransactions(argument: _lnrpc_GetTransactionsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction>;
  subscribeTransactions(argument: _lnrpc_GetTransactionsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction>;
  
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequestPartial, callback: grpc.requestCallback<_lnrpc_PolicyUpdateResponse>): grpc.ClientUnaryCall;
  
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshotPartial, callback: grpc.requestCallback<_lnrpc_VerifyChanBackupResponse>): grpc.ClientUnaryCall;
  
  VerifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequestPartial, callback: grpc.requestCallback<_lnrpc_VerifyMessageResponse>): grpc.ClientUnaryCall;
  
  WalletBalance(argument: _lnrpc_WalletBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequestPartial, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequestPartial, callback: grpc.requestCallback<_lnrpc_WalletBalanceResponse>): grpc.ClientUnaryCall;
  
}

export interface LightningHandlers extends grpc.UntypedServiceImplementation {
  AbandonChannel: grpc.handleUnaryCall<_lnrpc_AbandonChannelRequest, _lnrpc_AbandonChannelResponsePartial>;
  
  AddInvoice: grpc.handleUnaryCall<_lnrpc_Invoice, _lnrpc_AddInvoiceResponsePartial>;
  
  BakeMacaroon: grpc.handleUnaryCall<_lnrpc_BakeMacaroonRequest, _lnrpc_BakeMacaroonResponsePartial>;
  
  BatchOpenChannel: grpc.handleUnaryCall<_lnrpc_BatchOpenChannelRequest, _lnrpc_BatchOpenChannelResponsePartial>;
  
  ChannelAcceptor: grpc.handleBidiStreamingCall<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequestPartial>;
  
  ChannelBalance: grpc.handleUnaryCall<_lnrpc_ChannelBalanceRequest, _lnrpc_ChannelBalanceResponsePartial>;
  
  CheckMacaroonPermissions: grpc.handleUnaryCall<_lnrpc_CheckMacPermRequest, _lnrpc_CheckMacPermResponsePartial>;
  
  CloseChannel: grpc.handleServerStreamingCall<_lnrpc_CloseChannelRequest, _lnrpc_CloseStatusUpdatePartial>;
  
  ClosedChannels: grpc.handleUnaryCall<_lnrpc_ClosedChannelsRequest, _lnrpc_ClosedChannelsResponsePartial>;
  
  ConnectPeer: grpc.handleUnaryCall<_lnrpc_ConnectPeerRequest, _lnrpc_ConnectPeerResponsePartial>;
  
  DebugLevel: grpc.handleUnaryCall<_lnrpc_DebugLevelRequest, _lnrpc_DebugLevelResponsePartial>;
  
  DecodePayReq: grpc.handleUnaryCall<_lnrpc_PayReqString, _lnrpc_PayReqPartial>;
  
  DeleteAllPayments: grpc.handleUnaryCall<_lnrpc_DeleteAllPaymentsRequest, _lnrpc_DeleteAllPaymentsResponsePartial>;
  
  DeleteMacaroonID: grpc.handleUnaryCall<_lnrpc_DeleteMacaroonIDRequest, _lnrpc_DeleteMacaroonIDResponsePartial>;
  
  DeletePayment: grpc.handleUnaryCall<_lnrpc_DeletePaymentRequest, _lnrpc_DeletePaymentResponsePartial>;
  
  DescribeGraph: grpc.handleUnaryCall<_lnrpc_ChannelGraphRequest, _lnrpc_ChannelGraphPartial>;
  
  DisconnectPeer: grpc.handleUnaryCall<_lnrpc_DisconnectPeerRequest, _lnrpc_DisconnectPeerResponsePartial>;
  
  EstimateFee: grpc.handleUnaryCall<_lnrpc_EstimateFeeRequest, _lnrpc_EstimateFeeResponsePartial>;
  
  ExportAllChannelBackups: grpc.handleUnaryCall<_lnrpc_ChanBackupExportRequest, _lnrpc_ChanBackupSnapshotPartial>;
  
  ExportChannelBackup: grpc.handleUnaryCall<_lnrpc_ExportChannelBackupRequest, _lnrpc_ChannelBackupPartial>;
  
  FeeReport: grpc.handleUnaryCall<_lnrpc_FeeReportRequest, _lnrpc_FeeReportResponsePartial>;
  
  ForwardingHistory: grpc.handleUnaryCall<_lnrpc_ForwardingHistoryRequest, _lnrpc_ForwardingHistoryResponsePartial>;
  
  FundingStateStep: grpc.handleUnaryCall<_lnrpc_FundingTransitionMsg, _lnrpc_FundingStateStepRespPartial>;
  
  GetChanInfo: grpc.handleUnaryCall<_lnrpc_ChanInfoRequest, _lnrpc_ChannelEdgePartial>;
  
  GetDebugInfo: grpc.handleUnaryCall<_lnrpc_GetDebugInfoRequest, _lnrpc_GetDebugInfoResponsePartial>;
  
  GetInfo: grpc.handleUnaryCall<_lnrpc_GetInfoRequest, _lnrpc_GetInfoResponsePartial>;
  
  GetNetworkInfo: grpc.handleUnaryCall<_lnrpc_NetworkInfoRequest, _lnrpc_NetworkInfoPartial>;
  
  GetNodeInfo: grpc.handleUnaryCall<_lnrpc_NodeInfoRequest, _lnrpc_NodeInfoPartial>;
  
  GetNodeMetrics: grpc.handleUnaryCall<_lnrpc_NodeMetricsRequest, _lnrpc_NodeMetricsResponsePartial>;
  
  GetRecoveryInfo: grpc.handleUnaryCall<_lnrpc_GetRecoveryInfoRequest, _lnrpc_GetRecoveryInfoResponsePartial>;
  
  GetTransactions: grpc.handleUnaryCall<_lnrpc_GetTransactionsRequest, _lnrpc_TransactionDetailsPartial>;
  
  ListAliases: grpc.handleUnaryCall<_lnrpc_ListAliasesRequest, _lnrpc_ListAliasesResponsePartial>;
  
  ListChannels: grpc.handleUnaryCall<_lnrpc_ListChannelsRequest, _lnrpc_ListChannelsResponsePartial>;
  
  ListInvoices: grpc.handleUnaryCall<_lnrpc_ListInvoiceRequest, _lnrpc_ListInvoiceResponsePartial>;
  
  ListMacaroonIDs: grpc.handleUnaryCall<_lnrpc_ListMacaroonIDsRequest, _lnrpc_ListMacaroonIDsResponsePartial>;
  
  ListPayments: grpc.handleUnaryCall<_lnrpc_ListPaymentsRequest, _lnrpc_ListPaymentsResponsePartial>;
  
  ListPeers: grpc.handleUnaryCall<_lnrpc_ListPeersRequest, _lnrpc_ListPeersResponsePartial>;
  
  ListPermissions: grpc.handleUnaryCall<_lnrpc_ListPermissionsRequest, _lnrpc_ListPermissionsResponsePartial>;
  
  ListUnspent: grpc.handleUnaryCall<_lnrpc_ListUnspentRequest, _lnrpc_ListUnspentResponsePartial>;
  
  LookupHtlcResolution: grpc.handleUnaryCall<_lnrpc_LookupHtlcResolutionRequest, _lnrpc_LookupHtlcResolutionResponsePartial>;
  
  LookupInvoice: grpc.handleUnaryCall<_lnrpc_PaymentHash, _lnrpc_InvoicePartial>;
  
  NewAddress: grpc.handleUnaryCall<_lnrpc_NewAddressRequest, _lnrpc_NewAddressResponsePartial>;
  
  OpenChannel: grpc.handleServerStreamingCall<_lnrpc_OpenChannelRequest, _lnrpc_OpenStatusUpdatePartial>;
  
  OpenChannelSync: grpc.handleUnaryCall<_lnrpc_OpenChannelRequest, _lnrpc_ChannelPointPartial>;
  
  PendingChannels: grpc.handleUnaryCall<_lnrpc_PendingChannelsRequest, _lnrpc_PendingChannelsResponsePartial>;
  
  QueryRoutes: grpc.handleUnaryCall<_lnrpc_QueryRoutesRequest, _lnrpc_QueryRoutesResponsePartial>;
  
  RegisterRPCMiddleware: grpc.handleBidiStreamingCall<_lnrpc_RPCMiddlewareResponse, _lnrpc_RPCMiddlewareRequestPartial>;
  
  RestoreChannelBackups: grpc.handleUnaryCall<_lnrpc_RestoreChanBackupRequest, _lnrpc_RestoreBackupResponsePartial>;
  
  SendCoins: grpc.handleUnaryCall<_lnrpc_SendCoinsRequest, _lnrpc_SendCoinsResponsePartial>;
  
  SendCustomMessage: grpc.handleUnaryCall<_lnrpc_SendCustomMessageRequest, _lnrpc_SendCustomMessageResponsePartial>;
  
  SendMany: grpc.handleUnaryCall<_lnrpc_SendManyRequest, _lnrpc_SendManyResponsePartial>;
  
  SendPayment: grpc.handleBidiStreamingCall<_lnrpc_SendRequest, _lnrpc_SendResponsePartial>;
  
  SendPaymentSync: grpc.handleUnaryCall<_lnrpc_SendRequest, _lnrpc_SendResponsePartial>;
  
  SendToRoute: grpc.handleBidiStreamingCall<_lnrpc_SendToRouteRequest, _lnrpc_SendResponsePartial>;
  
  SendToRouteSync: grpc.handleUnaryCall<_lnrpc_SendToRouteRequest, _lnrpc_SendResponsePartial>;
  
  SignMessage: grpc.handleUnaryCall<_lnrpc_SignMessageRequest, _lnrpc_SignMessageResponsePartial>;
  
  StopDaemon: grpc.handleUnaryCall<_lnrpc_StopRequest, _lnrpc_StopResponsePartial>;
  
  SubscribeChannelBackups: grpc.handleServerStreamingCall<_lnrpc_ChannelBackupSubscription, _lnrpc_ChanBackupSnapshotPartial>;
  
  SubscribeChannelEvents: grpc.handleServerStreamingCall<_lnrpc_ChannelEventSubscription, _lnrpc_ChannelEventUpdatePartial>;
  
  SubscribeChannelGraph: grpc.handleServerStreamingCall<_lnrpc_GraphTopologySubscription, _lnrpc_GraphTopologyUpdatePartial>;
  
  SubscribeCustomMessages: grpc.handleServerStreamingCall<_lnrpc_SubscribeCustomMessagesRequest, _lnrpc_CustomMessagePartial>;
  
  SubscribeInvoices: grpc.handleServerStreamingCall<_lnrpc_InvoiceSubscription, _lnrpc_InvoicePartial>;
  
  SubscribePeerEvents: grpc.handleServerStreamingCall<_lnrpc_PeerEventSubscription, _lnrpc_PeerEventPartial>;
  
  SubscribeTransactions: grpc.handleServerStreamingCall<_lnrpc_GetTransactionsRequest, _lnrpc_TransactionPartial>;
  
  UpdateChannelPolicy: grpc.handleUnaryCall<_lnrpc_PolicyUpdateRequest, _lnrpc_PolicyUpdateResponsePartial>;
  
  VerifyChanBackup: grpc.handleUnaryCall<_lnrpc_ChanBackupSnapshot, _lnrpc_VerifyChanBackupResponsePartial>;
  
  VerifyMessage: grpc.handleUnaryCall<_lnrpc_VerifyMessageRequest, _lnrpc_VerifyMessageResponsePartial>;
  
  WalletBalance: grpc.handleUnaryCall<_lnrpc_WalletBalanceRequest, _lnrpc_WalletBalanceResponsePartial>;
  
}

export interface LightningDefinition extends grpc.ServiceDefinition {
  AbandonChannel: MethodDefinition<_lnrpc_AbandonChannelRequestPartial, _lnrpc_AbandonChannelResponsePartial, _lnrpc_AbandonChannelRequest, _lnrpc_AbandonChannelResponse>
  AddInvoice: MethodDefinition<_lnrpc_InvoicePartial, _lnrpc_AddInvoiceResponsePartial, _lnrpc_Invoice, _lnrpc_AddInvoiceResponse>
  BakeMacaroon: MethodDefinition<_lnrpc_BakeMacaroonRequestPartial, _lnrpc_BakeMacaroonResponsePartial, _lnrpc_BakeMacaroonRequest, _lnrpc_BakeMacaroonResponse>
  BatchOpenChannel: MethodDefinition<_lnrpc_BatchOpenChannelRequestPartial, _lnrpc_BatchOpenChannelResponsePartial, _lnrpc_BatchOpenChannelRequest, _lnrpc_BatchOpenChannelResponse>
  ChannelAcceptor: MethodDefinition<_lnrpc_ChannelAcceptResponsePartial, _lnrpc_ChannelAcceptRequestPartial, _lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest>
  ChannelBalance: MethodDefinition<_lnrpc_ChannelBalanceRequestPartial, _lnrpc_ChannelBalanceResponsePartial, _lnrpc_ChannelBalanceRequest, _lnrpc_ChannelBalanceResponse>
  CheckMacaroonPermissions: MethodDefinition<_lnrpc_CheckMacPermRequestPartial, _lnrpc_CheckMacPermResponsePartial, _lnrpc_CheckMacPermRequest, _lnrpc_CheckMacPermResponse>
  CloseChannel: MethodDefinition<_lnrpc_CloseChannelRequestPartial, _lnrpc_CloseStatusUpdatePartial, _lnrpc_CloseChannelRequest, _lnrpc_CloseStatusUpdate>
  ClosedChannels: MethodDefinition<_lnrpc_ClosedChannelsRequestPartial, _lnrpc_ClosedChannelsResponsePartial, _lnrpc_ClosedChannelsRequest, _lnrpc_ClosedChannelsResponse>
  ConnectPeer: MethodDefinition<_lnrpc_ConnectPeerRequestPartial, _lnrpc_ConnectPeerResponsePartial, _lnrpc_ConnectPeerRequest, _lnrpc_ConnectPeerResponse>
  DebugLevel: MethodDefinition<_lnrpc_DebugLevelRequestPartial, _lnrpc_DebugLevelResponsePartial, _lnrpc_DebugLevelRequest, _lnrpc_DebugLevelResponse>
  DecodePayReq: MethodDefinition<_lnrpc_PayReqStringPartial, _lnrpc_PayReqPartial, _lnrpc_PayReqString, _lnrpc_PayReq>
  DeleteAllPayments: MethodDefinition<_lnrpc_DeleteAllPaymentsRequestPartial, _lnrpc_DeleteAllPaymentsResponsePartial, _lnrpc_DeleteAllPaymentsRequest, _lnrpc_DeleteAllPaymentsResponse>
  DeleteMacaroonID: MethodDefinition<_lnrpc_DeleteMacaroonIDRequestPartial, _lnrpc_DeleteMacaroonIDResponsePartial, _lnrpc_DeleteMacaroonIDRequest, _lnrpc_DeleteMacaroonIDResponse>
  DeletePayment: MethodDefinition<_lnrpc_DeletePaymentRequestPartial, _lnrpc_DeletePaymentResponsePartial, _lnrpc_DeletePaymentRequest, _lnrpc_DeletePaymentResponse>
  DescribeGraph: MethodDefinition<_lnrpc_ChannelGraphRequestPartial, _lnrpc_ChannelGraphPartial, _lnrpc_ChannelGraphRequest, _lnrpc_ChannelGraph>
  DisconnectPeer: MethodDefinition<_lnrpc_DisconnectPeerRequestPartial, _lnrpc_DisconnectPeerResponsePartial, _lnrpc_DisconnectPeerRequest, _lnrpc_DisconnectPeerResponse>
  EstimateFee: MethodDefinition<_lnrpc_EstimateFeeRequestPartial, _lnrpc_EstimateFeeResponsePartial, _lnrpc_EstimateFeeRequest, _lnrpc_EstimateFeeResponse>
  ExportAllChannelBackups: MethodDefinition<_lnrpc_ChanBackupExportRequestPartial, _lnrpc_ChanBackupSnapshotPartial, _lnrpc_ChanBackupExportRequest, _lnrpc_ChanBackupSnapshot>
  ExportChannelBackup: MethodDefinition<_lnrpc_ExportChannelBackupRequestPartial, _lnrpc_ChannelBackupPartial, _lnrpc_ExportChannelBackupRequest, _lnrpc_ChannelBackup>
  FeeReport: MethodDefinition<_lnrpc_FeeReportRequestPartial, _lnrpc_FeeReportResponsePartial, _lnrpc_FeeReportRequest, _lnrpc_FeeReportResponse>
  ForwardingHistory: MethodDefinition<_lnrpc_ForwardingHistoryRequestPartial, _lnrpc_ForwardingHistoryResponsePartial, _lnrpc_ForwardingHistoryRequest, _lnrpc_ForwardingHistoryResponse>
  FundingStateStep: MethodDefinition<_lnrpc_FundingTransitionMsgPartial, _lnrpc_FundingStateStepRespPartial, _lnrpc_FundingTransitionMsg, _lnrpc_FundingStateStepResp>
  GetChanInfo: MethodDefinition<_lnrpc_ChanInfoRequestPartial, _lnrpc_ChannelEdgePartial, _lnrpc_ChanInfoRequest, _lnrpc_ChannelEdge>
  GetDebugInfo: MethodDefinition<_lnrpc_GetDebugInfoRequestPartial, _lnrpc_GetDebugInfoResponsePartial, _lnrpc_GetDebugInfoRequest, _lnrpc_GetDebugInfoResponse>
  GetInfo: MethodDefinition<_lnrpc_GetInfoRequestPartial, _lnrpc_GetInfoResponsePartial, _lnrpc_GetInfoRequest, _lnrpc_GetInfoResponse>
  GetNetworkInfo: MethodDefinition<_lnrpc_NetworkInfoRequestPartial, _lnrpc_NetworkInfoPartial, _lnrpc_NetworkInfoRequest, _lnrpc_NetworkInfo>
  GetNodeInfo: MethodDefinition<_lnrpc_NodeInfoRequestPartial, _lnrpc_NodeInfoPartial, _lnrpc_NodeInfoRequest, _lnrpc_NodeInfo>
  GetNodeMetrics: MethodDefinition<_lnrpc_NodeMetricsRequestPartial, _lnrpc_NodeMetricsResponsePartial, _lnrpc_NodeMetricsRequest, _lnrpc_NodeMetricsResponse>
  GetRecoveryInfo: MethodDefinition<_lnrpc_GetRecoveryInfoRequestPartial, _lnrpc_GetRecoveryInfoResponsePartial, _lnrpc_GetRecoveryInfoRequest, _lnrpc_GetRecoveryInfoResponse>
  GetTransactions: MethodDefinition<_lnrpc_GetTransactionsRequestPartial, _lnrpc_TransactionDetailsPartial, _lnrpc_GetTransactionsRequest, _lnrpc_TransactionDetails>
  ListAliases: MethodDefinition<_lnrpc_ListAliasesRequestPartial, _lnrpc_ListAliasesResponsePartial, _lnrpc_ListAliasesRequest, _lnrpc_ListAliasesResponse>
  ListChannels: MethodDefinition<_lnrpc_ListChannelsRequestPartial, _lnrpc_ListChannelsResponsePartial, _lnrpc_ListChannelsRequest, _lnrpc_ListChannelsResponse>
  ListInvoices: MethodDefinition<_lnrpc_ListInvoiceRequestPartial, _lnrpc_ListInvoiceResponsePartial, _lnrpc_ListInvoiceRequest, _lnrpc_ListInvoiceResponse>
  ListMacaroonIDs: MethodDefinition<_lnrpc_ListMacaroonIDsRequestPartial, _lnrpc_ListMacaroonIDsResponsePartial, _lnrpc_ListMacaroonIDsRequest, _lnrpc_ListMacaroonIDsResponse>
  ListPayments: MethodDefinition<_lnrpc_ListPaymentsRequestPartial, _lnrpc_ListPaymentsResponsePartial, _lnrpc_ListPaymentsRequest, _lnrpc_ListPaymentsResponse>
  ListPeers: MethodDefinition<_lnrpc_ListPeersRequestPartial, _lnrpc_ListPeersResponsePartial, _lnrpc_ListPeersRequest, _lnrpc_ListPeersResponse>
  ListPermissions: MethodDefinition<_lnrpc_ListPermissionsRequestPartial, _lnrpc_ListPermissionsResponsePartial, _lnrpc_ListPermissionsRequest, _lnrpc_ListPermissionsResponse>
  ListUnspent: MethodDefinition<_lnrpc_ListUnspentRequestPartial, _lnrpc_ListUnspentResponsePartial, _lnrpc_ListUnspentRequest, _lnrpc_ListUnspentResponse>
  LookupHtlcResolution: MethodDefinition<_lnrpc_LookupHtlcResolutionRequestPartial, _lnrpc_LookupHtlcResolutionResponsePartial, _lnrpc_LookupHtlcResolutionRequest, _lnrpc_LookupHtlcResolutionResponse>
  LookupInvoice: MethodDefinition<_lnrpc_PaymentHashPartial, _lnrpc_InvoicePartial, _lnrpc_PaymentHash, _lnrpc_Invoice>
  NewAddress: MethodDefinition<_lnrpc_NewAddressRequestPartial, _lnrpc_NewAddressResponsePartial, _lnrpc_NewAddressRequest, _lnrpc_NewAddressResponse>
  OpenChannel: MethodDefinition<_lnrpc_OpenChannelRequestPartial, _lnrpc_OpenStatusUpdatePartial, _lnrpc_OpenChannelRequest, _lnrpc_OpenStatusUpdate>
  OpenChannelSync: MethodDefinition<_lnrpc_OpenChannelRequestPartial, _lnrpc_ChannelPointPartial, _lnrpc_OpenChannelRequest, _lnrpc_ChannelPoint>
  PendingChannels: MethodDefinition<_lnrpc_PendingChannelsRequestPartial, _lnrpc_PendingChannelsResponsePartial, _lnrpc_PendingChannelsRequest, _lnrpc_PendingChannelsResponse>
  QueryRoutes: MethodDefinition<_lnrpc_QueryRoutesRequestPartial, _lnrpc_QueryRoutesResponsePartial, _lnrpc_QueryRoutesRequest, _lnrpc_QueryRoutesResponse>
  RegisterRPCMiddleware: MethodDefinition<_lnrpc_RPCMiddlewareResponsePartial, _lnrpc_RPCMiddlewareRequestPartial, _lnrpc_RPCMiddlewareResponse, _lnrpc_RPCMiddlewareRequest>
  RestoreChannelBackups: MethodDefinition<_lnrpc_RestoreChanBackupRequestPartial, _lnrpc_RestoreBackupResponsePartial, _lnrpc_RestoreChanBackupRequest, _lnrpc_RestoreBackupResponse>
  SendCoins: MethodDefinition<_lnrpc_SendCoinsRequestPartial, _lnrpc_SendCoinsResponsePartial, _lnrpc_SendCoinsRequest, _lnrpc_SendCoinsResponse>
  SendCustomMessage: MethodDefinition<_lnrpc_SendCustomMessageRequestPartial, _lnrpc_SendCustomMessageResponsePartial, _lnrpc_SendCustomMessageRequest, _lnrpc_SendCustomMessageResponse>
  SendMany: MethodDefinition<_lnrpc_SendManyRequestPartial, _lnrpc_SendManyResponsePartial, _lnrpc_SendManyRequest, _lnrpc_SendManyResponse>
  SendPayment: MethodDefinition<_lnrpc_SendRequestPartial, _lnrpc_SendResponsePartial, _lnrpc_SendRequest, _lnrpc_SendResponse>
  SendPaymentSync: MethodDefinition<_lnrpc_SendRequestPartial, _lnrpc_SendResponsePartial, _lnrpc_SendRequest, _lnrpc_SendResponse>
  SendToRoute: MethodDefinition<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponsePartial, _lnrpc_SendToRouteRequest, _lnrpc_SendResponse>
  SendToRouteSync: MethodDefinition<_lnrpc_SendToRouteRequestPartial, _lnrpc_SendResponsePartial, _lnrpc_SendToRouteRequest, _lnrpc_SendResponse>
  SignMessage: MethodDefinition<_lnrpc_SignMessageRequestPartial, _lnrpc_SignMessageResponsePartial, _lnrpc_SignMessageRequest, _lnrpc_SignMessageResponse>
  StopDaemon: MethodDefinition<_lnrpc_StopRequestPartial, _lnrpc_StopResponsePartial, _lnrpc_StopRequest, _lnrpc_StopResponse>
  SubscribeChannelBackups: MethodDefinition<_lnrpc_ChannelBackupSubscriptionPartial, _lnrpc_ChanBackupSnapshotPartial, _lnrpc_ChannelBackupSubscription, _lnrpc_ChanBackupSnapshot>
  SubscribeChannelEvents: MethodDefinition<_lnrpc_ChannelEventSubscriptionPartial, _lnrpc_ChannelEventUpdatePartial, _lnrpc_ChannelEventSubscription, _lnrpc_ChannelEventUpdate>
  SubscribeChannelGraph: MethodDefinition<_lnrpc_GraphTopologySubscriptionPartial, _lnrpc_GraphTopologyUpdatePartial, _lnrpc_GraphTopologySubscription, _lnrpc_GraphTopologyUpdate>
  SubscribeCustomMessages: MethodDefinition<_lnrpc_SubscribeCustomMessagesRequestPartial, _lnrpc_CustomMessagePartial, _lnrpc_SubscribeCustomMessagesRequest, _lnrpc_CustomMessage>
  SubscribeInvoices: MethodDefinition<_lnrpc_InvoiceSubscriptionPartial, _lnrpc_InvoicePartial, _lnrpc_InvoiceSubscription, _lnrpc_Invoice>
  SubscribePeerEvents: MethodDefinition<_lnrpc_PeerEventSubscriptionPartial, _lnrpc_PeerEventPartial, _lnrpc_PeerEventSubscription, _lnrpc_PeerEvent>
  SubscribeTransactions: MethodDefinition<_lnrpc_GetTransactionsRequestPartial, _lnrpc_TransactionPartial, _lnrpc_GetTransactionsRequest, _lnrpc_Transaction>
  UpdateChannelPolicy: MethodDefinition<_lnrpc_PolicyUpdateRequestPartial, _lnrpc_PolicyUpdateResponsePartial, _lnrpc_PolicyUpdateRequest, _lnrpc_PolicyUpdateResponse>
  VerifyChanBackup: MethodDefinition<_lnrpc_ChanBackupSnapshotPartial, _lnrpc_VerifyChanBackupResponsePartial, _lnrpc_ChanBackupSnapshot, _lnrpc_VerifyChanBackupResponse>
  VerifyMessage: MethodDefinition<_lnrpc_VerifyMessageRequestPartial, _lnrpc_VerifyMessageResponsePartial, _lnrpc_VerifyMessageRequest, _lnrpc_VerifyMessageResponse>
  WalletBalance: MethodDefinition<_lnrpc_WalletBalanceRequestPartial, _lnrpc_WalletBalanceResponsePartial, _lnrpc_WalletBalanceRequest, _lnrpc_WalletBalanceResponse>
}
