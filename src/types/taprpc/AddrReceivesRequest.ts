// Original file: protos/taprootassets.proto

import type { AddrEventStatusPartial as _taprpc_AddrEventStatusPartial, AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';
import type { Long } from '@grpc/proto-loader';

export interface AddrReceivesRequestPartial {
  'filterAddr'?: (string);
  'filterStatus'?: (_taprpc_AddrEventStatusPartial);
  'startTimestamp'?: (number | string | Long);
  'endTimestamp'?: (number | string | Long);
}

export interface AddrReceivesRequest {
  'filterAddr': (string);
  'filterStatus': (_taprpc_AddrEventStatus);
  'startTimestamp': (string);
  'endTimestamp': (string);
}
