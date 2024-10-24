// Original file: protos/universerpc/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface GroupedUniverseEventsPartial {
  'date'?: (string);
  'syncEvents'?: (number | string | Long);
  'newProofEvents'?: (number | string | Long);
}

export interface GroupedUniverseEvents {
  'date': (string);
  'syncEvents': (string);
  'newProofEvents': (string);
}
