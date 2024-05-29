// Original file: protos/taprootassets.proto

import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { AddrEventStatusPartial as _taprpc_AddrEventStatusPartial, AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';
import type { Long } from '@grpc/proto-loader';

export interface ReceiveEventPartial {
  'timestamp'?: (number | string | Long);
  'address'?: (_taprpc_AddrPartial | null);
  'outpoint'?: (string);
  'status'?: (_taprpc_AddrEventStatusPartial);
  'confirmationHeight'?: (number);
  'error'?: (string);
}

export interface ReceiveEvent {
  'timestamp': (string);
  'address': (_taprpc_Addr | null);
  'outpoint': (string);
  'status': (_taprpc_AddrEventStatus);
  'confirmationHeight': (number);
  'error': (string);
}
