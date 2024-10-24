// Original file: protos/lightning.proto

import type { NodeAddressPartial as _lnrpc_NodeAddressPartial, NodeAddress as _lnrpc_NodeAddress } from '../lnrpc/NodeAddress';
import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';

export interface LightningNodePartial {
  'lastUpdate'?: (number);
  'pubKey'?: (string);
  'alias'?: (string);
  'addresses'?: (_lnrpc_NodeAddressPartial)[];
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface LightningNode {
  'lastUpdate': (number);
  'pubKey': (string);
  'alias': (string);
  'addresses': (_lnrpc_NodeAddress)[];
  'color': (string);
  'features': ({[key: number]: _lnrpc_Feature});
  'customRecords': ({[key: number]: Buffer});
}
