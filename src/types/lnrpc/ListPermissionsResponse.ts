// Original file: protos/lightning.proto

import type { MacaroonPermissionListPartial as _lnrpc_MacaroonPermissionListPartial, MacaroonPermissionList as _lnrpc_MacaroonPermissionList } from '../lnrpc/MacaroonPermissionList';

export interface ListPermissionsResponsePartial {
  'methodPermissions'?: ({[key: string]: _lnrpc_MacaroonPermissionListPartial});
}

export interface ListPermissionsResponse {
  'methodPermissions': ({[key: string]: _lnrpc_MacaroonPermissionList});
}
