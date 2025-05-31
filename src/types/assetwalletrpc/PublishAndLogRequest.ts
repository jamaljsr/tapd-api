// Original file: protos/assetwalletrpc/assetwallet.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface PublishAndLogRequestPartial {
  'anchorPsbt'?: (Buffer | Uint8Array | string);
  'virtualPsbts'?: (Buffer | Uint8Array | string)[];
  'passiveAssetPsbts'?: (Buffer | Uint8Array | string)[];
  'changeOutputIndex'?: (number);
  'lndLockedUtxos'?: (_taprpc_OutPointPartial)[];
  'skipAnchorTxBroadcast'?: (boolean);
  'label'?: (string);
}

export interface PublishAndLogRequest {
  'anchorPsbt': (Buffer);
  'virtualPsbts': (Buffer)[];
  'passiveAssetPsbts': (Buffer)[];
  'changeOutputIndex': (number);
  'lndLockedUtxos': (_taprpc_OutPoint)[];
  'skipAnchorTxBroadcast': (boolean);
  'label': (string);
}
