// Original file: protos/lightning.proto

import type { PaymentPartial as _lnrpc_PaymentPartial, Payment as _lnrpc_Payment } from '../lnrpc/Payment';
import type { Long } from '@grpc/proto-loader';

export interface ListPaymentsResponsePartial {
  'payments'?: (_lnrpc_PaymentPartial)[];
  'firstIndexOffset'?: (number | string | Long);
  'lastIndexOffset'?: (number | string | Long);
  'totalNumPayments'?: (number | string | Long);
}

export interface ListPaymentsResponse {
  'payments': (_lnrpc_Payment)[];
  'firstIndexOffset': (string);
  'lastIndexOffset': (string);
  'totalNumPayments': (string);
}
