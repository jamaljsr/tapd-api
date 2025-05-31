// Original file: protos/taprootassets.proto

import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { ScriptKeyTypePartial as _taprpc_ScriptKeyTypePartial, ScriptKeyType as _taprpc_ScriptKeyType } from '../taprpc/ScriptKeyType';

export interface ScriptKeyPartial {
  'pubKey'?: (Buffer | Uint8Array | string);
  'keyDesc'?: (_taprpc_KeyDescriptorPartial | null);
  'tapTweak'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_ScriptKeyTypePartial);
}

export interface ScriptKey {
  'pubKey': (Buffer);
  'keyDesc': (_taprpc_KeyDescriptor | null);
  'tapTweak': (Buffer);
  'type': (_taprpc_ScriptKeyType);
}
