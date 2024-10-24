// Original file: protos/lightning.proto

import type { MacaroonPermissionPartial as _lnrpc_MacaroonPermissionPartial, MacaroonPermission as _lnrpc_MacaroonPermission } from '../lnrpc/MacaroonPermission';

export interface CheckMacPermRequestPartial {
  'macaroon'?: (Buffer | Uint8Array | string);
  'permissions'?: (_lnrpc_MacaroonPermissionPartial)[];
  'fullMethod'?: (string);
}

export interface CheckMacPermRequest {
  'macaroon': (Buffer);
  'permissions': (_lnrpc_MacaroonPermission)[];
  'fullMethod': (string);
}
