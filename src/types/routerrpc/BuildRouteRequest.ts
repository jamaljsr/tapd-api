// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface BuildRouteRequestPartial {
  'amtMsat'?: (number | string | Long);
  'finalCltvDelta'?: (number);
  'outgoingChanId'?: (number | string | Long);
  'hopPubkeys'?: (Buffer | Uint8Array | string)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'firstHopCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface BuildRouteRequest {
  'amtMsat': (string);
  'finalCltvDelta': (number);
  'outgoingChanId': (string);
  'hopPubkeys': (Buffer)[];
  'paymentAddr': (Buffer);
  'firstHopCustomRecords': ({[key: number]: Buffer});
}
