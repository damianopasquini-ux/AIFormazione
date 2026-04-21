# AIFormazione

Progetto web per contenuti formativi AI, compatibile con flusso Figma Make.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4 (plugin `@tailwindcss/vite`)

## Setup

```bash
npm install
npm run dev
```

Dev server: `http://localhost:5173`

## Scripts

| Comando | Cosa fa |
|---------|---------|
| `npm run dev` | Avvia dev server con HMR |
| `npm run build` | Build produzione in `dist/` |
| `npm run preview` | Preview della build |
| `npm run lint` | ESLint |

## Struttura

```
src/
  App.tsx       # root component
  main.tsx      # entry point
  index.css     # Tailwind import
  assets/       # asset statici
public/         # file serviti as-is
```

## Figma Make

Il codice generato da Figma Make (React + TS + Tailwind v4) si incolla direttamente in `src/`. Tailwind v4 usa `@import "tailwindcss"` in `index.css` — stessa convenzione di Figma Make export.

## License

Private.
