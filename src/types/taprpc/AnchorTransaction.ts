// Original file: protos/taprootassets.proto

import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface AnchorTransactionPartial {
  'anchorPsbt'?: (Buffer | Uint8Array | string);
  'changeOutputIndex'?: (number);
  'chainFeesSats'?: (number | string | Long);
  'targetFeeRateSatKw'?: (number);
  'lndLockedUtxos'?: (_taprpc_OutPointPartial)[];
  'finalTx'?: (Buffer | Uint8Array | string);
}

export interface AnchorTransaction {
  'anchorPsbt': (Buffer);
  'changeOutputIndex': (number);
  'chainFeesSats': (string);
  'targetFeeRateSatKw': (number);
  'lndLockedUtxos': (_taprpc_OutPoint)[];
  'finalTx': (Buffer);
}
