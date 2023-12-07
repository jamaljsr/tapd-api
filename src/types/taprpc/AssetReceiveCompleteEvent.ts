// Original file: protos/taprootassets.proto

import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { Long } from '@grpc/proto-loader';

export interface AssetReceiveCompleteEventPartial {
  'timestamp'?: (number | string | Long);
  'address'?: (_taprpc_AddrPartial | null);
  'outpoint'?: (string);
}

export interface AssetReceiveCompleteEvent {
  'timestamp': (string);
  'address': (_taprpc_Addr | null);
  'outpoint': (string);
}
