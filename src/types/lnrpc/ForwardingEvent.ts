// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ForwardingEventPartial {
  'timestamp'?: (number | string | Long);
  'chanIdIn'?: (number | string | Long);
  'chanIdOut'?: (number | string | Long);
  'amtIn'?: (number | string | Long);
  'amtOut'?: (number | string | Long);
  'fee'?: (number | string | Long);
  'feeMsat'?: (number | string | Long);
  'amtInMsat'?: (number | string | Long);
  'amtOutMsat'?: (number | string | Long);
  'timestampNs'?: (number | string | Long);
  'peerAliasIn'?: (string);
  'peerAliasOut'?: (string);
}

export interface ForwardingEvent {
  'timestamp': (string);
  'chanIdIn': (string);
  'chanIdOut': (string);
  'amtIn': (string);
  'amtOut': (string);
  'fee': (string);
  'feeMsat': (string);
  'amtInMsat': (string);
  'amtOutMsat': (string);
  'timestampNs': (string);
  'peerAliasIn': (string);
  'peerAliasOut': (string);
}
