// Original file: protos/lightning.proto

import type { NodeMetricTypePartial as _lnrpc_NodeMetricTypePartial, NodeMetricType as _lnrpc_NodeMetricType } from '../lnrpc/NodeMetricType';

export interface NodeMetricsRequestPartial {
  'types'?: (_lnrpc_NodeMetricTypePartial)[];
}

export interface NodeMetricsRequest {
  'types': (_lnrpc_NodeMetricType)[];
}
