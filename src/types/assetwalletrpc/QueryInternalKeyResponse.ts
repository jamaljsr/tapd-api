// Original file: protos/assetwalletrpc/assetwallet.proto

import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';

export interface QueryInternalKeyResponsePartial {
  'internalKey'?: (_taprpc_KeyDescriptorPartial | null);
}

export interface QueryInternalKeyResponse {
  'internalKey': (_taprpc_KeyDescriptor | null);
}
