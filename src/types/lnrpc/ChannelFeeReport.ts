// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelFeeReportPartial {
  'channelPoint'?: (string);
  'baseFeeMsat'?: (number | string | Long);
  'feePerMil'?: (number | string | Long);
  'feeRate'?: (number | string);
  'chanId'?: (number | string | Long);
  'inboundBaseFeeMsat'?: (number);
  'inboundFeePerMil'?: (number);
}

export interface ChannelFeeReport {
  'channelPoint': (string);
  'baseFeeMsat': (string);
  'feePerMil': (string);
  'feeRate': (number);
  'chanId': (string);
  'inboundBaseFeeMsat': (number);
  'inboundFeePerMil': (number);
}
