// Original file: protos/routerrpc/router.proto

import type { AprioriParametersPartial as _routerrpc_AprioriParametersPartial, AprioriParameters as _routerrpc_AprioriParameters } from '../routerrpc/AprioriParameters';
import type { BimodalParametersPartial as _routerrpc_BimodalParametersPartial, BimodalParameters as _routerrpc_BimodalParameters } from '../routerrpc/BimodalParameters';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/routerrpc/router.proto

export const _routerrpc_MissionControlConfig_ProbabilityModel = {
  APRIORI: 'APRIORI',
  BIMODAL: 'BIMODAL',
} as const;

export type _routerrpc_MissionControlConfig_ProbabilityModelPartial =
  | 'APRIORI'
  | 0
  | 'BIMODAL'
  | 1

export type _routerrpc_MissionControlConfig_ProbabilityModel = typeof _routerrpc_MissionControlConfig_ProbabilityModel[keyof typeof _routerrpc_MissionControlConfig_ProbabilityModel]

export interface MissionControlConfigPartial {
  'halfLifeSeconds'?: (number | string | Long);
  'hopProbability'?: (number | string);
  'weight'?: (number | string);
  'maximumPaymentResults'?: (number);
  'minimumFailureRelaxInterval'?: (number | string | Long);
  'model'?: (_routerrpc_MissionControlConfig_ProbabilityModelPartial);
  'apriori'?: (_routerrpc_AprioriParametersPartial | null);
  'bimodal'?: (_routerrpc_BimodalParametersPartial | null);
  'EstimatorConfig'?: "apriori"|"bimodal";
}

export interface MissionControlConfig {
  'halfLifeSeconds': (string);
  'hopProbability': (number);
  'weight': (number);
  'maximumPaymentResults': (number);
  'minimumFailureRelaxInterval': (string);
  'model': (_routerrpc_MissionControlConfig_ProbabilityModel);
  'apriori'?: (_routerrpc_AprioriParameters | null);
  'bimodal'?: (_routerrpc_BimodalParameters | null);
  'EstimatorConfig': "apriori"|"bimodal";
}
