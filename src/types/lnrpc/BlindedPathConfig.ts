// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface BlindedPathConfigPartial {
  'minNumRealHops'?: (number);
  'numHops'?: (number);
  'maxNumPaths'?: (number);
  'nodeOmissionList'?: (Buffer | Uint8Array | string)[];
  'incomingChannelList'?: (number | string | Long)[];
  '_minNumRealHops'?: "minNumRealHops";
  '_numHops'?: "numHops";
  '_maxNumPaths'?: "maxNumPaths";
}

export interface BlindedPathConfig {
  'minNumRealHops'?: (number);
  'numHops'?: (number);
  'maxNumPaths'?: (number);
  'nodeOmissionList': (Buffer)[];
  'incomingChannelList': (string)[];
  '_minNumRealHops': "minNumRealHops";
  '_numHops': "numHops";
  '_maxNumPaths': "maxNumPaths";
}
