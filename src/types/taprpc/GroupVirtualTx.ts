// Original file: protos/taprootassets.proto

import type { TxOutPartial as _taprpc_TxOutPartial, TxOut as _taprpc_TxOut } from '../taprpc/TxOut';

export interface GroupVirtualTxPartial {
  'transaction'?: (Buffer | Uint8Array | string);
  'prevOut'?: (_taprpc_TxOutPartial | null);
  'genesisId'?: (Buffer | Uint8Array | string);
  'tweakedKey'?: (Buffer | Uint8Array | string);
}

export interface GroupVirtualTx {
  'transaction': (Buffer);
  'prevOut': (_taprpc_TxOut | null);
  'genesisId': (Buffer);
  'tweakedKey': (Buffer);
}
