// Original file: protos/taprootassets.proto

import type { AddrEventStatusPartial as _taprpc_AddrEventStatusPartial, AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';

export interface AddrReceivesRequestPartial {
  'filterAddr'?: (string);
  'filterStatus'?: (_taprpc_AddrEventStatusPartial);
}

export interface AddrReceivesRequest {
  'filterAddr': (string);
  'filterStatus': (_taprpc_AddrEventStatus);
}
