// Original file: protos/lightning.proto

import type { OpPartial as _lnrpc_OpPartial, Op as _lnrpc_Op } from '../lnrpc/Op';

export interface MacaroonIdPartial {
  'nonce'?: (Buffer | Uint8Array | string);
  'storageId'?: (Buffer | Uint8Array | string);
  'ops'?: (_lnrpc_OpPartial)[];
}

export interface MacaroonId {
  'nonce': (Buffer);
  'storageId': (Buffer);
  'ops': (_lnrpc_Op)[];
}
