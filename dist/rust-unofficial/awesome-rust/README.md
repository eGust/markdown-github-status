# Awesome Rust [<img src="https://api.travis-ci.org/rust-unofficial/awesome-rust.svg?branch=master">](https://travis-ci.org/rust-unofficial/awesome-rust)

A curated list of Rust code and resources.

If you want to contribute, please read [this](CONTRIBUTING.md).

## Table of contents

- [Awesome Rust <img src="https://api.travis-ci.org/rust-unofficial/awesome-rust.svg?branch=master">](#awesome-rust-img-src%22httpsapitravis-ciorgrust-unofficialawesome-rustsvgbranchmaster%22)
  - [Table of contents](#table-of-contents)
  - [Applications](#applications)
    - [Audio](#audio)
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
    - [Utilities](#utilities)
    - [Video](#video)
    - [Virtualization](#virtualization)
    - [Window managers](#window-managers)
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
    - [Audio](#audio-1)
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

* [[ **⭐ 40557 | 👁️ 1403 | 🔀 1881** ] denoland/deno](https://github.com/denoland/deno) — A secure JavaScript/TypeScript runtime built with V8, Rust, and Tokio [<img src="https://api.travis-ci.com/denoland/deno.svg?branch=master">](https://travis-ci.com/denoland/deno)
* [[ **⭐ 19747 | 👁️ 348 | 🔀 924** ] alacritty](https://github.com/jwilm/alacritty) — A cross-platform, GPU enhanced terminal emulator
* [[ **⭐ 15336 | 👁️ 494 | 🔀 2298** ] Servo](https://github.com/servo/servo) — A prototype web browser engine
* [[ **⭐ 2244 | 👁️ 61 | 🔀 83** ] cloudflare/boringtun](https://github.com/cloudflare/boringtun) — A Userspace WireGuard VPN Implementation [<img src="https://img.shields.io/badge/crates.io-v0.2.0-orange.svg">](https://crates.io/crates/boringtun)
* [[ **⭐ 1896 | 👁️ 81 | 🔀 39** ] notty](https://github.com/withoutboats/notty) — A new kind of terminal
* [[ **⭐ 576 | 👁️ 40 | 🔀 44** ] Fractalide](https://github.com/fractalide/fractalide) — Simple Rust Microservices
* [[ **⭐ 528 | 👁️ 33 | 🔀 74** ] linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) — Ultralight service mesh for Kubernetes.
* [[ **⭐ 479 | 👁️ 29 | 🔀 36** ] jedisct1/flowgger](https://github.com/awslabs/flowgger) — A fast, simple and lightweight data collector
* [[ **⭐ 454 | 👁️ 13 | 🔀 26** ] fcsonline/drill](https://github.com/fcsonline/drill) — A HTTP load testing application inspired by Ansible syntax [<img src="https://api.travis-ci.org/fcsonline/drill.svg?branch=master">](https://travis-ci.org/fcsonline/drill)
* [[ **⭐ 352 | 👁️ 18 | 🔀 9** ] ivanceras/diwata](https://github.com/ivanceras/diwata) — A database administration tool for postgresql [<img src="https://api.travis-ci.org/ivanceras/diwata.svg">](https://travis-ci.org/ivanceras/diwata)
* [[ **⭐ 173 | 👁️ 11 | 🔀 34** ] kytan](https://github.com/changlan/kytan) - High Performance Peer-to-Peer VPN 
* [[ **⭐ 135 | 👁️ 14 | 🔀 3** ] Factotum](https://github.com/snowplow/factotum) — [A system to programmatically run data pipelines](https://snowplowanalytics.com/blog/2016/04/09/introducing-factotum-data-pipeline-runner/) [<img src="https://api.travis-ci.org/snowplow/factotum.svg?branch=master">](https://travis-ci.org/snowplow/factotum)
* [[ **⭐ 111 | 👁️ 4 | 🔀 2** ] Weld](https://github.com/serayuzgur/weld) — Full fake REST API generator [<img src="https://api.travis-ci.org/serayuzgur/weld.svg">](https://travis-ci.org/serayuzgur/weld)
* [[ **⭐ 83 | 👁️ 8 | 🔀 6** ] Herd](https://github.com/imjacobclark/Herd) — an experimental HTTP load testing application
* [[ **⭐ 76 | 👁️ 3 | 🔀 2** ] asm-cli-rust](https://github.com/cch123/asm-cli-rust) — An interactive assembly shell written in rust.
* [[ **⭐ 63 | 👁️ 7 | 🔀 4** ] nicohman/eidolon](https://github.com/nicohman/eidolon) — A steam and drm-free game registry and launcher for linux and macosx [<img src="https://api.travis-ci.org/nicohman/eidolon.svg?branch=master">](https://travis-ci.org/nicohman/eidolon)
* [[ **⭐ 58 | 👁️ 8 | 🔀 3** ] andschwa/rust-genetic-algorithm](https://github.com/andschwa/rust-genetic-algorithm) — A genetic algorithm for academic benchmark problems [<img src="https://api.travis-ci.org/andschwa/rust-genetic-algorithm.svg?branch=master">](https://travis-ci.org/andschwa/rust-genetic-algorithm)
* [[ **⭐ 33 | 👁️ 3 | 🔀 3** ] kbknapp/docli](https://github.com/kbknapp/docli-rs) — A command line utility for managing DigitalOcean infrastructure [<img src="https://api.travis-ci.org/kbknapp/docli-rs.svg?branch=master">](https://travis-ci.org/kbknapp/docli-rs)
* [[ **⭐ 26 | 👁️ 2 | 🔀 6** ] intecture/api](https://github.com/intecture/api) — an API-driven server management and configuration tool [<img src="https://api.travis-ci.org/intecture/api.svg?branch=master">](https://travis-ci.org/intecture/api)
* [[ **⭐ 21 | 👁️ 2 | 🔀 1** ] darrint/device-blocker](https://github.com/darrint/device-blocker) — Limit screen time to children's various mobile devices by blocking internet access on the family Wifi router.
* [[ **⭐ 17 | 👁️ 6 | 🔀 10** ] Sandstorm Collections App](https://github.com/sandstorm-io/collections-app)
* [[ **⭐ 6 | 👁️ 1 | 🔀 1** ] AnderEnder/s3find-rs](https://github.com/AnderEnder/s3find-rs) — A command line utility to walk an Amazon S3 hierarchy, an analog of find for Amazon S3 [<img src="https://api.travis-ci.org/AnderEnder/s3find-rs.svg?branch=master">](https://travis-ci.org/AnderEnder/s3find-rs)
* [[ **⭐ 6 | 👁️ 1 | 🔀 5** ] dlecan/generic-dns-update](https://github.com/dlecan/generic-dns-update) — A tool to update DNS zonefiles with your IP address [<img src="https://api.travis-ci.org/dlecan/generic-dns-update.svg?branch=master">](https://travis-ci.org/dlecan/generic-dns-update)
* [habitat](https://www.habitat.sh) — An tool created by [Chef](https://www.chef.io/) to build, deploy, and manage applications.
* [limonite](https://crates.io/crates/limonite) — static blog/website generator [<img src="https://api.travis-ci.org/qmx/limonite.svg?branch=master">](https://travis-ci.org/qmx/limonite)
* [MaidSafe](https://maidsafe.net) — A decentralized platform.
* [mdBook](https://crates.io/crates/mdbook) — A command line utility to create books from markdown files [<img src="https://api.travis-ci.com/azerupi/mdBook.svg?branch=master">](https://travis-ci.org/azerupi/mdBook)
* [Pijul](https://pijul.org) — A patch-based distributed version control system
* [rsign](https://crates.io/crates/rsign) — A simple command-line tool used to generate/sign/verify digital signatures designed to be compatible with Minisign  [![Codeship Status for danielrangel/rsign](https://app.codeship.com/projects/60b28d80-7645-0135-4402-1639b58199d0/status?branch=master)](https://app.codeship.com/projects/244452)
* [trust-dns](https://crates.io/crates/trust-dns) — A DNS-server [<img src="https://api.travis-ci.org/bluejekyll/trust-dns.svg?branch=master">](https://travis-ci.org/bluejekyll/trust-dns)

### Audio

* [[ **⭐ 379 | 👁️ 14 | 🔀 20** ] Polaris](https://github.com/agersant/polaris) — A music streaming application.  [<img src="https://api.travis-ci.org/agersant/polaris.svg?branch=master">](https://travis-ci.org/agersant/polaris)
* [[ **⭐ 14 | 👁️ 1 | 🔀 0** ] indiscipline/zrtstr](https://github.com/indiscipline/zrtstr) — A command line utility for checking if stereo wav files are faux-stereo (i.e. have identical channels) and converting such files to mono. [<img src="https://api.travis-ci.org/indiscipline/zrtstr.svg?branch=master">](https://travis-ci.org/indiscipline/zrtstr)

### Cryptocurrencies

* [[ **⭐ 13660 | 👁️ 626 | 🔀 2023** ] Libra](https://github.com/libra/libra) — Libra’s mission is to enable a simple global currency and financial infrastructure that empowers billions of people.
* [[ **⭐ 5781 | 👁️ 360 | 🔀 1414** ] Parity-Ethereum](https://github.com/paritytech/parity-ethereum) — Fast, light, and robust Ethereum client
* [[ **⭐ 4114 | 👁️ 419 | 🔀 1607** ] zcash](https://github.com/zcash/zcash) — Zcash is an implementation of the "Zerocash" protocol.
* [[ **⭐ 1770 | 👁️ 153 | 🔀 493** ] Substrate](https://github.com/paritytech/substrate) — Generic modular blockchain template written in Rust
* [[ **⭐ 829 | 👁️ 94 | 🔀 264** ] Holochain](https://github.com/holochain/holochain-rust) — Scalable P2P alternative to blockchain for all those distributed apps you always wanted to build [![Build Status](https://api.travis-ci.com/holochain/holochain-rust.svg?branch=master)](https://travis-ci.com/holochain/holochain-rust)
* [[ **⭐ 706 | 👁️ 119 | 🔀 169** ] Polkadot](https://github.com/paritytech/polkadot) — Heterogeneous multi‑chain technology with pooled security
* [[ **⭐ 637 | 👁️ 51 | 🔀 115** ] Nervos CKB](https://github.com/nervosnetwork/ckb) — Nervos CKB is a public permissionless blockchain, the common knowledge layer of Nervos network.
* [[ **⭐ 578 | 👁️ 68 | 🔀 148** ] Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) — The Parity Bitcoin client [<img src="https://api.travis-ci.org/paritytech/parity-bitcoin.svg?branch=master">](https://travis-ci.com/paritytech/parity-bitcoin)
* [[ **⭐ 453 | 👁️ 41 | 🔀 49** ] nearprotocol/nearcore](https://github.com/nearprotocol/nearcore) — decentralized smart-contract platform for low-end mobile devices.
* [[ **⭐ 292 | 👁️ 33 | 🔀 82** ] Parity-Bridge](https://github.com/paritytech/parity-bridge) — Bridge between any two ethereum-based networks
* [[ **⭐ 187 | 👁️ 42 | 🔀 62** ] rust-cardano](https://github.com/input-output-hk/rust-cardano) — Rust implementation of Cardano primitives, helpers, and related applications
* [[ **⭐ 130 | 👁️ 18 | 🔀 30** ] ChainX](https://github.com/chainx-org/ChainX) — Fully Decentralized Interchain Crypto Asset Management on Polkadot.
* [[ **⭐ 106 | 👁️ 23 | 🔀 16** ] Parity-Zcash](https://github.com/paritytech/parity-zcash) — Rust implementation of the Zcash protocol
* [[ **⭐ 57 | 👁️ 7 | 🔀 17** ] ethaddrgen](https://github.com/Limeth/ethaddrgen) — Custom Ethereum vanity address generator made in Rust [<img src="https://api.travis-ci.org/Limeth/ethaddrgen.svg?branch=master">](https://travis-ci.org/Limeth/ethaddrgen)
* [[ **⭐ 57 | 👁️ 15 | 🔀 7** ] Nimiq](https://github.com/nimiq/core-rs) — Rust implementation of Nimiq node [<img src="https://api.travis-ci.com/nimiq/core-rs.svg?branch=master">](https://travis-ci.com/nimiq/core-rs)
* [[ **⭐ 51 | 👁️ 16 | 🔀 30** ] cardano-cli](https://github.com/input-output-hk/cardano-cli) — Cardano Command Line Interface (CLI)
* [[ **⭐ 40 | 👁️ 2 | 🔀 8** ] coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) — Coinbase pro client in Rust, supports sync/async/websocket [<img src="https://api.travis-ci.org/inv2004/coinbase-pro-rs.svg?branch=master">](https://travis-ci.org/inv2004/coinbase-pro-rs)
* [[ **⭐ 31 | 👁️ 4 | 🔀 23** ] infincia/bip39-rs](https://github.com/infincia/bip39-rs) — Rust implementation of BIP39.
* [[ **⭐ 16 | 👁️ 5 | 🔀 18** ] Joystream](https://github.com/Joystream/substrate-runtime-joystream) — A user governed video platform.
* [[ **⭐ 15 | 👁️ 6 | 🔀 4** ] Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) — A Rust library for working with Bitcoin SV .
* [[ **⭐ 7 | 👁️ 1 | 🔀 4** ] hdwallet](https://github.com/jjyr/hdwallet) — BIP-32 HD wallet related key derivation utilities.
* [[ **⭐ 0 | 👁️ 1 | 🔀 3** ] rbtc](https://github.com/lucawen/rbtc) — Convert BTC to any currency and vice-versa. [<img src="https://api.travis-ci.com/lucawen/rbtc.svg?branch=master">](https://travis-ci.com/lucawen/rbtc/)
* [Grin](https://github.com/mimblewimble/grin/) — Evolution of the MimbleWimble protocol
* [wagyu](https://crates.io/crates/wagyu) — Rust library for generating cryptocurrency wallets [<img src="https://api.travis-ci.com/ArgusHQ/wagyu.svg?branch=master">](https://api.travis-ci.com/ArgusHQ/wagyu.svg?branch=master)

### Database

* [[ **⭐ 102 | 👁️ 15 | 🔀 13** ] ParityDB](https://github.com/paritytech/paritydb) — Fast and reliable database, optimised for read operation 
* [indradb](https://crates.io/crates/indradb) — Rust based graph database [<img src="https://api.travis-ci.org/indradb/indradb.svg?branch=master">](https://travis-ci.org/indradb/indradb)
* [noria](https://crates.io/crates/noria) — Dynamically changing, partially-stateful data-flow for web application backends [<img src="https://api.travis-ci.org/mit-pdos/noria.svg?branch=master">](https://travis-ci.org/mit-pdos/noria)
[<img src="https://api.travis-ci.org/paritytech/paritydb.svg?branch=master">](https://travis-ci.org/paritytech/paritydb)
* [[ **⭐ 6671 | 👁️ 317 | 🔀 985** ] tikv](https://github.com/tikv/tikv) — A distributed KV database in Rust [<img src="https://circleci.com/gh/tikv/tikv.svg?style=shield&circle-token=36bab0a8e43edb0941b31c38557d2d9d0d58f708">](https://circleci.com/gh/tikv/tikv)
* [[ **⭐ 1321 | 👁️ 43 | 🔀 72** ] seppo0010/rsedis](https://github.com/seppo0010/rsedis) — A Redis reimplementation in Rust [<img src="https://api.travis-ci.org/seppo0010/rsedis.svg?branch=master">](https://travis-ci.org/seppo0010/rsedis)
* [[ **⭐ 1135 | 👁️ 46 | 🔀 47** ] PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) — an event sourcing database engine [<img src="https://api.travis-ci.org/PumpkinDB/PumpkinDB.svg?branch=master">](https://travis-ci.org/PumpkinDB/PumpkinDB)

### Emulators

See also [crates matching keyword 'emulator'](https://crates.io/keywords/emulator).

* Commodore 64
  * [[ **⭐ 151 | 👁️ 9 | 🔀 8** ] kondrak/rust64](https://github.com/kondrak/rust64) — [<img src="https://api.travis-ci.org/kondrak/rust64.svg?branch=master">](https://travis-ci.org/kondrak/rust64)
* Gameboy
  * [[ **⭐ 742 | 👁️ 11 | 🔀 34** ] mohanson/gameboy](https://github.com/mohanson/gameboy) — Full featured Cross-platform GameBoy emulator. Forever boys!.
  * [[ **⭐ 452 | 👁️ 35 | 🔀 21** ] Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) — [<img src="https://api.travis-ci.org/Gekkio/mooneye-gb.svg?branch=master">](https://travis-ci.org/Gekkio/mooneye-gb)
  * [[ **⭐ 110 | 👁️ 5 | 🔀 11** ] mvdnes/rboy](https://github.com/mvdnes/rboy) — [<img src="https://api.travis-ci.org/mvdnes/rboy.svg?branch=master">](https://travis-ci.org/mvdnes/rboy)
  * [[ **⭐ 14 | 👁️ 2 | 🔀 1** ] NivenT/RGB](https://github.com/nivent/RGB) — [<img src="https://api.travis-ci.org/NivenT/RGB.svg?branch=master">](https://travis-ci.org/NivenT/RGB)
* NES
  * [[ **⭐ 634 | 👁️ 27 | 🔀 56** ] pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) — [<img src="https://api.travis-ci.org/pcwalton/sprocketnes.svg?branch=master">](https://travis-ci.org/pcwalton/sprocketnes)
  * [[ **⭐ 559 | 👁️ 20 | 🔀 23** ] koute/pinky](https://github.com/koute/pinky) — [<img src="https://api.travis-ci.org/koute/pinky.svg?branch=master">](https://travis-ci.org/koute/pinky)
  * [[ **⭐ 34 | 👁️ 4 | 🔀 1** ] iamsix/oxidenes](https://github.com/iamsix/oxidenes) — [<img src="https://api.travis-ci.com/iamsix/oxidenes.svg?branch=master">](https://travis-ci.org/iamsix/oxidenes)
* Playstation
  * [[ **⭐ 462 | 👁️ 22 | 🔀 18** ] simias/rustation](https://github.com/simias/rustation) — [<img src="https://api.travis-ci.org/simias/rustation.svg?branch=master">](https://travis-ci.org/simias/rustation)
* ZX Spectrum
  * [[ **⭐ 46 | 👁️ 5 | 🔀 2** ] pacmancoder/rustzx](https://github.com/pacmancoder/rustzx) — [<img src="https://api.travis-ci.org/pacmancoder/rustzx.svg?branch=master">](https://travis-ci.org/pacmancoder/rustzx)
  * [[ **⭐ 8 | 👁️ 1 | 🔀 1** ] rodrigorc/raze](https://github.com/rodrigorc/raze) — For WebAssembly, [live version here](https://rodrigorc.github.io/raze/)
* Virtual Boy
  * [[ **⭐ 206 | 👁️ 22 | 🔀 23** ] emu-rs/rustual-boy](https://github.com/emu-rs/rustual-boy) — [<img src="https://api.travis-ci.org/emu-rs/rustual-boy.svg?branch=master">](https://travis-ci.org/emu-rs/rustual-boy)
* Intel 8080 CPU
  * [[ **⭐ 20 | 👁️ 1 | 🔀 2** ] mohanson/i8080](https://github.com/mohanson/i8080) — Intel 8080 cpu emulator by Rust 
* Emulator Development tools
  * SNES
    * [[ **⭐ 6 | 👁️ 1 | 🔀 0** ] ioncodes/snesutilities](https://github.com/ioncodes/snesutilities) — ROM analyser/extractor

### Games

See also [Games Made With Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston).

* [[ **⭐ 5772 | 👁️ 220 | 🔀 190** ] citybound](https://github.com/citybound/citybound) — The city sim you deserve
* [[ **⭐ 1842 | 👁️ 49 | 🔀 68** ] cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) — A renderer for Doom, may progress to being a playable game [<img src="https://api.travis-ci.org/cristicbz/rust-doom.svg?branch=master">](https://travis-ci.org/cristicbz/rust-doom)
* [[ **⭐ 725 | 👁️ 24 | 🔀 32** ] ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) — A small 2D turn-based hexagonal strategy game [<img src="https://api.travis-ci.org/ozkriff/zemeroth.svg?branch=master">](https://travis-ci.org/ozkriff/zemeroth)
* [[ **⭐ 300 | 👁️ 24 | 🔀 18** ] Zone of Control](https://github.com/ozkriff/zoc) — A turn-based hexagonal strategy game [<img src="https://api.travis-ci.org/ozkriff/zoc.svg?branch=master">](https://travis-ci.org/ozkriff/zoc)
* [[ **⭐ 269 | 👁️ 12 | 🔀 6** ] rsaarelm/magog](https://github.com/rsaarelm/magog) — A roguelike game in Rust
* [[ **⭐ 193 | 👁️ 3 | 🔀 7** ] garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) — Extensible open world rogue like game with pixel art [<img src="https://api.travis-ci.org/garkimasera/rusted-ruins.svg?branch=master">](https://travis-ci.org/garkimasera/rusted-ruins)
* [[ **⭐ 109 | 👁️ 7 | 🔀 9** ] rhex](https://github.com/dpc/rhex) — hexagonal ascii roguelike
* [[ **⭐ 106 | 👁️ 4 | 🔀 6** ] swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) — A Sokoban implementation
* [[ **⭐ 79 | 👁️ 3 | 🔀 5** ] lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) — A minimalistic music video game which supports the BMS format [<img src="https://api.travis-ci.org/lifthrasiir/angolmois-rust.svg?branch=master">](https://travis-ci.org/lifthrasiir/angolmois-rust)
* [[ **⭐ 31 | 👁️ 2 | 🔀 0** ] Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) — Quake map renderer in Rust
* [[ **⭐ 16 | 👁️ 1 | 🔀 3** ] schulke-214/rsnake](https://github.com/schulke-214/rsnake) — Snake written in Rust.
* [[ **⭐ 14 | 👁️ 1 | 🔀 0** ] aleshaleksey/TGWM](https://github.com/aleshaleksey/TGWM) — An RPG with turned-based mechanics (work in progress) [<img src="https://api.travis-ci.org/aleshaleksey/TGWM.svg?branch=master">](https://travis-ci.org/aleshaleksey/TGWM)
* [[ **⭐ 2 | 👁️ 0 | 🔀 0** ] schulke-214/connect-four](https://github.com/schulke-214/connect-four) — A simple connect four implementation.
* [Veloren](https://gitlab.com/veloren/veloren) — An open world, open source multiplayer voxel RPG game currently in alpha development [<img src="https://gitlab.com/veloren/veloren/badges/master/pipeline.svg">](https://gitlab.com/veloren/veloren/commits/master)

### Graphics

* [[ **⭐ 1739 | 👁️ 38 | 🔀 51** ] ivanceras/svgbob](https://github.com/ivanceras/svgbob) — converts ASCII diagrams into SVG graphics [<img src="https://api.travis-ci.org/ivanceras/svgbob.svg">](https://travis-ci.org/ivanceras/svgbob)
* [[ **⭐ 1018 | 👁️ 34 | 🔀 46** ] RazrFalcon/svgcleaner](https://github.com/RazrFalcon/svgcleaner) — tidies SVG graphics
* [[ **⭐ 575 | 👁️ 22 | 🔀 35** ] RazrFalcon/resvg](https://github.com/RazrFalcon/resvg) — An SVG rendering library. [<img src="https://api.travis-ci.org/RazrFalcon/resvg.svg">](https://travis-ci.org/RazrFalcon/resvg)
* [[ **⭐ 360 | 👁️ 21 | 🔀 14** ] Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) — A ray tracer [<img src="https://api.travis-ci.org/Twinklebear/tray_rust.svg">](https://travis-ci.org/Twinklebear/tray_rust)
* [[ **⭐ 119 | 👁️ 6 | 🔀 0** ] Limeth/euclider](https://github.com/Limeth/euclider) — A real-time 4D CPU ray tracer [<img src="https://api.travis-ci.org/Limeth/euclider.svg?branch=master">](https://travis-ci.org/Limeth/euclider)
* Image processing:
  * [[ **⭐ 14 | 👁️ 1 | 🔀 3** ] spejss/Image-Processing-CLI-in-Rust](https://github.com/spejss/Image-Processing-CLI-in-Rust) — CLI for processing images, generating histograms. [![Build Status](https://api.travis-ci.org/spejss/Image-Processing-CLI-in-Rust.svg?branch=master)](https://travis-ci.org/spejss/Image-Processing-CLI-in-Rust)

### Industrial automation
* [[ **⭐ 118 | 👁️ 13 | 🔀 22** ] locka99/opcua](https://github.com/locka99/opcua) — A pure rust [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) library.
* [[ **⭐ 71 | 👁️ 15 | 🔀 16** ] slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) — A [tokio](https://tokio.rs)-based [modbus](http://modbus.org) library. [![Build Status](https://api.travis-ci.org/slowtec/tokio-modbus.svg?branch=master)](https://travis-ci.org/slowtec/tokio-modbus)
* [[ **⭐ 7 | 👁️ 1 | 🔀 1** ] BiancoRoyal/modbus-iiot-rust](https://github.com/BiancoRoyal/modbus-iiot-rust) — A pure rust [modbus](http://modbus.org) library with no or less dependencies. [![Build Status](https://api.travis-ci.org/BiancoRoyal/modbus-iiot-rust.svg?branch=master)](https://travis-ci.org/BiancoRoyal/modbus-iiot-rust)

### Observability

* [[ **⭐ 3246 | 👁️ 52 | 🔀 160** ] timberio/vector](https://github.com/timberio/vector) - A High-Performance, Logs, Metrics, & Events Router.

### Operating systems

See also [A comparison of operating systems written in Rust](https://github.com/flosse/rust-os-comparison).

* [[ **⭐ 2091 | 👁️ 131 | 🔀 54** ] nebulet/nebulet](https://github.com/nebulet/nebulet) — A microkernel that implements a WebAssembly "usermode" that runs in Ring 0.
* [[ **⭐ 1585 | 👁️ 81 | 🔀 214** ] tock/tock](https://github.com/tock/tock) — A secure embedded operating system for Cortex-M based microcontrollers
* [[ **⭐ 356 | 👁️ 34 | 🔀 22** ] thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) — [<img src="https://api.travis-ci.org/thepowersgang/rust_os.svg?branch=master">](https://travis-ci.org/thepowersgang/rust_os)
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) — [<img   src="https://api.travis-ci.org/redox-os/redox.svg?branch=master">](https://travis-ci.org/redox-os/redox)

### Productivity

* [[ **⭐ 70 | 👁️ 5 | 🔀 1** ] BenSchZA/pier](https://github.com/BenSchZA/pier) — A central repository to manage (add, search metadata, etc.) all your one-liners, scripts, tools, and CLIs [<img src="https://api.travis-ci.com/BenSchZA/pier.svg?branch=master">](https://travis-ci.com/BenSchZA/pier)
* [eureka](https://crates.io/crates/eureka) — A CLI tool to input and store your ideas without leaving the terminal

### Security tools

* [<ERR> Gymmasssorla/anevicon](https://github.com/Hippolot/anevicon) — The most powerful UDP-based load generator, written in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/anevicon.svg?branch=master">](https://travis-ci.com/Gymmasssorla/anevicon)

* [[ **⭐ 506 | 👁️ 21 | 🔀 54** ] kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) — A semi-automatic OSINT framework and package manager [<img src="https://api.travis-ci.org/kpcyrd/sn0int.svg?branch=master">](https://travis-ci.org/kpcyrd/sn0int)
* [[ **⭐ 446 | 👁️ 14 | 🔀 35** ] kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) — A secure multithreaded packet sniffer [<img src="https://api.travis-ci.org/kpcyrd/sniffglue.svg?branch=master">](https://travis-ci.org/kpcyrd/sniffglue)
* [[ **⭐ 189 | 👁️ 11 | 🔀 11** ] kpcyrd/badtouch](https://github.com/kpcyrd/badtouch) — A scriptable network authentication cracker [<img src="https://api.travis-ci.org/kpcyrd/badtouch.svg?branch=master">](https://travis-ci.org/kpcyrd/badtouch)
* [[ **⭐ 136 | 👁️ 6 | 🔀 13** ] kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) — A TCP connection hijacker, rust rewrite of shijack [<img src="https://api.travis-ci.org/kpcyrd/rshijack.svg?branch=master">](https://travis-ci.org/kpcyrd/rshijack)
* [[ **⭐ 11 | 👁️ 2 | 🔀 3** ] arvancloud/libinjection-rs](https://github.com/arvancloud/libinjection-rs) — Rust bindings for [libinjection](https://github.com/client9/libinjection) [<img src="https://api.travis-ci.org/arvancloud/libinjection-rs.svg?branch=master">](https://travis-ci.org/arvancloud/libinjection-rs)
* [<ERR> Gymmasssorla/finshir](https://github.com/Hippolot/finshir) — A coroutines-driven Low & Slow traffic generator, written in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/finshir.svg?branch=master">](https://travis-ci.com/Gymmasssorla/finshir)
* [<ERR> Gymmasssorla/anevicon](https://github.com/Hippolot/anevicon) — The most powerful UDP-based load generator, written in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/anevicon.svg?branch=master">](https://travis-ci.com/Gymmasssorla/anevicon)
* [<ERR> Gymmasssorla/finshir](https://github.com/Hippolot/finshir) — A coroutines-driven Low & Slow traffic generator, written in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/finshir.svg?branch=master">](https://travis-ci.com/Gymmasssorla/finshir)

### System tools

* [[ **⭐ 17092 | 👁️ 156 | 🔀 342** ] sharkdp/bat](https://github.com/sharkdp/bat) — A cat(1) clone with wings. [<img src="https://api.travis-ci.org/sharkdp/bat.svg?branch=master">](https://travis-ci.org/sharkdp/bat)
* [[ **⭐ 11761 | 👁️ 125 | 🔀 305** ] sharkdp/fd](https://github.com/sharkdp/fd) — A simple, fast and user-friendly alternative to find. [![Build Status](https://api.travis-ci.org/sharkdp/fd.svg?branch=master)](https://travis-ci.org/sharkdp/fd)
* [[ **⭐ 8245 | 👁️ 108 | 🔀 268** ] ogham/exa](https://github.com/ogham/exa) — A replacement for 'ls' [<img src="https://api.travis-ci.org/ogham/exa.svg?branch=master">](https://travis-ci.org/ogham/exa)
* [[ **⭐ 5324 | 👁️ 170 | 🔀 445** ] uutils/coreutils](https://github.com/uutils/coreutils) — A cross-platform Rust rewrite of the GNU coreutils [<img src="https://api.travis-ci.org/uutils/coreutils.svg?branch=master">](https://travis-ci.org/uutils/coreutils)
* [[ **⭐ 3691 | 👁️ 36 | 🔀 132** ] Peltoche/lsd](https://github.com/Peltoche/lsd) — An ls with a lot of pretty colors and awesome icons [<img src="https://api.travis-ci.org/Peltoche/lsd.svg?branch=master">](https://travis-ci.org/Peltoche/lsd)
* [[ **⭐ 2583 | 👁️ 27 | 🔀 173** ] XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) — counts the lines of code [<img src="https://img.shields.io/travis/XAMPPRocky/tokei.svg">](https://travis-ci.org/XAMPPRocky/tokei)
* [[ **⭐ 1420 | 👁️ 18 | 🔀 51** ] lotabout/skim](https://github.com/lotabout/skim) — A fuzzy finder in pure rust [<img src="https://api.travis-ci.org/lotabout/skim.svg?branch=master">](https://travis-ci.org/lotabout/skim)
* [[ **⭐ 1344 | 👁️ 19 | 🔀 62** ] watchexec](https://github.com/watchexec/watchexec) — Executes commands in response to file modifications [<img src="https://api.travis-ci.org/watchexec/watchexec.svg?branch=master">](https://travis-ci.org/watchexec/watchexec)
* [[ **⭐ 1272 | 👁️ 37 | 🔀 58** ] m4b/bingrep](https://github.com/m4b/bingrep) — Greps through binaries from various OSs and architectures, and colors them. [<img src="https://api.travis-ci.org/m4b/bingrep.svg?branch=master">](https://travis-ci.org/m4b/bingrep)
* [[ **⭐ 1172 | 👁️ 21 | 🔀 27** ] mmstick/parallel](https://github.com/mmstick/parallel) — Reimplementation of GNU Parallel
* [[ **⭐ 822 | 👁️ 56 | 🔀 118** ] redox-os/ion](https://github.com/redox-os/ion) — Next-generation system shell [<img src="https://api.travis-ci.org/redox-os/ion.svg?branch=master">](https://travis-ci.org/redox-os/ion)
* [[ **⭐ 709 | 👁️ 12 | 🔀 32** ] mitnk/cicada](https://github.com/mitnk/cicada) — A bash-like Unix shell [<img src="https://api.travis-ci.org/mitnk/cicada.svg?branch=master">](https://travis-ci.org/mitnk/cicada)
* [[ **⭐ 619 | 👁️ 29 | 🔀 25** ] Luminarys/synapse](https://github.com/Luminarys/synapse) — Flexible and fast BitTorrent daemon. [![Build Status](https://api.travis-ci.org/Luminarys/synapse.svg?branch=master)](https://travis-ci.org/Luminarys/synapse)
* [[ **⭐ 319 | 👁️ 4 | 🔀 7** ] dalance/procs](https://github.com/dalance/procs) — A modern replacement for 'ps' written by Rust [<img src="https://dev.azure.com/dalance/procs/_apis/build/status/dalance.procs?branchName=master">](https://dev.azure.com/dalance/procs/_build/results?buildId=250)
* [[ **⭐ 183 | 👁️ 7 | 🔀 7** ] mmstick/fontfinder](https://github.com/mmstick/fontfinder) — GTK3 application for previewing and installing Google's fonts
* [[ **⭐ 162 | 👁️ 7 | 🔀 4** ] lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] — xargs + awk with pattern matching support [<img src="https://api.travis-ci.org/lotabout/rargs.svg?branch=master">](https://travis-ci.org/lotabout/rargs)
* [[ **⭐ 152 | 👁️ 21 | 🔀 10** ] pop-os/popsicle](https://github.com/pop-os/popsicle) — GTK3 & CLI utility for flashing multiple USB devices in parallel
* [[ **⭐ 145 | 👁️ 5 | 🔀 4** ] ddh](https://github.com/darakian/ddh) — Fast duplicate file finder [<img src="https://api.travis-ci.org/darakian/ddh.svg?branch=master">](https://travis-ci.org/darakian/ddh)
* [[ **⭐ 125 | 👁️ 11 | 🔀 10** ] mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) — A tv series renaming application with an optional GTK3 frontend. [<img src="https://api.travis-ci.org/mmstick/tv-renamer.svg?branch=master">](https://travis-ci.org/mmstick/tv-renamer)
* [[ **⭐ 109 | 👁️ 2 | 🔀 7** ] cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) — A configurable filesystem watcher inspired by [entr](http://entrproject.org/) [<img src="https://api.travis-ci.org/cristianoliveira/funzzy.svg?branch=master">](https://travis-ci.org/cristianoliveira/funzzy)
* [[ **⭐ 107 | 👁️ 4 | 🔀 5** ] k0pernicus/zou](https://github.com/k0pernicus/zou) — A download accelerator [<img src="https://api.travis-ci.org/k0pernicus/zou.svg?branch=master">](https://travis-ci.org/k0pernicus/zou)
* [[ **⭐ 83 | 👁️ 6 | 🔀 6** ] buster/rrun](https://github.com/buster/rrun) — A command launcher for Linux, similar to gmrun  [<img src="https://api.travis-ci.org/buster/rrun.svg?branch=master">](https://travis-ci.org/buster/rrun)
* [[ **⭐ 83 | 👁️ 3 | 🔀 3** ] sitkevij/hex](https://github.com/sitkevij/hex) — A colorized hexdump terminal utility. [<img src="https://api.travis-ci.org/sitkevij/hex.svg?branch=master">](https://travis-ci.org/sitkevij/hex)
* [[ **⭐ 64 | 👁️ 9 | 🔀 2** ] mmstick/concurr](https://github.com/mmstick/concurr) — Alternative to GNU Parallel w/ a client-server architecture
* [[ **⭐ 61 | 👁️ 3 | 🔀 5** ] brocode/fblog](https://github.com/brocode/fblog) — Small command-line JSON Log viewer [<img src="https://api.travis-ci.org/brocode/fblog.svg?branch=master">](https://travis-ci.org/brocode/fblog)
* [[ **⭐ 31 | 👁️ 11 | 🔀 2** ] pop-os/debrep](https://github.com/pop-os/debrepbuild) — APT repository tool for building and managing an APT repo
* [[ **⭐ 20 | 👁️ 1 | 🔀 2** ] Ralvke/logram](https://github.com/Ralvke/logram) — Push log files' updates to Telegram [<img src="https://api.travis-ci.org/Ralvke/logram.svg?branch=master">](https://travis-ci.org/Ralvke/logram)
* [fselect](https://crates.io/crates/fselect) — Find files with SQL-like queries [<img src="https://api.travis-ci.org/jhspetersson/fselect.svg?branch=master">](https://travis-ci.org/jhspetersson/fselect)
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) — Linux power management daemon (DBus-interface) with CLI tool.

### Text editors

* [[ **⭐ 17055 | 👁️ 470 | 🔀 628** ] xi-editor](https://github.com/xi-editor/xi-editor) — A modern editor with a backend written in Rust.
* [[ **⭐ 8679 | 👁️ 381 | 🔀 228** ] xray](https://github.com/atom-archive/xray) — An experimental next-generation Electron-based text editor. [<img src="https://api.travis-ci.org/atom/xray.svg?branch=master">](https://travis-ci.org/atom/xray)
* [[ **⭐ 3791 | 👁️ 160 | 🔀 323** ] Remacs](https://github.com/remacs/remacs) — A community-driven port of Emacs to Rust. [<img src="https://api.travis-ci.org/remacs/remacs.svg?branch=master">](https://travis-ci.org/remacs/remacs)
* [[ **⭐ 1308 | 👁️ 58 | 🔀 68** ] gchp/iota](https://github.com/gchp/iota) — A simple text editor [<img src="https://api.travis-ci.org/gchp/iota.svg?branch=master">](https://travis-ci.org/gchp/iota)
* [[ **⭐ 447 | 👁️ 26 | 🔀 18** ] mathall/rim](https://github.com/mathall/rim) — Vim-like text editor written in Rust [<img src="https://api.travis-ci.org/mathall/rim.svg?branch=master">](https://travis-ci.org/mathall/rim)

### Text processing

* [[ **⭐ 1351 | 👁️ 17 | 🔀 23** ] phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) — ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc. [![Build Status](https://api.travis-ci.org/phiresky/ripgrep-all.svg?branch=master)](https://travis-ci.org/phiresky/ripgrep-all)
* [[ **⭐ 213 | 👁️ 3 | 🔀 7** ] vishaltelangre/ff](https://github.com/vishaltelangre/ff) — Find files (ff) by name! [<img src="https://api.travis-ci.org/vishaltelangre/ff.svg?branch=master">](https://travis-ci.org/vishaltelangre/ff)
* [[ **⭐ 123 | 👁️ 6 | 🔀 6** ] TankerHQ/ruplacer](https://github.com/TankerHQ/ruplacer) — Find and replace text in source files [<img img src="https://api.travis-ci.org/TankerHQ/ruplacer.svg?branch=master">](https://travis-ci.org/TankerHQ/ruplacer)
* [[ **⭐ 72 | 👁️ 6 | 🔀 7** ] whitfin/runiq](https://github.com/whitfin/runiq) — an efficient way to filter duplicate lines from unsorted input.
* [[ **⭐ 53 | 👁️ 4 | 🔀 1** ] Lispre/so_stupid_search](https://github.com/Lispre/so_stupid_search) - A simple and fast string search tool for human beings
* [[ **⭐ 25 | 👁️ 1 | 🔀 0** ] whitfin/bytelines](https://github.com/whitfin/bytelines) — Read input lines as byte slices for high efficiency.
* [[ **⭐ 15 | 👁️ 1 | 🔀 1** ] lavifb/todo_r](https://github.com/lavifb/todo_r) — Find all your TODO notes with one command! [<img src="https://api.travis-ci.org/lavifb/todo_r.svg?branch=master">](https://travis-ci.org/lavifb/todo_r)
* [ripgrep](https://crates.io/crates/ripgrep) — combines the usability of The Silver Searcher with the raw speed of grep [<img src="https://api.travis-ci.org/BurntSushi/ripgrep.svg?branch=master">](https://travis-ci.org/BurntSushi/ripgrep)
* [sd](https://crates.io/crates/sd) — Intuitive find & replace CLI [<img src="https://api.travis-ci.org/chmln/sd.svg?branch=master">](https://travis-ci.org/chmln/sd)
* [xsv](https://crates.io/crates/xsv) — A fast CSV command line tool (slicing, indexing, selecting, searching, sampling, etc.) [<img src="https://api.travis-ci.org/BurntSushi/xsv.svg?branch=master">](https://travis-ci.org/BurntSushi/xsv)

### Utilities

* [[ **⭐ 311 | 👁️ 17 | 🔀 18** ] myfreeweb/freepass](https://github.com/myfreeweb/freepass) — The free password manager for power users. [<img src="https://api.travis-ci.org/myfreeweb/freepass.svg?branch=master">](https://travis-ci.org/myfreeweb/freepass)
* [[ **⭐ 90 | 👁️ 4 | 🔀 9** ] fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) — A lightning fast version of tmux-fingers written in Rust, copy/pasting tmux like vimium/vimperator.
* [[ **⭐ 62 | 👁️ 3 | 🔀 1** ] evansmurithi/cloak](https://github.com/evansmurithi/cloak) — A Command Line OTP (One Time Password) Authenticator application. [<img src="https://api.travis-ci.com/evansmurithi/cloak.svg?branch=master">](https://travis-ci.com/evansmurithi/cloak) [<img src="https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true">](https://ci.appveyor.com/project/evansmurithi/cloak)
* [[ **⭐ 47 | 👁️ 3 | 🔀 4** ] brycx/checkpwn](https://github.com/brycx/checkpwn) — A Have I Been Pwned (HIBP) command-line utility tool that lets you easily check for compromised accounts and passwords.
* [[ **⭐ 44 | 👁️ 4 | 🔀 3** ] yaa110/rubigo](https://github.com/yaa110/rubigo) — Golang dependency tool and package manager, written in Rust [<img src="https://api.travis-ci.org/yaa110/rubigo.svg?branch=master">](https://travis-ci.org/yaa110/rubigo)
* [[ **⭐ 42 | 👁️ 1 | 🔀 2** ] whitfin/s3-meta](https://github.com/whitfin/s3-meta) — A command line tool to gather metadata about your Amazon S3 buckets.
* [[ **⭐ 26 | 👁️ 2 | 🔀 2** ] yaa110/cb](https://github.com/yaa110/cb) — Command line interface to manage clipboard [![Build Status](https://api.travis-ci.org/yaa110/cb.svg?branch=master)](https://travis-ci.org/yaa110/cb)
* [[ **⭐ 23 | 👁️ 2 | 🔀 2** ] whitfin/s3-concat](https://github.com/whitfin/s3-concat) — A command line tool to concatenate Amazon S3 files remotely using flexible patterns.
* [[ **⭐ 12 | 👁️ 1 | 🔀 0** ] amar-laksh/workstation](https://github.com/amar-laksh/workstation) — A commandline tool to help you manage your workstation by distancing you from your screen, locking your screen when you aren't there among other things with OPENCV!
* [[ **⭐ 11 | 👁️ 1 | 🔀 2** ] arthrp/quick-skeleton](https://github.com/arthrp/quick-skeleton) — Project scaffolding tool, similar to Yeoman and Slush. [<img src="https://api.travis-ci.org/arthrp/quick-skeleton.svg?branch=master">](https://travis-ci.org/arthrp/quick-skeleton)
* [[ **⭐ 10 | 👁️ 1 | 🔀 1** ] arthrp/consoletimer](https://github.com/arthrp/consoleTimer) - Simple timer for your terminal. [<img src="https://api.travis-ci.org/arthrp/consoleTimer.svg?branch=master">](https://travis-ci.org/arthrp/consoleTimer)
* [[ **⭐ 8 | 👁️ 0 | 🔀 1** ] aleshaleksey/AZDice](https://github.com/aleshaleksey/AZDice) — A dice roll success distribution generator for tabletop homebrewers. [<img src="https://api.travis-ci.org/aleshaleksey/AZDice.svg?branch=master">](https://travis-ci.org/aleshaleksey/AZDice)
* [[ **⭐ 7 | 👁️ 1 | 🔀 0** ] repoch](https://github.com/lucawen/repoch) — Convert epoch to datetime and datetime to epoch [<img src="https://api.travis-ci.com/lucawen/repoch.svg?branch=master">](https://travis-ci.com/lucawen/repoch/)

### Video

* [[ **⭐ 17 | 👁️ 0 | 🔀 2** ] yuvadm/slingr](https://github.com/yuvadm/slingr) — A simple CLI for streaming media files over a local network to UPnP media renderers [<img src="https://api.travis-ci.org/yuvadm/slingr.svg?branch=master">](https://travis-ci.org/yuvadm/slingr)
* [[ **⭐ 12 | 👁️ 2 | 🔀 2** ] yuvadm/streamlib](https://github.com/streamlib/streamlib) - Play your favorite live video and audio streams from command line

### Virtualization

* [[ **⭐ 10366 | 👁️ 313 | 🔀 668** ] firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) — A lightweight virtual machine for container workload  [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [[ **⭐ 1637 | 👁️ 60 | 🔀 83** ] tailhook/vagga](https://github.com/tailhook/vagga) — A containerization tool without daemons [<img src="https://api.travis-ci.org/tailhook/vagga.svg?branch=master">](https://travis-ci.org/tailhook/vagga)
* [[ **⭐ 1017 | 👁️ 57 | 🔀 74** ] oracle/railcar](https://github.com/oracle/railcar) — Docker-like container OCI runtime implementation in Rust [![wercker status](https://app.wercker.com/status/730e874772dc02c6005f4ae4e42b0ca4/s/master "wercker status")](https://app.wercker.com/applications/59696a02ee70670100155ae2 )

### Window managers

* [[ **⭐ 2133 | 👁️ 92 | 🔀 74** ] way-cooler/way-cooler](https://github.com/way-cooler/way-cooler) — A customizable Wayland compositor (window manager) [<img src="https://api.travis-ci.org/way-cooler/way-cooler.svg?branch=master">](https://travis-ci.org/way-cooler/way-cooler)

### Web

* [[ **⭐ 1154 | 👁️ 62 | 🔀 83** ] Plume-org/Plume](https://github.com/Plume-org/Plume) — ActivityPub federating blogging application [<img src="https://api.travis-ci.org/Plume-org/Plume.svg?branch=master">](https://travis-ci.org/Plume-org/Plume)

### Web Servers

* [[ **⭐ 559 | 👁️ 12 | 🔀 37** ] svenstaro/miniserve](https://github.com/svenstaro/miniserve) — A small, self-contained cross-platform CLI tool that allows you to just grab the binary and serve some file(s) via HTTP [<img src="https://api.travis-ci.org/svenstaro/miniserve.svg?branch=master">](https://travis-ci.org/svenstaro/miniserve)
* [[ **⭐ 272 | 👁️ 6 | 🔀 22** ] TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) — simple static http server
* [[ **⭐ 140 | 👁️ 3 | 🔀 14** ] thecoshman/http](https://github.com/thecoshman/http) — Host These Things Please — A basic http server for hosting a folder fast and simply [<img src="https://api.travis-ci.org/thecoshman/http.svg?branch=master">](https://travis-ci.org/thecoshman/http)
* [[ **⭐ 77 | 👁️ 5 | 🔀 4** ] wyhaya/see](https://github.com/wyhaya/see) — Static file server [![Build Status](https://img.shields.io/travis/wyhaya/see.svg)](https://travis-ci.org/wyhaya/see)

## Development tools

* [[ **⭐ 3112 | 👁️ 93 | 🔀 459** ] Rustup](https://github.com/rust-lang/rustup.rs) — the Rust toolchain installer [<img src="https://api.travis-ci.com/rust-lang/rustup.rs.svg?branch=master">](https://travis-ci.org/rust-lang/rustup.rs)
* [[ **⭐ 3024 | 👁️ 95 | 🔀 269** ] Racer](https://github.com/racer-rust/racer) — code completion for Rust [<img src="https://api.travis-ci.com/phildawes/racer.svg?branch=master">](https://travis-ci.org/phildawes/racer)
* [[ **⭐ 2732 | 👁️ 92 | 🔀 210** ] Rust Language Server](https://github.com/rust-lang/rls) — A server that runs in the background, providing IDEs, editors, and other tools with information about Rust programs
* [[ **⭐ 2684 | 👁️ 52 | 🔀 457** ] rustfmt](https://github.com/rust-lang/rustfmt) — A Rust code formatter [<img src="https://api.travis-ci.com/rust-lang/rustfmt.svg?branch=master">](https://travis-ci.org/rust-lang/rustfmt)
* [[ **⭐ 1369 | 👁️ 29 | 🔀 57** ] just](https://github.com/casey/just) — A handy command runner for project-specific tasks [<img src="https://api.travis-ci.org/casey/just.svg?branch=master">](https://travis-ci.org/casey/just)
* [[ **⭐ 568 | 👁️ 10 | 🔀 33** ] clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) — generates a changelog from git metadata ([conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)) [<img src="https://api.travis-ci.org/clog-tool/clog-cli.svg?branch=master">](https://travis-ci.org/clog-tool/clog-cli)
* [[ **⭐ 479 | 👁️ 20 | 🔀 34** ] rust-lang-nursery/rustfix](https://github.com/rust-lang/rustfix)  — automatically applies the suggestions made by rustc [<img src="https://api.travis-ci.org/killercup/rustfix.svg?branch=master">](https://travis-ci.org/killercup/rustfix)
* [[ **⭐ 470 | 👁️ 11 | 🔀 35** ] artifact](https://github.com/vitiral/artifact) — the design doc tool made for developers [![Build Status](https://api.travis-ci.org/vitiral/artifact.svg?branch=master)](https://travis-ci.org/vitiral/artifact)
* [[ **⭐ 267 | 👁️ 5 | 🔀 22** ] dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) — create ctags/etags for a cargo project and all of its dependencies [<img src="https://api.travis-ci.org/dan-t/rusty-tags.svg?branch=master">](https://travis-ci.org/dan-t/rusty-tags)
* [[ **⭐ 212 | 👁️ 4 | 🔀 21** ] Module Linker](https://github.com/fiatjaf/module-linker) — Extension that adds `<a>` links to references in `mod`, `use` and `extern crate` statements at GitHub.
* [[ **⭐ 145 | 👁️ 8 | 🔀 9** ] semantic-rs](https://github.com/semantic-rs/semantic-rs) — automatic crate publishing [<img src="https://api.travis-ci.org/semantic-rs/semantic-rs.svg?branch=master">](https://travis-ci.org/semantic-rs/semantic-rs)
* [[ **⭐ 128 | 👁️ 4 | 🔀 5** ] fw](https://github.com/brocode/fw) — workspace productivity booster [<img src="https://api.travis-ci.org/brocode/fw.svg?branch=master">](https://travis-ci.org/brocode/fw)
* [[ **⭐ 60 | 👁️ 2 | 🔀 2** ] ptags](https://github.com/dalance/ptags) — A parallel universal-ctags wrapper for git repository [![Build Status](https://api.travis-ci.org/dalance/ptags.svg?branch=master)](https://travis-ci.org/dalance/ptags)
* [[ **⭐ 27 | 👁️ 2 | 🔀 3** ] tinyrick](https://github.com/mcandre/tinyrick) a basic task dependency tool emphasizing Rust functions over raw shell commands.
* [[ **⭐ 19 | 👁️ 2 | 🔀 0** ] frewsxcv/crate-deps](https://github.com/frewsxcv/crate-deps) — generates images of dependency graphs for crates hosted on crates.io
* [clippy](https://crates.io/crates/clippy) — Rust lints [<img src="https://api.travis-ci.com/rust-lang/rust-clippy.svg?branch=master">](https://travis-ci.org/rust-lang/rust-clippy)
* [git-journal](https://github.com/saschagrunert/git-journal/) — The Git Commit Message and Changelog Generation Framework [<img src="https://api.travis-ci.org/saschagrunert/git-journal.svg?branch=master">](https://travis-ci.org/saschagrunert/git-journal)
* [Rust Regex Playground](https://2fd.github.io/rust-regex-playground/#method=find&regex=%5Cw%2B&text=abc) — Web tool to evaluate rust regular expressions

### Build system

  * [[ **⭐ 471 | 👁️ 9 | 🔀 10** ] dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) — Expand macros in your source code
  * [[ **⭐ 442 | 👁️ 7 | 🔀 39** ] cargo-tree](https://github.com/sfackler/cargo-tree) – Cargo subcommand that visualizes a crate's dependency graph in a tree-like format [![CircleCI](https://circleci.com/gh/sfackler/cargo-tree.svg?style=shield)](https://circleci.com/gh/sfackler/cargo-tree)
  * [[ **⭐ 3 | 👁️ 1 | 🔀 1** ] liuchong/cargo-x](https://github.com/liuchong/cargo-x) — A very simple third-party cargo subcommand to execute a custom command [<img src="https://api.travis-ci.org/liuchong/cargo-x.svg?branch=master">](https://travis-ci.org/liuchong/cargo-x)
* [Cargo](https://crates.io/) — the Rust package manager
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) — A utility to compare Rust micro-benchmarks [<img src="https://api.travis-ci.org/BurntSushi/cargo-benchcmp.svg?branch=master">](https://travis-ci.org/BurntSushi/cargo-benchcmp)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) — A cargo extension that can generate BitBake recipes utilizing the classes from meta-rust [<img src="https://api.travis-ci.org/cardoe/cargo-bitbake.svg?branch=master">](https://travis-ci.org/cardoe/cargo-bitbake)
  * [cargo-cache](https://crates.io/crates/cargo-cache) — inspect/manage/clean your cargo cache (`~/.cargo/`/`${CARGO_HOME}`), print sizes etc [<img src="https://api.travis-ci.org/matthiaskrgr/cargo-cache.svg?branch=master">](https://travis-ci.org/matthiaskrgr/cargo-cache)
  * [cargo-check](https://crates.io/crates/cargo-check) — A wrapper around `cargo rustc -- -Zno-trans` which can be helpful for running a faster compile if you only need correctness checks [<img src="https://api.travis-ci.org/rsolomo/cargo-check.svg?branch=master">](https://travis-ci.org/rsolomo/cargo-check)
  * [cargo-count](https://crates.io/crates/cargo-count) — lists source code counts and details about cargo projects, including unsafe statistics [<img src="https://api.travis-ci.org/kbknapp/cargo-count.svg?branch=master">](https://travis-ci.org/kbknapp/cargo-count)
  * [cargo-deb](https://crates.io/crates/cargo-deb) — Generates binary Debian packages [<img src="https://api.travis-ci.org/mmstick/cargo-deb.svg?branch=master">](https://travis-ci.org/mmstick/cargo-deb)
  * [cargo-deps](https://crates.io/crates/cargo-deps) — build dependency graphs of Rust projects [<img src="https://api.travis-ci.org/m-cat/cargo-deps.svg?branch=master">](https://travis-ci.org/m-cat/cargo-deps)
  * [cargo-do](https://crates.io/crates/cargo-do) — run multiple cargo commands in a row [<img src="https://api.travis-ci.org/pwoolcoc/cargo-do.svg?branch=master">](https://travis-ci.org/pwoolcoc/cargo-do)
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) — cargo extension that can generate ebuilds using the in-tree eclasses [<img src="https://api.travis-ci.org/cardoe/cargo-ebuild.svg?branch=master">](https://travis-ci.org/cardoe/cargo-ebuild)
  * [cargo-edit](https://crates.io/crates/cargo-edit) — allows you to add and list dependencies by reading/writing to your Cargo.toml file from the command line [<img src="https://api.travis-ci.org/killercup/cargo-edit.svg?branch=master">](https://travis-ci.org/killercup/cargo-edit)
  * [cargo-find](https://crates.io/crates/cargo-find) <sup>deprecated</sup> — Find crates from command line [<img src="https://api.travis-ci.org/Ralvke/cargo-find.svg?branch=master">](https://travis-ci.org/Ralvke/cargo-find)
  * [cargo-graph](https://crates.io/crates/cargo-graph) — updated fork of `cargo-dot` with additional features. Unmaintained, see `cargo-deps` [<img src="https://api.travis-ci.org/kbknapp/cargo-graph.svg?branch=master">](https://travis-ci.org/kbknapp/cargo-graph)
  * [cargo-info](https://crates.io/crates/cargo-info) — queries crates.io for crates details from command line [<img src="https://api.travis-ci.org/imp/cargo-info.svg?branch=master">](https://travis-ci.org/imp/cargo-info)
  * [cargo-license](https://crates.io/crates/cargo-license) — A cargo subcommand to quickly view the licenses of all dependencies. [<img src="https://api.travis-ci.org/onur/cargo-license.svg?branch=master">](https://travis-ci.org/onur/cargo-license)
  * [cargo-make](https://crates.io/crates/cargo-make) — Rust task runner and build tool. [<img src="https://api.travis-ci.org/sagiegurari/cargo-make.svg?branch=master">](https://travis-ci.org/sagiegurari/cargo-make)
  * [cargo-modules](https://crates.io/crates/cargo-modules) — A cargo plugin for showing a tree-like overview of a crate's modules. [<img src="https://api.travis-ci.org/regexident/cargo-modules.svg?branch=master">](https://travis-ci.org/regexident/cargo-modules)
  * [cargo-multi](https://crates.io/crates/cargo-multi) — runs specified cargo command on multiple crates [<img src="https://api.travis-ci.org/imp/cargo-multi.svg?branch=master">](https://travis-ci.org/imp/cargo-multi)
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) — displays when newer versions of Rust dependencies are available, or out of date [<img src="https://api.travis-ci.org/kbknapp/cargo-outdated.svg?branch=master">](https://travis-ci.org/kbknapp/cargo-outdated)
  * [cargo-release](https://crates.io/crates/cargo-release) — tool for releasing git-managed cargo project, build, tag, publish, doc and push [<img src="https://api.travis-ci.org/sunng87/cargo-release.svg?branch=master">](https://travis-ci.org/sunng87/cargo-release)
  * [cargo-script](https://crates.io/crates/cargo-script) — lets people quickly and easily run Rust "scripts" which can make use of Cargo's package ecosystem [<img src="https://api.travis-ci.org/DanielKeep/cargo-script.svg?branch=master">](https://travis-ci.org/DanielKeep/cargo-script)
  * [cargo-testify](https://crates.io/crates/cargo-testify) — watches files changes, runs tests and notifies about the result with friendly OS notification [<img src="https://api.travis-ci.org/greyblake/cargo-testify.svg?branch=master">](https://travis-ci.org/greyblake/cargo-testify)
  * [cargo-update](https://crates.io/crates/cargo-update) — cargo subcommand for checking and applying updates to installed executables [<img src="https://api.travis-ci.org/nabijaczleweli/cargo-update.svg?branch=master">](https://travis-ci.org/nabijaczleweli/cargo-update)
  * [cargo-watch](https://crates.io/crates/cargo-watch) — utility for cargo to compile projects when sources change [<img src="https://api.travis-ci.org/passcod/cargo-watch.svg?branch=master">](https://travis-ci.org/passcod/cargo-watch)
* CMake
  * [[ **⭐ 82 | 👁️ 6 | 🔀 13** ] SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) — an example project showing usage of CMake with Rust [<img src="https://api.travis-ci.org/SiegeLord/RustCMake.svg?branch=master">](https://travis-ci.org/SiegeLord/RustCMake)
  * [[ **⭐ 63 | 👁️ 17 | 🔀 7** ] Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) — useful for integrating a Rust library into a CMake project
* Github actions
  * [[ **⭐ 26 | 👁️ 1 | 🔀 6** ] icepuma/rust-action](https://github.com/icepuma/rust-action) — rust github action
* Webpack
  * [[ **⭐ 33 | 👁️ 2 | 🔀 3** ] Ralvke/rust-loader](https://github.com/Ralvke/rust-loader) — Webpack Rust loader (wasm)

### Debugging

* GDB
  * [[ **⭐ 7047 | 👁️ 185 | 🔀 425** ] gdbgui](https://github.com/cs01/gdbgui) — Browser based frontend for gdb to debug C, C++, Rust, and go. [<img src="https://api.travis-ci.org/cs01/gdbgui.svg?branch=master">](https://travis-ci.org/cs01/gdbgui)
  * [rust-gdb](https://github.com/rust-lang/rust/blob/master/src/etc/rust-gdb)
* LLDB
  * [lldb_batchmode.py](https://github.com/rust-lang/rust/blob/master/src/etc/lldb_batchmode.py) — allows to use LLDB in a way similar to GDB's batch mode.
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension for [Visual Studio Code](https://code.visualstudio.com/).
* rr
  * [rr](https://rr-project.org/) — rr is a lightweight tool for recording and replaying execution of applications

### Deployment

* Docker
  * [[ **⭐ 638 | 👁️ 16 | 🔀 76** ] emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) — Docker images for compiling static Rust binaries using musl-libc and musl-gcc, with static versions of useful C libraries
  * [[ **⭐ 137 | 👁️ 8 | 🔀 18** ] rust-lang-nursery/docker-rust](https://github.com/rust-lang/docker-rust) — the official Rust Docker image
  * [[ **⭐ 86 | 👁️ 2 | 🔀 5** ] kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) — An example project for very small rust docker images [<img src="https://api.travis-ci.org/kpcyrd/mini-docker-rust.svg?branch=master">](https://travis-ci.org/kpcyrd/mini-docker-rust)
  * [[ **⭐ 85 | 👁️ 7 | 🔀 12** ] messense/rust-musl-cross](https://github.com/messense/rust-musl-cross) — Docker images for compiling static Rust binaries using musl-cross [<img src="https://api.travis-ci.org/messense/rust-musl-cross.svg?branch=master">](https://travis-ci.org/messense/rust-musl-cross)
  * [[ **⭐ 46 | 👁️ 3 | 🔀 5** ] liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) — A multiple version (with musl tools) Rust Docker image
* Google App Engine
  * [[ **⭐ 33 | 👁️ 4 | 🔀 5** ] DenisKolodin/rust-app-engine](https://github.com/DenisKolodin/rust-app-engine) — App Engine Rust boilerplate
* Heroku
  * [[ **⭐ 291 | 👁️ 17 | 🔀 86** ] emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) — A buildpack for Rust applications on Heroku

### Embedded

[Rust Embedded](https://rust-embedded.org/)

* Cross compiling
  * [[ **⭐ 1389 | 👁️ 42 | 🔀 57** ] japaric/rust-cross](https://github.com/japaric/rust-cross) — everything you need to know about cross compiling Rust programs [<img src="https://api.travis-ci.org/japaric/rust-cross.svg?branch=master">](https://travis-ci.org/japaric/rust-cross)
  * [[ **⭐ 667 | 👁️ 24 | 🔀 68** ] japaric/xargo](https://github.com/japaric/xargo) — effortless cross compilation of Rust programs to custom bare-metal targets like ARM Cortex-M [<img src="https://api.travis-ci.org/japaric/xargo.svg?branch=master">](https://travis-ci.org/japaric/xargo)
* Raspberry Pi
  * [[ **⭐ 280 | 👁️ 17 | 🔀 16** ] Ogeon/rust-on-raspberry-pi](https://github.com/Ogeon/rust-on-raspberry-pi) — instructions for how to cross compile Rust projects for the Raspberry Pi .
* Arduino
  * [[ **⭐ 258 | 👁️ 30 | 🔀 12** ] avr-rust/ruduino](https://github.com/avr-rust/ruduino) ^`^t Reusable components for the Arduino Uno.

### FFI

See also [Foreign Function Interface](https://doc.rust-lang.org/book/first-edition/ffi.html),  [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/) (a collection of examples of using code written in Rust from other languages) and [FFI examples written in Rust](https://github.com/alexcrichton/rust-ffi-examples).

* C
  * [[ **⭐ 600 | 👁️ 15 | 🔀 92** ] rlhunt/cbindgen](https://github.com/eqrion/cbindgen) — generates C header files from Rust source files. Used in Gecko for WebRender [<img src="https://api.travis-ci.org/eqrion/cbindgen.svg?branch=master">](https://travis-ci.org/eqrion/cbindgen)
  * [[ **⭐ 187 | 👁️ 6 | 🔀 22** ] Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) — generates C header files from Rust source files [<img src="https://api.travis-ci.org/Sean1708/rusty-cheddar.svg?branch=master">](https://travis-ci.org/Sean1708/rusty-cheddar)
* C++
  * [[ **⭐ 1442 | 👁️ 44 | 🔀 361** ] rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) — A Rust bindings generator
* Erlang
  * [[ **⭐ 1944 | 👁️ 84 | 🔀 90** ] rusterlium/rustler](https://github.com/rusterlium/rustler) — safe Rust bridge for creating Erlang NIF functions [<img src="https://api.travis-ci.org/rusterlium/rustler.svg?branch=master">](https://travis-ci.org/rusterlium/rustler)
* Haskell
  * [[ **⭐ 206 | 👁️ 15 | 🔀 7** ] mgattozzi/curryrs](https://github.com/mgattozzi/curryrs) — Bridge the gap between Haskell and Rust
  * [[ **⭐ 19 | 👁️ 0 | 🔀 1** ] mgattozzi/haskellrs](https://github.com/mgattozzi/haskellrs) — Rust in Haskell FFI Example
  * [[ **⭐ 0 | 👁️ 0 | 🔀 0** ] mgattozzi/rushs](https://github.com/mgattozzi/rushs) — Haskell in Rust FFI Example
* Java
  * [[ **⭐ 248 | 👁️ 11 | 🔀 27** ] drrb/java-rust-example](https://github.com/drrb/java-rust-example) — use Rust from Java [<img src="https://api.travis-ci.org/drrb/java-rust-example.svg?branch=master">](https://travis-ci.org/drrb/java-rust-example)
  * [[ **⭐ 53 | 👁️ 4 | 🔀 1** ] bennettanderson/rjni](https://github.com/benanders/rjni) — use Java from Rust [<img src="https://api.travis-ci.com/bennettanderson/rjni.svg?branch=master">](https://travis-ci.org/GravityScore/RustJNI)
  * [[ **⭐ 14 | 👁️ 2 | 🔀 3** ] rawrasaur/rust-jdbc](https://github.com/rawrasaur/rust-jdbc) — uses JDBC from Rust [<img src="https://api.travis-ci.org/rawrasaur/rust-jdbc.svg?branch=master">](https://travis-ci.org/rawrasaur/rust-jdbc)
  * [j4rs](https://crates.io/crates/j4rs) — use Java from Rust [<img src="https://api.travis-ci.org/astonbitecode/j4rs.svg?branch=master">](https://travis-ci.org/astonbitecode/j4rs)
  * [jni](https://crates.io/crates/jni) — use Rust from Java [<img src="https://api.travis-ci.org/jni-rs/jni-rs.svg?branch=master">](https://travis-ci.org/jni-rs/jni-rs)
  * [jni-sys](https://crates.io/crates/jni-sys) — Rust definitions corresponding to jni.h [<img src="https://api.travis-ci.org/sfackler/rust-jni-sys.svg?branch=master">](https://travis-ci.org/sfackler/rust-jni-sys)
  * [rucaja](https://crates.io/crates/rucaja) — use Java from Rust [<img src="https://api.travis-ci.org/kud1ing/rucaja.svg?branch=master">](https://travis-ci.org/kud1ing/rucaja)
* Lua
  * [[ **⭐ 415 | 👁️ 17 | 🔀 46** ] tomaka/hlua](https://github.com/tomaka/hlua) — Rust library to interface with Lua [<img src="https://api.travis-ci.org/tomaka/hlua.svg?branch=master">](https://travis-ci.org/tomaka/hlua)
  * [[ **⭐ 116 | 👁️ 9 | 🔀 32** ] jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) — Lua 5.3 bindings for Rust [<img src="https://api.travis-ci.org/jcmoyer/rust-lua53.svg?branch=master">](https://travis-ci.org/jcmoyer/rust-lua53)
  * [[ **⭐ 111 | 👁️ 7 | 🔀 21** ] kballard/rust-lua](https://github.com/lilyball/rust-lua) — Safe Rust bindings to Lua 5.1 [<img src="https://api.travis-ci.org/lilyball/rust-lua.svg">](https://travis-ci.org/lilyball/rust-lua)
  * [[ **⭐ 33 | 👁️ 6 | 🔀 6** ] tickbh/td_rlua](https://github.com/tickbh/td_rlua) — Zero-cost high-level lua 5.3 wrapper for Rust [<img src="https://api.travis-ci.org/tickbh/td_rlua.svg?branch=master">](https://travis-ci.org/tickbh/td_rlua)
* mruby
  * [[ **⭐ 191 | 👁️ 9 | 🔀 13** ] anima-engine/mrusty](https://github.com/anima-engine/mrusty) — mruby safe bindings for Rust [<img src="https://api.travis-ci.org/anima-engine/mrusty.svg?branch=master">](https://travis-ci.org/anima-engine/mrusty)
* Node.js
  * [[ **⭐ 3978 | 👁️ 109 | 🔀 164** ] neon-bindings/neon](https://github.com/neon-bindings/neon) — use Rust from Node.js [<img src="https://api.travis-ci.org/neon-bindings/neon.svg?branch=master">](https://travis-ci.org/neon-bindings/neon)
* Objective-C
  * [[ **⭐ 195 | 👁️ 10 | 🔀 28** ] SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) — Objective-C Runtime bindings and wrapper for Rust
* Perl
  * [[ **⭐ 42 | 👁️ 8 | 🔀 9** ] vickenty/perl-xs](https://github.com/vickenty/perl-xs) — Create Perl XS modules using Rust [<img src="https://api.travis-ci.org/vickenty/perl-xs.svg?branch=master">](https://travis-ci.org/vickenty/perl-xs)
  * [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] vickenty/mi-rust](https://github.com/vickenty/mi-rust) — Adds support to M::I for building modules with Cargo
* Python
  * [[ **⭐ 1992 | 👁️ 52 | 🔀 140** ] PyO3/PyO3](https://github.com/PyO3/PyO3) — Rust bindings for the Python interpreter [<img src="https://api.travis-ci.org/PyO3/pyo3.svg?branch=master">](https://travis-ci.org/PyO3/pyo3)
  * [[ **⭐ 1124 | 👁️ 32 | 🔀 81** ] dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) — Python bindings [<img src="https://api.travis-ci.org/dgrunwald/rust-cpython.svg?branch=master">](https://travis-ci.org/dgrunwald/rust-cpython)
  * [[ **⭐ 603 | 👁️ 25 | 🔀 18** ] getsentry/milksnake](https://github.com/getsentry/milksnake) — extension for python setuptools that allows you to distribute dynamic linked libraries in Python wheels in the most portable way imaginable.
* R
  * [[ **⭐ 160 | 👁️ 21 | 🔀 9** ] rustr/rustr](https://github.com/rustr/rustr) — use Rust from R, and use R in Rust [<img src="https://api.travis-ci.org/rustr/rustr.svg?branch=master">](https://travis-ci.org/rustr/rustr)
* Ruby
  * [[ **⭐ 1895 | 👁️ 71 | 🔀 67** ] tildeio/helix](https://github.com/tildeio/helix) — write Ruby classes in Rust [<img src="https://api.travis-ci.org/tildeio/helix.svg?branch=master">](https://travis-ci.org/tildeio/helix)
  * [[ **⭐ 750 | 👁️ 28 | 🔀 30** ] d-unseductable/ruru](https://github.com/d-unseductable/ruru) — native Ruby extensions written in Rust [<img src="https://api.travis-ci.org/d-unseductable/ruru.svg?branch=master">](https://travis-ci.org/d-unseductable/ruru)
  * [[ **⭐ 326 | 👁️ 11 | 🔀 28** ] danielpclark/rutie](https://github.com/danielpclark/rutie) — native Ruby extensions written in Rust and vice versa [![Build Status](https://api.travis-ci.org/danielpclark/rutie.svg?branch=master)](https://travis-ci.org/danielpclark/rutie)
* Web Assembly
  * [[ **⭐ 2795 | 👁️ 106 | 🔀 357** ] rustwasm/wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) — A project for facilitating high-level interactions between wasm modules and JS. [<img src="https://api.travis-ci.com/rustwasm/wasm-bindgen.svg?branch=master">](https://travis-ci.org/rustwasm/wasm-bindgen)
  * [[ **⭐ 2250 | 👁️ 51 | 🔀 135** ] rustwasm/wasm-pack](https://github.com/rustwasm/wasm-pack) — :package: :sparkles: pack up the wasm and publish it to npm! [<img src="https://api.travis-ci.com/rustwasm/wasm-pack.svg?branch=master">](https://travis-ci.org/rustwasm/wasm-packn)

### IDEs

See also [Are we (I)DE yet?](https://areweideyet.com/) and [Rust Tools](https://www.rust-lang.org/tools).

    * [[ **⭐ 2760 | 👁️ 77 | 🔀 255** ] intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) — [<img src="https://api.travis-ci.org/intellij-rust/intellij-rust.svg?branch=master">](https://travis-ci.org/intellij-rust/intellij-rust)
	* [[ **⭐ 2603 | 👁️ 54 | 🔀 221** ] autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) — [LSP](https://microsoft.github.io/language-server-protocol/) client. Implemented in Rust and supports rls out of the box.
	* [[ **⭐ 1846 | 👁️ 37 | 🔀 191** ] rust.vim](https://github.com/rust-lang/rust.vim) — provides file detection, syntax highlighting, formatting, Syntastic integration, and more.
  * [[ **⭐ 898 | 👁️ 42 | 🔀 56** ] SolidOak](https://github.com/oakes/SolidOak) — A simple IDE for Rust, based on GTK+ and [Neovim](https://github.com/neovim/neovim)
    * [[ **⭐ 549 | 👁️ 27 | 🔀 110** ] rust-mode](https://github.com/rust-lang/rust-mode) — Rust Major Mode
	* [[ **⭐ 515 | 👁️ 11 | 🔀 38** ] vim-racer](https://github.com/racer-rust/vim-racer) — allows vim to use [Racer](https://github.com/racer-rust/racer) for Rust code completion and navigation.
    * [[ **⭐ 496 | 👁️ 24 | 🔀 76** ] rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) — official Rust package
    * [[ **⭐ 351 | 👁️ 24 | 🔀 52** ] RustDT](https://github.com/RustDT/RustDT) — [<img src="https://api.travis-ci.org/RustDT/RustDT.svg?branch=master">](https://travis-ci.org/RustDT/RustDT)
    * [[ **⭐ 341 | 👁️ 15 | 🔀 43** ] emacs-racer](https://github.com/racer-rust/emacs-racer) — Autocompletion (see also [company](https://company-mode.github.io) and [auto-complete](https://github.com/auto-complete/auto-complete))
  * [[ **⭐ 147 | 👁️ 12 | 🔀 11** ] Ride](https://github.com/madeso/ride) — [<img src="https://api.travis-ci.org/madeso/ride.svg?branch=master">](https://travis-ci.org/madeso/ride)
    * [[ **⭐ 124 | 👁️ 18 | 🔀 15** ] Eclipse Corrosion](https://github.com/eclipse/corrosion)
    * [[ **⭐ 116 | 👁️ 13 | 🔀 31** ] zargony/atom-language-rust](https://github.com/zargony/atom-language-rust)
    * [[ **⭐ 93 | 👁️ 4 | 🔀 17** ] flycheck-rust](https://github.com/flycheck/flycheck-rust) — Rust support for [Flycheck](https://github.com/flycheck/flycheck)
    * [[ **⭐ 59 | 👁️ 9 | 🔀 17** ] lsp-rust](https://github.com/emacs-lsp-legacy/lsp-rust) — Add rls support to [lsp-mode](https://github.com/emacs-lsp/lsp-mode)
    * [[ **⭐ 43 | 👁️ 9 | 🔀 17** ] drrb/rust-netbeans](https://github.com/drrb/rust-netbeans)
	* [[ **⭐ 31 | 👁️ 2 | 🔀 8** ] vim-cargo](https://github.com/timonv/vim-cargo) — command bindings to quickly run cargo stuff from vim.
    * [[ **⭐ 26 | 👁️ 4 | 🔀 4** ] intellij-rust/intellij-toml](https://github.com/intellij-rust/intellij-toml) — basic Toml support
  * [Atom](https://atom.io/)
  * [Eclipse](https://www.eclipse.org/)
  * [Emacs](https://www.gnu.org/software/emacs/)
  * [gitpod.io](https://gitpod.io) — Online IDE with full Rust support based on Rust Language Server
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) native support for rust and cargo since Version 3.22.2
  * [Kakoune](http://kakoune.org/)
    * [ul/kak-lsp](https://github.com/ul/kak-lsp/) — [LSP](https://microsoft.github.io/language-server-protocol/) client. Implemented in Rust and supports rls out of the box.
  * [NetBeans](https://netbeans.org/)
  * [IntelliJ](https://www.jetbrains.com/idea/)
  * [Sublime Text](https://www.sublimetext.com/)
    * [sublimehq/packages](https://github.com/sublimehq/Packages/tree/master/Rust) — native Sublime support (already installed)
  * [Vim](https://vim.sourceforge.io/) — the ubiquitous text editor
  * Visual Studio
    * [[ **⭐ 667 | 👁️ 101 | 🔀 76** ] PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) — A Visual Studio extension for Rust [<img src="https://api.travis-ci.org/PistonDevelopers/VisualRust.svg?branch=master">](https://travis-ci.org/PistonDevelopers/VisualRust)
    * [[ **⭐ 93 | 👁️ 10 | 🔀 6** ] dgriffen/rls-vs2017](https://github.com/ZoeyR/rls-vs2017) — Rust support for Visual Studio 2017 Preview [<img src="https://ci.appveyor.com/api/projects/status/d2lxlincwninhsng?svg=true">](https://ci.appveyor.com/project/dgriffen/rls-vs2017)
    * [[ **⭐ 72 | 👁️ 2 | 🔀 8** ] crates](https://github.com/serayuzgur/crates) — crates is an extension for crates.io dependencies. [<img src="https://img.shields.io/vscode-marketplace/v/serayuzgur.crates.svg">](https://github.com/serayuzgur/crates) [<img src="https://api.travis-ci.org/serayuzgur/crates.svg?branch=master">](https://travis-ci.org/serayuzgur/crates)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [rust-lang/rls-vscode](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) — Rust support for Visual Studio Code
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension
    * [KalitaAlexey/vscode-rust](https://marketplace.visualstudio.com/items?itemName=kalitaalexey.vscode-rust) — A fork of RustyCode

### Pattern recognition

* [[ **⭐ 15 | 👁️ 1 | 🔀 0** ] sfikas/rusteval](https://github.com/sfikas/rusteval) — A tool used to evaluate the output of retrieval algorithms [![Build Status](https://api.travis-ci.org/sfikas/rusteval.svg?branch=master)](https://travis-ci.org/sfikas/rusteval)

### Profiling

* [[ **⭐ 4550 | 👁️ 49 | 🔀 80** ] sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) — A command-line benchmarking tool [![Version info](https://img.shields.io/crates/v/hyperfine.svg)](https://crates.io/crates/hyperfine) [![Build Status](https://api.travis-ci.org/sharkdp/hyperfine.svg?branch=master)](https://travis-ci.org/sharkdp/hyperfine)
* [[ **⭐ 1749 | 👁️ 38 | 🔀 47** ] nokia/memory-profiler](https://github.com/koute/memory-profiler) — A memory profiler for Linux [![Build Status](https://api.travis-ci.org/nokia/memory-profiler.svg?branch=master)](https://travis-ci.org/nokia/memory-profiler)
* [[ **⭐ 53 | 👁️ 3 | 🔀 12** ] ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) — A stopwatch library [<img src="https://api.travis-ci.org/ellisonch/rust-stopwatch.svg?branch=master">](https://travis-ci.org/ellisonch/rust-stopwatch)
* [[ **⭐ 20 | 👁️ 6 | 🔀 4** ] performancecopilot/hornet](https://github.com/performancecopilot/hornet) — A Performance Co-Pilot memory-mapped values instrumentation library [![crates.io badge](https://img.shields.io/crates/v/hornet.svg)](https://crates.io/crates/hornet) [<img src="https://api.travis-ci.org/performancecopilot/hornet.svg?branch=master">](https://travis-ci.org/performancecopilot/hornet)
* FlameGraphs
  * [[ **⭐ 475 | 👁️ 13 | 🔀 18** ] TyOverby/flame](https://github.com/llogiq/flame) — [<img src="https://api.travis-ci.org/TyOverby/flame.svg?branch=master">](https://travis-ci.org/TyOverby/flame)
  * [[ **⭐ 105 | 👁️ 3 | 🔀 6** ] mrhooray/torch](https://github.com/mrhooray/torch) — generates FlameGraphs based on DWARF Debug Info

### Services

* [[ **⭐ 128 | 👁️ 4 | 🔀 11** ] deps.rs](https://github.com/srijs/deps.rs) — Detect outdated or insecure dependencies
* [docs.rs](https://docs.rs) — Automatic documentation generation of crates

### Static analysis

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [static_assertions](https://crates.io/crates/static_assertions) — Compile-time assertions to ensure that invariants are met [![Build Status](https://api.travis-ci.org/nvzqz/static-assertions-rs.svg?branch=master)](https://travis-ci.org/nvzqz/static-assertions-rs/)

### Testing

[[testing](https://crates.io/keywords/testing)]

* [[ **⭐ 914 | 👁️ 29 | 🔀 48** ] trust](https://github.com/japaric/trust) — A Travis CI and AppVeyor template to test your Rust crate on 5 architectures and publish binary releases of it for Linux, macOS and Windows
* [[ **⭐ 821 | 👁️ 33 | 🔀 62** ] rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) — A Rust fuzzer, using [AFL](http://lcamtuf.coredump.cx/afl/) [<img src="https://api.travis-ci.org/rust-fuzz/afl.rs.svg?branch=master">](https://travis-ci.org/rust-fuzz/afl.rs)
* [[ **⭐ 38 | 👁️ 2 | 🔀 5** ] AlKass/polish](https://github.com/AlKass/polish) — Mini Testing/Test-Driven Framework [![Build Status](https://api.travis-ci.org/AlKass/polish.svg?branch=master)](https://travis-ci.org/AlKass/polish) [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
* [mockiato](https://crates.io/crates/mockiato) — A strict, yet friendly mocking library for Rust 2018 [<img src="https://api.travis-ci.com/myelin-ai/mockiato.svg?branch=master">](https://travis-ci.com/myelin-ai/mockiato)
* [mutagen](https://crates.io/crates/mutagen) — A source-level mutation testing framework (nightly only) [<img src="https://api.travis-ci.org/llogiq/mutagen.svg?branch=master">](https://travis-ci.org/llogiq/mutagen)
* [proptest](https://crates.io/crates/proptest) — property testing framework inspired by the [Hypothesis](https://hypothesis.works/) framework for Python [<img src="https://api.travis-ci.org/altsysrq/proptest.svg?branch=master">](https://travis-ci.org/altsysrq/proptest)
* [quickcheck](https://crates.io/crates/quickcheck) — A Rust implementation of [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) [<img src="https://api.travis-ci.org/BurntSushi/quickcheck.svg?branch=master">](https://travis-ci.org/BurntSushi/quickcheck)
* [mockito](https://crates.io/crates/mockito) — HTTP mocking [<img src="https://api.travis-ci.org/lipanski/mockito.svg?branch=master">](https://travis-ci.org/lipanski/mockito)
* [speculate](https://crates.io/crates/speculate) — An RSpec inspired minimal testing framework for Rust
* [tarpaulin](https://crates.io/crates/cargo-tarpaulin) — A code coverage tool designed for Rust [<img src="https://api.travis-ci.org/repositories/xd009642/tarpaulin.svg?branch=master">](https://travis-ci.org/xd009642/tarpaulin)

### Transpiling

* [[ **⭐ 1995 | 👁️ 69 | 🔀 108** ] jameysharp/corrode](https://github.com/jameysharp/corrode) — A C to Rust translator written in Haskell.
* [[ **⭐ 1109 | 👁️ 29 | 🔀 50** ] immunant/c2rust](https://github.com/immunant/c2rust) — C to Rust translator and cross checker built atop Clang/LLVM. [![Build Status](https://api.travis-ci.org/immunant/c2rust.svg?branch=master)](https://travis-ci.org/immunant/c2rust)


## Libraries

### Artificial Intelligence

#### Genetic algorithms

* [[ **⭐ 57 | 👁️ 2 | 🔀 6** ] Martin1887/oxigen](https://github.com/Martin1887/oxigen) — Fast, parallel, extensible and adaptable genetic algorithm library. A example using this library solves the N Queens problem for N = 255 in only few seconds and using less than 1 MB of RAM.
* [[ **⭐ 56 | 👁️ 4 | 🔀 13** ] m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) — Genetic Algorithm library in Rust. In maintenance mode.
* [[ **⭐ 45 | 👁️ 2 | 🔀 10** ] willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) — This library allows you to write evolutionary algorithms (EA) using the Rust programming language. Written by Willi Kappler, License: MIT — Version 0.4 (2017.06.26).
* [[ **⭐ 29 | 👁️ 2 | 🔀 3** ] innoave/genevo](https://github.com/innoave/genevo) — Execute genetic algorithm (GA) simulations in a customizable and extensible way.
* [[ **⭐ 9 | 👁️ 1 | 🔀 0** ] yurytsoy/revonet](https://github.com/yurytsoy/revonet) — Rust implementation of real-coded GA for solving optimization problems and training of neural networks.
* [[ **⭐ 5 | 👁️ 1 | 🔀 0** ] mneumann/evo-rs](https://github.com/mneumann/evo-rs) — Evolutionary Algorithm Library for Rust. Without changes for 3 years.

#### Machine learning

[[machine learning](https://crates.io/keywords/machine-learning)]

See also [About Rust’s Machine Learning Community](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f).

* [[ **⭐ 5417 | 👁️ 195 | 🔀 271** ] autumnai/leaf](https://github.com/autumnai/leaf) — Open Machine Intelligence framework. [![Build Status](https://api.travis-ci.org/autumnai/leaf.svg?branch=master)](https://travis-ci.org/autumnai/leaf). Abandoned project. The most updated fork is [spearow/juice]( https://github.com/spearow/juice).
* [[ **⭐ 2164 | 👁️ 100 | 🔀 194** ] tensorflow/rust](https://github.com/tensorflow/rust) — Rust language bindings for TensorFlow. [![Build Status](https://api.travis-ci.org/tensorflow/rust.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* [[ **⭐ 939 | 👁️ 58 | 🔀 122** ] AtheMathmo/rusty-machine](https://github.com/AtheMathmo/rusty-machine) — Machine learning library for Rust [![Build Status](https://api.travis-ci.org/AtheMathmo/rusty-machine.svg?branch=master)](https://travis-ci.org/AtheMathmo/rusty-machine)
* [[ **⭐ 408 | 👁️ 19 | 🔀 38** ] LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) — Rust language bindings for PyTorch. [![Build Status](https://api.travis-ci.org/LaurentMazare/tch-rs.svg?branch=master)](https://travis-ci.org/LaurentMazare/tch-rs)
* [[ **⭐ 392 | 👁️ 22 | 🔀 34** ] maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) — Machine learning crate for Rust. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://circleci.com/gh/maciejkula/rustlearn)
* [[ **⭐ 8 | 👁️ 3 | 🔀 1** ] avinashshenoy97/RusticSOM](https://github.com/avinashshenoy97/RusticSOM) — Rust library for Self Organising Maps (SOM). [![Build Status](https://api.travis-ci.org/avinashshenoy97/RusticSOM.svg?branch=master)](https://travis-ci.org/avinashshenoy97/RusticSOM)


### Astronomy

[[astronomy](https://crates.io/keywords/astronomy)]

* [[ **⭐ 105 | 👁️ 12 | 🔀 17** ] saurvs/astro-rust](https://github.com/saurvs/astro-rust) — astronomy for Rust [<img src="https://api.travis-ci.org/saurvs/astro-rust.svg?branch=master">](https://travis-ci.org/saurvs/astro-rust)
* [[ **⭐ 15 | 👁️ 2 | 🔀 1** ] flosse/rust-sun](https://github.com/flosse/rust-sun) — A rust port of the JS library suncalc [<img src="https://api.travis-ci.org/flosse/rust-sun.svg?branch=master">](https://travis-ci.org/flosse/rust-sun)
* [fitsio](https://crates.io/crates/fitsio) — fits interface library wrapping cfitsio [<img src="https://api.travis-ci.org/mindriot101/rust-fitsio.svg?branch=master">](https://travis-ci.org/mindriot101/rust-fitsio)

### Asynchronous

* [[ **⭐ 3435 | 👁️ 109 | 🔀 410** ] mio](https://github.com/tokio-rs/mio) — MIO is a lightweight IO library for Rust with a focus on adding as little overhead as possible over the OS abstractions [<img src="https://api.travis-ci.org/tokio-rs/mio.svg?branch=master">](https://travis-ci.org/tokio-rs/mio)
* [[ **⭐ 3075 | 👁️ 135 | 🔀 387** ] rust-lang-nursery/futures-rs](https://github.com/rust-lang-nursery/futures-rs) — Zero-cost futures in Rust [<img src="https://api.travis-ci.com/rust-lang-nursery/futures-rs.svg?branch=master" alt="Travis CI Build Status">](https://travis-ci.org/rust-lang-nursery/futures-rs)
* [[ **⭐ 907 | 👁️ 38 | 🔀 29** ] rustasync/runtime](https://github.com/rustasync/runtime) - A runtime agnostic API designed to make async feel like its part of stdlib [![Crates.io](https://img.shields.io/crates/v/runtime.svg?style=flat-square)](https://crates.io/crates/runtime) [![Build status](https://img.shields.io/azure-devops/build/yoshuawuyts/rustasync/2/master.svg?style=flat-square)](https://dev.azure.com/yoshuawuyts/rustasync/_build?definitionId=2)
* [[ **⭐ 711 | 👁️ 37 | 🔀 35** ] Xudong-Huang/may](https://github.com/Xudong-Huang/may) — rust stackful coroutine library [<img src="https://api.travis-ci.org/Xudong-Huang/may.svg?branch=master">](https://travis-ci.org/Xudong-Huang/may)
* [[ **⭐ 425 | 👁️ 15 | 🔀 28** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) — A coroutine I/O library with a working-stealing scheduler [<img src="https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 119 | 👁️ 6 | 🔀 10** ] dpc/mioco](https://github.com/dpc/mioco) — Scalable, coroutine-based, asynchronous IO handling library [<img src="https://img.shields.io/travis/dpc/mioco/master.svg?style=flat-square" alt="Travis CI Build Status">](https://travis-ci.org/dpc/mioco)
* [[ **⭐ 49 | 👁️ 6 | 🔀 0** ] TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) — Monad/MonadIO, Handler, Coroutine/doNotation, Functional Programming features for Rust [<img src="https://api.travis-ci.org/TeaEntityLab/fpRust.svg?branch=master" alt="Travis CI Build Status">](https://travis-ci.org/TeaEntityLab/fpRust)

### Audio

[[audio](https://crates.io/keywords/audio)]

* [[ **⭐ 386 | 👁️ 22 | 🔀 61** ] tomaka/rodio](https://github.com/RustAudio/rodio) — A Rust audio playback library [![Build Status](https://api.travis-ci.org/tomaka/rodio.svg?branch=master)](https://travis-ci.org/tomaka/rodio)
  * [[ **⭐ 244 | 👁️ 18 | 🔀 66** ] RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) — [PortAudio](http://www.portaudio.com/) bindings [<img src="https://api.travis-ci.org/RustAudio/rust-portaudio.svg?branch=master">](https://travis-ci.org/RustAudio/rust-portaudio)
* [[ **⭐ 71 | 👁️ 2 | 🔀 17** ] jpernst/alto](https://github.com/jpernst/alto) — OpenAL 1.1 bindings [<img src="https://api.travis-ci.org/jpernst/alto.svg?branch=master">](https://travis-ci.org/jpernst/alto)
* [[ **⭐ 68 | 👁️ 4 | 🔀 8** ] jhasse/ears](https://github.com/jhasse/ears) — A simple library to play Sounds and Musics, on top of OpenAL and libsndfile [<img src="https://api.travis-ci.org/jhasse/ears.svg?branch=master">](https://travis-ci.org/jhasse/ears)
* [[ **⭐ 50 | 👁️ 4 | 🔀 14** ] musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) — [PortMidi](http://portmedia.sourceforge.net/portmidi/) bindings [<img src="https://api.travis-ci.org/musitdev/portmidi-rs.svg?branch=master">](https://travis-ci.org/musitdev/portmidi-rs)
* [[ **⭐ 37 | 👁️ 3 | 🔀 13** ] GuillaumeGomez/rust-fmod](https://github.com/GuillaumeGomez/rust-fmod) — [FMOD](https://www.fmod.com) bindings [![Build Status](https://api.travis-ci.org/GuillaumeGomez/rust-fmod.svg?branch=master)](https://travis-ci.org/GuillaumeGomez/rust-fmod)
* [hound](https://crates.io/crates/hound) — A WAV encoding and decoding library [<img src="https://api.travis-ci.org/ruuda/hound.svg?branch=master">](https://travis-ci.org/ruuda/hound)
* [RustAudio](https://github.com/RustAudio)

### Authentication

* [[ **⭐ 382 | 👁️ 10 | 🔀 84** ] Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) — [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) lib in rust  [![Build Status](https://api.travis-ci.org/Keats/jsonwebtoken.svg?branch=master)](https://travis-ci.org/Keats/jsonwebtoken)

### Automotive

* [[ **⭐ 17 | 👁️ 4 | 🔀 14** ] mbr/socketcan](https://github.com/mbr/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] — Linux SocketCAN library [<img src="https://api.travis-ci.org/mbr/socketcan-rs.svg?branch=master">](https://travis-ci.org/mbr/socketcan-rs)
* [[ **⭐ 9 | 👁️ 2 | 🔀 1** ] oefd/tokio-socketcan](https://github.com/oefd/tokio-socketcan) [[tokio-socketcan]](https://crates.io/crates/tokio-socketcan)] — Linux SocketCAN support for tokio based on the socketcan crate
* [[ **⭐ 8 | 👁️ 1 | 🔀 3** ] marcelbuesing/can-dbc](https://github.com/marcelbuesing/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] — A parser for the DBC format [<img src="https://api.travis-ci.org/marcelbuesing/can-dbc.svg?branch=dev">](https://travis-ci.org/marcelbuesing/can-dbc)
* [[ **⭐ 7 | 👁️ 4 | 🔀 1** ] JulianSchmid/dlt_parse](https://github.com/JulianSchmid/dlt-parse-rs) — Rust DLT (Diagnostic Log and Trace) packet parser [<img src="https://api.travis-ci.org/JulianSchmid/dlt-parse-rs.svg?branch=master">](https://travis-ci.org/JulianSchmid/dlt-parse-rs)
* [[ **⭐ 5 | 👁️ 3 | 🔀 1** ] JulianSchmid/someip_parse](https://github.com/JulianSchmid/someip-parse-rs) [[someip_parse](https://crates.io/crates/someip_parse)] — A library for parsing the SOME/IP network protocol (without payload interpretation) [<img src="https://api.travis-ci.org/JulianSchmid/someip-parse-rs.svg?branch=master">](https://travis-ci.org/JulianSchmid/someip-parse-rs)
* [[ **⭐ 3 | 👁️ 8 | 🔀 0** ] Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] — LIN bus driver traits and protocol implementation [<img src="https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg">](https://circleci.com/gh/Sensirion/lin-bus-rs)
* [[ **⭐ 2 | 👁️ 2 | 🔀 0** ] LibreTuner/tuneutils](https://github.com/LibreTuner/tuneutils) [[tuneutils](https://crates.io/crates/tuneutils)] — Utilities for interfacing with, diagnosing, and tuning car
* [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] — Linux SocketCAN BCM support for tokio [<img src="https://api.travis-ci.org/marcelbuesing/tokio-socketcan-bcm.svg?branch=master">](https://travis-ci.org/marcelbuesing/tokio-socketcan-bcm)
* [canparse](https://crates.io/crates/canparse) — A CAN signal and definition parser [<img src="https://api.travis-ci.org/jmagnuson/canparse.svg?branch=master">](https://travis-ci.org/jmagnuson/canparse)
* [j2534](https://crates.io/crates/j2534) — J2534 PassThru bindings

### Bioinformatics

* [Rust-Bio](https://github.com/rust-bio) — bioinformatics libraries in Rust.

### Caching

* [[ **⭐ 201 | 👁️ 6 | 🔀 11** ] jaemk/cached](https://github.com/jaemk/cached) — Simple function caching/memoization
* [[ **⭐ 40 | 👁️ 2 | 🔀 14** ] aisk/rust-memcache](https://github.com/aisk/rust-memcache) — Memcached client library [<img src="https://api.travis-ci.org/aisk/rust-memcache.svg?branch=master">](https://travis-ci.org/aisk/rust-memcache)
* [[ **⭐ 16 | 👁️ 2 | 🔀 3** ] jaysonsantos/bmemcached-rs](https://github.com/jaysonsantos/bmemcached-rs) — Memcached library written in pure rust [<img src="https://api.travis-ci.org/jaysonsantos/bmemcached-rs.svg?branch=master">](https://travis-ci.org/jaysonsantos/bmemcached-rs)

### Concurrency

* [[ **⭐ 3506 | 👁️ 90 | 🔀 221** ] Rayon](https://github.com/rayon-rs/rayon) – A data parallelism library for Rust [<img src="https://api.travis-ci.org/rayon-rs/rayon.svg?branch=master">](https://travis-ci.org/rayon-rs/rayon)
* [[ **⭐ 2390 | 👁️ 70 | 🔀 169** ] crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) – Support for parallelism and low-level concurrency in Rust [<img src="https://api.travis-ci.org/crossbeam-rs/crossbeam.svg?branch=master">](https://travis-ci.org/crossbeam-rs/crossbeam)
* [[ **⭐ 425 | 👁️ 15 | 🔀 28** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) – Coroutine I/O for Rust [<img src="https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 356 | 👁️ 29 | 🔀 35** ] rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) – Coroutine Library in Rust [<img src="https://img.shields.io/travis/rustcc/coroutine-rs.svg">](https://travis-ci.org/rustcc/coroutine-rs)
* [[ **⭐ 46 | 👁️ 1 | 🔀 1** ] orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] — Library to abstract from `Rc`/`Arc` pointer types. [<img src="https://api.travis-ci.org/orium/archery.svg?branch=master">](https://travis-ci.org/orium/archery)
* [[ **⭐ 21 | 👁️ 6 | 🔀 1** ] pop-os/bus-writer](https://github.com/pop-os/bus-writer) — Generic single-reader, multi-writer
* [[ **⭐ 4 | 👁️ 0 | 🔀 0** ] aymanmadkour/glock](https://github.com/aymanmadkour/glock) – Granular locking crate for Rust. [<img src="https://api.travis-ci.org/aymanmadkour/glock.svg?branch=master">](https://travis-ci.org/aymanmadkour/glock)

### Cloud

* AWS [[aws](https://crates.io/keywords/aws)]
  * [[ **⭐ 1422 | 👁️ 39 | 🔀 236** ] rusoto/rusoto](https://github.com/rusoto/rusoto) — [<img src="https://api.travis-ci.org/rusoto/rusoto.svg?branch=master">](https://travis-ci.org/rusoto/rusoto)

### Command-line

* Argument parsing
  * [[ **⭐ 3551 | 👁️ 61 | 🔀 343** ] clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] — A simple to use, full featured command-line argument parser [<img src="https://api.travis-ci.com/clap-rs/clap-rs.svg?branch=master">](https://travis-ci.org/clap-rs/clap-rs)
  * [[ **⭐ 1284 | 👁️ 18 | 🔀 81** ] TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] — parse command line argument by defining a struct [<img src="https://api.travis-ci.org/TeXitoi/structopt.svg?branch=master">](https://travis-ci.org/TeXitoi/structopt)
  * [[ **⭐ 681 | 👁️ 19 | 🔀 83** ] docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] — A Rust implementation of [DocOpt](http://docopt.org) [<img src="https://api.travis-ci.org/docopt/docopt.rs.svg?branch=master">](https://travis-ci.org/docopt/docopt.rs)
  * [[ **⭐ 428 | 👁️ 12 | 🔀 33** ] killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] — quickly build cool CLI apps in Rust [<img src="https://api.travis-ci.org/killercup/quicli.svg">](https://travis-ci.org/killercup/quicli)
* Human-centered design
  * [[ **⭐ 634 | 👁️ 12 | 🔀 33** ] rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] — panic messages for humans [<img src="https://api.travis-ci.org/rust-cli/human-panic.svg">](https://travis-ci.org/rust-cli/human-panic)
* Line editor
  * [[ **⭐ 442 | 👁️ 10 | 🔀 64** ] kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] — readline implementation in Rust [<img src="https://api.travis-ci.org/kkawakam/rustyline.svg?branch=master">](https://travis-ci.org/kkawakam/rustyline)
  * [[ **⭐ 116 | 👁️ 6 | 🔀 9** ] murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] — Configurable, extensible, interactive line reader [<img src="https://api.travis-ci.org/murarth/linefeed.svg">](https://travis-ci.org/murarth/linefeed)
  * [[ **⭐ 61 | 👁️ 4 | 🔀 21** ] MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] — A library offering readline-like functionality [<img src="https://api.travis-ci.org/MovingtoMars/liner.svg">](https://travis-ci.org/MovingtoMars/liner)
  * [[ **⭐ 23 | 👁️ 2 | 🔀 5** ] srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] — pure-Rust command line editing library
* Pipeline
  * [[ **⭐ 255 | 👁️ 4 | 🔀 15** ] oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] — A builder for subprocess pipelines and IO redirection [<img src="https://api.travis-ci.org/oconnor663/duct.rs.svg?branch=master">](https://travis-ci.org/oconnor663/duct.rs)
  * [[ **⭐ 127 | 👁️ 4 | 🔀 15** ] hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] — facilities for interaction with external pipelines [<img src="https://api.travis-ci.org/hniksic/rust-subprocess.svg?branch=master">](https://travis-ci.org/hniksic/rust-subprocess)
  * [[ **⭐ 62 | 👁️ 5 | 🔀 10** ] philippkeller/rexpect](https://github.com/philippkeller/rexpect) [[rexpect](https://crates.io/crates/rexpect)] — automate interactive applications such as ssh, ftp, passwd, etc [<img src="https://api.travis-ci.org/philippkeller/rexpect.svg?branch=master">](https://travis-ci.org/philippkeller/rexpect)
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] — pipe your output through an external pager [<img src="https://gitlab.com/imp/pager-rs/badges/master/build.svg">](https://gitlab.com/imp/pager-rs/pipelines)
* Progress
  * [[ **⭐ 1279 | 👁️ 17 | 🔀 72** ] mitsuhiko/indicatif](https://github.com/mitsuhiko/indicatif) [[indicatif](https://crates.io/crates/indicatif)] — indicate progress to users
  * [[ **⭐ 286 | 👁️ 11 | 🔀 35** ] a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] — console progress bar for Rust
  * [[ **⭐ 238 | 👁️ 3 | 🔀 6** ] FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] — 60+ elegant terminal spinners
* Prompt
  * [[ **⭐ 27 | 👁️ 5 | 🔀 1** ] hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)]  — build an interactive command prompt [<img src="https://api.travis-ci.org/hashmismatch/terminal_cli.rs.svg?branch=master">](https://travis-ci.org/hashmismatch/terminal_cli.rs)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)]  — A minimal, blazing fast, and extremely customizable prompt for any shell [![Build status](https://badgen.net/azure-pipelines/starship-control/starship/Starship%20Test%20Suite)](https://dev.azure.com/starship-control/starship/_build)
* Style
  * [[ **⭐ 240 | 👁️ 4 | 🔀 31** ] ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] — control colours and formatting on ANSI terminals [<img src="https://api.travis-ci.org/ogham/rust-ansi-term.svg?branch=master">](https://travis-ci.org/ogham/rust-ansi-term)
  * [[ **⭐ 69 | 👁️ 2 | 🔀 2** ] SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] — A dead simple ANSI terminal color painting library
  * [[ **⭐ 55 | 👁️ 1 | 🔀 2** ] LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] — cross-platform styled terminal output [<img src="https://img.shields.io/travis/LukasKalbertodt/term-painter/master.svg">](https://travis-ci.org/LukasKalbertodt/term-painter)
  * [[ **⭐ 13 | 👁️ 1 | 🔀 0** ] vitiral/termstyle](https://github.com/vitiral/termstyle) [[termstyle](https://docs.rs/termstyle/0.1.2/termstyle/)] — build (and test) formatted and styled command line applications
* TUI
  * [[ **⭐ 2188 | 👁️ 40 | 🔀 104** ] fdehau/tui-rs](https://github.com/fdehau/tui-rs) [[tui](https://crates.io/crates/tui)] — A TUI library inspired by [blessed-contrib](https://github.com/yaronn/blessed-contrib) and [termui](https://github.com/gizak/termui) [<img src="https://api.travis-ci.org/fdehau/tui-rs.svg?branch=master">](https://travis-ci.org/fdehau/tui-rs)
  * [[ **⭐ 1414 | 👁️ 34 | 🔀 94** ] gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] — build rich TUI applications [<img src="https://api.travis-ci.org/gyscos/Cursive.svg?branch=master">](https://travis-ci.org/gyscos/Cursive)
  * [[ **⭐ 1147 | 👁️ 24 | 🔀 97** ] ticki/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] — bindless library for controlling terminals/TTY  [<img src="https://api.travis-ci.com/ticki/termion.svg?branch=master">](https://travis-ci.org/ticki/termion)
  * [[ **⭐ 495 | 👁️ 18 | 🔀 56** ] TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] — crossplatform terminal library
  * [[ **⭐ 31 | 👁️ 4 | 🔀 6** ] ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] — Rust library for putting things in a grid [<img src="https://api.travis-ci.org/ogham/rust-term-grid.svg?branch=master">](https://travis-ci.org/ogham/rust-term-grid)
  * BearLibTerminal
    * [[ **⭐ 20 | 👁️ 2 | 🔀 8** ] cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] — [BearLibTerminal](https://bitbucket.org/cfyzium/bearlibterminal) bindings [<img src="https://api.travis-ci.org/nabijaczleweli/BearLibTerminal.rs.svg?branch=master">](https://travis-ci.org/nabijaczleweli/BearLibTerminal.rs)
  * ncurses
    * [[ **⭐ 473 | 👁️ 13 | 🔀 83** ] jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] — [ncurses](https://www.gnu.org/software/ncurses/) bindings [<img src="https://api.travis-ci.org/jeaye/ncurses-rs.svg?branch=master">](https://travis-ci.org/jeaye/ncurses-rs)
    * [[ **⭐ 208 | 👁️ 13 | 🔀 23** ] ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] — curses library, supports linux and windows [<img src="https://api.travis-ci.org/ihalila/pancurses.svg?branch=master">](https://travis-ci.org/ihalila/pancurses)
  * Termbox
    * [[ **⭐ 391 | 👁️ 20 | 🔀 53** ] gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] — bindings to [Termbox](https://github.com/nsf/termbox) [<img src="https://api.travis-ci.org/gchp/rustbox.svg?branch=master">](https://travis-ci.org/gchp/rustbox)

### Compression

  * [[ **⭐ 318 | 👁️ 20 | 🔀 40** ] dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) — Brotli decompressor in Rust that optionally avoids the stdlib
  * [[ **⭐ 55 | 👁️ 5 | 🔀 12** ] ende76/brotli-rs](https://github.com/ende76/brotli-rs) — implementation of Brotli compression
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
* bzip2
  * [[ **⭐ 32 | 👁️ 2 | 🔀 25** ] alexcrichton/bzip2-rs](https://github.com/alexcrichton/bzip2-rs) — [libbz2](http://www.bzip.org) bindings [<img src="https://api.travis-ci.com/alexcrichton/bzip2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/bzip2-rs)
* gzip
  * [[ **⭐ 66 | 👁️ 7 | 🔀 8** ] carols10cents/zopfli](https://github.com/carols10cents/zopfli) — implementation of the [Zopfli](https://github.com/google/zopfli) compression algorithm for higher quality deflate or zlib compression
* miniz
  * [[ **⭐ 277 | 👁️ 5 | 🔀 69** ] alexcrichton/flate2-rs](https://github.com/alexcrichton/flate2-rs) — [miniz](https://code.google.com/archive/p/miniz) bindings [<img src="https://api.travis-ci.com/alexcrichton/flate2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/flate2-rs)
* snappy
  * [[ **⭐ 13 | 👁️ 2 | 🔀 3** ] JeffBelgum/rust-snappy](https://github.com/JeffBelgum/rust-snappy) — [snappy](https://github.com/google/snappy) bindings [<img src="https://api.travis-ci.org/JeffBelgum/rust-snappy.svg?branch=master">](https://travis-ci.org/JeffBelgum/rust-snappy)
* tar
  * [[ **⭐ 229 | 👁️ 6 | 🔀 79** ] alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) — tar archive reading/writing in Rust [<img src="https://api.travis-ci.com/alexcrichton/tar-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/tar-rs)
* zip
  * [[ **⭐ 197 | 👁️ 11 | 🔀 71** ] mvdnes/zip-rs](https://github.com/mvdnes/zip-rs) — read and write ZIP archives [![Build Status](https://api.travis-ci.org/mvdnes/zip-rs.svg?branch=master)](https://travis-ci.org/mvdnes/zip-rs)

### Computation

* [[ **⭐ 1410 | 👁️ 47 | 🔀 191** ] rustsim/nalgebra](https://github.com/rustsim/nalgebra) — low-dimensional linear algebra library [<img src="https://api.travis-ci.org/rustsim/nalgebra.svg?branch=master">](https://travis-ci.org/rustsim/nalgebra)
* [[ **⭐ 90 | 👁️ 9 | 🔀 6** ] argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] — A pure Rust optimization library [<img src="https://api.travis-ci.org/argmin-rs/argmin.svg?branch=master">](https://travis-ci.org/argmin-rs/argmin)
  * [[ **⭐ 70 | 👁️ 5 | 🔀 13** ] mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) — BLAS bindings
  * [[ **⭐ 47 | 👁️ 9 | 🔀 11** ] stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) — LAPACK bindings [<img src="https://api.travis-ci.org/blas-lapack-rs/lapack.svg?branch=master">](https://travis-ci.org/blas-lapack-rs/lapack)
  * [[ **⭐ 37 | 👁️ 4 | 🔀 10** ] stainless-steel/blas](https://github.com/blas-lapack-rs/blas) — BLAS bindings [<img src="https://api.travis-ci.org/blas-lapack-rs/blas.svg?branch=master">](https://travis-ci.org/blas-lapack-rs/blas)
  * [[ **⭐ 29 | 👁️ 8 | 🔀 20** ] fizyk20/rust-gmp](https://github.com/fizyk20/rust-gmp) — libgmp bindings [<img src="https://api.travis-ci.org/fizyk20/rust-gmp.svg?branch=master">](https://travis-ci.org/fizyk20/rust-gmp)
  * [[ **⭐ 7 | 👁️ 4 | 🔀 2** ] noshu/lbfgsb-sys](https://github.com/noshu/lbfgsb-sys) — Rust binding of fortran L-BFGS-B subroutine
  * [[ **⭐ 2 | 👁️ 3 | 🔀 1** ] noshu/cg-sys](https://github.com/noshu/cg-sys) — Rust binding of fortran CG+ subroutine
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
* [Conjugate Gradient](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* [GMP](https://gmplib.org/)
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez) — GSL bindings [<img src="https://api.travis-ci.org/GuillaumeGomez/rust-GSL.svg?branch=master">](https://travis-ci.org/GuillaumeGomez/rust-GSL)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
* [L-BFGS-B](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* Parallel
  * [[ **⭐ 433 | 👁️ 25 | 🔀 32** ] autumnai/collenchyma](https://github.com/autumnai/collenchyma) — An extensible, pluggable, backend-agnostic framework for parallel, high-performance computations on CUDA, OpenCL and common host CPU. [<img src="https://api.travis-ci.org/autumnai/collenchyma.svg?branch=master">](https://travis-ci.org/autumnai/collenchyma)
  * [[ **⭐ 400 | 👁️ 19 | 🔀 36** ] arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) — [Arrayfire](https://arrayfire.com/) bindings
  * [[ **⭐ 162 | 👁️ 12 | 🔀 38** ] luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) — [OpenCL](https://www.khronos.org/opencl/) bindings [<img src="https://api.travis-ci.org/luqmana/rust-opencl.svg?branch=master">](https://travis-ci.org/luqmana/rust-opencl)
* Scirust
  * [[ **⭐ 195 | 👁️ 18 | 🔀 21** ] indigits/scirust](https://github.com/indigits/scirust) — scientific computing library in Rust [![Build Status](https://api.travis-ci.org/indigits/scirust.svg?branch=master)](https://travis-ci.org/indigits/scirust)
* Statrs
  * [[ **⭐ 152 | 👁️ 10 | 🔀 22** ] boxtown/statrs](https://github.com/boxtown/statrs) — Robust statistical computation library in Rust [![Build Status](https://api.travis-ci.org/boxtown/statrs.svg?branch=master)](https://travis-ci.org/boxtown/statrs)
* Rustimization [[rustimization](https://crates.io/crates/rustimization)]
* [[ **⭐ 1132 | 👁️ 35 | 🔀 27** ] calebwin/emu](https://github.com/calebwin/emu) — A language for GPGPU numerical computing from a Rust macro
  * [[ **⭐ 36 | 👁️ 3 | 🔀 6** ] noshu/rustimization](https://github.com/noshu/rustimization) — A rust optimization library which includes L-BFGS-B and Conjugate Gradient algorithm

### Configuration

* [[ **⭐ 589 | 👁️ 14 | 🔀 70** ] mehcode/config-rs](https://github.com/mehcode/config-rs) [[config](https://crates.io/crates/config)] — Layered configuration system for Rust applications (with strong support for 12-factor applications). [<img src="https://api.travis-ci.org/mehcode/config-rs.svg?branch=master">](https://travis-ci.org/mehcode/config-rs)
* [[ **⭐ 18 | 👁️ 1 | 🔀 8** ] Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] — library for processing application configuration easily

### Cryptography

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [[ **⭐ 1567 | 👁️ 49 | 🔀 139** ] ctz/rustls](https://github.com/ctz/rustls) — A Rust implementation of TLS
* [[ **⭐ 1489 | 👁️ 38 | 🔀 270** ] briansmith/ring](https://github.com/briansmith/ring) — Safe, fast, small crypto using Rust and BoringSSL's cryptography primitives. [<img src="https://api.travis-ci.org/briansmith/ring.svg?branch=master">](https://travis-ci.org/briansmith/ring)
* [[ **⭐ 946 | 👁️ 67 | 🔀 216** ] exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] — extensible framework for blockchain projects [<img src="https://api.travis-ci.com/exonum/exonum.svg?branch=master">](https://travis-ci.org/exonum/exonum)
* [[ **⭐ 915 | 👁️ 32 | 🔀 218** ] DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) — cryptographic algorithms in Rust [<img src="https://api.travis-ci.org/DaGenix/rust-crypto.svg?branch=master">](https://travis-ci.org/DaGenix/rust-crypto)
* [[ **⭐ 574 | 👁️ 21 | 🔀 371** ] sfackler/rust-openssl](https://github.com/sfackler/rust-openssl) — [OpenSSL](https://www.openssl.org/) bindings [<img src="https://api.travis-ci.org/sfackler/rust-openssl.svg?branch=master">](https://travis-ci.org/sfackler/rust-openssl)
* [[ **⭐ 491 | 👁️ 22 | 🔀 117** ] dnaq/sodiumoxide](https://github.com/sodiumoxide/sodiumoxide) — [libsodium](https://github.com/jedisct1/libsodium) bindings [<img src="https://api.travis-ci.com/dnaq/sodiumoxide.svg?branch=master">](https://travis-ci.org/dnaq/sodiumoxide)
* [[ **⭐ 408 | 👁️ 15 | 🔀 55** ] RustCrypto/hashes](https://github.com/RustCrypto/hashes) — Collection of cryptographic hash functions written in pure Rust [<img src="https://api.travis-ci.org/RustCrypto/hashes.svg?branch=master">](https://travis-ci.org/RustCrypto/hashes)
* [[ **⭐ 196 | 👁️ 18 | 🔀 66** ] briansmith/webpki](https://github.com/briansmith/webpki) — Web PKI TLS X.509 certificate validation in Rust. [<img src="https://api.travis-ci.org/briansmith/webpki.svg?branch=master">](https://travis-ci.org/briansmith/webpki)
* [[ **⭐ 190 | 👁️ 11 | 🔀 84** ] sfackler/rust-native-tls](https://github.com/sfackler/rust-native-tls) — Bindings for native TLS libraries
* [[ **⭐ 145 | 👁️ 13 | 🔀 11** ] brycx/orion](https://github.com/brycx/orion) — This library aims to provide easy and usable crypto. 'Usable' meaning exposing high-level API's that are easy to use and hard to misuse. [<img src="https://api.travis-ci.org/brycx/orion.svg?branch=master">](https://travis-ci.org/brycx/orion)
* [[ **⭐ 132 | 👁️ 8 | 🔀 16** ] libOctavo/octavo](https://github.com/libOctavo/octavo) — Modular hash and crypto library in Rust [<img src="https://api.travis-ci.org/libOctavo/octavo.svg?branch=master">](https://travis-ci.org/libOctavo/octavo)
* [[ **⭐ 120 | 👁️ 13 | 🔀 8** ] klutzy/suruga](https://github.com/klutzy/suruga) — A Rust implementation of [TLS 1.2](https://tools.ietf.org/html/rfc5246)
* [[ **⭐ 89 | 👁️ 4 | 🔀 10** ] conradkdotcom/rooster](https://github.com/conradkdotcom/rooster) [[rooster](https://crates.io/crates/rooster)] — Simple password manager to use in your terminal
* [[ **⭐ 64 | 👁️ 6 | 🔀 30** ] kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) — Bindings for Security Framework (OSX native 
* [[ **⭐ 34 | 👁️ 2 | 🔀 3** ] racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) — A Rust port of the password primitives used in the Django Project. It doesn't require Django, only hashes and validates passwords according to its style. [<img src="https://api.travis-ci.org/Racum/rust-djangohashers.svg?branch=master">](https://travis-ci.org/Racum/rust-djangohashers)
* [[ **⭐ 30 | 👁️ 3 | 🔀 3** ] doublify/libblockchain](https://github.com/doublify/libblockchain) — A Blockchain implementation [<img src="https://api.travis-ci.org/doublify/libblockchain.svg?branch=master">](https://travis-ci.org/doublify/libblockchain)
* [[ **⭐ 30 | 👁️ 4 | 🔀 8** ] rustindia/mpw-rs](https://github.com/rustindia/mpw-rs) — Pure Rust implementation of the Master Password password manager [<img src="https://api.travis-ci.org/rustindia/mpw-rs.svg?branch=master">](https://travis-ci.org/rustindia/mpw-rs)
* [[ **⭐ 26 | 👁️ 11 | 🔀 4** ] Fraunhofer-AISEC/rabe](https://github.com/Fraunhofer-AISEC/rabe) — Library providing several Attribute-Based Encryption (ABE) schemes
* [[ **⭐ 5 | 👁️ 0 | 🔀 0** ] RNCryptor/rncryptor-rs](https://github.com/RNCryptor/rncryptor-rs) — Pure Rust implementation of the RNCryptor AES file format

)
* [[ **⭐ 19 | 👁️ 4 | 🔀 24** ] steffengy/schannel-rs](https://github.com/steffengy/schannel-rs) — Bindings for Schannel (Windows native TLS)
* [[ **⭐ 9 | 👁️ 2 | 🔀 1** ] zebradil/rustotpony](https://github.com/zebradil/rustotpony) — CLI manager of one-time password generators aka Google Authenticator (TOTP)

### Database

[[database](https://crates.io/keywords/database)]

* [[ **⭐ 632 | 👁️ 14 | 🔀 38** ] sfackler/r2d2](https://github.com/sfackler/r2d2) — generic connection pool [<img src="https://api.travis-ci.org/sfackler/r2d2.svg?branch=master">](https://travis-ci.org/sfackler/r2d2)
* NoSQL [[nosql](https://crates.io/keywords/nosql)]

    * [[ **⭐ 223 | 👁️ 13 | 🔀 41** ] AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] — native client written in Rust [<img src="https://api.travis-ci.org/AlexPikalov/cdrs.svg?branch=master">](https://travis-ci.org/AlexPikalov/cdrs)
     * [[ **⭐ 33 | 👁️ 8 | 🔀 7** ] Rincon](https://github.com/innoave/rincon) — An ArangoDB (NoSQL and Graph store) driver for Rust
    * [[ **⭐ 9 | 👁️ 7 | 🔀 13** ] Metaswitch/cassandra-rs](https://github.com/Metaswitch/cassandra-rs) —  bindings to the DataStax C/C++ client [<img src="https://api.travis-ci.org/Metaswitch/cassandra-rs.svg?branch=master">](https://travis-ci.org/Metaswitch/cassandra-rs)
  * [ArangoDB](https://www.arangodb.com)
  * [Cassandra](http://cassandra.apache.org) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [[ **⭐ 28 | 👁️ 2 | 🔀 6** ] Sofa](https://github.com/YellowInnovation/sofa) — an interface to CouchDB HTTP REST API for stable rust
    * [[ **⭐ 26 | 👁️ 2 | 🔀 3** ] chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] — A Rust client for the CouchDB REST API [<img src="https://api.travis-ci.org/chill-rs/chill.svg?branch=master">](https://travis-ci.org/chill-rs/chill)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [[ **⭐ 203 | 👁️ 10 | 🔀 35** ] benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] — A Rust client for the [Elastic](https://www.elastic.co/) REST API [<img src="https://api.travis-ci.org/benashford/rs-es.svg?branch=master">](https://travis-ci.org/benashford/rs-es)
    * [[ **⭐ 5 | 👁️ 2 | 🔀 2** ] elastic-rs/elastic-reqwest](https://github.com/elastic-rs/elastic-reqwest) [[elastic_reqwest](https://crates.io/crates/elastic_reqwest)] — A lightweight implementation of the Elasticsearch API based on Reqwest [<img src="https://api.travis-ci.org/elastic-rs/elastic-reqwest.svg">](https://travis-ci.org/elastic-rs/elastic-reqwest)
  * etcd
    * [[ **⭐ 98 | 👁️ 6 | 🔀 20** ] jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] — A client library for CoreOS's etcd. [<img src="https://api.travis-ci.org/jimmycuadra/rust-etcd.svg?branch=master">](https://travis-ci.org/jimmycuadra/rust-etcd)
  * ForestDB
    * [[ **⭐ 41 | 👁️ 3 | 🔀 15** ] driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) — Synchronization interface [<img src="https://api.travis-ci.org/driftluo/InfluxDBClient-rs.svg?branch=master">](https://travis-ci.org/driftluo/InfluxDBClient-rs)
    * [[ **⭐ 9 | 👁️ 5 | 🔀 3** ] panoptix-za/influxdb-rs](https://github.com/panoptix-za/influxdb-rs) — asynchronous interface [<img src="https://api.travis-ci.org/panoptix-za/influxdb-rs.svg?branch=master">](https://travis-ci.org/panoptix-za/influxdb-rs)
    * [[ **⭐ 6 | 👁️ 1 | 🔀 1** ] vhbit/sherwood](https://github.com/vhbit/sherwood) — [ForestDB](https://github.com/couchbase/forestdb) bindings [<img src="https://api.travis-ci.org/vhbit/sherwood.svg?branch=master">](https://travis-ci.org/vhbit/sherwood)
  * [InfluxDB](https://www.influxdata.com/)
  * LevelDB
    * [[ **⭐ 85 | 👁️ 8 | 🔀 26** ] skade/leveldb](https://github.com/skade/leveldb) — [LevelDB](https://github.com/google/leveldb) bindings [<img src="https://api.travis-ci.org/skade/leveldb.svg?branch=master">](https://travis-ci.org/skade/leveldb)
  * LMDB [[lmdb](https://crates.io/keywords/lmdb)]
    * [[ **⭐ 87 | 👁️ 8 | 🔀 34** ] vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] — [LMDB](https://symas.com/lmdb/) bindings [<img src="https://api.travis-ci.org/vhbit/lmdb-rs.svg?branch=master">](https://travis-ci.org/vhbit/lmdb-rs)
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [[ **⭐ 403 | 👁️ 25 | 🔀 75** ] mongodb-labs/mongo-rust-driver-prototype](https://github.com/mongodb-labs/mongo-rust-driver-prototype) [[mongodb](https://crates.io/crates/mongodb)] — [MongoDB](https://www.mongodb.com/) bindings [<img src="https://api.travis-ci.org/mongodb-labs/mongo-rust-driver-prototype.svg">](https://travis-ci.org/mongodb-labs/mongo-rust-driver-prototype)
  * Neo4j [[cypher](https://crates.io/keywords/cypher), [neo4j](https://crates.io/keywords/neo4j)]
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [[ **⭐ 1308 | 👁️ 35 | 🔀 195** ] mitsuhiko/redis-rs](https://github.com/mitsuhiko/redis-rs) — [Redis](https://redis.io/) library in Rust [<img src="https://api.travis-ci.org/mitsuhiko/redis-rs.svg?branch=master">](https://travis-ci.org/mitsuhiko/redis-rs)
    * [[ **⭐ 546 | 👁️ 25 | 🔀 241** ] rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) — RocksDB bindings [<img src="https://api.travis-ci.org/rust-rocksdb/rust-rocksdb.svg?branch=master">](https://travis-ci.org/rust-rocksdb/rust-rocksdb)
    * [[ **⭐ 98 | 👁️ 8 | 🔀 25** ] bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] — A client library for Apache ZooKeeper. [<img src="https://api.travis-ci.org/bonifaido/rust-zookeeper.svg?branch=master">](https://travis-ci.org/bonifaido/rust-zookeeper)
    * [[ **⭐ 57 | 👁️ 5 | 🔀 10** ] zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) — UnQLite bindings [<img src="https://api.travis-ci.org/zitsen/unqlite.rs.svg?branch=master">](https://travis-ci.org/zitsen/unqlite.rs)
    * [[ **⭐ 44 | 👁️ 2 | 🔀 8** ] seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) — a lightweight and simple key-value store, heavily inspired by Python's PickleDB. [<img src="https://api.travis-ci.org/seladb/pickledb-rs.svg?branch=master">](https://travis-ci.org/seladb/pickledb-rs)
  * [RocksDB](https://rocksdb.org/)
  * [UnQLite](https://unqlite.org/)
  * [ZooKeeper](https://zookeeper.apache.org/)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
* SQL [[sql](https://crates.io/keywords/sql)]
  * Microsoft SQL
    * [[ **⭐ 143 | 👁️ 10 | 🔀 32** ] steffengy/tiberius](https://github.com/steffengy/tiberius) — [<img src="https://api.travis-ci.org/steffengy/tiberius.svg?branch=master">](https://travis-ci.org/steffengy/tiberius)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [[ **⭐ 301 | 👁️ 5 | 🔀 64** ] blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] — A native MySql client [<img src="https://api.travis-ci.org/blackbeam/rust-mysql-simple.svg?branch=master">](https://travis-ci.org/blackbeam/rust-mysql-simple)
    * [[ **⭐ 127 | 👁️ 15 | 🔀 14** ] AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) — A MySQL Proxy [<img src="https://api.travis-ci.org/AgilData/mysql-proxy-rs.svg?branch=master">](https://travis-ci.org/AgilData/mysql-proxy-rs)
    * [[ **⭐ 126 | 👁️ 4 | 🔀 26** ] blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] — asyncronous Rust Mysql driver based on Tokio. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://circleci.com/gh/blackbeam/mysql_async/tree/master)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [[ **⭐ 1588 | 👁️ 49 | 🔀 165** ] sfackler/rust-postgres](https://github.com/sfackler/rust-postgres) [[postgres](https://crates.io/crates/postgres)] — A native [PostgreSQL](https://www.postgresql.org/) client [<img src="https://api.travis-ci.org/sfackler/rust-postgres.svg?branch=master">](https://travis-ci.org/sfackler/rust-postgres)
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [[ **⭐ 619 | 👁️ 15 | 🔀 123** ] jgallagher/rusqlite](https://github.com/jgallagher/rusqlite) — [Sqlite3](https://www.sqlite.org/index.html) bindings [<img src="https://api.travis-ci.org/jgallagher/rusqlite.svg?branch=master">](https://travis-ci.org/jgallagher/rusqlite)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [[ **⭐ 4856 | 👁️ 108 | 🔀 458** ] diesel-rs/diesel](https://github.com/diesel-rs/diesel) — an ORM and Query builder for Rust [![Build Status](https://api.travis-ci.org/diesel-rs/diesel.svg)](https://travis-ci.org/diesel-rs/diesel)
  * [[ **⭐ 131 | 👁️ 6 | 🔀 9** ] ivanceras/rustorm](https://github.com/ivanceras/rustorm) — an ORM for Rust [![Build Status](https://api.travis-ci.org/ivanceras/rustorm.svg)](https://travis-ci.org/ivanceras/rustorm)

### Data processing

* [[ **⭐ 2088 | 👁️ 119 | 🔀 186** ] weld-project/weld](https://github.com/weld-project/weld) — High-performance runtime for data analytics applications
* [[ **⭐ 1104 | 👁️ 47 | 🔀 124** ] bluss/ndarray](https://github.com/rust-ndarray/ndarray) — N-dimensional array with array views, multidimensional slicing, and efficient operations
* [[ **⭐ 112 | 👁️ 15 | 🔀 6** ] kernelmachine/utah](https://github.com/kernelmachine/utah) — Dataframe structure and operations in Rust

### Data structures

* [[ **⭐ 803 | 👁️ 18 | 🔀 132** ] bluss/rust-itertools](https://github.com/rust-itertools/itertools) — [<img src="https://api.travis-ci.com/bluss/rust-itertools.svg?branch=master">](https://travis-ci.org/bluss/rust-itertools)
* [[ **⭐ 475 | 👁️ 17 | 🔀 27** ] orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] — Persistent data structures in Rust. [<img src="https://api.travis-ci.org/orium/rpds.svg?branch=master">](https://travis-ci.org/orium/rpds)
* [[ **⭐ 201 | 👁️ 8 | 🔀 39** ] fizyk20/generic-array](https://github.com/fizyk20/generic-array) – a hack to allow for arrays sized by typenums [<img src="https://api.travis-ci.org/fizyk20/generic-array.svg?branch=master">](https://travis-ci.org/fizyk20/generic-array)
* [[ **⭐ 84 | 👁️ 5 | 🔀 8** ] Nemo157/roaring-rs](https://github.com/Nemo157/roaring-rs) – Roaring Bitmaps in Rust [<img src="https://api.travis-ci.org/Nemo157/roaring-rs.svg?branch=master">](https://travis-ci.org/Nemo157/roaring-rs)
* [[ **⭐ 45 | 👁️ 3 | 🔀 4** ] danielpclark/array_tool](https://github.com/danielpclark/array_tool) — Array helpers for Rust. Some of the most common methods you would use on Arrays made available on Vectors. Polymorphic implementations for handling most of your use cases. [<img src="https://api.travis-ci.org/danielpclark/array_tool.svg?branch=master">](https://travis-ci.org/danielpclark/array_tool)
* [[ **⭐ 35 | 👁️ 4 | 🔀 6** ] garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] — A priority queue that implements priority changes. [<img src="https://api.travis-ci.org/garro95/priority-queue.svg?branch=master">](https://travis-ci.org/garro95/priority-queue)
* [[ **⭐ 21 | 👁️ 4 | 🔀 1** ] xfix/enum-map](https://github.com/xfix/enum-map) [[enum-map](https://crates.io/crates/enum-map)] — An optimized map implementation for enums using an array to store values. [<img src="https://api.travis-ci.org/xfix/enum-map.svg?branch=master">](https://travis-ci.org/xfix/enum-map)
* [[ **⭐ 20 | 👁️ 2 | 🔀 2** ] whitfin/usher](https://github.com/whitfin/usher) [[usher](https://crates.io/crates/usher)] — Parameterized routing for generic resources in Rust.
* [[ **⭐ 12 | 👁️ 4 | 🔀 2** ] pop-os/progress-streams](https://github.com/pop-os/progress-streams) — Progress callbacks for types which implement `dyn io::Read` or `dyn io::Write`.
* [[ **⭐ 10 | 👁️ 2 | 🔀 0** ] billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] — Ternary search tree collection [<img src="https://api.travis-ci.org/billyevans/tst.svg?branch=master">](https://travis-ci.org/billyevans/tst)
* [contain-rs](https://github.com/contain-rs) — Extension of Rust's std::collections

### Data visualization

* [[ **⭐ 206 | 👁️ 10 | 🔀 19** ] milliams/plotlib](https://github.com/milliams/plotlib) — [<img src="https://api.travis-ci.org/milliams/plotlib.svg?branch=master">](https://travis-ci.org/milliams/plotlib)
* [[ **⭐ 105 | 👁️ 6 | 🔀 7** ] saresend/gust](https://github.com/saresend/Gust) — [<img src="https://api.travis-ci.org/saresend/Gust.svg?branch=master">](https://travis-ci.org/saresend/Gust)

### Date and time

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [[ **⭐ 1007 | 👁️ 24 | 🔀 146** ] chronotope/chrono](https://github.com/chronotope/chrono) — [<img src="https://api.travis-ci.org/chronotope/chrono.svg?branch=master">](https://travis-ci.org/chronotope/chrono)
* [[ **⭐ 15 | 👁️ 4 | 🔀 1** ] yaa110/rust-persian-calendar](https://github.com/yaa110/rust-persian-calendar) — [<img src="https://api.travis-ci.org/yaa110/rust-persian-calendar.svg?branch=master">](https://travis-ci.org/yaa110/rust-persian-calendar)

### Distributed systems

* Antimony
  * [[ **⭐ 44 | 👁️ 5 | 🔀 2** ] antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] — stream processing / distributed computation platform [<img src="https://api.travis-ci.org/antimonyproject/antimony.svg?branch=master">](https://travis-ci.org/antimonyproject/antimony)
* Apache Hadoop
  * [[ **⭐ 17 | 👁️ 4 | 🔀 3** ] whitfin/efflux](https://github.com/whitfin/efflux) — Easy Hadoop Streaming and MapReduce interfaces in Rust.
* Apache Kafka
  * [[ **⭐ 411 | 👁️ 16 | 🔀 52** ] spicavigo/kafka-rust](https://github.com/spicavigo/kafka-rust) — [<img src="https://api.travis-ci.org/spicavigo/kafka-rust.svg?branch=master">](https://travis-ci.org/spicavigo/kafka-rust)
  * [[ **⭐ 376 | 👁️ 17 | 🔀 67** ] fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] — [librdkafka](https://github.com/edenhill/librdkafka) bindings [<img src="https://api.travis-ci.org/fede1024/rust-rdkafka.svg?branch=master">](https://travis-ci.org/fede1024/rust-rdkafka)
* Beanstalkd
  * [[ **⭐ 39 | 👁️ 2 | 🔀 11** ] schickling/rust-beanstalkd](https://github.com/schickling/rust-beanstalkd) — [Beanstalkd](https://github.com/beanstalkd/beanstalkd) bindings [<img src="https://api.travis-ci.org/schickling/rust-beanstalkd.svg?branch=master">](https://travis-ci.org/schickling/rust-beanstalkd)
* HDFS
  * [[ **⭐ 23 | 👁️ 2 | 🔀 8** ] hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) — libhdfs bindings [<img src="https://api.travis-ci.org/hyunsik/hdfs-rs.svg?branch=master">](https://travis-ci.org/hyunsik/hdfs-rs)

### Email

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [[ **⭐ 445 | 👁️ 11 | 🔀 67** ] lettre/lettre](https://github.com/lettre/lettre) — an SMTP-library for Rust [<img src="https://api.travis-ci.org/lettre/lettre.svg?branch=master">](https://travis-ci.org/lettre/lettre)
* [[ **⭐ 56 | 👁️ 5 | 🔀 15** ] staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] — A library for parsing real-world email files [<img src="https://api.travis-ci.org/staktrace/mailparse.svg?branch=master">](https://travis-ci.org/staktrace/mailparse)
* [[ **⭐ 38 | 👁️ 1 | 🔀 2** ] GildedHonour/atarashii_imap](https://github.com/GildedHonour/atarashii_imap) — 新しい (atarashii/new) IMAP client in Rust. It supports plain and secure connections [<img src="https://api.travis-ci.org/GildedHonour/atarashii_imap.svg?branch=master">](https://travis-ci.org/GildedHonour/atarashii_imap)
* [[ **⭐ 31 | 👁️ 2 | 🔀 17** ] gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) — unofficial Rust library for SendGrid API [<img src="https://api.travis-ci.org/gsquire/sendgrid-rs.svg?branch=master">](https://travis-ci.org/gsquire/sendgrid-rs)

### Encoding

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [[ **⭐ 53 | 👁️ 6 | 🔀 10** ] alex/rust-asn1](https://github.com/alex/rust-asn1) — A Rust ASN.1 (DER) serializer [<img src="https://api.travis-ci.org/alex/rust-asn1.svg?branch=master">](https://travis-ci.org/alex/rust-asn1)
* Bencode
  * [[ **⭐ 26 | 👁️ 2 | 🔀 12** ] arjantop/rust-bencode](https://github.com/arjantop/rust-bencode) — [Bencode](https://en.wikipedia.org/wiki/Bencode) implementation in Rust [<img src="https://api.travis-ci.org/arjantop/rust-bencode.svg?branch=master">](https://travis-ci.org/arjantop/rust-bencode)
* Binary
  * [[ **⭐ 712 | 👁️ 22 | 🔀 110** ] TyOverby/bincode](https://github.com/servo/bincode) — A binary encoder/decoder in Rust [<img src="https://api.travis-ci.com/TyOverby/bincode.svg?branch=master">](https://travis-ci.org/TyOverby/bincode)
  * [[ **⭐ 414 | 👁️ 16 | 🔀 61** ] m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] —  cross-platform, zero-copy, and endian-aware binary parsing [<img src="https://api.travis-ci.org/m4b/goblin.svg?branch=master">](https://travis-ci.org/m4b/goblin)
  * [[ **⭐ 30 | 👁️ 6 | 🔀 0** ] arcnmx/nue](https://github.com/arcnmx/nue) — I/O and binary data encoding for Rust [<img src="https://api.travis-ci.org/arcnmx/nue.svg?branch=master">](https://travis-ci.org/arcnmx/nue)
* BSON
  * [[ **⭐ 107 | 👁️ 8 | 🔀 34** ] zonyitoo/bson-rs](https://github.com/zonyitoo/bson-rs) — [<img src="https://api.travis-ci.org/zonyitoo/bson-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/bson-rs)
* Byte swapping
  * [[ **⭐ 479 | 👁️ 14 | 🔀 89** ] BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) — Supports big-endian, little-endian and native byte orders [<img src="https://api.travis-ci.org/BurntSushi/byteorder.svg?branch=master">](https://travis-ci.org/BurntSushi/byteorder)
* Cap'n Proto
  * [[ **⭐ 875 | 👁️ 37 | 🔀 91** ] capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) — [<img src="https://api.travis-ci.org/capnproto/capnproto-rust.svg?branch=master">](https://travis-ci.org/capnproto/capnproto-rust)
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) — CBOR support for serde [<img src="https://api.travis-ci.org/pyfisch/cbor.svg?branch=master">](https://travis-ci.org/pyfisch/cbor)
* Character Encoding
  * [[ **⭐ 188 | 👁️ 10 | 🔀 56** ] lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) — [<img src="https://api.travis-ci.org/lifthrasiir/rust-encoding.svg?branch=master">](https://travis-ci.org/lifthrasiir/rust-encoding)
  * [[ **⭐ 148 | 👁️ 12 | 🔀 21** ] hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] — A Gecko-oriented implementation of the Encoding Standard in Rust [<img src="https://api.travis-ci.org/hsivonen/encoding_rs.svg?branch=master">](https://travis-ci.org/hsivonen/encoding_rs)
* CRC
  * [[ **⭐ 54 | 👁️ 7 | 🔀 21** ] mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) — [<img src="https://api.travis-ci.org/mrhooray/crc-rs.svg?branch=master">](https://travis-ci.org/mrhooray/crc-rs)
* CSV
  * [[ **⭐ 670 | 👁️ 15 | 🔀 98** ] BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) — A fast and flexible CSV reader and writer, with support for Serde [<img src="https://api.travis-ci.org/BurntSushi/rust-csv.svg?branch=master">](https://travis-ci.org/BurntSushi/rust-csv)
  * [[ **⭐ 33 | 👁️ 3 | 🔀 4** ] frol/flatc-rust](https://github.com/frol/flatc-rust) — FlatBuffers compiler (flatc) integration for Cargo build scripts [<img src="https://api.travis-ci.org/frol/flatc-rust.svg?branch=master">](https://travis-ci.org/frol/flatc-rust)
* [FlatBuffers](https://google.github.io/flatbuffers/)
* HAR
  * [[ **⭐ 7 | 👁️ 1 | 🔀 4** ] mandrean/har-rs](https://github.com/mandrean/har-rs) — A HTTP Archive Format (HAR) serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/har-rs.svg?branch=master)](https://travis-ci.org/mandrean/har-rs)
* HTML
  * [[ **⭐ 927 | 👁️ 47 | 🔀 145** ] servo/html5ever](https://github.com/servo/html5ever) — High-performance browser-grade HTML5 parser [<img src="https://api.travis-ci.com/servo/html5ever.svg?branch=master">](https://travis-ci.org/servo/html5ever)
  * [[ **⭐ 23 | 👁️ 4 | 🔀 11** ] veddan/rust-htmlescape](https://github.com/veddan/rust-htmlescape) — encoding/decoding HTML entities [<img src="https://api.travis-ci.org/veddan/rust-htmlescape.svg?branch=master">](https://travis-ci.org/veddan/rust-htmlescape)
* JSON
  * [[ **⭐ 1285 | 👁️ 23 | 🔀 206** ] serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] — JSON support for [Serde](https://github.com/serde-rs/serde) framework [<img src="https://api.travis-ci.org/serde-rs/json.svg?branch=master">](https://travis-ci.org/serde-rs/json)
  * [[ **⭐ 541 | 👁️ 10 | 🔀 11** ] pikkr/pikkr](https://github.com/pikkr/pikkr) [[pikkr](https://crates.io/crates/pikkr)] — JSON parser which picks up values directly without performing tokenization in Rust
  * [[ **⭐ 305 | 👁️ 14 | 🔀 32** ] maciejhirsz/json-rust](https://github.com/maciejhirsz/json-rust) [[json](https://crates.io/crates/json)] — JSON implementation in Rust [<img src="https://api.travis-ci.org/maciejhirsz/json-rust.svg?branch=master">](https://travis-ci.org/maciejhirsz/json-rust)
  * [[ **⭐ 203 | 👁️ 8 | 🔀 6** ] Licenser/simdjson-rs](https://github.com/simd-lite/simdjson-rs) [[simd-json](https://crates.io/crates/simd-json)] - High performance JSON parser based on a port of simdjson 
* Jsonnet
  * [[ **⭐ 24 | 👁️ 2 | 🔀 7** ] Qihoo360/rust-jsonnet](https://github.com/Qihoo360/rust-jsonnet) —  [<img src="https://api.travis-ci.org/Qihoo360/rust-jsonnet.svg?branch=master">](https://travis-ci.org/Qihoo360/rust-jsonnet)
* MsgPack
  * [[ **⭐ 399 | 👁️ 16 | 🔀 57** ] 3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) — A pure Rust low/high level MessagePack implementation [<img src="https://api.travis-ci.org/3Hren/msgpack-rust.svg?branch=master">](https://travis-ci.org/3Hren/msgpack-rust)
* PEM
  * [[ **⭐ 10 | 👁️ 2 | 🔀 7** ] jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] — A Rust based way to parse and encode PEM-encoded data [<img src="https://api.travis-ci.org/jcreekmore/pem-rs.svg?branch=master">](https://travis-ci.org/jcreekmore/pem-rs)
* Postman Collection
  * [[ **⭐ 2 | 👁️ 1 | 🔀 1** ] mandrean/postman-collection-rs](https://github.com/mandrean/postman-collection-rs) — A Postman Collection v1, v2 & v2.1 serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/postman-collection-rs.svg?branch=master)](https://travis-ci.org/mandrean/postman-collection-rs)
* ProtocolBuffers
  * [[ **⭐ 1157 | 👁️ 25 | 🔀 199** ] stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) — [<img src="https://api.travis-ci.org/stepancheg/rust-protobuf.svg?branch=master">](https://travis-ci.org/stepancheg/rust-protobuf)
  * [[ **⭐ 822 | 👁️ 19 | 🔀 93** ] danburkert/prost](https://github.com/danburkert/prost) — [<img src="https://api.travis-ci.org/danburkert/prost.svg?branch=master">](https://travis-ci.org/danburkert/prost)
* RON (Rusty Object Notation)
  * [[ **⭐ 884 | 👁️ 24 | 🔀 37** ] https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) — [<img src="https://api.travis-ci.org/ron-rs/ron.svg?branch=master">](https://travis-ci.org/https://github.com/ron-rs/ron)
* Tnetstring
  * [[ **⭐ 16 | 👁️ 2 | 🔀 7** ] erickt/rust-tnetstring](https://github.com/erickt/rust-tnetstring) — [<img src="https://api.travis-ci.org/erickt/rust-tnetstring.svg?branch=master">](https://travis-ci.org/erickt/rust-tnetstring)
* TOML
  * [[ **⭐ 573 | 👁️ 17 | 🔀 125** ] alexcrichton/toml-rs](https://github.com/alexcrichton/toml-rs) — [<img src="https://api.travis-ci.com/alexcrichton/toml-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/toml-rs)
* XML
  * [[ **⭐ 295 | 👁️ 13 | 🔀 45** ] tafia/quick-xml](https://github.com/tafia/quick-xml) — High performance XML pull reader/writer [<img src="https://api.travis-ci.org/tafia/quick-xml.svg?branch=master">](https://travis-ci.org/tafia/quick-xml)
  * [[ **⭐ 261 | 👁️ 10 | 🔀 68** ] netvl/xml-rs](https://github.com/netvl/xml-rs) — A streaming XML library [<img src="https://api.travis-ci.org/netvl/xml-rs.svg?branch=master">](https://travis-ci.org/netvl/xml-rs)
  * [[ **⭐ 119 | 👁️ 7 | 🔀 19** ] shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) — An XML library in Rust [<img src="https://api.travis-ci.org/shepmaster/sxd-document.svg?branch=master">](https://travis-ci.org/shepmaster/sxd-document)
  * [[ **⭐ 73 | 👁️ 6 | 🔀 13** ] Florob/RustyXML](https://github.com/Florob/RustyXML) — an XML parser written in Rust [<img src="https://api.travis-ci.org/Florob/RustyXML.svg?branch=master">](https://travis-ci.org/Florob/RustyXML)
  * [[ **⭐ 72 | 👁️ 5 | 🔀 14** ] shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) — An XPath library in Rust [<img src="https://api.travis-ci.org/shepmaster/sxd-xpath.svg?branch=master">](https://travis-ci.org/shepmaster/sxd-xpath)
  * [[ **⭐ 39 | 👁️ 4 | 🔀 3** ] media-io/yaserde](https://github.com/media-io/yaserde) — Yet Another Serializer/Deserializer specialized for XML [<img src="https://api.travis-ci.org/media-io/yaserde.svg?branch=master">](https://travis-ci.org/media-io/yaserde)
* YAML
  * [[ **⭐ 320 | 👁️ 11 | 🔀 68** ] chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) — The missing YAML 1.2 implementation for Rust. [<img src="https://api.travis-ci.org/chyh1990/yaml-rust.svg?branch=master">](https://travis-ci.org/chyh1990/yaml-rust)
  * [[ **⭐ 227 | 👁️ 7 | 🔀 44** ] dtolnay/serde-yaml](https://github.com/dtolnay/serde-yaml) [[serde\_yaml](https://crates.io/crates/serde_yaml)] — YAML support for [Serde](https://github.com/serde-rs/serde) framework [<img src="https://api.travis-ci.org/dtolnay/serde-yaml.svg?branch=master">](https://travis-ci.org/dtolnay/serde-yaml)
  * [[ **⭐ 20 | 👁️ 4 | 🔀 12** ] kimhyunkang/libyaml-rust](https://github.com/kimhyunkang/libyaml-rust) — [libyaml](https://pyyaml.org/wiki/LibYAML) bindings [<img src="https://api.travis-ci.org/kimhyunkang/libyaml-rust.svg?branch=master">](https://travis-ci.org/kimhyunkang/libyaml-rust)
  * [[ **⭐ 9 | 👁️ 1 | 🔀 2** ] vitiral/stfu8](https://github.com/vitiral/stfu8) — Sorta Text Format in UTF-8 [<img src="https://api.travis-ci.org/vitiral/stfu8.svg?branch=master">](https://travis-ci.org/vitiral/stfu8)

### Filesystem

[[filesystem](https://crates.io/keywords/filesystem)]
* Operations
  * [[ **⭐ 56 | 👁️ 3 | 🔀 7** ] webdesus/fs_extra](https://github.com/webdesus/fs_extra) — expanding opportunities standard library std::fs and std::io [<img src="https://api.travis-ci.org/webdesus/fs_extra.svg?branch=master">](https://travis-ci.org/webdesus/fs_extra)
  * [[ **⭐ 31 | 👁️ 2 | 🔀 3** ] vitiral/path_abs](https://github.com/vitiral/path_abs) — Absolute serializable path types and associated methods. [<img src="https://api.travis-ci.org/vitiral/path_abs.svg?branch=master">](https://travis-ci.org/webdesus/fs_extr://travis-ci.org/vitiral/path_abs)
  * [[ **⭐ 10 | 👁️ 4 | 🔀 4** ] pop-os/sys-mount](https://github.com/pop-os/sys-mount) — High level abstraction for the `mount` / `umount2` system calls.
  * [[ **⭐ 7 | 👁️ 4 | 🔀 0** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) -> UDisks2 DBus API
* Temporary Files
  * [[ **⭐ 1055 | 👁️ 27 | 🔀 38** ] zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] — Zero-details, privacy-focused embeddable file system. [<img src="https://api.travis-ci.org/zboxfs/zbox.svg?branch=master">](https://travis-ci.org/zboxfs/zbox)
  * [[ **⭐ 309 | 👁️ 9 | 🔀 42** ] Stebalien/tempfile](https://github.com/Stebalien/tempfile) — temporary file library [<img src="https://api.travis-ci.org/Stebalien/tempfile.svg?branch=master">](https://travis-ci.org/Stebalien/tempfile)
  * [[ **⭐ 136 | 👁️ 13 | 🔀 27** ] rust-lang-deprecated/tempdir](https://github.com/rust-lang-deprecated/tempdir) — temporary directory library [<img src="https://api.travis-ci.com/rust-lang-nursery/tempdir.svg?branch=master">](https://travis-ci.org/rust-lang-nursery/tempdir)
  * [[ **⭐ 10 | 👁️ 2 | 🔀 7** ] Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] — list and manipulate unix extended file attributes [<img src="https://api.travis-ci.org/Stebalien/xattr.svg?branch=master">](https://travis-ci.org/Stebalien/xattr)

### Game development

See also [Are we game yet?](http://arewegameyet.com)
* Allegro
  * [[ **⭐ 55 | 👁️ 4 | 🔀 10** ] SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) — [Allegro 5](https://liballeg.org/) bindings [<img src="https://api.travis-ci.org/SiegeLord/RustAllegro.svg?branch=master">](https://travis-ci.org/SiegeLord/RustAllegro)
* Challonge
  * [[ **⭐ 0 | 👁️ 1 | 🔀 1** ] vityafx/challonge-rs](https://github.com/vityafx/challonge-rs) [[challonge](https://crates.io/crates/challonge)] — Client library for the Challonge REST API. Helps to organize tournaments. [<img src="https://api.travis-ci.org/vityafx/challonge-rs.svg?branch=master">](https://travis-ci.org/vityafx/challonge-rs)
* Corange
  * [[ **⭐ 40 | 👁️ 9 | 🔀 2** ] lucidscape/corange-rs](https://github.com/lucidscape/corange-rs) — [Corange](https://github.com/orangeduck/Corange) bindings
* Entity-Component Systems (ECS)
  * [[ **⭐ 1424 | 👁️ 55 | 🔀 150** ] slide-rs/specs](https://github.com/amethyst/specs) — Specs Parallel ECS [<img src="https://api.travis-ci.org/slide-rs/specs.svg">](httpsL//github.com/travis-ci.org/slide-rs/specs)
* Game Engines
  * [[ **⭐ 1980 | 👁️ 60 | 🔀 251** ] ggez](https://github.com/ggez/ggez) — A lightweight game framework for making 2D games with minimum friction [<img src="https://api.travis-ci.org/ggez/ggez.svg?branch=master">](https://travis-ci.org/ggez/ggez)
  * [[ **⭐ 1119 | 👁️ 41 | 🔀 275** ] Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) — SDL2 bindings [<img src="https://api.travis-ci.org/Rust-SDL2/rust-sdl2.svg?branch=master">](https://travis-ci.org/Rust-SDL2/rust-sdl2)
  * [[ **⭐ 291 | 👁️ 13 | 🔀 14** ] Unrust](https://github.com/unrust/unrust) — unrust — A pure rust based (webgl 2.0 / native) game engine
  * [[ **⭐ 165 | 👁️ 15 | 🔀 44** ] brson/rust-sdl](https://github.com/brson/rust-sdl) — SDL1 bindings [<img src="https://api.travis-ci.org/brson/rust-sdl.svg?branch=master">](https://travis-ci.org/brson/rust-sdl)
  * [[ **⭐ 59 | 👁️ 9 | 🔀 2** ] Vulkust](https://github.com/Hossein-Noroozpour/vulkust) — Vulkust — A safe, highly multithreaded, Vulkan based game engine written with Rust.
  * [Amethyst](https://amethyst.rs) — Data-oriented game engine [<img src="https://jenkins.amethyst-engine.org/job/amethyst/job/master/badge/icon">](https://jenkins.amethyst-engine.org/blue/organizations/jenkins/amethyst/activity/)
  * [Piston](https://www.piston.rs/) — [<img src="https://api.travis-ci.org/PistonDevelopers/piston.svg?branch=master">](https://travis-ci.org/PistonDevelopers/piston)
  * [Kiss3D](http://kiss3d.org/) — A Keep It Simple, Stupid 3d graphics engine written with Rust
* [SDL](http://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
* SFML
  * [[ **⭐ 398 | 👁️ 17 | 🔀 57** ] jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) — [SFML](https://www.sfml-dev.org/) bindings [<img src="https://api.travis-ci.org/jeremyletang/rust-sfml.svg?branch=master">](https://travis-ci.org/jeremyletang/rust-sfml)
* Tcod-rs
  * [[ **⭐ 189 | 👁️ 14 | 🔀 35** ] tomassedovic/tcod-rs](https://github.com/tomassedovic/tcod-rs) — Libtcod bindings for Rust.
* Victorem
  * [[ **⭐ 11 | 👁️ 1 | 🔀 0** ] VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] — Easy UDP Game Server and UDP Client framework for creating simple 2D and 3D online game prototype [<img src="https://api.travis-ci.org/VictoremWinbringer/Victorem.svg?branch=master">](https://travis-ci.org/VictoremWinbringer/Victorem)
* Voxlap
  * [[ **⭐ 9 | 👁️ 1 | 🔀 3** ] bbodi/rust-voxlap](https://github.com/bbodi/rust-voxlap) — [Voxlap](http://advsys.net/ken/voxlap.htm) bindings

### Geospatial

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [[ **⭐ 33 | 👁️ 3 | 🔀 2** ] rust-reverse-geocoder](https://github.com/llambda/rrgeo) — A fast, offline reverse geocoder in Rust, inspired by https://github.com/thampiman/reverse-geocoder
* [[ **⭐ 7 | 👁️ 2 | 🔀 3** ] DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] — coordinate transformations (2-d, 3-d, and geospatial) [<img src="https://api.travis-ci.org/DaveKram/coord_transforms.svg?branch=master">](https://travis-ci.org/DaveKram/coord_transforms)
* [[ **⭐ 3 | 👁️ 1 | 🔀 0** ] vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] — conversion between UTM, LatLon and MGRS coordinates [<img src="https://api.travis-ci.org/vlopes11/geomorph.svg?branch=master">](https://travis-ci.org/vlopes11/geomorph)
* [Georust](https://github.com/georust) — geospatial tools and libraries written in Rust

### Graphics

[[graphics](https://crates.io/keywords/graphics)]

* [[ **⭐ 3590 | 👁️ 131 | 🔀 410** ] gfx-rs/gfx](https://github.com/gfx-rs/gfx) — A high-performance, bindless graphics API for Rust. [<img src="https://img.shields.io/travis/gfx-rs/gfx/master.svg">](https://travis-ci.org/gfx-rs/gfx)
* Font
  * [[ **⭐ 462 | 👁️ 27 | 🔀 36** ] redox-os/rusttype](https://github.com/redox-os/rusttype) — A pure Rust alternative to libraries like FreeType [<img src="https://img.shields.io/travis/dredox-os/rusttype/master.svg">](https://travis-ci.org/redox-os/rusttype)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [[ **⭐ 1967 | 👁️ 74 | 🔀 237** ] glium/glium](https://github.com/glium/glium) — safe OpenGL wrapper for the Rust language. [<img src="https://api.travis-ci.org/glium/glium.svg?branch=master">](https://travis-ci.org/glium/glium)
  * [[ **⭐ 447 | 👁️ 12 | 🔀 99** ] brendanzab/gl-rs](https://github.com/brendanzab/gl-rs) — [<img src="https://api.travis-ci.org/brendanzab/gl-rs.svg?branch=master">](https://travis-ci.org/brendanzab/gl-rs)
  * [[ **⭐ 355 | 👁️ 49 | 🔀 96** ] PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) — [<img src="https://api.travis-ci.org/PistonDevelopers/glfw-rs.svg?branch=master">](https://travis-ci.org/PistonDevelopers/glfw-rs)
  * [Kiss3d](http://kiss3d.org) — draw simple geometric figures and play with them with one-liners [<img src="https://api.travis-ci.com/sebcrozet/kiss3d.json.svg?branch=master">](https://api.travis-ci.org/repositories/sebcrozet/kiss3d.json)
  * [glutin](https://crates.io/crates/glutin) — Rust alternative to [GLFW](https://www.glfw.org/) [<img src="https://api.travis-ci.org/rust-windowing/glutin.svg?branch=master">](https://travis-ci.org/rust-windowing/glutin)
* PDF
  * [[ **⭐ 1995 | 👁️ 70 | 🔀 217** ] vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] — [<img src="https://api.travis-ci.org/vulkano-rs/vulkano.svg?branch=master">](https://travis-ci.org/vulkano-rs/vulkano)
  * [[ **⭐ 562 | 👁️ 19 | 🔀 39** ] J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) — PDF document manipulation [<img src="https://api.travis-ci.org/J-F-Liu/lopdf.svg?branch=master">](https://travis-ci.org/J-F-Liu/lopdf)
  * [[ **⭐ 232 | 👁️ 14 | 🔀 15** ] fschutt/printpdf](https://github.com/fschutt/printpdf) — PDF writing library [<img src="https://api.travis-ci.org/fschutt/printpdf.svg?branch=master">](https://travis-ci.org/fschutt/printpdf)
  * [[ **⭐ 74 | 👁️ 4 | 🔀 5** ] kaj/rust-pdf](https://github.com/kaj/rust-pdf) — [<img src="https://api.travis-ci.org/kaj/rust-pdf.svg?branch=master">](https://travis-ci.org/kaj/rust-pdf)
  * [[ **⭐ 36 | 👁️ 3 | 🔀 7** ] WASM-PDF](https://github.com/jussiniinikoski/wasm-pdf) – Generates PDF files with JavaScript and WASM (WebAssembly) [<img src="https://api.travis-ci.org/jussiniinikoski/wasm-pdf.svg?branch=master">](https://travis-ci.org/jussiniinikoski/wasm-pdf)
* [Vulkan](https://www.khronos.org/vulkan/) [[vulkan](https://crates.io/keywords/vulkan)]

### Graph processing

* [[ **⭐ 9 | 👁️ 0 | 🔀 0** ] kud1ing/tinkerpop-rs](https://github.com/kud1ing/tinkerpop-rs) — an example how to use Apache TinkerPop from Rust [<img src="https://api.travis-ci.org/kud1ing/tinkerpop-rs.svg?branch=master">](https://travis-ci.org/kud1ing/tinkerpop-rs)

### GUI

[[gui](https://crates.io/keywords/gui)]

* [[ **⭐ 3551 | 👁️ 125 | 🔀 148** ] maps4print/azul](https://github.com/maps4print/azul) — A free, functional, IMGUI-oriented GUI framework for rapid development of desktop applications written in Rust, supported by the Mozilla WebRender rendering engine. [<img src="https://api.travis-ci.org/maps4print/azul.svg?branch=master">](https://travis-ci.org/maps4print/azul)
* [[ **⭐ 104 | 👁️ 6 | 🔀 13** ] autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) — A simple, cross-platform GUI automation library for Rust.
* [[ **⭐ 58 | 👁️ 11 | 🔀 3** ] rise-ui](https://github.com/rise-ui/rise) — Simple component-based cross-Platform GUI Toolkit for developing beautiful and user-friendly interfaces.
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) — An easy-to-use, immediate-mode, 2D GUI library written entirely in Rust [<img src="https://api.travis-ci.org/PistonDevelopers/conrod.svg?branch=master">](https://travis-ci.org/PistonDevelopers/conrod)


* Cocoa
* [[ **⭐ 18334 | 👁️ 847 | 🔀 2913** ] ImGui](https://github.com/ocornut/imgui)
* [[ **⭐ 13187 | 👁️ 573 | 🔀 1050** ] Nuklear](https://github.com/vurtun/nuklear)
* [[ **⭐ 9138 | 👁️ 334 | 🔀 526** ] libui](https://github.com/andlabs/libui)
  * [[ **⭐ 1492 | 👁️ 45 | 🔀 55** ] relm](https://github.com/antoyo/relm) — Asynchronous, GTK+-based, GUI library, inspired by Elm [<img src="https://api.travis-ci.org/antoyo/relm.svg?branch=master">](https://travis-ci.org/antoyo/relm)
  * [[ **⭐ 1041 | 👁️ 35 | 🔀 79** ] gtk-rs/gtk](https://github.com/gtk-rs/gtk) — GTK+ bindings [<img src="https://api.travis-ci.org/gtk-rs/gtk.svg?branch=master">](https://travis-ci.org/gtk-rs/gtk)
  * [[ **⭐ 902 | 👁️ 34 | 🔀 32** ] flutter-rs](https://github.com/flutter-rs/flutter-rs) — Build flutter desktop app in dart & rust.
  * [[ **⭐ 734 | 👁️ 28 | 🔀 125** ] imgui-rs](https://github.com/Gekkio/imgui-rs) — Rust bindings for ImGui [<img src="https://api.travis-ci.org/Gekkio/imgui-rs.svg?branch=master">](https://travis-ci.org/Gekkio/imgui-rs)
  * [[ **⭐ 422 | 👁️ 26 | 🔀 40** ] cyndis/qmlrs](https://github.com/cyndis/qmlrs) — QtQuick bindings [<img src="https://api.travis-ci.org/cyndis/qmlrs.svg?branch=master">](https://travis-ci.org/cyndis/qmlrs)
  * [[ **⭐ 342 | 👁️ 15 | 🔀 24** ] sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) — Sciter bindings [<img src="https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true">](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
  * [[ **⭐ 332 | 👁️ 19 | 🔀 26** ] Kiss-ui](https://github.com/KISS-UI/kiss-ui) — A simple UI framework built on IUP [![Build Status](https://api.travis-ci.org/cybergeek94/kiss-ui.svg?branch=master)](https://travis-ci.org/cybergeek94/kiss-ui)
  * [[ **⭐ 263 | 👁️ 15 | 🔀 8** ] nuklear-rust](https://github.com/snuk182/nuklear-rust) — Rust bindings for Nuklear [<img src="https://api.travis-ci.com/snuk182/nuklear-rust.svg?branch=master">](https://travis-ci.org/snuk182/nuklear-rust)
  * [[ **⭐ 246 | 👁️ 26 | 🔀 85** ] servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) — [<img src="https://api.travis-ci.com/servo/core-foundation-rs.svg?branch=master">](https://travis-ci.org/servo/core-foundation-rs)
  * [[ **⭐ 213 | 👁️ 22 | 🔀 20** ] pcwalton/libui-rs](https://github.com/pcwalton/libui-rs) — libui bindings [<img src="https://api.travis-ci.org/pcwalton/libui-rs.svg?branch=master">](https://travis-ci.org/pcwalton/libui-rs). Abandoned project. The most updated fork is [NoraCodes/libui-rs](https://github.com/NoraCodes/libui-rs).
  * [[ **⭐ 175 | 👁️ 16 | 🔀 16** ] White-Oak/qml-rust](https://github.com/White-Oak/qml-rust) — QML bindings. [<img src="https://api.travis-ci.org/White-Oak/qml-rust.svg?branch=master">](https://travis-ci.org/White-Oak/qml-rust)
  * [[ **⭐ 170 | 👁️ 21 | 🔀 24** ] woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - Integrate Qml and Rust by building the QMetaObject at compile time. [<img src="https://api.travis-ci.org/woboq/qmetaobject-rs.svg?branch=master">](https://travis-ci.org/woboq/qmetaobject-rs)
* [[ **⭐ 86 | 👁️ 6 | 🔀 15** ] saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) — [nativefiledialog](https://github.com/mlabbe/nativefiledialog) bindings
  * [[ **⭐ 34 | 👁️ 3 | 🔀 3** ] kylewlacy/sorbet-cocoa](https://github.com/kylewlacy/sorbet-cocoa) — [<img src="https://api.travis-ci.org/kylewlacy/sorbet-cocoa.svg?branch=master">](https://travis-ci.org/kylewlacy/sorbet-cocoa)
  * [[ **⭐ 30 | 👁️ 5 | 🔀 9** ] dcampbell24/iup-rust](https://github.com/dcampbell24/iup-rust) — IUP bindings [<img src="https://api.travis-ci.org/dcampbell24/iup-rust.svg?branch=master">](https://travis-ci.org/dcampbell24/iup-rust)
  * [[ **⭐ 28 | 👁️ 4 | 🔀 4** ] kitech/qt.rs](https://github.com/kitech/qt.rs) — Qt5 bindings [<img src="https://api.travis-ci.org/kitech/qt.rs.svg?branch=master">](https://travis-ci.org/kitech/qt.rs)
  * [[ **⭐ 13 | 👁️ 1 | 🔀 2** ] clear-coat](https://github.com/jminer/clear-coat) — Clear Coat is a Rust wrapper for the IUP GUI library
* [Flutter](https://flutter.dev/)
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
* [Qt](https://doc.qt.io)
  * [Rust Qt Binding Generator](https://phabricator.kde.org/source/rust-qt-binding-generator/) — Binding generator hosted by KDE.
  * [rust-qt](https://github.com/rust-qt) —
* [Sciter](https://sciter.com/)

### Image processing

* [[ **⭐ 1327 | 👁️ 84 | 🔀 261** ] image-rs/image](https://github.com/image-rs/image) — Basic imaging processing functions and methods for converting to and from image formats [<img src="https://api.travis-ci.org/image-rs/image.svg?branch=master">](https://travis-ci.org/image-rs/image)
* [[ **⭐ 296 | 👁️ 20 | 🔀 37** ] twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) — Rust bindings for OpenCV [<img src="https://api.travis-ci.org/twistedfall/opencv-rust.svg?branch=cv2">](https://travis-ci.org/twistedfall/opencv-rust)
* [[ **⭐ 218 | 👁️ 72 | 🔀 59** ] image-rs/imageproc](https://github.com/image-rs/imageproc) — An image processing library, based on the `image` library. [![Build Status](https://api.travis-ci.org/image-rs/imageproc.svg?branch=master)](https://travis-ci.org/image-rs/imageproc)
* [[ **⭐ 101 | 👁️ 2 | 🔀 19** ] abonander/img_hash](https://github.com/abonander/img_hash) — Perceptual image hashing and comparison for equality and similarity.
* [[ **⭐ 36 | 👁️ 6 | 🔀 6** ] teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] — A simple steganography library [<img src="https://api.travis-ci.org/teovoinea/steganography.svg?branch=master">](https://travis-ci.org/teovoinea/steganography)

### Language specification

* [[ **⭐ 84 | 👁️ 7 | 🔀 7** ] shnewto/bnf](https://github.com/shnewto/bnf) — A library for parsing Backus–Naur form context-free grammars. [<img src="https://api.travis-ci.org/shnewto/bnf.svg?branch=master">](https://travis-ci.org/shnewto/bnf)

### Logging

[[log](https://crates.io/keywords/log)]

* [[ **⭐ 799 | 👁️ 19 | 🔀 62** ] slog-rs/slog](https://github.com/slog-rs/slog) — Structured, composable logging for Rust [![Build Status](https://api.travis-ci.org/slog-rs/slog.svg?branch=master)](https://travis-ci.org/slog-rs/slog)
* [[ **⭐ 676 | 👁️ 33 | 🔀 119** ] rust-lang-nursery/log](https://github.com/rust-lang/log) — Logging implementation for Rust [![Build Status](https://api.travis-ci.com/rust-lang-nursery/log.svg?branch=master)](https://travis-ci.org/rust-lang-nursery/log)
* [[ **⭐ 301 | 👁️ 7 | 🔀 49** ] sfackler/log4rs](https://github.com/sfackler/log4rs) — highly configurable logging framework modeled after Java's Logback and log4j libraries [![Build Status](https://api.travis-ci.org/sfackler/log4rs.svg?branch=master)](https://travis-ci.org/sfackler/log4rs)
* [[ **⭐ 129 | 👁️ 6 | 🔀 26** ] seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) — A pretty, easy-to-use logger for Rust. [![Build Status](https://api.travis-ci.com/seanmonstar/pretty-env-logger.svg?branch=master)](https://travis-ci.org/seanmonstar/pretty-env-logger)

### Macro

* cute
  * [[ **⭐ 185 | 👁️ 2 | 🔀 4** ] mattgathu/cute](https://github.com/mattgathu/cute) — Macro for Python-esque list comprehensions in Rust. [![Build Status](https://api.travis-ci.org/mattgathu/cute.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* hado
  * [[ **⭐ 35 | 👁️ 2 | 🔀 1** ] ludat/hado-rs](https://github.com/ludat/hado-rs) — A little macro for writing haskell-like do expressions without too much ceremony

### Markup language

* CommonMark
  * [[ **⭐ 764 | 👁️ 26 | 🔀 126** ] raphlinus/pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) — [CommonMark](https://commonmark.org/) parser in Rust

### Mobile

[Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile)

* Android
  * [[ **⭐ 840 | 👁️ 41 | 🔀 87** ] rust-windowing/android-rs-glue](https://github.com/rust-windowing/android-rs-glue) — glue between Rust and Android [<img src="https://api.travis-ci.org/rust-windowing/android-rs-glue.svg?branch=master">](https://travis-ci.org/rust-windowing/android-rs-glue)
* iOS
  * [[ **⭐ 186 | 👁️ 12 | 🔀 18** ] TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) — A cargo lipo subcommand which automatically creates a universal library for use with your iOS application. [<img src="https://api.travis-ci.org/TimNN/cargo-lipo.svg?branch=master">](https://travis-ci.org/TimNN/cargo-lipo)
  * [[ **⭐ 38 | 👁️ 3 | 🔀 6** ] vhbit/ObjCrust](https://github.com/vhbit/ObjCrust) — using Rust to create an iOS static library [<img src="https://api.travis-ci.org/vhbit/ObjCrust.svg?branch=master">](https://travis-ci.org/vhbit/ObjCrust)
* Pebble
  * [[ **⭐ 42 | 👁️ 5 | 🔀 1** ] andars/pebble.rs](https://github.com/andars/pebble.rs) — A crate that allows Rust to be used to develop Pebble applications.
* Android / iOS
  * [[ **⭐ 9 | 👁️ 3 | 🔀 1** ] i-schuetz/rust_android_ios](https://github.com/i-schuetz/rust_android_ios) — An example of using a shared Rust lib for Android and iOS using rust-swig and cbindgen respectively.
  
### Network programming

* HTTP
  * [[ **⭐ 29 | 👁️ 4 | 🔀 4** ] pop-os/url-crawler](https://github.com/pop-os/url-crawler) — A configurable parallel web crawler, designed to crawl a website for content.
  * [[ **⭐ 27 | 👁️ 5 | 🔀 3** ] pop-os/parallel-getter](https://github.com/pop-os/parallel-getter) — Download a file with parallel GET requests to maximize bandwidth usage.
  * [[ **⭐ 12 | 👁️ 4 | 🔀 4** ] pop-os/url-scraper](https://github.com/pop-os/url-scraper) — Scrape URLs from HTML pages
* FTP
  * [[ **⭐ 87 | 👁️ 9 | 🔀 34** ] mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) — an [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-ftp.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-ftp)
* gRPC
  * [[ **⭐ 973 | 👁️ 88 | 🔀 133** ] pingcap/grpc-rs](https://github.com/tikv/grpc-rs) — The gRPC library for Rust built on C Core library and futures [![Build Status](https://api.travis-ci.org/pingcap/grpc-rs.svg?branch=master)](https://travis-ci.org/pingcap/grpc-rs)
* IPNetwork
  * [[ **⭐ 48 | 👁️ 4 | 🔀 10** ] candrew/netsim](https://github.com/canndrew/netsim) — A Rust library for network simulation and testing [<img src="https://api.travis-ci.org/canndrew/netsim.svg?branch=master">](https://travis-ci.org/canndrew/netsim)
  * [[ **⭐ 42 | 👁️ 5 | 🔀 22** ] achanda/ipnetwork](https://github.com/achanda/ipnetwork) — A library to work with IP networks in pure Rust [<img src="https://api.travis-ci.org/achanda/ipnetwork.svg?branch=master">](https://travis-ci.org/achanda/ipnetwork)
* JSON-RPC
  * [[ **⭐ 10 | 👁️ 1 | 🔀 3** ] vlopes11/futures-jsonrpc](https://github.com/vlopes11/futures-jsonrpc) [[futures-jsonrpc](https://crates.io/crates/futures-jsonrpc)] — Futures implementation for JSON-RPC [<img src="https://api.travis-ci.org/vlopes11/futures-jsonrpc.svg?branch=master">](https://travis-ci.org/vlopes11/futures-jsonrpc)
* Low level
  * [[ **⭐ 6942 | 👁️ 226 | 🔀 599** ] tokio-rs/tokio](https://github.com/tokio-rs/tokio) — A network application framework for rapid development and highly scalable production deployments of clients and servers.
  * [[ **⭐ 3997 | 👁️ 129 | 🔀 237** ] actix/actix](https://github.com/actix/actix) — Actor library for Rust [<img src="https://api.travis-ci.org/actix/actix.svg?branch=master">](https://travis-ci.org/actix/actix)
  * [[ **⭐ 1402 | 👁️ 60 | 🔀 109** ] m-labs/smoltcp](https://github.com/m-labs/smoltcp) — A standalone, event-driven TCP/IP stack that is designed for bare-metal, real-time systems [<img src="https://api.travis-ci.org/m-labs/smoltcp.svg?branch=master">](https://travis-ci.org/m-labs/smoltcp)
  * [[ **⭐ 982 | 👁️ 31 | 🔀 159** ] libpnet/libpnet](https://github.com/libpnet/libpnet) — A cross-platform, low level networking [<img src="https://api.travis-ci.org/libpnet/libpnet.svg?branch=master">](https://travis-ci.org/libpnet/libpnet)
  * [[ **⭐ 60 | 👁️ 4 | 🔀 4** ] dylanmckay/protocol](https://github.com/dylanmckay/protocol) — Custom TCP/UDP protocol definitions
* NanoMsg
  * [[ **⭐ 324 | 👁️ 16 | 🔀 48** ] thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) — [nanomsg](https://nanomsg.org/) bindings [<img src="https://api.travis-ci.org/thehydroimpulse/nanomsg.rs.svg?branch=master">](https://travis-ci.org/thehydroimpulse/nanomsg.rs)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](http://crates.io/crates/nng)] — [Nng (nanomsg v2)](https://nanomsg.github.io/nng/index.html) bindings [<img src="https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg">](https://gitlab.com/neachdainn/nng-rs/pipelines)
* NNTP
  * [[ **⭐ 12 | 👁️ 2 | 🔀 5** ] mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) — an [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-nntp.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-nntp)
* POP3
  * [[ **⭐ 16 | 👁️ 2 | 🔀 9** ] mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) — A [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-pop3.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-pop3)
* SSH
  * [[ **⭐ 174 | 👁️ 10 | 🔀 63** ] alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) — [libssh2](https://www.libssh2.org/) bindings [<img src="https://api.travis-ci.com/alexcrichton/ssh2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/ssh2-rs)
  * [Thrussh](https://github.com/pijul-scm/thrussh/) — an SSH library written from scratch in Rust, backed by [libsodium](https://download.libsodium.org/doc/)
* Stomp
  * [[ **⭐ 70 | 👁️ 5 | 🔀 12** ] zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) — A [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) client implementation in Rust [<img src="https://api.travis-ci.org/zslayton/stomp-rs.svg?branch=master">](https://travis-ci.org/zslayton/stomp-rs)
* uTP
  * [[ **⭐ 97 | 👁️ 11 | 🔀 19** ] meqif/rust-utp](https://github.com/meqif/rust-utp) — A [uTP](http://www.bittorrent.org/beps/bep_0029.html) (Micro Transport Protocol) library for Rust. [<img src="https://api.travis-ci.org/meqif/rust-utp.svg?branch=master">](https://travis-ci.org/meqif/rust-utp)
* ZeroMQ
  * [[ **⭐ 444 | 👁️ 20 | 🔀 128** ] erickt/rust-zmq](https://github.com/erickt/rust-zmq) — [ZeroMQ](https://zeromq.org/) bindings [<img src="https://api.travis-ci.org/erickt/rust-zmq.svg?branch=master">](https://travis-ci.org/erickt/rust-zmq)
* CoAP
  * [[ **⭐ 97 | 👁️ 14 | 🔀 19** ] Covertness/coap-rs](https://github.com/Covertness/coap-rs) — A [Constrained Application Protocol(CoAP)](https://tools.ietf.org/html/rfc7252) library for Rust. [<img src="https://api.travis-ci.org/Covertness/coap-rs.svg?branch=master">](https://travis-ci.org/Covertness/coap-rs)
* Docker
  * [[ **⭐ 62 | 👁️ 1 | 🔀 9** ] fussybeaver/bollard](https://github.com/fussybeaver/bollard) - Docker daemon API in Rust
* RPC
  * [[ **⭐ 27 | 👁️ 3 | 🔀 3** ] smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) — A RPC library for Rust for developing microservices in easy and simple way. [<img src="https://api.travis-ci.org/smallnest/rpcx-rs.svg?branch=master">](https://travis-ci.org/smallnest/rpcx-rs)

### Parsing

  * [[ **⭐ 3590 | 👁️ 74 | 🔀 411** ] Geal/nom](https://github.com/Geal/nom) — parser combinator library [<img src="https://api.travis-ci.org/Geal/nom.svg?branch=master">](https://travis-ci.org/Geal/nom)
  * [[ **⭐ 1638 | 👁️ 47 | 🔀 89** ] pest-parser/pest](https://github.com/pest-parser/pest) — The Elegant Parser [![Build Status](https://api.travis-ci.org/pest-parser/pest.svg?branch=master)](https://travis-ci.org/pest-parser/pest)
  * [[ **⭐ 1140 | 👁️ 31 | 🔀 134** ] lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) — LR(1) parser generator for Rust [![Build status](https://api.travis-ci.org/lalrpop/lalrpop.svg?branch=master)](https://travis-ci.org/lalrpop/lalrpop)
  * [[ **⭐ 739 | 👁️ 15 | 🔀 55** ] Marwes/combine](https://github.com/Marwes/combine) — parser combinator library [<img src="https://api.travis-ci.org/Marwes/combine.svg?branch=master">](https://travis-ci.org/Marwes/combine)
  * [[ **⭐ 637 | 👁️ 20 | 🔀 66** ] kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) — Parsing Expression Grammar (PEG) parser generator
  * [[ **⭐ 199 | 👁️ 13 | 🔀 16** ] m4rw3r/chomp](https://github.com/m4rw3r/chomp) – A fast monadic-style parser combinator [<img src="https://api.travis-ci.org/m4rw3r/chomp.svg?branch=master">](https://travis-ci.org/m4rw3r/chomp)
  * [[ **⭐ 126 | 👁️ 10 | 🔀 13** ] ptal/oak](https://github.com/ptal/oak) — A typed PEG parser generator (compiler plugin)
  * [[ **⭐ 45 | 👁️ 3 | 🔀 7** ] rustless/queryst](https://github.com/rustless/queryst) — A query string parsing library for Rust inspired by https://github.com/ljharb/qs [![Build Status](https://api.travis-ci.org/rustless/queryst.svg?branch=master)](https://travis-ci.org/rustless/queryst)
  * [[ **⭐ 32 | 👁️ 1 | 🔀 7** ] nrc/zero](https://github.com/nrc/zero) — zero-allocation parsing of binary data [<img src="https://api.travis-ci.org/nrc/zero.svg?branch=master">](https://travis-ci.org/nrc/zero)
  * [[ **⭐ 19 | 👁️ 3 | 🔀 2** ] freestrings/jsonpath](https://github.com/freestrings/jsonpath) - [JsonPath](https://goessner.net/articles/JsonPath/) engine written in Rust. Webassembly and Javascript support too [![Build Status](https://api.travis-ci.org/freestrings/jsonpath.svg?branch=master)](https://travis-ci.org/freestrings/jsonpath)
  * [[ **⭐ 17 | 👁️ 2 | 🔀 1** ] ivanceras/inquerest](https://github.com/ivanceras/inquerest) — an URL parameter parser for rest filter inquiry [![Build Status](https://api.travis-ci.org/ivanceras/inquerest.svg?branch=master)](https://travis-ci.org/ivanceras/inquerest)

### Packaging formats

- [[ **⭐ 5 | 👁️ 4 | 🔀 1** ] pop-os/debarchive](https://github.com/pop-os/debarchive) Library for reading and extracting debian archives

### Peripherals

* Serial Port
  * [[ **⭐ 54 | 👁️ 5 | 🔀 7** ] Susurrus/serialport-rs](https://github.com/Susurrus/serialport-rs) [[serialport](https://docs.rs/serialport/3.0.0/serialport/)] — A cross-platform library that provides access to a serial port

### Platform specific

* Cross-platform
  * [svartalf/rust-battery](https://crates.io/crates/battery) — Cross-platform information about the notebook batteries [<img src="https://api.travis-ci.org/svartalf/rust-battery.svg?branch=master">](https://travis-ci.org/svartalf/rust-battery)
  
* Linux
  * [[ **⭐ 131 | 👁️ 7 | 🔀 37** ] inotify-rs/inotify](https://github.com/inotify-rs/inotify) — [inotify](https://en.wikipedia.org/wiki/Inotify) bindings [<img src="https://api.travis-ci.org/inotify-rs/inotify.svg?branch=master">](https://travis-ci.org/inotify-rs/inotify)
  * [[ **⭐ 27 | 👁️ 5 | 🔀 9** ] yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) — [iptables](https://www.netfilter.org/projects/iptables/index.html) bindings [<img src="https://api.travis-ci.org/yaa110/rust-iptables.svg?branch=master">](https://travis-ci.org/yaa110/rust-iptables)
  * [[ **⭐ 25 | 👁️ 1 | 🔀 4** ] arvancloud/nginx-rs](https://github.com/arvancloud/nginx-rs) — [Nginx](https://www.nginx.com) bindings [<img src="https://api.travis-ci.org/arvancloud/nginx-rs.svg?branch=master">](https://travis-ci.org/arvancloud/nginx-rs)
  * [[ **⭐ 17 | 👁️ 1 | 🔀 1** ] frol/cgroups-fs](https://github.com/frol/cgroups-fs) — Rust bindings to Linux Control Groups (cgroups) [<img src="https://api.travis-ci.org/frol/cgroups-fs.svg?branch=master">](https://travis-ci.org/frol/cgroups-fs)
  * [[ **⭐ 7 | 👁️ 4 | 🔀 0** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) — UDisks2 DBus API
  * [pop-os/distinst](https://github.com/pop-os/distinst/) — Linux distribution installer library
* Unix-like
  * [[ **⭐ 1074 | 👁️ 28 | 🔀 316** ] nix-rust/nix](https://github.com/nix-rust/nix) — Unix-like API bindings [<img src="https://api.travis-ci.org/nix-rust/nix.svg?branch=master">](https://travis-ci.org/nix-rust/nix)
  * [[ **⭐ 534 | 👁️ 27 | 🔀 92** ] zargony/rust-fuse](https://github.com/zargony/rust-fuse) — [FUSE](https://github.com/libfuse/libfuse) bindings <img src="https://api.travis-ci.org/zargony/rust-fuse.svg?branch=master">
* Windows
  * [[ **⭐ 814 | 👁️ 30 | 🔀 263** ] retep998/winapi-rs](https://github.com/retep998/winapi-rs) — Windows API bindings [<img src="https://api.travis-ci.org/retep998/winapi-rs.svg?branch=master">](https://travis-ci.org/retep998/winapi-rs)
* FreeBSD
  * [[ **⭐ 11 | 👁️ 5 | 🔀 1** ] dlrobertson/capsicum-rs](https://github.com/dlrobertson/capsicum-rs) — Rust bindings for the FreeBSD capsicum framework
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) — Rust implementation of a FreeBSD jail library

### Scripting

[[scripting](https://crates.io/keywords/scripting)]

* [[ **⭐ 1880 | 👁️ 62 | 🔀 105** ] gluon-lang/gluon](https://github.com/gluon-lang/gluon) —  A small, statically-typed, functional programming language
* [[ **⭐ 923 | 👁️ 70 | 🔀 33** ] PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) — A rusty dynamically typed scripting language
* [[ **⭐ 503 | 👁️ 21 | 🔀 34** ] murarth/ketos](https://github.com/murarth/ketos) — A Lisp dialect functional programming language serving as a scripting and extension language for rust
* [[ **⭐ 425 | 👁️ 14 | 🔀 41** ] jonathandturner/rhai](https://github.com/jonathandturner/rhai) — A tiny and fast embedded scripting language resembling a combination of JS and Rust
* [moss](https://crates.io/crates/moss) — A dynamically typed scripting language

### Template engine

* Handlebars
  * [[ **⭐ 449 | 👁️ 11 | 🔀 66** ] sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) — Handlebars template engine with inheritance, custom helper support. [<img src="https://api.travis-ci.org/sunng87/handlebars-rust.svg?branch=master">](https://travis-ci.org/sunng87/handlebars-rust)
* HTML
  * [[ **⭐ 985 | 👁️ 15 | 🔀 115** ] Keats/tera](https://github.com/Keats/tera) — template engine based on Jinja2 and the Django template language. [<img src="https://api.travis-ci.org/Keats/tera.svg?branch=master">](https://travis-ci.org/Keats/tera)
  * [[ **⭐ 835 | 👁️ 20 | 🔀 62** ] djc/askama](https://github.com/djc/askama) — template rendering engine based on Jinja [<img src="https://api.travis-ci.org/djc/askama.svg?branch=master">](https://travis-ci.org/djc/askama)
  * [[ **⭐ 710 | 👁️ 20 | 🔀 50** ] lfairy/maud](https://github.com/lambda-fairy/maud) — compile-time HTML templates [<img src="https://api.travis-ci.org/lfairy/maud.svg?branch=master">](https://travis-ci.org/lfairy/maud)
  * [[ **⭐ 179 | 👁️ 5 | 🔀 13** ] Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) — compile-time HTML templates [<img src="https://api.travis-ci.org/Stebalien/horrorshow-rs.svg?branch=master">](https://travis-ci.org/Stebalien/horrorshow-rs)
  * [[ **⭐ 137 | 👁️ 8 | 🔀 9** ] kaj/ructe](https://github.com/kaj/ructe) — HTML template system for Rust [<img src="https://api.travis-ci.org/kaj/ructe.svg?branch=master">](https://travis-ci.org/kaj/ructe)
* Mustache
  * [[ **⭐ 198 | 👁️ 5 | 🔀 24** ] rustache/rustache](https://github.com/rustache/rustache) — [<img src="https://api.travis-ci.org/rustache/rustache.svg?branch=master">](https://travis-ci.org/rustache/rustache)
* [[ **⭐ 9 | 👁️ 2 | 🔀 0** ] tailhook/marafet](https://github.com/tailhook/marafet) — Compiler for Jade-like template language to cito.js-based virtual dom

### Text processing

* [[ **⭐ 1281 | 👁️ 46 | 🔀 204** ] rust-lang/regex](https://github.com/rust-lang/regex) — Regular expressions (RE2 style) [<img src="https://api.travis-ci.com/rust-lang/regex.svg?branch=master">](https://travis-ci.org/rust-lang/regex)
* [[ **⭐ 285 | 👁️ 12 | 🔀 15** ] greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) — Natural language detection library based on trigrams [<img src="https://api.travis-ci.org/greyblake/whatlang-rs.svg?branch=master">](https://travis-ci.org/greyblake/whatlang-rs)
* [[ **⭐ 130 | 👁️ 9 | 🔀 15** ] BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) — Elastic tab stops (i.e., text column alignment) [<img src="https://api.travis-ci.org/BurntSushi/tabwriter.svg?branch=master">](https://travis-ci.org/BurntSushi/tabwriter)
* [[ **⭐ 120 | 👁️ 7 | 🔀 6** ] BurntSushi/suffix](https://github.com/BurntSushi/suffix) — Linear time suffix array construction (with Unicode support) [<img src="https://api.travis-ci.org/BurntSushi/suffix.svg?branch=master">](https://travis-ci.org/BurntSushi/suffix)
* [[ **⭐ 72 | 👁️ 4 | 🔀 14** ] mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] — Word wrap text (with support for hyphenation) [<img src="https://api.travis-ci.org/mgeisler/textwrap.svg?branch=master">](https://travis-ci.org/mgeisler/textwrap)
* [[ **⭐ 61 | 👁️ 2 | 🔀 4** ] ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) — A reader that allows forwards, backwards and random navigations through the lines of huge files without consuming iterators [<img src="https://api.travis-ci.org/ps1dr3x/easy_reader.svg?branch=master">](https://travis-ci.org/ps1dr3x/easy_reader)
* [[ **⭐ 49 | 👁️ 3 | 🔀 2** ] Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] – Generic string + iterable joining [<img src="https://api.travis-ci.org/Lucretiel/joinery.svg?branch=master">](https://travis-ci.org/Lucretiel/joinery)
* [[ **⭐ 20 | 👁️ 1 | 🔀 1** ] pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) — Construct [n-grams](https://en.wikipedia.org/wiki/N-gram) from arbitrary iterators [<img src="https://api.travis-ci.org/pwoolcoc/ngrams.svg?branch=master">](https://travis-ci.org/pwoolcoc/ngrams)
* [[ **⭐ 11 | 👁️ 1 | 🔀 2** ] yaa110/rake-rs](https://github.com/yaa110/rake-rs) — Multilingual implementation of RAKE algorithm for Rust [<img src="https://api.travis-ci.org/yaa110/rake-rs.svg?branch=master">](https://travis-ci.org/yaa110/rake-rs)
* [strsim-rs](https://crates.io/crates/strsim) — String similarity metrics [<img src="https://api.travis-ci.org/dguo/strsim-rs.svg?branch=master">](https://travis-ci.org/dguo/strsim-rs)

### Text search

* [[ **⭐ 3180 | 👁️ 115 | 🔀 190** ] tantivy-search/tantivy](https://github.com/tantivy-search/tantivy) [[tantivy](https://crates.io/crates/tantivy)] — [<img src="https://api.travis-ci.org/tantivy-search/tantivy.svg?branch=master">](https://travis-ci.org/tantivy-search/tantivy)
* [[ **⭐ 790 | 👁️ 26 | 🔀 53** ] BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] — [<img src="https://api.travis-ci.org/BurntSushi/fst.svg?branch=master">](https://travis-ci.org/BurntSushi/fst)
* [[ **⭐ 318 | 👁️ 24 | 🔀 26** ] minio/minsql](https://github.com/minio/minsql) — High-performance log search engine. [<img src="https://api.travis-ci.org/minio/minsql.svg?branch=master">](https://travis-ci.org/minio/minsql)
* [[ **⭐ 62 | 👁️ 7 | 🔀 1** ] CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] — [<img src="https://api.travis-ci.com/CurrySoftware/perlin.svg?branch=master">](https://travis-ci.org/CurrySoftware/perlin)
* [[ **⭐ 44 | 👁️ 2 | 🔀 8** ] andylokandy/simsearch-rs](https://github.com/andylokandy/simsearch-rs) [[simsearch](https://crates.io/crates/simsearch)] - A simple and lightweight fuzzy search engine that works in memory, searching for similar strings

### Unsafe

* [zerocopy](https://crates.io/crates/zerocopy) - Utilities for safely reinterpreting arbitrary byte sequences as native Rust types

### Virtualization

* [[ **⭐ 125 | 👁️ 9 | 🔀 15** ] beneills/quantum](https://github.com/beneills/quantum) — Advanced Rust quantum computer simulator [<img src="https://api.travis-ci.org/beneills/quantum.svg?branch=master">](https://travis-ci.org/beneills/quantum)
* [[ **⭐ 88 | 👁️ 7 | 🔀 22** ] ekse/unicorn-rs](https://github.com/ekse/unicorn-rs) — Rust bindings for the unicorn CPU emulator
* [[ **⭐ 38 | 👁️ 4 | 🔀 5** ] saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) — Hardware-accelerated virtualization on OS X
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) CrOSVM - Enables Chrome OS to run Linux apps inside a fast, sercure virtualized environment

### Web programming

See also [Are we web yet?](http://www.arewewebyet.org) and [Rust web framework comparison](https://github.com/flosse/rust-web-framework-comparison).

* Client-side / WASM
  * [[ **⭐ 806 | 👁️ 36 | 🔀 49** ] seed](https://github.com/David-OConnor/seed) - A Rust framework for creating web apps [![Build Status](https://api.travis-ci.org/David-OConnor/seed.svg?branch=master)](https://travis-ci.org/David-OConnor/seed)
  * [cargo-web](https://crates.io/crates/cargo-web) — A Cargo subcommand for the client-side Web [![Build Status](https://api.travis-ci.org/koute/cargo-web.svg)](https://travis-ci.org/koute/cargo-web)
  * [stdweb](https://crates.io/crates/stdweb) — A standard library for the client-side Web [![Build Status](https://api.travis-ci.org/koute/stdweb.svg)](https://travis-ci.org/koute/stdweb)
  * [yew](https://crates.io/crates/yew) — Rust framework for making client web apps
* HTTP Client
  * [[ **⭐ 5717 | 👁️ 168 | 🔀 806** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [<img src="https://api.travis-ci.org/hyperium/hyper.svg?branch=master">](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 2226 | 👁️ 63 | 🔀 321** ] seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) — an ergonomic HTTP Client for Rust. [<img src="https://api.travis-ci.org/seanmonstar/reqwest.svg?branch=master">](https://travis-ci.org/seanmonstar/reqwest)
  * [[ **⭐ 560 | 👁️ 16 | 🔀 138** ] alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) — [libcurl](https://curl.haxx.se/libcurl/) bindings [<img src="https://api.travis-ci.com/alexcrichton/curl-rust.svg?branch=master">](https://travis-ci.org/alexcrichton/curl-rust)
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) — Beautiful and elegant Yukikaze is little HTTP client library based on hyper. [<img src="https://gitlab.com/Douman/yukikaze/badges/master/build.svg">](https://gitlab.com/Douman/yukikaze)
* HTTP Server
  * [[ **⭐ 8624 | 👁️ 233 | 🔀 598** ] Rocket](https://github.com/SergioBenitez/Rocket) — Rocket is web framework for Rust (nightly) with a focus on ease-of-use, expressability, and speed [<img src="https://api.travis-ci.org/SergioBenitez/Rocket.svg?branch=master">](https://travis-ci.org/SergioBenitez/Rocket)
  * [[ **⭐ 6164 | 👁️ 190 | 🔀 442** ] actix/actix-web](https://github.com/actix/actix-web) — A lightweight async web framework for Rust with websocket support [<img src="https://api.travis-ci.org/actix/actix-web.svg?branch=master">](https://travis-ci.org/actix/actix-web)
  * [[ **⭐ 5717 | 👁️ 168 | 🔀 806** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [<img src="https://api.travis-ci.org/hyperium/hyper.svg?branch=master">](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 5627 | 👁️ 176 | 🔀 393** ] Iron](https://github.com/iron/iron) — A middleware-based server framework [<img src="https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master">](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 2094 | 👁️ 50 | 🔀 153** ] Juniper](https://github.com/graphql-rust/juniper) — GraphQL server library for Rust [<img src="https://api.travis-ci.org/graphql-rust/juniper.svg?branch=master">](https://travis-ci.org/graphql-rust/juniper)  
  * [[ **⭐ 1486 | 👁️ 45 | 🔀 95** ] Gotham](https://github.com/gotham-rs/gotham) — A flexible web framework that does not sacrifice safety, security or speed. [<img src="https://api.travis-ci.org/gotham-rs/gotham.svg?branch=master">](https://travis-ci.org/gotham-rs/gotham)
  * [[ **⭐ 1400 | 👁️ 18 | 🔀 64** ] vi/websocat](https://github.com/vi/websocat) — CLI for interacting with WebSockets, with functionality of Netcat, Curl and Socat. [<img src="https://api.travis-ci.org/vi/websocat.svg?branch=master">](https://travis-ci.org/vi/websocat)
  * [[ **⭐ 994 | 👁️ 33 | 🔀 141** ] housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) — lightweight, event-driven WebSockets for Rust [<img src="https://api.travis-ci.org/housleyjk/ws-rs.svg?branch=stable">](https://travis-ci.org/housleyjk/ws-rs)
  * [[ **⭐ 882 | 👁️ 29 | 🔀 55** ] Ogeon/rustful](https://github.com/Ogeon/rustful) — A RESTful web framework for Rust  [<img src="https://api.travis-ci.org/Ogeon/rustful.svg?branch=master">](https://travis-ci.org/Ogeon/rustful)
  * [[ **⭐ 764 | 👁️ 44 | 🔀 49** ] carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] — A fast, boilerplate free, web framework for Rust [<img src="https://api.travis-ci.org/carllerche/tower-web.svg?branch=master">](https://travis-ci.org/carllerche/tower-web)
  * [[ **⭐ 585 | 👁️ 15 | 🔀 47** ] Rustless](https://github.com/rustless/rustless) — A REST-like API micro-framework inspired by [Grape](https://github.com/ruby-grape/grape) and [Hyper](https://github.com/hyperium/hyper) [<img src="https://api.travis-ci.org/rustless/rustless.svg?branch=master">](https://travis-ci.org/rustless/rustless)
  * [[ **⭐ 584 | 👁️ 30 | 🔀 40** ] rustforce/sapper](https://github.com/daogangtang/sapper) — A lightweight web framework built on async hyper, implemented in Rust language. [<img src="https://api.travis-ci.com/rustforce/sapper.svg?branch=master">](https://travis-ci.org/rustforce/sapper)
  * [[ **⭐ 532 | 👁️ 24 | 🔀 60** ] tomaka/rouille](https://github.com/tomaka/rouille) — Web framework in Rust [<img src="https://api.travis-ci.org/tomaka/rouille.svg?branch=master">](https://travis-ci.org/tomaka/rouille)
  * [[ **⭐ 449 | 👁️ 11 | 🔀 66** ] handlebars-rust](https://github.com/sunng87/handlebars-rust) — an Iron web framework middleware. [<img src="https://api.travis-ci.org/sunng87/handlebars-iron.svg?branch=master">](https://travis-ci.org/sunng87/handlebars-iron)
  * [[ **⭐ 386 | 👁️ 10 | 🔀 53** ] tiny-http](https://github.com/tiny-http/tiny-http) — Low level HTTP server library [<img src="https://api.travis-ci.com/frewsxcv/tiny-http.svg?branch=master">](https://travis-ci.org/frewsxcv/tiny-http)
  * [[ **⭐ 234 | 👁️ 14 | 🔀 35** ] snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) — Lightweight stream-based WebSocket implementation for Rust.
  * [[ **⭐ 213 | 👁️ 8 | 🔀 44** ] GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) — JSON Web Token implementation in Rust. [<img src="https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master">](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 71 | 👁️ 3 | 🔀 2** ] danclive/sincere](https://github.com/danclive/sincere) — A micro web framework for Rust(stable) based on hyper and multithreading. [<img src="https://api.travis-ci.org/danclive/sincere.svg?branch=master">](https://travis-ci.org/danclive/sincere)
  * [[ **⭐ 57 | 👁️ 6 | 🔀 12** ] actix/sockjs](https://github.com/actix/sockjs) — A [SockJS](https://github.com/sockjs) server for Rust [<img src="https://api.travis-ci.org/actix/sockjs.svg?branch=master">](https://travis-ci.org/actix/sockjs)
  * [[ **⭐ 50 | 👁️ 1 | 🔀 2** ] oltdaniel/zap](https://github.com/0x1daniel/zap) — A lightning fast http framework for Rust [<img src="https://api.travis-ci.org/oltdaniel/zap.svg?branch=master">](https://travis-ci.org/oltdaniel/zap)
  * [[ **⭐ 14 | 👁️ 4 | 🔀 3** ] Saphir](https://github.com/richerarc/saphir) — A progressive web framework with low-level control, without the pain.
  * [[ **⭐ 12 | 👁️ 1 | 🔀 5** ] vityafx/urlshortener-rs](https://github.com/vityafx/urlshortener-rs) [[urlshortener](https://crates.io/crates/urlshortener)] — A very simple urlshortener library for Rust. [<img src="https://api.travis-ci.org/vityafx/urlshortener-rs.svg?branch=master">](https://travis-ci.org/vityafx/urlshortener-rs)
  * [[ **⭐ 9 | 👁️ 1 | 🔀 1** ] cyderize/rust-websocket](https://github.com/cyderize/rust-websocket) — A framework for dealing with WebSocket connections (both clients and servers) [<img src="https://api.travis-ci.org/cyderize/rust-websocket.svg?branch=master">](https://travis-ci.org/cyderize/rust-websocket)
  * [branca](https://crates.io/crates/branca) — A Pure Rust implementation of Branca for Authenticated and Encrypted API tokens. [<img src="https://api.travis-ci.org/return/branca.svg?branch=master">](https://travis-ci.org/return/branca)
  * [Nickel](https://github.com/nickel-org/nickel.rs/) — inspired by [Express](http://expressjs.com/) [<img src="https://api.travis-ci.org/nickel-org/nickel.rs.svg?branch=master">](https://travis-ci.org/nickel-org/nickel.rs)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
* Miscellaneous
  * [[ **⭐ 471 | 👁️ 12 | 🔀 37** ] utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] — A library to extract useful data from HTML documents, suitable for web scraping. [![Build Status](https://api.travis-ci.org/utkarshkukreti/select.rs.svg?branch=master)](https://travis-ci.org/utkarshkukreti/select.rs)
  * [[ **⭐ 279 | 👁️ 9 | 🔀 21** ] pyros2097/rust-embed](https://github.com/pyros2097/rust-embed) — A macro to embed static assets into the rust binary
  * [[ **⭐ 176 | 👁️ 19 | 🔀 10** ] cargonauts](https://github.com/cargonauts-rs/cargonauts) — A web framework intended for building maintainable, well-factored web apps.
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - A library similar to Pythons BeautifulSoup, designed to enable quick and easy manipulation and querying of HTML documents. [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
* Reverse Proxy
  * [[ **⭐ 985 | 👁️ 49 | 🔀 73** ] sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] — A HTTP reverse proxy. [![Build Status](https://api.travis-ci.org/sozu-proxy/sozu.svg?branch=master)](https://api.travis-ci.org/sozu-proxy/sozu)
* Static Site Generators
  * [[ **⭐ 2872 | 👁️ 57 | 🔀 259** ] getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] — An opinionated static site generator with everything built-in. [![Build Status](https://api.travis-ci.com/getzola/zola.svg?branch=master)](https://travis-ci.org/getzola/zola)
  * [[ **⭐ 770 | 👁️ 24 | 🔀 76** ] cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) — Static site generator written in Rust [<img src="https://api.travis-ci.org/cobalt-org/cobalt.rs.svg?branch=master">](https://travis-ci.org/cobalt-org/cobalt.rs)
  * [[ **⭐ 47 | 👁️ 2 | 🔀 4** ] leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] — A simple, parallelized blog generator. [<img src="https://api.travis-ci.com/leven-the-blog/leven.svg?branch=master">](https://travis-ci.org/leven-the-blog/leven)
  * [[ **⭐ 25 | 👁️ 4 | 🔀 5** ] FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) — Static site generator from markdown files.

## Registries

A registry allows you to publish your Rust libraries as crate packages, to share them with others publicly and privately.

* [Crates](https://crates.io) - The official public registry for Rust/Cargo.
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.io/l/cargo-registry/) - A fully managed package management SaaS, with first-class support for public and private Cargo/Rust registries (plus many others). Has a generous free-tier and is also completely free for open-source.

## Resources

* Benchmarks
  * [[ **⭐ 57 | 👁️ 7 | 🔀 16** ] TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) — Rust implementations for the [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) [<img src="https://api.travis-ci.org/TeXitoi/benchmarksgame-rs.svg?branch=master">](https://travis-ci.org/TeXitoi/benchmarksgame-rs)
* Decks & Presentations
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) — Presented by [Julia Evans](https://twitter.com/@b0rk) @ Rustconf 2016.
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) — Presented by [Michael Gattozzi](https://github.com/mgattozzi) @ RustConf 2017
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) — Presented by [Nicholas Matsakis](https://github.com/nikomatsakis) @ C++Now 2018
* Learning
  * [[ **⭐ 6936 | 👁️ 156 | 🔀 731** ] Rustlings](https://github.com/rust-lang/rustlings) — small exercises to get you used to reading and writing Rust code
  * [[ **⭐ 4948 | 👁️ 262 | 🔀 320** ] rust-learning](https://github.com/ctjhoa/rust-learning) — A collection of useful resources to learn Rust
  * [[ **⭐ 1479 | 👁️ 97 | 🔀 38** ] Idiomatic Rust](https://github.com/mre/idiomatic-rust) —  A peer-reviewed collection of articles/talks/repos which teach idiomatic Rust.
  * [[ **⭐ 1294 | 👁️ 45 | 🔀 32** ] stdx](https://github.com/brson/stdx) — Learn these crates first as an extension to std
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) — A list of recommended resources voted by the programming community.
  * [exercism.io](https://exercism.io/tracks/rust) — programming exercises that help you learn new concepts in Rust.
  * [Learning Rust With Entirely Too Many Linked Lists](http://cglab.ca/~abeinges/blah/too-many-lists/book/) — in-depth exploration of Rust's memory management rules, through implementing a few different types of list structures.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) — A collection of simple examples that demonstrate good practices to accomplish common programming tasks, using the crates of the Rust ecosystem.
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) — A video series by [Carol Nichols](https://github.com/carols10cents) and [Jake Goulding](https://github.com/shepmaster) (paid)
  * [University of Pennsylvania's Comp Sci Rust Programming Course](http://cis198-2016s.github.io/schedule/)
  * [Build a language VM](https://blog.subnetzero.io/post/building-language-vm-part-00/)
* Podcasts
* [[ **⭐ 2973 | 👁️ 208 | 🔀 130** ] Rust Design Patterns](https://github.com/rust-unofficial/patterns)
* [[ **⭐ 795 | 👁️ 53 | 🔀 65** ] RustBooks](https://github.com/sger/RustBooks) — list of RustBooks
  * [New Rustacean](https://newrustacean.com) — A podcast about learning Rust
  * [Rustacean Station](https://rustacean-station.org/) - A community project for creating podcast content for Rust
  * [Rusty Spike](https://rusty-spike.blubrry.net) — news on all things Rust
* [RustCamp 2015 Talks](http://confreaks.tv/events/rustcamp2015)
* [Rust Guidelines](http://aturon.github.io/)
* [Rust Subreddit](https://www.reddit.com/r/rust/) — A subreddit(forum) where rust related questions, articles and resources are posted and discussed

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


---
> STATUSES UPDATED: **2020-01-01 00:48@UTC** *(by [markdown-github-status](https://github.com/eGust/markdown-github-status))*
