# Awesome Rust [<img src="https://api.travis-ci.org/rust-unofficial/awesome-rust.svg?branch=master">](https://travis-ci.org/rust-unofficial/awesome-rust)

A curated list of Rust code and resources.

If you want to contribute, please read [this](CONTRIBUTING.md).

## Table of contents

* [Applications](#applications)
  * [Audio](#audio)
  * [Cryptocurrencies](#cryptocurrencies)
  * [Database](#database)
  * [Emulators](#emulators)
  * [Games](#games)
  * [Graphics](#graphics)
  * [Industrial automation](#industrial-automation)
  * [Operating systems](#operating-systems)
  * [Productivity](#productivity)
  * [Security tools](#security-tools)
  * [System tools](#system-tools)
  * [Text editors](#text-editors)
  * [Text processing](#text-processing)
  * [Utilities](#utilities)
  * [Video](#video)
  * [Virtualization](#virtualization)
  * [Window managers](#window-managers)
  * [Web](#web)
  * [Web Servers](#web-servers)
* [Development tools](#development-tools)
  * [Build system](#build-system)
  * [Debugging](#debugging)
  * [Deployment](#deployment)
  * [Embedded](#embedded)
  * [FFI](#ffi)
  * [IDEs](#ides)
  * [Pattern recognition](#pattern-recognition)
  * [Profiling](#profiling)
  * [Services](#services)
  * [Static analysis](#static-analysis)
  * [Testing](#testing)
  * [Transpiling](#transpiling)
* [Libraries](#libraries)
  * [Artificial Intelligence](#artificial-intelligence)
      * [Genetic algorithms](#genetic-algorithms)
      * [Machine learning](#machine-learning)
  * [Astronomy](#astronomy)
  * [Asynchronous](#asynchronous)
  * [Audio](#audio-1)
  * [Authentication](#authentication)
  * [Automotive](#automotive)
  * [Bioinformatics](#bioinformatics)
  * [Caching](#caching)
  * [Cloud](#cloud)
  * [Command-line](#command-line)
  * [Compression](#compression)
  * [Computation](#computation)
  * [Concurrency](#concurrency)
  * [Configuration](#configuration)
  * [Cryptography](#cryptography)
  * [Database](#database-1)
  * [Data processing](#data-processing)
  * [Data structures](#data-structures)
  * [Data visualization](#data-visualization)
  * [Date and time](#date-and-time)
  * [Distributed systems](#distributed-systems)
  * [Email](#email)
  * [Encoding](#encoding)
  * [Filesystem](#filesystem)
  * [Game development](#game-development)
  * [Geospatial](#geospatial)
  * [Graphics](#graphics-1)
  * [Graph processing](#graph-processing)
  * [GUI](#gui)
  * [Image processing](#image-processing)
  * [Industrial automation](#industrial-automation)
  * [Language specification](#language-specification)
  * [Logging](#logging)
  * [Macro](#macro)
  * [Markup language](#markup-language)
  * [Mobile](#mobile)
  * [Network programming](#network-programming)
  * [Parsing](#parsing)
  * [Peripherals](#peripherals)
  * [Platform specific](#platform-specific)
  * [Scripting](#scripting)
  * [Template engine](#template-engine)
  * [Text processing](#text-processing-1)
  * [Text search](#text-search)
  * [Virtualization](#virtualization-1)
  * [Web programming](#web-programming)
* [Registries](#registries)
* [Resources](#resources)
* [License](#license)

## Applications

See also [Rust — Production](https://www.rust-lang.org/production)(organizations running Rust in production).

* [[ **⭐ 16526 | 👁️ 355 | 🔀 722** ] alacritty](https://github.com/jwilm/alacritty) — A cross-platform, GPU enhanced terminal emulator
* [[ **⭐ 14179 | 👁️ 490 | 🔀 2173** ] Servo](https://github.com/servo/servo) — A prototype web browser engine
* [[ **⭐ 1854 | 👁️ 81 | 🔀 39** ] notty](https://github.com/withoutboats/notty) — A new kind of terminal
* [[ **⭐ 1693 | 👁️ 57 | 🔀 48** ] cloudflare/boringtun](https://github.com/cloudflare/boringtun) — A Userspace WireGuard VPN Implementation [<img src="https://meritbadge.herokuapp.com/boringtun">](https://crates.io/crates/boringtun)
* [[ **⭐ 542 | 👁️ 39 | 🔀 44** ] Fractalide](https://github.com/fractalide/fractalide) — Simple Rust Microservices
* [[ **⭐ 399 | 👁️ 27 | 🔀 29** ] jedisct1/flowgger](https://github.com/jedisct1/flowgger) — A fast, simple and lightweight data collector
* [[ **⭐ 335 | 👁️ 15 | 🔀 13** ] fcsonline/drill](https://github.com/fcsonline/drill) — A HTTP load testing application inspired by Ansible syntax [<img src="https://api.travis-ci.org/fcsonline/drill.svg?branch=master">](https://travis-ci.org/fcsonline/drill)
* [[ **⭐ 333 | 👁️ 27 | 🔀 46** ] linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) — Ultralight service mesh for Kubernetes.
* [[ **⭐ 320 | 👁️ 15 | 🔀 5** ] ivanceras/diwata](https://github.com/ivanceras/diwata) — A database administration tool for postgresql [<img src="https://api.travis-ci.org/ivanceras/diwata.svg">](https://travis-ci.org/ivanceras/diwata)
* [[ **⭐ 126 | 👁️ 12 | 🔀 4** ] Factotum](https://github.com/snowplow/factotum) — [A system to programmatically run data pipelines](https://snowplowanalytics.com/blog/2016/04/09/introducing-factotum-data-pipeline-runner/) [<img src="https://api.travis-ci.org/snowplow/factotum.svg?branch=master">](https://travis-ci.org/snowplow/factotum)
* [[ **⭐ 92 | 👁️ 5 | 🔀 2** ] Weld](https://github.com/serayuzgur/weld) — Full fake REST API generator [<img src="https://api.travis-ci.org/serayuzgur/weld.svg">](https://travis-ci.org/serayuzgur/weld)
* [[ **⭐ 76 | 👁️ 8 | 🔀 6** ] Herd](https://github.com/imjacobclark/Herd) — an experimental HTTP load testing application
* [[ **⭐ 60 | 👁️ 7 | 🔀 3** ] nicohman/eidolon](https://github.com/nicohman/eidolon) — A steam and drm-free game registry and launcher for linux and macosx [<img src="https://api.travis-ci.org/nicohman/eidolon.svg?branch=master">](https://travis-ci.org/nicohman/eidolon)
* [[ **⭐ 56 | 👁️ 7 | 🔀 3** ] andschwa/rust-genetic-algorithm](https://github.com/andschwa/rust-genetic-algorithm) — A genetic algorithm for academic benchmark problems [<img src="https://api.travis-ci.org/andschwa/rust-genetic-algorithm.svg?branch=master">](https://travis-ci.org/andschwa/rust-genetic-algorithm)
* [[ **⭐ 38 | 👁️ 1 | 🔀 1** ] asm-cli-rust](https://github.com/cch123/asm-cli-rust) — interative assembly shell written in rust.
* [[ **⭐ 31 | 👁️ 3 | 🔀 3** ] kbknapp/docli](https://github.com/kbknapp/docli-rs) — A command line utility for managing DigitalOcean infrastructure [<img src="https://api.travis-ci.org/kbknapp/docli-rs.svg?branch=master">](https://travis-ci.org/kbknapp/docli-rs)
* [[ **⭐ 23 | 👁️ 2 | 🔀 6** ] intecture/api](https://github.com/intecture/api) — an API-driven server management and configuration tool [<img src="https://api.travis-ci.org/intecture/api.svg?branch=master">](https://travis-ci.org/intecture/api)
* [[ **⭐ 16 | 👁️ 2 | 🔀 1** ] darrint/device-blocker](https://github.com/darrint/device-blocker) — Limit screen time to children's various mobile devices by blocking internet access on the family Wifi router.
* [[ **⭐ 15 | 👁️ 5 | 🔀 8** ] Sandstorm Collections App](https://github.com/sandstorm-io/collections-app)
* [[ **⭐ 5 | 👁️ 1 | 🔀 5** ] dlecan/generic-dns-update](https://github.com/dlecan/generic-dns-update) — A tool to update DNS zonefiles with your IP address [<img src="https://api.travis-ci.org/dlecan/generic-dns-update.svg?branch=master">](https://travis-ci.org/dlecan/generic-dns-update)
* [[ **⭐ 4 | 👁️ 1 | 🔀 1** ] AnderEnder/s3find-rs](https://github.com/AnderEnder/s3find-rs) — A command line utility to walk an Amazon S3 hierarchy, an analog of find for Amazon S3 [<img src="https://api.travis-ci.org/AnderEnder/s3find-rs.svg?branch=master">](https://travis-ci.org/AnderEnder/s3find-rs)
* [habitat](https://www.habitat.sh) — An tool created by [Chef](https://www.chef.io/) to build, deploy, and manage applications.
* [limonite](https://crates.io/crates/limonite) — static blog/website generator [<img src="https://api.travis-ci.org/qmx/limonite.svg?branch=master">](https://travis-ci.org/qmx/limonite)
* [MaidSafe](https://maidsafe.net) — A decentralized platform.
* [mdBook](https://crates.io/crates/mdbook) — A command line utility to create books from markdown files [<img src="https://api.travis-ci.org/azerupi/mdBook.svg?branch=master">](https://travis-ci.org/azerupi/mdBook)
* [Pijul](https://pijul.org) — A patch-based distributed version control system
* [rsign](https://crates.io/crates/rsign) — A simple command-line tool used to generate/sign/verify digital signatures designed to be compatible with Minisign  [![Codeship Status for danielrangel/rsign](https://app.codeship.com/projects/60b28d80-7645-0135-4402-1639b58199d0/status?branch=master)](https://app.codeship.com/projects/244452)
* [trust-dns](https://crates.io/crates/trust-dns) — A DNS-server [<img src="https://api.travis-ci.org/bluejekyll/trust-dns.svg?branch=master">](https://travis-ci.org/bluejekyll/trust-dns)

### Audio

* [[ **⭐ 14 | 👁️ 1 | 🔀 1** ] indiscipline/zrtstr](https://github.com/indiscipline/zrtstr) — A command line utility for checking if stereo wav files are faux-stereo (i.e. have identical channels) and converting such files to mono. [<img src="https://api.travis-ci.org/indiscipline/zrtstr.svg?branch=master">](https://travis-ci.org/indiscipline/zrtstr)

### Cryptocurrencies

* [[ **⭐ 5441 | 👁️ 372 | 🔀 1260** ] Parity-Ethereum](https://github.com/paritytech/parity-ethereum) — Fast, light, and robust Ethereum client
* [[ **⭐ 1130 | 👁️ 124 | 🔀 256** ] Substrate](https://github.com/paritytech/substrate) — Generic modular blockchain template written in Rust
* [[ **⭐ 510 | 👁️ 66 | 🔀 129** ] Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) — The Parity Bitcoin client [<img src="https://api.travis-ci.org/paritytech/parity-bitcoin.svg?branch=master">](https://travis-ci.com/paritytech/parity-bitcoin)
* [[ **⭐ 423 | 👁️ 40 | 🔀 59** ] Nervos CKB](https://github.com/nervosnetwork/ckb) — Nervos CKB is a public permissionless blockchain, the common knowledge layer of Nervos network.
* [[ **⭐ 393 | 👁️ 79 | 🔀 88** ] Polkadot](https://github.com/paritytech/polkadot) — Heterogeneous multi‑chain technology with pooled security
* [[ **⭐ 262 | 👁️ 24 | 🔀 76** ] Parity-Bridge](https://github.com/paritytech/parity-bridge) — Bridge between any two ethereum-based networks
* [[ **⭐ 193 | 👁️ 18 | 🔀 17** ] nearprotocol/nearcore](https://github.com/nearprotocol/nearcore) — decentralized smart-contract platform for low-end mobile devices.
* [[ **⭐ 174 | 👁️ 40 | 🔀 61** ] rust-cardano](https://github.com/input-output-hk/rust-cardano) — Rust implementation of Cardano primitives, helpers, and related applications
* [[ **⭐ 86 | 👁️ 24 | 🔀 10** ] Parity-Zcash](https://github.com/paritytech/parity-zcash) — Rust implementation of the Zcash protocol
* [[ **⭐ 72 | 👁️ 6 | 🔀 10** ] ChainX](https://github.com/chainx-org/ChainX) — Fully Decentralized Interchain Crypto Asset Management on Polkadot.
* [[ **⭐ 52 | 👁️ 7 | 🔀 14** ] ethaddrgen](https://github.com/Limeth/ethaddrgen) — Custom Ethereum vanity address generator made in Rust [<img src="https://api.travis-ci.org/Limeth/ethaddrgen.svg?branch=master">](https://travis-ci.org/Limeth/ethaddrgen)
* [[ **⭐ 43 | 👁️ 14 | 🔀 31** ] cardano-cli](https://github.com/input-output-hk/cardano-cli) — Cardano Command Line Interface (CLI)
* [[ **⭐ 25 | 👁️ 2 | 🔀 3** ] coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) — Coinbase pro client in Rust, supports sync/async/websocket [<img src="https://api.travis-ci.org/inv2004/coinbase-pro-rs.svg?branch=master">](https://travis-ci.org/inv2004/coinbase-pro-rs)
* [[ **⭐ 9 | 👁️ 3 | 🔀 2** ] Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) — A Rust library for working with Bitcoin SV .
* [[ **⭐ 7 | 👁️ 6 | 🔀 9** ] Joystream](https://github.com/Joystream/substrate-runtime-joystream) — A user governed video platform.
* [[ **⭐ 5 | 👁️ 1 | 🔀 1** ] hdwallet](https://github.com/jjyr/hdwallet) — BIP-32 HD wallet related key derivation utilities.
* [[ **⭐ 0 | 👁️ 1 | 🔀 1** ] rbtc](https://github.com/lucawen/rbtc) — Convert BTC to any currency and vice-versa. [<img src="https://api.travis-ci.com/lucawen/rbtc.svg?branch=master">](https://travis-ci.com/lucawen/rbtc/)
* [Grin](https://github.com/mimblewimble/grin/) — Evolution of the MimbleWimble protocol
* [wagu](https://crates.io/crates/wagu) — Generate a wallet for any cryptocurrency [<img src="https://api.travis-ci.com/ArgusObserver/wagu.svg?branch=master">](https://api.travis-ci.com/ArgusObserver/wagu.svg?branch=master)

### Database

* [[ **⭐ 5253 | 👁️ 296 | 🔀 752** ] tikv](https://github.com/tikv/tikv) — A distributed KV database in Rust [<img src="https://circleci.com/gh/tikv/tikv.svg?style=shield&circle-token=36bab0a8e43edb0941b31c38557d2d9d0d58f708">](https://circleci.com/gh/tikv/tikv)
* [[ **⭐ 1205 | 👁️ 42 | 🔀 53** ] seppo0010/rsedis](https://github.com/seppo0010/rsedis) — A Redis reimplementation in Rust [<img src="https://api.travis-ci.org/seppo0010/rsedis.svg?branch=master">](https://travis-ci.org/seppo0010/rsedis)
* [[ **⭐ 1099 | 👁️ 44 | 🔀 48** ] PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) — an event sourcing database engine [<img src="https://api.travis-ci.org/PumpkinDB/PumpkinDB.svg?branch=master">](https://travis-ci.org/PumpkinDB/PumpkinDB)
* [[ **⭐ 91 | 👁️ 15 | 🔀 14** ] ParityDB](https://github.com/paritytech/paritydb) — Fast and reliable database, optimised for read operation
* [indradb](https://crates.io/crates/indradb) — Rust based graph database [<img src="https://api.travis-ci.org/indradb/indradb.svg?branch=master">](https://travis-ci.org/indradb/indradb)
* [noria](https://crates.io/crates/noria) — Dynamically changing, partially-stateful data-flow for web application backends [<img src="https://api.travis-ci.org/mit-pdos/noria.svg?branch=master">](https://travis-ci.org/mit-pdos/noria)

### Emulators

See also [crates matching keyword 'emulator'](https://crates.io/keywords/emulator).

* Commodore 64
  * [[ **⭐ 135 | 👁️ 7 | 🔀 6** ] kondrak/rust64](https://github.com/kondrak/rust64) — [<img src="https://api.travis-ci.org/kondrak/rust64.svg?branch=master">](https://travis-ci.org/kondrak/rust64)
* Gameboy
  * [[ **⭐ 405 | 👁️ 36 | 🔀 16** ] Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) — [<img src="https://api.travis-ci.org/Gekkio/mooneye-gb.svg?branch=master">](https://travis-ci.org/Gekkio/mooneye-gb)
  * [[ **⭐ 95 | 👁️ 5 | 🔀 11** ] mvdnes/rboy](https://github.com/mvdnes/rboy) — [<img src="https://api.travis-ci.org/mvdnes/rboy.svg?branch=master">](https://travis-ci.org/mvdnes/rboy)
  * [[ **⭐ 13 | 👁️ 2 | 🔀 1** ] NivenT/RGB](https://github.com/nivent/RGB) — [<img src="https://api.travis-ci.org/NivenT/RGB.svg?branch=master">](https://travis-ci.org/NivenT/RGB)
* NES
  * [[ **⭐ 606 | 👁️ 27 | 🔀 53** ] pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) — [<img src="https://api.travis-ci.org/pcwalton/sprocketnes.svg?branch=master">](https://travis-ci.org/pcwalton/sprocketnes)
  * [[ **⭐ 514 | 👁️ 20 | 🔀 16** ] koute/pinky](https://github.com/koute/pinky) — [<img src="https://api.travis-ci.org/koute/pinky.svg?branch=master">](https://travis-ci.org/koute/pinky)
  * [[ **⭐ 32 | 👁️ 4 | 🔀 1** ] iamsix/oxidenes](https://github.com/iamsix/oxidenes) — [<img src="https://api.travis-ci.org/iamsix/oxidenes.svg?branch=master">](https://travis-ci.org/iamsix/oxidenes)
* Playstation
  * [[ **⭐ 432 | 👁️ 22 | 🔀 18** ] simias/rustation](https://github.com/simias/rustation) — [<img src="https://api.travis-ci.org/simias/rustation.svg?branch=master">](https://travis-ci.org/simias/rustation)
* ZX Spectrum
  * [[ **⭐ 39 | 👁️ 5 | 🔀 2** ] pacmancoder/rustzx](https://github.com/pacmancoder/rustzx) — [<img src="https://api.travis-ci.org/pacmancoder/rustzx.svg?branch=master">](https://travis-ci.org/pacmancoder/rustzx)
* Virtual Boy
  * [[ **⭐ 194 | 👁️ 22 | 🔀 23** ] emu-rs/rustual-boy](https://github.com/emu-rs/rustual-boy) — [<img src="https://api.travis-ci.org/emu-rs/rustual-boy.svg?branch=master">](https://travis-ci.org/emu-rs/rustual-boy)
* Emulator Development tools
  * SNES
    * [[ **⭐ 5 | 👁️ 1 | 🔀 0** ] ioncodes/snesutilities](https://github.com/ioncodes/snesutilities) — ROM analyser/extractor

### Games

See also [Games Made With Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston).

* [[ **⭐ 5323 | 👁️ 202 | 🔀 160** ] citybound](https://github.com/citybound/citybound) — The city sim you deserve
* [[ **⭐ 1774 | 👁️ 49 | 🔀 65** ] cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) — A renderer for Doom, may progress to being a playable game [<img src="https://api.travis-ci.org/cristicbz/rust-doom.svg?branch=master">](https://travis-ci.org/cristicbz/rust-doom)
* [[ **⭐ 533 | 👁️ 20 | 🔀 17** ] ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) — A small 2D turn-based hexagonal strategy game [<img src="https://api.travis-ci.org/ozkriff/zemeroth.svg?branch=master">](https://travis-ci.org/ozkriff/zemeroth)
* [[ **⭐ 287 | 👁️ 24 | 🔀 17** ] Zone of Control](https://github.com/ozkriff/zoc) — A turn-based hexagonal strategy game [<img src="https://api.travis-ci.org/ozkriff/zoc.svg?branch=master">](https://travis-ci.org/ozkriff/zoc)
* [[ **⭐ 227 | 👁️ 11 | 🔀 5** ] rsaarelm/magog](https://github.com/rsaarelm/magog) — A roguelike game in Rust
* [[ **⭐ 166 | 👁️ 3 | 🔀 9** ] garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) — Extensible open world rogue like game with pixel art [<img src="https://api.travis-ci.org/garkimasera/rusted-ruins.svg?branch=master">](https://travis-ci.org/garkimasera/rusted-ruins)
* [[ **⭐ 104 | 👁️ 4 | 🔀 6** ] swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) — A Sokoban implementation
* [[ **⭐ 102 | 👁️ 7 | 🔀 9** ] rhex](https://github.com/dpc/rhex) — hexagonal ascii roguelike
* [[ **⭐ 78 | 👁️ 4 | 🔀 5** ] lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) — A minimalistic music video game which supports the BMS format [<img src="https://api.travis-ci.org/lifthrasiir/angolmois-rust.svg?branch=master">](https://travis-ci.org/lifthrasiir/angolmois-rust)
* [[ **⭐ 22 | 👁️ 1 | 🔀 0** ] Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) — Quake map renderer in Rust
* [[ **⭐ 10 | 👁️ 2 | 🔀 0** ] aleshaleksey/TGWM](https://github.com/aleshaleksey/TGWM) — An RPG with turned-based mechanics (work in progress) [<img src="https://api.travis-ci.org/aleshaleksey/TGWM.svg?branch=master">](https://travis-ci.org/aleshaleksey/TGWM)
* [Veloren](https://gitlab.com/veloren/veloren) — An open-world, open-source multiplayer voxel RPG.

### Graphics

* [[ **⭐ 1575 | 👁️ 36 | 🔀 43** ] ivanceras/svgbob](https://github.com/ivanceras/svgbob) — converts ASCII diagrams into SVG graphics [<img src="https://api.travis-ci.org/ivanceras/svgbob.svg">](https://travis-ci.org/ivanceras/svgbob)
* [[ **⭐ 876 | 👁️ 33 | 🔀 43** ] RazrFalcon/svgcleaner](https://github.com/RazrFalcon/svgcleaner) — tidies SVG graphics
* [[ **⭐ 328 | 👁️ 21 | 🔀 12** ] Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) — A ray tracer [<img src="https://api.travis-ci.org/Twinklebear/tray_rust.svg">](https://travis-ci.org/Twinklebear/tray_rust)
* [[ **⭐ 103 | 👁️ 6 | 🔀 0** ] Limeth/euclider](https://github.com/Limeth/euclider) — A real-time 4D CPU ray tracer [<img src="https://api.travis-ci.org/Limeth/euclider.svg?branch=master">](https://travis-ci.org/Limeth/euclider)
* Image processing:
  * [[ **⭐ 13 | 👁️ 1 | 🔀 2** ] spejss/Image-Processing-CLI-in-Rust](https://github.com/spejss/Image-Processing-CLI-in-Rust) — CLI for processing images, generating histograms. [![Build Status](https://api.travis-ci.org/spejss/Image-Processing-CLI-in-Rust.svg?branch=master)](https://travis-ci.org/spejss/Image-Processing-CLI-in-Rust)

### Industrial automation

* [[ **⭐ 87 | 👁️ 12 | 🔀 19** ] locka99/opcua](https://github.com/locka99/opcua) — A pure rust [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) library.
* [[ **⭐ 54 | 👁️ 11 | 🔀 15** ] slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) — A [tokio](https://tokio.rs)-based [modbus](http://modbus.org) library. [![Build Status](https://api.travis-ci.org/slowtec/tokio-modbus.svg?branch=master)](https://travis-ci.org/slowtec/tokio-modbus)
* [[ **⭐ 4 | 👁️ 1 | 🔀 1** ] BiancoRoyal/modbus-iiot-rust](https://github.com/BiancoRoyal/modbus-iiot-rust) — A pure rust [modbus](http://modbus.org) library with no or less dependencies. [![Build Status](https://api.travis-ci.org/BiancoRoyal/modbus-iiot-rust.svg?branch=master)](https://travis-ci.org/BiancoRoyal/modbus-iiot-rust)

### Operating systems

See also [A comparison of operating systems written in Rust](https://github.com/flosse/rust-os-comparison).

* [[ **⭐ 1958 | 👁️ 126 | 🔀 47** ] nebulet/nebulet](https://github.com/nebulet/nebulet) — A microkernel that implements a WebAssembly "usermode" that runs in Ring 0.
* [[ **⭐ 1288 | 👁️ 69 | 🔀 163** ] tock/tock](https://github.com/tock/tock) — A secure embedded operating system for Cortex-M based microcontrollers
* [[ **⭐ 335 | 👁️ 35 | 🔀 21** ] thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) — [<img src="https://api.travis-ci.org/thepowersgang/rust_os.svg?branch=master">](https://travis-ci.org/thepowersgang/rust_os)
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) — [<img   src="https://api.travis-ci.org/redox-os/redox.svg?branch=master">](https://travis-ci.org/redox-os/redox)

### Productivity

* [eureka](https://crates.io/crates/eureka) — A CLI tool to input and store your ideas without leaving the terminal

### Security tools

* [[ **⭐ 345 | 👁️ 17 | 🔀 26** ] kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) — A semi-automatic OSINT framework and package manager [<img src="https://api.travis-ci.org/kpcyrd/sn0int.svg?branch=master">](https://travis-ci.org/kpcyrd/sn0int)
* [[ **⭐ 268 | 👁️ 10 | 🔀 20** ] kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) — A secure multithreaded packet sniffer [<img src="https://api.travis-ci.org/kpcyrd/sniffglue.svg?branch=master">](https://travis-ci.org/kpcyrd/sniffglue)
* [[ **⭐ 168 | 👁️ 11 | 🔀 9** ] kpcyrd/badtouch](https://github.com/kpcyrd/badtouch) — A scriptable network authentication cracker [<img src="https://api.travis-ci.org/kpcyrd/badtouch.svg?branch=master">](https://travis-ci.org/kpcyrd/badtouch)
* [[ **⭐ 132 | 👁️ 2 | 🔀 5** ] Gymmasssorla/anevicon](https://github.com/Gymmasssorla/anevicon) — The most powerful UDP-based load generator, written in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/anevicon.svg?branch=master">](https://travis-ci.com/Gymmasssorla/anevicon)
* [[ **⭐ 120 | 👁️ 6 | 🔀 11** ] kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) — A TCP connection hijacker, rust rewrite of shijack [<img src="https://api.travis-ci.org/kpcyrd/rshijack.svg?branch=master">](https://travis-ci.org/kpcyrd/rshijack)
* [[ **⭐ 10 | 👁️ 2 | 🔀 2** ] arvancloud/libinjection-rs](https://github.com/arvancloud/libinjection-rs) — Rust bindings for [libinjection](https://github.com/client9/libinjection) [<img src="https://api.travis-ci.org/arvancloud/libinjection-rs.svg?branch=master">](https://travis-ci.org/arvancloud/libinjection-rs)

### System tools

* [[ **⭐ 13809 | 👁️ 142 | 🔀 256** ] sharkdp/bat](https://github.com/sharkdp/bat) — A cat(1) clone with wings. [<img src="https://api.travis-ci.org/sharkdp/bat.svg?branch=master">](https://travis-ci.org/sharkdp/bat)
* [[ **⭐ 9663 | 👁️ 120 | 🔀 248** ] sharkdp/fd](https://github.com/sharkdp/fd) — A simple, fast and user-friendly alternative to find. [![Build Status](https://api.travis-ci.org/sharkdp/fd.svg?branch=master)](https://travis-ci.org/sharkdp/fd)
* [[ **⭐ 6493 | 👁️ 109 | 🔀 208** ] ogham/exa](https://github.com/ogham/exa) — A replacement for 'ls' [<img src="https://api.travis-ci.org/ogham/exa.svg?branch=master">](https://travis-ci.org/ogham/exa)
* [[ **⭐ 4882 | 👁️ 163 | 🔀 410** ] uutils/coreutils](https://github.com/uutils/coreutils) — A cross-platform Rust rewrite of the GNU coreutils [<img src="https://api.travis-ci.org/uutils/coreutils.svg?branch=master">](https://travis-ci.org/uutils/coreutils)
* [[ **⭐ 2685 | 👁️ 25 | 🔀 76** ] Peltoche/lsd](https://github.com/Peltoche/lsd) — An ls with a lot of pretty colors and awesome icons [<img src="https://api.travis-ci.org/Peltoche/lsd.svg?branch=master">](https://travis-ci.org/Peltoche/lsd)
* [[ **⭐ 2105 | 👁️ 22 | 🔀 142** ] XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) — counts the lines of code [<img src="https://img.shields.io/travis/XAMPPRocky/tokei.svg">](https://travis-ci.org/XAMPPRocky/tokei)
* [[ **⭐ 1228 | 👁️ 37 | 🔀 58** ] m4b/bingrep](https://github.com/m4b/bingrep) — Greps through binaries from various OSs and architectures, and colors them. [<img src="https://api.travis-ci.org/m4b/bingrep.svg?branch=master">](https://travis-ci.org/m4b/bingrep)
* [[ **⭐ 1093 | 👁️ 18 | 🔀 23** ] mmstick/parallel](https://github.com/mmstick/parallel) — Reimplementation of GNU Parallel
* [[ **⭐ 945 | 👁️ 18 | 🔀 35** ] lotabout/skim](https://github.com/lotabout/skim) — A fuzzy finder in pure rust [<img src="https://api.travis-ci.org/lotabout/skim.svg?branch=master">](https://travis-ci.org/lotabout/skim)
* [[ **⭐ 919 | 👁️ 16 | 🔀 45** ] watchexec](https://github.com/watchexec/watchexec) — Executes commands in response to file modifications [<img src="https://api.travis-ci.org/watchexec/watchexec.svg?branch=master">](https://travis-ci.org/watchexec/watchexec)
* [[ **⭐ 737 | 👁️ 53 | 🔀 119** ] redox-os/ion](https://github.com/redox-os/ion) — Next-generation system shell [<img src="https://api.travis-ci.org/redox-os/ion.svg?branch=master">](https://travis-ci.org/redox-os/ion)
* [[ **⭐ 525 | 👁️ 8 | 🔀 25** ] mitnk/cicada](https://github.com/mitnk/cicada) — A bash-like Unix shell [<img src="https://api.travis-ci.org/mitnk/cicada.svg?branch=master">](https://travis-ci.org/mitnk/cicada)
* [[ **⭐ 170 | 👁️ 8 | 🔀 6** ] mmstick/fontfinder](https://github.com/mmstick/fontfinder) — GTK3 application for previewing and installing Google's fonts
* [[ **⭐ 125 | 👁️ 15 | 🔀 7** ] pop-os/popsicle](https://github.com/pop-os/popsicle) — GTK3 & CLI utility for flashing multiple USB devices in parallel
* [[ **⭐ 122 | 👁️ 7 | 🔀 1** ] lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] — xargs + awk with pattern matching support [<img src="https://api.travis-ci.org/lotabout/rargs.svg?branch=master">](https://travis-ci.org/lotabout/rargs)
* [[ **⭐ 119 | 👁️ 10 | 🔀 8** ] mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) — A tv series renaming application with an optional GTK3 frontend. [<img src="https://api.travis-ci.org/mmstick/tv-renamer.svg?branch=master">](https://travis-ci.org/mmstick/tv-renamer)
* [[ **⭐ 110 | 👁️ 5 | 🔀 4** ] ddh](https://github.com/darakian/ddh) — Fast duplicate file finder [<img src="https://api.travis-ci.org/darakian/ddh.svg?branch=master">](https://travis-ci.org/darakian/ddh)
* [[ **⭐ 97 | 👁️ 3 | 🔀 6** ] cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) — A configurable filesystem watcher inspired by [entr](http://entrproject.org/) [<img src="https://api.travis-ci.org/cristianoliveira/funzzy.svg?branch=master">](https://travis-ci.org/cristianoliveira/funzzy)
* [[ **⭐ 91 | 👁️ 4 | 🔀 4** ] k0pernicus/zou](https://github.com/k0pernicus/zou) — A download accelerator [<img src="https://api.travis-ci.org/k0pernicus/zou.svg?branch=master">](https://travis-ci.org/k0pernicus/zou)
* [[ **⭐ 80 | 👁️ 6 | 🔀 6** ] buster/rrun](https://github.com/buster/rrun) — A command launcher for Linux, similar to gmrun  [<img src="https://api.travis-ci.org/buster/rrun.svg?branch=master">](https://travis-ci.org/buster/rrun)
* [[ **⭐ 72 | 👁️ 2 | 🔀 3** ] sitkevij/hex](https://github.com/sitkevij/hex) — A colorized hexdump terminal utility. [<img src="https://api.travis-ci.org/sitkevij/hex.svg?branch=master">](https://travis-ci.org/sitkevij/hex)
* [[ **⭐ 62 | 👁️ 9 | 🔀 2** ] mmstick/concurr](https://github.com/mmstick/concurr) — Alternative to GNU Parallel w/ a client-server architecture
* [[ **⭐ 37 | 👁️ 3 | 🔀 4** ] brocode/fblog](https://github.com/brocode/fblog) — Small command-line JSON Log viewer [<img src="https://api.travis-ci.org/brocode/fblog.svg?branch=master">](https://travis-ci.org/brocode/fblog)
* [[ **⭐ 21 | 👁️ 1 | 🔀 2** ] Ralvke/logram](https://github.com/Ralvke/logram) — Push log files' updates to Telegram [<img src="https://api.travis-ci.org/Ralvke/logram.svg?branch=master">](https://travis-ci.org/Ralvke/logram)
* [[ **⭐ 20 | 👁️ 10 | 🔀 2** ] pop-os/debrep](https://github.com/pop-os/debrepbuild) — APT repository tool for building and managing an APT repo
* [fselect](https://crates.io/crates/fselect) — Find files with SQL-like queries [<img src="https://api.travis-ci.org/jhspetersson/fselect.svg?branch=master">](https://travis-ci.org/jhspetersson/fselect)
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) — Linux power management daemon (DBus-interface) with CLI tool.
* [<ERR> mmstick/systemd-manager](https://github.com/mmstick/systemd-manager) — A systemd service manager written in Rust using GTK-rs.

### Text editors

* [[ **⭐ 16213 | 👁️ 481 | 🔀 597** ] xi-editor](https://github.com/xi-editor/xi-editor) — A modern editor with a backend written in Rust.
* [[ **⭐ 8772 | 👁️ 405 | 🔀 214** ] xray](https://github.com/atom/xray) — An experimental next-generation Electron-based text editor. [<img src="https://api.travis-ci.org/atom/xray.svg?branch=master">](https://travis-ci.org/atom/xray)
* [[ **⭐ 3395 | 👁️ 142 | 🔀 295** ] Remacs](https://github.com/remacs/remacs) — A community-driven port of Emacs to Rust. [<img src="https://api.travis-ci.org/remacs/remacs.svg?branch=master">](https://travis-ci.org/remacs/remacs)
* [[ **⭐ 1242 | 👁️ 58 | 🔀 62** ] gchp/iota](https://github.com/gchp/iota) — A simple text editor [<img src="https://api.travis-ci.org/gchp/iota.svg?branch=master">](https://travis-ci.org/gchp/iota)
* [[ **⭐ 430 | 👁️ 26 | 🔀 18** ] mathall/rim](https://github.com/mathall/rim) — Vim-like text editor written in Rust [<img src="https://api.travis-ci.org/mathall/rim.svg?branch=master">](https://travis-ci.org/mathall/rim)

### Text processing

* [[ **⭐ 202 | 👁️ 3 | 🔀 7** ] vishaltelangre/ff](https://github.com/vishaltelangre/ff) — Find files (ff) by name! [<img src="https://api.travis-ci.org/vishaltelangre/ff.svg?branch=master">](https://travis-ci.org/vishaltelangre/ff)
* [[ **⭐ 91 | 👁️ 6 | 🔀 3** ] TankerHQ/ruplacer](https://github.com/TankerHQ/ruplacer) — Find and replace text in source files [<img img src="https://api.travis-ci.org/TankerHQ/ruplacer.svg?branch=master">](https://travis-ci.org/TankerHQ/ruplacer)
* [[ **⭐ 57 | 👁️ 5 | 🔀 4** ] whitfin/runiq](https://github.com/whitfin/runiq) — an efficient way to filter duplicate lines from unsorted input.
* [[ **⭐ 21 | 👁️ 1 | 🔀 0** ] whitfin/bytelines](https://github.com/whitfin/bytelines) — Read input lines as byte slices for high efficiency.
* [[ **⭐ 5 | 👁️ 2 | 🔀 1** ] lavifb/todo_r](https://github.com/lavifb/todo_r) — Find all your TODO notes with one command! [<img src="https://api.travis-ci.org/lavifb/todo_r.svg?branch=master">](https://travis-ci.org/lavifb/todo_r)
* [ripgrep](https://crates.io/crates/ripgrep) — combines the usability of The Silver Searcher with the raw speed of grep [<img src="https://api.travis-ci.org/BurntSushi/ripgrep.svg?branch=master">](https://travis-ci.org/BurntSushi/ripgrep)
* [sd](https://crates.io/crates/sd) — Intuitive find & replace CLI [<img src="https://api.travis-ci.org/chmln/sd.svg?branch=master">](https://travis-ci.org/chmln/sd)
* [xsv](https://crates.io/crates/xsv) — A fast CSV command line tool (slicing, indexing, selecting, searching, sampling, etc.) [<img src="https://api.travis-ci.org/BurntSushi/xsv.svg?branch=master">](https://travis-ci.org/BurntSushi/xsv)

### Utilities

* [[ **⭐ 304 | 👁️ 17 | 🔀 18** ] myfreeweb/freepass](https://github.com/myfreeweb/freepass) — The free password manager for power users. [<img src="https://api.travis-ci.org/myfreeweb/freepass.svg?branch=master">](https://travis-ci.org/myfreeweb/freepass)
* [[ **⭐ 49 | 👁️ 2 | 🔀 1** ] evansmurithi/cloak](https://github.com/evansmurithi/cloak) — A Command Line OTP (One Time Password) Authenticator application. [<img src="https://api.travis-ci.com/evansmurithi/cloak.svg?branch=master">](https://travis-ci.com/evansmurithi/cloak) [<img src="https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true">](https://ci.appveyor.com/project/evansmurithi/cloak)
* [[ **⭐ 44 | 👁️ 4 | 🔀 3** ] yaa110/rubigo](https://github.com/yaa110/rubigo) — Golang dependency tool and package manager, written in Rust [<img src="https://api.travis-ci.org/yaa110/rubigo.svg?branch=master">](https://travis-ci.org/yaa110/rubigo)
* [[ **⭐ 39 | 👁️ 1 | 🔀 1** ] whitfin/s3-meta](https://github.com/whitfin/s3-meta) — A command line tool to gather metadata about your Amazon S3 buckets.
* [[ **⭐ 36 | 👁️ 2 | 🔀 2** ] fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) — A lightning fast version of tmux-fingers written in Rust, copy/pasting tmux like vimium/vimperator.
* [[ **⭐ 25 | 👁️ 3 | 🔀 2** ] brycx/checkpwn](https://github.com/brycx/checkpwn) — A Have I Been Pwned (HIBP) command-line utility tool that lets you easily check for compromised accounts and passwords.
* [[ **⭐ 14 | 👁️ 2 | 🔀 1** ] whitfin/s3-concat](https://github.com/whitfin/s3-concat) — A command line tool to concatenate Amazon S3 files remotely using flexible patterns.
* [[ **⭐ 8 | 👁️ 1 | 🔀 0** ] amar-laksh/workstation](https://github.com/amar-laksh/workstation) — A commandline tool to help you manage your workstation by distancing you from your screen, locking your screen when you aren't there among other things with OPENCV!
* [[ **⭐ 8 | 👁️ 2 | 🔀 0** ] arthrp/quick-skeleton](https://github.com/arthrp/quick-skeleton) — Project scaffolding tool, similar to Yeoman and Slush. [<img src="https://api.travis-ci.org/arthrp/quick-skeleton.svg?branch=master">](https://travis-ci.org/arthrp/quick-skeleton)
* [[ **⭐ 4 | 👁️ 1 | 🔀 1** ] aleshaleksey/AZDice](https://github.com/aleshaleksey/AZDice) — A dice roll success distribution generator for tabletop homebrewers. [<img src="https://api.travis-ci.org/aleshaleksey/AZDice.svg?branch=master">](https://travis-ci.org/aleshaleksey/AZDice)
* [[ **⭐ 1 | 👁️ 2 | 🔀 0** ] arthrp/consoletimer](https://github.com/arthrp/consoleTimer) - Simple timer for your terminal. [<img src="https://api.travis-ci.org/arthrp/consoleTimer.svg?branch=master">](https://travis-ci.org/arthrp/consoleTimer)

### Video

* [[ **⭐ 11 | 👁️ 0 | 🔀 0** ] yuvadm/slingr](https://github.com/yuvadm/slingr) — A simple CLI for streaming media files over a local network to UPnP media renderers [<img src="https://api.travis-ci.org/yuvadm/slingr.svg?branch=master">](https://travis-ci.org/yuvadm/slingr)

### Virtualization

* [[ **⭐ 8380 | 👁️ 272 | 🔀 496** ] firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) — A lightweight virtual machine for container workload  [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [[ **⭐ 1574 | 👁️ 61 | 🔀 76** ] tailhook/vagga](https://github.com/tailhook/vagga) — A containerization tool without daemons [<img src="https://api.travis-ci.org/tailhook/vagga.svg?branch=master">](https://travis-ci.org/tailhook/vagga)
* [[ **⭐ 871 | 👁️ 56 | 🔀 59** ] oracle/railcar](https://github.com/oracle/railcar) — Docker-like container OCI runtime implementation in Rust [![wercker status](https://app.wercker.com/status/730e874772dc02c6005f4ae4e42b0ca4/s/master "wercker status")](https://app.wercker.com/applications/59696a02ee70670100155ae2 )

### Window managers

* [[ **⭐ 1977 | 👁️ 92 | 🔀 73** ] way-cooler/way-cooler](https://github.com/way-cooler/way-cooler) — A customizable Wayland compositor (window manager) [<img src="https://api.travis-ci.org/way-cooler/way-cooler.svg?branch=master">](https://travis-ci.org/way-cooler/way-cooler)

### Web

* [[ **⭐ 991 | 👁️ 53 | 🔀 68** ] Plume-org/Plume](https://github.com/Plume-org/Plume) — ActivityPub federating blogging application [<img src="https://api.travis-ci.org/Plume-org/Plume.svg?branch=master">](https://travis-ci.org/Plume-org/Plume)
* [[ **⭐ 69 | 👁️ 14 | 🔀 13** ] rustlang-cn/ruster](https://github.com/rustlang-cn/ruster) — online community in rust for rust community [<img src="https://api.travis-ci.org/rustlang-cn/ruster.svg?branch=master">](https://travis-ci.org/rustlang-cn/ruster)


### Web Servers

* [[ **⭐ 365 | 👁️ 7 | 🔀 17** ] svenstaro/miniserve](https://github.com/svenstaro/miniserve) — A small, self-contained cross-platform CLI tool that allows you to just grab the binary and serve some file(s) via HTTP [<img src="https://api.travis-ci.org/svenstaro/miniserve.svg?branch=master">](https://travis-ci.org/svenstaro/miniserve)
* [[ **⭐ 198 | 👁️ 6 | 🔀 18** ] TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) — simple static http server
* [[ **⭐ 94 | 👁️ 2 | 🔀 11** ] thecoshman/http](https://github.com/thecoshman/http) — Host These Things Please — A basic http server for hosting a folder fast and simply [<img src="https://api.travis-ci.org/thecoshman/http.svg?branch=master">](https://travis-ci.org/thecoshman/http)

## Development tools

* [[ **⭐ 2822 | 👁️ 100 | 🔀 259** ] Racer](https://github.com/racer-rust/racer) — code completion for Rust [<img src="https://api.travis-ci.org/phildawes/racer.svg?branch=master">](https://travis-ci.org/phildawes/racer)
* [[ **⭐ 2536 | 👁️ 73 | 🔀 373** ] Rustup](https://github.com/rust-lang/rustup.rs) — the Rust toolchain installer [<img src="https://api.travis-ci.org/rust-lang/rustup.rs.svg?branch=master">](https://travis-ci.org/rust-lang/rustup.rs)
* [[ **⭐ 2328 | 👁️ 98 | 🔀 184** ] Rust Language Server](https://github.com/rust-lang/rls) — A server that runs in the background, providing IDEs, editors, and other tools with information about Rust programs
* [[ **⭐ 2242 | 👁️ 43 | 🔀 412** ] rustfmt](https://github.com/rust-lang/rustfmt) — A Rust code formatter [<img src="https://api.travis-ci.org/rust-lang/rustfmt.svg?branch=master">](https://travis-ci.org/rust-lang/rustfmt)
* [[ **⭐ 1006 | 👁️ 25 | 🔀 41** ] just](https://github.com/casey/just) — A handy command runner for project-specific tasks [<img src="https://api.travis-ci.org/casey/just.svg?branch=master">](https://travis-ci.org/casey/just)
* [[ **⭐ 519 | 👁️ 12 | 🔀 27** ] clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) — generates a changelog from git metadata ([conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)) [<img src="https://api.travis-ci.org/clog-tool/clog-cli.svg?branch=master">](https://travis-ci.org/clog-tool/clog-cli)
* [[ **⭐ 442 | 👁️ 10 | 🔀 34** ] artifact](https://github.com/vitiral/artifact) — the design doc tool made for developers [![Build Status](https://api.travis-ci.org/vitiral/artifact.svg?branch=master)](https://travis-ci.org/vitiral/artifact)
* [[ **⭐ 416 | 👁️ 19 | 🔀 31** ] rust-lang-nursery/rustfix](https://github.com/rust-lang-nursery/rustfix)  — automatically applies the suggestions made by rustc [<img src="https://api.travis-ci.org/killercup/rustfix.svg?branch=master">](https://travis-ci.org/killercup/rustfix)
* [[ **⭐ 253 | 👁️ 4 | 🔀 18** ] dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) — create ctags/etags for a cargo project and all of its dependencies [<img src="https://api.travis-ci.org/dan-t/rusty-tags.svg?branch=master">](https://travis-ci.org/dan-t/rusty-tags)
* [[ **⭐ 132 | 👁️ 7 | 🔀 6** ] semantic-rs](https://github.com/semantic-rs/semantic-rs) — automatic crate publishing [<img src="https://api.travis-ci.org/semantic-rs/semantic-rs.svg?branch=master">](https://travis-ci.org/semantic-rs/semantic-rs)
* [[ **⭐ 97 | 👁️ 6 | 🔀 6** ] fw](https://github.com/brocode/fw) — workspace productivity booster [<img src="https://api.travis-ci.org/brocode/fw.svg?branch=master">](https://travis-ci.org/brocode/fw)
* [[ **⭐ 44 | 👁️ 2 | 🔀 2** ] ptags](https://github.com/dalance/ptags) — A parallel universal-ctags wrapper for git repository [![Build Status](https://api.travis-ci.org/dalance/ptags.svg?branch=master)](https://travis-ci.org/dalance/ptags)
* [[ **⭐ 19 | 👁️ 2 | 🔀 0** ] frewsxcv/crate-deps](https://github.com/frewsxcv/crate-deps) — generates images of dependency graphs for crates hosted on crates.io
* [[ **⭐ 15 | 👁️ 1 | 🔀 1** ] tinyrick](https://github.com/mcandre/tinyrick) a basic task dependency tool emphasizing Rust functions over raw shell commands.
* [clippy](https://crates.io/crates/clippy) — Rust lints [<img src="https://api.travis-ci.org/rust-lang/rust-clippy.svg?branch=master">](https://travis-ci.org/rust-lang/rust-clippy)
* [git-journal](https://github.com/saschagrunert/git-journal/) — The Git Commit Message and Changelog Generation Framework [<img src="https://api.travis-ci.org/saschagrunert/git-journal.svg?branch=master">](https://travis-ci.org/saschagrunert/git-journal)
* [Module Linker](https://fiatjaf.alhur.es/module-linker) — Extension that adds `<a>` links to references in `mod`, `use` and `extern crate` statements at GitHub.

### Build system

  * [[ **⭐ 349 | 👁️ 7 | 🔀 8** ] dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) — Expand macros in your source code
  * [[ **⭐ 2 | 👁️ 2 | 🔀 1** ] liuchong/cargo-x](https://github.com/liuchong/cargo-x) — A very simple third-party cargo subcommand to execute a custom command [<img src="https://api.travis-ci.org/liuchong/cargo-x.svg?branch=master">](https://travis-ci.org/liuchong/cargo-x)
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
  * [[ **⭐ 78 | 👁️ 6 | 🔀 12** ] SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) — an example project showing usage of CMake with Rust [<img src="https://api.travis-ci.org/SiegeLord/RustCMake.svg?branch=master">](https://travis-ci.org/SiegeLord/RustCMake)
  * [[ **⭐ 42 | 👁️ 17 | 🔀 7** ] Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) — useful for integrating a Rust library into a CMake project
* Github actions
  * [[ **⭐ 21 | 👁️ 1 | 🔀 0** ] icepuma/rust-github-actions](https://github.com/icepuma/rust-github-actions) — rust github actions
* Webpack
  * [[ **⭐ 33 | 👁️ 2 | 🔀 3** ] Ralvke/rust-loader](https://github.com/Ralvke/rust-loader) — Webpack Rust loader (wasm)

### Debugging

* GDB
  * [[ **⭐ 6614 | 👁️ 192 | 🔀 378** ] gdbgui](https://github.com/cs01/gdbgui) — Browser based frontend for gdb to debug C, C++, Rust, and go. [<img src="https://api.travis-ci.org/cs01/gdbgui.svg?branch=master">](https://travis-ci.org/cs01/gdbgui)
  * [rust-gdb](https://github.com/rust-lang/rust/blob/master/src/etc/rust-gdb)
* LLDB
  * [lldb_batchmode.py](https://github.com/rust-lang/rust/blob/master/src/etc/lldb_batchmode.py) — allows to use LLDB in a way similar to GDB's batch mode.
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension for [Visual Studio Code](https://code.visualstudio.com/).
* rr
  * [rr](https://rr-project.org/) — rr is a lightweight tool for recording and replaying execution of applications

### Deployment

* Docker
  * [[ **⭐ 531 | 👁️ 14 | 🔀 59** ] emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) — Docker images for compiling static Rust binaries using musl-libc and musl-gcc, with static versions of useful C libraries
  * [[ **⭐ 111 | 👁️ 9 | 🔀 16** ] rust-lang-nursery/docker-rust](https://github.com/rust-lang/docker-rust) — the official Rust Docker image
  * [[ **⭐ 74 | 👁️ 3 | 🔀 3** ] kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) — An example project for very small rust docker images [<img src="https://api.travis-ci.org/kpcyrd/mini-docker-rust.svg?branch=master">](https://travis-ci.org/kpcyrd/mini-docker-rust)
  * [[ **⭐ 64 | 👁️ 5 | 🔀 11** ] messense/rust-musl-cross](https://github.com/messense/rust-musl-cross) — Docker images for compiling static Rust binaries using musl-cross [<img src="https://api.travis-ci.org/messense/rust-musl-cross.svg?branch=master">](https://travis-ci.org/messense/rust-musl-cross)
  * [[ **⭐ 38 | 👁️ 3 | 🔀 5** ] liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) — A multiple version (with musl tools) Rust Docker image
* Google App Engine
  * [[ **⭐ 30 | 👁️ 4 | 🔀 3** ] DenisKolodin/rust-app-engine](https://github.com/DenisKolodin/rust-app-engine) — App Engine Rust boilerplate
* Heroku
  * [[ **⭐ 240 | 👁️ 14 | 🔀 77** ] emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) — A buildpack for Rust applications on Heroku

### Embedded

[Rust Embedded](https://rust-embedded.org/)

* Cross compiling
  * [[ **⭐ 1194 | 👁️ 45 | 🔀 53** ] japaric/rust-cross](https://github.com/japaric/rust-cross) — everything you need to know about cross compiling Rust programs [<img src="https://api.travis-ci.org/japaric/rust-cross.svg?branch=master">](https://travis-ci.org/japaric/rust-cross)
  * [[ **⭐ 610 | 👁️ 27 | 🔀 58** ] japaric/xargo](https://github.com/japaric/xargo) — effortless cross compilation of Rust programs to custom bare-metal targets like ARM Cortex-M [<img src="https://api.travis-ci.org/japaric/xargo.svg?branch=master">](https://travis-ci.org/japaric/xargo)
* Raspberry Pi
  * [[ **⭐ 273 | 👁️ 17 | 🔀 16** ] Ogeon/rust-on-raspberry-pi](https://github.com/Ogeon/rust-on-raspberry-pi) — instructions for how to cross compile Rust projects for the Raspberry Pi .
* Arduino
  * [[ **⭐ 231 | 👁️ 30 | 🔀 11** ] avr-rust/ruduino](https://github.com/avr-rust/ruduino) ^`^t Reusable components for the Arduino Uno.

### FFI

See also [Foreign Function Interface](https://doc.rust-lang.org/book/first-edition/ffi.html),  [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/) (a collection of examples of using code written in Rust from other languages) and [FFI examples written in Rust](https://github.com/alexcrichton/rust-ffi-examples).

* C
  * [[ **⭐ 424 | 👁️ 16 | 🔀 67** ] rlhunt/cbindgen](https://github.com/eqrion/cbindgen) — generates C header files from Rust source files. Used in Gecko for WebRender [<img src="https://api.travis-ci.org/eqrion/cbindgen.svg?branch=master">](https://travis-ci.org/eqrion/cbindgen)
  * [[ **⭐ 190 | 👁️ 6 | 🔀 22** ] Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) — generates C header files from Rust source files [<img src="https://api.travis-ci.org/Sean1708/rusty-cheddar.svg?branch=master">](https://travis-ci.org/Sean1708/rusty-cheddar)
* C++
  * [[ **⭐ 1148 | 👁️ 45 | 🔀 324** ] rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) — A Rust bindings generator
* Erlang
  * [[ **⭐ 1564 | 👁️ 76 | 🔀 73** ] rusterlium/rustler](https://github.com/rusterlium/rustler) — safe Rust bridge for creating Erlang NIF functions [<img src="https://api.travis-ci.org/rusterlium/rustler.svg?branch=master">](https://travis-ci.org/rusterlium/rustler)
* Haskell
  * [[ **⭐ 203 | 👁️ 15 | 🔀 7** ] mgattozzi/curryrs](https://github.com/mgattozzi/curryrs) — Bridge the gap between Haskell and Rust
  * [[ **⭐ 18 | 👁️ 1 | 🔀 1** ] mgattozzi/haskellrs](https://github.com/mgattozzi/haskellrs) — Rust in Haskell FFI Example
  * [[ **⭐ 0 | 👁️ 1 | 🔀 0** ] mgattozzi/rushs](https://github.com/mgattozzi/rushs) — Haskell in Rust FFI Example
* Java
  * [[ **⭐ 236 | 👁️ 9 | 🔀 26** ] drrb/java-rust-example](https://github.com/drrb/java-rust-example) — use Rust from Java [<img src="https://api.travis-ci.org/drrb/java-rust-example.svg?branch=master">](https://travis-ci.org/drrb/java-rust-example)
  * [[ **⭐ 49 | 👁️ 4 | 🔀 1** ] bennettanderson/rjni](https://github.com/benanders/rjni) — use Java from Rust [<img src="https://api.travis-ci.org/bennettanderson/rjni.svg?branch=master">](https://travis-ci.org/GravityScore/RustJNI)
  * [[ **⭐ 9 | 👁️ 2 | 🔀 3** ] rawrasaur/rust-jdbc](https://github.com/rawrasaur/rust-jdbc) — uses JDBC from Rust [<img src="https://api.travis-ci.org/rawrasaur/rust-jdbc.svg?branch=master">](https://travis-ci.org/rawrasaur/rust-jdbc)
  * [j4rs](https://crates.io/crates/j4rs) — use Java from Rust [<img src="https://api.travis-ci.org/astonbitecode/j4rs.svg?branch=master">](https://travis-ci.org/astonbitecode/j4rs)
  * [jni](https://crates.io/crates/jni) — use Rust from Java [<img src="https://api.travis-ci.org/jni-rs/jni-rs.svg?branch=master">](https://travis-ci.org/jni-rs/jni-rs)
  * [jni-sys](https://crates.io/crates/jni-sys) — Rust definitions corresponding to jni.h [<img src="https://api.travis-ci.org/sfackler/rust-jni-sys.svg?branch=master">](https://travis-ci.org/sfackler/rust-jni-sys)
  * [rucaja](https://crates.io/crates/rucaja) — use Java from Rust [<img src="https://api.travis-ci.org/kud1ing/rucaja.svg?branch=master">](https://travis-ci.org/kud1ing/rucaja)
  Lua
  * [[ **⭐ 413 | 👁️ 20 | 🔀 46** ] tomaka/hlua](https://github.com/tomaka/hlua) — Rust library to interface with Lua [<img src="https://api.travis-ci.org/tomaka/hlua.svg?branch=master">](https://travis-ci.org/tomaka/hlua)
  * [[ **⭐ 111 | 👁️ 8 | 🔀 30** ] jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) — Lua 5.3 bindings for Rust [<img src="https://api.travis-ci.org/jcmoyer/rust-lua53.svg?branch=master">](https://travis-ci.org/jcmoyer/rust-lua53)
  * [[ **⭐ 107 | 👁️ 7 | 🔀 20** ] kballard/rust-lua](https://github.com/lilyball/rust-lua) — Safe Rust bindings to Lua 5.1 [<img src="https://api.travis-ci.org/lilyball/rust-lua.svg">](https://travis-ci.org/lilyball/rust-lua)
  * [[ **⭐ 30 | 👁️ 6 | 🔀 6** ] tickbh/td_rlua](https://github.com/tickbh/td_rlua) — Zero-cost high-level lua 5.3 wrapper for Rust [<img src="https://api.travis-ci.org/tickbh/td_rlua.svg?branch=master">](https://travis-ci.org/tickbh/td_rlua)
* mruby
  * [[ **⭐ 186 | 👁️ 10 | 🔀 13** ] anima-engine/mrusty](https://github.com/anima-engine/mrusty) — mruby safe bindings for Rust [<img src="https://api.travis-ci.org/anima-engine/mrusty.svg?branch=master">](https://travis-ci.org/anima-engine/mrusty)
* Node.js
  * [[ **⭐ 3411 | 👁️ 109 | 🔀 140** ] neon-bindings/neon](https://github.com/neon-bindings/neon) — use Rust from Node.js [<img src="https://api.travis-ci.org/neon-bindings/neon.svg?branch=master">](https://travis-ci.org/neon-bindings/neon)
* Objective-C
  * [[ **⭐ 174 | 👁️ 13 | 🔀 21** ] SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) — Objective-C Runtime bindings and wrapper for Rust
* Perl
  * [[ **⭐ 34 | 👁️ 8 | 🔀 7** ] vickenty/perl-xs](https://github.com/vickenty/perl-xs) — Create Perl XS modules using Rust [<img src="https://api.travis-ci.org/vickenty/perl-xs.svg?branch=master">](https://travis-ci.org/vickenty/perl-xs)
  * [[ **⭐ 2 | 👁️ 1 | 🔀 0** ] vickenty/mi-rust](https://github.com/vickenty/mi-rust) — Adds support to M::I for building modules with Cargo
* Python
  * [[ **⭐ 1387 | 👁️ 44 | 🔀 98** ] PyO3/PyO3](https://github.com/PyO3/PyO3) — Rust bindings for the Python interpreter [<img src="https://api.travis-ci.org/PyO3/pyo3.svg?branch=master">](https://travis-ci.org/PyO3/pyo3)
  * [[ **⭐ 1016 | 👁️ 33 | 🔀 71** ] dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) — Python bindings [<img src="https://api.travis-ci.org/dgrunwald/rust-cpython.svg?branch=master">](https://travis-ci.org/dgrunwald/rust-cpython)
  * [[ **⭐ 537 | 👁️ 20 | 🔀 18** ] getsentry/milksnake](https://github.com/getsentry/milksnake) — extension for python setuptools that allows you to distribute dynamic linked libraries in Python wheels in the most portable way imaginable.
* R
  * [[ **⭐ 144 | 👁️ 20 | 🔀 7** ] rustr/rustr](https://github.com/rustr/rustr) — use Rust from R, and use R in Rust [<img src="https://api.travis-ci.org/rustr/rustr.svg?branch=master">](https://travis-ci.org/rustr/rustr)
* Ruby
  * [[ **⭐ 1833 | 👁️ 76 | 🔀 63** ] tildeio/helix](https://github.com/tildeio/helix) — write Ruby classes in Rust [<img src="https://api.travis-ci.org/tildeio/helix.svg?branch=master">](https://travis-ci.org/tildeio/helix)
  * [[ **⭐ 750 | 👁️ 31 | 🔀 29** ] d-unseductable/ruru](https://github.com/d-unseductable/ruru) — native Ruby extensions written in Rust [<img src="https://api.travis-ci.org/d-unseductable/ruru.svg?branch=master">](https://travis-ci.org/d-unseductable/ruru)
  * [[ **⭐ 250 | 👁️ 10 | 🔀 19** ] danielpclark/rutie](https://github.com/danielpclark/rutie) — native Ruby extensions written in Rust and vice versa [![Build Status](https://api.travis-ci.org/danielpclark/rutie.svg?branch=master)](https://travis-ci.org/danielpclark/rutie)
* Web Assembly
  * [[ **⭐ 2193 | 👁️ 97 | 🔀 255** ] rustwasm/wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) — A project for facilitating high-level interactions between wasm modules and JS. [<img src="https://api.travis-ci.org/rustwasm/wasm-bindgen.svg?branch=master">](https://travis-ci.org/rustwasm/wasm-bindgen)
  * [[ **⭐ 1844 | 👁️ 44 | 🔀 110** ] rustwasm/wasm-pack](https://github.com/rustwasm/wasm-pack) — :package: :sparkles: pack up the wasm and publish it to npm! [<img src="https://api.travis-ci.org/rustwasm/wasm-pack.svg?branch=master">](https://travis-ci.org/rustwasm/wasm-packn)

### IDEs

See also [Are we (I)DE yet?](https://areweideyet.com/) and [Rust Tools](https://www.rust-lang.org/tools).

    * [[ **⭐ 2417 | 👁️ 74 | 🔀 228** ] intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) — [<img src="https://api.travis-ci.org/intellij-rust/intellij-rust.svg?branch=master">](https://travis-ci.org/intellij-rust/intellij-rust)
	* [[ **⭐ 2147 | 👁️ 54 | 🔀 193** ] autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) — [LSP](https://microsoft.github.io/language-server-protocol/) client. Implemented in Rust and supports rls out of the box.
	* [[ **⭐ 1518 | 👁️ 32 | 🔀 173** ] rust.vim](https://github.com/rust-lang/rust.vim) — provides file detection, syntax highlighting, formatting, Syntastic integration, and more.
  * [[ **⭐ 902 | 👁️ 47 | 🔀 54** ] SolidOak](https://github.com/oakes/SolidOak) — A simple IDE for Rust, based on GTK+ and [Neovim](https://github.com/neovim/neovim)
	* [[ **⭐ 459 | 👁️ 13 | 🔀 37** ] vim-racer](https://github.com/racer-rust/vim-racer) — allows vim to use [Racer](https://github.com/racer-rust/racer) for Rust code completion and navigation.
    * [[ **⭐ 458 | 👁️ 29 | 🔀 98** ] rust-mode](https://github.com/rust-lang/rust-mode) — Rust Major Mode
    * [[ **⭐ 438 | 👁️ 22 | 🔀 74** ] rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) — official Rust package
    * [[ **⭐ 350 | 👁️ 25 | 🔀 54** ] RustDT](https://github.com/RustDT/RustDT) — [<img src="https://api.travis-ci.org/RustDT/RustDT.svg?branch=master">](https://travis-ci.org/RustDT/RustDT)
    * [[ **⭐ 303 | 👁️ 15 | 🔀 40** ] emacs-racer](https://github.com/racer-rust/emacs-racer) — Autocompletion (see also [company](https://company-mode.github.io) and [auto-complete](https://github.com/auto-complete/auto-complete))
  * [[ **⭐ 150 | 👁️ 11 | 🔀 10** ] Ride](https://github.com/madeso/ride) — [<img src="https://api.travis-ci.org/madeso/ride.svg?branch=master">](https://travis-ci.org/madeso/ride)
    * [[ **⭐ 116 | 👁️ 12 | 🔀 33** ] zargony/atom-language-rust](https://github.com/zargony/atom-language-rust)
    * [[ **⭐ 107 | 👁️ 15 | 🔀 16** ] Eclipse Corrosion](https://github.com/eclipse/corrosion)
    * [[ **⭐ 86 | 👁️ 4 | 🔀 16** ] flycheck-rust](https://github.com/flycheck/flycheck-rust) — Rust support for [Flycheck](https://github.com/flycheck/flycheck)
    * [[ **⭐ 58 | 👁️ 9 | 🔀 17** ] lsp-rust](https://github.com/emacs-lsp-legacy/lsp-rust) — Add rls support to [lsp-mode](https://github.com/emacs-lsp/lsp-mode)
    * [[ **⭐ 41 | 👁️ 9 | 🔀 16** ] drrb/rust-netbeans](https://github.com/drrb/rust-netbeans)
	* [[ **⭐ 28 | 👁️ 2 | 🔀 7** ] vim-cargo](https://github.com/timonv/vim-cargo) — command bindings to quickly run cargo stuff from vim.
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
    * [[ **⭐ 657 | 👁️ 105 | 🔀 76** ] PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) — A Visual Studio extension for Rust [<img src="https://api.travis-ci.org/PistonDevelopers/VisualRust.svg?branch=master">](https://travis-ci.org/PistonDevelopers/VisualRust)
    * [[ **⭐ 80 | 👁️ 11 | 🔀 5** ] dgriffen/rls-vs2017](https://github.com/dgriffen/rls-vs2017) — Rust support for Visual Studio 2017 Preview [<img src="https://ci.appveyor.com/api/projects/status/d2lxlincwninhsng?svg=true">](https://ci.appveyor.com/project/dgriffen/rls-vs2017)
    * [[ **⭐ 49 | 👁️ 1 | 🔀 6** ] crates](https://github.com/serayuzgur/crates) — crates is an extension for crates.io dependencies. [<img src="https://img.shields.io/vscode-marketplace/v/serayuzgur.crates.svg">](https://github.com/serayuzgur/crates) [<img src="https://api.travis-ci.org/serayuzgur/crates.svg?branch=master">](https://travis-ci.org/serayuzgur/crates)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [rust-lang/rls-vscode](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) — Rust support for Visual Studio Code
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) — A LLDB extension
    * [KalitaAlexey/vscode-rust](https://marketplace.visualstudio.com/items?itemName=kalitaalexey.vscode-rust) — A fork of RustyCode
    * [saviorisdead/RustyCode](https://marketplace.visualstudio.com/items?itemName=saviorisdead.RustyCode) (unmaintained)

### Pattern recognition

* [[ **⭐ 15 | 👁️ 1 | 🔀 1** ] sfikas/rusteval](https://github.com/sfikas/rusteval) — A tool used to evaluate the output of retrieval algorithms [![Build Status](https://api.travis-ci.org/sfikas/rusteval.svg?branch=master)](https://travis-ci.org/sfikas/rusteval)

### Profiling

* [[ **⭐ 2833 | 👁️ 39 | 🔀 57** ] sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) — A command-line benchmarking tool [![Version info](https://img.shields.io/crates/v/hyperfine.svg)](https://crates.io/crates/hyperfine) [![Build Status](https://api.travis-ci.org/sharkdp/hyperfine.svg?branch=master)](https://travis-ci.org/sharkdp/hyperfine)
* [[ **⭐ 49 | 👁️ 3 | 🔀 12** ] ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) — A stopwatch library [<img src="https://api.travis-ci.org/ellisonch/rust-stopwatch.svg?branch=master">](https://travis-ci.org/ellisonch/rust-stopwatch)
* [[ **⭐ 16 | 👁️ 6 | 🔀 4** ] performancecopilot/hornet](https://github.com/performancecopilot/hornet) — A Performance Co-Pilot memory-mapped values instrumentation library [![crates.io badge](https://img.shields.io/crates/v/hornet.svg)](https://crates.io/crates/hornet) [<img src="https://api.travis-ci.org/performancecopilot/hornet.svg?branch=master">](https://travis-ci.org/performancecopilot/hornet)
* FlameGraphs
  * [[ **⭐ 386 | 👁️ 12 | 🔀 15** ] TyOverby/flame](https://github.com/TyOverby/flame) — [<img src="https://api.travis-ci.org/TyOverby/flame.svg?branch=master">](https://travis-ci.org/TyOverby/flame)
  * [[ **⭐ 101 | 👁️ 3 | 🔀 6** ] mrhooray/torch](https://github.com/mrhooray/torch) — generates FlameGraphs based on DWARF Debug Info

### Services

* [deps.rs](https://deps.rs) — Detect outdated or insecure dependencies
* [docs.rs](https://docs.rs) — Automatic documentation generation of crates

### Static analysis

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [static_assertions](https://crates.io/crates/static_assertions) — Compile-time assertions to ensure that invariants are met [![Build Status](https://api.travis-ci.org/nvzqz/static-assertions-rs.svg?branch=master)](https://travis-ci.org/nvzqz/static-assertions-rs/)

### Testing

[[testing](https://crates.io/keywords/testing)]

* [[ **⭐ 784 | 👁️ 25 | 🔀 38** ] trust](https://github.com/japaric/trust) — A Travis CI and AppVeyor template to test your Rust crate on 5 architectures and publish binary releases of it for Linux, macOS and Windows
* [[ **⭐ 769 | 👁️ 33 | 🔀 59** ] rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) — A Rust fuzzer, using [AFL](http://lcamtuf.coredump.cx/afl/) [<img src="https://api.travis-ci.org/rust-fuzz/afl.rs.svg?branch=master">](https://travis-ci.org/rust-fuzz/afl.rs)
* [[ **⭐ 37 | 👁️ 2 | 🔀 5** ] AlKass/polish](https://github.com/AlKass/polish) — Mini Testing/Test-Driven Framework [![Build Status](https://api.travis-ci.org/AlKass/polish.svg?branch=master)](https://travis-ci.org/AlKass/polish) [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
* [mutagen](https://crates.io/crates/mutagen) — A source-level mutation testing framework (nightly only) [<img src="https://api.travis-ci.org/llogiq/mutagen.svg?branch=master">](https://travis-ci.org/llogiq/mutagen)
* [proptest](https://crates.io/crates/proptest) — property testing framework inspired by the [Hypothesis](https://hypothesis.works/) framework for Python [<img src="https://api.travis-ci.org/altsysrq/proptest.svg?branch=master">](https://travis-ci.org/altsysrq/proptest)
* [quickcheck](https://crates.io/crates/quickcheck) — A Rust implementation of [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) [<img src="https://api.travis-ci.org/BurntSushi/quickcheck.svg?branch=master">](https://travis-ci.org/BurntSushi/quickcheck)
* [mockito](https://crates.io/crates/mockito) — HTTP mocking [<img src="https://api.travis-ci.org/lipanski/mockito.svg?branch=master">](https://travis-ci.org/lipanski/mockito)
* [speculate](https://crates.io/crates/speculate) — An RSpec inspired minimal testing framework for Rust
* [tarpaulin](https://crates.io/crates/cargo-tarpaulin) — A code coverage tool designed for Rust [<img src="https://api.travis-ci.org/repositories/xd009642/tarpaulin.svg?branch=master">](https://travis-ci.org/xd009642/tarpaulin)

### Transpiling

* [[ **⭐ 1936 | 👁️ 73 | 🔀 105** ] jameysharp/corrode](https://github.com/jameysharp/corrode) — A C to Rust translator written in Haskell.
* [[ **⭐ 600 | 👁️ 25 | 🔀 29** ] immunant/c2rust](https://github.com/immunant/c2rust) — C to Rust translator and cross checker built atop Clang/LLVM. [![Build Status](https://api.travis-ci.org/immunant/c2rust.svg?branch=master)](https://travis-ci.org/immunant/c2rust)


## Libraries

### Artificial Intelligence

#### Genetic algorithms

* [[ **⭐ 52 | 👁️ 3 | 🔀 10** ] m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) — Genetic Algorithm library in Rust. In maintenance mode.
* [[ **⭐ 42 | 👁️ 2 | 🔀 9** ] willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) — This library allows you to write evolutionary algorithms (EA) using the Rust programming language. Written by Willi Kappler, License: MIT — Version 0.4 (2017.06.26).
* [[ **⭐ 37 | 👁️ 3 | 🔀 5** ] Martin1887/oxigen](https://github.com/Martin1887/oxigen) — Fast, parallel, extensible and adaptable genetic algorithm library. A example using this library solves the N Queens problem for N = 255 in only few seconds and using less than 1 MB of RAM.
* [[ **⭐ 23 | 👁️ 1 | 🔀 4** ] innoave/genevo](https://github.com/innoave/genevo) — Execute genetic algorithm (GA) simulations in a customizable and extensible way.
* [[ **⭐ 7 | 👁️ 1 | 🔀 1** ] yurytsoy/revonet](https://github.com/yurytsoy/revonet) — Rust implementation of real-coded GA for solving optimization problems and training of neural networks.
* [[ **⭐ 5 | 👁️ 1 | 🔀 0** ] mneumann/evo-rs](https://github.com/mneumann/evo-rs) — Evolutionary Algorithm Library for Rust. Without changes for 3 years.

#### Machine learning

[[machine learning](https://crates.io/keywords/machine-learning)]

See also [About Rust’s Machine Learning Community](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f).

* [[ **⭐ 5402 | 👁️ 194 | 🔀 270** ] autumnai/leaf](https://github.com/autumnai/leaf) — Open Machine Intelligence framework. [![Build Status](https://api.travis-ci.org/autumnai/leaf.svg?branch=master)](https://travis-ci.org/autumnai/leaf). Abandoned project. The most updated fork is [spearow/juice]( https://github.com/spearow/juice).
* [[ **⭐ 1739 | 👁️ 89 | 🔀 171** ] tensorflow/rust](https://github.com/tensorflow/rust) — Rust language bindings for TensorFlow. [![Build Status](https://api.travis-ci.org/tensorflow/rust.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* [[ **⭐ 854 | 👁️ 64 | 🔀 104** ] AtheMathmo/rusty-machine](https://github.com/AtheMathmo/rusty-machine) — Machine learning library for Rust [![Build Status](https://api.travis-ci.org/AtheMathmo/rusty-machine.svg?branch=master)](https://travis-ci.org/AtheMathmo/rusty-machine)
* [[ **⭐ 357 | 👁️ 22 | 🔀 25** ] maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) — Machine learning crate for Rust. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://circleci.com/gh/maciejkula/rustlearn)
* [[ **⭐ 219 | 👁️ 12 | 🔀 13** ] LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) — Rust language bindings for PyTorch. [![Build Status](https://api.travis-ci.org/LaurentMazare/tch-rs.svg?branch=master)](https://travis-ci.org/LaurentMazare/tch-rs)
* [[ **⭐ 6 | 👁️ 4 | 🔀 0** ] avinashshenoy97/RusticSOM](https://github.com/avinashshenoy97/RusticSOM) — Rust library for Self Organising Maps (SOM). [![Build Status](https://api.travis-ci.org/avinashshenoy97/RusticSOM.svg?branch=master)](https://travis-ci.org/avinashshenoy97/RusticSOM)


### Astronomy

[[astronomy](https://crates.io/keywords/astronomy)]

* [[ **⭐ 86 | 👁️ 11 | 🔀 14** ] saurvs/astro-rust](https://github.com/saurvs/astro-rust) — astronomy for Rust [<img src="https://api.travis-ci.org/saurvs/astro-rust.svg?branch=master">](https://travis-ci.org/saurvs/astro-rust)
* [[ **⭐ 14 | 👁️ 2 | 🔀 1** ] flosse/rust-sun](https://github.com/flosse/rust-sun) — A rust port of the JS library suncalc [<img src="https://api.travis-ci.org/flosse/rust-sun.svg?branch=master">](https://travis-ci.org/flosse/rust-sun)
* [fitsio](https://crates.io/crates/fitsio) — fits interface library wrapping cfitsio [<img src="https://api.travis-ci.org/mindriot101/rust-fitsio.svg?branch=master">](https://travis-ci.org/mindriot101/rust-fitsio)

### Asynchronous

* [[ **⭐ 3021 | 👁️ 113 | 🔀 367** ] mio](https://github.com/tokio-rs/mio) — MIO is a lightweight IO library for Rust with a focus on adding as little overhead as possible over the OS abstractions [<img src="https://api.travis-ci.org/tokio-rs/mio.svg?branch=master">](https://travis-ci.org/tokio-rs/mio)
* [[ **⭐ 2628 | 👁️ 136 | 🔀 321** ] rust-lang-nursery/futures-rs](https://github.com/rust-lang-nursery/futures-rs) — Zero-cost futures in Rust [<img src="https://api.travis-ci.org/rust-lang-nursery/futures-rs.svg?branch=master" alt="Travis CI Build Status">](https://travis-ci.org/rust-lang-nursery/futures-rs)
* [[ **⭐ 623 | 👁️ 29 | 🔀 27** ] Xudong-Huang/may](https://github.com/Xudong-Huang/may) — rust stackful coroutine library [<img src="https://api.travis-ci.org/Xudong-Huang/may.svg?branch=master">](https://travis-ci.org/Xudong-Huang/may)
* [[ **⭐ 414 | 👁️ 16 | 🔀 26** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) — A coroutine I/O library with a working-stealing scheduler [<img src="https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 116 | 👁️ 6 | 🔀 12** ] dpc/mioco](https://github.com/dpc/mioco) — Scalable, coroutine-based, asynchronous IO handling library [<img src="https://img.shields.io/travis/dpc/mioco/master.svg?style=flat-square" alt="Travis CI Build Status">](https://travis-ci.org/dpc/mioco)
* [[ **⭐ 43 | 👁️ 6 | 🔀 0** ] TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) — Monad/MonadIO, Handler, Coroutine/doNotation, Functional Programming features for Rust [<img src="https://api.travis-ci.org/TeaEntityLab/fpRust.svg?branch=master" alt="Travis CI Build Status">](https://travis-ci.org/TeaEntityLab/fpRust)

### Audio

[[audio](https://crates.io/keywords/audio)]

* [[ **⭐ 301 | 👁️ 19 | 🔀 48** ] tomaka/rodio](https://github.com/tomaka/rodio) — A Rust audio playback library [![Build Status](https://api.travis-ci.org/tomaka/rodio.svg?branch=master)](https://travis-ci.org/tomaka/rodio)
  * [[ **⭐ 214 | 👁️ 17 | 🔀 62** ] RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) — [PortAudio](http://www.portaudio.com/) bindings [<img src="https://api.travis-ci.org/RustAudio/rust-portaudio.svg?branch=master">](https://travis-ci.org/RustAudio/rust-portaudio)
* [[ **⭐ 67 | 👁️ 4 | 🔀 8** ] jhasse/ears](https://github.com/jhasse/ears) — A simple library to play Sounds and Musics, on top of OpenAL and libsndfile [<img src="https://api.travis-ci.org/jhasse/ears.svg?branch=master">](https://travis-ci.org/jhasse/ears)
* [[ **⭐ 61 | 👁️ 3 | 🔀 17** ] jpernst/alto](https://github.com/jpernst/alto) — OpenAL 1.1 bindings [<img src="https://api.travis-ci.org/jpernst/alto.svg?branch=master">](https://travis-ci.org/jpernst/alto)
* [[ **⭐ 45 | 👁️ 4 | 🔀 13** ] musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) — [PortMidi](http://portmedia.sourceforge.net/portmidi/) bindings [<img src="https://api.travis-ci.org/musitdev/portmidi-rs.svg?branch=master">](https://travis-ci.org/musitdev/portmidi-rs)
* [[ **⭐ 32 | 👁️ 4 | 🔀 13** ] GuillaumeGomez/rust-fmod](https://github.com/GuillaumeGomez/rust-fmod) — [FMOD](https://www.fmod.com) bindings [![Build Status](https://api.travis-ci.org/GuillaumeGomez/rust-fmod.svg?branch=master)](https://travis-ci.org/GuillaumeGomez/rust-fmod)
* [hound](https://crates.io/crates/hound) — A WAV encoding and decoding library [<img src="https://api.travis-ci.org/ruuda/hound.svg?branch=master">](https://travis-ci.org/ruuda/hound)
* [RustAudio](https://github.com/RustAudio)

### Authentication

* [[ **⭐ 286 | 👁️ 10 | 🔀 64** ] Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) — [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) lib in rust  [![Build Status](https://api.travis-ci.org/Keats/jsonwebtoken.svg?branch=master)](https://travis-ci.org/Keats/jsonwebtoken)

### Automotive

* [[ **⭐ 14 | 👁️ 4 | 🔀 11** ] mbr/socketcan](https://github.com/mbr/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] — Linux SocketCAN library [<img src="https://api.travis-ci.org/mbr/socketcan-rs.svg?branch=master">](https://travis-ci.org/mbr/socketcan-rs)
* [[ **⭐ 8 | 👁️ 1 | 🔀 1** ] oefd/tokio-socketcan](https://github.com/oefd/tokio-socketcan) [[tokio-socketcan]](https://crates.io/crates/tokio-socketcan)] — Linux SocketCAN support for tokio based on the socketcan crate
* [[ **⭐ 6 | 👁️ 1 | 🔀 2** ] marcelbuesing/can-dbc](https://github.com/marcelbuesing/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] — A parser for the DBC format [<img src="https://api.travis-ci.org/marcelbuesing/can-dbc.svg?branch=dev">](https://travis-ci.org/marcelbuesing/can-dbc)
* [[ **⭐ 4 | 👁️ 2 | 🔀 0** ] JulianSchmid/dlt_parse](https://github.com/JulianSchmid/dlt-parse-rs) — Rust DLT (Diagnostic Log and Trace) packet parser [<img src="https://api.travis-ci.org/JulianSchmid/dlt-parse-rs.svg?branch=master">](https://travis-ci.org/JulianSchmid/dlt-parse-rs)
* [[ **⭐ 4 | 👁️ 2 | 🔀 0** ] JulianSchmid/someip_parse](https://github.com/JulianSchmid/someip-parse-rs) [[someip_parse](https://crates.io/crates/someip_parse)] — A library for parsing the SOME/IP network protocol (without payload interpretation) [<img src="https://api.travis-ci.org/JulianSchmid/someip-parse-rs.svg?branch=master">](https://travis-ci.org/JulianSchmid/someip-parse-rs)
* [[ **⭐ 2 | 👁️ 2 | 🔀 0** ] LibreTuner/tuneutils](https://github.com/LibreTuner/tuneutils) [[tuneutils](https://crates.io/crates/tuneutils)] — Utilities for interfacing with, diagnosing, and tuning car
* [[ **⭐ 2 | 👁️ 7 | 🔀 0** ] Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] — LIN bus driver traits and protocol implementation [<img src="https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg">](https://circleci.com/gh/Sensirion/lin-bus-rs)
* [[ **⭐ 1 | 👁️ 1 | 🔀 0** ] marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] — Linux SocketCAN BCM support for tokio [<img src="https://api.travis-ci.org/marcelbuesing/tokio-socketcan-bcm.svg?branch=master">](https://travis-ci.org/marcelbuesing/tokio-socketcan-bcm)
* [canparse](https://crates.io/crates/canparse) — A CAN signal and definition parser [<img src="https://api.travis-ci.org/jmagnuson/canparse.svg?branch=master">](https://travis-ci.org/jmagnuson/canparse)
* [j2534](https://crates.io/crates/j2534) — J2534 PassThru bindings

### Bioinformatics

* [Rust-Bio](https://github.com/rust-bio) — bioinformatics libraries in Rust.

### Caching

* [[ **⭐ 165 | 👁️ 4 | 🔀 9** ] jaemk/cached](https://github.com/jaemk/cached) — Simple function caching/memoization
* [[ **⭐ 34 | 👁️ 1 | 🔀 10** ] aisk/rust-memcache](https://github.com/aisk/rust-memcache) — Memcached client library [<img src="https://api.travis-ci.org/aisk/rust-memcache.svg?branch=master">](https://travis-ci.org/aisk/rust-memcache)
* [[ **⭐ 15 | 👁️ 2 | 🔀 2** ] jaysonsantos/bmemcached-rs](https://github.com/jaysonsantos/bmemcached-rs) — Memcached library written in pure rust [<img src="https://api.travis-ci.org/jaysonsantos/bmemcached-rs.svg?branch=master">](https://travis-ci.org/jaysonsantos/bmemcached-rs)

### Concurrency

* [[ **⭐ 2933 | 👁️ 87 | 🔀 190** ] Rayon](https://github.com/rayon-rs/rayon) – A data parallelism library for Rust [<img src="https://api.travis-ci.org/rayon-rs/rayon.svg?branch=master">](https://travis-ci.org/rayon-rs/rayon)
* [[ **⭐ 1924 | 👁️ 64 | 🔀 124** ] crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) – Support for parallelism and low-level concurrency in Rust [<img src="https://api.travis-ci.org/crossbeam-rs/crossbeam.svg?branch=master">](https://travis-ci.org/crossbeam-rs/crossbeam)
* [[ **⭐ 414 | 👁️ 16 | 🔀 26** ] zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) – Coroutine I/O for Rust [<img src="https://api.travis-ci.org/zonyitoo/coio-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/coio-rs)
* [[ **⭐ 347 | 👁️ 30 | 🔀 31** ] rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) – Coroutine Library in Rust [<img src="https://img.shields.io/travis/rustcc/coroutine-rs.svg">](https://travis-ci.org/rustcc/coroutine-rs)
* [[ **⭐ 29 | 👁️ 1 | 🔀 0** ] orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] — Library to abstract from `Rc`/`Arc` pointer types. [<img src="https://api.travis-ci.org/orium/archery.svg?branch=master">](https://travis-ci.org/orium/archery)
* [[ **⭐ 19 | 👁️ 4 | 🔀 1** ] pop-os/bus-writer](https://github.com/pop-os/bus-writer) — Generic single-reader, multi-writer
* [[ **⭐ 2 | 👁️ 0 | 🔀 0** ] aymanmadkour/glock](https://github.com/aymanmadkour/glock) – Granular locking crate for Rust. [<img src="https://api.travis-ci.org/aymanmadkour/glock.svg?branch=master">](https://travis-ci.org/aymanmadkour/glock)

### Cloud

* AWS [[aws](https://crates.io/keywords/aws)]
  * [[ **⭐ 982 | 👁️ 36 | 🔀 185** ] rusoto/rusoto](https://github.com/rusoto/rusoto) — [<img src="https://api.travis-ci.org/rusoto/rusoto.svg?branch=master">](https://travis-ci.org/rusoto/rusoto)

### Command-line

* Argument parsing
  * [[ **⭐ 2831 | 👁️ 55 | 🔀 279** ] clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] — A simple to use, full featured command-line argument parser [<img src="https://api.travis-ci.org/clap-rs/clap-rs.svg?branch=master">](https://travis-ci.org/clap-rs/clap-rs)
  * [[ **⭐ 940 | 👁️ 18 | 🔀 56** ] TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] — parse command line argument by defining a struct [<img src="https://api.travis-ci.org/TeXitoi/structopt.svg?branch=master">](https://travis-ci.org/TeXitoi/structopt)
  * [[ **⭐ 645 | 👁️ 17 | 🔀 81** ] docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] — A Rust implementation of [DocOpt](http://docopt.org) [<img src="https://api.travis-ci.org/docopt/docopt.rs.svg?branch=master">](https://travis-ci.org/docopt/docopt.rs)
  * [[ **⭐ 395 | 👁️ 11 | 🔀 29** ] killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] — quickly build cool CLI apps in Rust [<img src="https://api.travis-ci.org/killercup/quicli.svg">](https://travis-ci.org/killercup/quicli)
* Human-centered design
  * [[ **⭐ 532 | 👁️ 10 | 🔀 21** ] rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] — panic messages for humans [<img src="https://api.travis-ci.org/rust-cli/human-panic.svg">](https://travis-ci.org/rust-cli/human-panic)
* Line editor
  * [[ **⭐ 347 | 👁️ 9 | 🔀 51** ] kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] — readline implementation in Rust [<img src="https://api.travis-ci.org/kkawakam/rustyline.svg?branch=master">](https://travis-ci.org/kkawakam/rustyline)
  * [[ **⭐ 107 | 👁️ 6 | 🔀 10** ] murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] — Configurable, extensible, interactive line reader [<img src="https://api.travis-ci.org/murarth/linefeed.svg">](https://travis-ci.org/murarth/linefeed)
  * [[ **⭐ 65 | 👁️ 3 | 🔀 22** ] MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] — A library offering readline-like functionality [<img src="https://api.travis-ci.org/MovingtoMars/liner.svg">](https://travis-ci.org/MovingtoMars/liner)
  * [[ **⭐ 22 | 👁️ 2 | 🔀 5** ] srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] — pure-Rust command line editing library
* Pipeline
  * [[ **⭐ 217 | 👁️ 4 | 🔀 14** ] oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] — A builder for subprocess pipelines and IO redirection [<img src="https://api.travis-ci.org/oconnor663/duct.rs.svg?branch=master">](https://travis-ci.org/oconnor663/duct.rs)
  * [[ **⭐ 92 | 👁️ 3 | 🔀 11** ] hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] — facilities for interaction with external pipelines [<img src="https://api.travis-ci.org/hniksic/rust-subprocess.svg?branch=master">](https://travis-ci.org/hniksic/rust-subprocess)
  * [[ **⭐ 37 | 👁️ 4 | 🔀 7** ] philippkeller/rexpect](https://github.com/philippkeller/rexpect) [[rexpect](https://crates.io/crates/rexpect)] — automate interactive applications such as ssh, ftp, passwd, etc [<img src="https://api.travis-ci.org/philippkeller/rexpect.svg?branch=master">](https://travis-ci.org/philippkeller/rexpect)
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] — pipe your output through an external pager [<img src="https://gitlab.com/imp/pager-rs/badges/master/build.svg">](https://gitlab.com/imp/pager-rs/pipelines)
* Progress
  * [[ **⭐ 1057 | 👁️ 16 | 🔀 54** ] mitsuhiko/indicatif](https://github.com/mitsuhiko/indicatif) [[indicatif](https://crates.io/crates/indicatif)] — indicate progress to users
  * [[ **⭐ 237 | 👁️ 11 | 🔀 31** ] a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] — console progress bar for Rust
  * [[ **⭐ 218 | 👁️ 1 | 🔀 2** ] FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] — 60+ elegant terminal spinners
* Prompt
  * [[ **⭐ 26 | 👁️ 5 | 🔀 0** ] hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)]  — build an interactive command prompt [<img src="https://api.travis-ci.org/hashmismatch/terminal_cli.rs.svg?branch=master">](https://travis-ci.org/hashmismatch/terminal_cli.rs)
* Style
  * [[ **⭐ 202 | 👁️ 4 | 🔀 27** ] ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] — control colours and formatting on ANSI terminals [<img src="https://api.travis-ci.org/ogham/rust-ansi-term.svg?branch=master">](https://travis-ci.org/ogham/rust-ansi-term)
  * [[ **⭐ 60 | 👁️ 2 | 🔀 3** ] SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] — A dead simple ANSI terminal color painting library
  * [[ **⭐ 53 | 👁️ 1 | 🔀 2** ] LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] — cross-platform styled terminal output [<img src="https://img.shields.io/travis/LukasKalbertodt/term-painter/master.svg">](https://travis-ci.org/LukasKalbertodt/term-painter)
  * [[ **⭐ 13 | 👁️ 1 | 🔀 0** ] vitiral/termstyle](https://github.com/vitiral/termstyle) [[termstyle](https://docs.rs/termstyle/0.1.2/termstyle/)] — build (and test) formatted and styled command line applications
* TUI
  * [[ **⭐ 1270 | 👁️ 32 | 🔀 63** ] fdehau/tui-rs](https://github.com/fdehau/tui-rs) [[tui](https://crates.io/crates/tui)] — A TUI library inspired by [blessed-contrib](https://github.com/yaronn/blessed-contrib) and [termui](https://github.com/gizak/termui) [<img src="https://api.travis-ci.org/fdehau/tui-rs.svg?branch=master">](https://travis-ci.org/fdehau/tui-rs)
  * [[ **⭐ 1135 | 👁️ 31 | 🔀 77** ] gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] — build rich TUI applications [<img src="https://api.travis-ci.org/gyscos/Cursive.svg?branch=master">](https://travis-ci.org/gyscos/Cursive)
  * [[ **⭐ 1009 | 👁️ 25 | 🔀 83** ] ticki/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] — bindless library for controlling terminals/TTY  [<img src="https://api.travis-ci.org/ticki/termion.svg?branch=master">](https://travis-ci.org/ticki/termion)
  * [[ **⭐ 324 | 👁️ 14 | 🔀 31** ] TimonPost/crossterm](https://github.com/TimonPost/crossterm) [[crossterm](https://crates.io/crates/crossterm)] — crossplatform terminal library
  * [[ **⭐ 25 | 👁️ 4 | 🔀 3** ] ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] — Rust library for putting things in a grid [<img src="https://api.travis-ci.org/ogham/rust-term-grid.svg?branch=master">](https://travis-ci.org/ogham/rust-term-grid)
  * BearLibTerminal
    * [[ **⭐ 17 | 👁️ 2 | 🔀 6** ] cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] — [BearLibTerminal](https://bitbucket.org/cfyzium/bearlibterminal) bindings [<img src="https://api.travis-ci.org/nabijaczleweli/BearLibTerminal.rs.svg?branch=master">](https://travis-ci.org/nabijaczleweli/BearLibTerminal.rs)
  * ncurses
    * [[ **⭐ 448 | 👁️ 13 | 🔀 80** ] jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] — [ncurses](https://www.gnu.org/software/ncurses/) bindings [<img src="https://api.travis-ci.org/jeaye/ncurses-rs.svg?branch=master">](https://travis-ci.org/jeaye/ncurses-rs)
    * [[ **⭐ 183 | 👁️ 13 | 🔀 18** ] ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] — curses library, supports linux and windows [<img src="https://api.travis-ci.org/ihalila/pancurses.svg?branch=master">](https://travis-ci.org/ihalila/pancurses)
  * Termbox
    * [[ **⭐ 383 | 👁️ 22 | 🔀 52** ] gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] — bindings to [Termbox](https://github.com/nsf/termbox) [<img src="https://api.travis-ci.org/gchp/rustbox.svg?branch=master">](https://travis-ci.org/gchp/rustbox)

### Compression

  * [[ **⭐ 286 | 👁️ 18 | 🔀 36** ] dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) — Brotli decompressor in Rust that optionally avoids the stdlib
  * [[ **⭐ 53 | 👁️ 6 | 🔀 12** ] ende76/brotli-rs](https://github.com/ende76/brotli-rs) — implementation of Brotli compression
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
* bzip2
  * [[ **⭐ 25 | 👁️ 1 | 🔀 21** ] alexcrichton/bzip2-rs](https://github.com/alexcrichton/bzip2-rs) — [libbz2](http://www.bzip.org) bindings [<img src="https://api.travis-ci.org/alexcrichton/bzip2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/bzip2-rs)
* gzip
  * [[ **⭐ 63 | 👁️ 7 | 🔀 7** ] carols10cents/zopfli](https://github.com/carols10cents/zopfli) — implementation of the [Zopfli](https://github.com/google/zopfli) compression algorithm for higher quality deflate or zlib compression
* miniz
  * [[ **⭐ 239 | 👁️ 6 | 🔀 68** ] alexcrichton/flate2-rs](https://github.com/alexcrichton/flate2-rs) — [miniz](https://code.google.com/archive/p/miniz) bindings [<img src="https://api.travis-ci.org/alexcrichton/flate2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/flate2-rs)
* snappy
  * [[ **⭐ 15 | 👁️ 2 | 🔀 3** ] JeffBelgum/rust-snappy](https://github.com/JeffBelgum/rust-snappy) — [snappy](https://github.com/google/snappy) bindings [<img src="https://api.travis-ci.org/JeffBelgum/rust-snappy.svg?branch=master">](https://travis-ci.org/JeffBelgum/rust-snappy)
* tar
  * [[ **⭐ 201 | 👁️ 5 | 🔀 66** ] alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) — tar archive reading/writing in Rust [<img src="https://api.travis-ci.org/alexcrichton/tar-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/tar-rs)
* zip
  * [[ **⭐ 166 | 👁️ 9 | 🔀 61** ] mvdnes/zip-rs](https://github.com/mvdnes/zip-rs) — read and write ZIP archives [![Build Status](https://api.travis-ci.org/mvdnes/zip-rs.svg?branch=master)](https://travis-ci.org/mvdnes/zip-rs)

### Computation

* [[ **⭐ 1136 | 👁️ 43 | 🔀 153** ] rustsim/nalgebra](https://github.com/rustsim/nalgebra) — low-dimensional linear algebra library [<img src="https://api.travis-ci.org/rustsim/nalgebra.svg?branch=master">](https://travis-ci.org/rustsim/nalgebra)
  * [[ **⭐ 67 | 👁️ 5 | 🔀 11** ] mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) — BLAS bindings
* [[ **⭐ 51 | 👁️ 4 | 🔀 2** ] argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] — A pure Rust optimization library [<img src="https://api.travis-ci.org/argmin-rs/argmin.svg?branch=master">](https://travis-ci.org/argmin-rs/argmin)
  * [[ **⭐ 46 | 👁️ 9 | 🔀 11** ] stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) — LAPACK bindings [<img src="https://api.travis-ci.org/blas-lapack-rs/lapack.svg?branch=master">](https://travis-ci.org/blas-lapack-rs/lapack)
  * [[ **⭐ 32 | 👁️ 4 | 🔀 9** ] stainless-steel/blas](https://github.com/blas-lapack-rs/blas) — BLAS bindings [<img src="https://api.travis-ci.org/blas-lapack-rs/blas.svg?branch=master">](https://travis-ci.org/blas-lapack-rs/blas)
  * [[ **⭐ 27 | 👁️ 8 | 🔀 20** ] fizyk20/rust-gmp](https://github.com/fizyk20/rust-gmp) — libgmp bindings [<img src="https://api.travis-ci.org/fizyk20/rust-gmp.svg?branch=master">](https://travis-ci.org/fizyk20/rust-gmp)
  * [[ **⭐ 6 | 👁️ 2 | 🔀 2** ] noshu/lbfgsb-sys](https://github.com/noshu/lbfgsb-sys) — Rust binding of fortran L-BFGS-B subroutine
  * [[ **⭐ 2 | 👁️ 1 | 🔀 1** ] noshu/cg-sys](https://github.com/noshu/cg-sys) — Rust binding of fortran CG+ subroutine
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
* [Conjugate Gradient](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* [GMP](https://gmplib.org/)
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez) — GSL bindings [<img src="https://api.travis-ci.org/GuillaumeGomez/rust-GSL.svg?branch=master">](https://travis-ci.org/GuillaumeGomez/rust-GSL)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
* [L-BFGS-B](https://en.wikipedia.org/wiki/Limited-memory_BFGS)
* Parallel
  * [[ **⭐ 421 | 👁️ 28 | 🔀 30** ] autumnai/collenchyma](https://github.com/autumnai/collenchyma) — An extensible, pluggable, backend-agnostic framework for parallel, high-performance computations on CUDA, OpenCL and common host CPU. [<img src="https://api.travis-ci.org/autumnai/collenchyma.svg?branch=master">](https://travis-ci.org/autumnai/collenchyma)
  * [[ **⭐ 357 | 👁️ 17 | 🔀 35** ] arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) — [Arrayfire](https://arrayfire.com/) bindings
  * [[ **⭐ 156 | 👁️ 12 | 🔀 38** ] luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) — [OpenCL](https://www.khronos.org/opencl/) bindings [<img src="https://api.travis-ci.org/luqmana/rust-opencl.svg?branch=master">](https://travis-ci.org/luqmana/rust-opencl)
* Scirust
  * [[ **⭐ 183 | 👁️ 19 | 🔀 19** ] indigits/scirust](https://github.com/indigits/scirust) — scientific computing library in Rust [![Build Status](https://api.travis-ci.org/indigits/scirust.svg?branch=master)](https://travis-ci.org/indigits/scirust)
* Statrs
  * [[ **⭐ 139 | 👁️ 10 | 🔀 18** ] boxtown/statrs](https://github.com/boxtown/statrs) — Robust statistical computation library in Rust [![Build Status](https://api.travis-ci.org/boxtown/statrs.svg?branch=master)](https://travis-ci.org/boxtown/statrs)
* Rustimization [[rustimization](https://crates.io/crates/rustimization)]
  * [[ **⭐ 30 | 👁️ 2 | 🔀 6** ] noshu/rustimization](https://github.com/noshu/rustimization) — A rust optimization library which includes L-BFGS-B and Conjugate Gradient algorithm

### Configuration

* [[ **⭐ 455 | 👁️ 11 | 🔀 57** ] mehcode/config-rs](https://github.com/mehcode/config-rs) [[config](https://crates.io/crates/config)] — Layered configuration system for Rust applications (with strong support for 12-factor applications). [<img src="https://api.travis-ci.org/mehcode/config-rs.svg?branch=master">](https://travis-ci.org/mehcode/config-rs)
* [[ **⭐ 14 | 👁️ 1 | 🔀 3** ] Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] — library for processing application configuration easily

### Cryptography

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [[ **⭐ 1276 | 👁️ 41 | 🔀 232** ] briansmith/ring](https://github.com/briansmith/ring) — Safe, fast, small crypto using Rust and BoringSSL's cryptography primitives. [<img src="https://api.travis-ci.org/briansmith/ring.svg?branch=master">](https://travis-ci.org/briansmith/ring)
* [[ **⭐ 947 | 👁️ 39 | 🔀 104** ] ctz/rustls](https://github.com/ctz/rustls) — A Rust implementation of TLS
* [[ **⭐ 868 | 👁️ 61 | 🔀 185** ] exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] — extensible framework for blockchain projects [<img src="https://api.travis-ci.org/exonum/exonum.svg?branch=master">](https://travis-ci.org/exonum/exonum)
* [[ **⭐ 857 | 👁️ 31 | 🔀 200** ] DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) — cryptographic algorithms in Rust [<img src="https://api.travis-ci.org/DaGenix/rust-crypto.svg?branch=master">](https://travis-ci.org/DaGenix/rust-crypto)
* [[ **⭐ 497 | 👁️ 16 | 🔀 331** ] sfackler/rust-openssl](https://github.com/sfackler/rust-openssl) — [OpenSSL](https://www.openssl.org/) bindings [<img src="https://api.travis-ci.org/sfackler/rust-openssl.svg?branch=master">](https://travis-ci.org/sfackler/rust-openssl)
* [[ **⭐ 428 | 👁️ 27 | 🔀 110** ] dnaq/sodiumoxide](https://github.com/sodiumoxide/sodiumoxide) — [libsodium](https://github.com/jedisct1/libsodium) bindings [<img src="https://api.travis-ci.org/dnaq/sodiumoxide.svg?branch=master">](https://travis-ci.org/dnaq/sodiumoxide)
* [[ **⭐ 322 | 👁️ 13 | 🔀 39** ] RustCrypto/hashes](https://github.com/RustCrypto/hashes) — Collection of cryptographic hash functions written in pure Rust [<img src="https://api.travis-ci.org/RustCrypto/hashes.svg?branch=master">](https://travis-ci.org/RustCrypto/hashes)
* [[ **⭐ 172 | 👁️ 17 | 🔀 50** ] briansmith/webpki](https://github.com/briansmith/webpki) — Web PKI TLS X.509 certificate validation in Rust. [<img src="https://api.travis-ci.org/briansmith/webpki.svg?branch=master">](https://travis-ci.org/briansmith/webpki)
* [[ **⭐ 156 | 👁️ 14 | 🔀 68** ] sfackler/rust-native-tls](https://github.com/sfackler/rust-native-tls) — Bindings for native TLS libraries
* [[ **⭐ 126 | 👁️ 7 | 🔀 17** ] libOctavo/octavo](https://github.com/libOctavo/octavo) — Modular hash and crypto library in Rust [<img src="https://api.travis-ci.org/libOctavo/octavo.svg?branch=master">](https://travis-ci.org/libOctavo/octavo)
* [[ **⭐ 120 | 👁️ 14 | 🔀 8** ] klutzy/suruga](https://github.com/klutzy/suruga) — A Rust implementation of [TLS 1.2](https://tools.ietf.org/html/rfc5246)
* [[ **⭐ 86 | 👁️ 3 | 🔀 5** ] brycx/orion](https://github.com/brycx/orion) — This library aims to provide easy and usable crypto. 'Usable' meaning exposing high-level API's that are easy to use and hard to misuse. [<img src="https://api.travis-ci.org/brycx/orion.svg?branch=master">](https://travis-ci.org/brycx/orion)
* [[ **⭐ 86 | 👁️ 4 | 🔀 9** ] conradkdotcom/rooster](https://github.com/conradkdotcom/rooster) [[rooster](https://crates.io/crates/rooster)] — Simple password manager to use in your terminal
* [[ **⭐ 50 | 👁️ 5 | 🔀 28** ] kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) — Bindings for Security Framework (OSX native crypto)
* [[ **⭐ 31 | 👁️ 1 | 🔀 3** ] racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) — A Rust port of the password primitives used in the Django Project. It doesn't require Django, only hashes and validates passwords according to its style. [<img src="https://api.travis-ci.org/Racum/rust-djangohashers.svg?branch=master">](https://travis-ci.org/Racum/rust-djangohashers)
* [[ **⭐ 30 | 👁️ 3 | 🔀 3** ] doublify/libblockchain](https://github.com/doublify/libblockchain) — A Blockchain implementation [<img src="https://api.travis-ci.org/doublify/libblockchain.svg?branch=master">](https://travis-ci.org/doublify/libblockchain)
* [[ **⭐ 23 | 👁️ 2 | 🔀 6** ] rustindia/mpw-rs](https://github.com/rustindia/mpw-rs) — Pure Rust implementation of the Master Password password manager [<img src="https://api.travis-ci.org/rustindia/mpw-rs.svg?branch=master">](https://travis-ci.org/rustindia/mpw-rs)
* [[ **⭐ 18 | 👁️ 10 | 🔀 1** ] Fraunhofer-AISEC/rabe](https://github.com/Fraunhofer-AISEC/rabe) — Library providing several Attribute-Based Encryption (ABE) schemes
* [[ **⭐ 9 | 👁️ 4 | 🔀 21** ] steffengy/schannel-rs](https://github.com/steffengy/schannel-rs) — Bindings for Schannel (Windows native TLS)
* [[ **⭐ 5 | 👁️ 0 | 🔀 0** ] RNCryptor/rncryptor-rs](https://github.com/RNCryptor/rncryptor-rs) — Pure Rust implementation of the RNCryptor AES file format
* [[ **⭐ 5 | 👁️ 2 | 🔀 0** ] zebradil/rustotpony](https://github.com/zebradil/rustotpony) — CLI manager of one-time password generators aka Google Authenticator (TOTP)
* [sequoia-pgp/sequoia](https://gitlab.com/sequoia-pgp/sequoia) — An OpenPGP implementation in Rust

### Database

[[database](https://crates.io/keywords/database)]

* [[ **⭐ 508 | 👁️ 12 | 🔀 29** ] sfackler/r2d2](https://github.com/sfackler/r2d2) — generic connection pool [<img src="https://api.travis-ci.org/sfackler/r2d2.svg?branch=master">](https://travis-ci.org/sfackler/r2d2)
* NoSQL [[nosql](https://crates.io/keywords/nosql)]

    * [[ **⭐ 177 | 👁️ 11 | 🔀 27** ] AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] — native client written in Rust [<img src="https://api.travis-ci.org/AlexPikalov/cdrs.svg?branch=master">](https://travis-ci.org/AlexPikalov/cdrs)
     * [[ **⭐ 30 | 👁️ 8 | 🔀 6** ] Rincon](https://github.com/innoave/rincon) — An ArangoDB (NoSQL and Graph store) driver for Rust
    * [[ **⭐ 7 | 👁️ 8 | 🔀 6** ] Metaswitch/cassandra-rs](https://github.com/Metaswitch/cassandra-rs) —  bindings to the DataStax C/C++ client [<img src="https://api.travis-ci.org/Metaswitch/cassandra-rs.svg?branch=master">](https://travis-ci.org/Metaswitch/cassandra-rs)
  * [ArangoDB](https://www.arangodb.com)
  * [Cassandra](http://cassandra.apache.org) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [[ **⭐ 25 | 👁️ 2 | 🔀 4** ] Sofa](https://github.com/YellowInnovation/sofa) — an interface to CouchDB HTTP REST API for stable rust
    * [[ **⭐ 24 | 👁️ 3 | 🔀 3** ] chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] — A Rust client for the CouchDB REST API [<img src="https://api.travis-ci.org/chill-rs/chill.svg?branch=master">](https://travis-ci.org/chill-rs/chill)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [[ **⭐ 187 | 👁️ 9 | 🔀 36** ] benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] — A Rust client for the [Elastic](https://www.elastic.co/) REST API [<img src="https://api.travis-ci.org/benashford/rs-es.svg?branch=master">](https://travis-ci.org/benashford/rs-es)
    * [[ **⭐ 5 | 👁️ 2 | 🔀 2** ] elastic-rs/elastic-reqwest](https://github.com/elastic-rs/elastic-reqwest) [[elastic_reqwest](https://crates.io/crates/elastic_reqwest)] — A lightweight implementation of the Elasticsearch API based on Reqwest [<img src="https://api.travis-ci.org/elastic-rs/elastic-reqwest.svg">](https://travis-ci.org/elastic-rs/elastic-reqwest)
  * etcd
    * [[ **⭐ 90 | 👁️ 5 | 🔀 17** ] jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] — A client library for CoreOS's etcd. [<img src="https://api.travis-ci.org/jimmycuadra/rust-etcd.svg?branch=master">](https://travis-ci.org/jimmycuadra/rust-etcd)
  * ForestDB
    * [[ **⭐ 33 | 👁️ 5 | 🔀 14** ] driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) — Synchronization interface [<img src="https://api.travis-ci.org/driftluo/InfluxDBClient-rs.svg?branch=master">](https://travis-ci.org/driftluo/InfluxDBClient-rs)
    * [[ **⭐ 9 | 👁️ 5 | 🔀 3** ] panoptix-za/influxdb-rs](https://github.com/panoptix-za/influxdb-rs) — asynchronous interface [<img src="https://api.travis-ci.org/panoptix-za/influxdb-rs.svg?branch=master">](https://travis-ci.org/panoptix-za/influxdb-rs)
    * [[ **⭐ 6 | 👁️ 1 | 🔀 1** ] vhbit/sherwood](https://github.com/vhbit/sherwood) — [ForestDB](https://github.com/couchbase/forestdb) bindings [<img src="https://api.travis-ci.org/vhbit/sherwood.svg?branch=master">](https://travis-ci.org/vhbit/sherwood)
  * [InfluxDB](https://www.influxdata.com/)
  * LevelDB
    * [[ **⭐ 77 | 👁️ 8 | 🔀 18** ] skade/leveldb](https://github.com/skade/leveldb) — [LevelDB](https://github.com/google/leveldb) bindings [<img src="https://api.travis-ci.org/skade/leveldb.svg?branch=master">](https://travis-ci.org/skade/leveldb)
  * LMDB [[lmdb](https://crates.io/keywords/lmdb)]
    * [[ **⭐ 86 | 👁️ 9 | 🔀 31** ] vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] — [LMDB](https://symas.com/lmdb/) bindings [<img src="https://api.travis-ci.org/vhbit/lmdb-rs.svg?branch=master">](https://travis-ci.org/vhbit/lmdb-rs)
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [[ **⭐ 354 | 👁️ 25 | 🔀 62** ] mongodb-labs/mongo-rust-driver-prototype](https://github.com/mongodb-labs/mongo-rust-driver-prototype) [[mongodb](https://crates.io/crates/mongodb)] — [MongoDB](https://www.mongodb.com/) bindings [<img src="https://api.travis-ci.org/mongodb-labs/mongo-rust-driver-prototype.svg">](https://travis-ci.org/mongodb-labs/mongo-rust-driver-prototype)
  * Neo4j [[cypher](https://crates.io/keywords/cypher), [neo4j](https://crates.io/keywords/neo4j)]
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [[ **⭐ 1095 | 👁️ 32 | 🔀 155** ] mitsuhiko/redis-rs](https://github.com/mitsuhiko/redis-rs) — [Redis](https://redis.io/) library in Rust [<img src="https://api.travis-ci.org/mitsuhiko/redis-rs.svg?branch=master">](https://travis-ci.org/mitsuhiko/redis-rs)
    * [[ **⭐ 426 | 👁️ 21 | 🔀 166** ] rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) — RocksDB bindings [<img src="https://api.travis-ci.org/rust-rocksdb/rust-rocksdb.svg?branch=master">](https://travis-ci.org/rust-rocksdb/rust-rocksdb)
    * [[ **⭐ 81 | 👁️ 8 | 🔀 22** ] bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] — A client library for Apache ZooKeeper. [<img src="https://api.travis-ci.org/bonifaido/rust-zookeeper.svg?branch=master">](https://travis-ci.org/bonifaido/rust-zookeeper)
    * [[ **⭐ 46 | 👁️ 4 | 🔀 9** ] zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) — UnQLite bindings [<img src="https://api.travis-ci.org/zitsen/unqlite.rs.svg?branch=master">](https://travis-ci.org/zitsen/unqlite.rs)
    * [[ **⭐ 27 | 👁️ 1 | 🔀 6** ] seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) — a lightweight and simple key-value store, heavily inspired by Python's PickleDB. [<img src="https://api.travis-ci.org/seladb/pickledb-rs.svg?branch=master">](https://travis-ci.org/seladb/pickledb-rs)
  * [RocksDB](https://rocksdb.org/)
  * [UnQLite](https://unqlite.org/)
  * [ZooKeeper](https://zookeeper.apache.org/)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
* SQL [[sql](https://crates.io/keywords/sql)]
  * Microsoft SQL
    * [[ **⭐ 117 | 👁️ 9 | 🔀 26** ] steffengy/tiberius](https://github.com/steffengy/tiberius) — [<img src="https://api.travis-ci.org/steffengy/tiberius.svg?branch=master">](https://travis-ci.org/steffengy/tiberius)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [[ **⭐ 268 | 👁️ 3 | 🔀 57** ] blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] — A native MySql client [<img src="https://api.travis-ci.org/blackbeam/rust-mysql-simple.svg?branch=master">](https://travis-ci.org/blackbeam/rust-mysql-simple)
    * [[ **⭐ 123 | 👁️ 15 | 🔀 10** ] AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) — A MySQL Proxy [<img src="https://api.travis-ci.org/AgilData/mysql-proxy-rs.svg?branch=master">](https://travis-ci.org/AgilData/mysql-proxy-rs)
    * [[ **⭐ 88 | 👁️ 3 | 🔀 15** ] blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] — asyncronous Rust Mysql driver based on Tokio. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://circleci.com/gh/blackbeam/mysql_async/tree/master)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [[ **⭐ 1262 | 👁️ 45 | 🔀 134** ] sfackler/rust-postgres](https://github.com/sfackler/rust-postgres) [[postgres](https://crates.io/crates/postgres)] — A native [PostgreSQL](https://www.postgresql.org/) client [<img src="https://api.travis-ci.org/sfackler/rust-postgres.svg?branch=master">](https://travis-ci.org/sfackler/rust-postgres)
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [[ **⭐ 499 | 👁️ 18 | 🔀 103** ] jgallagher/rusqlite](https://github.com/jgallagher/rusqlite) — [Sqlite3](https://www.sqlite.org/index.html) bindings [<img src="https://api.travis-ci.org/jgallagher/rusqlite.svg?branch=master">](https://travis-ci.org/jgallagher/rusqlite)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [[ **⭐ 4019 | 👁️ 107 | 🔀 373** ] diesel-rs/diesel](https://github.com/diesel-rs/diesel) — an ORM and Query builder for Rust [![Build Status](https://api.travis-ci.org/diesel-rs/diesel.svg)](https://travis-ci.org/diesel-rs/diesel)
  * [[ **⭐ 75 | 👁️ 1 | 🔀 4** ] ivanceras/rustorm](https://github.com/ivanceras/rustorm) — an ORM for Rust [![Build Status](https://api.travis-ci.org/ivanceras/rustorm.svg)](https://travis-ci.org/ivanceras/rustorm)

### Data processing

* [[ **⭐ 1169 | 👁️ 90 | 🔀 145** ] weld-project/weld](https://github.com/weld-project/weld) — High-performance runtime for data analytics applications
* [[ **⭐ 844 | 👁️ 39 | 🔀 87** ] bluss/ndarray](https://github.com/rust-ndarray/ndarray) — N-dimensional array with array views, multidimensional slicing, and efficient operations
* [[ **⭐ 96 | 👁️ 14 | 🔀 4** ] kernelmachine/utah](https://github.com/kernelmachine/utah) — Dataframe structure and operations in Rust

### Data structures

* [[ **⭐ 665 | 👁️ 16 | 🔀 113** ] bluss/rust-itertools](https://github.com/bluss/rust-itertools) — [<img src="https://api.travis-ci.org/bluss/rust-itertools.svg?branch=master">](https://travis-ci.org/bluss/rust-itertools)
* [[ **⭐ 355 | 👁️ 15 | 🔀 18** ] orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] — Persistent data structures in Rust. [<img src="https://api.travis-ci.org/orium/rpds.svg?branch=master">](https://travis-ci.org/orium/rpds)
* [[ **⭐ 164 | 👁️ 6 | 🔀 31** ] fizyk20/generic-array](https://github.com/fizyk20/generic-array) – a hack to allow for arrays sized by typenums [<img src="https://api.travis-ci.org/fizyk20/generic-array.svg?branch=master">](https://travis-ci.org/fizyk20/generic-array)
* [[ **⭐ 74 | 👁️ 4 | 🔀 6** ] Nemo157/roaring-rs](https://github.com/Nemo157/roaring-rs) – Roaring Bitmaps in Rust [<img src="https://api.travis-ci.org/Nemo157/roaring-rs.svg?branch=master">](https://travis-ci.org/Nemo157/roaring-rs)
* [[ **⭐ 39 | 👁️ 3 | 🔀 3** ] danielpclark/array_tool](https://github.com/danielpclark/array_tool) — Array helpers for Rust. Some of the most common methods you would use on Arrays made available on Vectors. Polymorphic implementations for handling most of your use cases. [<img src="https://api.travis-ci.org/danielpclark/array_tool.svg?branch=master">](https://travis-ci.org/danielpclark/array_tool)
* [[ **⭐ 21 | 👁️ 4 | 🔀 4** ] garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] — A priority queue that implements priority changes. [<img src="https://api.travis-ci.org/garro95/priority-queue.svg?branch=master">](https://travis-ci.org/garro95/priority-queue)
* [[ **⭐ 21 | 👁️ 4 | 🔀 1** ] xfix/enum-map](https://github.com/xfix/enum-map) [[enum-map](https://crates.io/crates/enum-map)] — An optimized map implementation for enums using an array to store values. [<img src="https://api.travis-ci.org/xfix/enum-map.svg?branch=master">](https://travis-ci.org/xfix/enum-map)
* [[ **⭐ 16 | 👁️ 2 | 🔀 1** ] whitfin/usher](https://github.com/whitfin/usher) [[usher](https://crates.io/crates/usher)] — Parameterized routing for generic resources in Rust.
* [[ **⭐ 10 | 👁️ 3 | 🔀 0** ] billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] — Ternary search tree collection [<img src="https://api.travis-ci.org/billyevans/tst.svg?branch=master">](https://travis-ci.org/billyevans/tst)
* [[ **⭐ 3 | 👁️ 2 | 🔀 1** ] pop-os/progress-streams](https://github.com/pop-os/progress-streams) — Progress callbacks for types which implement `dyn io::Read` or `dyn io::Write`.
* [contain-rs](https://github.com/contain-rs) — Extension of Rust's std::collections

### Data visualization

* [[ **⭐ 93 | 👁️ 4 | 🔀 7** ] saresend/gust](https://github.com/saresend/Gust) — [<img src="https://api.travis-ci.org/saresend/Gust.svg?branch=master">](https://travis-ci.org/saresend/Gust)

### Date and time

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [[ **⭐ 846 | 👁️ 24 | 🔀 118** ] chronotope/chrono](https://github.com/chronotope/chrono) — [<img src="https://api.travis-ci.org/chronotope/chrono.svg?branch=master">](https://travis-ci.org/chronotope/chrono)
* [[ **⭐ 10 | 👁️ 4 | 🔀 1** ] yaa110/rust-persian-calendar](https://github.com/yaa110/rust-persian-calendar) — [<img src="https://api.travis-ci.org/yaa110/rust-persian-calendar.svg?branch=master">](https://travis-ci.org/yaa110/rust-persian-calendar)

### Distributed systems

* Antimony
  * [[ **⭐ 39 | 👁️ 4 | 🔀 2** ] antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] — stream processing / distributed computation platform [<img src="https://api.travis-ci.org/antimonyproject/antimony.svg?branch=master">](https://travis-ci.org/antimonyproject/antimony)
* Apache Hadoop
  * [[ **⭐ 14 | 👁️ 3 | 🔀 1** ] whitfin/efflux](https://github.com/whitfin/efflux) — Easy Hadoop Streaming and MapReduce interfaces in Rust.
* Apache Kafka
  * [[ **⭐ 342 | 👁️ 16 | 🔀 41** ] spicavigo/kafka-rust](https://github.com/spicavigo/kafka-rust) — [<img src="https://api.travis-ci.org/spicavigo/kafka-rust.svg?branch=master">](https://travis-ci.org/spicavigo/kafka-rust)
  * [[ **⭐ 256 | 👁️ 15 | 🔀 41** ] fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] — [librdkafka](https://github.com/edenhill/librdkafka) bindings [<img src="https://api.travis-ci.org/fede1024/rust-rdkafka.svg?branch=master">](https://travis-ci.org/fede1024/rust-rdkafka)
* Beanstalkd
  * [[ **⭐ 36 | 👁️ 2 | 🔀 9** ] schickling/rust-beanstalkd](https://github.com/schickling/rust-beanstalkd) — [Beanstalkd](https://github.com/beanstalkd/beanstalkd) bindings [<img src="https://api.travis-ci.org/schickling/rust-beanstalkd.svg?branch=master">](https://travis-ci.org/schickling/rust-beanstalkd)
* HDFS
  * [[ **⭐ 20 | 👁️ 2 | 🔀 8** ] hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) — libhdfs bindings [<img src="https://api.travis-ci.org/hyunsik/hdfs-rs.svg?branch=master">](https://travis-ci.org/hyunsik/hdfs-rs)

### Email

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [[ **⭐ 348 | 👁️ 14 | 🔀 56** ] lettre/lettre](https://github.com/lettre/lettre) — an SMTP-library for Rust [<img src="https://api.travis-ci.org/lettre/lettre.svg?branch=master">](https://travis-ci.org/lettre/lettre)
* [[ **⭐ 41 | 👁️ 5 | 🔀 9** ] staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] — A library for parsing real-world email files [<img src="https://api.travis-ci.org/staktrace/mailparse.svg?branch=master">](https://travis-ci.org/staktrace/mailparse)
* [[ **⭐ 38 | 👁️ 1 | 🔀 2** ] GildedHonour/atarashii_imap](https://github.com/GildedHonour/atarashii_imap) — 新しい (atarashii/new) IMAP client in Rust. It supports plain and secure connections [<img src="https://api.travis-ci.org/GildedHonour/atarashii_imap.svg?branch=master">](https://travis-ci.org/GildedHonour/atarashii_imap)
* [[ **⭐ 21 | 👁️ 3 | 🔀 13** ] gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) — unofficial Rust library for SendGrid API [<img src="https://api.travis-ci.org/gsquire/sendgrid-rs.svg?branch=master">](https://travis-ci.org/gsquire/sendgrid-rs)

### Encoding

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [[ **⭐ 53 | 👁️ 6 | 🔀 10** ] alex/rust-asn1](https://github.com/alex/rust-asn1) — A Rust ASN.1 (DER) serializer [<img src="https://api.travis-ci.org/alex/rust-asn1.svg?branch=master">](https://travis-ci.org/alex/rust-asn1)
* Bencode
  * [[ **⭐ 23 | 👁️ 2 | 🔀 11** ] arjantop/rust-bencode](https://github.com/arjantop/rust-bencode) — [Bencode](https://en.wikipedia.org/wiki/Bencode) implementation in Rust [<img src="https://api.travis-ci.org/arjantop/rust-bencode.svg?branch=master">](https://travis-ci.org/arjantop/rust-bencode)
* Binary
  * [[ **⭐ 578 | 👁️ 23 | 🔀 97** ] TyOverby/bincode](https://github.com/TyOverby/bincode) — A binary encoder/decoder in Rust [<img src="https://api.travis-ci.org/TyOverby/bincode.svg?branch=master">](https://travis-ci.org/TyOverby/bincode)
  * [[ **⭐ 329 | 👁️ 17 | 🔀 50** ] m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] —  cross-platform, zero-copy, and endian-aware binary parsing [<img src="https://api.travis-ci.org/m4b/goblin.svg?branch=master">](https://travis-ci.org/m4b/goblin)
  * [[ **⭐ 31 | 👁️ 6 | 🔀 0** ] arcnmx/nue](https://github.com/arcnmx/nue) — I/O and binary data encoding for Rust [<img src="https://api.travis-ci.org/arcnmx/nue.svg?branch=master">](https://travis-ci.org/arcnmx/nue)
* BSON
  * [[ **⭐ 85 | 👁️ 8 | 🔀 28** ] zonyitoo/bson-rs](https://github.com/zonyitoo/bson-rs) — [<img src="https://api.travis-ci.org/zonyitoo/bson-rs.svg?branch=master">](https://travis-ci.org/zonyitoo/bson-rs)
* Byte swapping
  * [[ **⭐ 409 | 👁️ 15 | 🔀 81** ] BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) — Supports big-endian, little-endian and native byte orders [<img src="https://api.travis-ci.org/BurntSushi/byteorder.svg?branch=master">](https://travis-ci.org/BurntSushi/byteorder)
* Cap'n Proto
  * [[ **⭐ 759 | 👁️ 31 | 🔀 73** ] capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) — [<img src="https://api.travis-ci.org/capnproto/capnproto-rust.svg?branch=master">](https://travis-ci.org/capnproto/capnproto-rust)
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) — CBOR support for serde [<img src="https://api.travis-ci.org/pyfisch/cbor.svg?branch=master">](https://travis-ci.org/pyfisch/cbor)
* Character Encoding
  * [[ **⭐ 185 | 👁️ 12 | 🔀 56** ] lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) — [<img src="https://api.travis-ci.org/lifthrasiir/rust-encoding.svg?branch=master">](https://travis-ci.org/lifthrasiir/rust-encoding)
  * [[ **⭐ 126 | 👁️ 10 | 🔀 19** ] hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] — A Gecko-oriented implementation of the Encoding Standard in Rust [<img src="https://api.travis-ci.org/hsivonen/encoding_rs.svg?branch=master">](https://travis-ci.org/hsivonen/encoding_rs)
* CRC
  * [[ **⭐ 46 | 👁️ 3 | 🔀 16** ] mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) — [<img src="https://api.travis-ci.org/mrhooray/crc-rs.svg?branch=master">](https://travis-ci.org/mrhooray/crc-rs)
* CSV
  * [[ **⭐ 587 | 👁️ 12 | 🔀 83** ] BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) — A fast and flexible CSV reader and writer, with support for Serde [<img src="https://api.travis-ci.org/BurntSushi/rust-csv.svg?branch=master">](https://travis-ci.org/BurntSushi/rust-csv)
  * [[ **⭐ 20 | 👁️ 2 | 🔀 2** ] frol/flatc-rust](https://github.com/frol/flatc-rust) — FlatBuffers compiler (flatc) integration for Cargo build scripts [<img src="https://api.travis-ci.org/frol/flatc-rust.svg?branch=master">](https://travis-ci.org/frol/flatc-rust)
* [FlatBuffers](https://google.github.io/flatbuffers/)
* HAR
  * [[ **⭐ 6 | 👁️ 1 | 🔀 4** ] mandrean/har-rs](https://github.com/mandrean/har-rs) — A HTTP Archive Format (HAR) serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/har-rs.svg?branch=master)](https://travis-ci.org/mandrean/har-rs)
* HTML
  * [[ **⭐ 806 | 👁️ 48 | 🔀 129** ] servo/html5ever](https://github.com/servo/html5ever) — High-performance browser-grade HTML5 parser [<img src="https://api.travis-ci.org/servo/html5ever.svg?branch=master">](https://travis-ci.org/servo/html5ever)
  * [[ **⭐ 21 | 👁️ 4 | 🔀 10** ] veddan/rust-htmlescape](https://github.com/veddan/rust-htmlescape) — encoding/decoding HTML entities [<img src="https://api.travis-ci.org/veddan/rust-htmlescape.svg?branch=master">](https://travis-ci.org/veddan/rust-htmlescape)
* JSON
  * [[ **⭐ 968 | 👁️ 23 | 🔀 172** ] serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] — JSON support for [Serde](https://github.com/serde-rs/serde) framework [<img src="https://api.travis-ci.org/serde-rs/json.svg?branch=master">](https://travis-ci.org/serde-rs/json)
  * [[ **⭐ 508 | 👁️ 10 | 🔀 9** ] pikkr/pikkr](https://github.com/pikkr/pikkr) [[pikkr](https://crates.io/crates/pikkr)] — JSON parser which picks up values directly without performing tokenization in Rust
  * [[ **⭐ 282 | 👁️ 13 | 🔀 25** ] maciejhirsz/json-rust](https://github.com/maciejhirsz/json-rust) [[json](https://crates.io/crates/json)] — JSON implementation in Rust [<img src="https://api.travis-ci.org/maciejhirsz/json-rust.svg?branch=master">](https://travis-ci.org/maciejhirsz/json-rust)
* Jsonnet
  * [[ **⭐ 23 | 👁️ 2 | 🔀 7** ] Qihoo360/rust-jsonnet](https://github.com/Qihoo360/rust-jsonnet) —  [<img src="https://api.travis-ci.org/Qihoo360/rust-jsonnet.svg?branch=master">](https://travis-ci.org/Qihoo360/rust-jsonnet)
* MsgPack
  * [[ **⭐ 346 | 👁️ 18 | 🔀 49** ] 3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) — A pure Rust low/high level MessagePack implementation [<img src="https://api.travis-ci.org/3Hren/msgpack-rust.svg?branch=master">](https://travis-ci.org/3Hren/msgpack-rust)
* PEM
  * [[ **⭐ 8 | 👁️ 2 | 🔀 3** ] jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] — A Rust based way to parse and encode PEM-encoded data [<img src="https://api.travis-ci.org/jcreekmore/pem-rs.svg?branch=master">](https://travis-ci.org/jcreekmore/pem-rs)
* Postman Collection
  * [[ **⭐ 2 | 👁️ 1 | 🔀 1** ] mandrean/postman-collection-rs](https://github.com/mandrean/postman-collection-rs) — A Postman Collection v1, v2 & v2.1 serialization & deserialization library [![Build Status](https://api.travis-ci.org/mandrean/postman-collection-rs.svg?branch=master)](https://travis-ci.org/mandrean/postman-collection-rs)
* ProtocolBuffers
  * [[ **⭐ 946 | 👁️ 27 | 🔀 161** ] stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) — [<img src="https://api.travis-ci.org/stepancheg/rust-protobuf.svg?branch=master">](https://travis-ci.org/stepancheg/rust-protobuf)
  * [[ **⭐ 631 | 👁️ 17 | 🔀 53** ] danburkert/prost](https://github.com/danburkert/prost) — [<img src="https://api.travis-ci.org/danburkert/prost.svg?branch=master">](https://travis-ci.org/danburkert/prost)
* RON (Rusty Object Notation)
  * [[ **⭐ 651 | 👁️ 22 | 🔀 27** ] https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) — [<img src="https://api.travis-ci.org/ron-rs/ron.svg?branch=master">](https://travis-ci.org/https://github.com/ron-rs/ron)
* Tnetstring
  * [[ **⭐ 17 | 👁️ 2 | 🔀 7** ] erickt/rust-tnetstring](https://github.com/erickt/rust-tnetstring) — [<img src="https://api.travis-ci.org/erickt/rust-tnetstring.svg?branch=master">](https://travis-ci.org/erickt/rust-tnetstring)
* TOML
  * [[ **⭐ 481 | 👁️ 16 | 🔀 95** ] alexcrichton/toml-rs](https://github.com/alexcrichton/toml-rs) — [<img src="https://api.travis-ci.org/alexcrichton/toml-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/toml-rs)
* XML
  * [[ **⭐ 247 | 👁️ 8 | 🔀 62** ] netvl/xml-rs](https://github.com/netvl/xml-rs) — A streaming XML library [<img src="https://api.travis-ci.org/netvl/xml-rs.svg?branch=master">](https://travis-ci.org/netvl/xml-rs)
  * [[ **⭐ 230 | 👁️ 10 | 🔀 38** ] tafia/quick-xml](https://github.com/tafia/quick-xml) — High performance XML pull reader/writer [<img src="https://api.travis-ci.org/tafia/quick-xml.svg?branch=master">](https://travis-ci.org/tafia/quick-xml)
  * [[ **⭐ 110 | 👁️ 6 | 🔀 16** ] shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) — An XML library in Rust [<img src="https://api.travis-ci.org/shepmaster/sxd-document.svg?branch=master">](https://travis-ci.org/shepmaster/sxd-document)
  * [[ **⭐ 73 | 👁️ 6 | 🔀 13** ] Florob/RustyXML](https://github.com/Florob/RustyXML) — an XML parser written in Rust [<img src="https://api.travis-ci.org/Florob/RustyXML.svg?branch=master">](https://travis-ci.org/Florob/RustyXML)
  * [[ **⭐ 62 | 👁️ 4 | 🔀 11** ] shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) — An XPath library in Rust [<img src="https://api.travis-ci.org/shepmaster/sxd-xpath.svg?branch=master">](https://travis-ci.org/shepmaster/sxd-xpath)
  * [[ **⭐ 35 | 👁️ 5 | 🔀 2** ] media-io/yaserde](https://github.com/media-io/yaserde) — Yet Another Serializer/Deserializer specialized for XML [<img src="https://api.travis-ci.org/media-io/yaserde.svg?branch=master">](https://travis-ci.org/media-io/yaserde)
* YAML
  * [[ **⭐ 283 | 👁️ 11 | 🔀 60** ] chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) — The missing YAML 1.2 implementation for Rust. [<img src="https://api.travis-ci.org/chyh1990/yaml-rust.svg?branch=master">](https://travis-ci.org/chyh1990/yaml-rust)
  * [[ **⭐ 180 | 👁️ 7 | 🔀 36** ] dtolnay/serde-yaml](https://github.com/dtolnay/serde-yaml) [[serde\_yaml](https://crates.io/crates/serde_yaml)] — YAML support for [Serde](https://github.com/serde-rs/serde) framework [<img src="https://api.travis-ci.org/dtolnay/serde-yaml.svg?branch=master">](https://travis-ci.org/dtolnay/serde-yaml)
  * [[ **⭐ 19 | 👁️ 4 | 🔀 13** ] kimhyunkang/libyaml-rust](https://github.com/kimhyunkang/libyaml-rust) — [libyaml](https://pyyaml.org/wiki/LibYAML) bindings [<img src="https://api.travis-ci.org/kimhyunkang/libyaml-rust.svg?branch=master">](https://travis-ci.org/kimhyunkang/libyaml-rust)
  * [[ **⭐ 6 | 👁️ 1 | 🔀 2** ] vitiral/stfu8](https://github.com/vitiral/stfu8) — Sorta Text Format in UTF-8 [<img src="https://api.travis-ci.org/vitiral/stfu8.svg?branch=master">](https://travis-ci.org/vitiral/stfu8)

### Filesystem

[[filesystem](https://crates.io/keywords/filesystem)]
* Operations
  * [[ **⭐ 53 | 👁️ 1 | 🔀 7** ] webdesus/fs_extra](https://github.com/webdesus/fs_extra) — expanding opportunities standard library std::fs and std::io [<img src="https://api.travis-ci.org/webdesus/fs_extra.svg?branch=master">](https://travis-ci.org/webdesus/fs_extra)
  * [[ **⭐ 31 | 👁️ 3 | 🔀 3** ] vitiral/path_abs](https://github.com/vitiral/path_abs) — Absolute serializable path types and associated methods. [<img src="https://api.travis-ci.org/vitiral/path_abs.svg?branch=master">](https://travis-ci.org/webdesus/fs_extr://travis-ci.org/vitiral/path_abs)
  * [[ **⭐ 6 | 👁️ 2 | 🔀 0** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) -> UDisks2 DBus API
  * [[ **⭐ 4 | 👁️ 2 | 🔀 2** ] pop-os/sys-mount](https://github.com/pop-os/sys-mount) — High level abstraction for the `mount` / `umount2` system calls.
* Temporary Files
  * [[ **⭐ 923 | 👁️ 25 | 🔀 32** ] zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] — Zero-details, privacy-focused embeddable file system. [<img src="https://api.travis-ci.org/zboxfs/zbox.svg?branch=master">](https://travis-ci.org/zboxfs/zbox)
  * [[ **⭐ 251 | 👁️ 9 | 🔀 32** ] Stebalien/tempfile](https://github.com/Stebalien/tempfile) — temporary file library [<img src="https://api.travis-ci.org/Stebalien/tempfile.svg?branch=master">](https://travis-ci.org/Stebalien/tempfile)
  * [[ **⭐ 138 | 👁️ 14 | 🔀 27** ] rust-lang-deprecated/tempdir](https://github.com/rust-lang-deprecated/tempdir) — temporary directory library [<img src="https://api.travis-ci.org/rust-lang-nursery/tempdir.svg?branch=master">](https://travis-ci.org/rust-lang-nursery/tempdir)
  * [[ **⭐ 8 | 👁️ 2 | 🔀 7** ] Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] — list and manipulate unix extended file attributes [<img src="https://api.travis-ci.org/Stebalien/xattr.svg?branch=master">](https://travis-ci.org/Stebalien/xattr)

### Game development

See also [Are we game yet?](http://arewegameyet.com)
* Allegro
  * [[ **⭐ 52 | 👁️ 5 | 🔀 10** ] SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) — [Allegro 5](https://liballeg.org/) bindings [<img src="https://api.travis-ci.org/SiegeLord/RustAllegro.svg?branch=master">](https://travis-ci.org/SiegeLord/RustAllegro)
* Challonge
  * [[ **⭐ 0 | 👁️ 1 | 🔀 1** ] vityafx/challonge-rs](https://github.com/vityafx/challonge-rs) [[challonge](https://crates.io/crates/challonge)] — Client library for the Challonge REST API. Helps to organize tournaments. [<img src="https://api.travis-ci.org/vityafx/challonge-rs.svg?branch=master">](https://travis-ci.org/vityafx/challonge-rs)
* Corange
  * [[ **⭐ 38 | 👁️ 8 | 🔀 2** ] lucidscape/corange-rs](https://github.com/lucidscape/corange-rs) — [Corange](https://github.com/orangeduck/Corange) bindings
* Entity-Component Systems (ECS)
  * [[ **⭐ 1165 | 👁️ 63 | 🔀 126** ] slide-rs/specs](https://github.com/slide-rs/specs) — Specs Parallel ECS [<img src="https://api.travis-ci.org/slide-rs/specs.svg">](httpsL//github.com/travis-ci.org/slide-rs/specs)
* Game Engines
  * [[ **⭐ 1501 | 👁️ 64 | 🔀 193** ] ggez](https://github.com/ggez/ggez) — A lightweight game framework for making 2D games with minimum friction [<img src="https://api.travis-ci.org/ggez/ggez.svg?branch=master">](https://travis-ci.org/ggez/ggez)
  * [[ **⭐ 975 | 👁️ 40 | 🔀 247** ] Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) — SDL2 bindings [<img src="https://api.travis-ci.org/Rust-SDL2/rust-sdl2.svg?branch=master">](https://travis-ci.org/Rust-SDL2/rust-sdl2)
  * [[ **⭐ 255 | 👁️ 11 | 🔀 11** ] Unrust](https://github.com/unrust/unrust) — unrust — A pure rust based (webgl 2.0 / native) game engine
  * [[ **⭐ 164 | 👁️ 15 | 🔀 44** ] brson/rust-sdl](https://github.com/brson/rust-sdl) — SDL1 bindings [<img src="https://api.travis-ci.org/brson/rust-sdl.svg?branch=master">](https://travis-ci.org/brson/rust-sdl)
  * [[ **⭐ 48 | 👁️ 10 | 🔀 1** ] Vulkust](https://github.com/Hossein-Noroozpour/vulkust) — Vulkust — A safe, highly multithreaded, Vulkan based game engine written with Rust.
  * [Amethyst](https://amethyst.rs) — Data-oriented game engine [<img src="https://jenkins.amethyst-engine.org/job/amethyst/job/master/badge/icon">](https://jenkins.amethyst-engine.org/blue/organizations/jenkins/amethyst/activity/)
  * [Piston](https://www.piston.rs/) — [<img src="https://api.travis-ci.org/PistonDevelopers/piston.svg?branch=master">](https://travis-ci.org/PistonDevelopers/piston)
  * [Kiss3D](http://kiss3d.org/) — A Keep It Simple, Stupid 3d graphics engine written with Rust
* [SDL](http://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
* SFML
  * [[ **⭐ 369 | 👁️ 18 | 🔀 50** ] jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) — [SFML](https://www.sfml-dev.org/) bindings [<img src="https://api.travis-ci.org/jeremyletang/rust-sfml.svg?branch=master">](https://travis-ci.org/jeremyletang/rust-sfml)
* Tcod-rs
  * [[ **⭐ 165 | 👁️ 15 | 🔀 33** ] tomassedovic/tcod-rs](https://github.com/tomassedovic/tcod-rs) — Libtcod bindings for Rust.
* Victorem
  * [[ **⭐ 11 | 👁️ 1 | 🔀 0** ] VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] — Easy UDP Game Server and UDP Client framework for creating simple 2D and 3D online game prototype [<img src="https://api.travis-ci.org/VictoremWinbringer/Victorem.svg?branch=master">](https://travis-ci.org/VictoremWinbringer/Victorem)
* Voxlap
  * [[ **⭐ 11 | 👁️ 1 | 🔀 3** ] bbodi/rust-voxlap](https://github.com/bbodi/rust-voxlap) — [Voxlap](http://advsys.net/ken/voxlap.htm) bindings

### Geospatial

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [[ **⭐ 29 | 👁️ 3 | 🔀 2** ] rust-reverse-geocoder](https://github.com/llambda/rrgeo) — A fast, offline reverse geocoder in Rust, inspired by https://github.com/thampiman/reverse-geocoder
* [[ **⭐ 6 | 👁️ 2 | 🔀 2** ] DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] — coordinate transformations (2-d, 3-d, and geospatial) [<img src="https://api.travis-ci.org/DaveKram/coord_transforms.svg?branch=master">](https://travis-ci.org/DaveKram/coord_transforms)
* [[ **⭐ 3 | 👁️ 1 | 🔀 0** ] vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] — conversion between UTM, LatLon and MGRS coordinates [<img src="https://api.travis-ci.org/vlopes11/geomorph.svg?branch=master">](https://travis-ci.org/vlopes11/geomorph)
* [Georust](https://github.com/georust) — geospatial tools and libraries written in Rust

### Graphics

[[graphics](https://crates.io/keywords/graphics)]

* [[ **⭐ 3065 | 👁️ 121 | 🔀 354** ] gfx-rs/gfx](https://github.com/gfx-rs/gfx) — A high-performance, bindless graphics API for Rust. [<img src="https://img.shields.io/travis/gfx-rs/gfx/master.svg">](https://travis-ci.org/gfx-rs/gfx)
* Font
  * [[ **⭐ 447 | 👁️ 30 | 🔀 34** ] redox-os/rusttype](https://github.com/redox-os/rusttype) — A pure Rust alternative to libraries like FreeType [<img src="https://img.shields.io/travis/dredox-os/rusttype/master.svg">](https://travis-ci.org/redox-os/rusttype)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [[ **⭐ 1806 | 👁️ 70 | 🔀 212** ] glium/glium](https://github.com/glium/glium) — safe OpenGL wrapper for the Rust language. [<img src="https://api.travis-ci.org/glium/glium.svg?branch=master">](https://travis-ci.org/glium/glium)
  * [[ **⭐ 422 | 👁️ 14 | 🔀 94** ] brendanzab/gl-rs](https://github.com/brendanzab/gl-rs) — [<img src="https://api.travis-ci.org/brendanzab/gl-rs.svg?branch=master">](https://travis-ci.org/brendanzab/gl-rs)
  * [[ **⭐ 323 | 👁️ 52 | 🔀 91** ] PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) — [<img src="https://api.travis-ci.org/PistonDevelopers/glfw-rs.svg?branch=master">](https://travis-ci.org/PistonDevelopers/glfw-rs)
  * [Kiss3d](http://kiss3d.org) — draw simple geometric figures and play with them with one-liners [<img src="https://api.travis-ci.org/repositories/sebcrozet/kiss3d.json.svg?branch=master">](https://api.travis-ci.org/repositories/sebcrozet/kiss3d.json)
  * [glutin](https://crates.io/crates/glutin) — Rust alternative to [GLFW](https://www.glfw.org/) [<img src="https://api.travis-ci.org/rust-windowing/glutin.svg?branch=master">](https://travis-ci.org/rust-windowing/glutin)
* PDF
  * [[ **⭐ 1735 | 👁️ 70 | 🔀 189** ] vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] — [<img src="https://api.travis-ci.org/vulkano-rs/vulkano.svg?branch=master">](https://travis-ci.org/vulkano-rs/vulkano)
  * [[ **⭐ 396 | 👁️ 13 | 🔀 33** ] J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) — PDF document manipulation [<img src="https://api.travis-ci.org/J-F-Liu/lopdf.svg?branch=master">](https://travis-ci.org/J-F-Liu/lopdf)
  * [[ **⭐ 193 | 👁️ 12 | 🔀 9** ] fschutt/printpdf](https://github.com/fschutt/printpdf) — PDF writing library [<img src="https://api.travis-ci.org/fschutt/printpdf.svg?branch=master">](https://travis-ci.org/fschutt/printpdf)
  * [[ **⭐ 56 | 👁️ 4 | 🔀 4** ] kaj/rust-pdf](https://github.com/kaj/rust-pdf) — [<img src="https://api.travis-ci.org/kaj/rust-pdf.svg?branch=master">](https://travis-ci.org/kaj/rust-pdf)
* [Vulkan](https://www.khronos.org/vulkan/) [[vulkan](https://crates.io/keywords/vulkan)]

### Graph processing

* [[ **⭐ 9 | 👁️ 0 | 🔀 0** ] kud1ing/tinkerpop-rs](https://github.com/kud1ing/tinkerpop-rs) — an example how to use Apache TinkerPop from Rust [<img src="https://api.travis-ci.org/kud1ing/tinkerpop-rs.svg?branch=master">](https://travis-ci.org/kud1ing/tinkerpop-rs)

### GUI

[[gui](https://crates.io/keywords/gui)]

* [[ **⭐ 2582 | 👁️ 110 | 🔀 89** ] maps4print/azul](https://github.com/maps4print/azul) — A free, functional, IMGUI-oriented GUI framework for rapid development of desktop applications written in Rust, supported by the Mozilla WebRender rendering engine. [<img src="https://api.travis-ci.org/maps4print/azul.svg?branch=master">](https://travis-ci.org/maps4print/azul)
* [[ **⭐ 72 | 👁️ 6 | 🔀 11** ] autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) — A simple, cross-platform GUI automation library for Rust.
* [[ **⭐ 53 | 👁️ 12 | 🔀 3** ] rise-ui](https://github.com/rise-ui/rise) — Simple component-based cross-Platform GUI Toolkit for developing beautiful and user-friendly interfaces.
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) — An easy-to-use, immediate-mode, 2D GUI library written entirely in Rust [<img src="https://api.travis-ci.org/PistonDevelopers/conrod.svg?branch=master">](https://travis-ci.org/PistonDevelopers/conrod)


* Cocoa
* [[ **⭐ 15370 | 👁️ 797 | 🔀 2288** ] ImGui](https://github.com/ocornut/imgui)
* [[ **⭐ 12358 | 👁️ 571 | 🔀 945** ] Nuklear](https://github.com/vurtun/nuklear)
* [[ **⭐ 8595 | 👁️ 333 | 🔀 472** ] libui](https://github.com/andlabs/libui)
  * [[ **⭐ 1305 | 👁️ 40 | 🔀 50** ] relm](https://github.com/antoyo/relm) — Asynchronous, GTK+-based, GUI library, inspired by Elm [<img src="https://api.travis-ci.org/antoyo/relm.svg?branch=master">](https://travis-ci.org/antoyo/relm)
  * [[ **⭐ 930 | 👁️ 31 | 🔀 73** ] gtk-rs/gtk](https://github.com/gtk-rs/gtk) — GTK+ bindings [<img src="https://api.travis-ci.org/gtk-rs/gtk.svg?branch=master">](https://travis-ci.org/gtk-rs/gtk)
  * [[ **⭐ 591 | 👁️ 23 | 🔀 100** ] imgui-rs](https://github.com/Gekkio/imgui-rs) — Rust bindings for ImGui [<img src="https://api.travis-ci.org/Gekkio/imgui-rs.svg?branch=master">](https://travis-ci.org/Gekkio/imgui-rs)
  * [[ **⭐ 510 | 👁️ 20 | 🔀 14** ] flutter-rs](https://github.com/gliheng/flutter-rs) — Build flutter desktop app in dart & rust.
  * [[ **⭐ 411 | 👁️ 27 | 🔀 41** ] cyndis/qmlrs](https://github.com/cyndis/qmlrs) — QtQuick bindings [<img src="https://api.travis-ci.org/cyndis/qmlrs.svg?branch=master">](https://travis-ci.org/cyndis/qmlrs)
  * [[ **⭐ 328 | 👁️ 18 | 🔀 25** ] Kiss-ui](https://github.com/KISS-UI/kiss-ui) — A simple UI framework built on IUP [![Build Status](https://api.travis-ci.org/cybergeek94/kiss-ui.svg?branch=master)](https://travis-ci.org/cybergeek94/kiss-ui)
  * [[ **⭐ 279 | 👁️ 13 | 🔀 19** ] sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) — Sciter bindings [<img src="https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true">](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
  * [[ **⭐ 228 | 👁️ 16 | 🔀 6** ] nuklear-rust](https://github.com/snuk182/nuklear-rust) — Rust bindings for Nuklear [<img src="https://api.travis-ci.org/snuk182/nuklear-rust.svg?branch=master">](https://travis-ci.org/snuk182/nuklear-rust)
  * [[ **⭐ 215 | 👁️ 23 | 🔀 20** ] pcwalton/libui-rs](https://github.com/pcwalton/libui-rs) — libui bindings [<img src="https://api.travis-ci.org/pcwalton/libui-rs.svg?branch=master">](https://travis-ci.org/pcwalton/libui-rs). Abandoned project. The most updated fork is [NoraCodes/libui-rs](https://github.com/NoraCodes/libui-rs).
  * [[ **⭐ 172 | 👁️ 26 | 🔀 70** ] servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) — [<img src="https://api.travis-ci.org/servo/core-foundation-rs.svg?branch=master">](https://travis-ci.org/servo/core-foundation-rs)
  * [[ **⭐ 164 | 👁️ 16 | 🔀 15** ] White-Oak/qml-rust](https://github.com/White-Oak/qml-rust) — QML bindings. [<img src="https://api.travis-ci.org/White-Oak/qml-rust.svg?branch=master">](https://travis-ci.org/White-Oak/qml-rust)
* [[ **⭐ 64 | 👁️ 5 | 🔀 9** ] saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) — [nativefiledialog](https://github.com/mlabbe/nativefiledialog) bindings
  * [[ **⭐ 30 | 👁️ 3 | 🔀 1** ] kylewlacy/sorbet-cocoa](https://github.com/kylewlacy/sorbet-cocoa) — [<img src="https://api.travis-ci.org/kylewlacy/sorbet-cocoa.svg?branch=master">](https://travis-ci.org/kylewlacy/sorbet-cocoa)
  * [[ **⭐ 29 | 👁️ 5 | 🔀 9** ] dcampbell24/iup-rust](https://github.com/dcampbell24/iup-rust) — IUP bindings [<img src="https://api.travis-ci.org/dcampbell24/iup-rust.svg?branch=master">](https://travis-ci.org/dcampbell24/iup-rust)
  * [[ **⭐ 27 | 👁️ 4 | 🔀 5** ] kitech/qt.rs](https://github.com/kitech/qt.rs) — Qt5 bindings [<img src="https://api.travis-ci.org/kitech/qt.rs.svg?branch=master">](https://travis-ci.org/kitech/qt.rs)
  * [[ **⭐ 12 | 👁️ 1 | 🔀 2** ] clear-coat](https://github.com/jminer/clear-coat) — Clear Coat is a Rust wrapper for the IUP GUI library
* [Flutter](https://flutter.dev/)
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
* [Qt](https://doc.qt.io)
  * [Rust Qt Binding Generator](https://phabricator.kde.org/source/rust-qt-binding-generator/) — Binding generator hosted by KDE.
  * [rust-qt](https://github.com/rust-qt) —
* [Sciter](https://sciter.com/)

### Image processing

* [[ **⭐ 1052 | 👁️ 79 | 🔀 227** ] image-rs/image](https://github.com/image-rs/image) — Basic imaging processing functions and methods for converting to and from image formats [<img src="https://api.travis-ci.org/image-rs/image.svg?branch=master">](https://travis-ci.org/image-rs/image)
* [[ **⭐ 186 | 👁️ 16 | 🔀 28** ] twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) — Rust bindings for OpenCV [<img src="https://api.travis-ci.org/twistedfall/opencv-rust.svg?branch=cv2">](https://travis-ci.org/twistedfall/opencv-rust)
* [[ **⭐ 173 | 👁️ 76 | 🔀 40** ] image-rs/imageproc](https://github.com/image-rs/imageproc) — An image processing library, based on the `image` library. [![Build Status](https://api.travis-ci.org/image-rs/imageproc.svg?branch=master)](https://travis-ci.org/image-rs/imageproc)
* [[ **⭐ 76 | 👁️ 2 | 🔀 16** ] abonander/img_hash](https://github.com/abonander/img_hash) — Perceptual image hashing and comparison for equality and similarity.
* [[ **⭐ 33 | 👁️ 6 | 🔀 5** ] teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] — A simple steganography library [<img src="https://api.travis-ci.org/teovoinea/steganography.svg?branch=master">](https://travis-ci.org/teovoinea/steganography)

### Language specification

* [[ **⭐ 53 | 👁️ 6 | 🔀 2** ] shnewto/bnf](https://github.com/shnewto/bnf) — A library for parsing Backus–Naur form context-free grammars. [<img src="https://api.travis-ci.org/shnewto/bnf.svg?branch=master">](https://travis-ci.org/shnewto/bnf)

### Logging

[[log](https://crates.io/keywords/log)]

* [[ **⭐ 700 | 👁️ 15 | 🔀 53** ] slog-rs/slog](https://github.com/slog-rs/slog) — Structured, composable logging for Rust [![Build Status](https://api.travis-ci.org/slog-rs/slog.svg?branch=master)](https://travis-ci.org/slog-rs/slog)
* [[ **⭐ 552 | 👁️ 28 | 🔀 102** ] rust-lang-nursery/log](https://github.com/rust-lang-nursery/log) — Logging implementation for Rust [![Build Status](https://api.travis-ci.org/rust-lang-nursery/log.svg?branch=master)](https://travis-ci.org/rust-lang-nursery/log)
* [[ **⭐ 239 | 👁️ 7 | 🔀 39** ] sfackler/log4rs](https://github.com/sfackler/log4rs) — highly configurable logging framework modeled after Java's Logback and log4j libraries [![Build Status](https://api.travis-ci.org/sfackler/log4rs.svg?branch=master)](https://travis-ci.org/sfackler/log4rs)

### Macro

* cute
  * [[ **⭐ 164 | 👁️ 2 | 🔀 3** ] mattgathu/cute](https://github.com/mattgathu/cute) — Macro for Python-esque list comprehensions in Rust. [![Build Status](https://api.travis-ci.org/mattgathu/cute.svg?branch=master)](https://travis-ci.org/tensorflow/rust)
* hado
  * [[ **⭐ 33 | 👁️ 2 | 🔀 1** ] ludat/hado-rs](https://github.com/ludat/hado-rs) — A little macro for writing haskell-like do expressions without too much ceremony

### Markup language

* CommonMark
  * [[ **⭐ 672 | 👁️ 28 | 🔀 101** ] raphlinus/pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) — [CommonMark](https://commonmark.org/) parser in Rust

### Mobile

[Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile)

* Android
  * [[ **⭐ 789 | 👁️ 40 | 🔀 81** ] rust-windowing/android-rs-glue](https://github.com/rust-windowing/android-rs-glue) — glue between Rust and Android [<img src="https://api.travis-ci.org/rust-windowing/android-rs-glue.svg?branch=master">](https://travis-ci.org/rust-windowing/android-rs-glue)
* iOS
  * [[ **⭐ 150 | 👁️ 9 | 🔀 16** ] TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) — A cargo lipo subcommand which automatically creates a universal library for use with your iOS application. [<img src="https://api.travis-ci.org/TimNN/cargo-lipo.svg?branch=master">](https://travis-ci.org/TimNN/cargo-lipo)
  * [[ **⭐ 40 | 👁️ 3 | 🔀 6** ] vhbit/ObjCrust](https://github.com/vhbit/ObjCrust) — using Rust to create an iOS static library [<img src="https://api.travis-ci.org/vhbit/ObjCrust.svg?branch=master">](https://travis-ci.org/vhbit/ObjCrust)
* Pebble
  * [[ **⭐ 42 | 👁️ 5 | 🔀 1** ] andars/pebble.rs](https://github.com/andars/pebble.rs) — A crate that allows Rust to be used to develop Pebble applications.

### Network programming

* HTTP
  * [[ **⭐ 13 | 👁️ 3 | 🔀 2** ] pop-os/parallel-getter](https://github.com/pop-os/parallel-getter) — Download a file with parallel GET requests to maximize bandwidth usage.
  * [[ **⭐ 12 | 👁️ 2 | 🔀 2** ] pop-os/url-crawler](https://github.com/pop-os/url-crawler) — A configurable parallel web crawler, designed to crawl a website for content.
  * [[ **⭐ 4 | 👁️ 2 | 🔀 3** ] pop-os/url-scraper](https://github.com/pop-os/url-scraper) — Scrape URLs from HTML pages
* FTP
  * [[ **⭐ 75 | 👁️ 9 | 🔀 27** ] mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) — an [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-ftp.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-ftp)
* IPNetwork
  * [[ **⭐ 41 | 👁️ 4 | 🔀 7** ] candrew/netsim](https://github.com/canndrew/netsim) — A Rust library for network simulation and testing [<img src="https://api.travis-ci.org/canndrew/netsim.svg?branch=master">](https://travis-ci.org/canndrew/netsim)
  * [[ **⭐ 33 | 👁️ 5 | 🔀 20** ] achanda/ipnetwork](https://github.com/achanda/ipnetwork) — A library to work with IP networks in pure Rust [<img src="https://api.travis-ci.org/achanda/ipnetwork.svg?branch=master">](https://travis-ci.org/achanda/ipnetwork)
* JSON-RPC
  * [[ **⭐ 7 | 👁️ 1 | 🔀 3** ] vlopes11/futures-jsonrpc](https://github.com/vlopes11/futures-jsonrpc) [[futures-jsonrpc](https://crates.io/crates/futures-jsonrpc)] — Futures implementation for JSON-RPC [<img src="https://api.travis-ci.org/vlopes11/futures-jsonrpc.svg?branch=master">](https://travis-ci.org/vlopes11/futures-jsonrpc)
* Low level
  * [[ **⭐ 4827 | 👁️ 196 | 🔀 366** ] tokio-rs/tokio](https://github.com/tokio-rs/tokio) — A network application framework for rapid development and highly scalable production deployments of clients and servers.
  * [[ **⭐ 2794 | 👁️ 88 | 🔀 188** ] actix/actix](https://github.com/actix/actix) — Actor library for Rust [<img src="https://api.travis-ci.org/actix/actix.svg?branch=master">](https://travis-ci.org/actix/actix)
  * [[ **⭐ 859 | 👁️ 31 | 🔀 147** ] libpnet/libpnet](https://github.com/libpnet/libpnet) — A cross-platform, low level networking [<img src="https://api.travis-ci.org/libpnet/libpnet.svg?branch=master">](https://travis-ci.org/libpnet/libpnet)
  * [[ **⭐ 50 | 👁️ 4 | 🔀 3** ] dylanmckay/protocol](https://github.com/dylanmckay/protocol) — Custom TCP/UDP protocol definitions
  * [[ **⭐ 13 | 👁️ 0 | 🔀 0** ] Gymmasssorla/sendmmsg](https://github.com/Gymmasssorla/sendmmsg) — Transmit multiple messages using one system call in Rust [<img src="https://api.travis-ci.com/Gymmasssorla/sendmmsg.svg?branch=master">](https://travis-ci.com/Gymmasssorla/sendmmsg)
* NanoMsg
  * [[ **⭐ 317 | 👁️ 16 | 🔀 48** ] thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) — [nanomsg](https://nanomsg.org/) bindings [<img src="https://api.travis-ci.org/thehydroimpulse/nanomsg.rs.svg?branch=master">](https://travis-ci.org/thehydroimpulse/nanomsg.rs)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](http://crates.io/crates/nng)] — [Nng (nanomsg v2)](https://nanomsg.github.io/nng/index.html) bindings [<img src="https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg">](https://gitlab.com/neachdainn/nng-rs/pipelines)
* NNTP
  * [[ **⭐ 12 | 👁️ 2 | 🔀 4** ] mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) — an [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-nntp.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-nntp)
* POP3
  * [[ **⭐ 15 | 👁️ 2 | 🔀 8** ] mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) — A [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) client for Rust [<img src="https://api.travis-ci.org/mattnenterprise/rust-pop3.svg?branch=master">](https://travis-ci.org/mattnenterprise/rust-pop3)
* SSH
  * [[ **⭐ 140 | 👁️ 6 | 🔀 54** ] alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) — [libssh2](https://www.libssh2.org/) bindings [<img src="https://api.travis-ci.org/alexcrichton/ssh2-rs.svg?branch=master">](https://travis-ci.org/alexcrichton/ssh2-rs)
  * [Thrussh](https://github.com/pijul-scm/thrussh/) — an SSH library written from scratch in Rust, backed by [libsodium](https://download.libsodium.org/doc/)
* Stomp
  * [[ **⭐ 63 | 👁️ 3 | 🔀 10** ] zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) — A [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) client implementation in Rust [<img src="https://api.travis-ci.org/zslayton/stomp-rs.svg?branch=master">](https://travis-ci.org/zslayton/stomp-rs)
* uTP
  * [[ **⭐ 94 | 👁️ 11 | 🔀 19** ] meqif/rust-utp](https://github.com/meqif/rust-utp) — A [uTP](http://www.bittorrent.org/beps/bep_0029.html) (Micro Transport Protocol) library for Rust. [<img src="https://api.travis-ci.org/meqif/rust-utp.svg?branch=master">](https://travis-ci.org/meqif/rust-utp)
* ZeroMQ
  * [[ **⭐ 377 | 👁️ 15 | 🔀 118** ] erickt/rust-zmq](https://github.com/erickt/rust-zmq) — [ZeroMQ](http://zeromq.org/) bindings [<img src="https://api.travis-ci.org/erickt/rust-zmq.svg?branch=master">](https://travis-ci.org/erickt/rust-zmq)
* CoAP
  * [[ **⭐ 72 | 👁️ 13 | 🔀 16** ] Covertness/coap-rs](https://github.com/Covertness/coap-rs) — A [Constrained Application Protocol(CoAP)](https://tools.ietf.org/html/rfc7252) library for Rust. [<img src="https://api.travis-ci.org/Covertness/coap-rs.svg?branch=master">](https://travis-ci.org/Covertness/coap-rs)

### Parsing

  * [[ **⭐ 2986 | 👁️ 73 | 🔀 333** ] Geal/nom](https://github.com/Geal/nom) — parser combinator library [<img src="https://api.travis-ci.org/Geal/nom.svg?branch=master">](https://travis-ci.org/Geal/nom)
  * [[ **⭐ 1381 | 👁️ 48 | 🔀 75** ] pest-parser/pest](https://github.com/pest-parser/pest) — The Elegant Parser [![Build Status](https://api.travis-ci.org/pest-parser/pest.svg?branch=master)](https://travis-ci.org/pest-parser/pest)
  * [[ **⭐ 941 | 👁️ 35 | 🔀 119** ] lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) — LR(1) parser generator for Rust [![Build status](https://api.travis-ci.org/lalrpop/lalrpop.svg?branch=master)](https://travis-ci.org/lalrpop/lalrpop)
  * [[ **⭐ 669 | 👁️ 19 | 🔀 49** ] Marwes/combine](https://github.com/Marwes/combine) — parser combinator library [<img src="https://api.travis-ci.org/Marwes/combine.svg?branch=master">](https://travis-ci.org/Marwes/combine)
  * [[ **⭐ 572 | 👁️ 21 | 🔀 57** ] kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) — Parsing Expression Grammar (PEG) parser generator
  * [[ **⭐ 193 | 👁️ 12 | 🔀 15** ] m4rw3r/chomp](https://github.com/m4rw3r/chomp) – A fast monadic-style parser combinator [<img src="https://api.travis-ci.org/m4rw3r/chomp.svg?branch=master">](https://travis-ci.org/m4rw3r/chomp)
  * [[ **⭐ 119 | 👁️ 10 | 🔀 13** ] ptal/oak](https://github.com/ptal/oak) — A typed PEG parser generator (compiler plugin)
  * [[ **⭐ 38 | 👁️ 2 | 🔀 6** ] rustless/queryst](https://github.com/rustless/queryst) — A query string parsing library for Rust inspired by https://github.com/ljharb/qs [![Build Status](https://api.travis-ci.org/rustless/queryst.svg?branch=master)](https://travis-ci.org/rustless/queryst)
  * [[ **⭐ 29 | 👁️ 1 | 🔀 7** ] nrc/zero](https://github.com/nrc/zero) — zero-allocation parsing of binary data [<img src="https://api.travis-ci.org/nrc/zero.svg?branch=master">](https://travis-ci.org/nrc/zero)
  * [[ **⭐ 17 | 👁️ 2 | 🔀 1** ] ivanceras/inquerest](https://github.com/ivanceras/inquerest) — an URL parameter parser for rest filter inquiry [![Build Status](https://api.travis-ci.org/ivanceras/inquerest.svg?branch=master)](https://travis-ci.org/ivanceras/inquerest)

### Packaging formats

- [[ **⭐ 3 | 👁️ 2 | 🔀 1** ] pop-os/debarchive](https://github.com/pop-os/debarchive) Library for reading and extracting debian archives

### Peripherals

* Serial Port
  * [[ **⭐ 38 | 👁️ 4 | 🔀 5** ] Susurrus/serialport-rs](https://github.com/Susurrus/serialport-rs) [[serialport](https://docs.rs/serialport/3.0.0/serialport/)] — A cross-platform library that provides access to a serial port

### Platform specific

* Linux
  * [[ **⭐ 113 | 👁️ 8 | 🔀 28** ] inotify-rs/inotify](https://github.com/inotify-rs/inotify) — [inotify](https://en.wikipedia.org/wiki/Inotify) bindings [<img src="https://api.travis-ci.org/inotify-rs/inotify.svg?branch=master">](https://travis-ci.org/inotify-rs/inotify)
  * [[ **⭐ 24 | 👁️ 5 | 🔀 9** ] yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) — [iptables](https://www.netfilter.org/projects/iptables/index.html) bindings [<img src="https://api.travis-ci.org/yaa110/rust-iptables.svg?branch=master">](https://travis-ci.org/yaa110/rust-iptables)
  * [[ **⭐ 11 | 👁️ 1 | 🔀 2** ] arvancloud/nginx-rs](https://github.com/arvancloud/nginx-rs) — [Nginx](https://www.nginx.com) bindings [<img src="https://api.travis-ci.org/arvancloud/nginx-rs.svg?branch=master">](https://travis-ci.org/arvancloud/nginx-rs)
  * [[ **⭐ 9 | 👁️ 0 | 🔀 0** ] frol/cgroups-fs](https://github.com/frol/cgroups-fs) — Rust bindings to Linux Control Groups (cgroups) [<img src="https://api.travis-ci.org/frol/cgroups-fs.svg?branch=master">](https://travis-ci.org/frol/cgroups-fs)
  * [[ **⭐ 6 | 👁️ 2 | 🔀 0** ] pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) — UDisks2 DBus API
  * [pop-os/distinst](https://github.com/pop-os/distinst/) — Linux distribution installer library
* Unix-like
  * [[ **⭐ 935 | 👁️ 26 | 🔀 288** ] nix-rust/nix](https://github.com/nix-rust/nix) — Unix-like API bindings [<img src="https://api.travis-ci.org/nix-rust/nix.svg?branch=master">](https://travis-ci.org/nix-rust/nix)
  * [[ **⭐ 441 | 👁️ 22 | 🔀 75** ] zargony/rust-fuse](https://github.com/zargony/rust-fuse) — [FUSE](https://github.com/libfuse/libfuse) bindings <img src="https://api.travis-ci.org/zargony/rust-fuse.svg?branch=master">
* Windows
  * [[ **⭐ 633 | 👁️ 26 | 🔀 224** ] retep998/winapi-rs](https://github.com/retep998/winapi-rs) — Windows API bindings [<img src="https://api.travis-ci.org/retep998/winapi-rs.svg?branch=master">](https://travis-ci.org/retep998/winapi-rs)
* FreeBSD
  * [[ **⭐ 10 | 👁️ 5 | 🔀 1** ] dlrobertson/capsicum-rs](https://github.com/dlrobertson/capsicum-rs) — Rust bindings for the FreeBSD capsicum framework
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) — Rust implementation of a FreeBSD jail library

### Scripting

[[scripting](https://crates.io/keywords/scripting)]

* [[ **⭐ 1709 | 👁️ 55 | 🔀 96** ] gluon-lang/gluon](https://github.com/gluon-lang/gluon) —  A small, statically-typed, functional programming language
* [[ **⭐ 821 | 👁️ 73 | 🔀 31** ] PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) — A rusty dynamically typed scripting language
* [[ **⭐ 442 | 👁️ 19 | 🔀 27** ] murarth/ketos](https://github.com/murarth/ketos) — A Lisp dialect functional programming language serving as a scripting and extension language for rust
* [[ **⭐ 347 | 👁️ 11 | 🔀 32** ] jonathandturner/rhai](https://github.com/jonathandturner/rhai) — A tiny and fast embedded scripting language resembling a combination of JS and Rust
* [moss](https://crates.io/crates/moss) — A dynamically typed scripting language

### Template engine

* Handlebars
  * [[ **⭐ 368 | 👁️ 9 | 🔀 61** ] sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) — Handlebars template engine with inheritance, custom helper support. [<img src="https://api.travis-ci.org/sunng87/handlebars-rust.svg?branch=master">](https://travis-ci.org/sunng87/handlebars-rust)
  * [r-iendo/yarte](https://gitlab.com/r-iendo/yarte) — compile-time handlebars-like templates [<img src="https://gitlab.com/r-iendo/yarte/badges/master/build.svg">](https://gitlab.com/r-iendo/yarte/pipelines)
* HTML
  * [[ **⭐ 768 | 👁️ 15 | 🔀 90** ] Keats/tera](https://github.com/Keats/tera) — template engine based on Jinja2 and the Django template language. [<img src="https://api.travis-ci.org/Keats/tera.svg?branch=master">](https://travis-ci.org/Keats/tera)
  * [[ **⭐ 709 | 👁️ 15 | 🔀 53** ] djc/askama](https://github.com/djc/askama) — template rendering engine based on Jinja [<img src="https://api.travis-ci.org/djc/askama.svg?branch=master">](https://travis-ci.org/djc/askama)
  * [[ **⭐ 543 | 👁️ 17 | 🔀 43** ] lfairy/maud](https://github.com/lfairy/maud) — compile-time HTML templates [<img src="https://api.travis-ci.org/lfairy/maud.svg?branch=master">](https://travis-ci.org/lfairy/maud)
  * [[ **⭐ 152 | 👁️ 6 | 🔀 10** ] Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) — compile-time HTML templates [<img src="https://api.travis-ci.org/Stebalien/horrorshow-rs.svg?branch=master">](https://travis-ci.org/Stebalien/horrorshow-rs)
  * [[ **⭐ 101 | 👁️ 7 | 🔀 6** ] kaj/ructe](https://github.com/kaj/ructe) — HTML template system for Rust [<img src="https://api.travis-ci.org/kaj/ructe.svg?branch=master">](https://travis-ci.org/kaj/ructe)
* Mustache
  * [[ **⭐ 193 | 👁️ 7 | 🔀 24** ] rustache/rustache](https://github.com/rustache/rustache) — [<img src="https://api.travis-ci.org/rustache/rustache.svg?branch=master">](https://travis-ci.org/rustache/rustache)
* [[ **⭐ 9 | 👁️ 2 | 🔀 0** ] tailhook/marafet](https://github.com/tailhook/marafet) — Compiler for Jade-like template language to cito.js-based virtual dom

### Text processing

* [[ **⭐ 1107 | 👁️ 45 | 🔀 180** ] rust-lang/regex](https://github.com/rust-lang/regex) — Regular expressions (RE2 style) [<img src="https://api.travis-ci.org/rust-lang/regex.svg?branch=master">](https://travis-ci.org/rust-lang/regex)
* [[ **⭐ 245 | 👁️ 10 | 🔀 10** ] greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) — Natural language detection library based on trigrams [<img src="https://api.travis-ci.org/greyblake/whatlang-rs.svg?branch=master">](https://travis-ci.org/greyblake/whatlang-rs)
* [[ **⭐ 114 | 👁️ 7 | 🔀 7** ] BurntSushi/suffix](https://github.com/BurntSushi/suffix) — Linear time suffix array construction (with Unicode support) [<img src="https://api.travis-ci.org/BurntSushi/suffix.svg?branch=master">](https://travis-ci.org/BurntSushi/suffix)
* [[ **⭐ 114 | 👁️ 8 | 🔀 11** ] BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) — Elastic tab stops (i.e., text column alignment) [<img src="https://api.travis-ci.org/BurntSushi/tabwriter.svg?branch=master">](https://travis-ci.org/BurntSushi/tabwriter)
* [[ **⭐ 53 | 👁️ 3 | 🔀 14** ] mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] — Word wrap text (with support for hyphenation) [<img src="https://api.travis-ci.org/mgeisler/textwrap.svg?branch=master">](https://travis-ci.org/mgeisler/textwrap)
* [[ **⭐ 53 | 👁️ 2 | 🔀 1** ] ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) — A reader that allows forwards, backwards and random navigations through the lines of huge files without consuming iterators [<img src="https://api.travis-ci.org/ps1dr3x/easy_reader.svg?branch=master">](https://travis-ci.org/ps1dr3x/easy_reader)
* [[ **⭐ 28 | 👁️ 4 | 🔀 1** ] Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] – Generic string + iterable joining [<img src="https://api.travis-ci.org/Lucretiel/joinery.svg?branch=master">](https://travis-ci.org/Lucretiel/joinery)
* [[ **⭐ 17 | 👁️ 1 | 🔀 1** ] pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) — Construct [n-grams](https://en.wikipedia.org/wiki/N-gram) from arbitrary iterators [<img src="https://api.travis-ci.org/pwoolcoc/ngrams.svg?branch=master">](https://travis-ci.org/pwoolcoc/ngrams)
* [[ **⭐ 9 | 👁️ 1 | 🔀 2** ] yaa110/rake-rs](https://github.com/yaa110/rake-rs) — Multilingual implementation of RAKE algorithm for Rust [<img src="https://api.travis-ci.org/yaa110/rake-rs.svg?branch=master">](https://travis-ci.org/yaa110/rake-rs)
* [strsim-rs](https://crates.io/crates/strsim) — String similarity metrics [<img src="https://api.travis-ci.org/dguo/strsim-rs.svg?branch=master">](https://travis-ci.org/dguo/strsim-rs)

### Text search

* [[ **⭐ 2404 | 👁️ 97 | 🔀 125** ] tantivy-search/tantivy](https://github.com/tantivy-search/tantivy) [[tantivy](https://crates.io/crates/tantivy)] — [<img src="https://api.travis-ci.org/tantivy-search/tantivy.svg?branch=master">](https://travis-ci.org/tantivy-search/tantivy)
* [[ **⭐ 678 | 👁️ 23 | 🔀 42** ] BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] — [<img src="https://api.travis-ci.org/BurntSushi/fst.svg?branch=master">](https://travis-ci.org/BurntSushi/fst)
* [[ **⭐ 60 | 👁️ 7 | 🔀 0** ] CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] — [<img src="https://api.travis-ci.org/CurrySoftware/perlin.svg?branch=master">](https://travis-ci.org/CurrySoftware/perlin)

### Virtualization

* [[ **⭐ 108 | 👁️ 8 | 🔀 11** ] beneills/quantum](https://github.com/beneills/quantum) — Advanced Rust quantum computer simulator [<img src="https://api.travis-ci.org/beneills/quantum.svg?branch=master">](https://travis-ci.org/beneills/quantum)
* [[ **⭐ 77 | 👁️ 7 | 🔀 17** ] ekse/unicorn-rs](https://github.com/ekse/unicorn-rs) — Rust bindings for the unicorn CPU emulator
* [[ **⭐ 32 | 👁️ 3 | 🔀 2** ] saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) — Hardware-accelerated virtualization on OS X

### Web programming

See also [Are we web yet?](http://www.arewewebyet.org) and [Rust web framework comparison](https://github.com/flosse/rust-web-framework-comparison).

* Client-side / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) — A Cargo subcommand for the client-side Web [![Build Status](https://api.travis-ci.org/koute/cargo-web.svg)](https://travis-ci.org/koute/cargo-web)
  * [stdweb](https://crates.io/crates/stdweb) — A standard library for the client-side Web [![Build Status](https://api.travis-ci.org/koute/stdweb.svg)](https://travis-ci.org/koute/stdweb)
  * [yew](https://crates.io/crates/yew) — Rust framework for making client web apps
* HTTP Client
  * [[ **⭐ 4689 | 👁️ 154 | 🔀 691** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [<img src="https://api.travis-ci.org/hyperium/hyper.svg?branch=master">](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 1454 | 👁️ 41 | 🔀 228** ] seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) — an ergonomic HTTP Client for Rust. [<img src="https://api.travis-ci.org/seanmonstar/reqwest.svg?branch=master">](https://travis-ci.org/seanmonstar/reqwest)
  * [[ **⭐ 516 | 👁️ 18 | 🔀 125** ] alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) — [libcurl](https://curl.haxx.se/libcurl/) bindings [<img src="https://api.travis-ci.org/alexcrichton/curl-rust.svg?branch=master">](https://travis-ci.org/alexcrichton/curl-rust)
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) — Beautiful and elegant Yukikaze is little HTTP client library based on hyper. [<img src="https://gitlab.com/Douman/yukikaze/badges/master/build.svg">](https://gitlab.com/Douman/yukikaze)
* HTTP Server
  * [[ **⭐ 7180 | 👁️ 215 | 🔀 481** ] Rocket](https://github.com/SergioBenitez/Rocket) — Rocket is web framework for Rust (nightly) with a focus on ease-of-use, expressability, and speed [<img src="https://api.travis-ci.org/SergioBenitez/Rocket.svg?branch=master">](https://travis-ci.org/SergioBenitez/Rocket)
  * [[ **⭐ 5401 | 👁️ 176 | 🔀 382** ] Iron](https://github.com/iron/iron) — A middleware-based server framework [<img src="https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master">](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 4689 | 👁️ 154 | 🔀 691** ] hyperium/hyper](https://github.com/hyperium/hyper) — an HTTP implementation [<img src="https://api.travis-ci.org/hyperium/hyper.svg?branch=master">](https://travis-ci.org/hyperium/hyper)
  * [[ **⭐ 4083 | 👁️ 134 | 🔀 290** ] actix/actix-web](https://github.com/actix/actix-web) — A lightweight async web framework for Rust with websocket support [<img src="https://api.travis-ci.org/actix/actix-web.svg?branch=master">](https://travis-ci.org/actix/actix-web)
  * [[ **⭐ 1252 | 👁️ 37 | 🔀 79** ] Gotham](https://github.com/gotham-rs/gotham) — A flexible web framework that does not sacrifice safety, security or speed. [<img src="https://api.travis-ci.org/gotham-rs/gotham.svg?branch=master">](https://travis-ci.org/gotham-rs/gotham)
  * [[ **⭐ 871 | 👁️ 29 | 🔀 54** ] Ogeon/rustful](https://github.com/Ogeon/rustful) — A RESTful web framework for Rust  [<img src="https://api.travis-ci.org/Ogeon/rustful.svg?branch=master">](https://travis-ci.org/Ogeon/rustful)
  * [[ **⭐ 851 | 👁️ 33 | 🔀 122** ] housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) — lightweight, event-driven WebSockets for Rust [<img src="https://api.travis-ci.org/housleyjk/ws-rs.svg?branch=stable">](https://travis-ci.org/housleyjk/ws-rs)
  * [[ **⭐ 837 | 👁️ 14 | 🔀 36** ] vi/websocat](https://github.com/vi/websocat) — CLI for interacting with WebSockets, with functionality of Netcat, Curl and Socat. [<img src="https://api.travis-ci.org/vi/websocat.svg?branch=master">](https://travis-ci.org/vi/websocat)
  * [[ **⭐ 607 | 👁️ 37 | 🔀 45** ] carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] — A fast, boilerplate free, web framework for Rust [<img src="https://api.travis-ci.org/carllerche/tower-web.svg?branch=master">](https://travis-ci.org/carllerche/tower-web)
  * [[ **⭐ 573 | 👁️ 14 | 🔀 45** ] Rustless](https://github.com/rustless/rustless) — A REST-like API micro-framework inspired by [Grape](https://github.com/ruby-grape/grape) and [Hyper](https://github.com/hyperium/hyper) [<img src="https://api.travis-ci.org/rustless/rustless.svg?branch=master">](https://travis-ci.org/rustless/rustless)
  * [[ **⭐ 560 | 👁️ 32 | 🔀 41** ] rustforce/sapper](https://github.com/rustforce/sapper) — A lightweight web framework built on async hyper, implemented in Rust language. [<img src="https://api.travis-ci.org/rustforce/sapper.svg?branch=master">](https://travis-ci.org/rustforce/sapper)
  * [[ **⭐ 453 | 👁️ 23 | 🔀 55** ] tomaka/rouille](https://github.com/tomaka/rouille) — Web framework in Rust [<img src="https://api.travis-ci.org/tomaka/rouille.svg?branch=master">](https://travis-ci.org/tomaka/rouille)
  * [[ **⭐ 368 | 👁️ 9 | 🔀 61** ] handlebars-rust](https://github.com/sunng87/handlebars-rust) — an Iron web framework middleware. [<img src="https://api.travis-ci.org/sunng87/handlebars-iron.svg?branch=master">](https://travis-ci.org/sunng87/handlebars-iron)
  * [[ **⭐ 334 | 👁️ 11 | 🔀 45** ] tiny-http](https://github.com/tiny-http/tiny-http) — Low level HTTP server library [<img src="https://api.travis-ci.org/frewsxcv/tiny-http.svg?branch=master">](https://travis-ci.org/frewsxcv/tiny-http)
  * [[ **⭐ 192 | 👁️ 9 | 🔀 35** ] GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) — JSON Web Token implementation in Rust. [<img src="https://api.travis-ci.org/GildedHonour/frank_jwt.svg?branch=master">](https://travis-ci.org/GildedHonour/frank_jwt)
  * [[ **⭐ 162 | 👁️ 11 | 🔀 21** ] snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) — Lightweight stream-based WebSocket implementation for Rust.
  * [[ **⭐ 59 | 👁️ 3 | 🔀 1** ] danclive/sincere](https://github.com/danclive/sincere) — A micro web framework for Rust(stable) based on hyper and multithreading. [<img src="https://api.travis-ci.org/danclive/sincere.svg?branch=master">](https://travis-ci.org/danclive/sincere)
  * [[ **⭐ 47 | 👁️ 5 | 🔀 11** ] actix/sockjs](https://github.com/actix/sockjs) — A [SockJS](https://github.com/sockjs) server for Rust [<img src="https://api.travis-ci.org/actix/sockjs.svg?branch=master">](https://travis-ci.org/actix/sockjs)
  * [[ **⭐ 46 | 👁️ 1 | 🔀 2** ] oltdaniel/zap](https://github.com/oltdaniel/zap) — A lightning fast http framework for Rust [<img src="https://api.travis-ci.org/oltdaniel/zap.svg?branch=master">](https://travis-ci.org/oltdaniel/zap)
  * [[ **⭐ 12 | 👁️ 3 | 🔀 3** ] Saphir](https://github.com/richerarc/saphir) — A progressive web framework with low-level control, without the pain.
  * [[ **⭐ 9 | 👁️ 1 | 🔀 4** ] vityafx/urlshortener-rs](https://github.com/vityafx/urlshortener-rs) [[urlshortener](https://crates.io/crates/urlshortener)] — A very simple urlshortener library for Rust. [<img src="https://api.travis-ci.org/vityafx/urlshortener-rs.svg?branch=master">](https://travis-ci.org/vityafx/urlshortener-rs)
  * [[ **⭐ 4 | 👁️ 1 | 🔀 1** ] cyderize/rust-websocket](https://github.com/cyderize/rust-websocket) — A framework for dealing with WebSocket connections (both clients and servers) [<img src="https://api.travis-ci.org/cyderize/rust-websocket.svg?branch=master">](https://travis-ci.org/cyderize/rust-websocket)
  * [branca](https://crates.io/crates/branca) — A Pure Rust implementation of Branca for Authenticated and Encrypted API tokens. [<img src="https://api.travis-ci.org/return/branca.svg?branch=master">](https://travis-ci.org/return/branca)
  * [Nickel](https://github.com/nickel-org/nickel.rs/) — inspired by [Express](http://expressjs.com/) [<img src="https://api.travis-ci.org/nickel-org/nickel.rs.svg?branch=master">](https://travis-ci.org/nickel-org/nickel.rs)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
* Miscellaneous
  * [[ **⭐ 394 | 👁️ 14 | 🔀 25** ] utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] — A library to extract useful data from HTML documents, suitable for web scraping. [![Build Status](https://api.travis-ci.org/utkarshkukreti/select.rs.svg?branch=master)](https://travis-ci.org/utkarshkukreti/select.rs)
  * [[ **⭐ 174 | 👁️ 18 | 🔀 7** ] cargonauts](https://github.com/cargonauts-rs/cargonauts) — A web framework intended for building maintainable, well-factored web apps.
  * [[ **⭐ 167 | 👁️ 9 | 🔀 18** ] pyros2097/rust-embed](https://github.com/pyros2097/rust-embed) — A macro to embed static assets into the rust binary
* Reverse Proxy
  * [[ **⭐ 815 | 👁️ 43 | 🔀 62** ] sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] — A HTTP reverse proxy. [![Build Status](https://api.travis-ci.org/sozu-proxy/sozu.svg?branch=master)](https://api.travis-ci.org/sozu-proxy/sozu)
* Static Site Generators
  * [[ **⭐ 1904 | 👁️ 44 | 🔀 171** ] getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] — An opinionated static site generator with everything built-in. [![Build Status](https://api.travis-ci.org/getzola/zola.svg?branch=master)](https://travis-ci.org/getzola/zola)
  * [[ **⭐ 738 | 👁️ 25 | 🔀 72** ] cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) — Static site generator written in Rust [<img src="https://api.travis-ci.org/cobalt-org/cobalt.rs.svg?branch=master">](https://travis-ci.org/cobalt-org/cobalt.rs)
  * [[ **⭐ 46 | 👁️ 2 | 🔀 4** ] leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] — A simple, parallelized blog generator. [<img src="https://api.travis-ci.org/leven-the-blog/leven.svg?branch=master">](https://travis-ci.org/leven-the-blog/leven)
  * [[ **⭐ 19 | 👁️ 4 | 🔀 4** ] FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) — Static site generator from markdown files.

## Registries

A registry allows you to publish your Rust libraries as crate packages, to share them with others publicly and privately.

* [Crates](https://crates.io) - The official public registry for Rust/Cargo.
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.io/l/cargo-registry/) - A fully managed package management SaaS, with first-class support for public and private Cargo/Rust registries (plus many others). Has a generous free-tier and is also completely free for open-source.

## Resources

* Benchmarks
  * [[ **⭐ 50 | 👁️ 7 | 🔀 15** ] TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) — Rust implementations for the [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) [<img src="https://api.travis-ci.org/TeXitoi/benchmarksgame-rs.svg?branch=master">](https://travis-ci.org/TeXitoi/benchmarksgame-rs)
* Decks & Presentations
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) — Presented by [Julia Evans](https://twitter.com/@b0rk) @ Rustconf 2016.
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) — Presented by [Michael Gattozzi](https://github.com/mgattozzi) @ RustConf 2017
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) — Presented by [Nicholas Matsakis](https://github.com/nikomatsakis) @ C++Now 2018
* Learning
  * [[ **⭐ 4441 | 👁️ 120 | 🔀 364** ] Rustlings](https://github.com/rust-lang/rustlings) — small exercises to get you used to reading and writing Rust code
  * [[ **⭐ 4364 | 👁️ 243 | 🔀 288** ] rust-learning](https://github.com/ctjhoa/rust-learning) — A collection of useful resources to learn Rust
  * [[ **⭐ 1170 | 👁️ 87 | 🔀 31** ] Idiomatic Rust](https://github.com/mre/idiomatic-rust) —  A peer-reviewed collection of articles/talks/repos which teach idiomatic Rust.
  * [[ **⭐ 1136 | 👁️ 41 | 🔀 32** ] stdx](https://github.com/brson/stdx) — Learn these crates first as an extension to std
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) — A list of recommended resources voted by the programming community.
  * [exercism.io](https://exercism.io/tracks/rust) — programming exercises that help you learn new concepts in Rust.
  * [Learning Rust With Entirely Too Many Linked Lists](http://cglab.ca/~abeinges/blah/too-many-lists/book/) — in-depth exploration of Rust's memory management rules, through implementing a few different types of list structures.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) — A collection of simple examples that demonstrate good practices to accomplish common programming tasks, using the crates of the Rust ecosystem.
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) — A video series by [Carol Nichols](https://github.com/carols10cents) and [Jake Goulding](https://github.com/shepmaster) (paid)
  * [University of Pennsylvania's Comp Sci Rust Programming Course](http://cis198-2016s.github.io/schedule/)
  * [Build a language VM](https://blog.subnetzero.io/post/building-language-vm-part-00/)
* Podcasts
* [[ **⭐ 2344 | 👁️ 183 | 🔀 93** ] Rust Design Patterns](https://github.com/rust-unofficial/patterns)
* [[ **⭐ 561 | 👁️ 42 | 🔀 43** ] RustBooks](https://github.com/sger/RustBooks) — list of RustBooks
  * [New Rustacean](https://newrustacean.com) — A podcast about learning Rust
  * [Rusty Spike](https://rusty-spike.blubrry.net) — news on all things Rust
* [RustCamp 2015 Talks](http://confreaks.tv/events/rustcamp2015)
* [Rust Guidelines](http://aturon.github.io/)
* [Rust Subreddit](https://www.reddit.com/r/rust/) — A subreddit(forum) where rust related questions, articles and resources are posted and discussed

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


---
> STATUSES UPDATED: **2019-05-31 07:36@UTC** *(by [markdown-github-status](https://github.com/eGust/markdown-github-status))*
