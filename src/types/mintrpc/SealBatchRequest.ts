// Original file: protos/mintrpc/mint.proto

import type { GroupWitnessPartial as _taprpc_GroupWitnessPartial, GroupWitness as _taprpc_GroupWitness } from '../taprpc/GroupWitness';

export interface SealBatchRequestPartial {
  'shortResponse'?: (boolean);
  'groupWitnesses'?: (_taprpc_GroupWitnessPartial)[];
}

export interface SealBatchRequest {
  'shortResponse': (boolean);
  'groupWitnesses': (_taprpc_GroupWitness)[];
}
