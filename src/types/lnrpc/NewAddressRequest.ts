// Original file: protos/lightning.proto

import type { AddressTypePartial as _lnrpc_AddressTypePartial, AddressType as _lnrpc_AddressType } from '../lnrpc/AddressType';

export interface NewAddressRequestPartial {
  'type'?: (_lnrpc_AddressTypePartial);
  'account'?: (string);
}

export interface NewAddressRequest {
  'type': (_lnrpc_AddressType);
  'account': (string);
}
