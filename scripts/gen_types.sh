rm -rf ./src/types

TS_PROTO_OPTIONS="\
  --longs=String \
  --enums=String \
  --defaults \
  --oneofs \
  --inputTemplate=%sPartial \
  --outputTemplate=%s \
  --grpcLib=@grpc/grpc-js \
  --outDir=./src/types/ \
"

./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ${TS_PROTO_OPTIONS} taprootassets.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/assetwalletrpc ${TS_PROTO_OPTIONS} assetwallet.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/mintrpc ${TS_PROTO_OPTIONS} mint.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/priceoraclerpc ${TS_PROTO_OPTIONS} price_oracle.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/rfqrpc ${TS_PROTO_OPTIONS} rfq.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/tapchannelrpc ${TS_PROTO_OPTIONS} tapchannel.proto
./node_modules/.bin/proto-loader-gen-types --includeDirs=./protos ./protos/universerpc ${TS_PROTO_OPTIONS} universe.proto
