// Original file: protos/tapchannelrpc/tapchannel.proto

import type { DecimalDisplayPartial as _taprpc_DecimalDisplayPartial, DecimalDisplay as _taprpc_DecimalDisplay } from '../taprpc/DecimalDisplay';
import type { AssetGroupPartial as _taprpc_AssetGroupPartial, AssetGroup as _taprpc_AssetGroup } from '../taprpc/AssetGroup';
import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { PayReqPartial as _lnrpc_PayReqPartial, PayReq as _lnrpc_PayReq } from '../lnrpc/PayReq';
import type { Long } from '@grpc/proto-loader';

export interface AssetPayReqResponsePartial {
  'assetAmount'?: (number | string | Long);
  'decimalDisplay'?: (_taprpc_DecimalDisplayPartial | null);
  'assetGroup'?: (_taprpc_AssetGroupPartial | null);
  'genesisInfo'?: (_taprpc_GenesisInfoPartial | null);
  'payReq'?: (_lnrpc_PayReqPartial | null);
}

export interface AssetPayReqResponse {
  'assetAmount': (string);
  'decimalDisplay': (_taprpc_DecimalDisplay | null);
  'assetGroup': (_taprpc_AssetGroup | null);
  'genesisInfo': (_taprpc_GenesisInfo | null);
  'payReq': (_lnrpc_PayReq | null);
}
