// Original file: protos/routerrpc/router.proto

import type { CircuitKeyPartial as _routerrpc_CircuitKeyPartial, CircuitKey as _routerrpc_CircuitKey } from '../routerrpc/CircuitKey';
import type { Long } from '@grpc/proto-loader';

export interface ForwardHtlcInterceptRequestPartial {
  'incomingCircuitKey'?: (_routerrpc_CircuitKeyPartial | null);
  'paymentHash'?: (Buffer | Uint8Array | string);
  'outgoingAmountMsat'?: (number | string | Long);
  'outgoingExpiry'?: (number);
  'incomingAmountMsat'?: (number | string | Long);
  'incomingExpiry'?: (number);
  'outgoingRequestedChanId'?: (number | string | Long);
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'onionBlob'?: (Buffer | Uint8Array | string);
  'autoFailHeight'?: (number);
  'inWireCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface ForwardHtlcInterceptRequest {
  'incomingCircuitKey': (_routerrpc_CircuitKey | null);
  'paymentHash': (Buffer);
  'outgoingAmountMsat': (string);
  'outgoingExpiry': (number);
  'incomingAmountMsat': (string);
  'incomingExpiry': (number);
  'outgoingRequestedChanId': (string);
  'customRecords': ({[key: number]: Buffer});
  'onionBlob': (Buffer);
  'autoFailHeight': (number);
  'inWireCustomRecords': ({[key: number]: Buffer});
}
