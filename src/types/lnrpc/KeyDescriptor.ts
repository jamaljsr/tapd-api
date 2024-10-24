// Original file: protos/lightning.proto

import type { KeyLocatorPartial as _lnrpc_KeyLocatorPartial, KeyLocator as _lnrpc_KeyLocator } from '../lnrpc/KeyLocator';

export interface KeyDescriptorPartial {
  'rawKeyBytes'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_lnrpc_KeyLocatorPartial | null);
}

export interface KeyDescriptor {
  'rawKeyBytes': (Buffer);
  'keyLoc': (_lnrpc_KeyLocator | null);
}
