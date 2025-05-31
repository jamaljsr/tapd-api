// Original file: protos/lightning.proto

import type { StreamAuthPartial as _lnrpc_StreamAuthPartial, StreamAuth as _lnrpc_StreamAuth } from '../lnrpc/StreamAuth';
import type { RPCMessagePartial as _lnrpc_RPCMessagePartial, RPCMessage as _lnrpc_RPCMessage } from '../lnrpc/RPCMessage';
import type { MetadataValuesPartial as _lnrpc_MetadataValuesPartial, MetadataValues as _lnrpc_MetadataValues } from '../lnrpc/MetadataValues';
import type { Long } from '@grpc/proto-loader';

export interface RPCMiddlewareRequestPartial {
  'requestId'?: (number | string | Long);
  'rawMacaroon'?: (Buffer | Uint8Array | string);
  'customCaveatCondition'?: (string);
  'streamAuth'?: (_lnrpc_StreamAuthPartial | null);
  'request'?: (_lnrpc_RPCMessagePartial | null);
  'response'?: (_lnrpc_RPCMessagePartial | null);
  'msgId'?: (number | string | Long);
  'regComplete'?: (boolean);
  'metadataPairs'?: ({[key: string]: _lnrpc_MetadataValuesPartial});
  'interceptType'?: "streamAuth"|"request"|"response"|"regComplete";
}

export interface RPCMiddlewareRequest {
  'requestId': (string);
  'rawMacaroon': (Buffer);
  'customCaveatCondition': (string);
  'streamAuth'?: (_lnrpc_StreamAuth | null);
  'request'?: (_lnrpc_RPCMessage | null);
  'response'?: (_lnrpc_RPCMessage | null);
  'msgId': (string);
  'regComplete'?: (boolean);
  'metadataPairs': ({[key: string]: _lnrpc_MetadataValues});
  'interceptType': "streamAuth"|"request"|"response"|"regComplete";
}
