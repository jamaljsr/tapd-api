// Original file: protos/taprootassets.proto

import type { TransferOutputAnchorPartial as _taprpc_TransferOutputAnchorPartial, TransferOutputAnchor as _taprpc_TransferOutputAnchor } from '../taprpc/TransferOutputAnchor';
import type { OutputTypePartial as _taprpc_OutputTypePartial, OutputType as _taprpc_OutputType } from '../taprpc/OutputType';
import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { Long } from '@grpc/proto-loader';

export interface TransferOutputPartial {
  'anchor'?: (_taprpc_TransferOutputAnchorPartial | null);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'amount'?: (number | string | Long);
  'newProofBlob'?: (Buffer | Uint8Array | string);
  'splitCommitRootHash'?: (Buffer | Uint8Array | string);
  'outputType'?: (_taprpc_OutputTypePartial);
  'assetVersion'?: (_taprpc_AssetVersionPartial);
}

export interface TransferOutput {
  'anchor': (_taprpc_TransferOutputAnchor | null);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'amount': (string);
  'newProofBlob': (Buffer);
  'splitCommitRootHash': (Buffer);
  'outputType': (_taprpc_OutputType);
  'assetVersion': (_taprpc_AssetVersion);
}
