// Original file: protos/lightning.proto

import type { BlindedPathPartial as _lnrpc_BlindedPathPartial, BlindedPath as _lnrpc_BlindedPath } from '../lnrpc/BlindedPath';

export interface OnionMessageUpdatePartial {
  'peer'?: (Buffer | Uint8Array | string);
  'pathKey'?: (Buffer | Uint8Array | string);
  'onion'?: (Buffer | Uint8Array | string);
  'replyPath'?: (_lnrpc_BlindedPathPartial | null);
  'encryptedRecipientData'?: (Buffer | Uint8Array | string);
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface OnionMessageUpdate {
  'peer': (Buffer);
  'pathKey': (Buffer);
  'onion': (Buffer);
  'replyPath': (_lnrpc_BlindedPath | null);
  'encryptedRecipientData': (Buffer);
  'customRecords': ({[key: number]: Buffer});
}
