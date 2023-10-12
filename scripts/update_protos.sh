#! /bin/bash

curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/main/taprpc/taprootassets.proto > protos/taprootassets.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/main/taprpc/assetwalletrpc/assetwallet.proto > protos/assetwallet.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/main/taprpc/mintrpc/mint.proto > protos/mint.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/main/taprpc/universerpc/universe.proto > protos/universe.proto
