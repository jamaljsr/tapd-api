// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ListPaymentsRequestPartial {
  'includeIncomplete'?: (boolean);
  'indexOffset'?: (number | string | Long);
  'maxPayments'?: (number | string | Long);
  'reversed'?: (boolean);
  'countTotalPayments'?: (boolean);
  'creationDateStart'?: (number | string | Long);
  'creationDateEnd'?: (number | string | Long);
}

export interface ListPaymentsRequest {
  'includeIncomplete': (boolean);
  'indexOffset': (string);
  'maxPayments': (string);
  'reversed': (boolean);
  'countTotalPayments': (boolean);
  'creationDateStart': (string);
  'creationDateEnd': (string);
}
