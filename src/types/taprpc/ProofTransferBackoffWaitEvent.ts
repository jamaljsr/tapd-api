// Original file: protos/taprootassets.proto

import type { ProofTransferTypePartial as _taprpc_ProofTransferTypePartial, ProofTransferType as _taprpc_ProofTransferType } from '../taprpc/ProofTransferType';
import type { Long } from '@grpc/proto-loader';

export interface ProofTransferBackoffWaitEventPartial {
  'timestamp'?: (number | string | Long);
  'backoff'?: (number | string | Long);
  'triesCounter'?: (number | string | Long);
  'transferType'?: (_taprpc_ProofTransferTypePartial);
}

export interface ProofTransferBackoffWaitEvent {
  'timestamp': (string);
  'backoff': (string);
  'triesCounter': (string);
  'transferType': (_taprpc_ProofTransferType);
}
