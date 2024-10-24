// Original file: protos/lightning.proto

import type { AddressTypePartial as _lnrpc_AddressTypePartial, AddressType as _lnrpc_AddressType } from '../lnrpc/AddressType';
import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface UtxoPartial {
  'addressType'?: (_lnrpc_AddressTypePartial);
  'address'?: (string);
  'amountSat'?: (number | string | Long);
  'pkScript'?: (string);
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'confirmations'?: (number | string | Long);
}

export interface Utxo {
  'addressType': (_lnrpc_AddressType);
  'address': (string);
  'amountSat': (string);
  'pkScript': (string);
  'outpoint': (_lnrpc_OutPoint | null);
  'confirmations': (string);
}
