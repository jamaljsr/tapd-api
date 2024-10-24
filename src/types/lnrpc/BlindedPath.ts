// Original file: protos/lightning.proto

import type { BlindedHopPartial as _lnrpc_BlindedHopPartial, BlindedHop as _lnrpc_BlindedHop } from '../lnrpc/BlindedHop';

export interface BlindedPathPartial {
  'introductionNode'?: (Buffer | Uint8Array | string);
  'blindingPoint'?: (Buffer | Uint8Array | string);
  'blindedHops'?: (_lnrpc_BlindedHopPartial)[];
}

export interface BlindedPath {
  'introductionNode': (Buffer);
  'blindingPoint': (Buffer);
  'blindedHops': (_lnrpc_BlindedHop)[];
}
