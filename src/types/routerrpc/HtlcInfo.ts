// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface HtlcInfoPartial {
  'incomingTimelock'?: (number);
  'outgoingTimelock'?: (number);
  'incomingAmtMsat'?: (number | string | Long);
  'outgoingAmtMsat'?: (number | string | Long);
}

export interface HtlcInfo {
  'incomingTimelock': (number);
  'outgoingTimelock': (number);
  'incomingAmtMsat': (string);
  'outgoingAmtMsat': (string);
}
