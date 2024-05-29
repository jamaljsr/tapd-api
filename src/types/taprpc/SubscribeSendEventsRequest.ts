// Original file: protos/taprootassets.proto


export interface SubscribeSendEventsRequestPartial {
  'filterScriptKey'?: (Buffer | Uint8Array | string);
}

export interface SubscribeSendEventsRequest {
  'filterScriptKey': (Buffer);
}
