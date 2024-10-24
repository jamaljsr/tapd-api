// Original file: protos/lightning.proto

import type { MiddlewareRegistrationPartial as _lnrpc_MiddlewareRegistrationPartial, MiddlewareRegistration as _lnrpc_MiddlewareRegistration } from '../lnrpc/MiddlewareRegistration';
import type { InterceptFeedbackPartial as _lnrpc_InterceptFeedbackPartial, InterceptFeedback as _lnrpc_InterceptFeedback } from '../lnrpc/InterceptFeedback';
import type { Long } from '@grpc/proto-loader';

export interface RPCMiddlewareResponsePartial {
  'refMsgId'?: (number | string | Long);
  'register'?: (_lnrpc_MiddlewareRegistrationPartial | null);
  'feedback'?: (_lnrpc_InterceptFeedbackPartial | null);
  'middlewareMessage'?: "register"|"feedback";
}

export interface RPCMiddlewareResponse {
  'refMsgId': (string);
  'register'?: (_lnrpc_MiddlewareRegistration | null);
  'feedback'?: (_lnrpc_InterceptFeedback | null);
  'middlewareMessage': "register"|"feedback";
}
