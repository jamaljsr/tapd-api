// Original file: protos/lightning.proto

import type { ChannelFeeReportPartial as _lnrpc_ChannelFeeReportPartial, ChannelFeeReport as _lnrpc_ChannelFeeReport } from '../lnrpc/ChannelFeeReport';
import type { Long } from '@grpc/proto-loader';

export interface FeeReportResponsePartial {
  'channelFees'?: (_lnrpc_ChannelFeeReportPartial)[];
  'dayFeeSum'?: (number | string | Long);
  'weekFeeSum'?: (number | string | Long);
  'monthFeeSum'?: (number | string | Long);
}

export interface FeeReportResponse {
  'channelFees': (_lnrpc_ChannelFeeReport)[];
  'dayFeeSum': (string);
  'weekFeeSum': (string);
  'monthFeeSum': (string);
}
