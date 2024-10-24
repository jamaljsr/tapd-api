// Original file: protos/lightning.proto

import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';
import type { NodeAddressPartial as _lnrpc_NodeAddressPartial, NodeAddress as _lnrpc_NodeAddress } from '../lnrpc/NodeAddress';

export interface NodeUpdatePartial {
  'addresses'?: (string)[];
  'identityKey'?: (string);
  'globalFeatures'?: (Buffer | Uint8Array | string);
  'alias'?: (string);
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'nodeAddresses'?: (_lnrpc_NodeAddressPartial)[];
}

export interface NodeUpdate {
  'addresses': (string)[];
  'identityKey': (string);
  'globalFeatures': (Buffer);
  'alias': (string);
  'color': (string);
  'features': ({[key: number]: _lnrpc_Feature});
  'nodeAddresses': (_lnrpc_NodeAddress)[];
}
