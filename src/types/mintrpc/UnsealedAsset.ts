// Original file: protos/mintrpc/mint.proto

import type { PendingAssetPartial as _mintrpc_PendingAssetPartial, PendingAsset as _mintrpc_PendingAsset } from '../mintrpc/PendingAsset';
import type { GroupKeyRequestPartial as _taprpc_GroupKeyRequestPartial, GroupKeyRequest as _taprpc_GroupKeyRequest } from '../taprpc/GroupKeyRequest';
import type { GroupVirtualTxPartial as _taprpc_GroupVirtualTxPartial, GroupVirtualTx as _taprpc_GroupVirtualTx } from '../taprpc/GroupVirtualTx';

export interface UnsealedAssetPartial {
  'asset'?: (_mintrpc_PendingAssetPartial | null);
  'groupKeyRequest'?: (_taprpc_GroupKeyRequestPartial | null);
  'groupVirtualTx'?: (_taprpc_GroupVirtualTxPartial | null);
  'groupVirtualPsbt'?: (string);
}

export interface UnsealedAsset {
  'asset': (_mintrpc_PendingAsset | null);
  'groupKeyRequest': (_taprpc_GroupKeyRequest | null);
  'groupVirtualTx': (_taprpc_GroupVirtualTx | null);
  'groupVirtualPsbt': (string);
}
