// Original file: protos/tapchannel.proto

import type { RouterSendPaymentDataPartial as _tapchannelrpc_RouterSendPaymentDataPartial, RouterSendPaymentData as _tapchannelrpc_RouterSendPaymentData } from '../tapchannelrpc/RouterSendPaymentData';

export interface EncodeCustomRecordsRequestPartial {
  'routerSendPayment'?: (_tapchannelrpc_RouterSendPaymentDataPartial | null);
  'input'?: "routerSendPayment";
}

export interface EncodeCustomRecordsRequest {
  'routerSendPayment'?: (_tapchannelrpc_RouterSendPaymentData | null);
  'input': "routerSendPayment";
}
