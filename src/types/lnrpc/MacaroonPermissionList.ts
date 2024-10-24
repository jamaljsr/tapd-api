// Original file: protos/lightning.proto

import type { MacaroonPermissionPartial as _lnrpc_MacaroonPermissionPartial, MacaroonPermission as _lnrpc_MacaroonPermission } from '../lnrpc/MacaroonPermission';

export interface MacaroonPermissionListPartial {
  'permissions'?: (_lnrpc_MacaroonPermissionPartial)[];
}

export interface MacaroonPermissionList {
  'permissions': (_lnrpc_MacaroonPermission)[];
}
