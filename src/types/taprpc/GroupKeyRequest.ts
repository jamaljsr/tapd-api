// Original file: protos/taprootassets.proto

import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';

export interface GroupKeyRequestPartial {
  'rawKey'?: (_taprpc_KeyDescriptorPartial | null);
  'anchorGenesis'?: (_taprpc_GenesisInfoPartial | null);
  'tapscriptRoot'?: (Buffer | Uint8Array | string);
  'newAsset'?: (Buffer | Uint8Array | string);
}

export interface GroupKeyRequest {
  'rawKey': (_taprpc_KeyDescriptor | null);
  'anchorGenesis': (_taprpc_GenesisInfo | null);
  'tapscriptRoot': (Buffer);
  'newAsset': (Buffer);
}
