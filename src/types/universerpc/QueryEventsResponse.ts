// Original file: protos/universerpc/universe.proto

import type { GroupedUniverseEventsPartial as _universerpc_GroupedUniverseEventsPartial, GroupedUniverseEvents as _universerpc_GroupedUniverseEvents } from '../universerpc/GroupedUniverseEvents';

export interface QueryEventsResponsePartial {
  'events'?: (_universerpc_GroupedUniverseEventsPartial)[];
}

export interface QueryEventsResponse {
  'events': (_universerpc_GroupedUniverseEvents)[];
}
