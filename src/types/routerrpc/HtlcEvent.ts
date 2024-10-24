// Original file: protos/routerrpc/router.proto

import type { ForwardEventPartial as _routerrpc_ForwardEventPartial, ForwardEvent as _routerrpc_ForwardEvent } from '../routerrpc/ForwardEvent';
import type { ForwardFailEventPartial as _routerrpc_ForwardFailEventPartial, ForwardFailEvent as _routerrpc_ForwardFailEvent } from '../routerrpc/ForwardFailEvent';
import type { SettleEventPartial as _routerrpc_SettleEventPartial, SettleEvent as _routerrpc_SettleEvent } from '../routerrpc/SettleEvent';
import type { LinkFailEventPartial as _routerrpc_LinkFailEventPartial, LinkFailEvent as _routerrpc_LinkFailEvent } from '../routerrpc/LinkFailEvent';
import type { SubscribedEventPartial as _routerrpc_SubscribedEventPartial, SubscribedEvent as _routerrpc_SubscribedEvent } from '../routerrpc/SubscribedEvent';
import type { FinalHtlcEventPartial as _routerrpc_FinalHtlcEventPartial, FinalHtlcEvent as _routerrpc_FinalHtlcEvent } from '../routerrpc/FinalHtlcEvent';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/routerrpc/router.proto

export const _routerrpc_HtlcEvent_EventType = {
  UNKNOWN: 'UNKNOWN',
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  FORWARD: 'FORWARD',
} as const;

export type _routerrpc_HtlcEvent_EventTypePartial =
  | 'UNKNOWN'
  | 0
  | 'SEND'
  | 1
  | 'RECEIVE'
  | 2
  | 'FORWARD'
  | 3

export type _routerrpc_HtlcEvent_EventType = typeof _routerrpc_HtlcEvent_EventType[keyof typeof _routerrpc_HtlcEvent_EventType]

export interface HtlcEventPartial {
  'incomingChannelId'?: (number | string | Long);
  'outgoingChannelId'?: (number | string | Long);
  'incomingHtlcId'?: (number | string | Long);
  'outgoingHtlcId'?: (number | string | Long);
  'timestampNs'?: (number | string | Long);
  'eventType'?: (_routerrpc_HtlcEvent_EventTypePartial);
  'forwardEvent'?: (_routerrpc_ForwardEventPartial | null);
  'forwardFailEvent'?: (_routerrpc_ForwardFailEventPartial | null);
  'settleEvent'?: (_routerrpc_SettleEventPartial | null);
  'linkFailEvent'?: (_routerrpc_LinkFailEventPartial | null);
  'subscribedEvent'?: (_routerrpc_SubscribedEventPartial | null);
  'finalHtlcEvent'?: (_routerrpc_FinalHtlcEventPartial | null);
  'event'?: "forwardEvent"|"forwardFailEvent"|"settleEvent"|"linkFailEvent"|"subscribedEvent"|"finalHtlcEvent";
}

export interface HtlcEvent {
  'incomingChannelId': (string);
  'outgoingChannelId': (string);
  'incomingHtlcId': (string);
  'outgoingHtlcId': (string);
  'timestampNs': (string);
  'eventType': (_routerrpc_HtlcEvent_EventType);
  'forwardEvent'?: (_routerrpc_ForwardEvent | null);
  'forwardFailEvent'?: (_routerrpc_ForwardFailEvent | null);
  'settleEvent'?: (_routerrpc_SettleEvent | null);
  'linkFailEvent'?: (_routerrpc_LinkFailEvent | null);
  'subscribedEvent'?: (_routerrpc_SubscribedEvent | null);
  'finalHtlcEvent'?: (_routerrpc_FinalHtlcEvent | null);
  'event': "forwardEvent"|"forwardFailEvent"|"settleEvent"|"linkFailEvent"|"subscribedEvent"|"finalHtlcEvent";
}
