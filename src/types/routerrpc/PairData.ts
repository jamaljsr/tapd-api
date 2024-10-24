// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface PairDataPartial {
  'failTime'?: (number | string | Long);
  'failAmtSat'?: (number | string | Long);
  'failAmtMsat'?: (number | string | Long);
  'successTime'?: (number | string | Long);
  'successAmtSat'?: (number | string | Long);
  'successAmtMsat'?: (number | string | Long);
}

export interface PairData {
  'failTime': (string);
  'failAmtSat': (string);
  'failAmtMsat': (string);
  'successTime': (string);
  'successAmtSat': (string);
  'successAmtMsat': (string);
}
