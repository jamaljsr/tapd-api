// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface HopHintPartial {
  'nodeId'?: (string);
  'chanId'?: (number | string | Long);
  'feeBaseMsat'?: (number);
  'feeProportionalMillionths'?: (number);
  'cltvExpiryDelta'?: (number);
}

export interface HopHint {
  'nodeId': (string);
  'chanId': (string);
  'feeBaseMsat': (number);
  'feeProportionalMillionths': (number);
  'cltvExpiryDelta': (number);
}
