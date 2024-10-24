// Original file: protos/lightning.proto

import type { FloatMetricPartial as _lnrpc_FloatMetricPartial, FloatMetric as _lnrpc_FloatMetric } from '../lnrpc/FloatMetric';

export interface NodeMetricsResponsePartial {
  'betweennessCentrality'?: ({[key: string]: _lnrpc_FloatMetricPartial});
}

export interface NodeMetricsResponse {
  'betweennessCentrality': ({[key: string]: _lnrpc_FloatMetric});
}
