// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface EdgeLocatorPartial {
  'channelId'?: (number | string | Long);
  'directionReverse'?: (boolean);
}

export interface EdgeLocator {
  'channelId': (string);
  'directionReverse': (boolean);
}
