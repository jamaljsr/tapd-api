// Original file: protos/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface CommitVirtualPsbtsResponsePartial {
  'anchorPsbt'?: (Buffer | Uint8Array | string);
  'virtualPsbts'?: (Buffer | Uint8Array | string)[];
  'passiveAssetPsbts'?: (Buffer | Uint8Array | string)[];
  'changeOutputIndex'?: (number);
  'lndLockedUtxos'?: (_taprpc_OutPointPartial)[];
}

export interface CommitVirtualPsbtsResponse {
  'anchorPsbt': (Buffer);
  'virtualPsbts': (Buffer)[];
  'passiveAssetPsbts': (Buffer)[];
  'changeOutputIndex': (number);
  'lndLockedUtxos': (_taprpc_OutPoint)[];
}
