// Original file: protos/lightning.proto

import type { MacaroonPermissionPartial as _lnrpc_MacaroonPermissionPartial, MacaroonPermission as _lnrpc_MacaroonPermission } from '../lnrpc/MacaroonPermission';
import type { Long } from '@grpc/proto-loader';

export interface BakeMacaroonRequestPartial {
  'permissions'?: (_lnrpc_MacaroonPermissionPartial)[];
  'rootKeyId'?: (number | string | Long);
  'allowExternalPermissions'?: (boolean);
}

export interface BakeMacaroonRequest {
  'permissions': (_lnrpc_MacaroonPermission)[];
  'rootKeyId': (string);
  'allowExternalPermissions': (boolean);
}
