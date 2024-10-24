// Original file: protos/lightning.proto

import type { MPPRecordPartial as _lnrpc_MPPRecordPartial, MPPRecord as _lnrpc_MPPRecord } from '../lnrpc/MPPRecord';
import type { AMPRecordPartial as _lnrpc_AMPRecordPartial, AMPRecord as _lnrpc_AMPRecord } from '../lnrpc/AMPRecord';
import type { Long } from '@grpc/proto-loader';

export interface HopPartial {
  'chanId'?: (number | string | Long);
  'chanCapacity'?: (number | string | Long);
  'amtToForward'?: (number | string | Long);
  'fee'?: (number | string | Long);
  'expiry'?: (number);
  'amtToForwardMsat'?: (number | string | Long);
  'feeMsat'?: (number | string | Long);
  'pubKey'?: (string);
  'tlvPayload'?: (boolean);
  'mppRecord'?: (_lnrpc_MPPRecordPartial | null);
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'ampRecord'?: (_lnrpc_AMPRecordPartial | null);
  'metadata'?: (Buffer | Uint8Array | string);
  'blindingPoint'?: (Buffer | Uint8Array | string);
  'encryptedData'?: (Buffer | Uint8Array | string);
  'totalAmtMsat'?: (number | string | Long);
}

export interface Hop {
  'chanId': (string);
  'chanCapacity': (string);
  'amtToForward': (string);
  'fee': (string);
  'expiry': (number);
  'amtToForwardMsat': (string);
  'feeMsat': (string);
  'pubKey': (string);
  'tlvPayload': (boolean);
  'mppRecord': (_lnrpc_MPPRecord | null);
  'customRecords': ({[key: number]: Buffer});
  'ampRecord': (_lnrpc_AMPRecord | null);
  'metadata': (Buffer);
  'blindingPoint': (Buffer);
  'encryptedData': (Buffer);
  'totalAmtMsat': (string);
}
