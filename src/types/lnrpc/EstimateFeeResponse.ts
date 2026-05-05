// Original file: protos/lightning.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface EstimateFeeResponsePartial {
  'feeSat'?: (number | string | Long);
  'feerateSatPerByte'?: (number | string | Long);
  'satPerVbyte'?: (number | string | Long);
  'inputs'?: (_lnrpc_OutPointPartial)[];
}

export interface EstimateFeeResponse {
  'feeSat': (string);
  'feerateSatPerByte': (string);
  'satPerVbyte': (string);
  'inputs': (_lnrpc_OutPoint)[];
}
