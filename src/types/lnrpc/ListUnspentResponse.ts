// Original file: protos/lightning.proto

import type { UtxoPartial as _lnrpc_UtxoPartial, Utxo as _lnrpc_Utxo } from '../lnrpc/Utxo';

export interface ListUnspentResponsePartial {
  'utxos'?: (_lnrpc_UtxoPartial)[];
}

export interface ListUnspentResponse {
  'utxos': (_lnrpc_Utxo)[];
}
