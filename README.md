[![Eslint Linter](https://github.com/Linzell/kiro/actions/workflows/linter.yml/badge.svg?branch=master)](https://github.com/Linzell/kiro/actions/workflows/linter.yml) [![.github/workflows/lighthouse.yml](https://github.com/Linzell/kiro/actions/workflows/lighthouse.yml/badge.svg?branch=master)](https://github.com/Linzell/kiro/actions/workflows/lighthouse.yml)

# キロ　A decentralized editor

Project realized for the lives of the channel [Linzellart](https://www.twitch.tv/linzellart) 🎥

Self-hosted text editor, which uses the decentralized network to share data between users.
Allows to co-edit and freeze elements for distribution on the IPFS network.

Let's share knowledge together while keeping control of our data.

## Run the project

You need to have Node v16.19.1 or later intalled to run this repo.

### Node:

#### Start a dev server :

```
pnpm dev
```

#### Build production assets :

```
pnpm build
```

### Tauri:

#### Start a dev server :

```
pnpm tauri:dev
```

#### Build production assets :

```
pnpm tauri:build
```

#### Build release versions :

```
pnpm tauri release
```

### Linter

#### Use the Linter :

```
pnpm linter
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
