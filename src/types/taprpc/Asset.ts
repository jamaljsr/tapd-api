// Original file: protos/taprootassets.proto

import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { AssetGroupPartial as _taprpc_AssetGroupPartial, AssetGroup as _taprpc_AssetGroup } from '../taprpc/AssetGroup';
import type { AnchorInfoPartial as _taprpc_AnchorInfoPartial, AnchorInfo as _taprpc_AnchorInfo } from '../taprpc/AnchorInfo';
import type { PrevWitnessPartial as _taprpc_PrevWitnessPartial, PrevWitness as _taprpc_PrevWitness } from '../taprpc/PrevWitness';
import type { DecimalDisplayPartial as _taprpc_DecimalDisplayPartial, DecimalDisplay as _taprpc_DecimalDisplay } from '../taprpc/DecimalDisplay';
import type { ScriptKeyTypePartial as _taprpc_ScriptKeyTypePartial, ScriptKeyType as _taprpc_ScriptKeyType } from '../taprpc/ScriptKeyType';
import type { Long } from '@grpc/proto-loader';

export interface AssetPartial {
  'version'?: (_taprpc_AssetVersionPartial);
  'assetGenesis'?: (_taprpc_GenesisInfoPartial | null);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'scriptVersion'?: (number);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'scriptKeyIsLocal'?: (boolean);
  'assetGroup'?: (_taprpc_AssetGroupPartial | null);
  'chainAnchor'?: (_taprpc_AnchorInfoPartial | null);
  'prevWitnesses'?: (_taprpc_PrevWitnessPartial)[];
  'isSpent'?: (boolean);
  'leaseOwner'?: (Buffer | Uint8Array | string);
  'leaseExpiry'?: (number | string | Long);
  'isBurn'?: (boolean);
  'scriptKeyDeclaredKnown'?: (boolean);
  'scriptKeyHasScriptPath'?: (boolean);
  'decimalDisplay'?: (_taprpc_DecimalDisplayPartial | null);
  'scriptKeyType'?: (_taprpc_ScriptKeyTypePartial);
}

export interface Asset {
  'version': (_taprpc_AssetVersion);
  'assetGenesis': (_taprpc_GenesisInfo | null);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'scriptVersion': (number);
  'scriptKey': (Buffer);
  'scriptKeyIsLocal': (boolean);
  'assetGroup': (_taprpc_AssetGroup | null);
  'chainAnchor': (_taprpc_AnchorInfo | null);
  'prevWitnesses': (_taprpc_PrevWitness)[];
  'isSpent': (boolean);
  'leaseOwner': (Buffer);
  'leaseExpiry': (string);
  'isBurn': (boolean);
  'scriptKeyDeclaredKnown': (boolean);
  'scriptKeyHasScriptPath': (boolean);
  'decimalDisplay': (_taprpc_DecimalDisplay | null);
  'scriptKeyType': (_taprpc_ScriptKeyType);
}
