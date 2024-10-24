// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface CloseOutputPartial {
  'amountSat'?: (number | string | Long);
  'pkScript'?: (Buffer | Uint8Array | string);
  'isLocal'?: (boolean);
  'customChannelData'?: (Buffer | Uint8Array | string);
}

export interface CloseOutput {
  'amountSat': (string);
  'pkScript': (Buffer);
  'isLocal': (boolean);
  'customChannelData': (Buffer);
}
