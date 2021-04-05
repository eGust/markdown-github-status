# Awesome Rust [![build badge](https://api.travis-ci.org/rust-unofficial/awesome-rust.svg?branch=master)](https://travis-ci.org/rust-unofficial/awesome-rust)

A curated list of Rust code and resources.

If you want to contribute, please read [this](CONTRIBUTING.md).

## Table of contents

  - [Applications](#applications)
    - [Audio and Music](#audio-and-music)
    - [Cryptocurrencies](#cryptocurrencies)
    - [Database](#database)
    - [Emulators](#emulators)
    - [Games](#games)
    - [Graphics](#graphics)
    - [Industrial automation](#industrial-automation)
    - [Observability](#observability)
    - [Operating systems](#operating-systems)
    - [Productivity](#productivity)
    - [Security tools](#security-tools)
    - [System tools](#system-tools)
    - [Text editors](#text-editors)
    - [Text processing](#text-processing)
    - [Image processing](#image-processing)
    - [Utilities](#utilities)
    - [Video](#video)
    - [Virtualization](#virtualization)
    - [Web](#web)
    - [Web Servers](#web-servers)
  - [Development tools](#development-tools)
    - [Build system](#build-system)
    - [Debugging](#debugging)
    - [Deployment](#deployment)
    - [Embedded](#embedded)
    - [FFI](#ffi)
    - [IDEs](#ides)
    - [Pattern recognition](#pattern-recognition)
    - [Profiling](#profiling)
    - [Services](#services)
    - [Static analysis](#static-analysis)
    - [Testing](#testing)
    - [Transpiling](#transpiling)
  - [Libraries](#libraries)
    - [Artificial Intelligence](#artificial-intelligence)
      - [Genetic algorithms](#genetic-algorithms)
      - [Machine learning](#machine-learning)
    - [Astronomy](#astronomy)
    - [Asynchronous](#asynchronous)
    - [Audio and Music](#audio-and-music-1)
    - [Authentication](#authentication)
    - [Automotive](#automotive)
    - [Bioinformatics](#bioinformatics)
    - [Caching](#caching)
    - [Concurrency](#concurrency)
    - [Cloud](#cloud)
    - [Command-line](#command-line)
    - [Compression](#compression)
    - [Computation](#computation)
    - [Configuration](#configuration)
    - [Cryptography](#cryptography)
    - [Database](#database-1)
    - [Data processing](#data-processing)
    - [Data structures](#data-structures)
    - [Data visualization](#data-visualization)
    - [Date and time](#date-and-time)
    - [Distributed systems](#distributed-systems)
    - [Email](#email)
    - [Encoding](#encoding)
    - [Filesystem](#filesystem)
    - [Functional Programming](#functional-programming)
    - [Game development](#game-development)
    - [Geospatial](#geospatial)
    - [Graphics](#graphics-1)
    - [Graph processing](#graph-processing)
    - [GUI](#gui)
    - [Image processing](#image-processing)
    - [Language specification](#language-specification)
    - [Logging](#logging)
    - [Macro](#macro)
    - [Markup language](#markup-language)
    - [Mobile](#mobile)
    - [Network programming](#network-programming)
    - [Parsing](#parsing)
    - [Packaging formats](#packaging-formats)
    - [Peripherals](#peripherals)
    - [Platform specific](#platform-specific)
    - [Scripting](#scripting)
    - [Simulation](#simulation)
    - [Task scheduling](#task-scheduling)
    - [Template engine](#template-engine)
    - [Text processing](#text-processing-1)
    - [Text search](#text-search)
    - [Unsafe](#unsafe)
    - [Virtualization](#virtualization-1)
    - [Web programming](#web-programming)
  - [Registries](#registries)
  - [Resources](#resources)
  - [License](#license)

## Applications

See also [Rust — Production](https://www.rust-lang.org/production) organizations running Rust in production.

* [[ **⭐ 74080 | 👁️ 1717 | 🔀 3910** ] denoland/deno](https://github.com/denoland/deno) — A secure JavaScript/TypeScript runtime built with V8, Rust, and Tokio [![Build Status](https://github.com/denoland/deno/workflows/ci/badge.svg?branch=master&event=push)](https://github.com/denoland/deno/actions)
* [[ **⭐ 30694 | 👁️ 470 | 🔀 1607** ] alacritty](https://github.com/alacritty/alacritty) — A cross-platform, GPU enhanced terminal emulator
* [[ **⭐ 19367 | 👁️ 519 | 🔀 2539** ] Servo](https://github.com/servo/servo) — A prototype web browser engine
* [[ **⭐ 3114 | 👁️ 71 | 🔀 142** ] cloudflare/boringtun](https://github.com/cloudflare/boringtun) — A Userspace WireGuard VPN Implementation [![build badge](https://img.shields.io/badge/crates.io-v0.2.0-orange.svg)](https://crates.io/crates/boringtun)
* [[ **⭐ 2237 | 👁️ 73 | 🔀 140** ] ballista](https://github.com/ballista-compute/ballista) — PoC of distributed compute platform using Rust, Apache Arrow, and Kubernetes!
* [[ **⭐ 2010 | 👁️ 80 | 🔀 41** ] notty](https://github.com/withoutboats/notty) — A new kind of terminal
* [[ **⭐ 1750 | 👁️ 16 | 🔀 61** ] rx](https://github.com/cloudhead/rx) — Vi inspired Modern Pixel Art Editor
* [[ **⭐ 1553 | 👁️ 88 | 🔀 140** ] Rudr](https://github.com/oam-dev/rudr) — A Kubernetes implementation of the [Open Application Model](https://oam.dev/) specification [![](https://github.com/oam-dev/rudr/workflows/Rust/badge.svg?branch=master)](https://github.com/oam-dev/rudr/actions)
* [[ **⭐ 1407 | 👁️ 28 | 🔀 70** ] wezterm](https://github.com/wez/wezterm) — A GPU-accelerated cross-platform terminal emulator and multiplexer
* [[ **⭐ 1062 | 👁️ 41 | 🔀 136** ] linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) — Ultralight service mesh for Kubernetes.
* [[ **⭐ 781 | 👁️ 17 | 🔀 50** ] fcsonline/drill](https://github.com/fcsonline/drill) — A HTTP load testing application inspired by Ansible syntax [![build badge](https://api.travis-ci.org/fcsonline/drill.svg?branch=master)](https://travis-ci.org/fcsonline/drill)
* [[ **⭐ 671 | 👁️ 43 | 🔀 46** ] Fractalide](https://github.com/fractalide/fractalide) — Simple Rust Microservices
* [[ **⭐ 609 | 👁️ 31 | 🔀 38** ] jedisct1/flowgger](https://github.com/awslabs/flowgger) — A fast, simple and lightweight data collector
* [[ **⭐ 568 | 👁️ 13 | 🔀 29** ] tiny](https://github.com/osa1/tiny) — A terminal IRC client
* [[ **⭐ 385 | 👁️ 16 | 🔀 15** ] ivanceras/diwata](https://github.com/ivanceras/diwata) — A database administration tool for postgresql [![build badge](https://api.travis-ci.org/ivanceras/diwata.svg?branch=master)](https://travis-ci.org/ivanceras/diwata)
* [[ **⭐ 249 | 👁️ 13 | 🔀 36** ] kytan](https://github.com/changlan/kytan) — High Performance Peer-to-Peer VPN
* [[ **⭐ 159 | 👁️ 15 | 🔀 4** ] Factotum](https://github.com/snowplow/factotum) — [A system to programmatically run data pipelines](https://snowplowanalytics.com/blog/2016/04/09/introducing-factotum-data-pipeline-runner/) [![build badge](https://api.travis-ci.org/snowplow/factotum.svg?branch=master)](https://travis-ci.org/snowplow/factotum)
* [[ **⭐ 146 | 👁️ 5 | 🔀 6** ] Weld](https://github.com/serayuzgur/weld) — Full fake REST API generator [![build badge](https://api.travis-ci.org/serayuzgur/weld.svg?branch=master)](https://travis-ci.org/serayuzgur/weld)
* [[ **⭐ 136 | 👁️ 4 | 🔀 7** ] asm-cli-rust](https://github.com/cch123/asm-cli-rust) — An interactive assembly shell written in rust.
* [[ **⭐ 86 | 👁️ 7 | 🔀 6** ] Herd](https://github.com/imjacobclark/Herd) — an experimental HTTP load testing application
* [[ **⭐ 85 | 👁️ 9 | 🔀 3** ] nicohman/eidolon](https://github.com/nicohman/eidolon) — A steam and drm-free game registry and launcher for linux and macosx [![build badge](https://api.travis-ci.org/nicohman/eidolon.svg?branch=master)](https://travis-ci.org/nicohman/eidolon)
* [[ **⭐ 67 | 👁️ 9 | 🔀 6** ] andschwa/rust-genetic-algorithm](https://github.com/andschwa/rust-genetic-algorithm) — A genetic algorithm for academic benchmark problems [![build badge](https://api.travis-ci.org/andschwa/rust-genetic-algorithm.svg?branch=master)](https://travis-ci.org/andschwa/rust-genetic-algorithm)
* [[ **⭐ 41 | 👁️ 1 | 🔀 5** ] updns](https://github.com/wyhaya/updns) — DNS proxy tool
* [[ **⭐ 34 | 👁️ 4 | 🔀 3** ] kbknapp/docli](https://github.com/kbknapp/docli-rs) — A command line utility for managing DigitalOcean infrastructure [![build badge](https://api.travis-ci.org/kbknapp/docli-rs.svg?branch=master)](https://travis-ci.org/kbknapp/docli-rs)
* [[ **⭐ 28 | 👁️ 4 | 🔀 1** ] darrint/device-blocker](https://github.com/darrint/device-blocker) — Limit screen time to children's various mobile devices by blocking internet access on the family Wifi router.
* [[ **⭐ 28 | 👁️ 2 | 🔀 7** ] intecture/api](https://github.com/intecture/api) — an API-driven server management and configuration tool [![build badge](https://api.travis-ci.org/intecture/api.svg?branch=master)](https://travis-ci.org/intecture/api)
* [[ **⭐ 27 | 👁️ 2 | 🔀 5** ] AnderEnder/s3find-rs](https://github.com/AnderEnder/s3find-rs) — A command line utility to walk an Amazon S3 hierarchy, an analog of find for Amazon S3 [![build badge](https://api.travis-ci.org/AnderEnder/s3find-rs.svg?branch=master)](https://travis-ci.org/AnderEnder/s3find-rs)
* [[ **⭐ 23 | 👁️ 7 | 🔀 10** ] Sandstorm Collections App](https://github.com/sandstorm-io/collections-app)
* [[ **⭐ 11 | 👁️ 2 | 🔀 8** ] dlecan/generic-dns-update](https://github.com/dlecan/generic-dns-update) — A tool to update DNS zonefiles with your IP address [![build badge](https://api.travis-ci.org/dlecan/generic-dns-update.svg?branch=master)](https://travis-ci.org/dlecan/generic-dns-update)
* [habitat](https://community.chef.io/products/chef-habitat/) — An tool created by [Chef](https://www.chef.io/) to build, deploy, and manage applications.
* [limonite](https://crates.io/crates/limonite) — static blog/website generator [![build badge](https://api.travis-ci.org/qmx/limonite.svg?branch=master)](https://travis-ci.org/qmx/limonite)
* [MaidSafe](https://maidsafe.net) — A decentralized platform.
* [mdBook](https://crates.io/crates/mdbook) — A command line utility to create books from markdown files [![Build Status](https://github.com/rust-lang/mdBook/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/mdBook/actions)
* [Pijul](https://pijul.org) — A patch-based distributed version control system
* [rsign](https://crates.io/crates/rsign) — A simple command-line tool used to generate/sign/verify digital signatures designed to be compatible with Minisign ![Codeship Status for danielrangel/rsign](https://app.codeship.com/projects/60b28d80-7645-0135-4402-1639b58199d0/status?branch=master)
* [trust-dns](https://crates.io/crates/trust-dns) — A DNS-server [![build badge](https://api.travis-ci.org/bluejekyll/trust-dns.svg?branch=master)](https://travis-ci.org/bluejekyll/trust-dns)

### Audio and Music

* [[ **⭐ 8154 | 👁️ 53 | 🔀 285** ] Spotify TUI](https://github.com/Rigellute/spotify-tui) — A Spotify client for the terminal written in Rust. ![Continuous Integration](https://github.com/Rigellute/spotify-tui/workflows/Continuous%20Integration/badge.svg?branch=master)
* [[ **⭐ 4858 | 👁️ 47 | 🔀 270** ] Spotifyd](https://github.com/Spotifyd/spotifyd) — An open source Spotify client running as a UNIX daemon. ![Continuous Integration](https://github.com/Spotifyd/spotifyd/workflows/Continuous%20Integration/badge.svg?branch=master)
* [[ **⭐ 658 | 👁️ 22 | 🔀 43** ] Polaris](https://github.com/agersant/polaris) — A music streaming application.  [![build badge](https://api.travis-ci.org/agersant/polaris.svg?branch=master)](https://travis-ci.org/agersant/polaris)
* [[ **⭐ 78 | 👁️ 5 | 🔀 3** ] enginesound](https://github.com/DasEtwas/enginesound) — A GUI and command line application used to procedurally generate semi-realistic engine sounds. Featuring in-depth configuration, variable sample rate and a frequency analysis window.
* [[ **⭐ 18 | 👁️ 1 | 🔀 0** ] indiscipline/zrtstr](https://github.com/indiscipline/zrtstr) — A command line utility for checking if stereo wav files are faux-stereo (i.e. have identical channels) and converting such files to mono. [![build badge](https://api.travis-ci.org/indiscipline/zrtstr.svg?branch=master)](https://travis-ci.org/indiscipline/zrtstr)
* [[ **⭐ 12 | 👁️ 1 | 🔀 0** ] Lyriek](https://github.com/bartwillems/lyriek) — A multi-threaded GTK 3 application for fetching the lyrics of the current playing song. [![build badge](https://github.com/bartwillems/lyriek/workflows/Rust/badge.svg?branch=master)](https://github.com/BartWillems/lyriek/actions)
* [[ **⭐ 9 | 👁️ 1 | 🔀 0** ] Phate6660/musinfo](https://github.com/Phate6660/musinfo) — A program to query music info from mpd and display it in a notification.
* [[ **⭐ 6 | 👁️ 3 | 🔀 1** ] Phate6660/rsmpc](https://github.com/Phate6660/rsmpc) — An implementation of mpc, but not directly as there will be a few differences.
* [[ **⭐ 0 | 👁️ 1 | 🔀 0** ] Phate6660/rsmpc](https://github.com/Phate6660/rsmpc-gui) — A gtk frontend for mpd.

### Cryptocurrencies

* [[ **⭐ 15753 | 👁️ 580 | 🔀 2392** ] Diem](https://github.com/diem/diem) — Diem’s mission is to enable a simple global currency and financial infrastructure that empowers billions of people.
* [[ **⭐ 4365 | 👁️ 399 | 🔀 1758** ] zcash](https://github.com/zcash/zcash) — Zcash is an implementation of the "Zerocash" protocol.
* [[ **⭐ 4245 | 👁️ 345 | 🔀 1261** ] Substrate](https://github.com/paritytech/substrate) — Generic modular blockchain template written in Rust
* [[ **⭐ 2900 | 👁️ 344 | 🔀 616** ] Polkadot](https://github.com/paritytech/polkadot) — Heterogeneous multi‑chain technology with pooled security
* [[ **⭐ 1157 | 👁️ 87 | 🔀 197** ] CITA](https://github.com/citahub/cita) — A high performance blockchain kernel for enterprise users.
* [[ **⭐ 994 | 👁️ 59 | 🔀 213** ] Lighthouse](https://github.com/sigp/lighthouse) — Rust Ethereum 2.0 Client [![Build Status](https://github.com/sigp/lighthouse/workflows/test-suite/badge.svg?branch=master)](https://github.com/sigp/lighthouse/actions)
* [[ **⭐ 850 | 👁️ 56 | 🔀 127** ] near/nearcore](https://github.com/near/nearcore) — decentralized smart-contract platform for low-end mobile devices.
* [[ **⭐ 786 | 👁️ 58 | 🔀 147** ] Nervos CKB](https://github.com/nervosnetwork/ckb) — Nervos CKB is a public permissionless blockchain, the common knowledge layer of Nervos network.
* [[ **⭐ 654 | 👁️ 63 | 🔀 190** ] Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) — The Parity Bitcoin client [![build badge](https://api.travis-ci.org/paritytech/parity-bitcoin.svg?branch=master)](https://travis-ci.com/paritytech/parity-bitcoin)
* [[ **⭐ 353 | 👁️ 15 | 🔀 37** ] wagyu](https://github.com/AleoHQ/wagyu) [[wagyu](https://crates.io/crates/wagyu)] — Rust library for generating cryptocurrency wallets [![build badge](https://api.travis-ci.com/AleoHQ/wagyu.svg?branch=master)](https://api.travis-ci.com/AleoHQ/wagyu.svg?branch=master)
* [[ **⭐ 351 | 👁️ 22 | 🔀 92** ] Parity-Ethereum](https://github.com/openethereum/openethereum) — Fast, light, and robust Ethereum client
* [[ **⭐ 302 | 👁️ 30 | 🔀 84** ] Parity-Bridge](https://github.com/paritytech/parity-bridge) — Bridge between any two ethereum-based networks
* [[ **⭐ 235 | 👁️ 33 | 🔀 34** ] Holochain](https://github.com/holochain/holochain) — Scalable P2P alternative to blockchain for all those distributed apps you always wanted to build. The link to the old repo is [this](https://github.com/holochain/holochain-rust) which is no longer maintained. [![Build Status](https://api.travis-ci.com/holochain/holochain-rust.svg?branch=master)](https://travis-ci.com/holochain/holochain-rust)
* [[ **⭐ 234 | 👁️ 47 | 🔀 66** ] rust-cardano](https://github.com/input-output-hk/rust-cardano) — Rust implementation of Cardano primitives, helpers, and related applications
* [[ **⭐ 188 | 👁️ 33 | 🔀 53** ] ChainX](https://github.com/chainx-org/ChainX) — Fully Decentralized Interchain Crypto Asset Management on Polkadot.
* [[ **⭐ 160 | 👁️ 25 | 🔀 50** ] tendermint-rs](https://github.com/informalsystems/tendermint-rs) - Rust implementation of Tendermint blockchain data structures and clients
* [[ **⭐ 139 | 👁️ 24 | 🔀 25** ] Parity-Zcash](https://github.com/paritytech/parity-zcash) — Rust implementation of the Zcash protocol
* [[ **⭐ 97 | 👁️ 21 | 🔀 52** ] Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) — Confidential smart contract blockchain based on Intel SGX and Substrate
* [[ **⭐ 84 | 👁️ 7 | 🔀 21** ] ethaddrgen](https://github.com/Limeth/ethaddrgen) — Custom Ethereum vanity address generator made in Rust [![build badge](https://api.travis-ci.org/Limeth/ethaddrgen.svg?branch=master)](https://travis-ci.org/Limeth/ethaddrgen)
* [[ **⭐ 77 | 👁️ 4 | 🔀 23** ] coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) — Coinbase pro client in Rust, supports sync/async/websocket [![build badge](https://api.travis-ci.org/inv2004/coinbase-pro-rs.svg?branch=master)](https://travis-ci.org/inv2004/coinbase-pro-rs)
* [[ **⭐ 71 | 👁️ 21 | 🔀 17** ] ibc-rs](https://github.com/informalsystems/ibc-rs) - Rust implementation of the [Interblockchain Communication](https://cosmos.network/ibc/) protocol
* [[ **⭐ 71 | 👁️ 19 | 🔀 36** ] cardano-cli](https://github.com/input-output-hk/cardano-cli) — Cardano Command Line Interface (CLI)
* [[ **⭐ 69 | 👁️ 17 | 🔀 8** ] Nimiq](https://github.com/nimiq/core-rs) — Rust implementation of Nimiq node [![Build Status](https://api.travis-ci.com/nimiq/core-rs.svg?branch=master)](https://travis-ci.com/nimiq/core-rs)
* [[ **⭐ 59 | 👁️ 13 | 🔀 50** ] Joystream](https://github.com/Joystream/joystream) — A user governed video platform [![Build Status](https://api.travis-ci.org/Joystream/joystream.svg?branch=master)](https://travis-ci.org/Joystream/joystream)
* [[ **⭐ 41 | 👁️ 6 | 🔀 45** ] infincia/bip39-rs](https://github.com/infincia/bip39-rs) — Rust implementation of BIP39.
* [[ **⭐ 29 | 👁️ 7 | 🔀 10** ] Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) — A Rust library for working with Bitcoin SV .
* [[ **⭐ 25 | 👁️ 13 | 🔀 2** ] YeeCo yeeroot](https://github.com/yeeco/yeeroot) — YeeCo yeeroot is a permissionless, secure, high performance and scalable public blockchain platform powered by full sharding technology on PoW consensus written in Rust
* [[ **⭐ 14 | 👁️ 3 | 🔀 7** ] hdwallet](https://github.com/jjyr/hdwallet) — BIP-32 HD wallet related key derivation utilities.
* [[ **⭐ 1 | 👁️ 1 | 🔀 2** ] rbtc](https://github.com/lucawen/rbtc) — Convert BTC to any currency and vice-versa. [![Build Status](https://api.travis-ci.com/lucawen/rbtc.svg?branch=master)](https://travis-ci.com/lucawen/rbtc)
* [Grin](https://github.com/mimblewimble/grin/) — Evolution of the MimbleWimble protocol

### Database

* [[ **⭐ 9077 | 👁️ 344 | 🔀 1407** ] tikv](https://github.com/tikv/tikv) — A distributed KV database in Rust [![build badge](https://circleci.com/gh/tikv/tikv.svg?style=shield&circle-token=36bab0a8e43edb0941b31c38557d2d9d0d58f708)](https://app.circleci.com/pipelines/github/tikv/tikv)
* [[ **⭐ 2545 | 👁️ 54 | 🔀 154** ] Materialize](https://github.com/MaterializeInc/materialize) - Streaming SQL database powered by Timely Dataflow :heavy_dollar_sign: [![Build status](https://badge.buildkite.com/97d6604e015bf633d1c2a12d166bb46f3b43a927d3952c999a.svg?branch=main)](https://buildkite.com/materialize/tests)
* [[ **⭐ 1481 | 👁️ 45 | 🔀 87** ] seppo0010/rsedis](https://github.com/seppo0010/rsedis) — A Redis reimplementation in Rust [![build badge](https://api.travis-ci.org/seppo0010/rsedis.svg?branch=master)](https://travis-ci.org/seppo0010/rsedis)
* [[ **⭐ 1219 | 👁️ 41 | 🔀 49** ] PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) — an event sourcing database engine [![build badge](https://api.travis-ci.org/PumpkinDB/PumpkinDB.svg?branch=master)](https://travis-ci.org/PumpkinDB/PumpkinDB)
* [[ **⭐ 188 | 👁️ 11 | 🔀 16** ] TerminusDB](https://github.com/terminusdb/terminusdb-store) - open source graph database and document store [![Build Status](https://github.com/terminusdb/terminusdb-store/workflows/Build/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [[ **⭐ 171 | 👁️ 12 | 🔀 21** ] Lucid](https://github.com/lucid-kv/lucid) — High performance and distributed KV store accessible through a HTTP API. [![Build Status](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [[ **⭐ 90 | 👁️ 5 | 🔀 4** ] TerrabaseDB](https://github.com/terrabasedb/terrabasedb) — A multi-model NoSQL database ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/terrabasedb/terrabasedb/Tests?style=flat-square)
* [[ **⭐ 52 | 👁️ 9 | 🔀 11** ] ParityDB](https://github.com/paritytech/parity-db) — Fast and reliable database, optimised for read operation
* [indradb](https://crates.io/crates/indradb) — Rust based graph database [![build badge](https://api.travis-ci.org/indradb/indradb.svg?branch=master)](https://travis-ci.org/indradb/indradb)
* [noria](https://crates.io/crates/noria) — Dynamically changing, partially-stateful data-flow for web application backends [![build badge](https://api.travis-ci.org/mit-pdos/noria.svg?branch=master)](https://travis-ci.org/mit-pdos/noria)
* [sled](https://crates.io/crates/sled) — A (beta) modern embedded database [![Build Status](https://github.com/spacejam/sled/workflows/Rust/badge.svg?branch=master)](https://github.com/spacejam/sled/actions?workflow=Rust)

### Emulators

See also [crates matching keyword 'emulator'](https://crates.io/keywords/emulator).

* Commodore 64
  * [[ **⭐ 176 | 👁️ 9 | 🔀 11** ] kondrak/rust64](https://github.com/kondrak/rust64) — [![build badge](https://api.travis-ci.org/kondrak/rust64.svg?branch=master)](https://travis-ci.org/kondrak/rust64)
* Flash Player
  * [[ **⭐ 7655 | 👁️ 143 | 🔀 285** ] Ruffle](https://github.com/ruffle-rs/ruffle) — Ruffle is an Adobe Flash Player emulator written in the Rust programming language. Ruffle targets both the desktop and the web using WebAssembly. [![build badge](https://img.shields.io/circleci/build/github/ruffle-rs/ruffle)](https://app.circleci.com/pipelines/github/ruffle-rs/ruffle)
* Gameboy
  * [[ **⭐ 898 | 👁️ 14 | 🔀 43** ] mohanson/gameboy](https://github.com/mohanson/gameboy) — Full featured Cross-platform GameBoy emulator. Forever boys!.
  * [[ **⭐ 564 | 👁️ 27 | 🔀 30** ] Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) — [![build badge](https://api.travis-ci.org/Gekkio/mooneye-gb.svg?branch=master)](https://travis-ci.org/Gekkio/mooneye-gb)
  * [[ **⭐ 151 | 👁️ 5 | 🔀 19** ] mvdnes/rboy](https://github.com/mvdnes/rboy) — [![build badge](https://api.travis-ci.org/mvdnes/rboy.svg?branch=master)](https://travis-ci.org/mvdnes/rboy)
  * [[ **⭐ 15 | 👁️ 2 | 🔀 1** ] NivenT/RGB](https://github.com/nivent/RGB) — [![build badge](https://api.travis-ci.org/NivenT/RGB.svg?branch=master)](https://travis-ci.org/NivenT/RGB)
* Gameboy Advance
  * [[ **⭐ 385 | 👁️ 7 | 🔀 8** ] michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - RustboyAdvance-ng is a Gameboy Advance emulator with desktop, android and [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/) support. [![build badge](https://github.com/michelhe/rustboyadvance-ng/workflows/Deploy/badge.svg?branch=master)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* NES
  * [[ **⭐ 676 | 👁️ 29 | 🔀 53** ] pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes)
  * [[ **⭐ 622 | 👁️ 19 | 🔀 30** ] koute/pinky](https://github.com/koute/pinky) — [![build badge](https://api.travis-ci.org/koute/pinky.svg?branch=master)](https://travis-ci.org/koute/pinky)
  * [[ **⭐ 35 | 👁️ 4 | 🔀 1** ] iamsix/oxidenes](https://github.com/iamsix/oxidenes)
  * [[ **⭐ 15 | 👁️ 2 | 🔀 0** ] Amjad50/plastic](https://github.com/Amjad50/plastic) — plastis is a full featured NES emulator built in Rust. [![build badge](https://github.com/Amjad50/plastic/workflows/Rust/badge.svg?branch=master)](https://github.com/Amjad50/plastic/actions?query=workflow%3ARust)
* Playstation
  * [rustation-ng](https://gitlab.com/flio/rustation-ng/) — Playstation emulator using Rust
* ZX Spectrum
  * [[ **⭐ 56 | 👁️ 6 | 🔀 2** ] pacmancoder/rustzx](https://github.com/pacmancoder/rustzx) — [![build badge](https://api.travis-ci.org/pacmancoder/rustzx.svg?branch=master)](https://travis-ci.org/pacmancoder/rustzx)
  * [[ **⭐ 26 | 👁️ 2 | 🔀 2** ] rodrigorc/raze](https://github.com/rodrigorc/raze) — For WebAssembly, [live version here](https://rodrigorc.github.io/raze/)
* Virtual Boy
  * [[ **⭐ 216 | 👁️ 22 | 🔀 25** ] emu-rs/rustual-boy](https://github.com/emu-rs/rustual-boy) — [![build badge](https://api.travis-ci.org/emu-rs/rustual-boy.svg?branch=master)](https://travis-ci.org/emu-rs/rustual-boy)
* Intel 8080 CPU
  * [[ **⭐ 42 | 👁️ 1 | 🔀 4** ] mohanson/i8080](https://github.com/mohanson/i8080) — Intel 8080 cpu emulator by Rust
* Emulator Development tools
  * SNES
    * [[ **⭐ 4 | 👁️ 1 | 🔀 0** ] ioncodes/snesutilities](https://github.com/ioncodes/snesutilities) — ROM analyser/extractor

### Games

See also [Games Made With Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston).

* [[ **⭐ 6385 | 👁️ 220 | 🔀 235** ] citybound](https://github.com/citybound/citybound) — The city sim you deserve
* [[ **⭐ 1956 | 👁️ 49 | 🔀 74** ] cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) — A renderer for Doom, may progress to being a playable game [![build badge](https://api.travis-ci.org/cristicbz/rust-doom.svg?branch=master)](https://travis-ci.org/cristicbz/rust-doom)
* [[ **⭐ 941 | 👁️ 21 | 🔀 49** ] ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) — A small 2D turn-based hexagonal strategy game [![build badge](https://api.travis-ci.org/ozkriff/zemeroth.svg?branch=master)](https://travis-ci.org/ozkriff/zemeroth)
* [[ **⭐ 328 | 👁️ 23 | 🔀 23** ] Zone of Control](https://github.com/ozkriff/zoc) — A turn-based hexagonal strategy game [![build badge](https://api.travis-ci.org/ozkriff/zoc.svg?branch=master)](https://travis-ci.org/ozkriff/zoc)
* [[ **⭐ 308 | 👁️ 14 | 🔀 9** ] rsaarelm/magog](https://github.com/rsaarelm/magog) — A roguelike game in Rust
* [[ **⭐ 264 | 👁️ 6 | 🔀 15** ] garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) — Extensible open world rogue like game with pixel art [![build badge](https://api.travis-ci.org/garkimasera/rusted-ruins.svg?branch=master)](https://travis-ci.org/garkimasera/rusted-ruins)
* [[ **⭐ 211 | 👁️ 9 | 🔀 9** ] doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) — A Rust reimplementation of Cave Story engine with some enhancements.
* [[ **⭐ 122 | 👁️ 5 | 🔀 8** ] swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) — A Sokoban implementation
* [[ **⭐ 118 | 👁️ 7 | 🔀 11** ] rhex](https://github.com/dpc/rhex) — hexagonal ascii roguelike
* [[ **⭐ 88 | 👁️ 3 | 🔀 7** ] lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) — A minimalistic music video game which supports the BMS format [![build badge](https://api.travis-ci.org/lifthrasiir/angolmois-rust.svg?branch=master)](https://travis-ci.org/lifthrasiir/angolmois-rust)
* [[ **⭐ 45 | 👁️ 1 | 🔀 9** ] schulke-214/rsnake](https://github.com/schulke-214/rsnake) — Snake written in Rust.
* [[ **⭐ 42 | 👁️ 2 | 🔀 1** ] Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) — Quake map renderer in Rust
* [[ **⭐ 16 | 👁️ 1 | 🔀 1** ] phantomion/snake_game](https://github.com/phantomion/snake_game) - Simple terminal snake game written in Rust.
* [[ **⭐ 15 | 👁️ 1 | 🔀 0** ] aleshaleksey/TGWM](https://github.com/aleshaleksey/TGWM) — An RPG with turned-based mechanics (work in progress) [![build badge](https://api.travis-ci.org/aleshaleksey/TGWM.svg?branch=master)](https://travis-ci.org/aleshaleksey/TGWM)
* [[ **⭐ 7 | 👁️ 1 | 🔀 2** ] schulke-214/connect-four](https://github.com/schulke-214/connect-four) — A simple connect four implementation.
* [[ **⭐ 3 | 👁️ 0 | 🔀 0** ] soydos](https://github.com/soydos/pusoy_dos2) — A wasm implementation of Pusoy Dos
* [Veloren](https://gitlab.com/veloren/veloren) — An open world, open source multiplayer voxel RPG game currently in alpha development [![build badge](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/commits/master)

### Graphics

* [[ **⭐ 2336 | 👁️ 37 | 🔀 60** ] ivanceras/svgbob](https://github.com/ivanceras/svgbob) — converts ASCII diagrams into SVG graphics [![build badge](https://api.travis-ci.org/ivanceras/svgbob.svg?branch=master)](https://travis-ci.org/ivanceras/svgbob)
* [[ **⭐ 1310 | 👁️ 34 | 🔀 65** ] RazrFalcon/svgcleaner](https://github.com/RazrFalcon/svgcleaner) — tidies SVG graphics
* [[ **⭐ 979 | 👁️ 27 | 🔀 76** ] RazrFalcon/resvg](https://github.com/RazrFalcon/resvg) — An SVG rendering library. [![build badge](https://api.travis-ci.org/RazrFalcon/resvg.svg?branch=master)](https://travis-ci.org/RazrFalcon/resvg)
* [[ **⭐ 431 | 👁️ 23 | 🔀 16** ] Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) — A ray tracer [![build badge](https://api.travis-ci.org/Twinklebear/tray_rust.svg?branch=master)](https://travis-ci.org/Twinklebear/tray_rust)
* [[ **⭐ 151 | 👁️ 5 | 🔀 0** ] Limeth/euclider](https://github.com/Limeth/euclider) — A real-time 4D CPU ray tracer [![build badge](https://api.travis-ci.org/Limeth/euclider.svg?branch=master)](https://travis-ci.org/Limeth/euclider)
* [turnage/valora](https://crates.io/crates/valora) — A library for generative fine art ![Rust](https://github.com/turnage/valora/workflows/Rust/badge.svg?branch=master)
* Image processing:
  * [[ **⭐ 24 | 👁️ 1 | 🔀 3** ] mikigraf/Image-Processing-CLI-in-Rust](https://github.com/mikigraf/Image-Processing-CLI-in-Rust) — CLI for processing images, generating histograms. [![Build Status](https://api.travis-ci.org/spejss/Image-Processing-CLI-in-Rust.svg?branch=master)](https://travis-ci.org/spejss/Image-Processing-CLI-in-Rust)

### Industrial automation
* [[ **⭐ 205 | 👁️ 17 | 🔀 40** ] locka99/opcua](https://github.com/locka99/opcua) — A pure rust [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) library.
* [[ **⭐ 115 | 👁️ 12 | 🔀 35** ] slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) — A [tokio](https://tokio.rs)-based [modbus](https://modbus.org) library. [![Build Status](https://api.travis-ci.org/slowtec/tokio-modbus.svg?branch=master)](https://travis-ci.org/slowtec/tokio-modbus)
* [[ **⭐ 9 | 👁️ 1 | 🔀 3** ] BiancoRoyal/modbus-iiot-rust](https://github.com/BiancoRoyal/modbus-iiot-rust) — A pure rust [modbus](https://modbus.org) library with no or less dependencies. [![Build Status](https://api.travis-ci.org/BiancoRoyal/modbus-iiot-rust.svg?branch=master)](https://travis-ci.org/BiancoRoyal/modbus-iiot-rust)

### Observability

* [[ **⭐ 6819 | 👁️ 99 | 🔀 463** ] timberio/vector](https://github.com/timberio/vector) — A High-Performance, Logs, Metrics, & Events Router.
* [[ **⭐ 7 | 👁️ 2 | 🔀 2** ] Mnwa/gtsa](https://github.com/Mnwa/gtsa) — A simple solution to proxy gelf messages (messages for Graylog) to Sentry
* [OpenTelemetry](https://crates.io/crates/opentelemetry) — OpenTelemetry provides a single set of APIs, libraries, agents, and collector services to capture distributed traces and metrics from your application. You can analyze them using Prometheus, Jaeger, and other observability tools. [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/workflows/CI/badge.svg?branch=master)](https://github.com/open-telemetry/opentelemetry-rust/actions?query=workflow%3ACI+branch%3Amaster)

### Operating systems

See also [A comparison of operating systems written in Rust](https://github.com/flosse/rust-os-comparison).

* [[ **⭐ 2767 | 👁️ 95 | 🔀 372** ] tock/tock](https://github.com/tock/tock) — A secure embedded operating system for Cortex-M based microcontrollers
* [[ **⭐ 2193 | 👁️ 126 | 🔀 59** ] nebulet/nebulet](https://github.com/nebulet/nebulet) — A microkernel that implements a WebAssembly "usermode" that runs in Ring 0.
* [[ **⭐ 475 | 👁️ 38 | 🔀 31** ] thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) — [![build badge](https://api.travis-ci.org/thepowersgang/rust_os.svg?branch=master)](https://travis-ci.org/thepowersgang/rust_os)
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) — [![build badge](https://api.travis-ci.org/redox-os/redox.svg?branch=master)](https://travis-ci.org/redox-os/redox)

### Productivity
* [[ **⭐ 2672 | 👁️ 43 | 🔀 96** ] espanso](https://github.com/federico-terzi/espanso) — A cross-platform Text Expander written in Rust [![Build Status](https://dev.azure.com/freddy6896/espanso/_apis/build/status/federico-terzi.espanso?branchName=master)](https://dev.azure.com/freddy6896/espanso/_build)
* [[ **⭐ 244 | 👁️ 6 | 🔀 12** ] pier-cli/pier](https://github.com/pier-cli/pier) — A central repository to manage (add, search metadata, etc.) all your one-liners, scripts, tools, and CLIs [![build badge](https://api.travis-ci.com/BenSchZA/pier.svg?branch=master)](https://travis-ci.com/BenSchZA/pier)
* [[ **⭐ 29 | 👁️ 5 | 🔀 1** ] subilo](https://github.com/Bansco/subilo) - A continuous deployment agent [![Build Status](https://github.com/Bansco/subilo/workflows/Rust/badge.svg?branch=master)](https://github.com/Bansco/subilo/actions?query=workflow%3ARust)
* [eureka](https://crates.io/crates/eureka) — A CLI tool to input and store your ideas without leaving the terminal

### Security tools

* [[ **⭐ 3745 | 👁️ 87 | 🔀 313** ] rustscan/rustscan](https://github.com/RustScan/RustScan) — Make Nmap faster with this port scanning tool [![build badge](https://github.com/RustScan/RustScan/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/RustScan/RustScan/actions?query=workflow%3A%22Continuous+integration%22)
* [[ **⭐ 1387 | 👁️ 32 | 🔀 132** ] epi052/feroxbuster](https://github.com/epi052/feroxbuster) - A simple, fast, recursive content discovery tool written in Rust (
* [[ **⭐ 830 | 👁️ 33 | 🔀 102** ] kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) — A semi-automatic OSINT framework and package manager [![build badge](https://api.travis-ci.org/kpcyrd/sn0int.svg?branch=master)](https://travis-ci.org/kpcyrd/sn0int)
* [[ **⭐ 662 | 👁️ 19 | 🔀 54** ] kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) — A secure multithreaded packet sniffer [![build badge](https://api.travis-ci.org/kpcyrd/sniffglue.svg?branch=master)](https://travis-ci.org/kpcyrd/sniffglue)
* [[ **⭐ 330 | 👁️ 14 | 🔀 42** ] phra/rustbuster](https://github.com/phra/rustbuster) — A Comprehensive Web Fuzzer and Content Discovery Tool
* [[ **⭐ 291 | 👁️ 9 | 🔀 28** ] kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) — A TCP connection hijacker, rust rewrite of shijack [![build badge](https://api.travis-ci.org/kpcyrd/rshijack.svg?branch=master)](https://travis-ci.org/kpcyrd/rshijack)
* [[ **⭐ 262 | 👁️ 14 | 🔀 25** ] kpcyrd/badtouch](https://github.com/kpcyrd/badtouch) — A scriptable network authentication cracker [![build badge](https://api.travis-ci.org/kpcyrd/badtouch.svg?branch=master)](https://travis-ci.org/kpcyrd/badtouch)
* [[ **⭐ 22 | 👁️ 4 | 🔀 8** ] arvancloud/libinjection-rs](https://github.com/arvancloud/libinjection-rs) — Rust bindings for [libinjection](https://github.com/client9/libinjection) [![build badge](https://api.travis-ci.org/arvancloud/libinjection-rs.svg?branch=master)](https://travis-ci.org/arvancloud/libinjection-rs)
* [[ **⭐ 18 | 👁️ 1 | 🔀 0** ] lethe](https://github.com/kostassoid/lethe) — A secure cross-platform drive wiping utility [![Version info](https://img.shields.io/crates/v/lethe.svg)](https://crates.io/crates/lethe) [![Build Status](https://api.travis-ci.org/kostassoid/lethe.svg?branch=master)](https://travis-ci.org/kostassoid/lethe)
* [ripasso](https://github.com/cortex/ripasso/) — A password manager, filesystem compatible with pass

### System tools

* [[ **⭐ 25988 | 👁️ 179 | 🔀 664** ] sharkdp/bat](https://github.com/sharkdp/bat) — A cat(1) clone with wings. [![build badge](https://api.travis-ci.org/sharkdp/bat.svg?branch=master)](https://travis-ci.org/sharkdp/bat)
* [[ **⭐ 16860 | 👁️ 132 | 🔀 431** ] sharkdp/fd](https://github.com/sharkdp/fd) — A simple, fast and user-friendly alternative to find. [![Build Status](https://api.travis-ci.org/sharkdp/fd.svg?branch=master)](https://travis-ci.org/sharkdp/fd)
* [[ **⭐ 12773 | 👁️ 123 | 🔀 380** ] ogham/exa](https://github.com/ogham/exa) — A replacement for 'ls' [![build badge](https://api.travis-ci.org/ogham/exa.svg?branch=master)](https://travis-ci.org/ogham/exa)
* [[ **⭐ 8127 | 👁️ 172 | 🔀 635** ] uutils/coreutils](https://github.com/uutils/coreutils) — A cross-platform Rust rewrite of the GNU coreutils [![build badge](https://api.travis-ci.org/uutils/coreutils.svg?branch=master)](https://travis-ci.org/uutils/coreutils)
* [[ **⭐ 6244 | 👁️ 60 | 🔀 173** ] bandwhich](https://github.com/imsnif/bandwhich) — Terminal bandwidth utilization tool [![build badge](https://api.travis-ci.com/imsnif/bandwhich.svg?branch=master)](https://travis-ci.com/imsnif/bandwhich)
* [[ **⭐ 5451 | 👁️ 46 | 🔀 187** ] Peltoche/lsd](https://github.com/Peltoche/lsd) — An ls with a lot of pretty colors and awesome icons [![build badge](https://api.travis-ci.org/Peltoche/lsd.svg?branch=master)](https://travis-ci.org/Peltoche/lsd)
* [[ **⭐ 4700 | 👁️ 35 | 🔀 261** ] XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) — counts the lines of code [![build badge](https://api.travis-ci.org/XAMPPRocky/tokei.svg?branch=master)](https://travis-ci.org/XAMPPRocky/tokei)
* [[ **⭐ 3610 | 👁️ 43 | 🔀 138** ] gitui](https://github.com/extrawurst/gitui) - Blazing fast terminal client for git written in Rust. [![build](https://github.com/extrawurst/gitui/workflows/CI/badge.svg?branch=master)](https://github.com/extrawurst/gitui/actions)
* [[ **⭐ 2465 | 👁️ 22 | 🔀 94** ] lotabout/skim](https://github.com/lotabout/skim) — A fuzzy finder in pure rust [![build badge](https://api.travis-ci.org/lotabout/skim.svg?branch=master)](https://travis-ci.org/lotabout/skim)
* [[ **⭐ 2209 | 👁️ 20 | 🔀 87** ] watchexec](https://github.com/watchexec/watchexec) — Executes commands in response to file modifications [![build badge](https://api.travis-ci.org/watchexec/watchexec.svg?branch=master)](https://travis-ci.org/watchexec/watchexec)
* [[ **⭐ 2203 | 👁️ 14 | 🔀 52** ] dust](https://github.com/bootandy/dust) — A more intuitive version of du
* [[ **⭐ 2033 | 👁️ 27 | 🔀 74** ] ytop](https://github.com/cjbassi/ytop) - A TUI system monitor written in Rust [![Build status](https://github.com/cjbassi/ytop/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/cjbassi/ytop/actions?query=workflow%3A%22Rust+CI%22)
* [[ **⭐ 1743 | 👁️ 13 | 🔀 46** ] pueue](https://github.com/nukesor/pueue) — Manage your long running shell commands. [![GitHub Actions Workflow](https://github.com/nukesor/pueue/workflows/Test%20build/badge.svg?branch=master)](https://github.com/Nukesor/pueue/actions)
* [[ **⭐ 1668 | 👁️ 14 | 🔀 39** ] dalance/procs](https://github.com/dalance/procs) — A modern replacement for 'ps' written by Rust [![Build Status](https://api.travis-ci.org/dalance/procs.svg?branch=master)](https://travis-ci.org/dalance/procs)
* [[ **⭐ 1395 | 👁️ 35 | 🔀 61** ] m4b/bingrep](https://github.com/m4b/bingrep) — Greps through binaries from various OSs and architectures, and colors them. [![build badge](https://api.travis-ci.org/m4b/bingrep.svg?branch=master)](https://travis-ci.org/m4b/bingrep)
* [[ **⭐ 1179 | 👁️ 17 | 🔀 29** ] mmstick/parallel](https://github.com/mmstick/parallel) — Reimplementation of GNU Parallel
* [[ **⭐ 1161 | 👁️ 19 | 🔀 31** ] orhun/kmon](https://github.com/orhun/kmon) — Linux Kernel Manager and Activity Monitor ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/workflow/status/orhun/kmon/Continuous%20Integration/master?label=build)
* [[ **⭐ 1118 | 👁️ 54 | 🔀 127** ] redox-os/ion](https://github.com/redox-os/ion) — Next-generation system shell [![build badge](https://api.travis-ci.org/redox-os/ion.svg?branch=master)](https://travis-ci.org/redox-os/ion)
* [[ **⭐ 868 | 👁️ 7 | 🔀 28** ] diskonaut](https://github.com/imsnif/diskonaut) — Terminal visual disk space navigator [![build badge](https://api.travis-ci.com/imsnif/diskonaut.svg?branch=main)](https://travis-ci.com/imsnif/diskonaut)
* [[ **⭐ 811 | 👁️ 11 | 🔀 41** ] mitnk/cicada](https://github.com/mitnk/cicada) — A bash-like Unix shell [![build badge](https://api.travis-ci.org/mitnk/cicada.svg?branch=master)](https://travis-ci.org/mitnk/cicada)
* [[ **⭐ 729 | 👁️ 29 | 🔀 33** ] Luminarys/synapse](https://github.com/Luminarys/synapse) — Flexible and fast BitTorrent daemon. [![Build Status](https://api.travis-ci.org/Luminarys/synapse.svg?branch=master)](https://travis-ci.org/Luminarys/synapse)
* [[ **⭐ 374 | 👁️ 7 | 🔀 19** ] Kondo](https://github.com/tbillington/kondo) - CLI & GUI tool for deleting software project artifacts and reclaiming disk space
* [[ **⭐ 292 | 👁️ 7 | 🔀 9** ] lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] — xargs + awk with pattern matching support [![build badge](https://api.travis-ci.org/lotabout/rargs.svg?branch=master)](https://travis-ci.org/lotabout/rargs)
* [[ **⭐ 282 | 👁️ 4 | 🔀 13** ] nivekuil/rip](https://github.com/nivekuil/rip) - A safe and ergonomic alternative to `rm` [![build badge](https://api.travis-ci.org/nivekuil/rip.svg?branch=master)](https://travis-ci.org/nivekuil/rip)
* [[ **⭐ 278 | 👁️ 28 | 🔀 25** ] pop-os/popsicle](https://github.com/pop-os/popsicle) — GTK3 & CLI utility for flashing multiple USB devices in parallel
* [[ **⭐ 264 | 👁️ 7 | 🔀 9** ] ddh](https://github.com/darakian/ddh) — Fast duplicate file finder [![build badge](https://api.travis-ci.org/darakian/ddh.svg?branch=master)](https://travis-ci.org/darakian/ddh)
* [[ **⭐ 247 | 👁️ 6 | 🔀 11** ] sitkevij/hex](https://github.com/sitkevij/hex) — A colorized hexdump terminal utility. [![build badge](https://api.travis-ci.org/sitkevij/hex.svg?branch=master)](https://travis-ci.org/sitkevij/hex)
* [[ **⭐ 216 | 👁️ 7 | 🔀 12** ] mmstick/fontfinder](https://github.com/mmstick/fontfinder) — GTK3 application for previewing and installing Google's fonts
* [[ **⭐ 145 | 👁️ 4 | 🔀 8** ] k0pernicus/zou](https://github.com/k0pernicus/zou) — A download accelerator
* [[ **⭐ 144 | 👁️ 4 | 🔀 8** ] cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) — A configurable filesystem watcher inspired by [entr](http://eradman.com/entrproject/) [![build badge](https://api.travis-ci.org/cristianoliveira/funzzy.svg?branch=master)](https://travis-ci.org/cristianoliveira/funzzy)
* [[ **⭐ 140 | 👁️ 3 | 🔀 10** ] brocode/fblog](https://github.com/brocode/fblog) — Small command-line JSON Log viewer [![build badge](https://api.travis-ci.org/brocode/fblog.svg?branch=master)](https://travis-ci.org/brocode/fblog)
* [[ **⭐ 132 | 👁️ 12 | 🔀 7** ] mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) — A tv series renaming application with an optional GTK3 frontend. [![build badge](https://api.travis-ci.org/mmstick/tv-renamer.svg?branch=master)](https://travis-ci.org/mmstick/tv-renamer)
* [[ **⭐ 92 | 👁️ 7 | 🔀 9** ] buster/rrun](https://github.com/buster/rrun) — A command launcher for Linux, similar to gmrun  [![build badge](https://api.travis-ci.org/buster/rrun.svg?branch=master)](https://travis-ci.org/buster/rrun)
* [[ **⭐ 77 | 👁️ 9 | 🔀 3** ] mmstick/concurr](https://github.com/mmstick/concurr) — Alternative to GNU Parallel w/ a client-server architecture
* [[ **⭐ 45 | 👁️ 14 | 🔀 8** ] pop-os/debrep](https://github.com/pop-os/debrepbuild) — APT repository tool for building and managing an APT repo
* [[ **⭐ 28 | 👁️ 1 | 🔀 5** ] mxseev/logram](https://github.com/mxseev/logram) — Push log files' updates to Telegram
* [[ **⭐ 28 | 👁️ 1 | 🔀 3** ] unwrittenfun/hotkey-rs](https://github.com/unwrittenfun/hotkey-rs) — A library to listen to global hotkeys in Rust
* [[ **⭐ 17 | 👁️ 1 | 🔀 2** ] slai11/goto](https://github.com/slai11/goto) — A simple and user-friendly way to jump to your indexed directories. [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/slai11/goto/release)](https://github.com/slai11/goto/actions)
* [[ **⭐ 5 | 👁️ 2 | 🔀 1** ] cocom](https://github.com/LamdaLamdaLamda/cocom) - NTP client purely written in Rust. [![Build Status](https://travis-ci.com/LamdaLamdaLamda/cocom.svg?branch=main)](https://travis-ci.com/LamdaLamdaLamda/cocom)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) — A fast alternative to `cd` that learns your habits [![release](https://github.com/ajeetdsouza/zoxide/workflows/.github/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [fselect](https://crates.io/crates/fselect) — Find files with SQL-like queries [![build badge](https://api.travis-ci.org/jhspetersson/fselect.svg?branch=master)](https://travis-ci.org/jhspetersson/fselect)
* [organize-rt](https://gitlab.com/FixFromDarkness/organize-rt) — Organize files based on regex rules (file extensions by default). [![pipeline status](https://gitlab.com/FixFromDarkness/organize-rt/badges/master/pipeline.svg)](https://gitlab.com/FixFromDarkness/organize-rt/-/commits/master)
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) — Linux power management daemon (DBus-interface) with CLI tool.
* [yake](https://crates.io/crates/yake) — Yake is a task runner based on yaml files [![build badge](https://gitlab.com/elbartus/yake/badges/master/pipeline.svg)](https://gitlab.com/elbartus/yake)

### Text editors

* [[ **⭐ 18613 | 👁️ 447 | 🔀 674** ] xi-editor](https://github.com/xi-editor/xi-editor) — A modern editor with a backend written in Rust.
* [[ **⭐ 8600 | 👁️ 359 | 🔀 233** ] xray](https://github.com/atom-archive/xray) — An experimental next-generation Electron-based text editor. [![build badge](https://api.travis-ci.org/atom/xray.svg?branch=master)](https://travis-ci.org/atom/xray)
* [[ **⭐ 4455 | 👁️ 175 | 🔀 349** ] Remacs](https://github.com/remacs/remacs) — A community-driven port of Emacs to Rust. [![build badge](https://api.travis-ci.org/remacs/remacs.svg?branch=master)](https://travis-ci.org/remacs/remacs)
* [[ **⭐ 2376 | 👁️ 26 | 🔀 56** ] ox](https://github.com/curlpipe/ox) — An independent Rust text editor that runs in your terminal! 
* [[ **⭐ 1458 | 👁️ 59 | 🔀 73** ] gchp/iota](https://github.com/gchp/iota) — A simple text editor [![build badge](https://api.travis-ci.org/gchp/iota.svg?branch=master)](https://travis-ci.org/gchp/iota)
* [[ **⭐ 529 | 👁️ 7 | 🔀 17** ] ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) — A tiny (≤1024 LOC) text editor with syntax highlighting, incremental search and more. [![build badge](https://api.travis-ci.com/ilai-deutel/kibi.svg?branch=master)](https://travis-ci.com/ilai-deutel/kibi)
* [[ **⭐ 489 | 👁️ 27 | 🔀 23** ] mathall/rim](https://github.com/mathall/rim) — Vim-like text editor written in Rust
* [[ **⭐ 19 | 👁️ 3 | 🔀 0** ] vamolessa/pepper](https://github.com/vamolessa/pepper) [[pepper](https://crates.io/crates/pepper)] — An opinionated modal editor to simplify code editing from the terminal [![build badge](https://github.com/vamolessa/pepper/workflows/rust/badge.svg?branch=master)](https://github.com/vamolessa/pepper)
* [amp](https://amp.rs) — Inspired by Vi/Vim. [![build badge](https://api.travis-ci.org/jmacdonald/amp.svg?branch=master)](https://travis-ci.org/jmacdonald/amp)

### Text processing

* [[ **⭐ 3619 | 👁️ 36 | 🔀 81** ] phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) — ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc. [![Build Status](https://api.travis-ci.org/phiresky/ripgrep-all.svg?branch=master)](https://travis-ci.org/phiresky/ripgrep-all)
* [[ **⭐ 3208 | 👁️ 37 | 🔀 75** ] grex](https://github.com/pemistahl/grex) — A command-line tool and library for generating regular expressions from user-provided test cases [![build badge](https://api.travis-ci.org/pemistahl/grex.svg?branch=master)](https://travis-ci.org/pemistahl/grex)
* [[ **⭐ 257 | 👁️ 6 | 🔀 8** ] vishaltelangre/ff](https://github.com/vishaltelangre/ff) — Find files (ff) by name! [![build badge](https://api.travis-ci.org/vishaltelangre/ff.svg?branch=master)](https://travis-ci.org/vishaltelangre/ff)
* [[ **⭐ 202 | 👁️ 5 | 🔀 10** ] TankerHQ/ruplacer](https://github.com/TankerHQ/ruplacer) — Find and replace text in source files [![build badge](https://api.travis-ci.org/TankerHQ/ruplacer.svg?branch=master)](https://travis-ci.org/TankerHQ/ruplacer)
* [[ **⭐ 116 | 👁️ 4 | 🔀 11** ] whitfin/runiq](https://github.com/whitfin/runiq) — an efficient way to filter duplicate lines from unsorted input.
* [[ **⭐ 79 | 👁️ 6 | 🔀 4** ] Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) — A simple and fast string search tool for human beings
* [[ **⭐ 35 | 👁️ 1 | 🔀 2** ] whitfin/bytelines](https://github.com/whitfin/bytelines) — Read input lines as byte slices for high efficiency.
* [[ **⭐ 30 | 👁️ 2 | 🔀 2** ] lavifb/todo_r](https://github.com/lavifb/todo_r) — Find all your TODO notes with one command! [![build badge](https://api.travis-ci.org/lavifb/todo_r.svg?branch=master)](https://travis-ci.org/lavifb/todo_r)
* [[ **⭐ 25 | 👁️ 2 | 🔀 4** ] cpc](https://github.com/probablykasper/cpc) - Parses and calculates strings of math with support for units and unit conversion, from `1+2` to `1% of round(1 lightyear / 14!s to km/h)`.
* [[ **⭐ 16 | 👁️ 0 | 🔀 3** ] replicadse/complate](https://github.com/replicadse/complate) — An in-terminal text templating tool designed for standardizing messages (like for GIT commits). [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![build badge](https://github.com/replicadse/complate/workflows/pipeline/badge.svg?branch=master)](https://github.com/replicadse/complate/actions)
* [ripgrep](https://crates.io/crates/ripgrep) — combines the usability of The Silver Searcher with the raw speed of grep [![build badge](https://api.travis-ci.org/BurntSushi/ripgrep.svg?branch=master)](https://travis-ci.org/BurntSushi/ripgrep)
* [sd](https://crates.io/crates/sd) — Intuitive find & replace CLI
* [xsv](https://crates.io/crates/xsv) — A fast CSV command line tool (slicing, indexing, selecting, searching, sampling, etc.) [![build badge](https://api.travis-ci.org/BurntSushi/xsv.svg?branch=master)](https://travis-ci.org/BurntSushi/xsv)

### Image processing

* [[ **⭐ 267 | 👁️ 7 | 🔀 11** ] Imager](https://github.com/imager-io/imager) — Automated image optimization.

### Utilities

* [[ **⭐ 327 | 👁️ 8 | 🔀 28** ] fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) — A lightning fast version of tmux-fingers written in Rust, copy/pasting tmux like vimium/vimperator.
* [[ **⭐ 308 | 👁️ 13 | 🔀 19** ] myfreeweb/freepass](https://github.com/myfreeweb/freepass) — The free password manager for power users.
* [[ **⭐ 284 | 👁️ 2 | 🔀 9** ] nomino](https://github.com/yaa110/nomino) — Batch rename utility for developers [![Build Status](https://api.travis-ci.org/yaa110/nomino.svg?branch=master)](https://travis-ci.org/yaa110/nomino)
* [[ **⭐ 230 | 👁️ 4 | 🔀 14** ] guoxbin/dtool](https://github.com/guoxbin/dtool) — A useful command-line tool collection to assist development including conversion, codec, hashing, encryption, etc. [![Build Status](https://api.travis-ci.org/guoxbin/dtool.svg?branch=master)](https://travis-ci.org/guoxbin/dtool)
* [[ **⭐ 153 | 👁️ 8 | 🔀 7** ] vamolessa/verco](https://github.com/vamolessa/verco) [[verco](https://crates.io/crates/verco)] — A simple Git/Hg tui client focused on keyboard shortcuts
* [[ **⭐ 118 | 👁️ 4 | 🔀 4** ] raftario/licensor](https://github.com/raftario/licensor) — write licenses to stdout [![GitHub Actions](https://github.com/raftario/licensor/workflows/Build/badge.svg?branch=master)](https://github.com/raftario/licensor/actions?workflowID=Build)
* [[ **⭐ 113 | 👁️ 5 | 🔀 3** ] evansmurithi/cloak](https://github.com/evansmurithi/cloak) — A Command Line OTP (One Time Password) Authenticator application. [![build badge](https://api.travis-ci.com/evansmurithi/cloak.svg?branch=master)](https://travis-ci.com/evansmurithi/cloak) [![build badge](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [[ **⭐ 107 | 👁️ 3 | 🔀 10** ] tversteeg/emplace](https://github.com/tversteeg/emplace) — Synchronize installed packages on multiple machines
* [[ **⭐ 60 | 👁️ 4 | 🔀 7** ] brycx/checkpwn](https://github.com/brycx/checkpwn) — A Have I Been Pwned (HIBP) command-line utility tool that lets you easily check for compromised accounts and passwords.
* [[ **⭐ 46 | 👁️ 2 | 🔀 4** ] yaa110/cb](https://github.com/yaa110/cb) — Command line interface to manage clipboard [![Build Status](https://api.travis-ci.org/yaa110/cb.svg?branch=master)](https://travis-ci.org/yaa110/cb)
* [[ **⭐ 44 | 👁️ 1 | 🔀 5** ] whitfin/s3-meta](https://github.com/whitfin/s3-meta) — A command line tool to gather metadata about your Amazon S3 buckets.
* [[ **⭐ 33 | 👁️ 1 | 🔀 6** ] whitfin/s3-utils](https://github.com/whitfin/s3-utils) — A small tool containing utilities based around Amazon S3 to provide additional convenience APIs.
* [[ **⭐ 30 | 👁️ 3 | 🔀 4** ] whitfin/s3-concat](https://github.com/whitfin/s3-concat) — A command line tool to concatenate Amazon S3 files remotely using flexible patterns.
* [[ **⭐ 22 | 👁️ 1 | 🔀 3** ] arthrp/quick-skeleton](https://github.com/arthrp/quick-skeleton) — Project scaffolding tool, similar to Yeoman and Slush. [![build badge](https://api.travis-ci.org/arthrp/quick-skeleton.svg?branch=master)](https://travis-ci.org/arthrp/quick-skeleton)
* [[ **⭐ 19 | 👁️ 2 | 🔀 1** ] mme](https://github.com/GoberInfinity/mme) — Command line tool to remember you commands that you sometimes forget. [![Build Status](https://api.travis-ci.org/GoberInfinity/mme.svg?branch=master)](https://travis-ci.org/GoberInfinity/mme)
* [[ **⭐ 18 | 👁️ 1 | 🔀 2** ] arthrp/consoletimer](https://github.com/arthrp/consoleTimer) — Simple timer for your terminal. [![build badge](https://api.travis-ci.org/arthrp/consoleTimer.svg?branch=master)](https://travis-ci.org/arthrp/consoleTimer)
* [[ **⭐ 18 | 👁️ 1 | 🔀 3** ] yoannfleurydev/gitweb](https://github.com/yoannfleurydev/gitweb) — Open the current remote repository in your browser. [![GitHub Actions](https://github.com/yoannfleurydev/gitweb/workflows/Publish/badge.svg?branch=master)](https://github.com/yoannfleurydev/gitweb/actions)
* [[ **⭐ 18 | 👁️ 1 | 🔀 3** ] barberousse](https://github.com/zeapo/barberousse) — AWS Secrets Manager editor ![build](https://github.com/zeapo/barberousse/workflows/build/badge.svg?branch=master)
* [[ **⭐ 15 | 👁️ 1 | 🔀 1** ] amar-laksh/workstation](https://github.com/amar-laksh/workstation) — A commandline tool to help you manage your workstation by distancing you from your screen, locking your screen when you aren't there among other things with OPENCV!
* [[ **⭐ 14 | 👁️ 1 | 🔀 1** ] repoch](https://github.com/lucawen/repoch) — Convert epoch to datetime and datetime to epoch [![build badge](https://api.travis-ci.com/lucawen/repoch.svg?branch=master)](https://travis-ci.com/lucawen/repoch/)
* [[ **⭐ 13 | 👁️ 0 | 🔀 2** ] aleshaleksey/AZDice](https://github.com/aleshaleksey/AZDice) — A dice roll success distribution generator for tabletop homebrewers. [![build badge](https://api.travis-ci.org/aleshaleksey/AZDice.svg?branch=master)](https://travis-ci.org/aleshaleksey/AZDice)
* [[ **⭐ 8 | 👁️ 2 | 🔀 1** ] replydev/cotp](https://github.com/replydev/cotp) - Trustworthy encrypted one time password authenticator app compatible with external backups. [![Actions Status](https://github.com/replydev/cotp/workflows/Rust/badge.svg)](https://github.com/replydev/cotp/actions)
* [[ **⭐ 6 | 👁️ 1 | 🔀 1** ] gorros/s3-edit-rs](https://github.com/gorros/s3-edit-rs) — A command line tool to edit a file directly on Amazon S3.
* [[ **⭐ 1 | 👁️ 1 | 🔀 1** ] vamolessa/copycat](https://github.com/vamolessa/copycat) [[copycat](https://crates.io/crates/copycat)] — A simple clipboard cli interface for windows with text and bmp support

### Video

* [[ **⭐ 2434 | 👁️ 89 | 🔀 179** ] xiph/rav1e](https://github.com/xiph/rav1e) — The fastest and safest AV1 encoder. [![build badge](https://api.travis-ci.org/xiph/rav1e.svg?branch=master)](https://travis-ci.org/xiph/rav1e)
* [[ **⭐ 28 | 👁️ 0 | 🔀 2** ] yuvadm/slingr](https://github.com/yuvadm/slingr) — A simple CLI for streaming media files over a local network to UPnP media renderers [![build badge](https://api.travis-ci.org/yuvadm/slingr.svg?branch=master)](https://travis-ci.org/yuvadm/slingr)
* [[ **⭐ 22 | 👁️ 4 | 🔀 2** ] yuvadm/streamlib](https://github.com/streamlib/streamlib) — Play your favorite live video and audio streams from command line
* [[ **⭐ 12 | 👁️ 2 | 🔀 2** ] tgotwig/vidmerger](https://github.com/tgotwig/vidmerger) —  A wrapper around ffmpeg which simplifies merging multiple videos 🎞
* [[ **⭐ 2 | 👁️ 2 | 🔀 0** ] Phate6660/rsmpv](https://github.com/Phate6660/rsmpv) — A controller for MPV, requires IPC to be enabled in MPV.

### Virtualization

* [[ **⭐ 14947 | 👁️ 342 | 🔀 1014** ] firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) — A lightweight virtual machine for container workload  [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [[ **⭐ 1713 | 👁️ 55 | 🔀 87** ] tailhook/vagga](https://github.com/tailhook/vagga) — A containerization tool without daemons [![build badge](https://api.travis-ci.org/tailhook/vagga.svg?branch=master)](https://travis-ci.org/tailhook/vagga)
* [[ **⭐ 1069 | 👁️ 57 | 🔀 100** ] oracle/railcar](https://github.com/oracle/railcar) — Docker-like container OCI runtime implementation in Rust [![wercker status](https://app.wercker.com/status/730e874772dc02c6005f4ae4e42b0ca4/s/master "wercker status")](https://app.wercker.com/applications/59696a02ee70670100155ae2 )

### Web

* [[ **⭐ 4905 | 👁️ 93 | 🔀 322** ] LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) — A link aggregator / reddit clone for the fediverse [![Build Status](https://api.travis-ci.org/LemmyNet/lemmy.svg?branch=master)](https://travis-ci.org/LemmyNet/lemmy)
* [[ **⭐ 1498 | 👁️ 61 | 🔀 101** ] Plume-org/Plume](https://github.com/Plume-org/Plume) — ActivityPub federating blogging application [![build badge](https://api.travis-ci.org/Plume-org/Plume.svg?branch=master)](https://travis-ci.org/Plume-org/Plume)

### Web Servers

* [[ **⭐ 2332 | 👁️ 39 | 🔀 111** ] svenstaro/miniserve](https://github.com/svenstaro/miniserve) — A small, self-contained cross-platform CLI tool that allows you to just grab the binary and serve some file(s) via HTTP [![build badge](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [[ **⭐ 435 | 👁️ 9 | 🔀 42** ] TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) — simple static http server
* [[ **⭐ 421 | 👁️ 6 | 🔀 12** ] mufeedvh/binserve](https://github.com/mufeedvh/binserve) — A blazingly fast static web server with routing, templating, and security in a single binary you can set up with zero code [![build badge](https://github.com/mufeedvh/binserve/workflows/CICD/badge.svg?branch=master)](https://github.com/mufeedvh/binserve/actions)
* [[ **⭐ 280 | 👁️ 5 | 🔀 17** ] thecoshman/http](https://github.com/thecoshman/http) — Host These Things Please — A basic http server for hosting a folder fast and simply [![build badge](https://api.travis-ci.org/thecoshman/http.svg?branch=master)](https://travis-ci.org/thecoshman/http)
* [[ **⭐ 134 | 👁️ 8 | 🔀 13** ] wyhaya/see](https://github.com/wyhaya/see) — Static HTTP file server [![Build Status](https://api.travis-ci.org/wyhaya/see.svg?branch=master)](https://travis-ci.org/wyhaya/see)
* [[ **⭐ 82 | 👁️ 5 | 🔀 6** ] ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) — A demonstration of how a Rust GraphQL server can be used as a remote schema with [Hasura](https://hasura.io/) ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)

## Development tools

* [[ **⭐ 3964 | 👁️ 100 | 🔀 600** ] Rustup](https://github.com/rust-lang/rustup) — the Rust toolchain installer [![build badge](https://github.com/rust-lang/rustup/workflows/Linux%20(master)/badge.svg?branch=master)](https://github.com/rust-lang/rustup/actions)
* [[ **⭐ 3582 | 👁️ 51 | 🔀 573** ] rustfmt](https://github.com/rust-lang/rustfmt) — A Rust code formatter [![build badge](https://api.travis-ci.com/rust-lang/rustfmt.svg?branch=master)](https://travis-ci.com/rust-lang/rustfmt)
* [[ **⭐ 3276 | 👁️ 86 | 🔀 284** ] Racer](https://github.com/racer-rust/racer) — code completion for Rust [![build badge](https://api.travis-ci.org/racer-rust/racer.svg?branch=master)](https://travis-ci.org/racer-rust/racer)
* [[ **⭐ 3241 | 👁️ 82 | 🔀 233** ] Rust Language Server](https://github.com/rust-lang/rls) — A server that runs in the background, providing IDEs, editors, and other tools with information about Rust programs
* [[ **⭐ 2630 | 👁️ 34 | 🔀 90** ] just](https://github.com/casey/just) — A handy command runner for project-specific tasks [![build badge](https://api.travis-ci.org/casey/just.svg?branch=master)](https://travis-ci.org/casey/just)
* [[ **⭐ 848 | 👁️ 13 | 🔀 100** ] dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) — Linter for `.env` files [![build badge](https://github.com/dotenv-linter/dotenv-linter/workflows/CI/badge.svg?branch=master)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [[ **⭐ 781 | 👁️ 10 | 🔀 32** ] geiger](https://github.com/rust-secure-code/cargo-geiger) — A program that list statistics related to usage of unsafe Rust code in a Rust crate and all its dependencies [![Build Status](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/rust-secure-code.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [[ **⭐ 650 | 👁️ 12 | 🔀 36** ] clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) — generates a changelog from git metadata ([conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)) [![build badge](https://api.travis-ci.org/clog-tool/clog-cli.svg?branch=master)](https://travis-ci.org/clog-tool/clog-cli)
* [[ **⭐ 589 | 👁️ 16 | 🔀 42** ] rust-lang/rustfix](https://github.com/rust-lang/rustfix)  — automatically applies the suggestions made by rustc
* [[ **⭐ 555 | 👁️ 9 | 🔀 23** ] Rust Search Extension](https://github.com/huhu/rust-search-extension) — A handy browser extension to search crates and docs in address bar (omnibox). [![Build Status](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [[ **⭐ 553 | 👁️ 12 | 🔀 37** ] artifact](https://github.com/vitiral/artifact) — the design doc tool made for developers [![Build Status](https://api.travis-ci.org/vitiral/artifact.svg?branch=master)](https://travis-ci.org/vitiral/artifact)
* [[ **⭐ 498 | 👁️ 14 | 🔀 30** ] mask](https://github.com/jakedeichert/mask) — A CLI task runner defined by a simple markdown file [![build badge](https://github.com/jakedeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jakedeichert/mask/actions?query=workflow%3ACI)
* [[ **⭐ 311 | 👁️ 6 | 🔀 22** ] dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) — create ctags/etags for a cargo project and all of its dependencies [![build badge](https://api.travis-ci.org/dan-t/rusty-tags.svg?branch=master)](https://travis-ci.org/dan-t/rusty-tags)
* [[ **⭐ 269 | 👁️ 3 | 🔀 11** ] fw](https://github.com/brocode/fw) — workspace productivity booster [![build badge](https://api.travis-ci.org/brocode/fw.svg?branch=master)](https://travis-ci.org/brocode/fw)
* [[ **⭐ 229 | 👁️ 4 | 🔀 22** ] Module Linker](https://github.com/fiatjaf/module-linker) — Extension that adds `<a>` links to references in `mod`, `use` and `extern crate` statements at GitHub.
* [[ **⭐ 161 | 👁️ 8 | 🔀 11** ] semantic-rs](https://github.com/semantic-rs/semantic-rs) — automatic crate publishing [![build badge](https://api.travis-ci.org/semantic-rs/semantic-rs.svg?branch=master)](https://travis-ci.org/semantic-rs/semantic-rs)
* [[ **⭐ 156 | 👁️ 6 | 🔀 6** ] scriptisto](https://github.com/igor-petruk/scriptisto) A language-agnostic "shebang interpreter" that enables you to write one file scripts in compiled languages. [![Build Status](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [[ **⭐ 147 | 👁️ 6 | 🔀 6** ] datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - Powerful database anonymizer with flexible rules [![build badge](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [[ **⭐ 89 | 👁️ 2 | 🔀 3** ] ptags](https://github.com/dalance/ptags) — A parallel universal-ctags wrapper for git repository [![Build Status](https://api.travis-ci.org/dalance/ptags.svg?branch=master)](https://travis-ci.org/dalance/ptags)
* [[ **⭐ 37 | 👁️ 2 | 🔀 4** ] tinyrick](https://github.com/mcandre/tinyrick) a basic task dependency tool emphasizing Rust functions over raw shell commands.
* [[ **⭐ 20 | 👁️ 2 | 🔀 0** ] frewsxcv/crate-deps](https://github.com/frewsxcv/crate-deps) — generates images of dependency graphs for crates hosted on crates.io
* [clippy](https://crates.io/crates/clippy) — Rust lints [![build badge](https://api.travis-ci.com/rust-lang/rust-clippy.svg?branch=master)](https://travis-ci.org/rust-lang/rust-clippy)
* [delta](https://crates.io/crates/git-delta) — A syntax-highlighter for git and diff output [![build badge](https://api.travis-ci.com/dandavison/delta.svg?branch=master)](https://travis-ci.com/dandavison/delta)
* [git-journal](https://github.com/saschagrunert/git-journal/) — The Git Commit Message and Changelog Generation Framework [![build badge](https://api.travis-ci.org/saschagrunert/git-journal.svg?branch=master)](https://travis-ci.org/saschagrunert/git-journal)
* [gstats](https://github.com/boonshift/gstats/) — command line tool to print a developer handy summary of all git repositories below current directory
* [Rust Regex Playground](https://2fd.github.io/rust-regex-playground/#method=find&regex=%5Cw%2B&text=abc) — Web tool to evaluate rust regular expressions

### Build system

  * [[ **⭐ 920 | 👁️ 11 | 🔀 20** ] dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) — Expand macros in your source code
  * [[ **⭐ 700 | 👁️ 9 | 🔀 71** ] cargo-generate](https://github.com/cargo-generate/cargo-generate) A generator of a rust project by leveraging a pre-existing git repository as a template.
  * [[ **⭐ 539 | 👁️ 7 | 🔀 37** ] cargo-tree](https://github.com/sfackler/cargo-tree) – Cargo subcommand that visualizes a crate's dependency graph in a tree-like format [![CircleCI](https://circleci.com/gh/sfackler/cargo-tree.svg?style=shield)](https://app.circleci.com/pipelines/github/sfackler/cargo-tree)
  * [[ **⭐ 6 | 👁️ 2 | 🔀 0** ] liuchong/cargo-x](https://github.com/liuchong/cargo-x) — A very simple third-party cargo subcommand to execute a custom command [![build badge](https://api.travis-ci.org/liuchong/cargo-x.svg?branch=master)](https://travis-ci.org/liuchong/cargo-x)
* [Cargo](https://crates.io/) — the Rust package manager
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) — A utility to compare Rust micro-benchmarks [![build badge](https://api.travis-ci.org/BurntSushi/cargo-benchcmp.svg?branch=master)](https://travis-ci.org/BurntSushi/cargo-benchcmp)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) — A cargo extension that can generate BitBake recipes utilizing the classes from meta-rust [![build badge](https://api.travis-ci.org/cardoe/cargo-bitbake.svg?branch=master)](https://travis-ci.org/cardoe/cargo-bitbake)
  * [cargo-cache](https://crates.io/crates/cargo-cache) — inspect/manage/clean your cargo cache (`~/.cargo/`/`${CARGO_HOME}`), print sizes etc [![Build Status](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) — A wrapper around `cargo rustc -- -Zno-trans` which can be helpful for running a faster compile if you only need correctness checks [![build badge](https://api.travis-ci.org/rsolomo/cargo-check.svg?branch=master)](https://travis-ci.org/rsolomo/cargo-check)
  * [cargo-count](https://crates.io/crates/cargo-count) — lists source code counts and details about cargo projects, including unsafe statistics [![build badge](https://api.travis-ci.org/kbknapp/cargo-count.svg?branch=master)](https://travis-ci.org/kbknapp/cargo-count)
  * [cargo-deb](https://crates.io/crates/cargo-deb) — Generates binary Debian packages [![build badge](https://api.travis-ci.org/mmstick/cargo-deb.svg?branch=master)](https://travis-ci.org/mmstick/cargo-deb)
  * [cargo-deps](https://crates.io/crates/cargo-deps) — build dependency graphs of Rust projects [![build badge](https://api.travis-ci.com/m-cat/cargo-deps.svg?branch=master)](https://travis-ci.org/m-cat/cargo-deps)
  * [cargo-do](https://crates.io/crates/cargo-do) — run multiple cargo commands in a row [![build badge](https://api.travis-ci.org/pwoolcoc/cargo-do.svg?branch=master)](https://travis-ci.org/pwoolcoc/cargo-do)
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) — cargo extension that can generate ebuilds using the in-tree eclasses [![build badge](https://api.travis-ci.org/cardoe/cargo-ebuild.svg?branch=master)](https://travis-ci.org/cardoe/cargo-ebuild)
  * [cargo-edit](https://crates.io/crates/cargo-edit) — allows you to add and list dependencies by reading/writing to your Cargo.toml file from the command line [![build badge](https://api.travis-ci.org/killercup/cargo-edit.svg?branch=master)](https://travis-ci.org/killercup/cargo-edit)
  * [cargo-get](https://crates.io/crates/cargo-get) - Cargo plugin to easily query information from Cargo.toml files ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nicolaiunrein/cargo-get/CI)
  * [cargo-graph](https://crates.io/crates/cargo-graph) — updated fork of `cargo-dot` with additional features. Unmaintained, see `cargo-deps` [![build badge](https://api.travis-ci.org/kbknapp/cargo-graph.svg?branch=master)](https://travis-ci.org/kbknapp/cargo-graph)
  * [cargo-info](https://crates.io/crates/cargo-info) — queries crates.io for crates details from command line [![build badge](https://api.travis-ci.org/imp/cargo-info.svg?branch=master)](https://travis-ci.org/imp/cargo-info)
  * [cargo-license](https://crates.io/crates/cargo-license) — A cargo subcommand to quickly view the licenses of all dependencies. [![build badge](https://api.travis-ci.org/onur/cargo-license.svg?branch=master)](https://travis-ci.org/onur/cargo-license)
  * [cargo-make](https://crates.io/crates/cargo-make) — Rust task runner and build tool. [![build badge](https://api.travis-ci.org/sagiegurari/cargo-make.svg?branch=master)](https://travis-ci.org/sagiegurari/cargo-make)
  * [cargo-modules](https://crates.io/crates/cargo-modules) — A cargo plugin for showing a tree-like overview of a crate's modules. [![build badge](https://api.travis-ci.org/regexident/cargo-modules.svg?branch=master)](https://travis-ci.org/regexident/cargo-modules)
  * [cargo-multi](https://crates.io/crates/cargo-multi) — runs specified cargo command on multiple crates [![build badge](https://api.travis-ci.org/imp/cargo-multi.svg?branch=master)](https://travis-ci.org/imp/cargo-multi)
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) — displays when newer versions of Rust dependencies are available, or out of date [![build badge](https://api.travis-ci.org/kbknapp/cargo-outdated.svg?branch=master)](https://travis-ci.org/kbknapp/cargo-outdated)
  * [cargo-release](https://crates.io/crates/cargo-release) — tool for releasing git-managed cargo project, build, tag, publish, doc and push [![build badge](https://api.travis-ci.org/sunng87/cargo-release.svg?branch=master)](https://travis-ci.org/sunng87/cargo-release)
  * [cargo-script](https://crates.io/crates/cargo-script) — lets people quickly and easily run Rust "scripts" which can make use of Cargo's package ecosystem [![build badge](https://api.travis-ci.org/DanielKeep/cargo-script.svg?branch=master)](https://travis-ci.org/DanielKeep/cargo-script)
  * [cargo-testify](https://crates.io/crates/cargo-testify) — watches files changes, runs tests and notifies about the result with friendly OS notification [![build badge](https://api.travis-ci.org/greyblake/cargo-testify.svg?branch=master)](https://travis-ci.org/greyblake/cargo-testify)
  * [cargo-update](https://crates.io/crates/cargo-update) — cargo subcommand for checking and applying updates to installed executables [![build badge](https://api.travis-ci.org/nabijaczleweli/cargo-update.svg?branch=master)](https://travis-ci.org/nabijaczleweli/cargo-update)
  * [cargo-watch](https://crates.io/crates/cargo-watch) — utility for cargo to compile projects when sources change [![build badge](https://api.travis-ci.org/passcod/cargo-watch.svg?branch=master)](https://travis-ci.org/passcod/cargo-watch)
* CMake
  * [[ **⭐ 106 | 👁️ 22 | 🔀 14** ] Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) — useful for integrating a Rust library into a CMake project
  * [[ **⭐ 94 | 👁️ 5 | 🔀 13** ] SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) — an example project showing usage of CMake with Rust [![build badge](https://api.travis-ci.org/SiegeLord/RustCMake.svg?branch=master)](https://travis-ci.org/SiegeLord/RustCMake)
* Github actions
  * [[ **⭐ 115 | 👁️ 2 | 🔀 3** ] peaceiris/actions-mdbook](https://github.com/peaceiris/actions-mdbook) — GitHub Actions for mdBook
  * [[ **⭐ 53 | 👁️ 3 | 🔀 6** ] icepuma/rust-action](https://github.com/icepuma/rust-action) — rust github action
* GitHub webhooks
  * [snare](https://tratt.net/laurie/src/snare/) — GitHub webhooks runner daemon
* Webpack
  * [[ **⭐ 34 | 👁️ 2 | 🔀 3** ] mxseev/rust-loader](https://github.com/mxseev/rust-loader) — Webpack Rust loader (wasm)

### Debugging

* GDB
  * [[ **⭐ 7871 | 👁️ 175 | 🔀 466** ] gdbgui](https://github.com/cs01/gdbgui) — Browser based frontend for gdb to debug C, C++, Rust, and go. [![build badge](https://api.travis-ci.org/cs01/gdbgui.svg?branch=master)](https://travis-ci.org/cs01/gdbgui)
  * [rust-gdb](https://github.com/rust-lang/rust/blob/master/src/etc/rust-gdb)
* LLDB
  * [lldb_batchmode.py](https://github.com/rust-lang/rust/blob/master/src/etc/lldb_batchmode.py) — allows to use LLDB in a way similar to GDB's batch mode.
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension for [Visual Studio Code](https://code.visualstudio.com/).

### Deployment

* Docker
  * [[ **⭐ 925 | 👁️ 21 | 🔀 116** ] emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) — Docker images for compiling static Rust binaries using musl-libc and musl-gcc, with static versions of useful C libraries
  * [[ **⭐ 221 | 👁️ 10 | 🔀 40** ] rust-lang-nursery/docker-rust](https://github.com/rust-lang/docker-rust) — the official Rust Docker image
  * [[ **⭐ 152 | 👁️ 10 | 🔀 26** ] messense/rust-musl-cross](https://github.com/messense/rust-musl-cross) — Docker images for compiling static Rust binaries using musl-cross [![build badge](https://api.travis-ci.org/messense/rust-musl-cross.svg?branch=master)](https://travis-ci.org/messense/rust-musl-cross)
  * [[ **⭐ 100 | 👁️ 2 | 🔀 9** ] kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) — An example project for very small rust docker images [![build badge](https://api.travis-ci.org/kpcyrd/mini-docker-rust.svg?branch=master)](https://travis-ci.org/kpcyrd/mini-docker-rust)
  * [[ **⭐ 60 | 👁️ 4 | 🔀 7** ] liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) — A multiple version (with musl tools) Rust Docker image
* Github Pages
  * [[ **⭐ 77 | 👁️ 3 | 🔀 5** ] wasm-template-rust](https://github.com/sn99/wasm-template-rust) — A wasm template for Rust to publish to gh-pages without npm-deploy [![Build Status](https://travis-ci.com/sn99/wasm-template-rust.svg?branch=master)](https://travis-ci.com/sn99/wasm-template-rust)
* Google App Engine
  * [[ **⭐ 44 | 👁️ 4 | 🔀 6** ] DenisKolodin/rust-app-engine](https://github.com/DenisKolodin/rust-app-engine) — App Engine Rust boilerplate
* Heroku
  * [[ **⭐ 415 | 👁️ 17 | 🔀 123** ] emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) — A buildpack for Rust applications on Heroku

### Embedded

[Rust Embedded](https://rust-embedded.org/)

* Cross compiling
  * [[ **⭐ 1815 | 👁️ 42 | 🔀 60** ] japaric/rust-cross](https://github.com/japaric/rust-cross) — everything you need to know about cross compiling Rust programs [![build badge](https://api.travis-ci.org/japaric/rust-cross.svg?branch=master)](https://travis-ci.org/japaric/rust-cross)
  * [[ **⭐ 845 | 👁️ 22 | 🔀 88** ] japaric/xargo](https://github.com/japaric/xargo) — effortless cross compilation of Rust programs to custom bare-metal targets like ARM Cortex-M [![build badge](https://api.travis-ci.org/japaric/xargo.svg?branch=master)](https://travis-ci.org/japaric/xargo)
* Raspberry Pi
  * [[ **⭐ 293 | 👁️ 17 | 🔀 13** ] Ogeon/rust-on-raspberry-pi](https://github.com/Ogeon/rust-on-raspberry-pi) — instructions for how to cross compile Rust projects for the Raspberry Pi .
* Arduino
  * [[ **⭐ 429 | 👁️ 32 | 🔀 22** ] avr-rust/ruduino](https://github.com/avr-rust/ruduino) ^`^t Reusable components for the Arduino Uno.

### FFI

See also [Foreign Function Interface](https://doc.rust-lang.org/book/first-edition/ffi.html),  [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/) (a collection of examples of using code written in Rust from other languages) and [FFI examples written in Rust](https://github.com/alexcrichton/rust-ffi-examples).

* C
  * [[ **⭐ 962 | 👁️ 22 | 🔀 148** ] rlhunt/cbindgen](https://github.com/eqrion/cbindgen) — generates C header files from Rust source files. Used in Gecko for WebRender [![build badge](https://api.travis-ci.org/eqrion/cbindgen.svg?branch=master)](https://travis-ci.org/eqrion/cbindgen)
  * [[ **⭐ 189 | 👁️ 6 | 🔀 22** ] Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) — generates C header files from Rust source files [![build badge](https://api.travis-ci.org/Sean1708/rusty-cheddar.svg?branch=master)](https://travis-ci.org/Sean1708/rusty-cheddar)
* C++
  * [[ **⭐ 2682 | 👁️ 43 | 🔀 120** ] dtolnay/cxx](https://github.com/dtolnay/cxx) — Safe interop between Rust and C++ [![build badge](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [[ **⭐ 2081 | 👁️ 44 | 🔀 443** ] rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) — A Rust bindings generator
  * [rust-cpp](https://crates.io/crates/cpp) - Embed C++ code directly in Rust. [![Build Status](https://api.travis-ci.org/mystor/rust-cpp.svg?branch=master)](https://travis-ci.org/mystor/rust-cpp) [![Build status](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
* Erlang
  * [[ **⭐ 2719 | 👁️ 73 | 🔀 119** ] rusterlium/rustler](https://github.com/rusterlium/rustler) — safe Rust bridge for creating Erlang NIF functions [![build badge](https://api.travis-ci.org/rusterlium/rustler.svg?branch=master)](https://travis-ci.org/rusterlium/rustler)
* Haskell
  * [[ **⭐ 255 | 👁️ 17 | 🔀 8** ] mgattozzi/curryrs](https://github.com/mgattozzi/curryrs) — Bridge the gap between Haskell and Rust
  * [[ **⭐ 20 | 👁️ 0 | 🔀 1** ] mgattozzi/haskellrs](https://github.com/mgattozzi/haskellrs) — Rust in Haskell FFI Example
  * [[ **⭐ 0 | 👁️ 0 | 🔀 0** ] mgattozzi/rushs](https://github.com/mgattozzi/rushs) — Haskell in Rust FFI Example
* Java
  * [[ **⭐ 280 | 👁️ 11 | 🔀 32** ] drrb/java-rust-example](https://github.com/drrb/java-rust-example) — use Rust from Java [![build badge](https://api.travis-ci.org/drrb/java-rust-example.svg?branch=master)](https://travis-ci.org/drrb/java-rust-example)
  * [[ **⭐ 59 | 👁️ 3 | 🔀 1** ] bennettanderson/rjni](https://github.com/benanders/rjni) — use Java from Rust
  * [[ **⭐ 13 | 👁️ 2 | 🔀 4** ] rawrafox/rust-jdbc](https://github.com/rawrafox/rust-jdbc) — uses JDBC from Rust
  * [j4rs](https://crates.io/crates/j4rs) — use Java from Rust [![build badge](https://api.travis-ci.org/astonbitecode/j4rs.svg?branch=master)](https://travis-ci.org/astonbitecode/j4rs)
  * [jni](https://crates.io/crates/jni) — use Rust from Java [![build badge](https://api.travis-ci.org/jni-rs/jni-rs.svg?branch=master)](https://travis-ci.org/jni-rs/jni-rs)
  * [jni-sys](https://crates.io/crates/jni-sys) — Rust definitions corresponding to jni.h [![build badge](https://api.travis-ci.org/sfackler/rust-jni-sys.svg?branch=master)](https://travis-ci.org/sfackler/rust-jni-sys)
  * [rucaja](https://crates.io/crates/rucaja) — use Java from Rust [![build badge](https://api.travis-ci.org/kud1ing/rucaja.svg?branch=master)](https://travis-ci.org/kud1ing/rucaja)
* Lua
  * [[ **⭐ 444 | 👁️ 16 | 🔀 44** ] tomaka/hlua](https://github.com/tomaka/hlua) — Rust library to interface with Lua [![build badge](https://api.travis-ci.org/tomaka/hlua.svg?branch=master)](https://travis-ci.org/tomaka/hlua)
  * [[ **⭐ 132 | 👁️ 9 | 🔀 36** ] jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) — Lua 5.3 bindings for Rust [![build badge](https://api.travis-ci.org/jcmoyer/rust-lua53.svg?branch=master)](https://travis-ci.org/jcmoyer/rust-lua53)
  * [[ **⭐ 112 | 👁️ 8 | 🔀 20** ] lilyball/rust-lua](https://github.com/lilyball/rust-lua) — Safe Rust bindings to Lua 5.1 [![build badge](https://api.travis-ci.org/lilyball/rust-lua.svg?branch=master)](https://travis-ci.org/lilyball/rust-lua)
  * [[ **⭐ 41 | 👁️ 6 | 🔀 9** ] tickbh/td_rlua](https://github.com/tickbh/td_rlua) — Zero-cost high-level lua 5.3 wrapper for Rust [![build badge](https://api.travis-ci.org/tickbh/td_rlua.svg?branch=master)](https://travis-ci.org/tickbh/td_rlua)
* mruby
  * [[ **⭐ 193 | 👁️ 8 | 🔀 15** ] anima-engine/mrusty](https://github.com/anima-engine/mrusty) — mruby safe bindings for Rust [![build badge](https://api.travis-ci.org/anima-engine/mrusty.svg?branch=master)](https://travis-ci.org/anima-engine/mrusty)
* Node.js
  * [[ **⭐ 5314 | 👁️ 103 | 🔀 215** ] neon-bindings/neon](https://github.com/neon-bindings/neon) — Rust bindings for writing safe and fast native Node.js modules [![build badge](https://api.travis-ci.org/neon-bindings/neon.svg?branch=master)](https://travis-ci.org/neon-bindings/neon)
  * [[ **⭐ 149 | 👁️ 12 | 🔀 20** ] infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - Easy way to generate nodejs module using Rust
* Objective-C
  * [[ **⭐ 255 | 👁️ 13 | 🔀 33** ] SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) — Objective-C Runtime bindings and wrapper for Rust
* Perl
  * [[ **⭐ 54 | 👁️ 8 | 🔀 9** ] vickenty/perl-xs](https://github.com/vickenty/perl-xs) — Create Perl XS modules using Rust [![build badge](https://api.travis-ci.org/vickenty/perl-xs.svg?branch=master)](https://travis-ci.org/vickenty/perl-xs)
  * [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] vickenty/mi-rust](https://github.com/vickenty/mi-rust) — Adds support to M::I for building modules with Cargo
* Python
  * [[ **⭐ 3988 | 👁️ 61 | 🔀 260** ] PyO3/PyO3](https://github.com/PyO3/PyO3) — Rust bindings for the Python interpreter [![build badge](https://api.travis-ci.org/PyO3/pyo3.svg?branch=master)](https://travis-ci.org/PyO3/pyo3)
  * [[ **⭐ 1411 | 👁️ 30 | 🔀 101** ] dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) — Python bindings [![build badge](https://api.travis-ci.org/dgrunwald/rust-cpython.svg?branch=master)](https://travis-ci.org/dgrunwald/rust-cpython)
  * [[ **⭐ 686 | 👁️ 22 | 🔀 24** ] getsentry/milksnake](https://github.com/getsentry/milksnake) — extension for python setuptools that allows you to distribute dynamic linked libraries in Python wheels in the most portable way imaginable.
* Ruby
  * [[ **⭐ 1967 | 👁️ 61 | 🔀 63** ] tildeio/helix](https://github.com/tildeio/helix) — write Ruby classes in Rust [![build badge](https://api.travis-ci.org/tildeio/helix.svg?branch=master)](https://travis-ci.org/tildeio/helix)
  * [[ **⭐ 775 | 👁️ 27 | 🔀 34** ] d-unseductable/ruru](https://github.com/d-unseductable/ruru) — native Ruby extensions written in Rust [![build badge](https://api.travis-ci.org/d-unseductable/ruru.svg?branch=master)](https://travis-ci.org/d-unseductable/ruru)
  * [[ **⭐ 478 | 👁️ 12 | 🔀 37** ] danielpclark/rutie](https://github.com/danielpclark/rutie) — native Ruby extensions written in Rust and vice versa [![Build Status](https://api.travis-ci.org/danielpclark/rutie.svg?branch=master)](https://travis-ci.org/danielpclark/rutie)
* Web Assembly
  * [[ **⭐ 4070 | 👁️ 102 | 🔀 537** ] rustwasm/wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) — A project for facilitating high-level interactions between wasm modules and JS. [![build badge](https://api.travis-ci.com/rustwasm/wasm-bindgen.svg?branch=master)](https://travis-ci.org/rustwasm/wasm-bindgen)
  * [[ **⭐ 3281 | 👁️ 58 | 🔀 217** ] rustwasm/wasm-pack](https://github.com/rustwasm/wasm-pack) — :package: :sparkles: pack up the wasm and publish it to npm! [![build badge](https://api.travis-ci.com/rustwasm/wasm-pack.svg?branch=master)](https://travis-ci.org/rustwasm/wasm-pack)
  * [[ **⭐ 162 | 👁️ 9 | 🔀 8** ] rhysd/wain](https://github.com/rhysd/wain) - wain: WebAssembly INterpreter from scratch in Safe Rust with zero dependency [![build badge](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)

### IDEs

See also [Are we (I)DE yet?](https://areweideyet.com/) and [Rust Tools](https://www.rust-lang.org/tools).

    * [[ **⭐ 3438 | 👁️ 78 | 🔀 299** ] intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) — [![build badge](https://api.travis-ci.org/intellij-rust/intellij-rust.svg?branch=master)](https://travis-ci.org/intellij-rust/intellij-rust)
    * [[ **⭐ 3203 | 👁️ 43 | 🔀 260** ] autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) — [LSP](https://microsoft.github.io/language-server-protocol/) client. Implemented in Rust and supports rls out of the box.
    * [[ **⭐ 2532 | 👁️ 39 | 🔀 233** ] rust.vim](https://github.com/rust-lang/rust.vim) — provides file detection, syntax highlighting, formatting, Syntastic integration, and more.
  * [[ **⭐ 897 | 👁️ 44 | 🔀 61** ] SolidOak](https://github.com/oakes/SolidOak) — A simple IDE for Rust, based on GTK+ and [Neovim](https://github.com/neovim/neovim)
    * [[ **⭐ 693 | 👁️ 28 | 🔀 130** ] rust-mode](https://github.com/rust-lang/rust-mode) — Rust Major Mode
    * [[ **⭐ 610 | 👁️ 12 | 🔀 43** ] vim-racer](https://github.com/racer-rust/vim-racer) — allows vim to use [Racer](https://github.com/racer-rust/racer) for Rust code completion and navigation.
    * [[ **⭐ 609 | 👁️ 26 | 🔀 85** ] rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) — official Rust package
    * [[ **⭐ 384 | 👁️ 16 | 🔀 49** ] emacs-racer](https://github.com/racer-rust/emacs-racer) — Autocompletion (see also [company](https://company-mode.github.io) and [auto-complete](https://github.com/auto-complete/auto-complete))
    * [[ **⭐ 369 | 👁️ 15 | 🔀 45** ] rustic](https://github.com/brotzeit/rustic) - Rust development environment for Emacs [![build badge](https://api.travis-ci.com/brotzeit/rustic.svg?branch=master)](https://travis-ci.com/brotzeit/rustic)
    * [[ **⭐ 351 | 👁️ 24 | 🔀 51** ] RustDT](https://github.com/RustDT/RustDT) — [![build badge](https://api.travis-ci.org/RustDT/RustDT.svg?branch=master)](https://travis-ci.org/RustDT/RustDT)
    * [[ **⭐ 200 | 👁️ 7 | 🔀 26** ] rust-lang/atom-ide-rust](https://github.com/rust-lang/atom-ide-rust) — Rust IDE support for Atom, powered by the Rust Language Server (RLS) [![Build Status](https://api.travis-ci.com/rust-lang/atom-ide-rust.svg?branch=master)](https://travis-ci.com/rust-lang/atom-ide-rust)
  * [[ **⭐ 163 | 👁️ 12 | 🔀 13** ] Ride](https://github.com/madeso/ride) — [![build badge](https://api.travis-ci.org/madeso/ride.svg?branch=master)](https://travis-ci.org/madeso/ride)
    * [[ **⭐ 155 | 👁️ 18 | 🔀 25** ] Eclipse Corrosion](https://github.com/eclipse/corrosion)
    * [[ **⭐ 117 | 👁️ 12 | 🔀 35** ] zargony/atom-language-rust](https://github.com/zargony/atom-language-rust)
    * [[ **⭐ 104 | 👁️ 4 | 🔀 16** ] flycheck-rust](https://github.com/flycheck/flycheck-rust) — Rust support for [Flycheck](https://github.com/flycheck/flycheck)
    * [[ **⭐ 47 | 👁️ 11 | 🔀 19** ] drrb/rust-netbeans](https://github.com/drrb/rust-netbeans)
    * [[ **⭐ 37 | 👁️ 2 | 🔀 9** ] vim-cargo](https://github.com/timonv/vim-cargo) — command bindings to quickly run cargo stuff from vim.
    * [[ **⭐ 25 | 👁️ 4 | 🔀 4** ] intellij-rust/intellij-toml](https://github.com/intellij-rust/intellij-toml) — basic Toml support
  * [Atom](https://atom.io/)
  * [Eclipse](https://www.eclipse.org/)
  * [Emacs](https://www.gnu.org/software/emacs/)
  * [gitpod.io](https://gitpod.io) — Online IDE with full Rust support based on Rust Language Server
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) native support for rust and cargo since Version 3.22.2
  * [Kakoune](http://kakoune.org/)
    * [kak-lsp/kak-lsp](https://github.com/kak-lsp/kak-lsp/) — [LSP](https://microsoft.github.io/language-server-protocol/) client. Implemented in Rust and supports rls out of the box.
  * [NetBeans](https://netbeans.org/)
  * [IntelliJ](https://www.jetbrains.com/idea/)
  * [Sublime Text](https://www.sublimetext.com/)
    * [sublimehq/packages](https://github.com/sublimehq/Packages/tree/master/Rust) — native Sublime support (already installed)
  * [Vim](https://vim.sourceforge.io/) — the ubiquitous text editor
  * Visual Studio
    * [[ **⭐ 686 | 👁️ 100 | 🔀 77** ] PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) — A Visual Studio extension for Rust [![Build status](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
    * [[ **⭐ 109 | 👁️ 3 | 🔀 12** ] crates](https://github.com/serayuzgur/crates) — crates is an extension for crates.io dependencies. [![build badge](https://img.shields.io/vscode-marketplace/v/serayuzgur.crates.svg">](https://github.com/serayuzgur/crates) [<img src="https://api.travis-ci.org/serayuzgur/crates.svg?branch=master)](https://travis-ci.org/serayuzgur/crates)
    * [[ **⭐ 106 | 👁️ 9 | 🔀 8** ] dgriffen/rls-vs2017](https://github.com/ZoeyR/rls-vs2017) — Rust support for Visual Studio 2017 Preview [![build badge](https://ci.appveyor.com/api/projects/status/d2lxlincwninhsng?svg=true)](https://ci.appveyor.com/project/dgriffen/rls-vs2017)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [rust-lang/rls-vscode](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) — Rust support for Visual Studio Code
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) — An alternative rust language server to the RLS
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension

### Pattern recognition

* [[ **⭐ 16 | 👁️ 1 | 🔀 0** ] sfikas/rusteval](https://github.com/sfikas/rusteval) — A tool used to evaluate the output of retrieval algorithms [![Build Status](https://api.travis-ci.org/sfikas/rusteval.svg?branch=master)](https://travis-ci.org/sfikas/rusteval)

### Profiling

* [[ **⭐ 7316 | 👁️ 59 | 🔀 147** ] sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) — A command-line benchmarking tool [![Version info](https://img.shields.io/crates/v/hyperfine.svg)](https://crates.io/crates/hyperfine) [![Build Status](https://api.travis-ci.org/sharkdp/hyperfine.svg?branch=master)](https://travis-ci.org/sharkdp/hyperfine)
* [[ **⭐ 1954 | 👁️ 35 | 🔀 61** ] koute/memory-profiler](https://github.com/koute/memory-profiler) — A memory profiler for Linux [![Build Status](https://api.travis-ci.org/koute/memory-profiler.svg?branch=master)](https://travis-ci.org/koute/memory-profiler)
* [[ **⭐ 1741 | 👁️ 26 | 🔀 136** ] bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) — Statistics-driven benchmarking library for Rust [![Build Status](https://api.travis-ci.org/bheisler/criterion.rs.svg?branch=master)](https://travis-ci.org/bheisler/criterion.rs)
* [[ **⭐ 62 | 👁️ 3 | 🔀 12** ] ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) — A stopwatch library [![build badge](https://api.travis-ci.org/ellisonch/rust-stopwatch.svg?branch=master)](https://travis-ci.org/ellisonch/rust-stopwatch)
* [[ **⭐ 26 | 👁️ 6 | 🔀 4** ] performancecopilot/hornet](https://github.com/performancecopilot/hornet) — A Performance Co-Pilot memory-mapped values instrumentation library [![crates.io badge](https://img.shields.io/crates/v/hornet.svg)](https://crates.io/crates/hornet) [![build badge](https://api.travis-ci.org/performancecopilot/hornet.svg?branch=master)](https://travis-ci.org/performancecopilot/hornet)
* FlameGraphs
  * [[ **⭐ 540 | 👁️ 13 | 🔀 19** ] llogiq/flame](https://github.com/llogiq/flame) — [![build badge](https://api.travis-ci.org/llogiq/flame.svg?branch=master)](https://travis-ci.org/llogiq/flame)
  * [[ **⭐ 113 | 👁️ 3 | 🔀 7** ] mrhooray/torch](https://github.com/mrhooray/torch) — generates FlameGraphs based on DWARF Debug Info

### Services

* [[ **⭐ 240 | 👁️ 8 | 🔀 15** ] deps.rs](https://github.com/deps-rs/deps.rs) — Detect outdated or insecure dependencies
* [docs.rs](https://docs.rs) — Automatic documentation generation of crates

### Static analysis

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [[ **⭐ 488 | 👁️ 23 | 🔀 42** ] facebookexperimental/MIRAI](https://github.com/facebookexperimental/mirai) — an abstract interpreter operating on Rust's mid-level intermediate representation (MIR) [![Build Status](https://api.travis-ci.com/facebookexperimental/MIRAI.svg?branch=master)](https://travis-ci.org/facebookexperimental/MIRAI/)
* [static_assertions](https://crates.io/crates/static_assertions) — Compile-time assertions to ensure that invariants are met [![Build Status](https://api.travis-ci.org/nvzqz/static-assertions-rs.svg?branch=master)](https://travis-ci.org/nvzqz/static-assertions-rs/)

### Testing

[[testing](https://crates.io/keywords/testing)]

* [[ **⭐ 1075 | 👁️ 26 | 🔀 51** ] trust](https://github.com/japaric/trust) — A Travis CI and AppVeyor template to test your Rust crate on 5 architectures and publish binary releases of it for Linux, macOS and Windows
* [[ **⭐ 1027 | 👁️ 31 | 🔀 73** ] rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) — A Rust fuzzer, using [AFL](https://lcamtuf.coredump.cx/afl/) [![build badge](https://api.travis-ci.org/rust-fuzz/afl.rs.svg?branch=master)](https://travis-ci.org/rust-fuzz/afl.rs)
* [[ **⭐ 222 | 👁️ 9 | 🔀 27** ] fake-rs](https://github.com/cksac/fake-rs) —  A library for generating fake data [![build badge](https://api.travis-ci.org/repositories/cksac/fake-rs.svg?branch=master)](https://travis-ci.org/cksac/fake-rs)
* [[ **⭐ 212 | 👁️ 10 | 🔀 30** ] cucumber-rust](https://crates.io/crates/cucumber-rust) — An implementation of the Cucumber testing framework for Rust. [![Build Status](https://github.com/bbqsrc/cucumber-rust/workflows/CI/badge.svg?branch=master)](https://github.com/bbqsrc/cucumber-rust)
* [[ **⭐ 78 | 👁️ 1 | 🔀 10** ] httpmock](https://github.com/alexliesenfeld/httpmock) — HTTP mocking [![build badge](https://dev.azure.com/alexliesenfeld/httpmock/_apis/build/status/alexliesenfeld.httpmock?branchName=master)](https://dev.azure.com/alexliesenfeld/httpmock/_build/latest?definitionId=2&branchName=master)
* [[ **⭐ 41 | 👁️ 3 | 🔀 4** ] AlKass/polish](https://github.com/AlKass/polish) — Mini Testing/Test-Driven Framework [![Build Status](https://api.travis-ci.org/AlKass/polish.svg?branch=master)](https://travis-ci.org/AlKass/polish) [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
* [[ **⭐ 29 | 👁️ 2 | 🔀 1** ] demonstrate](https://crates.io/crates/demonstrate) — Declarative Testing Framework [![Build Status](https://github.com/austinsheep/demonstrate/workflows/Continuous%20Integration/badge.svg?branch=master)](https://github.com/austinsheep/demonstrate)
* [[ **⭐ 7 | 👁️ 2 | 🔀 3** ] goldenfile](https://github.com/calder/rust-goldenfile) - A library providing a simple API for goldenfile testing. [![build badge](https://api.travis-ci.org/calder/rust-goldenfile.svg?branch=master)](https://travis-ci.org/calder/rust-goldenfile)
* [laboratory](https://crates.io/crates/laboratory) — A simple, expressive unit test framework for Rust ![build](https://github.com/enokson/laboratory/workflows/build/badge.svg?branch=master)
* [mockiato](https://crates.io/crates/mockiato) — A strict, yet friendly mocking library for Rust 2018 [![build badge](https://api.travis-ci.com/mockiato/mockiato.svg?branch=master)](https://travis-ci.com/mockiato/mockiato)
* [mutagen](https://crates.io/crates/mutagen) — A source-level mutation testing framework (nightly only) [![build badge](https://api.travis-ci.org/llogiq/mutagen.svg?branch=master)](https://travis-ci.org/llogiq/mutagen)
* [proptest](https://crates.io/crates/proptest) — property testing framework inspired by the [Hypothesis](https://hypothesis.works/) framework for Python [![build badge](https://api.travis-ci.org/altsysrq/proptest.svg?branch=master)](https://travis-ci.org/altsysrq/proptest)
* [quickcheck](https://crates.io/crates/quickcheck) — A Rust implementation of [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) [![build badge](https://api.travis-ci.org/BurntSushi/quickcheck.svg?branch=master)](https://travis-ci.org/BurntSushi/quickcheck)
* [mockito](https://crates.io/crates/mockito) — HTTP mocking [![build badge](https://api.travis-ci.org/lipanski/mockito.svg?branch=master)](https://travis-ci.org/lipanski/mockito)
* [speculate](https://crates.io/crates/speculate) — An RSpec inspired minimal testing framework for Rust
* [rstest](https://crates.io/crates/rstest) — Fixture-based test framework for Rust [![Build Status](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
* [ruspec](https://crates.io/crates/ruspec) — Write like Rspec testing framework with rust [![Build Status](https://github.com/k-nasa/ruspec/workflows/CI/badge.svg?branch=master)](https://github.com/k-nasa/ruspec/actions)
* [tarpaulin](https://crates.io/crates/cargo-tarpaulin) — A code coverage tool designed for Rust [![build badge](https://api.travis-ci.org/repositories/xd009642/tarpaulin.svg?branch=master)](https://travis-ci.org/xd009642/tarpaulin)
* [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - A cargo extension to simplify running library tests and benches on smartphones and other small processor devices.

### Transpiling

* [[ **⭐ 2052 | 👁️ 67 | 🔀 109** ] jameysharp/corrode](https://github.com/jameysharp/corrode) — A C to Rust translator written in Haskell.
* [[ **⭐ 1805 | 👁️ 43 | 🔀 92** ] immunant/c2rust](https://github.com/immunant/c2rust) — C to Rust translator and cross checker built atop Clang/LLVM. [![Build Status](https://api.travis-ci.org/immunant/c2rust.svg?branch=master)](https://travis-ci.org/immunant/c2rust)


## Libraries

* [[ **⭐ 12 | 👁️ 3 | 🔀 2** ] Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[crate](https://crates.io/crates/nixinfo)] — A lib crate for gathering system info such as cpu, distro, environment, kernel, etc.

### Artificial Intelligence

#### Genetic algorithms

* [[ **⭐ 108 | 👁️ 3 | 🔀 13** ] Martin1887/oxigen](https://github.com/Martin1887/oxigen) — Fast, parallel, extensible and adaptable genetic algorithm library. A example using this library solves the N Queens problem for N = 255 in only few seconds and using less than 1 MB of RAM.
* [[ **⭐ 65 | 👁️ 8 | 🔀 5** ] pkalivas/radiate](https://github.com/pkalivas/radiate) — A customizable parallel genetic programming engine capable of evolving solutions for supervised, unsupervised, and reinforcement learning problems. Comes with complete and customizable implementation of NEAT and Evtree. [![Build Status](https://api.travis-ci.com/pkalivas/radiate.svg?branch=master)](https://travis-ci.com/pkalivas/radiate)
* [[ **⭐ 64 | 👁️ 5 | 🔀 16** ] m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) — Genetic Algorithm library in Rust. In maintenance mode.
* [[ **⭐ 64 | 👁️ 2 | 🔀 10** ] willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) — Evolutionary algorithms with Rust [![Build Status](https://api.travis-ci.org/willi-kappler/darwin-rs.svg?branch=master)](https://travis-ci.org/willi-kappler/darwin-rs)
* [[ **⭐ 57 | 👁️ 2 | 🔀 7** ] innoave/genevo](https://github.com/innoave/genevo) — Execute genetic algorithm (GA) simulations in a customizable and extensible way.
* [[ **⭐ 14 | 👁️ 1 | 🔀 1** ] yurytsoy/revonet](https://github.com/yurytsoy/revonet) — Rust implementation of real-coded GA for solving optimization problems and training of neural networks.
* [[ **⭐ 5 | 👁️ 2 | 🔀 0** ] mneumann/evo-rs](https://github.com/mneumann/evo-rs) — Evolutionary Algorithm Library for Rust. Without changes for 3 years.
![Crates.io](https://img.shields.io/crates/v/radiate)

#### Machine learning

[[machine learning](https://crates.io/keywords/machine-learning)]

See also [About Rust’s Machine Learning Community](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f) and [Are we learning yet?](https://www.arewelearningyet.com).

* [[ **⭐ 5470 | 👁️ 191 | 🔀 278** ] autumnai/leaf](https://github.com/autumnai/leaf) — Open Machine Intelligence framework. [![Build Status](https://api.travis-ci.org/autumnai/leaf.svg?branch=master)](https://travis-ci.org/autumnai/leaf). Abandoned project. The most updated fork is [spearow/juice]( https://github.com/spearow/juice).
* [[ **⭐ 4413 | 👁️ 74 | 🔀 332** ] huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Hugging Face's tokenizers for modern NLP pipelines written in Rust (original implementation) with bindings for Python. [![Build Status](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [[ **⭐ 2998 | 👁️ 112 | 🔀 251** ] tensorflow/rust](https://github.com/tensorflow/rust) — Rust language bindings for TensorFlow. [![Build Status](https://api.travis-ci.org/tensorflow/rust.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* [[ **⭐ 1156 | 👁️ 61 | 🔀 145** ] AtheMathmo/rusty-machine](https://github.com/AtheMathmo/rusty-machine) — Machine learning library for Rust [![Build Status](https://api.travis-ci.org/AtheMathmo/rusty-machine.svg?branch=master)](https://travis-ci.org/AtheMathmo/rusty-machine)
* [[ **⭐ 1000 | 👁️ 30 | 🔀 89** ] LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) — Rust language bindings for PyTorch. [![Build Status](https://api.travis-ci.org/LaurentMazare/tch-rs.svg?branch=master)](https://travis-ci.org/LaurentMazare/tch-rs)
* [[ **⭐ 839 | 👁️ 44 | 🔀 61** ] rust-ml/linfa](https://github.com/rust-ml/linfa) — Machine learning framework.
* [[ **⭐ 481 | 👁️ 22 | 🔀 43** ] maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) — Machine learning crate for Rust. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [[ **⭐ 20 | 👁️ 3 | 🔀 5** ] avinashshenoy97/RusticSOM](https://github.com/avinashshenoy97/RusticSOM) — Rust library for Self Organising Maps (SOM). [![Build Status](https://api.travis-ci.org/avinashshenoy97/RusticSOM.svg?branch=master)](https://travis-ci.org/avinashshenoy97/RusticSOM)

### Astronomy

[[astronomy](https://crates.io/keywords/astronomy)]

* [[ **⭐ 150 | 👁️ 14 | 🔀 23** ] saurvs/astro-rust](https://github.com/saurvs/astro-rust) — astronomy for Rust [![build badge](https://api.travis-ci.org/saurvs/astro-rust.svg?branch=master)](https://travis-ci.org/saurvs/astro-rust)
* [[ **⭐ 24 | 👁️ 2 | 🔀 3** ] flosse/rust-sun](https://github.com/flosse/rust-sun) — A rust port of the JS library suncalc [![build badge](https://api.travis-ci.org/flosse/rust-sun.svg?branch=master)](https://travis-ci.org/flosse/rust-sun)
* [fitsio](https://crates.io/crates/fitsio) — fits interface library wrapping cfitsio [![build badge](https://api.travis-ci.org/mindriot101/rust-fitsio.svg?branch=master)](https://travis-ci.org/mindriot101/rust-fitsio)

### Asynchronous

* [[ **⭐ 4188 | 👁️ 118 | 🔀 505** ] mio](https://github.com/tokio-rs/mio) — MIO is a lightweight IO library for Rust with a focus on adding as little overhead as possible over the OS abstractions [![build badge](https://api.travis-ci.org/tokio-rs/mio.svg?branch=master)](https://travis-ci.org/tokio-rs/mio)
* [[ **⭐ 3730 | 👁️ 109 | 🔀 463** ] rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) — Zero-cost futures in Rust [![build badge](https://api.travis-ci.com/rust-lang/futures-rs.svg?branch=master" alt="Travis CI Build Status)](https://travis-ci.org/rust-lang/futures-rs)
* [[ **⭐ 910 | 👁️ 39 | 🔀 38** ] Xudong-Huang/may](https://github.com/Xudong-Huang/may) — rust stackful coroutine library [![build badge](https://api.travis-ci.org/Xudong-Huang/may.svg?branch=master)](https://travis-ci.org/Xudong-Huang/may)
* [[ **⭐ 883 | 👁️ 26 | 🔀 26** ] rustasync/runtime](https://github.com/rustasync/runtime) — A runtime agnostic API designed to make async feel like its part of stdlib [![Crates.io](https://img.shields.io/crates/v/runtime.svg?style=flat-square)](https://crates.io/crates/runtime) [![Build status](https://img.shields.io/azure-devops/build/yoshuawuyts/rustasync/2/master.svg?style=flat-square)](https://dev.azure.com/yoshuawuyts/rustasync/_build?definitionId=2)
* [[ **⭐ 439 | 👁️ 13 | 🔀 29** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) — A coroutine I/O library with a working-stealing scheduler [![build badge](https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master)](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 125 | 👁️ 8 | 🔀 8** ] dpc/mioco](https://github.com/dpc/mioco) — Scalable, coroutine-based, asynchronous IO handling library [![build badge](https://api.travis-ci.org/dpc/mioco.svg?branch=master" alt="Travis CI Build Status)](https://travis-ci.org/dpc/mioco)
* [[ **⭐ 68 | 👁️ 5 | 🔀 0** ] TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) — Monad/MonadIO, Handler, Coroutine/doNotation, Functional Programming features for Rust [![build badge](https://api.travis-ci.org/TeaEntityLab/fpRust.svg?branch=master" alt="Travis CI Build Status)](https://travis-ci.org/TeaEntityLab/fpRust)

### Audio and Music

[[audio](https://crates.io/keywords/audio)]

  * [[ **⭐ 1027 | 👁️ 31 | 🔀 171** ] RustAudio/cpal](https://github.com/RustAudio/cpal) - Low-level cross-platform audio I/O library in pure Rust. [![Actions Status](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [[ **⭐ 663 | 👁️ 19 | 🔀 112** ] RustAudio/rodio](https://github.com/RustAudio/rodio) — A Rust audio playback library [![Build Status](https://api.travis-ci.org/RustAudio/rodio.svg?branch=master)](https://travis-ci.org/RustAudio/rodio)
* [[ **⭐ 410 | 👁️ 15 | 🔀 13** ] ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) — A Rust music theory library [![Build Status](https://api.travis-ci.com/ozankasikci/rust-music-theory.svg?branch=master)](https://travis-ci.org/ozankasikci/rust-music-theory)
  * [[ **⭐ 275 | 👁️ 16 | 🔀 82** ] RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) — [PortAudio](http://www.portaudio.com/) bindings [![build badge](https://api.travis-ci.org/RustAudio/rust-portaudio.svg?branch=master)](https://travis-ci.org/RustAudio/rust-portaudio)
* [[ **⭐ 78 | 👁️ 3 | 🔀 21** ] jpernst/alto](https://github.com/jpernst/alto) — OpenAL 1.1 bindings [![build badge](https://api.travis-ci.org/jpernst/alto.svg?branch=master)](https://travis-ci.org/jpernst/alto)
* [[ **⭐ 73 | 👁️ 3 | 🔀 9** ] jhasse/ears](https://github.com/jhasse/ears) — A simple library to play Sounds and Musics, on top of OpenAL and libsndfile [![build badge](https://api.travis-ci.org/jhasse/ears.svg?branch=master)](https://travis-ci.org/jhasse/ears)
* [[ **⭐ 61 | 👁️ 3 | 🔀 16** ] musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) — [PortMidi](http://portmedia.sourceforge.net/portmidi/) bindings [![build badge](https://api.travis-ci.org/musitdev/portmidi-rs.svg?branch=master)](https://travis-ci.org/musitdev/portmidi-rs)
* [[ **⭐ 45 | 👁️ 3 | 🔀 14** ] GuillaumeGomez/rust-fmod](https://github.com/GuillaumeGomez/rust-fmod) — [FMOD](https://www.fmod.com) bindings [![Build Status](https://api.travis-ci.org/GuillaumeGomez/rust-fmod.svg?branch=master)](https://travis-ci.org/GuillaumeGomez/rust-fmod)
* [[ **⭐ 21 | 👁️ 2 | 🔀 3** ] MoAlyousef/soloud-rs](https://github.com/MoAlyousef/soloud-rs) — Rust bindings for the [soloud audio engine library](https://sol.gfxile.net/soloud/) [![Build](https://github.com/MoAlyousef/soloud-rs/workflows/Build/badge.svg?branch=master)](https://github.com/MoAlyousef/soloud-rs/actions)
* [hound](https://crates.io/crates/hound) — A WAV encoding and decoding library [![build badge](https://api.travis-ci.org/ruuda/hound.svg?branch=master)](https://travis-ci.org/ruuda/hound)
* [RustAudio](https://github.com/RustAudio)

### Authentication

* [[ **⭐ 691 | 👁️ 16 | 🔀 133** ] Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) — [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) lib in rust  [![Build Status](https://api.travis-ci.org/Keats/jsonwebtoken.svg?branch=master)](https://travis-ci.org/Keats/jsonwebtoken)
* [[ **⭐ 328 | 👁️ 12 | 🔀 74** ] oauth2](https://github.com/ramosbugs/oauth2-rs) — Extensible, strongly-typed Rust OAuth2 client library [![Build Status](https://api.travis-ci.org/ramosbugs/oauth2-rs.svg?branch=main)](https://travis-ci.org/ramosbugs/oauth2-rs)
* [[ **⭐ 289 | 👁️ 13 | 🔀 37** ] oxide-auth](https://github.com/HeroicKatora/oxide-auth) — A OAuth2 server library, for use in combination with actix or other frontends, featuring a set of configurable and pluggable backends [![Build Status](https://api.cirrus-ci.com/github/HeroicKatora/oxide-auth.svg?branch=master)](https://cirrus-ci.com/github/HeroicKatora/oxide-auth)
* [[ **⭐ 122 | 👁️ 10 | 🔀 57** ] yup-oauth2](https://github.com/dermesser/yup-oauth2) — An oauth2 client implementation providing the Device, Installed and Service Account flows [![Build Status](https://api.travis-ci.org/dermesser/yup-oauth2.svg?branch=master)](https://travis-ci.org/dermesser/yup-oauth2)
* [[ **⭐ 60 | 👁️ 6 | 🔀 2** ] sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) — Async library to manage and orchestrate JWT workflow  [![Build Status](https://api.travis-ci.org/sgrust01/jwtvault.svg?branch=master)](https://travis-ci.org/sgrust01/jwtvault)

### Automotive

* [[ **⭐ 31 | 👁️ 8 | 🔀 21** ] mbr/socketcan](https://github.com/mbr/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] — Linux SocketCAN library [![build badge](https://api.travis-ci.org/mbr/socketcan-rs.svg?branch=master)](https://travis-ci.org/mbr/socketcan-rs)
* [[ **⭐ 16 | 👁️ 6 | 🔀 5** ] oefd/tokio-socketcan](https://github.com/oefd/tokio-socketcan) [[tokio-socketcan]](https://crates.io/crates/tokio-socketcan)] — Linux SocketCAN support for tokio based on the socketcan crate
* [[ **⭐ 15 | 👁️ 3 | 🔀 6** ] marcelbuesing/can-dbc](https://github.com/marcelbuesing/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] — A parser for the DBC format [![build badge](https://api.travis-ci.org/marcelbuesing/can-dbc.svg?branch=dev)](https://travis-ci.org/marcelbuesing/can-dbc)
* [[ **⭐ 11 | 👁️ 4 | 🔀 1** ] JulianSchmid/dlt_parse](https://github.com/JulianSchmid/dlt-parse-rs) — Rust DLT (Diagnostic Log and Trace) packet parser [![build badge](https://api.travis-ci.org/JulianSchmid/dlt-parse-rs.svg?branch=master)](https://travis-ci.org/JulianSchmid/dlt-parse-rs)
* [[ **⭐ 7 | 👁️ 3 | 🔀 1** ] JulianSchmid/someip_parse](https://github.com/JulianSchmid/someip-parse-rs) [[someip_parse](https://crates.io/crates/someip_parse)] — A library for parsing the SOME/IP network protocol (without payload interpretation) [![build badge](https://api.travis-ci.org/JulianSchmid/someip-parse-rs.svg?branch=master)](https://travis-ci.org/JulianSchmid/someip-parse-rs)
* [[ **⭐ 6 | 👁️ 8 | 🔀 1** ] Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] — LIN bus driver traits and protocol implementation [![build badge](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)
* [[ **⭐ 4 | 👁️ 2 | 🔀 0** ] LibreTuner/tuneutils](https://github.com/LibreTuner/tuneutils) [[tuneutils](https://crates.io/crates/tuneutils)] — Utilities for interfacing with, diagnosing, and tuning car
* [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] — Linux SocketCAN BCM support for tokio [![build badge](https://api.travis-ci.org/marcelbuesing/tokio-socketcan-bcm.svg?branch=master)](https://travis-ci.org/marcelbuesing/tokio-socketcan-bcm)
* [canparse](https://crates.io/crates/canparse) — A CAN signal and definition parser [![build badge](https://api.travis-ci.org/jmagnuson/canparse.svg?branch=master)](https://travis-ci.org/jmagnuson/canparse)
* [j2534](https://crates.io/crates/j2534) — J2534 PassThru bindings

### Bioinformatics

* [Rust-Bio](https://github.com/rust-bio) — bioinformatics libraries in Rust.

### Caching

* [[ **⭐ 543 | 👁️ 8 | 🔀 37** ] jaemk/cached](https://github.com/jaemk/cached) — Simple function caching/memoization
* [[ **⭐ 61 | 👁️ 5 | 🔀 20** ] aisk/rust-memcache](https://github.com/aisk/rust-memcache) — Memcached client library [![build badge](https://api.travis-ci.org/aisk/rust-memcache.svg?branch=master)](https://travis-ci.org/aisk/rust-memcache)
* [[ **⭐ 22 | 👁️ 2 | 🔀 5** ] jaysonsantos/bmemcached-rs](https://github.com/jaysonsantos/bmemcached-rs) — Memcached library written in pure rust [![build badge](https://api.travis-ci.org/jaysonsantos/bmemcached-rs.svg?branch=master)](https://travis-ci.org/jaysonsantos/bmemcached-rs)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - Shared Compilation Cache, great for Rust compilation [![build badge](https://api.travis-ci.org/mozilla/sccache.svg?branch=master)](https://travis-ci.org/mozilla/sccache)

### Concurrency

* [[ **⭐ 4958 | 👁️ 86 | 🔀 277** ] Rayon](https://github.com/rayon-rs/rayon) – A data parallelism library for Rust [![build badge](https://api.travis-ci.org/rayon-rs/rayon.svg?branch=master)](https://travis-ci.org/rayon-rs/rayon)
* [[ **⭐ 3555 | 👁️ 73 | 🔀 255** ] crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) – Support for parallelism and low-level concurrency in Rust [![build badge](https://api.travis-ci.org/crossbeam-rs/crossbeam.svg?branch=master)](https://travis-ci.org/crossbeam-rs/crossbeam)
* [[ **⭐ 439 | 👁️ 13 | 🔀 29** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) – Coroutine I/O for Rust [![build badge](https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master)](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 368 | 👁️ 26 | 🔀 34** ] rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) – Coroutine Library in Rust [![build badge](https://api.travis-ci.org/rustcc/coroutine-rs.svg?branch=master)](https://travis-ci.org/rustcc/coroutine-rs)
* [[ **⭐ 76 | 👁️ 2 | 🔀 5** ] orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] — Library to abstract from `Rc`/`Arc` pointer types. [![build badge](https://api.travis-ci.org/orium/archery.svg?branch=master)](https://travis-ci.org/orium/archery)
* [[ **⭐ 25 | 👁️ 9 | 🔀 2** ] pop-os/bus-writer](https://github.com/pop-os/bus-writer) — Generic single-reader, multi-writer
* [[ **⭐ 7 | 👁️ 0 | 🔀 0** ] aymanmadkour/glock](https://github.com/aymanmadkour/glock) – Granular locking crate for Rust. [![build badge](https://api.travis-ci.org/aymanmadkour/glock.svg?branch=master)](https://travis-ci.org/aymanmadkour/glock)

### Cloud

* AWS [[aws](https://crates.io/keywords/aws)]
  * [[ **⭐ 2274 | 👁️ 44 | 🔀 365** ] rusoto/rusoto](https://github.com/rusoto/rusoto) — [![build badge](https://api.travis-ci.org/rusoto/rusoto.svg?branch=master)](https://travis-ci.org/rusoto/rusoto)

### Command-line

* Argument parsing
  * [[ **⭐ 5700 | 👁️ 61 | 🔀 542** ] clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] — A simple to use, full featured command-line argument parser [![build badge](https://api.travis-ci.org/clap-rs/clap.svg?branch=master)](https://travis-ci.org/clap-rs/clap)
  * [[ **⭐ 1966 | 👁️ 18 | 🔀 107** ] TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] — parse command line argument by defining a struct [![build badge](https://api.travis-ci.org/TeXitoi/structopt.svg?branch=master)](https://travis-ci.org/TeXitoi/structopt)
  * [[ **⭐ 724 | 👁️ 19 | 🔀 83** ] docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] — A Rust implementation of [DocOpt](http://docopt.org) [![build badge](https://api.travis-ci.org/docopt/docopt.rs.svg?branch=master)](https://travis-ci.org/docopt/docopt.rs)
  * [[ **⭐ 482 | 👁️ 12 | 🔀 29** ] killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] — quickly build cool CLI apps in Rust [![build badge](https://api.travis-ci.org/killercup/quicli.svg?branch=master)](https://travis-ci.org/killercup/quicli)
  * [[ **⭐ 132 | 👁️ 4 | 🔀 6** ] ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] — A minimal CLI framework written in Rust [![Build status](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [[ **⭐ 7 | 👁️ 1 | 🔀 0** ] z5labs/pflag](https://github.com/z5labs/pflag) [[pflag](https://crates.io/crates/pflag)] — A port of @spf13's amazing POSIX compliant arg parsing library in Go. [![Build Status](https://github.com/z5labs/pflag/workflows/Rust/badge.svg?branch=master)](https://github.com/z5labs/pflag/actions)
* Data visualization
  * [[ **⭐ 159 | 👁️ 3 | 🔀 2** ] nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] — Beautiful dynamic tables for your cli tools. [![Build status](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [[ **⭐ 30 | 👁️ 3 | 🔀 1** ] reugn/rspark](https://github.com/reugn/rspark) [[rspark](https://crates.io/crates/rspark)] — ▁▂▆▇▁▄█▁ Sparklines for Rust apps [![build badge](https://api.travis-ci.org/reugn/rspark.svg?branch=master)](https://travis-ci.org/reugn/rspark)
* Human-centered design
  * [[ **⭐ 774 | 👁️ 11 | 🔀 34** ] rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] — panic messages for humans [![build badge](https://api.travis-ci.org/rust-cli/human-panic.svg?branch=master)](https://travis-ci.org/rust-cli/human-panic)
* Line editor
  * [[ **⭐ 722 | 👁️ 7 | 🔀 98** ] kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] — readline implementation in Rust [![build badge](https://api.travis-ci.org/kkawakam/rustyline.svg?branch=master)](https://travis-ci.org/kkawakam/rustyline)
  * [[ **⭐ 152 | 👁️ 5 | 🔀 13** ] murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] — Configurable, extensible, interactive line reader [![build badge](https://api.travis-ci.org/murarth/linefeed.svg?branch=master)](https://travis-ci.org/murarth/linefeed)
  * [[ **⭐ 66 | 👁️ 4 | 🔀 22** ] MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] — A library offering readline-like functionality [![build badge](https://api.travis-ci.org/MovingtoMars/liner.svg?branch=master)](https://travis-ci.org/MovingtoMars/liner)
  * [[ **⭐ 26 | 👁️ 2 | 🔀 5** ] srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] — pure-Rust command line editing library
* Pipeline
  * [[ **⭐ 404 | 👁️ 5 | 🔀 17** ] oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] — A builder for subprocess pipelines and IO redirection [![build badge](https://api.travis-ci.org/oconnor663/duct.rs.svg?branch=master)](https://travis-ci.org/oconnor663/duct.rs)
  * [[ **⭐ 273 | 👁️ 5 | 🔀 26** ] hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] — facilities for interaction with external pipelines [![build badge](https://api.travis-ci.org/hniksic/rust-subprocess.svg?branch=master)](https://travis-ci.org/hniksic/rust-subprocess)
  * [[ **⭐ 111 | 👁️ 6 | 🔀 25** ] philippkeller/rexpect](https://github.com/philippkeller/rexpect) [[rexpect](https://crates.io/crates/rexpect)] — automate interactive applications such as ssh, ftp, passwd, etc [![build badge](https://api.travis-ci.org/philippkeller/rexpect.svg?branch=master)](https://travis-ci.org/philippkeller/rexpect)
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] — pipe your output through an external pager
* Progress
  * [[ **⭐ 1839 | 👁️ 12 | 🔀 110** ] mitsuhiko/indicatif](https://github.com/mitsuhiko/indicatif) [[indicatif](https://crates.io/crates/indicatif)] — indicate progress to users
  * [[ **⭐ 403 | 👁️ 11 | 🔀 41** ] a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] — console progress bar for Rust
  * [[ **⭐ 310 | 👁️ 2 | 🔀 6** ] FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] — 60+ elegant terminal spinners
* Prompt
  * [[ **⭐ 36 | 👁️ 6 | 🔀 1** ] hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)]  — build an interactive command prompt [![build badge](https://api.travis-ci.org/hashmismatch/terminal_cli.rs.svg?branch=master)](https://travis-ci.org/hashmismatch/terminal_cli.rs)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)]  — A minimal, blazing fast, and extremely customizable prompt for any shell [![Build status](https://github.com/starship/starship/workflows/Main%20workflow/badge.svg?branch=master)](https://github.com/starship/starship/actions)
* Style
  * [[ **⭐ 729 | 👁️ 9 | 🔀 41** ] mackwic/colored](https://github.com/mackwic/colored) [[colored](https://crates.io/crates/colored)] — Coloring terminal so simple, you already know how to do it!
  * [[ **⭐ 328 | 👁️ 8 | 🔀 39** ] ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] — control colours and formatting on ANSI terminals [![build badge](https://api.travis-ci.org/ogham/rust-ansi-term.svg?branch=master)](https://travis-ci.org/ogham/rust-ansi-term)
  * [[ **⭐ 88 | 👁️ 4 | 🔀 3** ] SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] — A dead simple ANSI terminal color painting library
  * [[ **⭐ 67 | 👁️ 2 | 🔀 3** ] LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] — cross-platform styled terminal output [![build badge](https://api.travis-ci.org/LukasKalbertodt/term-painter.svg?branch=master)](https://travis-ci.org/LukasKalbertodt/term-painter)
  * [[ **⭐ 17 | 👁️ 1 | 🔀 0** ] vitiral/termstyle](https://github.com/vitiral/termstyle) [[termstyle](https://docs.rs/termstyle/0.1.2/termstyle/)] — build (and test) formatted and styled command line applications
* TUI
  * [[ **⭐ 4747 | 👁️ 56 | 🔀 235** ] fdehau/tui-rs](https://github.com/fdehau/tui-rs) [[tui](https://crates.io/crates/tui)] — A TUI library inspired by [blessed-contrib](https://github.com/yaronn/blessed-contrib) and [termui](https://github.com/gizak/termui) [![build badge](https://api.travis-ci.org/fdehau/tui-rs.svg?branch=master)](https://travis-ci.org/fdehau/tui-rs)
  * [[ **⭐ 2176 | 👁️ 39 | 🔀 151** ] gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] — build rich TUI applications [![build badge](https://api.travis-ci.org/gyscos/Cursive.svg?branch=master)](https://travis-ci.org/gyscos/Cursive)
  * [[ **⭐ 1498 | 👁️ 21 | 🔀 103** ] redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] — bindless library for controlling terminals/TTY [![build badge](https://api.travis-ci.org/redox-os/termion.svg?branch=master)](https://travis-ci.org/redox-os/termion)
  * [[ **⭐ 1044 | 👁️ 15 | 🔀 114** ] TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] — crossplatform terminal library
  * [[ **⭐ 49 | 👁️ 5 | 🔀 8** ] ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] — Rust library for putting things in a grid [![build badge](https://api.travis-ci.org/ogham/rust-term-grid.svg?branch=master)](https://travis-ci.org/ogham/rust-term-grid)
  * BearLibTerminal
    * [[ **⭐ 26 | 👁️ 2 | 🔀 8** ] cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] — [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal) bindings [![build badge](https://api.travis-ci.org/nabijaczleweli/BearLibTerminal.rs.svg?branch=master)](https://travis-ci.org/nabijaczleweli/BearLibTerminal.rs)
  * ncurses
    * [[ **⭐ 534 | 👁️ 13 | 🔀 92** ] jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] — [ncurses](https://www.gnu.org/software/ncurses/) bindings [![build badge](https://api.travis-ci.org/jeaye/ncurses-rs.svg?branch=master)](https://travis-ci.org/jeaye/ncurses-rs)
    * [[ **⭐ 289 | 👁️ 16 | 🔀 26** ] ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] — curses library, supports linux and windows [![build badge](https://api.travis-ci.org/ihalila/pancurses.svg?branch=master)](https://travis-ci.org/ihalila/pancurses)
  * Termbox
    * [[ **⭐ 432 | 👁️ 21 | 🔀 51** ] gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] — bindings to [Termbox](https://github.com/nsf/termbox) [![build badge](https://api.travis-ci.org/gchp/rustbox.svg?branch=master)](https://travis-ci.org/gchp/rustbox)
  * [[ **⭐ 77 | 👁️ 4 | 🔀 1** ] ivanceras/titik](https://github.com/ivanceras/titik) - a crossplatform TUI widget library with the goal of providing interactive widgets [![Build Status](https://api.travis-ci.com/ivanceras/titik.svg?branch=master)](https://travis-ci.com/github/ivanceras/titik)

### Compression

  * [[ **⭐ 506 | 👁️ 26 | 🔀 54** ] dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) — Brotli decompressor in Rust that optionally avoids the stdlib
  * [[ **⭐ 59 | 👁️ 5 | 🔀 14** ] ende76/brotli-rs](https://github.com/ende76/brotli-rs) — implementation of Brotli compression
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
* bzip2
  * [[ **⭐ 53 | 👁️ 3 | 🔀 30** ] alexcrichton/bzip2-rs](https://github.com/alexcrichton/bzip2-rs) — [libbz2](https://www.sourceware.org/bzip2/) bindings [![build badge](https://api.travis-ci.com/alexcrichton/bzip2-rs.svg?branch=master)](https://travis-ci.org/alexcrichton/bzip2-rs)
* Columnar compression
  * [[ **⭐ 25 | 👁️ 2 | 🔀 2** ] velvia/compressed-vec](https://github.com/velvia/compressed-vec) - SIMD Floating point and integer compressed vector library  [![CircleCI](https://circleci.com/gh/velvia/compressed-vec.svg?style=shield)](https://app.circleci.com/pipelines/github/velvia/compressed-vec)
* gzip
  * [[ **⭐ 69 | 👁️ 8 | 🔀 7** ] carols10cents/zopfli](https://github.com/carols10cents/zopfli) — implementation of the [Zopfli](https://github.com/google/zopfli) compression algorithm for higher quality deflate or zlib compression
* miniz
  * [[ **⭐ 393 | 👁️ 6 | 🔀 94** ] rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) — [miniz](https://code.google.com/archive/p/miniz) bindings [![build badge](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* snappy
  * [[ **⭐ 13 | 👁️ 2 | 🔀 3** ] JeffBelgum/rust-snappy](https://github.com/JeffBelgum/rust-snappy) — [snappy](https://github.com/google/snappy) bindings [![build badge](https://api.travis-ci.org/JeffBelgum/rust-snappy.svg?branch=master)](https://travis-ci.org/JeffBelgum/rust-snappy)
* tar
  * [[ **⭐ 307 | 👁️ 6 | 🔀 103** ] alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) — tar archive reading/writing in Rust [![build badge](https://api.travis-ci.com/alexcrichton/tar-rs.svg?branch=master)](https://travis-ci.org/alexcrichton/tar-rs)
* zip
  * [[ **⭐ 309 | 👁️ 10 | 🔀 119** ] zip-rs/zip](https://github.com/zip-rs/zip) — read and write ZIP archives [![Build Status](https://api.travis-ci.org/mvdnes/zip-rs.svg?branch=master)](https://travis-ci.org/mvdnes/zip-rs)

### Computation

* [[ **⭐ 2059 | 👁️ 59 | 🔀 257** ] dimforge/nalgebra](https://github.com/dimforge/nalgebra) — low-dimensional linear algebra library [![build badge](https://api.travis-ci.org/dimforge/nalgebra.svg?branch=dev)](https://travis-ci.org/dimforge/nalgebra)
* [[ **⭐ 236 | 👁️ 13 | 🔀 27** ] argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] — A pure Rust optimization library [![build badge](https://api.travis-ci.org/argmin-rs/argmin.svg?branch=master)](https://travis-ci.org/argmin-rs/argmin)
  * [[ **⭐ 75 | 👁️ 6 | 🔀 16** ] mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) — BLAS bindings
  * [[ **⭐ 55 | 👁️ 7 | 🔀 12** ] stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) — LAPACK bindings [![build badge](https://api.travis-ci.org/blas-lapack-rs/lapack.svg?branch=master)](https://travis-ci.org/blas-lapack-rs/lapack)
  * [[ **⭐ 44 | 👁️ 7 | 🔀 10** ] stainless-steel/blas](https://github.com/blas-lapack-rs/blas) — BLAS bindings [![build badge](https://api.travis-ci.org/blas-lapack-rs/blas.svg?branch=master)](https://travis-ci.org/blas-lapack-rs/blas)
  * [[ **⭐ 34 | 👁️ 7 | 🔀 26** ] fizyk20/rust-gmp](https://github.com/fizyk20/rust-gmp) — libgmp bindings [![build badge](https://api.travis-ci.org/fizyk20/rust-gmp.svg?branch=master)](https://travis-ci.org/fizyk20/rust-gmp)
  * [[ **⭐ 9 | 👁️ 4 | 🔀 5** ] noshu/lbfgsb-sys](https://github.com/noshu/lbfgsb-sys) — Rust binding of fortran L-BFGS-B subroutine
  * [[ **⭐ 2 | 👁️ 3 | 🔀 1** ] noshu/cg-sys](https://github.com/noshu/cg-sys) — Rust binding of fortran CG+ subroutine
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
* [Conjugate Gradient](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* [GMP](https://gmplib.org/)
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez) — GSL bindings [![build badge](https://api.travis-ci.org/GuillaumeGomez/rust-GSL.svg?branch=master)](https://travis-ci.org/GuillaumeGomez/rust-GSL)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
* [L-BFGS-B](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* Parallel
  * [[ **⭐ 528 | 👁️ 18 | 🔀 39** ] arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) — [Arrayfire](https://github.com/arrayfire) bindings
  * [[ **⭐ 448 | 👁️ 24 | 🔀 31** ] autumnai/collenchyma](https://github.com/autumnai/collenchyma) — An extensible, pluggable, backend-agnostic framework for parallel, high-performance computations on CUDA, OpenCL and common host CPU. [![build badge](https://api.travis-ci.org/autumnai/collenchyma.svg?branch=master)](https://travis-ci.org/autumnai/collenchyma)
  * [[ **⭐ 167 | 👁️ 11 | 🔀 37** ] luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) — [OpenCL](https://www.khronos.org/opencl/) bindings
* Scirust
  * [[ **⭐ 220 | 👁️ 17 | 🔀 23** ] indigits/scirust](https://github.com/indigits/scirust) — scientific computing library in Rust [![Build Status](https://api.travis-ci.org/indigits/scirust.svg?branch=master)](https://travis-ci.org/indigits/scirust)
* Statrs
  * [[ **⭐ 239 | 👁️ 12 | 🔀 34** ] boxtown/statrs](https://github.com/boxtown/statrs) — Robust statistical computation library in Rust [![Build Status](https://api.travis-ci.org/boxtown/statrs.svg?branch=master)](https://travis-ci.org/boxtown/statrs)
* Rustimization [[rustimization](https://crates.io/crates/rustimization)]
* [[ **⭐ 1361 | 👁️ 39 | 🔀 45** ] calebwin/emu](https://github.com/calebwin/emu) — A language for GPGPU numerical computing from a Rust macro
  * [[ **⭐ 43 | 👁️ 3 | 🔀 8** ] noshu/rustimization](https://github.com/noshu/rustimization) — A rust optimization library which includes L-BFGS-B and Conjugate Gradient algorithm

### Configuration

* [[ **⭐ 935 | 👁️ 15 | 🔀 117** ] mehcode/config-rs](https://github.com/mehcode/config-rs) [[config](https://crates.io/crates/config)] — Layered configuration system for Rust applications (with strong support for 12-factor applications). [![build badge](https://api.travis-ci.org/mehcode/config-rs.svg?branch=master)](https://travis-ci.org/mehcode/config-rs)
* [[ **⭐ 35 | 👁️ 2 | 🔀 9** ] Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] — library for processing application configuration easily
* [[ **⭐ 17 | 👁️ 2 | 🔀 1** ] theimpossibleastronaut/configster](https://github.com/theimpossibleastronaut/configster) [[configster](https://crates.io/crates/configster)] — Rust library for parsing configuration files [![build badge](https://api.travis-ci.com/theimpossibleastronaut/configster.svg?branch=trunk)](https://travis-ci.com/theimpossibleastronaut/configster)
* [[ **⭐ 7 | 👁️ 1 | 🔀 0** ] FlashSystems/justconfig](https://github.com/FlashSystems/just-config) - Easily extendable, layered configuration library that introduces no additional dependencies into your project.
* [[ **⭐ 7 | 👁️ 1 | 🔀 0** ] andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] — [libUCL](https://github.com/vstakhov/libucl) based feature-rich configuration library. [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [ANtlord/yasec](https://github.com/ANtlord/yasec/) [[Yasec](https://crates.io/crates/yasec)] - full featured boilerplace-free configuration from environment variables. [![build badge](https://api.travis-ci.org/ANtlord/yasec.svg?branch=master)](https://travis-ci.org/ANtlord/yasec)

### Cryptography

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [[ **⭐ 2507 | 👁️ 64 | 🔀 248** ] ctz/rustls](https://github.com/ctz/rustls) — A Rust implementation of TLS
* [[ **⭐ 2188 | 👁️ 37 | 🔀 375** ] briansmith/ring](https://github.com/briansmith/ring) — Safe, fast, small crypto using Rust and BoringSSL's cryptography primitives. [![build badge](https://api.travis-ci.org/briansmith/ring.svg?branch=master)](https://travis-ci.org/briansmith/ring)
* [[ **⭐ 1241 | 👁️ 42 | 🔀 104** ] cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] — a high-level cryptographic library for solving typical data security tasks, best fit for multi-platform apps. [![build badge](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [[ **⭐ 1041 | 👁️ 64 | 🔀 227** ] exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] — extensible framework for blockchain projects [![build badge](https://api.travis-ci.com/exonum/exonum.svg?branch=master)](https://travis-ci.org/exonum/exonum)
* [[ **⭐ 1033 | 👁️ 31 | 🔀 242** ] DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) — cryptographic algorithms in Rust [![build badge](https://api.travis-ci.org/DaGenix/rust-crypto.svg?branch=master)](https://travis-ci.org/DaGenix/rust-crypto)
* [[ **⭐ 753 | 👁️ 17 | 🔀 480** ] sfackler/rust-openssl](https://github.com/sfackler/rust-openssl) — [OpenSSL](https://www.openssl.org/) bindings [![build badge](https://api.travis-ci.org/sfackler/rust-openssl.svg?branch=master)](https://travis-ci.org/sfackler/rust-openssl)
* [[ **⭐ 666 | 👁️ 14 | 🔀 97** ] RustCrypto/hashes](https://github.com/RustCrypto/hashes) — Collection of cryptographic hash functions written in pure Rust [![build badge](https://api.travis-ci.org/RustCrypto/hashes.svg?branch=master)](https://travis-ci.org/RustCrypto/hashes)
* [[ **⭐ 602 | 👁️ 21 | 🔀 139** ] sodiumoxide/sodiumoxide](https://github.com/sodiumoxide/sodiumoxide) — [libsodium](https://github.com/jedisct1/libsodium) bindings [![build badge](https://api.travis-ci.org/sodiumoxide/sodiumoxide.svg?branch=master)](https://travis-ci.org/sodiumoxide/sodiumoxide)
* [[ **⭐ 480 | 👁️ 34 | 🔀 122** ] dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) — Pure Rust implementation of Curve25519 operations
* [[ **⭐ 383 | 👁️ 22 | 🔀 123** ] dalek-cryptography/ed25519-dalek](https://github.com/dalek-cryptography/ed25519-dalek) — Pure Rust implementation of Ed25519 digital signatures
* [[ **⭐ 312 | 👁️ 22 | 🔀 104** ] briansmith/webpki](https://github.com/briansmith/webpki) — Web PKI TLS X.509 certificate validation in Rust. [![build badge](https://api.travis-ci.org/briansmith/webpki.svg?branch=master)](https://travis-ci.org/briansmith/webpki)
* [[ **⭐ 271 | 👁️ 10 | 🔀 109** ] sfackler/rust-native-tls](https://github.com/sfackler/rust-native-tls) — Bindings for native TLS libraries
* [[ **⭐ 238 | 👁️ 11 | 🔀 15** ] brycx/orion](https://github.com/brycx/orion) — This library aims to provide easy and usable crypto. 'Usable' meaning exposing high-level API's that are easy to use and hard to misuse. [![build badge](https://api.travis-ci.org/brycx/orion.svg?branch=master)](https://travis-ci.org/brycx/orion)
* [[ **⭐ 181 | 👁️ 12 | 🔀 52** ] dalek-cryptography/x25519-dalek](https://github.com/dalek-cryptography/x25519-dalek) — Pure Rust implementation of X25519 key exchange
* [[ **⭐ 134 | 👁️ 8 | 🔀 31** ] debris/tiny-keccak](https://github.com/debris/tiny-keccak) — Pure Rust implementation of the Keccak family (SHA3)
* [[ **⭐ 132 | 👁️ 8 | 🔀 17** ] libOctavo/octavo](https://github.com/libOctavo/octavo) — Modular hash and crypto library in Rust [![build badge](https://api.travis-ci.org/libOctavo/octavo.svg?branch=master)](https://travis-ci.org/libOctavo/octavo)
* [[ **⭐ 120 | 👁️ 13 | 🔀 8** ] klutzy/suruga](https://github.com/klutzy/suruga) — A Rust implementation of [TLS 1.2](https://tools.ietf.org/html/rfc5246)
* [[ **⭐ 107 | 👁️ 3 | 🔀 13** ] conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] — Simple password manager to use in your terminal
* [[ **⭐ 104 | 👁️ 6 | 🔀 44** ] kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) — Bindings for Security Framework (OSX native)
* [[ **⭐ 52 | 👁️ 7 | 🔀 11** ] novifinancial/opaque-ke](https://github.com/novifinancial/opaque-ke) — Pure Rust implementation of the recent [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/) password-authenticated key exchange. [![build badge](https://github.com/novifinancial/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/novifinancial/opaque-ke)
* [[ **⭐ 43 | 👁️ 3 | 🔀 3** ] racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) — A Rust port of the password primitives used in the Django Project. It doesn't require Django, only hashes and validates passwords according to its style. [![build badge](https://api.travis-ci.org/Racum/rust-djangohashers.svg?branch=master)](https://travis-ci.org/Racum/rust-djangohashers)
* [[ **⭐ 35 | 👁️ 11 | 🔀 7** ] Fraunhofer-AISEC/rabe](https://github.com/Fraunhofer-AISEC/rabe) — Library providing several Attribute-Based Encryption (ABE) schemes
* [[ **⭐ 32 | 👁️ 4 | 🔀 9** ] rustindia/mpw-rs](https://github.com/rustindia/mpw-rs) — Pure Rust implementation of the Master Password password manager [![build badge](https://api.travis-ci.org/rustindia/mpw-rs.svg?branch=master)](https://travis-ci.org/rustindia/mpw-rs)
* [[ **⭐ 30 | 👁️ 2 | 🔀 3** ] doublify/libblockchain](https://github.com/doublify/libblockchain) — A Blockchain implementation [![build badge](https://api.travis-ci.org/doublify/libblockchain.svg?branch=master)](https://travis-ci.org/doublify/libblockchain)
* [[ **⭐ 24 | 👁️ 3 | 🔀 29** ] steffengy/schannel-rs](https://github.com/steffengy/schannel-rs) — Bindings for Schannel (Windows native TLS)
* [[ **⭐ 13 | 👁️ 3 | 🔀 2** ] zebradil/rustotpony](https://github.com/zebradil/rustotpony) — CLI manager of one-time password generators aka Google Authenticator (TOTP)
* [[ **⭐ 9 | 👁️ 2 | 🔀 0** ] defund/pw](https://github.com/defund/pw) — CLI password manager with no frills
* [[ **⭐ 5 | 👁️ 0 | 🔀 0** ] RNCryptor/rncryptor-rs](https://github.com/RNCryptor/rncryptor-rs) — Pure Rust implementation of the RNCryptor AES file format

### Database

[[database](https://crates.io/keywords/database)]

* [[ **⭐ 857 | 👁️ 19 | 🔀 53** ] sfackler/r2d2](https://github.com/sfackler/r2d2) — generic connection pool [![build badge](https://api.travis-ci.org/sfackler/r2d2.svg?branch=master)](https://travis-ci.org/sfackler/r2d2)

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

    * [[ **⭐ 315 | 👁️ 17 | 🔀 57** ] AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] — native client written in Rust [![build badge](https://api.travis-ci.org/AlexPikalov/cdrs.svg?branch=master)](https://travis-ci.org/AlexPikalov/cdrs)
    * [[ **⭐ 52 | 👁️ 7 | 🔀 28** ] Metaswitch/cassandra-rs](https://github.com/Metaswitch/cassandra-rs) —  bindings to the DataStax C/C++ client [![build badge](https://api.travis-ci.org/Metaswitch/cassandra-rs.svg?branch=master)](https://travis-ci.org/Metaswitch/cassandra-rs)
     * [[ **⭐ 35 | 👁️ 9 | 🔀 7** ] Rincon](https://github.com/innoave/rincon) — An ArangoDB (NoSQL and Graph store) driver for Rust
  * [ArangoDB](https://www.arangodb.com)
  * [Cassandra](https://cassandra.apache.org) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [[ **⭐ 39 | 👁️ 2 | 🔀 10** ] Sofa](https://github.com/66Origin/sofa) — an interface to CouchDB HTTP REST API for stable rust
    * [[ **⭐ 32 | 👁️ 3 | 🔀 5** ] chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] — A Rust client for the CouchDB REST API [![build badge](https://api.travis-ci.org/chill-rs/chill.svg?branch=master)](https://travis-ci.org/chill-rs/chill)
  * Crux [[crux](https://crates.io/keywords/crux)]
    * [[ **⭐ 144 | 👁️ 7 | 🔀 27** ] softprops/dynomite](https://github.com/softprops/dynomite) - A library for strongly-typed and convenient interaction with `rusoto_dynamodb` [![build badge](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
    * [[ **⭐ 20 | 👁️ 2 | 🔀 6** ] naomijub/transistor](https://github.com/naomijub/transistor) — A Crux Database Client. [![Build Status](https://api.travis-ci.org/naomijub/transistor.svg?branch=master)](https://travis-ci.org/naomijub/transistor)
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [[ **⭐ 248 | 👁️ 5 | 🔀 37** ] elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] — elastic is an efficient, modular API client for Elasticsearch written in Rust [![build badge](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
    * [[ **⭐ 213 | 👁️ 7 | 🔀 41** ] benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] — A Rust client for the [Elastic](https://www.elastic.co/) REST API [![build badge](https://api.travis-ci.org/benashford/rs-es.svg?branch=master)](https://travis-ci.org/benashford/rs-es)
  * etcd
    * [[ **⭐ 119 | 👁️ 5 | 🔀 26** ] jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] — A client library for CoreOS's etcd. [![build badge](https://api.travis-ci.org/jimmycuadra/rust-etcd.svg?branch=master)](https://travis-ci.org/jimmycuadra/rust-etcd)
    * [[ **⭐ 88 | 👁️ 3 | 🔀 24** ] luncj/etcd-rs](https://github.com/luncj/etcd-rs) — An asynchronous etcd client for rust [![build badge](https://api.travis-ci.org/luncj/etcd-rs.svg?branch=master)](https://travis-ci.org/luncj/etcd-rs)
  * ForestDB
    * [[ **⭐ 64 | 👁️ 3 | 🔀 29** ] driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) — Synchronization interface [![build badge](https://api.travis-ci.org/driftluo/InfluxDBClient-rs.svg?branch=master)](https://travis-ci.org/driftluo/InfluxDBClient-rs)
    * [[ **⭐ 9 | 👁️ 6 | 🔀 7** ] panoptix-za/influxdb-rs](https://github.com/panoptix-za/influxdb-rs) — asynchronous interface
    * [[ **⭐ 6 | 👁️ 1 | 🔀 1** ] vhbit/sherwood](https://github.com/vhbit/sherwood) — [ForestDB](https://github.com/couchbase/forestdb) bindings [![build badge](https://api.travis-ci.org/vhbit/sherwood.svg?branch=master)](https://travis-ci.org/vhbit/sherwood)
  * [InfluxDB](https://www.influxdata.com/)
  * LevelDB
    * [[ **⭐ 118 | 👁️ 9 | 🔀 34** ] skade/leveldb](https://github.com/skade/leveldb) — [LevelDB](https://github.com/google/leveldb) bindings [![build badge](https://api.travis-ci.org/skade/leveldb.svg?branch=master)](https://travis-ci.org/skade/leveldb)
  * LMDB [[lmdb](https://crates.io/keywords/lmdb)]
    * [[ **⭐ 92 | 👁️ 8 | 🔀 38** ] vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] — [LMDB](https://symas.com/lmdb/) bindings [![build badge](https://api.travis-ci.org/vhbit/lmdb-rs.svg?branch=master)](https://travis-ci.org/vhbit/lmdb-rs)
  * MHdb
    * [[ **⭐ 6 | 👁️ 1 | 🔀 0** ] MHmorgan/mhdb](https://github.com/MHmorgan/mhdb) [[mhdb](https://crates.io/crates/mhdb)] — Pure rust embeddable key-value store database. [![build badge](https://api.travis-ci.com/MHmorgan/mhdb.svg?branch=master)](https://travis-ci.com/github/MHmorgan/mhdb)
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [[ **⭐ 650 | 👁️ 38 | 🔀 72** ] mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] — [MongoDB](https://www.mongodb.com/) bindings
  * Neo4j [[cypher](https://crates.io/keywords/cypher), [neo4j](https://crates.io/keywords/neo4j)]
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [[ **⭐ 1893 | 👁️ 38 | 🔀 286** ] mitsuhiko/redis-rs](https://github.com/mitsuhiko/redis-rs) — [Redis](https://redis.io/) library in Rust [![build badge](https://api.travis-ci.org/mitsuhiko/redis-rs.svg?branch=master)](https://travis-ci.org/mitsuhiko/redis-rs)
    * [[ **⭐ 828 | 👁️ 26 | 🔀 364** ] rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) — RocksDB bindings [![build badge](https://api.travis-ci.org/rust-rocksdb/rust-rocksdb.svg?branch=master)](https://travis-ci.org/rust-rocksdb/rust-rocksdb)
    * [[ **⭐ 136 | 👁️ 9 | 🔀 30** ] bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] — A client library for Apache ZooKeeper. [![build badge](https://api.travis-ci.org/bonifaido/rust-zookeeper.svg?branch=master)](https://travis-ci.org/bonifaido/rust-zookeeper)
    * [[ **⭐ 82 | 👁️ 2 | 🔀 13** ] seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) — a lightweight and simple key-value store, heavily inspired by Python's PickleDB. [![build badge](https://api.travis-ci.org/seladb/pickledb-rs.svg?branch=master)](https://travis-ci.org/seladb/pickledb-rs)
    * [[ **⭐ 78 | 👁️ 6 | 🔀 13** ] zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) — UnQLite bindings [![build badge](https://api.travis-ci.org/zitsen/unqlite.rs.svg?branch=master)](https://travis-ci.org/zitsen/unqlite.rs)
  * [RocksDB](https://rocksdb.org/)
  * [UnQLite](https://unqlite.org/)
  * [ZooKeeper](https://zookeeper.apache.org/)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
* SQL [[sql](https://crates.io/keywords/sql)]
  * Generic
    * [[ **⭐ 3783 | 👁️ 67 | 🔀 350** ] launchbadge/sqlx](https://github.com/launchbadge/sqlx) - async PostgreSQL/MySQL/SQLite connection pool with strong typing support [![build badge](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
  * Microsoft SQL
    * [[ **⭐ 92 | 👁️ 8 | 🔀 55** ] prisma/tiberius](https://github.com/prisma/tiberius) — ![Build status](https://badge.buildkite.com/172053d935f64a275beca911ab20bad34e7597775ce024469d.svg)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [[ **⭐ 415 | 👁️ 7 | 🔀 91** ] blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] — A native MySql client [![build badge](https://api.travis-ci.org/blackbeam/rust-mysql-simple.svg?branch=master)](https://travis-ci.org/blackbeam/rust-mysql-simple)
    * [[ **⭐ 208 | 👁️ 5 | 🔀 48** ] blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] — asyncronous Rust Mysql driver based on Tokio. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [[ **⭐ 146 | 👁️ 14 | 🔀 16** ] AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) — A MySQL Proxy [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [[ **⭐ 2107 | 👁️ 54 | 🔀 226** ] sfackler/rust-postgres](https://github.com/sfackler/rust-postgres) [[postgres](https://crates.io/crates/postgres)] — A native [PostgreSQL](https://www.postgresql.org/) client [![build badge](https://api.travis-ci.org/sfackler/rust-postgres.svg?branch=master)](https://travis-ci.org/sfackler/rust-postgres)
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [[ **⭐ 1030 | 👁️ 14 | 🔀 169** ] rusqlite](https://github.com/rusqlite/rusqlite) — [Sqlite3](https://www.sqlite.org/index.html) bindings [![build badge](https://api.travis-ci.org/rusqlite/rusqlite.svg?branch=master)](https://travis-ci.org/rusqlite/rusqlite)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [[ **⭐ 6670 | 👁️ 107 | 🔀 642** ] diesel-rs/diesel](https://github.com/diesel-rs/diesel) — an ORM and Query builder for Rust [![Build Status](https://api.travis-ci.org/diesel-rs/diesel.svg?branch=master)](https://travis-ci.org/diesel-rs/diesel)
  * [[ **⭐ 205 | 👁️ 9 | 🔀 16** ] ivanceras/rustorm](https://github.com/ivanceras/rustorm) — an ORM for Rust [![Build Status](https://api.travis-ci.org/ivanceras/rustorm.svg?branch=master)](https://travis-ci.org/ivanceras/rustorm)

### Data processing

* [[ **⭐ 2564 | 👁️ 120 | 🔀 233** ] weld-project/weld](https://github.com/weld-project/weld) — High-performance runtime for data analytics applications
* [[ **⭐ 1677 | 👁️ 49 | 🔀 172** ] bluss/ndarray](https://github.com/rust-ndarray/ndarray) — N-dimensional array with array views, multidimensional slicing, and efficient operations
* [[ **⭐ 1371 | 👁️ 30 | 🔀 64** ] ritchie46/polars](https://github.com/ritchie46/polars) - Fast feature complete DataFrame library [![Build Status](https://api.travis-ci.com/ritchie46/polars.svg?branch=master)](https://travis-ci.com/ritchie46/polars)
* [[ **⭐ 130 | 👁️ 15 | 🔀 10** ] kernelmachine/utah](https://github.com/kernelmachine/utah) — Dataframe structure and operations in Rust
* [[ **⭐ 40 | 👁️ 4 | 🔀 8** ] amv-dev/yata](https://github.com/amv-dev/yata) — high perfomance technical analysis library [![Build Status](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)

### Data structures

* [[ **⭐ 1226 | 👁️ 21 | 🔀 174** ] rust-itertools/itertools](https://github.com/rust-itertools/itertools) — [![build badge](https://api.travis-ci.org/rust-itertools/itertools.svg?branch=master)](https://travis-ci.org/rust-itertools/itertools)
* [[ **⭐ 615 | 👁️ 21 | 🔀 32** ] orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] — Persistent data structures in Rust. [![build badge](https://api.travis-ci.org/orium/rpds.svg?branch=master)](https://travis-ci.org/orium/rpds)
* [[ **⭐ 275 | 👁️ 10 | 🔀 50** ] fizyk20/generic-array](https://github.com/fizyk20/generic-array) – a hack to allow for arrays sized by typenums [![build badge](https://api.travis-ci.org/fizyk20/generic-array.svg?branch=master)](https://travis-ci.org/fizyk20/generic-array)
* [[ **⭐ 184 | 👁️ 5 | 🔀 22** ] RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) – Roaring Bitmaps in Rust
* [[ **⭐ 96 | 👁️ 7 | 🔀 22** ] mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) — K-dimensional tree in Rust for fast geospatial indexing and nearest neighbors lookup
* [[ **⭐ 66 | 👁️ 4 | 🔀 8** ] garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] — A priority queue that implements priority changes. [![build badge](https://api.travis-ci.org/garro95/priority-queue.svg?branch=master)](https://travis-ci.org/garro95/priority-queue)
* [[ **⭐ 51 | 👁️ 3 | 🔀 4** ] danielpclark/array_tool](https://github.com/danielpclark/array_tool) — Array helpers for Rust. Some of the most common methods you would use on Arrays made available on Vectors. Polymorphic implementations for handling most of your use cases. [![build badge](https://api.travis-ci.org/danielpclark/array_tool.svg?branch=master)](https://travis-ci.org/danielpclark/array_tool)
* [[ **⭐ 31 | 👁️ 2 | 🔀 2** ] whitfin/usher](https://github.com/whitfin/usher) [[usher](https://crates.io/crates/usher)] — Parameterized routing for generic resources in Rust.
* [[ **⭐ 21 | 👁️ 5 | 🔀 1** ] xfix/enum-map](https://github.com/xfix/enum-map) [[enum-map](https://crates.io/crates/enum-map)] — An optimized map implementation for enums using an array to store values. [![build badge](https://api.travis-ci.org/xfix/enum-map.svg?branch=master)](https://travis-ci.org/xfix/enum-map)
* [[ **⭐ 16 | 👁️ 7 | 🔀 5** ] pop-os/progress-streams](https://github.com/pop-os/progress-streams) — Progress callbacks for types which implement `dyn io::Read` or `dyn io::Write`.
* [[ **⭐ 15 | 👁️ 3 | 🔀 0** ] billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] — Ternary search tree collection [![build badge](https://api.travis-ci.org/billyevans/tst.svg?branch=master)](https://travis-ci.org/billyevans/tst)
* [contain-rs](https://github.com/contain-rs) — Extension of Rust's std::collections

### Data visualization

* [[ **⭐ 1312 | 👁️ 26 | 🔀 89** ] 38/plotters](https://github.com/38/plotters) — [![build badge](https://api.travis-ci.org/38/plotters.svg?branch=master)](https://travis-ci.org/38/plotters)
* [[ **⭐ 437 | 👁️ 12 | 🔀 22** ] igiagkiozis/plotly](https://github.com/igiagkiozis/plotly) — Plotly for Rust.
* [[ **⭐ 310 | 👁️ 13 | 🔀 23** ] milliams/plotlib](https://github.com/milliams/plotlib) — [![build badge](https://api.travis-ci.org/milliams/plotlib.svg?branch=master)](https://travis-ci.org/milliams/plotlib)
* [[ **⭐ 117 | 👁️ 4 | 🔀 6** ] saresend/gust](https://github.com/saresend/Gust) — [![build badge](https://api.travis-ci.org/saresend/Gust.svg?branch=master)](https://travis-ci.org/saresend/Gust)

### Date and time

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [[ **⭐ 1524 | 👁️ 28 | 🔀 201** ] chronotope/chrono](https://github.com/chronotope/chrono) — [![build badge](https://api.travis-ci.org/chronotope/chrono.svg?branch=master)](https://travis-ci.org/chronotope/chrono)
* [[ **⭐ 22 | 👁️ 4 | 🔀 3** ] yaa110/rust-persian-calendar](https://github.com/yaa110/rust-persian-calendar) — [![build badge](https://api.travis-ci.org/yaa110/rust-persian-calendar.svg?branch=master)](https://travis-ci.org/yaa110/rust-persian-calendar)
* [[ **⭐ 21 | 👁️ 3 | 🔀 0** ] Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] — it's a library for converting human-like times to milliseconds [![build badge](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)

### Distributed systems

* Antimony
  * [[ **⭐ 53 | 👁️ 5 | 🔀 1** ] antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] — stream processing / distributed computation platform [![build badge](https://api.travis-ci.org/antimonyproject/antimony.svg?branch=master)](https://travis-ci.org/antimonyproject/antimony)
* Apache Hadoop
  * [[ **⭐ 21 | 👁️ 3 | 🔀 4** ] whitfin/efflux](https://github.com/whitfin/efflux) — Easy Hadoop Streaming and MapReduce interfaces in Rust.
* Apache Kafka
  * [[ **⭐ 645 | 👁️ 20 | 🔀 111** ] fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] — [librdkafka](https://github.com/edenhill/librdkafka) bindings [![build badge](https://api.travis-ci.org/fede1024/rust-rdkafka.svg?branch=master)](https://travis-ci.org/fede1024/rust-rdkafka)
  * [[ **⭐ 548 | 👁️ 19 | 🔀 66** ] spicavigo/kafka-rust](https://github.com/spicavigo/kafka-rust) — [![build badge](https://api.travis-ci.org/spicavigo/kafka-rust.svg?branch=master)](https://travis-ci.org/spicavigo/kafka-rust)
  * [[ **⭐ 29 | 👁️ 2 | 🔀 9** ] gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) — to integrate with [confluent schema registry](https://www.confluent.io/product/confluent-platform/data-compatibility/) [![build badge](https://api.travis-ci.org/gklijs/schema_registry_converter.svg?branch=master)](https://travis-ci.org/gklijs/schema_registry_converter)
* Beanstalkd
  * [[ **⭐ 41 | 👁️ 2 | 🔀 12** ] schickling/rust-beanstalkd](https://github.com/schickling/rust-beanstalkd) — [Beanstalkd](https://github.com/beanstalkd/beanstalkd) bindings [![build badge](https://api.travis-ci.org/schickling/rust-beanstalkd.svg?branch=master)](https://travis-ci.org/schickling/rust-beanstalkd)
* HDFS
  * [[ **⭐ 26 | 👁️ 2 | 🔀 8** ] hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) — libhdfs bindings

### Email

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [[ **⭐ 733 | 👁️ 11 | 🔀 101** ] lettre/lettre](https://github.com/lettre/lettre) — an SMTP-library for Rust [![build badge](https://api.travis-ci.org/lettre/lettre.svg?branch=master)](https://travis-ci.org/lettre/lettre)
* [[ **⭐ 102 | 👁️ 7 | 🔀 22** ] staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] — A library for parsing real-world email files [![build badge](https://api.travis-ci.org/staktrace/mailparse.svg?branch=master)](https://travis-ci.org/staktrace/mailparse)
* [[ **⭐ 79 | 👁️ 2 | 🔀 4** ] jdrouet/mrml](https://github.com/jdrouet/mrml) [![build badge](https://api.travis-ci.org/jdrouet/mrml.svg?branch=main)](https://travis-ci.org/jdrouet/mrml) - A library to generate nice email templates working on any mail client.
* [[ **⭐ 56 | 👁️ 1 | 🔀 31** ] gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) — unofficial Rust library for SendGrid API [![build badge](https://api.travis-ci.org/gsquire/sendgrid-rs.svg?branch=master)](https://travis-ci.org/gsquire/sendgrid-rs)
* [[ **⭐ 53 | 👁️ 1 | 🔀 2** ] jdrouet/catapulte](https://github.com/jdrouet/catapulte) [![build badge](https://api.travis-ci.org/jdrouet/catapulte.svg?branch=main)](https://travis-ci.org/jdrouet/catapulte) - A microservice to send emails using [MRML](https://github.com/jdrouet/mrml) templates.
* [[ **⭐ 45 | 👁️ 3 | 🔀 6** ] jdrouet/jolimail](https://github.com/jdrouet/jolimail) [![build badge](https://api.travis-ci.org/jdrouet/jolimail.svg?branch=main)](https://travis-ci.org/jdrouet/jolimail) - A web application to build [MRML](https://github.com/jdrouet/mrml) templates.
* [[ **⭐ 39 | 👁️ 1 | 🔀 2** ] GildedHonour/atarashii_imap](https://github.com/GildedHonour/atarashii_imap) — 新しい (atarashii/new) IMAP client in Rust. It supports plain and secure connections [![build badge](https://api.travis-ci.org/GildedHonour/atarashii_imap.svg?branch=master)](https://travis-ci.org/GildedHonour/atarashii_imap)
* [meli](https://git.meli.delivery/meli/meli.git) [[meli](https://crates.io/crates/meli)] — terminal email client

### Encoding

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [[ **⭐ 64 | 👁️ 6 | 🔀 14** ] alex/rust-asn1](https://github.com/alex/rust-asn1) — A Rust ASN.1 (DER) serializer [![build badge](https://api.travis-ci.org/alex/rust-asn1.svg?branch=master)](https://travis-ci.org/alex/rust-asn1)
* Bencode
  * [[ **⭐ 29 | 👁️ 2 | 🔀 13** ] arjantop/rust-bencode](https://github.com/arjantop/rust-bencode) — [Bencode](https://en.wikipedia.org/wiki/Bencode) implementation in Rust [![build badge](https://api.travis-ci.org/arjantop/rust-bencode.svg?branch=master)](https://travis-ci.org/arjantop/rust-bencode)
* Binary
  * [[ **⭐ 1111 | 👁️ 24 | 🔀 163** ] servo/bincode](https://github.com/servo/bincode) — A binary encoder/decoder in Rust [![build badge](https://api.travis-ci.com/servo/bincode.svg?branch=master)](https://travis-ci.org/servo/bincode)
  * [[ **⭐ 599 | 👁️ 23 | 🔀 82** ] m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] —  cross-platform, zero-copy, and endian-aware binary parsing [![build badge](https://api.travis-ci.org/m4b/goblin.svg?branch=master)](https://travis-ci.org/m4b/goblin)
  * [[ **⭐ 35 | 👁️ 6 | 🔀 1** ] arcnmx/nue](https://github.com/arcnmx/nue) — I/O and binary data encoding for Rust [![build badge](https://api.travis-ci.org/arcnmx/nue.svg?branch=master)](https://travis-ci.org/arcnmx/nue)
* BSON
  * [[ **⭐ 188 | 👁️ 12 | 🔀 67** ] mongodb/bson-rust](https://github.com/mongodb/bson-rust) — Encoding and decoding support for BSON in Rust
* Byte swapping
  * [[ **⭐ 618 | 👁️ 12 | 🔀 110** ] BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) — Supports big-endian, little-endian and native byte orders [![build badge](https://api.travis-ci.org/BurntSushi/byteorder.svg?branch=master)](https://travis-ci.org/BurntSushi/byteorder)
* Cap'n Proto
  * [[ **⭐ 1152 | 👁️ 38 | 🔀 122** ] capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) — [![build badge](https://api.travis-ci.org/capnproto/capnproto-rust.svg?branch=master)](https://travis-ci.org/capnproto/capnproto-rust)
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) — CBOR support for serde [![build badge](https://api.travis-ci.org/pyfisch/cbor.svg?branch=master)](https://travis-ci.org/pyfisch/cbor)
* Character Encoding
  * [[ **⭐ 226 | 👁️ 9 | 🔀 58** ] lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) — [![build badge](https://api.travis-ci.org/lifthrasiir/rust-encoding.svg?branch=master)](https://travis-ci.org/lifthrasiir/rust-encoding)
  * [[ **⭐ 196 | 👁️ 11 | 🔀 32** ] hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] — A Gecko-oriented implementation of the Encoding Standard in Rust [![build badge](https://api.travis-ci.org/hsivonen/encoding_rs.svg?branch=master)](https://travis-ci.org/hsivonen/encoding_rs)
* CRC
  * [[ **⭐ 77 | 👁️ 8 | 🔀 22** ] mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) — [![build badge](https://api.travis-ci.org/mrhooray/crc-rs.svg?branch=master)](https://travis-ci.org/mrhooray/crc-rs)
* CSV
  * [[ **⭐ 920 | 👁️ 16 | 🔀 126** ] BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) — A fast and flexible CSV reader and writer, with support for Serde [![build badge](https://api.travis-ci.org/BurntSushi/rust-csv.svg?branch=master)](https://travis-ci.org/BurntSushi/rust-csv)
  * [[ **⭐ 62 | 👁️ 5 | 🔀 5** ] frol/flatc-rust](https://github.com/frol/flatc-rust) — FlatBuffers compiler (flatc) integration for Cargo build scripts [![build badge](https://api.travis-ci.org/frol/flatc-rust.svg?branch=master)](https://travis-ci.org/frol/flatc-rust)
* [FlatBuffers](https://google.github.io/flatbuffers/)
* EDN
  * [[ **⭐ 33 | 👁️ 2 | 🔀 3** ] naomijub/edn-rs](https://github.com/naomijub/edn-rs) — crate to parse and emit EDN format into Rust types. [![Build Status]( https://api.travis-ci.org/naomijub/edn-rs.svg?branch=master)](https://travis-ci.org/naomijub/edn-rs)
* HAR
  * [[ **⭐ 15 | 👁️ 0 | 🔀 6** ] mandrean/har-rs](https://github.com/mandrean/har-rs) — A HTTP Archive Format (HAR) serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/har-rs.svg?branch=master)](https://travis-ci.org/mandrean/har-rs)
* HTML
  * [[ **⭐ 1248 | 👁️ 43 | 🔀 169** ] servo/html5ever](https://github.com/servo/html5ever) — High-performance browser-grade HTML5 parser [![build badge](https://api.travis-ci.com/servo/html5ever.svg?branch=master)](https://travis-ci.org/servo/html5ever)
  * [[ **⭐ 38 | 👁️ 5 | 🔀 15** ] veddan/rust-htmlescape](https://github.com/veddan/rust-htmlescape) — encoding/decoding HTML entities [![build badge](https://api.travis-ci.org/veddan/rust-htmlescape.svg?branch=master)](https://travis-ci.org/veddan/rust-htmlescape)
* JSON
  * [[ **⭐ 2082 | 👁️ 26 | 🔀 297** ] serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] — JSON support for [Serde](https://github.com/serde-rs/serde) framework [![build badge](https://api.travis-ci.org/serde-rs/json.svg?branch=master)](https://travis-ci.org/serde-rs/json)
  * [[ **⭐ 580 | 👁️ 11 | 🔀 10** ] pikkr/pikkr](https://github.com/pikkr/pikkr) [[pikkr](https://crates.io/crates/pikkr)] — JSON parser which picks up values directly without performing tokenization in Rust
  * [[ **⭐ 504 | 👁️ 20 | 🔀 23** ] simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] — High performance JSON parser based on a port of simdjson
  * [[ **⭐ 396 | 👁️ 14 | 🔀 51** ] maciejhirsz/json-rust](https://github.com/maciejhirsz/json-rust) [[json](https://crates.io/crates/json)] — JSON implementation in Rust [![build badge](https://api.travis-ci.org/maciejhirsz/json-rust.svg?branch=master)](https://travis-ci.org/maciejhirsz/json-rust)
  * [[ **⭐ 82 | 👁️ 4 | 🔀 6** ] importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson]](https://crates.io/crates/ajson) —  Get JSON values quickly [![build badge](https://api.travis-ci.com/importcjj/rust-ajson.svg?branch=master)](https://travis-ci.com/importcjj/rust-ajson)
* Jsonnet
  * [[ **⭐ 23 | 👁️ 2 | 🔀 7** ] Qihoo360/rust-jsonnet](https://github.com/Qihoo360/rust-jsonnet)
* MsgPack
  * [[ **⭐ 569 | 👁️ 21 | 🔀 74** ] 3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) — A pure Rust low/high level MessagePack implementation [![build badge](https://api.travis-ci.org/3Hren/msgpack-rust.svg?branch=master)](https://travis-ci.org/3Hren/msgpack-rust)
* PEM
  * [[ **⭐ 24 | 👁️ 3 | 🔀 13** ] jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] — A Rust based way to parse and encode PEM-encoded data [![build badge](https://api.travis-ci.org/jcreekmore/pem-rs.svg?branch=master)](https://travis-ci.org/jcreekmore/pem-rs)
* Postman Collection
  * [[ **⭐ 2 | 👁️ 0 | 🔀 1** ] mandrean/postman-collection-rs](https://github.com/mandrean/postman-collection-rs) — A Postman Collection v1, v2 & v2.1 serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/postman-collection-rs.svg?branch=master)](https://travis-ci.org/mandrean/postman-collection-rs)
* ProtocolBuffers
  * [[ **⭐ 1564 | 👁️ 22 | 🔀 243** ] stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) — [![build badge](https://api.travis-ci.org/stepancheg/rust-protobuf.svg?branch=master)](https://travis-ci.org/stepancheg/rust-protobuf)
  * [[ **⭐ 1410 | 👁️ 26 | 🔀 183** ] danburkert/prost](https://github.com/danburkert/prost) — [![build badge](https://api.travis-ci.org/danburkert/prost.svg?branch=master)](https://travis-ci.org/danburkert/prost)
* RON (Rusty Object Notation)
  * [[ **⭐ 1485 | 👁️ 25 | 🔀 70** ] https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) — [![build badge](https://api.travis-ci.org/ron-rs/ron.svg?branch=master)](https://travis-ci.org/https://github.com/ron-rs/ron)
* Tnetstring
  * [[ **⭐ 16 | 👁️ 2 | 🔀 7** ] erickt/rust-tnetstring](https://github.com/erickt/rust-tnetstring) — [![build badge](https://api.travis-ci.org/erickt/rust-tnetstring.svg?branch=master)](https://travis-ci.org/erickt/rust-tnetstring)
* TOML
  * [[ **⭐ 810 | 👁️ 15 | 🔀 161** ] alexcrichton/toml-rs](https://github.com/alexcrichton/toml-rs) — [![build badge](https://api.travis-ci.com/alexcrichton/toml-rs.svg?branch=master)](https://travis-ci.org/alexcrichton/toml-rs)
* XML
  * [[ **⭐ 482 | 👁️ 8 | 🔀 93** ] tafia/quick-xml](https://github.com/tafia/quick-xml) — High performance XML pull reader/writer [![build badge](https://api.travis-ci.org/tafia/quick-xml.svg?branch=master)](https://travis-ci.org/tafia/quick-xml)
  * [[ **⭐ 333 | 👁️ 9 | 🔀 83** ] netvl/xml-rs](https://github.com/netvl/xml-rs) — A streaming XML library [![build badge](https://api.travis-ci.org/netvl/xml-rs.svg?branch=master)](https://travis-ci.org/netvl/xml-rs)
  * [[ **⭐ 137 | 👁️ 8 | 🔀 23** ] shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) — An XML library in Rust [![build badge](https://api.travis-ci.org/shepmaster/sxd-document.svg?branch=master)](https://travis-ci.org/shepmaster/sxd-document)
  * [[ **⭐ 88 | 👁️ 7 | 🔀 20** ] shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) — An XPath library in Rust [![build badge](https://api.travis-ci.org/shepmaster/sxd-xpath.svg?branch=master)](https://travis-ci.org/shepmaster/sxd-xpath)
  * [[ **⭐ 82 | 👁️ 6 | 🔀 16** ] Florob/RustyXML](https://github.com/Florob/RustyXML) — an XML parser written in Rust [![build badge](https://api.travis-ci.org/Florob/RustyXML.svg?branch=master)](https://travis-ci.org/Florob/RustyXML)
  * [[ **⭐ 79 | 👁️ 9 | 🔀 15** ] media-io/yaserde](https://github.com/media-io/yaserde) — Yet Another Serializer/Deserializer specialized for XML [![build badge](https://api.travis-ci.org/media-io/yaserde.svg?branch=master)](https://travis-ci.org/media-io/yaserde)
* YAML
  * [[ **⭐ 425 | 👁️ 11 | 🔀 90** ] chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) — The missing YAML 1.2 implementation for Rust. [![build badge](https://api.travis-ci.org/chyh1990/yaml-rust.svg?branch=master)](https://travis-ci.org/chyh1990/yaml-rust)
  * [[ **⭐ 364 | 👁️ 8 | 🔀 64** ] dtolnay/serde-yaml](https://github.com/dtolnay/serde-yaml) [[serde\_yaml](https://crates.io/crates/serde_yaml)] — YAML support for [Serde](https://github.com/serde-rs/serde) framework [![build badge](https://api.travis-ci.org/dtolnay/serde-yaml.svg?branch=master)](https://travis-ci.org/dtolnay/serde-yaml)
  * [[ **⭐ 20 | 👁️ 4 | 🔀 11** ] kimhyunkang/libyaml-rust](https://github.com/kimhyunkang/libyaml-rust) — [libyaml](https://pyyaml.org/wiki/LibYAML) bindings [![build badge](https://api.travis-ci.org/kimhyunkang/libyaml-rust.svg?branch=master)](https://travis-ci.org/kimhyunkang/libyaml-rust)
  * [[ **⭐ 9 | 👁️ 2 | 🔀 2** ] vitiral/stfu8](https://github.com/vitiral/stfu8) — Sorta Text Format in UTF-8 [![build badge](https://api.travis-ci.org/vitiral/stfu8.svg?branch=master)](https://travis-ci.org/vitiral/stfu8)

### Filesystem

[[filesystem](https://crates.io/keywords/filesystem)]
* Libraries
  * [[ **⭐ 1 | 👁️ 0 | 🔀 0** ] jonhkr/rust-file-seq](https://github.com/jonhkr/rust-file-seq) -> Fail-safe sequence implementation that uses the file system as store [![Crates.io](https://img.shields.io/crates/v/file-seq)](https://crates.io/crates/file-seq) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jonhkr/rust-file-seq/Rust)](https://github.com/jonhkr/rust-file-seq/actions)
* Operations
  * [[ **⭐ 95 | 👁️ 4 | 🔀 19** ] webdesus/fs_extra](https://github.com/webdesus/fs_extra) — expanding opportunities standard library std::fs and std::io [![build badge](https://api.travis-ci.org/webdesus/fs_extra.svg?branch=master)](https://travis-ci.org/webdesus/fs_extra)
  * [[ **⭐ 42 | 👁️ 2 | 🔀 6** ] vitiral/path_abs](https://github.com/vitiral/path_abs) — Absolute serializable path types and associated methods. [![build badge](https://api.travis-ci.org/vitiral/path_abs.svg?branch=master)](https://travis-ci.org/webdesus/fs_extr://travis-ci.org/vitiral/path_abs)
  * [[ **⭐ 18 | 👁️ 7 | 🔀 9** ] pop-os/sys-mount](https://github.com/pop-os/sys-mount) — High level abstraction for the `mount` / `umount2` system calls.
  * [[ **⭐ 9 | 👁️ 7 | 🔀 4** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) -> UDisks2 DBus API
* Temporary Files
  * [[ **⭐ 1188 | 👁️ 28 | 🔀 49** ] zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] — Zero-details, privacy-focused embeddable file system. [![build badge](https://api.travis-ci.org/zboxfs/zbox.svg?branch=master)](https://travis-ci.org/zboxfs/zbox)
  * [[ **⭐ 481 | 👁️ 7 | 🔀 58** ] Stebalien/tempfile](https://github.com/Stebalien/tempfile) — temporary file library [![build badge](https://api.travis-ci.org/Stebalien/tempfile.svg?branch=master)](https://travis-ci.org/Stebalien/tempfile)
  * [[ **⭐ 132 | 👁️ 13 | 🔀 26** ] rust-lang-deprecated/tempdir](https://github.com/rust-lang-deprecated/tempdir) — temporary directory library [![build badge](https://api.travis-ci.org/rust-lang-deprecated/tempdir.svg?branch=master)](https://travis-ci.org/rust-lang-deprecated/tempdir)
  * [[ **⭐ 16 | 👁️ 2 | 🔀 7** ] Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] — list and manipulate unix extended file attributes [![build badge](https://api.travis-ci.org/Stebalien/xattr.svg?branch=master)](https://travis-ci.org/Stebalien/xattr)

### Functional Programming
[[functional programming](https://crates.io/keywords/fp)]
* Prelude
  * [[ **⭐ 787 | 👁️ 32 | 🔀 34** ] JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) — A library for functional programming in Rust [![Build Status](https://api.travis-ci.com/JasonShin/fp-core.rs.svg?branch=master)](https://travis-ci.com/JasonShin/fp-core.rs)

### Game development

See also [Are we game yet?](https://arewegameyet.rs)
* Allegro
  * [[ **⭐ 66 | 👁️ 4 | 🔀 10** ] SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) — [Allegro 5](https://liballeg.org/) bindings [![build badge](https://api.travis-ci.org/SiegeLord/RustAllegro.svg?branch=master)](https://travis-ci.org/SiegeLord/RustAllegro)
* Challonge
  * [[ **⭐ 0 | 👁️ 2 | 🔀 3** ] vityafx/challonge-rs](https://github.com/vityafx/challonge-rs) [[challonge](https://crates.io/crates/challonge)] — Client library for the Challonge REST API. Helps to organize tournaments. [![build badge](https://api.travis-ci.org/vityafx/challonge-rs.svg?branch=master)](https://travis-ci.org/vityafx/challonge-rs)
* Corange
  * [[ **⭐ 39 | 👁️ 9 | 🔀 2** ] lucidscape/corange-rs](https://github.com/lucidscape/corange-rs) — [Corange](https://github.com/orangeduck/Corange) bindings
* Entity-Component Systems (ECS)
  * [[ **⭐ 1836 | 👁️ 52 | 🔀 189** ] amethyst/specs](https://github.com/amethyst/specs) — Specs Parallel ECS [![build badge](https://api.travis-ci.org/amethyst/specs.svg?branch=master)](https://travis-ci.org/amethyst/specs)
  * [[ **⭐ 1066 | 👁️ 43 | 🔀 102** ] legion](https://github.com/amethyst/legion) — A feature rich high performance ECS library with minimal boilerplate [![build badge](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* Game Engines
  * [[ **⭐ 7529 | 👁️ 195 | 🔀 586** ] Bevy](https://github.com/bevyengine/bevy) is a refreshingly simple data-driven game engine built in Rust. - [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy)
  * [Amethyst](https://amethyst.rs) — Data-oriented game engine - [![Crates.io](https://img.shields.io/crates/v/amethyst)](https://crates.io/crates/amethyst) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/amethyst/amethyst/blob/main/COPYING)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bevyengine/bevy/blob/master/LICENSE)
[![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [[ **⭐ 2791 | 👁️ 59 | 🔀 338** ] ggez](https://github.com/ggez/ggez) — A lightweight game framework for making 2D games with minimum friction - [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE)
  * [[ **⭐ 1594 | 👁️ 40 | 🔀 327** ] Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) — SDL2 bindings [![build badge](https://api.travis-ci.org/Rust-SDL2/rust-sdl2.svg?branch=master)](https://travis-ci.org/Rust-SDL2/rust-sdl2)
  * [[ **⭐ 1467 | 👁️ 46 | 🔀 119** ] godot-rust/godot-rust](https://github.com/godot-rust/godot-rust) [[gdnative](https://crates.io/crates/gdnative)] - Rust bindings to the Godot game engine [![build badge](https://api.travis-ci.com/godot-rust/godot-rust.svg?branch=master)](https://travis-ci.com/github/godot-rust/godot-rust)
  * [[ **⭐ 343 | 👁️ 12 | 🔀 17** ] Unrust](https://github.com/unrust/unrust) — unrust — A pure rust based (webgl 2.0 / native) game engine
  * [[ **⭐ 217 | 👁️ 14 | 🔀 13** ] oxidator](https://github.com/Ruddle/oxidator) — A real time strategy game/engine written with Rust and WebGPU
  * [[ **⭐ 170 | 👁️ 15 | 🔀 47** ] brson/rust-sdl](https://github.com/brson/rust-sdl) — SDL1 bindings [![build badge](https://api.travis-ci.org/brson/rust-sdl.svg?branch=master)](https://travis-ci.org/brson/rust-sdl)
  * [[ **⭐ 146 | 👁️ 9 | 🔀 9** ] harmony](https://github.com/StarArawn/harmony) — A modern 3D/2D game engine that uses wgpu
  * [Kiss3d](http://kiss3d.org) — A Keep It Simple, Stupid 3d graphics engine written with Rust
  * [Piston](https://www.piston.rs/) — [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE)
* [Godot](https://godotengine.org/)
* [SDL](http://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
* SFML
  * [[ **⭐ 463 | 👁️ 20 | 🔀 62** ] jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) — [SFML](https://www.sfml-dev.org/) bindings [![build badge](https://api.travis-ci.org/jeremyletang/rust-sfml.svg?branch=master)](https://travis-ci.org/jeremyletang/rust-sfml)
* Tcod-rs
  * [[ **⭐ 221 | 👁️ 14 | 🔀 41** ] tomassedovic/tcod-rs](https://github.com/tomassedovic/tcod-rs) — Libtcod bindings for Rust.
* Victorem
  * [[ **⭐ 15 | 👁️ 2 | 🔀 0** ] VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] — Easy UDP Game Server and UDP Client framework for creating simple 2D and 3D online game prototype [![build badge](https://api.travis-ci.org/VictoremWinbringer/Victorem.svg?branch=master)](https://travis-ci.org/VictoremWinbringer/Victorem)
* Voxlap
* [[ **⭐ 163 | 👁️ 12 | 🔀 3** ] Awesome wgpu](https://github.com/rofrol/awesome-wgpu) — A curated list of wgpu code and resources
  * [[ **⭐ 11 | 👁️ 1 | 🔀 5** ] bbodi/rust-voxlap](https://github.com/bbodi/rust-voxlap) — [Voxlap](http://advsys.net/ken/voxlap.htm) bindings

### Geospatial

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [[ **⭐ 53 | 👁️ 5 | 🔀 1** ] rust-reverse-geocoder](https://github.com/ggcode1/rrgeo) — A fast, offline reverse geocoder in Rust, inspired by https://github.com/thampiman/reverse-geocoder
* [[ **⭐ 14 | 👁️ 2 | 🔀 2** ] DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] — coordinate transformations (2-d, 3-d, and geospatial) [![build badge](https://api.travis-ci.org/DaveKram/coord_transforms.svg?branch=master)](https://travis-ci.org/DaveKram/coord_transforms)
* [[ **⭐ 6 | 👁️ 2 | 🔀 1** ] vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] — conversion between UTM, LatLon and MGRS coordinates [![build badge](https://api.travis-ci.org/vlopes11/geomorph.svg?branch=master)](https://travis-ci.org/vlopes11/geomorph)
* [Georust](https://github.com/georust) — geospatial tools and libraries written in Rust

### Graphics

[[graphics](https://crates.io/keywords/graphics)]

* [[ **⭐ 4693 | 👁️ 131 | 🔀 546** ] gfx-rs/gfx](https://github.com/gfx-rs/gfx) — A high-performance, bindless graphics API for Rust. [![build badge](https://api.travis-ci.org/gfx-rs/gfx.svg?branch=master)](https://travis-ci.org/gfx-rs/gfx)
* [[ **⭐ 1751 | 👁️ 62 | 🔀 159** ] gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - Native WebGPU implementation based on gfx-hal. [![build badge](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* Font
  * [[ **⭐ 523 | 👁️ 26 | 🔀 41** ] redox-os/rusttype](https://github.com/redox-os/rusttype) — A pure Rust alternative to libraries like FreeType [![build badge](https://api.travis-ci.org/redox-os/rusttype.svg?branch=master)](https://travis-ci.org/redox-os/rusttype)
  * [[ **⭐ 176 | 👁️ 15 | 🔀 8** ] RazrFalcon/rustybuzz](https://github.com/RazrFalcon/rustybuzz) - An incremental harfbuzz port to Rust [![build badge](https://api.travis-ci.org/RazrFalcon/rustybuzz.svg?branch=master)](https://travis-ci.org/RazrFalcon/rustybuzz)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [[ **⭐ 2344 | 👁️ 63 | 🔀 287** ] glium/glium](https://github.com/glium/glium) — safe OpenGL wrapper for the Rust language. [![build badge](https://api.travis-ci.org/glium/glium.svg?branch=master)](https://travis-ci.org/glium/glium)
  * [[ **⭐ 543 | 👁️ 10 | 🔀 104** ] brendanzab/gl-rs](https://github.com/brendanzab/gl-rs) — [![build badge](https://api.travis-ci.org/brendanzab/gl-rs.svg?branch=master)](https://travis-ci.org/brendanzab/gl-rs)
  * [[ **⭐ 436 | 👁️ 43 | 🔀 103** ] PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) — [![build badge](https://api.travis-ci.org/PistonDevelopers/glfw-rs.svg?branch=master)](https://travis-ci.org/PistonDevelopers/glfw-rs)
  * [Kiss3d](http://kiss3d.org) — draw simple geometric figures and play with them with one-liners [![build badge](https://api.travis-ci.org/sebcrozet/kiss3d.svg?branch=master)](https://api.travis-ci.org/repositories/sebcrozet/kiss3d)
  * [glutin](https://crates.io/crates/glutin) — Rust alternative to [GLFW](https://www.glfw.org/) [![build badge](https://api.travis-ci.org/rust-windowing/glutin.svg?branch=master)](https://travis-ci.org/rust-windowing/glutin)
* PDF
  * [[ **⭐ 2590 | 👁️ 65 | 🔀 270** ] vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] — [![build badge](https://api.travis-ci.org/vulkano-rs/vulkano.svg?branch=master)](https://travis-ci.org/vulkano-rs/vulkano)
  * [[ **⭐ 731 | 👁️ 16 | 🔀 66** ] J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) — PDF document manipulation [![build badge](https://api.travis-ci.org/J-F-Liu/lopdf.svg?branch=master)](https://travis-ci.org/J-F-Liu/lopdf)
  * [[ **⭐ 411 | 👁️ 14 | 🔀 38** ] fschutt/printpdf](https://github.com/fschutt/printpdf) — PDF writing library [![build badge](https://api.travis-ci.org/fschutt/printpdf.svg?branch=master)](https://travis-ci.org/fschutt/printpdf)
  * [[ **⭐ 167 | 👁️ 6 | 🔀 16** ] WASM-PDF](https://github.com/jussiniinikoski/wasm-pdf) – Generates PDF files with JavaScript and WASM (WebAssembly) [![build badge](https://api.travis-ci.org/jussiniinikoski/wasm-pdf.svg?branch=master)](https://travis-ci.org/jussiniinikoski/wasm-pdf)
  * [[ **⭐ 99 | 👁️ 6 | 🔀 7** ] kaj/rust-pdf](https://github.com/kaj/rust-pdf) — [![build badge](https://api.travis-ci.org/kaj/rust-pdf.svg?branch=master)](https://travis-ci.org/kaj/rust-pdf)
* [Vulkan](https://www.khronos.org/vulkan/) [[vulkan](https://crates.io/keywords/vulkan)]

### Graph processing

* [[ **⭐ 9 | 👁️ 0 | 🔀 0** ] kud1ing/tinkerpop-rs](https://github.com/kud1ing/tinkerpop-rs) — an example how to use Apache TinkerPop from Rust

### GUI

[[gui](https://crates.io/keywords/gui)]

* [[ **⭐ 4481 | 👁️ 121 | 🔀 178** ] maps4print/azul](https://github.com/maps4print/azul) — A free, functional, IMGUI-oriented GUI framework for rapid development of desktop applications written in Rust, supported by the Mozilla WebRender rendering engine. [![build badge](https://api.travis-ci.org/maps4print/azul.svg?branch=master)](https://travis-ci.org/maps4print/azul)
* [[ **⭐ 3477 | 👁️ 91 | 🔀 274** ] Druid](https://github.com/linebender/druid) [[druid](https://crates.io/crates/druid)] — [Druid](https://linebender.org/druid/), a data-first Rust-native UI design toolkit. [![build badge](https://github.com/linebender/druid/workflows/.github/workflows/ci.yml/badge.svg)](https://github.com/linebender/druid/actions)
* [[ **⭐ 3017 | 👁️ 88 | 🔀 167** ] OrbTk](https://github.com/redox-os/orbtk) — The Orbital Widget Toolkit is a multi platform (G)UI toolkit using SDL2 [![Build and test](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [[ **⭐ 168 | 👁️ 9 | 🔀 18** ] autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) — A simple, cross-platform GUI automation library for Rust.
* [[ **⭐ 68 | 👁️ 12 | 🔀 3** ] rise-ui](https://github.com/rise-ui/rise) — Simple component-based cross-Platform GUI Toolkit for developing beautiful and user-friendly interfaces.
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) — An easy-to-use, immediate-mode, 2D GUI library written entirely in Rust [![build badge](https://api.travis-ci.org/PistonDevelopers/conrod.svg?branch=master)](https://travis-ci.org/PistonDevelopers/conrod)


* Cocoa
* [[ **⭐ 28568 | 👁️ 993 | 🔀 4788** ] ImGui](https://github.com/ocornut/imgui)
* [[ **⭐ 14074 | 👁️ 223 | 🔀 280** ] tauri-apps/tauri](https://github.com/tauri-apps/tauri) — Toolchain for building highly secure native apps that have tiny binaries and are very fast from HTML, JS and CSS layer, powered by [webview](https://github.com/webview/webview). [![test library](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [[ **⭐ 9865 | 👁️ 344 | 🔀 586** ] libui](https://github.com/andlabs/libui)
* [[ **⭐ 9050 | 👁️ 173 | 🔀 375** ] hecrj/iced](https://github.com/hecrj/iced) — A cross-platform GUI library for Rust focused on simplicity and type-safety. Inspired by Elm.
* [[ **⭐ 4106 | 👁️ 120 | 🔀 235** ] Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [[ **⭐ 1887 | 👁️ 44 | 🔀 65** ] relm](https://github.com/antoyo/relm) — Asynchronous, GTK+-based, GUI library, inspired by Elm [![build badge](https://api.travis-ci.org/antoyo/relm.svg?branch=master)](https://travis-ci.org/antoyo/relm)
  * [[ **⭐ 1716 | 👁️ 63 | 🔀 60** ] flutter-rs](https://github.com/flutter-rs/flutter-rs) — Build flutter desktop app in dart & rust.
  * [[ **⭐ 1305 | 👁️ 37 | 🔀 95** ] gtk-rs/gtk](https://github.com/gtk-rs/gtk) — GTK+ bindings [![build badge](https://api.travis-ci.org/gtk-rs/gtk.svg?branch=master)](https://travis-ci.org/gtk-rs/gtk)
  * [[ **⭐ 1271 | 👁️ 28 | 🔀 209** ] imgui-rs](https://github.com/imgui-rs/imgui-rs) — Rust bindings for ImGui [![Build Status](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
  * [[ **⭐ 731 | 👁️ 25 | 🔀 56** ] rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) — libui bindings [![build badge](https://api.travis-ci.org/rust-native-ui/libui-rs.svg?branch=master)](https://travis-ci.org/rust-native-ui/libui-rs).
* [[ **⭐ 586 | 👁️ 22 | 🔀 11** ] ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - A truly native and cross platform GUI library. One unified code can be run as native GUI, Html Web and TUI. [![Build Status](https://api.travis-ci.com/ivanceras/sauron-native.svg?branch=master)](https://travis-ci.com/github/ivanceras/sauron-native)
  * [[ **⭐ 493 | 👁️ 14 | 🔀 31** ] sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) — Sciter bindings [![build badge](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
  * [[ **⭐ 432 | 👁️ 25 | 🔀 41** ] cyndis/qmlrs](https://github.com/cyndis/qmlrs) — QtQuick bindings [![build badge](https://api.travis-ci.org/cyndis/qmlrs.svg?branch=master)](https://travis-ci.org/cyndis/qmlrs)
  * [[ **⭐ 416 | 👁️ 22 | 🔀 119** ] servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) — [![build badge](https://api.travis-ci.com/servo/core-foundation-rs.svg?branch=master)](https://travis-ci.org/servo/core-foundation-rs)
  * [[ **⭐ 339 | 👁️ 18 | 🔀 27** ] Kiss-ui](https://github.com/KISS-UI/kiss-ui) — A simple UI framework built on IUP [![Build Status](https://api.travis-ci.org/cybergeek94/kiss-ui.svg?branch=master)](https://travis-ci.org/cybergeek94/kiss-ui)
  * [[ **⭐ 308 | 👁️ 15 | 🔀 13** ] nuklear-rust](https://github.com/snuk182/nuklear-rust) — Rust bindings for Nuklear
  * [[ **⭐ 270 | 👁️ 20 | 🔀 37** ] woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) — Integrate Qml and Rust by building the QMetaObject at compile time. [![build badge](https://api.travis-ci.org/woboq/qmetaobject-rs.svg?branch=master)](https://travis-ci.org/woboq/qmetaobject-rs)
  * [[ **⭐ 254 | 👁️ 11 | 🔀 26** ] fltk-rs](https://github.com/MoAlyousef/fltk-rs) — FLTK Rust bindings [![Build](https://github.com/MoAlyousef/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/MoAlyousef/fltk-rs/actions)
  * [[ **⭐ 198 | 👁️ 15 | 🔀 16** ] White-Oak/qml-rust](https://github.com/White-Oak/qml-rust) — QML bindings. [![build badge](https://api.travis-ci.org/White-Oak/qml-rust.svg?branch=master)](https://travis-ci.org/White-Oak/qml-rust)
* [[ **⭐ 123 | 👁️ 5 | 🔀 17** ] saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) — [nativefiledialog](https://github.com/mlabbe/nativefiledialog) bindings
  * [[ **⭐ 40 | 👁️ 4 | 🔀 13** ] dcampbell24/iup-rust](https://github.com/dcampbell24/iup-rust) — IUP bindings [![build badge](https://api.travis-ci.org/dcampbell24/iup-rust.svg?branch=master)](https://travis-ci.org/dcampbell24/iup-rust)
  * [[ **⭐ 38 | 👁️ 2 | 🔀 3** ] kylewlacy/sorbet-cocoa](https://github.com/kylewlacy/sorbet-cocoa)
  * [[ **⭐ 32 | 👁️ 4 | 🔀 4** ] kitech/qt.rs](https://github.com/kitech/qt.rs) — Qt5 bindings
  * [[ **⭐ 18 | 👁️ 2 | 🔀 2** ] clear-coat](https://github.com/jminer/clear-coat) — Clear Coat is a Rust wrapper for the IUP GUI library
* [FLTK](https://www.fltk.org/)
* [Flutter](https://flutter.dev/)
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
* [Qt](https://doc.qt.io)
  * [Rust Qt Binding Generator](https://phabricator.kde.org/source/rust-qt-binding-generator/) — Binding generator hosted by KDE.
  * [rust-qt](https://github.com/rust-qt) —
* [Sciter](https://sciter.com/)

### Image processing

* [[ **⭐ 2056 | 👁️ 76 | 🔀 360** ] image-rs/image](https://github.com/image-rs/image) — Basic imaging processing functions and methods for converting to and from image formats [![build badge](https://api.travis-ci.org/image-rs/image.svg?branch=master)](https://travis-ci.org/image-rs/image)
* [[ **⭐ 615 | 👁️ 27 | 🔀 66** ] twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) — Rust bindings for OpenCV [![build badge](https://api.travis-ci.org/twistedfall/opencv-rust.svg?branch=cv2)](https://travis-ci.org/twistedfall/opencv-rust)
* [[ **⭐ 344 | 👁️ 61 | 🔀 81** ] image-rs/imageproc](https://github.com/image-rs/imageproc) — An image processing library, based on the `image` library. [![Build Status](https://api.travis-ci.org/image-rs/imageproc.svg?branch=master)](https://travis-ci.org/image-rs/imageproc)
* [[ **⭐ 166 | 👁️ 5 | 🔀 30** ] abonander/img_hash](https://github.com/abonander/img_hash) — Perceptual image hashing and comparison for equality and similarity. [![Build Status](https://api.travis-ci.org/abonander/img_hash.svg?branch=master)](https://travis-ci.org/abonander/img_hash)
* [[ **⭐ 58 | 👁️ 6 | 🔀 7** ] teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] — A simple steganography library [![build badge](https://api.travis-ci.org/teovoinea/steganography.svg?branch=master)](https://travis-ci.org/teovoinea/steganography)

### Language specification

* [[ **⭐ 126 | 👁️ 7 | 🔀 12** ] shnewto/bnf](https://github.com/shnewto/bnf) — A library for parsing Backus–Naur form context-free grammars. [![build badge](https://api.travis-ci.org/shnewto/bnf.svg?branch=master)](https://travis-ci.org/shnewto/bnf)

### Logging

[[log](https://crates.io/keywords/log)]

* [[ **⭐ 1330 | 👁️ 30 | 🔀 230** ] tokio-rs/tracing](https://github.com/tokio-rs/tracing) — An application level tracing framework for async-aware structured logging, error handling, metrics, and more [![Build Status](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)
* [[ **⭐ 1073 | 👁️ 18 | 🔀 80** ] slog-rs/slog](https://github.com/slog-rs/slog) — Structured, composable logging for Rust [![Build Status](https://api.travis-ci.org/slog-rs/slog.svg?branch=master)](https://travis-ci.org/slog-rs/slog)
* [[ **⭐ 1038 | 👁️ 36 | 🔀 154** ] rust-lang/log](https://github.com/rust-lang/log) — Logging implementation for Rust [![Build Status](https://api.travis-ci.org/rust-lang/log.svg?branch=master)](https://travis-ci.org/rust-lang/log)
* [[ **⭐ 485 | 👁️ 10 | 🔀 70** ] estk/log4rs](https://github.com/estk/log4rs) — highly configurable logging framework modeled after Java's Logback and log4j libraries [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [[ **⭐ 254 | 👁️ 4 | 🔀 38** ] seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) — A pretty, easy-to-use logger for Rust. [![Build Status](https://api.travis-ci.org/seanmonstar/pretty-env-logger.svg?branch=master)](https://travis-ci.org/seanmonstar/pretty-env-logger)

### Macro

* cute
  * [[ **⭐ 242 | 👁️ 4 | 🔀 3** ] mattgathu/cute](https://github.com/mattgathu/cute) — Macro for Python-esque list comprehensions in Rust. [![Build Status](https://api.travis-ci.org/mattgathu/cute.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* hado
* [[ **⭐ 49 | 👁️ 1 | 🔀 4** ] Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - Macro and methods for C#-LINQ-like expressions. [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)
  * [[ **⭐ 41 | 👁️ 1 | 🔀 1** ] ludat/hado-rs](https://github.com/ludat/hado-rs) — A little macro for writing haskell-like do expressions without too much ceremony

### Markup language

* CommonMark
  * [[ **⭐ 1081 | 👁️ 27 | 🔀 161** ] raphlinus/pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) — [CommonMark](https://commonmark.org/) parser in Rust

### Mobile

[Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile)

* Android
  * [[ **⭐ 887 | 👁️ 37 | 🔀 94** ] rust-windowing/android-rs-glue](https://github.com/rust-windowing/android-rs-glue) — glue between Rust and Android [![build badge](https://api.travis-ci.org/rust-windowing/android-rs-glue.svg?branch=master)](https://travis-ci.org/rust-windowing/android-rs-glue)
* iOS
  * [[ **⭐ 292 | 👁️ 11 | 🔀 26** ] TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) — A cargo lipo subcommand which automatically creates a universal library for use with your iOS application. [![build badge](https://api.travis-ci.org/TimNN/cargo-lipo.svg?branch=master)](https://travis-ci.org/TimNN/cargo-lipo)
  * [[ **⭐ 38 | 👁️ 3 | 🔀 6** ] vhbit/ObjCrust](https://github.com/vhbit/ObjCrust) — using Rust to create an iOS static library
* Pebble
  * [[ **⭐ 43 | 👁️ 5 | 🔀 1** ] andars/pebble.rs](https://github.com/andars/pebble.rs) — A crate that allows Rust to be used to develop Pebble applications.
* Android / iOS
  * [[ **⭐ 72 | 👁️ 4 | 🔀 4** ] i-schuetz/rust_android_ios](https://github.com/i-schuetz/rust_android_ios) — An example of using a shared Rust lib for Android and iOS using rust-swig and cbindgen respectively.

### Network programming

* HTTP
  * [[ **⭐ 70 | 👁️ 8 | 🔀 8** ] pop-os/parallel-getter](https://github.com/pop-os/parallel-getter) — Download a file with parallel GET requests to maximize bandwidth usage.
  * [[ **⭐ 50 | 👁️ 7 | 🔀 9** ] pop-os/url-crawler](https://github.com/pop-os/url-crawler) — A configurable parallel web crawler, designed to crawl a website for content.
  * [[ **⭐ 33 | 👁️ 8 | 🔀 5** ] pop-os/url-scraper](https://github.com/pop-os/url-scraper) — Scrape URLs from HTML pages
* FTP
  * [[ **⭐ 110 | 👁️ 7 | 🔀 44** ] mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) — an [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) client for Rust [![build badge](https://api.travis-ci.org/mattnenterprise/rust-ftp.svg?branch=master)](https://travis-ci.org/mattnenterprise/rust-ftp)
* gRPC
  * [[ **⭐ 1319 | 👁️ 77 | 🔀 175** ] tikv/grpc-rs](https://github.com/tikv/grpc-rs) — The gRPC library for Rust built on C Core library and futures [![Build Status](https://api.travis-ci.org/tikv/grpc-rs.svg?branch=master)](https://travis-ci.org/tikv/grpc-rs)
* IPNetwork
  * [[ **⭐ 80 | 👁️ 4 | 🔀 17** ] candrew/netsim](https://github.com/canndrew/netsim) — A Rust library for network simulation and testing [![build badge](https://api.travis-ci.org/canndrew/netsim.svg?branch=master)](https://travis-ci.org/canndrew/netsim)
  * [[ **⭐ 64 | 👁️ 3 | 🔀 28** ] achanda/ipnetwork](https://github.com/achanda/ipnetwork) — A library to work with IP networks in pure Rust [![build badge](https://api.travis-ci.org/achanda/ipnetwork.svg?branch=master)](https://travis-ci.org/achanda/ipnetwork)
* JSON-RPC
  * [[ **⭐ 14 | 👁️ 2 | 🔀 2** ] vlopes11/futures-jsonrpc](https://github.com/vlopes11/futures-jsonrpc) [[futures-jsonrpc](https://crates.io/crates/futures-jsonrpc)] — Futures implementation for JSON-RPC [![build badge](https://api.travis-ci.org/vlopes11/futures-jsonrpc.svg?branch=master)](https://travis-ci.org/vlopes11/futures-jsonrpc)
* Low level
  * [[ **⭐ 11532 | 👁️ 272 | 🔀 1087** ] tokio-rs/tokio](https://github.com/tokio-rs/tokio) — A network application framework for rapid development and highly scalable production deployments of clients and servers.
  * [[ **⭐ 6166 | 👁️ 135 | 🔀 534** ] actix/actix](https://github.com/actix/actix) — Actor library for Rust [![build badge](https://api.travis-ci.org/actix/actix.svg?branch=master)](https://travis-ci.org/actix/actix)
  * [[ **⭐ 1904 | 👁️ 70 | 🔀 192** ] smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) — A standalone, event-driven TCP/IP stack that is designed for bare-metal, real-time systems [![build badge](https://api.travis-ci.org/smoltcp-rs/smoltcp.svg?branch=master)](https://travis-ci.org/smoltcp-rs/smoltcp)
  * [[ **⭐ 1329 | 👁️ 34 | 🔀 202** ] libpnet/libpnet](https://github.com/libpnet/libpnet) — A cross-platform, low level networking [![build badge](https://api.travis-ci.org/libpnet/libpnet.svg?branch=master)](https://travis-ci.org/libpnet/libpnet)
  * [[ **⭐ 102 | 👁️ 4 | 🔀 10** ] dylanmckay/protocol](https://github.com/dylanmckay/protocol) — Custom TCP/UDP protocol definitions
* NanoMsg
  * [[ **⭐ 349 | 👁️ 16 | 🔀 51** ] thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) — [nanomsg](https://nanomsg.org/) bindings [![build badge](https://api.travis-ci.org/thehydroimpulse/nanomsg.rs.svg?branch=master)](https://travis-ci.org/thehydroimpulse/nanomsg.rs)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] — [Nng (nanomsg v2)](https://nng.nanomsg.org/index.html) bindings [![build badge](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/pipelines)
* NNTP
  * [[ **⭐ 12 | 👁️ 2 | 🔀 5** ] mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) — an [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) client for Rust [![build badge](https://api.travis-ci.org/mattnenterprise/rust-nntp.svg?branch=master)](https://travis-ci.org/mattnenterprise/rust-nntp)
* POP3
  * [[ **⭐ 18 | 👁️ 2 | 🔀 9** ] mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) — A [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) client for Rust [![build badge](https://api.travis-ci.org/mattnenterprise/rust-pop3.svg?branch=master)](https://travis-ci.org/mattnenterprise/rust-pop3)
* SSH
  * [[ **⭐ 241 | 👁️ 8 | 🔀 86** ] alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) — [libssh2](https://www.libssh2.org/) bindings [![build badge](https://api.travis-ci.com/alexcrichton/ssh2-rs.svg?branch=master)](https://travis-ci.org/alexcrichton/ssh2-rs)
  * [Thrussh](https://github.com/pijul-scm/thrussh/) — an SSH library written from scratch in Rust, backed by [libsodium](https://doc.libsodium.org/)
* Stomp
  * [[ **⭐ 75 | 👁️ 5 | 🔀 15** ] zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) — A [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) client implementation in Rust [![build badge](https://api.travis-ci.org/zslayton/stomp-rs.svg?branch=master)](https://travis-ci.org/zslayton/stomp-rs)
  * [[ **⭐ 6 | 👁️ 1 | 🔀 2** ] adwhit/tokio-stomp](https://github.com/adwhit/tokio-stomp) — An async [STOMP v1.1](https://stomp.github.io/stomp-specification-1.1.html) client for Rust, using the Tokio stack.
* uTP
  * [[ **⭐ 117 | 👁️ 13 | 🔀 23** ] meqif/rust-utp](https://github.com/meqif/rust-utp) — A [uTP](http://www.bittorrent.org/beps/bep_0029.html) (Micro Transport Protocol) library for Rust. [![build badge](https://api.travis-ci.org/meqif/rust-utp.svg?branch=master)](https://travis-ci.org/meqif/rust-utp)
* ZeroMQ
  * [[ **⭐ 560 | 👁️ 21 | 🔀 142** ] erickt/rust-zmq](https://github.com/erickt/rust-zmq) — [ZeroMQ](https://zeromq.org/) bindings [![build badge](https://api.travis-ci.org/erickt/rust-zmq.svg?branch=master)](https://travis-ci.org/erickt/rust-zmq)
* CoAP
  * [[ **⭐ 128 | 👁️ 14 | 🔀 28** ] Covertness/coap-rs](https://github.com/Covertness/coap-rs) — A [Constrained Application Protocol(CoAP)](https://tools.ietf.org/html/rfc7252) library for Rust. [![build badge](https://api.travis-ci.org/Covertness/coap-rs.svg?branch=master)](https://travis-ci.org/Covertness/coap-rs)
* Docker
  * [[ **⭐ 194 | 👁️ 1 | 🔀 44** ] fussybeaver/bollard](https://github.com/fussybeaver/bollard) — Docker daemon API in Rust
* RPC
  * [[ **⭐ 58 | 👁️ 5 | 🔀 12** ] smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) — A RPC library for Rust for developing microservices in easy and simple way. [![build badge](https://api.travis-ci.org/smallnest/rpcx-rs.svg?branch=master)](https://travis-ci.org/smallnest/rpcx-rs)
* QUIC
  * [[ **⭐ 4505 | 👁️ 130 | 🔀 308** ] cloudflare/quiche](https://github.com/cloudflare/quiche) — cloudflare implementation of the QUIC transport protocol and HTTP/3 [![build badge](https://api.travis-ci.com/cloudflare/quiche.svg?branch=master)](https://travis-ci.com/cloudflare/quiche)
  * [[ **⭐ 1536 | 👁️ 41 | 🔀 130** ] quinn-rs/quinn](https://github.com/quinn-rs/quinn) — Futures-based QUIC implementation in Rust [![build badge](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [[ **⭐ 1069 | 👁️ 33 | 🔀 59** ] mozilla/neqo](https://github.com/mozilla/neqo) — an Implementation of QUIC written in Rust
* P2P
  * [[ **⭐ 1639 | 👁️ 86 | 🔀 329** ] libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) — The Rust Implementation of libp2p networking stack. [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
* NATS
  * [[ **⭐ 276 | 👁️ 15 | 🔀 39** ] nats-io/nats.rs](https://github.com/nats-io/nats.rs) — Rust client for NATS, the cloud native messaging system. [![Build Status](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)

### Parsing

  * [[ **⭐ 5024 | 👁️ 80 | 🔀 541** ] Geal/nom](https://github.com/Geal/nom) — parser combinator library [![build badge](https://api.travis-ci.org/Geal/nom.svg?branch=master)](https://travis-ci.org/Geal/nom)
  * [[ **⭐ 2279 | 👁️ 45 | 🔀 124** ] pest-parser/pest](https://github.com/pest-parser/pest) — The Elegant Parser [![Build Status](https://api.travis-ci.org/pest-parser/pest.svg?branch=master)](https://travis-ci.org/pest-parser/pest)
  * [[ **⭐ 1680 | 👁️ 36 | 🔀 178** ] lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) — LR(1) parser generator for Rust [![Build status](https://api.travis-ci.org/lalrpop/lalrpop.svg?branch=master)](https://travis-ci.org/lalrpop/lalrpop)
  * [[ **⭐ 908 | 👁️ 13 | 🔀 67** ] Marwes/combine](https://github.com/Marwes/combine) — parser combinator library [![build badge](https://api.travis-ci.org/Marwes/combine.svg?branch=master)](https://travis-ci.org/Marwes/combine)
  * [[ **⭐ 849 | 👁️ 19 | 🔀 80** ] kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) — Parsing Expression Grammar (PEG) parser generator
  * [[ **⭐ 204 | 👁️ 12 | 🔀 15** ] m4rw3r/chomp](https://github.com/m4rw3r/chomp) – A fast monadic-style parser combinator [![build badge](https://api.travis-ci.org/m4rw3r/chomp.svg?branch=master)](https://travis-ci.org/m4rw3r/chomp)
  * [[ **⭐ 130 | 👁️ 11 | 🔀 12** ] ptal/oak](https://github.com/ptal/oak) — A typed PEG parser generator (compiler plugin)
  * [[ **⭐ 60 | 👁️ 6 | 🔀 6** ] Folyd/robotstxt](https://github.com/Folyd/robotstxt) - A native Rust port of Google's robots.txt parser and matcher C++ library
  * [[ **⭐ 54 | 👁️ 3 | 🔀 11** ] s-panferov/queryst](https://github.com/s-panferov/queryst) — A query string parsing library for Rust inspired by https://github.com/ljharb/qs
  * [[ **⭐ 51 | 👁️ 5 | 🔀 15** ] freestrings/jsonpath](https://github.com/freestrings/jsonpath) — [JsonPath](https://goessner.net/articles/JsonPath/) engine written in Rust. Webassembly and Javascript support too [![Build Status](https://api.travis-ci.org/freestrings/jsonpath.svg?branch=master)](https://travis-ci.org/freestrings/jsonpath)
  * [[ **⭐ 40 | 👁️ 2 | 🔀 8** ] nrc/zero](https://github.com/nrc/zero) — zero-allocation parsing of binary data
  * [[ **⭐ 25 | 👁️ 2 | 🔀 2** ] ivanceras/inquerest](https://github.com/ivanceras/inquerest) — an URL parameter parser for rest filter inquiry [![Build Status](https://api.travis-ci.org/ivanceras/inquerest.svg?branch=master)](https://travis-ci.org/ivanceras/inquerest)
  * [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] aleshaleksey/libazdice](https://github.com/aleshaleksey/libazdice) — A parser for parsing dice strings for TTRPGs and TTRPG development [![build badge](https://api.travis-ci.org/aleshaleksey/libazdice.svg?branch=master)](https://travis-ci.org/aleshaleksey/libazdice)
  * [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] replicadse/wavefront_rs](https://github.com/replicadse/wavefront_rs) — A parser for the Wavefront OBJ format. [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![build badge](https://github.com/replicadse/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/replicadse/wavefront_rs/actions)

### Packaging formats

- [[ **⭐ 8 | 👁️ 7 | 🔀 3** ] pop-os/debarchive](https://github.com/pop-os/debarchive) Library for reading and extracting debian archives

### Peripherals

* Serial Port
  * [[ **⭐ 113 | 👁️ 6 | 🔀 14** ] Susurrus/serialport-rs](https://github.com/Susurrus/serialport-rs) [[serialport](https://docs.rs/serialport/3.0.0/serialport/)] — A cross-platform library that provides access to a serial port

### Platform specific

* Cross-platform
  * [svartalf/rust-battery](https://crates.io/crates/battery) — Cross-platform information about the notebook batteries [![build badge](https://api.travis-ci.org/svartalf/rust-battery.svg?branch=master)](https://travis-ci.org/svartalf/rust-battery)

* Linux
  * [[ **⭐ 177 | 👁️ 5 | 🔀 49** ] hannobraun/inotify](https://github.com/hannobraun/inotify) — [inotify](https://en.wikipedia.org/wiki/Inotify) bindings [![build badge](https://api.travis-ci.org/hannobraun/inotify.svg?branch=master)](https://travis-ci.org/hannobraun/inotify)
  * [[ **⭐ 76 | 👁️ 4 | 🔀 9** ] arvancloud/nginx-rs](https://github.com/arvancloud/nginx-rs) — [Nginx](https://www.nginx.com) bindings [![build badge](https://api.travis-ci.org/arvancloud/nginx-rs.svg?branch=master)](https://travis-ci.org/arvancloud/nginx-rs)
  * [[ **⭐ 43 | 👁️ 4 | 🔀 15** ] yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) — [iptables](https://www.netfilter.org/projects/iptables/index.html) bindings [![build badge](https://api.travis-ci.org/yaa110/rust-iptables.svg?branch=master)](https://travis-ci.org/yaa110/rust-iptables)
  * [[ **⭐ 22 | 👁️ 2 | 🔀 1** ] frol/cgroups-fs](https://github.com/frol/cgroups-fs) — Rust bindings to Linux Control Groups (cgroups) [![build badge](https://api.travis-ci.org/frol/cgroups-fs.svg?branch=master)](https://travis-ci.org/frol/cgroups-fs)
  * [[ **⭐ 9 | 👁️ 7 | 🔀 4** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) — UDisks2 DBus API
  * [pop-os/distinst](https://github.com/pop-os/distinst/) — Linux distribution installer library
* Unix-like
  * [[ **⭐ 1454 | 👁️ 27 | 🔀 416** ] nix-rust/nix](https://github.com/nix-rust/nix) — Unix-like API bindings [![build badge](https://api.travis-ci.org/nix-rust/nix.svg?branch=master)](https://travis-ci.org/nix-rust/nix)
  * [[ **⭐ 743 | 👁️ 25 | 🔀 117** ] zargony/fuse-rs](https://github.com/zargony/fuse-rs) — [FUSE](https://github.com/libfuse/libfuse) bindings
* Windows
  * [[ **⭐ 1239 | 👁️ 32 | 🔀 335** ] retep998/winapi-rs](https://github.com/retep998/winapi-rs) — Windows API bindings [![build badge](https://api.travis-ci.org/retep998/winapi-rs.svg?branch=master)](https://travis-ci.org/retep998/winapi-rs)
* FreeBSD
  * [[ **⭐ 13 | 👁️ 5 | 🔀 2** ] dlrobertson/capsicum-rs](https://github.com/dlrobertson/capsicum-rs) — Rust bindings for the FreeBSD capsicum framework
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) — Rust implementation of a FreeBSD jail library

### Scripting

[[scripting](https://crates.io/keywords/scripting)]

* [[ **⭐ 2274 | 👁️ 60 | 🔀 126** ] gluon-lang/gluon](https://github.com/gluon-lang/gluon) —  A small, statically-typed, functional programming language
* [[ **⭐ 1296 | 👁️ 62 | 🔀 42** ] PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) — A rusty dynamically typed scripting language
* [[ **⭐ 1020 | 👁️ 23 | 🔀 41** ] mun](https://github.com/mun-lang/mun) — A compiled, statically-typed scripting language with first class hot reloading support [![build badge](https://api.travis-ci.org/mun-lang/mun.svg?branch=master)](https://travis-ci.org/mun-lang/mun)
* [[ **⭐ 976 | 👁️ 15 | 🔀 80** ] rhaiscript/rhai](https://github.com/rhaiscript/rhai) — A tiny and fast embedded scripting language resembling a combination of JS and Rust
* [[ **⭐ 623 | 👁️ 22 | 🔀 39** ] murarth/ketos](https://github.com/murarth/ketos) — A Lisp dialect functional programming language serving as a scripting and extension language for rust
* [[ **⭐ 174 | 👁️ 5 | 🔀 13** ] duckscript](https://crates.io/crates/duckscript) — [Simple, extendable and embeddable scripting language.](https://github.com/sagiegurari/duckscript) [![build badge](https://api.travis-ci.org/sagiegurari/duckscript.svg?branch=master)](https://travis-ci.org/sagiegurari/duckscript)
* [moss](https://crates.io/crates/moss) — A dynamically typed scripting language

### Simulation

[[simulation](https://crates.io/keywords/simulation)]

* [bigbang](https://crates.io/crates/bigbang) - Gravitational and collisional n-body simulation with optional GPU acceleration [![build badge](https://api.travis-ci.org/sezna/bigbang.svg?branch=master)](https://travis-ci.org/sezna/bigbang)
* [nyx-space](https://crates.io/crates/nyx-space) - High fidelity, fast, reliable and validated astrodynamical toolkit library, used for spacecraft mission design and orbit determination [![Build Status](https://gitlab.com/chrisrabotin/nyx/badges/master/pipeline.svg)](https://gitlab.com/chrisrabotin/nyx/pipelines)
### Task scheduling

* [[ **⭐ 67 | 👁️ 2 | 🔀 4** ] BinChengZhao/delay-timer](https://github.com/BinChengZhao/delay-timer) — delay-timer is a task manager based on a time wheel algorithm, which makes it easy to manage timed tasks, or to periodically execute arbitrary tasks such as closures. [![Cargo](https://img.shields.io/crates/v/delay_timer.svg)](
https://crates.io/crates/delay_timer)

### Template engine

* Handlebars
  * [[ **⭐ 642 | 👁️ 14 | 🔀 83** ] sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) — Handlebars template engine with inheritance, custom helper support. [![build badge](https://api.travis-ci.org/sunng87/handlebars-rust.svg?branch=master)](https://travis-ci.org/sunng87/handlebars-rust)
  * [[ **⭐ 189 | 👁️ 11 | 🔀 9** ] botika/yarte](https://github.com/botika/yarte) — Yarte stands for **Y**et **A**nother **R**ust **T**emplate **E**ngine, is the fastest template engine. [![Build Status](https://api.travis-ci.org/botika/yarte.svg?branch=master)](https://travis-ci.org/botika/yarte)
* HTML
  * [[ **⭐ 1573 | 👁️ 18 | 🔀 159** ] Keats/tera](https://github.com/Keats/tera) — template engine based on Jinja2 and the Django template language. [![Actions Status](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [[ **⭐ 1270 | 👁️ 23 | 🔀 115** ] djc/askama](https://github.com/djc/askama) — template rendering engine based on Jinja [![build badge](https://api.travis-ci.org/djc/askama.svg?branch=master)](https://travis-ci.org/djc/askama)
  * [[ **⭐ 985 | 👁️ 19 | 🔀 62** ] lambda-fairy/maud](https://github.com/lambda-fairy/maud) — compile-time HTML templates [![build badge](https://api.travis-ci.org/lambda-fairy/maud.svg?branch=master)](https://travis-ci.org/lambda-fairy/maud)
  * [[ **⭐ 229 | 👁️ 5 | 🔀 17** ] Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) — compile-time HTML templates [![build badge](https://api.travis-ci.org/Stebalien/horrorshow-rs.svg?branch=master)](https://travis-ci.org/Stebalien/horrorshow-rs)
  * [[ **⭐ 209 | 👁️ 8 | 🔀 15** ] kaj/ructe](https://github.com/kaj/ructe) — HTML template system for Rust [![build badge](https://api.travis-ci.org/kaj/ructe.svg?branch=master)](https://travis-ci.org/kaj/ructe)
  * [[ **⭐ 11 | 👁️ 2 | 🔀 1** ] naomijub/hiccup](https://github.com/naomijub/hiccup) — template engine inpired by Clojure's Hiccup. [![Build Status](https://api.travis-ci.org/naomijub/hiccup.svg?branch=master)](https://travis-ci.org/naomijub/hiccup)
* Mustache
  * [[ **⭐ 204 | 👁️ 4 | 🔀 23** ] rustache/rustache](https://github.com/rustache/rustache) — [![build badge](https://api.travis-ci.org/rustache/rustache.svg?branch=master)](https://travis-ci.org/rustache/rustache)
* [[ **⭐ 11 | 👁️ 2 | 🔀 0** ] tailhook/marafet](https://github.com/tailhook/marafet) — Compiler for Jade-like template language to cito.js-based virtual dom

### Text processing

* [[ **⭐ 1824 | 👁️ 48 | 🔀 270** ] rust-lang/regex](https://github.com/rust-lang/regex) — Regular expressions (RE2 style) [![build badge](https://api.travis-ci.com/rust-lang/regex.svg?branch=master)](https://travis-ci.org/rust-lang/regex)
* [[ **⭐ 422 | 👁️ 16 | 🔀 28** ] greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) — Natural language detection library based on trigrams [![build badge](https://api.travis-ci.org/greyblake/whatlang-rs.svg?branch=master)](https://travis-ci.org/greyblake/whatlang-rs)
* [[ **⭐ 178 | 👁️ 8 | 🔀 18** ] BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) — Elastic tab stops (i.e., text column alignment) [![build badge](https://api.travis-ci.org/BurntSushi/tabwriter.svg?branch=master)](https://travis-ci.org/BurntSushi/tabwriter)
* [[ **⭐ 166 | 👁️ 6 | 🔀 21** ] mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] — Word wrap text (with support for hyphenation) [![build badge](https://api.travis-ci.org/mgeisler/textwrap.svg?branch=master)](https://travis-ci.org/mgeisler/textwrap)
* [[ **⭐ 156 | 👁️ 9 | 🔀 12** ] BurntSushi/suffix](https://github.com/BurntSushi/suffix) — Linear time suffix array construction (with Unicode support) [![build badge](https://api.travis-ci.org/BurntSushi/suffix.svg?branch=master)](https://travis-ci.org/BurntSushi/suffix)
* [[ **⭐ 66 | 👁️ 2 | 🔀 3** ] ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) — A reader that allows forwards, backwards and random navigations through the lines of huge files without consuming iterators [![build badge](https://api.travis-ci.org/ps1dr3x/easy_reader.svg?branch=master)](https://travis-ci.org/ps1dr3x/easy_reader)
* [[ **⭐ 59 | 👁️ 3 | 🔀 3** ] Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] – Generic string + iterable joining [![build badge](https://api.travis-ci.org/Lucretiel/joinery.svg?branch=master)](https://travis-ci.org/Lucretiel/joinery)
* [[ **⭐ 30 | 👁️ 2 | 🔀 1** ] Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - Rust edit distance routines accelerated using SIMD; supports fast Hamming, Levenshtein, restricted Damerau-Levenshtein, etc. distance calculations and string search [![build badge](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [[ **⭐ 26 | 👁️ 1 | 🔀 1** ] pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) — Construct [n-grams](https://en.wikipedia.org/wiki/N-gram) from arbitrary iterators [![build badge](https://api.travis-ci.org/pwoolcoc/ngrams.svg?branch=master)](https://travis-ci.org/pwoolcoc/ngrams)
* [[ **⭐ 17 | 👁️ 2 | 🔀 3** ] yaa110/rake-rs](https://github.com/yaa110/rake-rs) — Multilingual implementation of RAKE algorithm for Rust [![build badge](https://api.travis-ci.org/yaa110/rake-rs.svg?branch=master)](https://travis-ci.org/yaa110/rake-rs)
* [strsim-rs](https://crates.io/crates/strsim) — String similarity metrics [![build badge](https://api.travis-ci.org/dguo/strsim-rs.svg?branch=master)](https://travis-ci.org/dguo/strsim-rs)

### Text search

* [[ **⭐ 13018 | 👁️ 169 | 🔀 419** ] meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) — Ultra relevant, instant and typo-tolerant full-text search API. [![Build Status](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [[ **⭐ 4636 | 👁️ 132 | 🔀 270** ] tantivy-search/tantivy](https://github.com/tantivy-search/tantivy) [[tantivy](https://crates.io/crates/tantivy)] — [![build badge](https://api.travis-ci.org/tantivy-search/tantivy.svg?branch=master)](https://travis-ci.org/tantivy-search/tantivy)
* [[ **⭐ 1032 | 👁️ 30 | 🔀 75** ] BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] — [![build badge](https://api.travis-ci.org/BurntSushi/fst.svg?branch=master)](https://travis-ci.org/BurntSushi/fst)
* [[ **⭐ 356 | 👁️ 26 | 🔀 29** ] minio/minsql](https://github.com/minio/minsql) — High-performance log search engine. [![build badge](https://api.travis-ci.org/minio/minsql.svg?branch=master)](https://travis-ci.org/minio/minsql)
* [[ **⭐ 79 | 👁️ 2 | 🔀 13** ] andylokandy/simsearch-rs](https://github.com/andylokandy/simsearch-rs) [[simsearch](https://crates.io/crates/simsearch)] — A simple and lightweight fuzzy search engine that works in memory, searching for similar strings
* [[ **⭐ 64 | 👁️ 8 | 🔀 1** ] CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)]

### Unsafe

* [zerocopy](https://crates.io/crates/zerocopy) — Utilities for safely reinterpreting arbitrary byte sequences as native Rust types

### Virtualization

* [[ **⭐ 169 | 👁️ 10 | 🔀 18** ] beneills/quantum](https://github.com/beneills/quantum) — Advanced Rust quantum computer simulator [![build badge](https://api.travis-ci.org/beneills/quantum.svg?branch=master)](https://travis-ci.org/beneills/quantum)
* [[ **⭐ 111 | 👁️ 8 | 🔀 25** ] unicorn-rs/unicorn-rs](https://github.com/unicorn-rs/unicorn-rs) — Rust bindings for the unicorn CPU emulator [![Build Status](https://api.travis-ci.org/ekse/unicorn-rs.svg?branch=master)](https://travis-ci.org/ekse/unicorn-rs)
* [[ **⭐ 48 | 👁️ 4 | 🔀 5** ] saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) — Hardware-accelerated virtualization on OS X
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) CrOSVM — Enables Chrome OS to run Linux apps inside a fast, secure virtualized environment

### Web programming

See also [Are we web yet?](https://www.arewewebyet.org) and [Rust web framework comparison](https://github.com/flosse/rust-web-framework-comparison).

* Client-side / WASM
  * [[ **⭐ 1224 | 👁️ 25 | 🔀 25** ] sauron](https://github.com/ivanceras/sauron) - Client side web framework which closely adheres to The Elm Architecture. [![Build Status](https://api.travis-ci.org/ivanceras/sauron.svg?branch=master)](https://travis-ci.org/ivanceras/sauron)
  * [cargo-web](https://crates.io/crates/cargo-web) — A Cargo subcommand for the client-side Web [![Build Status](https://api.travis-ci.org/koute/cargo-web.svg?branch=master)](https://travis-ci.org/koute/cargo-web)
  * [seed](https://seed-rs.org/) — A Rust framework for creating web apps
  * [stdweb](https://crates.io/crates/stdweb) — A standard library for the client-side Web [![Build Status](https://api.travis-ci.org/koute/stdweb.svg?branch=master)](https://travis-ci.org/koute/stdweb)
  * [yew](https://crates.io/crates/yew) — Rust framework for making client web apps
* HTTP Client
  * [[ **⭐ 7745 | 👁️ 165 | 🔀 996** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [![build badge](https://api.travis-ci.org/hyperium/hyper.svg?branch=master)](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 3894 | 👁️ 64 | 🔀 497** ] seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) — an ergonomic HTTP Client for Rust. [![build badge](https://api.travis-ci.org/seanmonstar/reqwest.svg?branch=master)](https://travis-ci.org/seanmonstar/reqwest)
  * [[ **⭐ 1412 | 👁️ 29 | 🔀 133** ] async-graphql](https://github.com/async-graphql/async-graphql) - A GraphQL server library implemented in Rust [![Build Status](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [[ **⭐ 699 | 👁️ 17 | 🔀 168** ] alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) — [libcurl](https://curl.se/libcurl/) bindings [![build badge](https://api.travis-ci.com/alexcrichton/curl-rust.svg?branch=master)](https://travis-ci.org/alexcrichton/curl-rust)
  * [[ **⭐ 624 | 👁️ 15 | 🔀 69** ] graphql-client](https://github.com/graphql-rust/graphql-client) — Typed, correct GraphQL requests and responses in Rust. [![Github actions Status](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) — Beautiful and elegant Yukikaze is little HTTP client library based on hyper. [![build badge](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
* HTTP Server
  * [[ **⭐ 13036 | 👁️ 267 | 🔀 886** ] Rocket](https://github.com/SergioBenitez/Rocket) — Rocket is web framework for Rust (nightly) with a focus on ease-of-use, expressability, and speed [![build badge](https://api.travis-ci.org/SergioBenitez/Rocket.svg?branch=master)](https://travis-ci.org/SergioBenitez/Rocket)
  * [[ **⭐ 10963 | 👁️ 216 | 🔀 1195** ] actix/actix-web](https://github.com/actix/actix-web) — A lightweight async web framework for Rust with websocket support [![build badge](https://api.travis-ci.org/actix/actix-web.svg?branch=master)](https://travis-ci.org/actix/actix-web)
  * [[ **⭐ 7745 | 👁️ 165 | 🔀 996** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [![build badge](https://api.travis-ci.org/hyperium/hyper.svg?branch=master)](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 5890 | 👁️ 167 | 🔀 405** ] Iron](https://github.com/iron/iron) — A middleware-based server framework [![build badge](https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master)](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 3625 | 👁️ 62 | 🔀 320** ] Juniper](https://github.com/graphql-rust/juniper) — GraphQL server library for Rust [![build badge](https://api.travis-ci.org/graphql-rust/juniper.svg?branch=master)](https://travis-ci.org/graphql-rust/juniper)
  * [[ **⭐ 2679 | 👁️ 36 | 🔀 105** ] vi/websocat](https://github.com/vi/websocat) — CLI for interacting with WebSockets, with functionality of Netcat, Curl and Socat. [![build badge](https://api.travis-ci.org/vi/websocat.svg?branch=master)](https://travis-ci.org/vi/websocat)
  * [[ **⭐ 1799 | 👁️ 44 | 🔀 114** ] Gotham](https://github.com/gotham-rs/gotham) — A flexible web framework that does not sacrifice safety, security or speed. [![build badge](https://api.travis-ci.org/gotham-rs/gotham.svg?branch=master)](https://travis-ci.org/gotham-rs/gotham)
  * [[ **⭐ 1180 | 👁️ 30 | 🔀 178** ] housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) — lightweight, event-driven WebSockets for Rust [![build badge](https://api.travis-ci.org/housleyjk/ws-rs.svg?branch=stable)](https://travis-ci.org/housleyjk/ws-rs)
  * [[ **⭐ 949 | 👁️ 39 | 🔀 54** ] carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] — A fast, boilerplate free, web framework for Rust [![build badge](https://api.travis-ci.org/carllerche/tower-web.svg?branch=master)](https://travis-ci.org/carllerche/tower-web)
  * [[ **⭐ 917 | 👁️ 31 | 🔀 173** ] rust-websocket](https://github.com/websockets-rs/rust-websocket) — A framework for dealing with WebSocket connections (both clients and servers) [![build badge](https://api.travis-ci.org/websockets-rs/rust-websocket.svg?branch=master)](https://travis-ci.org/websockets-rs/rust-websocket)
  * [[ **⭐ 869 | 👁️ 26 | 🔀 53** ] Ogeon/rustful](https://github.com/Ogeon/rustful) — A RESTful web framework for Rust  [![build badge](https://api.travis-ci.org/Ogeon/rustful.svg?branch=master)](https://travis-ci.org/Ogeon/rustful)
  * [[ **⭐ 642 | 👁️ 14 | 🔀 83** ] handlebars-rust](https://github.com/sunng87/handlebars-rust) — an Iron web framework middleware. [![build badge](https://api.travis-ci.org/sunng87/handlebars-iron.svg?branch=master)](https://travis-ci.org/sunng87/handlebars-iron)
  * [[ **⭐ 620 | 👁️ 13 | 🔀 85** ] snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) — Lightweight stream-based WebSocket implementation for Rust.
  * [[ **⭐ 617 | 👁️ 21 | 🔀 78** ] tomaka/rouille](https://github.com/tomaka/rouille) — Web framework in Rust [![build badge](https://api.travis-ci.org/tomaka/rouille.svg?branch=master)](https://travis-ci.org/tomaka/rouille)
  * [[ **⭐ 614 | 👁️ 30 | 🔀 44** ] daogangtang/sapper](https://github.com/daogangtang/sapper) — A lightweight web framework built on async hyper, implemented in Rust language. [![build badge](https://api.travis-ci.org/daogangtang/sapper.svg?branch=master)](https://travis-ci.org/daogangtang/sapper)
  * [[ **⭐ 603 | 👁️ 16 | 🔀 45** ] Rustless](https://github.com/rustless/rustless) — A REST-like API micro-framework inspired by [Grape](https://github.com/ruby-grape/grape) and [Hyper](https://github.com/hyperium/hyper) [![build badge](https://api.travis-ci.org/rustless/rustless.svg?branch=master)](https://travis-ci.org/rustless/rustless)
  * [[ **⭐ 508 | 👁️ 14 | 🔀 78** ] tiny-http](https://github.com/tiny-http/tiny-http) — Low level HTTP server library [![build badge](https://api.travis-ci.org/tiny-http/tiny-http.svg?branch=master)](https://travis-ci.org/tiny-http/tiny-http)
  * [[ **⭐ 226 | 👁️ 7 | 🔀 44** ] GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) — JSON Web Token implementation in Rust. [![build badge](https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master)](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 91 | 👁️ 5 | 🔀 5** ] danclive/sincere](https://github.com/danclive/sincere) — A micro web framework for Rust(stable) based on hyper and multithreading. [![build badge](https://api.travis-ci.org/danclive/sincere.svg?branch=master)](https://travis-ci.org/danclive/sincere)
  * [[ **⭐ 75 | 👁️ 5 | 🔀 11** ] Saphir](https://github.com/richerarc/saphir) — A progressive web framework with low-level control, without the pain.
  * [[ **⭐ 63 | 👁️ 5 | 🔀 18** ] actix/sockjs](https://github.com/actix/sockjs) — A [SockJS](https://github.com/sockjs) server for Rust [![build badge](https://api.travis-ci.org/actix/sockjs.svg?branch=master)](https://travis-ci.org/actix/sockjs)
  * [[ **⭐ 52 | 👁️ 2 | 🔀 2** ] oltdaniel/zap](https://github.com/oltdaniel/zap) — A lightning fast http framework for Rust
  * [[ **⭐ 26 | 👁️ 1 | 🔀 8** ] vityafx/urlshortener-rs](https://github.com/vityafx/urlshortener-rs) [[urlshortener](https://crates.io/crates/urlshortener)] — A very simple urlshortener library for Rust. [![build badge](https://api.travis-ci.org/vityafx/urlshortener-rs.svg?branch=master)](https://travis-ci.org/vityafx/urlshortener-rs)
  * [[ **⭐ 9 | 👁️ 8 | 🔀 4** ] bitwyre/websocket_core](https://github.com/bitwyre/websocket_core) — Websocket generic server library for periodic message broadcast. [![build badge](https://github.com/bitwyre/websocket_core/workflows/Build/badge.svg?branch=master)](https://github.com/bitwyre/websocket_core/actions)
  * [branca](https://crates.io/crates/branca) — A Pure Rust implementation of Branca for Authenticated and Encrypted API tokens. [![build badge](https://api.travis-ci.org/return/branca.svg?branch=master)](https://travis-ci.org/return/branca)
  * [Nickel](https://github.com/nickel-org/nickel.rs/) — inspired by [Express](http://expressjs.com/) [![build badge](https://api.travis-ci.org/nickel-org/nickel.rs.svg?branch=master)](https://travis-ci.org/nickel-org/nickel.rs)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
* Miscellaneous
  * [[ **⭐ 911 | 👁️ 24 | 🔀 41** ] osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - A policy engine for authorization that's embedded in your application. [![Build Status](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [[ **⭐ 661 | 👁️ 12 | 🔀 52** ] utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] — A library to extract useful data from HTML documents, suitable for web scraping. [![Build Status](https://api.travis-ci.org/utkarshkukreti/select.rs.svg?branch=master)](https://travis-ci.org/utkarshkukreti/select.rs)
  * [[ **⭐ 561 | 👁️ 10 | 🔀 33** ] pyros2097/rust-embed](https://github.com/pyros2097/rust-embed) — A macro to embed static assets into the rust binary
  * [[ **⭐ 175 | 👁️ 18 | 🔀 10** ] cargonauts](https://github.com/cargonauts-rs/cargonauts) — A web framework intended for building maintainable, well-factored web apps.
  * [[ **⭐ 83 | 👁️ 6 | 🔀 36** ] softprops/openapi](https://github.com/softprops/openapi) — A library for processing openapi spec files
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] — A library similar to Python's BeautifulSoup, designed to enable quick and easy manipulation and querying of HTML documents. [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [tbot](https://gitlab.com/SnejUgal/tbot) - Make cool Telegram bots with Rust easily [![pipeline status](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - An elegant Telegram bots framework for Rust [![Build Status](https://github.com/teloxide/teloxide/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/teloxide/teloxide/actions)
* Reverse Proxy
  * [[ **⭐ 1349 | 👁️ 45 | 🔀 102** ] sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] — A HTTP reverse proxy. [![Build Status](https://api.travis-ci.org/sozu-proxy/sozu.svg?branch=master)](https://travis-ci.org/sozu-proxy/sozu)
* Static Site Generators
  * [[ **⭐ 6638 | 👁️ 85 | 🔀 475** ] getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] — An opinionated static site generator with everything built-in. [![Build Status](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [[ **⭐ 944 | 👁️ 25 | 🔀 82** ] cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) — Static site generator written in Rust [![Build Status](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [[ **⭐ 50 | 👁️ 4 | 🔀 4** ] leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] — A simple, parallelized blog generator. [![build badge](https://api.travis-ci.org/quadrupleslap/leven.svg?branch=master)](https://travis-ci.org/quadrupleslap/leven)
  * [[ **⭐ 35 | 👁️ 3 | 🔀 5** ] FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) — Static site generator from markdown files.

## Registries

A registry allows you to publish your Rust libraries as crate packages, to share them with others publicly and privately.

* [Crates](https://crates.io) — The official public registry for Rust/Cargo.
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/cargo-registry/) — A fully managed package management SaaS, with first-class support for public and private Cargo/Rust registries (plus many others). Has a generous free-tier and is also completely free for open-source.

## Resources

* Benchmarks
  * [[ **⭐ 62 | 👁️ 7 | 🔀 16** ] TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) — Rust implementations for the [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) [![build badge](https://api.travis-ci.org/TeXitoi/benchmarksgame-rs.svg?branch=master)](https://travis-ci.org/TeXitoi/benchmarksgame-rs)
* Decks & Presentations
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) — Presented by [Julia Evans](https://twitter.com/@b0rk) @ Rustconf 2016.
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) — Presented by [Michael Gattozzi](https://github.com/mgattozzi) @ RustConf 2017
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) — Presented by [Nicholas Matsakis](https://github.com/nikomatsakis) @ C++Now 2018
* Learning
  * [[ **⭐ 15432 | 👁️ 247 | 🔀 2032** ] Rustlings](https://github.com/rust-lang/rustlings) — small exercises to get you used to reading and writing Rust code
  * [[ **⭐ 6430 | 👁️ 298 | 🔀 436** ] rust-learning](https://github.com/ctjhoa/rust-learning) — A collection of useful resources to learn Rust
  * [[ **⭐ 5845 | 👁️ 138 | 🔀 241** ] Easy Rust](https://github.com/Dhghomon/easy_rust) - Learn Rust in easy English.
  * [[ **⭐ 2388 | 👁️ 122 | 🔀 72** ] Idiomatic Rust](https://github.com/mre/idiomatic-rust) —  A peer-reviewed collection of articles/talks/repos which teach idiomatic Rust.
  * [[ **⭐ 1398 | 👁️ 41 | 🔀 37** ] stdx](https://github.com/brson/stdx) — Learn these crates first as an extension to std
  * [[ **⭐ 431 | 👁️ 24 | 🔀 25** ] Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - A community curated list of livestreams about Rust.
  * [[ **⭐ 113 | 👁️ 8 | 🔀 18** ] Rust Gym](https://github.com/warycat/rustgym) - A big collection of coding interview problems solved in Rust.
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) — A list of recommended resources voted by the programming community.
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) — A list of helpful Rust mentors willing to take mentees and eductate them about Rust and programming.
  * [exercism.io](https://exercism.io/tracks/rust) — programming exercises that help you learn new concepts in Rust.
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) — in-depth exploration of Rust's memory management rules, through implementing a few different types of list structures.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) — A collection of simple examples that demonstrate good practices to accomplish common programming tasks, using the crates of the Rust ecosystem.
  * [Rust Online Courses at Classpert](https://classpert.com/topics/rust) — A list of Rust online courses (paid) from Classpert Online Course Search
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) — A quick introduction to Rust for experienced software developers.
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) — A video series by [Carol Nichols](https://github.com/carols10cents) and [Jake Goulding](https://github.com/shepmaster) (paid)
  * [University of Pennsylvania's Comp Sci Rust Programming Course](http://cis198-2016s.github.io/schedule/)
  * [Build a language VM](https://blog.subnetzero.io/post/building-language-vm-part-00/)
  * [Code Playground](https://codeplayground.app) - Interactively edit & play rust snippets on your iPhone and iPad devices.
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - A book that introduces to Rust language.  
* Podcasts
* [[ **⭐ 4796 | 👁️ 189 | 🔀 209** ] Rust Design Patterns](https://github.com/rust-unofficial/patterns)
* [[ **⭐ 1219 | 👁️ 74 | 🔀 95** ] RustBooks](https://github.com/sger/RustBooks) — list of RustBooks
  * [New Rustacean](https://newrustacean.com) — A podcast about learning Rust
  * [Rustacean Station](https://rustacean-station.org/) — A community project for creating podcast content for Rust
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t)
* [Rust Guidelines](http://aturon.github.io/)
* [Rust Subreddit](https://www.reddit.com/r/rust/) — A subreddit(forum) where rust related questions, articles and resources are posted and discussed
* [Rust Servers, Services and Apps - MEAP](http://mng.bz/XdWl) - Build backend servers, services, and front-ends in Rust to get fast, reliable, and maintainable applications.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


---
> STATUSES UPDATED: **2021-04-05 03:59@UTC** *(by [markdown-github-status](https://github.com/eGust/markdown-github-status))*
