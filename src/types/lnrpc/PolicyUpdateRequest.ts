// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { InboundFeePartial as _lnrpc_InboundFeePartial, InboundFee as _lnrpc_InboundFee } from '../lnrpc/InboundFee';
import type { Long } from '@grpc/proto-loader';

export interface PolicyUpdateRequestPartial {
  'global'?: (boolean);
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'baseFeeMsat'?: (number | string | Long);
  'feeRate'?: (number | string);
  'timeLockDelta'?: (number);
  'maxHtlcMsat'?: (number | string | Long);
  'minHtlcMsat'?: (number | string | Long);
  'minHtlcMsatSpecified'?: (boolean);
  'feeRatePpm'?: (number);
  'inboundFee'?: (_lnrpc_InboundFeePartial | null);
  'scope'?: "global"|"chanPoint";
}

export interface PolicyUpdateRequest {
  'global'?: (boolean);
  'chanPoint'?: (_lnrpc_ChannelPoint | null);
  'baseFeeMsat': (string);
  'feeRate': (number);
  'timeLockDelta': (number);
  'maxHtlcMsat': (string);
  'minHtlcMsat': (string);
  'minHtlcMsatSpecified': (boolean);
  'feeRatePpm': (number);
  'inboundFee': (_lnrpc_InboundFee | null);
  'scope': "global"|"chanPoint";
}
