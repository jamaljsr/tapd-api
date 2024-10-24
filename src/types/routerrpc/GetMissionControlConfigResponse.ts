// Original file: protos/routerrpc/router.proto

import type { MissionControlConfigPartial as _routerrpc_MissionControlConfigPartial, MissionControlConfig as _routerrpc_MissionControlConfig } from '../routerrpc/MissionControlConfig';

export interface GetMissionControlConfigResponsePartial {
  'config'?: (_routerrpc_MissionControlConfigPartial | null);
}

export interface GetMissionControlConfigResponse {
  'config': (_routerrpc_MissionControlConfig | null);
}
