# microgpt anime

> Visualiseur pedagogique GPT — apprendre les transformers en les voyant fonctionner.

<!-- @todo: mettre a jour quand WASM integre -->

Application web interactive pour visualiser et comprendre le fonctionnement des modeles GPT pas a pas. L'interface est en React/TypeScript. Le moteur ML sera fourni par [microgpt-rs](https://github.com/mon-atelier-ia/microgpt-rs) compile en WebAssembly (en cours).

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

| Couche    | Technologie                                  |
| --------- | -------------------------------------------- |
| Moteur ML | Rust (microgpt-rs) compile en WASM (a venir) |
| Frontend  | React 19, TypeScript, Vite                   |
| Linting   | ESLint, Prettier                             |
| Tests     | Vitest                                       |

## Licence

MIT

---

<p align="center">
  Par <a href="https://github.com/mon-atelier-ia">mon-atelier-ia</a>
</p>
