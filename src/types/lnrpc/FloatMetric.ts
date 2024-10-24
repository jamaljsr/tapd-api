// Original file: protos/lightning.proto


export interface FloatMetricPartial {
  'value'?: (number | string);
  'normalizedValue'?: (number | string);
}

export interface FloatMetric {
  'value': (number);
  'normalizedValue': (number);
}
