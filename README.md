# microgpt anime

> Visualiseur pedagogique GPT avec moteur Rust/WASM — apprendre les transformers en les voyant fonctionner.

Application web interactive pour visualiser et comprendre le fonctionnement des modeles GPT pas a pas. Le moteur ML tourne en Rust compile en WebAssembly, l'interface en React/TypeScript.

## Origine

Ce projet combine :

- **[microgpt-rs](https://github.com/mon-atelier-ia/microgpt-rs)** — moteur ML en Rust pur (port fidele de [Karpathy's microgpt.py](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95))
- **[microgpt-visualizer-fr](https://github.com/mon-atelier-ia/microgpt-visualizer-fr)** — UI pedagogique en francais (fork de [enescang/microgpt-visualizer](https://github.com/enescang/microgpt-visualizer))

Ce n'est ni un fork ni une localisation — c'est un projet original qui assemble le meilleur des deux.

## Demarrage rapide

```bash
git clone https://github.com/mon-atelier-ia/microgpt-anime.git
cd microgpt-anime
pnpm install
pnpm dev
```

## Stack

| Couche    | Technologie                        |
| --------- | ---------------------------------- |
| Moteur ML | Rust (microgpt-rs) compile en WASM |
| Frontend  | React 19, TypeScript, Vite         |
| Linting   | ESLint, Prettier                   |
| Tests     | Vitest                             |

## Licence

MIT

---

<p align="center">
  Par <a href="https://github.com/mon-atelier-ia">mon-atelier-ia</a>
</p>
