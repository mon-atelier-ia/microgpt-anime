> **Note:** `CLAUDE.md` is a copy of this file. `AGENTS.md` is the source of truth — edit this file, then copy to `CLAUDE.md`.

## Project

**microgpt anime** — visualiseur pedagogique GPT avec moteur Rust/WASM.

Combines:

- UI from microgpt-visualizer-fr (React/Vite/TS)
- ML engine from microgpt-rs (Rust, compiled to WASM)

## Stack

| Tool                | Purpose              |
| ------------------- | -------------------- |
| React 19            | UI framework         |
| TypeScript (strict) | Frontend language    |
| Vite 7              | Build & dev server   |
| Vitest              | Tests                |
| ESLint + Prettier   | Linting & formatting |
| Husky + lint-staged | Git hooks            |
| Rust + wasm-bindgen | ML engine (WASM)     |

## Scripts

```bash
pnpm dev          # Dev server (localhost:5173)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm lint:fix     # Auto-fix
pnpm test         # Vitest
pnpm check        # Full validation: lint + build + tests
```

## Key Rules

- **Always document findings** in `docs/` before acting on them.
- UI code from microgpt-visualizer-fr — engine/ directory is replaced by WASM.
- ML engine lives in microgpt-rs, not here. This project consumes it via WASM.

## Git Rules — STRICT

- NEVER run `git push` without explicit user request
- NEVER run destructive git commands
- Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `style:`, `chore:`, `docs:`

## Git Hooks

Pre-commit: `pnpm exec lint-staged`
Pre-push: `pnpm check`
