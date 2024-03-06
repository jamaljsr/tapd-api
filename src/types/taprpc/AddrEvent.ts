// Original file: protos/taprootassets.proto

import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { AddrEventStatusPartial as _taprpc_AddrEventStatusPartial, AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';
import type { Long } from '@grpc/proto-loader';

export interface AddrEventPartial {
  'creationTimeUnixSeconds'?: (number | string | Long);
  'addr'?: (_taprpc_AddrPartial | null);
  'status'?: (_taprpc_AddrEventStatusPartial);
  'outpoint'?: (string);
  'utxoAmtSat'?: (number | string | Long);
  'taprootSibling'?: (Buffer | Uint8Array | string);
  'confirmationHeight'?: (number);
  'hasProof'?: (boolean);
}

export interface AddrEvent {
  'creationTimeUnixSeconds': (string);
  'addr': (_taprpc_Addr | null);
  'status': (_taprpc_AddrEventStatus);
  'outpoint': (string);
  'utxoAmtSat': (string);
  'taprootSibling': (Buffer);
  'confirmationHeight': (number);
  'hasProof': (boolean);
}
