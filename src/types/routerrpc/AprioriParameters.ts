// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface AprioriParametersPartial {
  'halfLifeSeconds'?: (number | string | Long);
  'hopProbability'?: (number | string);
  'weight'?: (number | string);
  'capacityFraction'?: (number | string);
}

export interface AprioriParameters {
  'halfLifeSeconds': (string);
  'hopProbability': (number);
  'weight': (number);
  'capacityFraction': (number);
}
