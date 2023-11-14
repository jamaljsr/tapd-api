// Original file: protos/taprootassets.proto

import type { ProofTransferType as _taprpc_ProofTransferType } from '../taprpc/ProofTransferType';
import type { Long } from '@grpc/proto-loader';

export interface ProofTransferBackoffWaitEventPartial {
  'timestamp'?: (number | string | Long);
  'backoff'?: (number | string | Long);
  'triesCounter'?: (number | string | Long);
  'transferType'?: (_taprpc_ProofTransferType | keyof typeof _taprpc_ProofTransferType);
}

export interface ProofTransferBackoffWaitEvent {
  'timestamp': (string);
  'backoff': (string);
  'triesCounter': (string);
  'transferType': (keyof typeof _taprpc_ProofTransferType);
}
