// Original file: protos/lightning.proto

import type { OutputScriptTypePartial as _lnrpc_OutputScriptTypePartial, OutputScriptType as _lnrpc_OutputScriptType } from '../lnrpc/OutputScriptType';
import type { Long } from '@grpc/proto-loader';

export interface OutputDetailPartial {
  'outputType'?: (_lnrpc_OutputScriptTypePartial);
  'address'?: (string);
  'pkScript'?: (string);
  'outputIndex'?: (number | string | Long);
  'amount'?: (number | string | Long);
  'isOurAddress'?: (boolean);
}

export interface OutputDetail {
  'outputType': (_lnrpc_OutputScriptType);
  'address': (string);
  'pkScript': (string);
  'outputIndex': (string);
  'amount': (string);
  'isOurAddress': (boolean);
}
