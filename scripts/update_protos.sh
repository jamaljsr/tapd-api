#! /bin/bash

TAG=$1

echo "Updating protos from tapd release tag: ${TAG}"
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/taprootassets.proto > protos/taprootassets.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/assetwalletrpc/assetwallet.proto > protos/assetwallet.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/mintrpc/mint.proto > protos/mint.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/rfqrpc/rfq.proto > protos/rfq.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/tapchannelrpc/tapchannel.proto > protos/tapchannel.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/universerpc/universe.proto > protos/universe.proto
