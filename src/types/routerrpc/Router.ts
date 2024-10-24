// Original file: protos/routerrpc/router.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BuildRouteRequestPartial as _routerrpc_BuildRouteRequestPartial, BuildRouteRequest as _routerrpc_BuildRouteRequest } from '../routerrpc/BuildRouteRequest';
import type { BuildRouteResponsePartial as _routerrpc_BuildRouteResponsePartial, BuildRouteResponse as _routerrpc_BuildRouteResponse } from '../routerrpc/BuildRouteResponse';
import type { ForwardHtlcInterceptRequestPartial as _routerrpc_ForwardHtlcInterceptRequestPartial, ForwardHtlcInterceptRequest as _routerrpc_ForwardHtlcInterceptRequest } from '../routerrpc/ForwardHtlcInterceptRequest';
import type { ForwardHtlcInterceptResponsePartial as _routerrpc_ForwardHtlcInterceptResponsePartial, ForwardHtlcInterceptResponse as _routerrpc_ForwardHtlcInterceptResponse } from '../routerrpc/ForwardHtlcInterceptResponse';
import type { GetMissionControlConfigRequestPartial as _routerrpc_GetMissionControlConfigRequestPartial, GetMissionControlConfigRequest as _routerrpc_GetMissionControlConfigRequest } from '../routerrpc/GetMissionControlConfigRequest';
import type { GetMissionControlConfigResponsePartial as _routerrpc_GetMissionControlConfigResponsePartial, GetMissionControlConfigResponse as _routerrpc_GetMissionControlConfigResponse } from '../routerrpc/GetMissionControlConfigResponse';
import type { HTLCAttemptPartial as _lnrpc_HTLCAttemptPartial, HTLCAttempt as _lnrpc_HTLCAttempt } from '../lnrpc/HTLCAttempt';
import type { HtlcEventPartial as _routerrpc_HtlcEventPartial, HtlcEvent as _routerrpc_HtlcEvent } from '../routerrpc/HtlcEvent';
import type { PaymentPartial as _lnrpc_PaymentPartial, Payment as _lnrpc_Payment } from '../lnrpc/Payment';
import type { PaymentStatusPartial as _routerrpc_PaymentStatusPartial, PaymentStatus as _routerrpc_PaymentStatus } from '../routerrpc/PaymentStatus';
import type { QueryMissionControlRequestPartial as _routerrpc_QueryMissionControlRequestPartial, QueryMissionControlRequest as _routerrpc_QueryMissionControlRequest } from '../routerrpc/QueryMissionControlRequest';
import type { QueryMissionControlResponsePartial as _routerrpc_QueryMissionControlResponsePartial, QueryMissionControlResponse as _routerrpc_QueryMissionControlResponse } from '../routerrpc/QueryMissionControlResponse';
import type { QueryProbabilityRequestPartial as _routerrpc_QueryProbabilityRequestPartial, QueryProbabilityRequest as _routerrpc_QueryProbabilityRequest } from '../routerrpc/QueryProbabilityRequest';
import type { QueryProbabilityResponsePartial as _routerrpc_QueryProbabilityResponsePartial, QueryProbabilityResponse as _routerrpc_QueryProbabilityResponse } from '../routerrpc/QueryProbabilityResponse';
import type { ResetMissionControlRequestPartial as _routerrpc_ResetMissionControlRequestPartial, ResetMissionControlRequest as _routerrpc_ResetMissionControlRequest } from '../routerrpc/ResetMissionControlRequest';
import type { ResetMissionControlResponsePartial as _routerrpc_ResetMissionControlResponsePartial, ResetMissionControlResponse as _routerrpc_ResetMissionControlResponse } from '../routerrpc/ResetMissionControlResponse';
import type { RouteFeeRequestPartial as _routerrpc_RouteFeeRequestPartial, RouteFeeRequest as _routerrpc_RouteFeeRequest } from '../routerrpc/RouteFeeRequest';
import type { RouteFeeResponsePartial as _routerrpc_RouteFeeResponsePartial, RouteFeeResponse as _routerrpc_RouteFeeResponse } from '../routerrpc/RouteFeeResponse';
import type { SendPaymentRequestPartial as _routerrpc_SendPaymentRequestPartial, SendPaymentRequest as _routerrpc_SendPaymentRequest } from '../routerrpc/SendPaymentRequest';
import type { SendToRouteRequestPartial as _routerrpc_SendToRouteRequestPartial, SendToRouteRequest as _routerrpc_SendToRouteRequest } from '../routerrpc/SendToRouteRequest';
import type { SendToRouteResponsePartial as _routerrpc_SendToRouteResponsePartial, SendToRouteResponse as _routerrpc_SendToRouteResponse } from '../routerrpc/SendToRouteResponse';
import type { SetMissionControlConfigRequestPartial as _routerrpc_SetMissionControlConfigRequestPartial, SetMissionControlConfigRequest as _routerrpc_SetMissionControlConfigRequest } from '../routerrpc/SetMissionControlConfigRequest';
import type { SetMissionControlConfigResponsePartial as _routerrpc_SetMissionControlConfigResponsePartial, SetMissionControlConfigResponse as _routerrpc_SetMissionControlConfigResponse } from '../routerrpc/SetMissionControlConfigResponse';
import type { SubscribeHtlcEventsRequestPartial as _routerrpc_SubscribeHtlcEventsRequestPartial, SubscribeHtlcEventsRequest as _routerrpc_SubscribeHtlcEventsRequest } from '../routerrpc/SubscribeHtlcEventsRequest';
import type { TrackPaymentRequestPartial as _routerrpc_TrackPaymentRequestPartial, TrackPaymentRequest as _routerrpc_TrackPaymentRequest } from '../routerrpc/TrackPaymentRequest';
import type { TrackPaymentsRequestPartial as _routerrpc_TrackPaymentsRequestPartial, TrackPaymentsRequest as _routerrpc_TrackPaymentsRequest } from '../routerrpc/TrackPaymentsRequest';
import type { UpdateChanStatusRequestPartial as _routerrpc_UpdateChanStatusRequestPartial, UpdateChanStatusRequest as _routerrpc_UpdateChanStatusRequest } from '../routerrpc/UpdateChanStatusRequest';
import type { UpdateChanStatusResponsePartial as _routerrpc_UpdateChanStatusResponsePartial, UpdateChanStatusResponse as _routerrpc_UpdateChanStatusResponse } from '../routerrpc/UpdateChanStatusResponse';
import type { XImportMissionControlRequestPartial as _routerrpc_XImportMissionControlRequestPartial, XImportMissionControlRequest as _routerrpc_XImportMissionControlRequest } from '../routerrpc/XImportMissionControlRequest';
import type { XImportMissionControlResponsePartial as _routerrpc_XImportMissionControlResponsePartial, XImportMissionControlResponse as _routerrpc_XImportMissionControlResponse } from '../routerrpc/XImportMissionControlResponse';

export interface RouterClient extends grpc.Client {
  BuildRoute(argument: _routerrpc_BuildRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  BuildRoute(argument: _routerrpc_BuildRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  BuildRoute(argument: _routerrpc_BuildRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  BuildRoute(argument: _routerrpc_BuildRouteRequestPartial, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  buildRoute(argument: _routerrpc_BuildRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  buildRoute(argument: _routerrpc_BuildRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  buildRoute(argument: _routerrpc_BuildRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  buildRoute(argument: _routerrpc_BuildRouteRequestPartial, callback: grpc.requestCallback<_routerrpc_BuildRouteResponse>): grpc.ClientUnaryCall;
  
  EstimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  EstimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  EstimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  EstimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  estimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  estimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  estimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  estimateRouteFee(argument: _routerrpc_RouteFeeRequestPartial, callback: grpc.requestCallback<_routerrpc_RouteFeeResponse>): grpc.ClientUnaryCall;
  
  GetMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  GetMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  GetMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  GetMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  getMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  getMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  getMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  getMissionControlConfig(argument: _routerrpc_GetMissionControlConfigRequestPartial, callback: grpc.requestCallback<_routerrpc_GetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  
  HtlcInterceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_routerrpc_ForwardHtlcInterceptResponsePartial, _routerrpc_ForwardHtlcInterceptRequest>;
  HtlcInterceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_routerrpc_ForwardHtlcInterceptResponsePartial, _routerrpc_ForwardHtlcInterceptRequest>;
  htlcInterceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_routerrpc_ForwardHtlcInterceptResponsePartial, _routerrpc_ForwardHtlcInterceptRequest>;
  htlcInterceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_routerrpc_ForwardHtlcInterceptResponsePartial, _routerrpc_ForwardHtlcInterceptRequest>;
  
  QueryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  QueryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  QueryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  QueryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  queryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  queryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  queryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  queryMissionControl(argument: _routerrpc_QueryMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_QueryMissionControlResponse>): grpc.ClientUnaryCall;
  
  QueryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  QueryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  QueryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  QueryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  queryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  queryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  queryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  queryProbability(argument: _routerrpc_QueryProbabilityRequestPartial, callback: grpc.requestCallback<_routerrpc_QueryProbabilityResponse>): grpc.ClientUnaryCall;
  
  ResetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  ResetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  ResetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  ResetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  resetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  resetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  resetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  resetMissionControl(argument: _routerrpc_ResetMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_ResetMissionControlResponse>): grpc.ClientUnaryCall;
  
  SendPayment(argument: _routerrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  SendPayment(argument: _routerrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  sendPayment(argument: _routerrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  sendPayment(argument: _routerrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  
  SendPaymentV2(argument: _routerrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  SendPaymentV2(argument: _routerrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  sendPaymentV2(argument: _routerrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  sendPaymentV2(argument: _routerrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  
  SendToRoute(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  SendToRoute(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  SendToRoute(argument: _routerrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  SendToRoute(argument: _routerrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  sendToRoute(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  sendToRoute(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  sendToRoute(argument: _routerrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  sendToRoute(argument: _routerrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_routerrpc_SendToRouteResponse>): grpc.ClientUnaryCall;
  
  SendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  SendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  SendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  SendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  sendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  sendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  sendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  sendToRouteV2(argument: _routerrpc_SendToRouteRequestPartial, callback: grpc.requestCallback<_lnrpc_HTLCAttempt>): grpc.ClientUnaryCall;
  
  SetMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  SetMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  SetMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  SetMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  setMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  setMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  setMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  setMissionControlConfig(argument: _routerrpc_SetMissionControlConfigRequestPartial, callback: grpc.requestCallback<_routerrpc_SetMissionControlConfigResponse>): grpc.ClientUnaryCall;
  
  SubscribeHtlcEvents(argument: _routerrpc_SubscribeHtlcEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_HtlcEvent>;
  SubscribeHtlcEvents(argument: _routerrpc_SubscribeHtlcEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_HtlcEvent>;
  subscribeHtlcEvents(argument: _routerrpc_SubscribeHtlcEventsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_HtlcEvent>;
  subscribeHtlcEvents(argument: _routerrpc_SubscribeHtlcEventsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_HtlcEvent>;
  
  TrackPayment(argument: _routerrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  TrackPayment(argument: _routerrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  trackPayment(argument: _routerrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  trackPayment(argument: _routerrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_routerrpc_PaymentStatus>;
  
  TrackPaymentV2(argument: _routerrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  TrackPaymentV2(argument: _routerrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  trackPaymentV2(argument: _routerrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  trackPaymentV2(argument: _routerrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  
  TrackPayments(argument: _routerrpc_TrackPaymentsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  TrackPayments(argument: _routerrpc_TrackPaymentsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  trackPayments(argument: _routerrpc_TrackPaymentsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  trackPayments(argument: _routerrpc_TrackPaymentsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Payment>;
  
  UpdateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  UpdateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  UpdateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  UpdateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  updateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  updateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  updateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  updateChanStatus(argument: _routerrpc_UpdateChanStatusRequestPartial, callback: grpc.requestCallback<_routerrpc_UpdateChanStatusResponse>): grpc.ClientUnaryCall;
  
  XImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  XImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  XImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  XImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  xImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  xImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  xImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  xImportMissionControl(argument: _routerrpc_XImportMissionControlRequestPartial, callback: grpc.requestCallback<_routerrpc_XImportMissionControlResponse>): grpc.ClientUnaryCall;
  
}

export interface RouterHandlers extends grpc.UntypedServiceImplementation {
  BuildRoute: grpc.handleUnaryCall<_routerrpc_BuildRouteRequest, _routerrpc_BuildRouteResponsePartial>;
  
  EstimateRouteFee: grpc.handleUnaryCall<_routerrpc_RouteFeeRequest, _routerrpc_RouteFeeResponsePartial>;
  
  GetMissionControlConfig: grpc.handleUnaryCall<_routerrpc_GetMissionControlConfigRequest, _routerrpc_GetMissionControlConfigResponsePartial>;
  
  HtlcInterceptor: grpc.handleBidiStreamingCall<_routerrpc_ForwardHtlcInterceptResponse, _routerrpc_ForwardHtlcInterceptRequestPartial>;
  
  QueryMissionControl: grpc.handleUnaryCall<_routerrpc_QueryMissionControlRequest, _routerrpc_QueryMissionControlResponsePartial>;
  
  QueryProbability: grpc.handleUnaryCall<_routerrpc_QueryProbabilityRequest, _routerrpc_QueryProbabilityResponsePartial>;
  
  ResetMissionControl: grpc.handleUnaryCall<_routerrpc_ResetMissionControlRequest, _routerrpc_ResetMissionControlResponsePartial>;
  
  SendPayment: grpc.handleServerStreamingCall<_routerrpc_SendPaymentRequest, _routerrpc_PaymentStatusPartial>;
  
  SendPaymentV2: grpc.handleServerStreamingCall<_routerrpc_SendPaymentRequest, _lnrpc_PaymentPartial>;
  
  SendToRoute: grpc.handleUnaryCall<_routerrpc_SendToRouteRequest, _routerrpc_SendToRouteResponsePartial>;
  
  SendToRouteV2: grpc.handleUnaryCall<_routerrpc_SendToRouteRequest, _lnrpc_HTLCAttemptPartial>;
  
  SetMissionControlConfig: grpc.handleUnaryCall<_routerrpc_SetMissionControlConfigRequest, _routerrpc_SetMissionControlConfigResponsePartial>;
  
  SubscribeHtlcEvents: grpc.handleServerStreamingCall<_routerrpc_SubscribeHtlcEventsRequest, _routerrpc_HtlcEventPartial>;
  
  TrackPayment: grpc.handleServerStreamingCall<_routerrpc_TrackPaymentRequest, _routerrpc_PaymentStatusPartial>;
  
  TrackPaymentV2: grpc.handleServerStreamingCall<_routerrpc_TrackPaymentRequest, _lnrpc_PaymentPartial>;
  
  TrackPayments: grpc.handleServerStreamingCall<_routerrpc_TrackPaymentsRequest, _lnrpc_PaymentPartial>;
  
  UpdateChanStatus: grpc.handleUnaryCall<_routerrpc_UpdateChanStatusRequest, _routerrpc_UpdateChanStatusResponsePartial>;
  
  XImportMissionControl: grpc.handleUnaryCall<_routerrpc_XImportMissionControlRequest, _routerrpc_XImportMissionControlResponsePartial>;
  
}

export interface RouterDefinition extends grpc.ServiceDefinition {
  BuildRoute: MethodDefinition<_routerrpc_BuildRouteRequestPartial, _routerrpc_BuildRouteResponsePartial, _routerrpc_BuildRouteRequest, _routerrpc_BuildRouteResponse>
  EstimateRouteFee: MethodDefinition<_routerrpc_RouteFeeRequestPartial, _routerrpc_RouteFeeResponsePartial, _routerrpc_RouteFeeRequest, _routerrpc_RouteFeeResponse>
  GetMissionControlConfig: MethodDefinition<_routerrpc_GetMissionControlConfigRequestPartial, _routerrpc_GetMissionControlConfigResponsePartial, _routerrpc_GetMissionControlConfigRequest, _routerrpc_GetMissionControlConfigResponse>
  HtlcInterceptor: MethodDefinition<_routerrpc_ForwardHtlcInterceptResponsePartial, _routerrpc_ForwardHtlcInterceptRequestPartial, _routerrpc_ForwardHtlcInterceptResponse, _routerrpc_ForwardHtlcInterceptRequest>
  QueryMissionControl: MethodDefinition<_routerrpc_QueryMissionControlRequestPartial, _routerrpc_QueryMissionControlResponsePartial, _routerrpc_QueryMissionControlRequest, _routerrpc_QueryMissionControlResponse>
  QueryProbability: MethodDefinition<_routerrpc_QueryProbabilityRequestPartial, _routerrpc_QueryProbabilityResponsePartial, _routerrpc_QueryProbabilityRequest, _routerrpc_QueryProbabilityResponse>
  ResetMissionControl: MethodDefinition<_routerrpc_ResetMissionControlRequestPartial, _routerrpc_ResetMissionControlResponsePartial, _routerrpc_ResetMissionControlRequest, _routerrpc_ResetMissionControlResponse>
  SendPayment: MethodDefinition<_routerrpc_SendPaymentRequestPartial, _routerrpc_PaymentStatusPartial, _routerrpc_SendPaymentRequest, _routerrpc_PaymentStatus>
  SendPaymentV2: MethodDefinition<_routerrpc_SendPaymentRequestPartial, _lnrpc_PaymentPartial, _routerrpc_SendPaymentRequest, _lnrpc_Payment>
  SendToRoute: MethodDefinition<_routerrpc_SendToRouteRequestPartial, _routerrpc_SendToRouteResponsePartial, _routerrpc_SendToRouteRequest, _routerrpc_SendToRouteResponse>
  SendToRouteV2: MethodDefinition<_routerrpc_SendToRouteRequestPartial, _lnrpc_HTLCAttemptPartial, _routerrpc_SendToRouteRequest, _lnrpc_HTLCAttempt>
  SetMissionControlConfig: MethodDefinition<_routerrpc_SetMissionControlConfigRequestPartial, _routerrpc_SetMissionControlConfigResponsePartial, _routerrpc_SetMissionControlConfigRequest, _routerrpc_SetMissionControlConfigResponse>
  SubscribeHtlcEvents: MethodDefinition<_routerrpc_SubscribeHtlcEventsRequestPartial, _routerrpc_HtlcEventPartial, _routerrpc_SubscribeHtlcEventsRequest, _routerrpc_HtlcEvent>
  TrackPayment: MethodDefinition<_routerrpc_TrackPaymentRequestPartial, _routerrpc_PaymentStatusPartial, _routerrpc_TrackPaymentRequest, _routerrpc_PaymentStatus>
  TrackPaymentV2: MethodDefinition<_routerrpc_TrackPaymentRequestPartial, _lnrpc_PaymentPartial, _routerrpc_TrackPaymentRequest, _lnrpc_Payment>
  TrackPayments: MethodDefinition<_routerrpc_TrackPaymentsRequestPartial, _lnrpc_PaymentPartial, _routerrpc_TrackPaymentsRequest, _lnrpc_Payment>
  UpdateChanStatus: MethodDefinition<_routerrpc_UpdateChanStatusRequestPartial, _routerrpc_UpdateChanStatusResponsePartial, _routerrpc_UpdateChanStatusRequest, _routerrpc_UpdateChanStatusResponse>
  XImportMissionControl: MethodDefinition<_routerrpc_XImportMissionControlRequestPartial, _routerrpc_XImportMissionControlResponsePartial, _routerrpc_XImportMissionControlRequest, _routerrpc_XImportMissionControlResponse>
}
