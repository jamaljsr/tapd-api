// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface BimodalParametersPartial {
  'nodeWeight'?: (number | string);
  'scaleMsat'?: (number | string | Long);
  'decayTime'?: (number | string | Long);
}

export interface BimodalParameters {
  'nodeWeight': (number);
  'scaleMsat': (string);
  'decayTime': (string);
}
