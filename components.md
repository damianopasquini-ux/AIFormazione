# Component Guidelines

Guidelines for the **DS Formazione AI** component library, mapped from Figma file `OiikMLxrWLBEdNAV40L6Oi` (page `Components`, node `33:416`).

These rules tell Make *when* to reach for each component, *how* to combine them, and *which* props to set. Follow them instead of inventing new primitives.

---

## 🔴 Kit resolution protocol (READ FIRST — applies to ANY DS kit)

Before writing ANY JSX in a page/screen, Make MUST complete this checklist. Rules are kit-agnostic: apply to `@make-kits/*`, `@company/ds-*`, or any local DS package.

### Step 0 — Discover the kit

1. **Locate kit package.** Search `node_modules/@make-kits/*`, `node_modules/@*/ds-*`, or local paths in `package.json` → `dependencies`. Multiple kits → read each `package.json` `name`.
2. **Read kit `package.json` → `exports` / `main`.** Public entry point. Everything else is internal.
3. **Read entry file** (`dist/index.js` / `src/index.ts`). Enumerate every `export`. That list is the authoritative set of usable components — nothing else.
4. **Read kit `guidelines/` folder in full** before generating. Order: `Guidelines.md` → `setup.md` → `tokens.md` → `styles.md` → `components.md`. No `head`, no truncation.

### Step 1 — Use ONLY kit exports

- ✅ Import from kit's **public entry** (e.g. `import { ProductCard } from '@make-kits/...'`).
- ❌ **NEVER** import from `src/imports/*`, `dist/imports/*`, or any folder named `imports/` inside a kit. Raw Figma snapshots kept for reference only. NOT the component library.
- ❌ **NEVER** import from `src/DsXxx/` internals directly — go through barrel (`index.ts`).
- ❌ **NEVER** copy-paste JSX from raw Figma import into an app file to "replicate" a card.

### Step 2 — Handle missing components explicitly

If Figma component documented below has NO matching export in kit's `index.ts`:

1. **STOP and report.** Output one line: `MISSING_IN_KIT: <FigmaName> — no export found in <kit name>. Options: (a) raw <tag> placeholder with tokens, (b) ask user to add it to kit.`
2. **Do NOT silently import from `imports/*` as fallback.** Exact failure mode these rules prevent.
3. **Do NOT invent wrapper.** Wait for user direction.

### Step 3 — Name matching

Figma names have spaces and underscores; kit exports are PascalCase. Mapping: strip spaces, drop `_`, PascalCase. If export name differs from rule, trust `index.ts`.

| Figma name | Kit export (expected) |
|---|---|
| `Product Carousel_Product Card` | `ProductCarouselProductCard` or curated alias `ProductCard` |
| `Order Summary Card` | `OrderSummaryCard` |
| `TopAppBar` | `TopAppBar` |
| `Text Button` | `TextButton` |

### Step 4 — Coverage table (sync with kit `index.ts` whenever kit changes)

Source of truth = kit `index.ts`, not this doc. Last sync: 2026-04-24 against `@make-kits/dskit-formazione-ai-3-0` v0.0.2.

| Figma component | In kit? | Kit export | Notes |
|---|---|---|---|
| Text Button | ❌ | — | MISSING. |
| Floating Button | ❌ | — | MISSING. |
| TopAppBar | ❌ | — | MISSING. |
| BottomNavBar (+ Button) | ❌ | — | MISSING. |
| Tab Menu (+ Tab) | ❌ | — | MISSING. |
| Artisan Spotlight Card | ❌ | — | MISSING. |
| Product Carousel | ❌ | — | MISSING. |
| Product Carousel_Product Card | ✅ | `ProductCard` | `src/DsFormazioneAi/ProductCard.tsx`. Props: `imageUrl`, `imageAlt?`, `productName`, `price`. |
| Product Specification Card | ❌ | — | MISSING. |
| Order Summary Card (+ Delivery) | ❌ | — | MISSING. |
| Delivery Info Card | ❌ | — | MISSING. |
| Payment Detail Card | ❌ | — | MISSING. |
| Total Expenses Card | ❌ | — | MISSING. |
| Cart Items Card (+ Item) | ❌ | — | MISSING. |
| Newsletter Join Card | ❌ | — | MISSING. |
| Value Card | ❌ | — | MISSING. |
| Input | ❌ | — | MISSING. |
| Search Field | ❌ | — | MISSING. |
| Sub Section Title | ❌ | — | MISSING. |
| Artisan Name Strip | ❌ | — | MISSING. |
| Color Selector | ❌ | — | MISSING. |
| Icons (16×16) | ❌ | — | MISSING — fallback `lucide-react` only if user allows. |

### Step 5 — Tokens before components

CSS tokens (`var(--text-*)`, `var(--bg-*)`, `var(--space-*)`, `var(--radius-*)`) must load via kit stylesheet (`@import "<kit>/style.css"` — see `setup.md`). No import = unstyled render. Verify: `cat node_modules/<kit>/dist/style.css | grep -E "--(text|bg|space|radius)-"` before generating code.

### Anti-patterns (refuse on sight)

- `import ... from '.../imports/...'` → REFUSE. Explain rule.
- Inline `<div>` re-implementation of documented Figma component → REFUSE. Kit export or MISSING report.
- Hard-coded hex/px instead of kit tokens → REFUSE.
- Second kit added without reading its guidelines → STOP and read.

### Pre-flight checklist (run before ANY generation)

- [ ] Located kit package(s) in `node_modules` / local.
- [ ] Read kit `package.json` exports.
- [ ] Listed all exports from kit `index.ts` — pasted into context.
- [ ] Read all `guidelines/*.md` in full.
- [ ] Confirmed `@import "<kit>/style.css"` is in `src/styles/index.css`.
- [ ] Coverage table above is current (re-run Step 0 if kit bumped version).

---

## Global rules

- **Mobile-first, 342px content width.** Most cards and forms are laid out for a 390px viewport with 24px horizontal padding (content ≈ 342px wide). Top/Bottom bars run edge-to-edge at 430px.
- **Icons are 16×16.** All icons in this DS render at 16×16. Never scale inline — wrap in a button or chip if you need a larger hit target.
- **Section order on a screen.** `TopAppBar` → content (cards / carousels / forms) → `BottomNavBar`. Never stack two bars of the same type.
- **Card pairs (`Parent` + `Parent_Child`).** When a card name contains an underscore suffix (e.g. `Order Summary Card_Delivery Info Card`), the child component only renders *inside* its parent. Do not use the child standalone.
- **Never duplicate.** If a component already exists for the purpose below, use it — do not build a bespoke `<div>` variant.

---

## Buttons

### Text Button

- **Usage.** Primary action trigger anywhere in the app — CTAs in cards, form submits, inline links. Default button; use before considering any other button type.
- **Semantic purpose.** Represents a single user action. The `Type` variant encodes hierarchy (Primary > Secondary > ghost > Sleek / Sleek Underline).
- **Examples.**
  - ✅ "Add to cart" → `Type=Filled Primary`, icon Sx = `shopping-bag`.
  - ✅ Inline link inside a paragraph → `Type=Sleek Underline`.
  - ❌ Do NOT use `Filled Primary` twice in the same card — only one primary action per surface.
  - ❌ Do NOT put two buttons with icons on both sides; keep one side only unless the label is ≥ 2 words.
- **API.**
  - `Type`: `Filled Primary` | `Filled Secondary` | `ghost` | `Sleek` | `Sleek Underline` (default `Filled Primary`)
  - `Label#5:12` (TEXT, default `Button Label`)
  - `Show Icon Sx#5:2` (BOOLEAN, default `true`)
  - `Show Icon Dx#5:5` (BOOLEAN, default `true`)
  - `Swap Icon Sx#16:32` (INSTANCE_SWAP, default `shopping-bag`)
  - `Swap Icon Dx#16:38` (INSTANCE_SWAP, default `arrow-dx`)
  - Size: 239×42 (fills container up to that width).

### Floating Button

- **Usage.** Screen-level secondary action that must stay reachable while scrolling — e.g. "Scroll to top", "Open chat". Only one per screen.
- **Semantic purpose.** Persistent, non-contextual shortcut. Not a CTA.
- **Examples.**
  - ✅ Pinned 24px from bottom-right, above `BottomNavBar`.
  - ❌ Do NOT use it as the main submit button of a form — that is `Text Button / Filled Primary`.
- **API.** No props. Fixed size 56×56, circular.

---

## Navigation

### TopAppBar

- **Usage.** Top of every screen. `Type=Main` for home-level screens (logo + nav actions); `Type=Internal` for inner screens (back button + title).
- **Semantic purpose.** Global navigation anchor. Communicates where the user is and gives an escape hatch (back / menu).
- **Examples.**
  - ✅ Product detail page → `Type=Internal`, `Show Button Sx=true` (back), `Show Button Dx=true` (share / cart).
  - ✅ Home page → `Type=Main`, both buttons visible.
  - ❌ Do NOT hide both buttons on `Internal` — the back affordance is required.
- **API.**
  - `Type`: `Main` | `Internal` (default `Main`)
  - `Show Button Sx#25:3` (BOOLEAN, default `true`)
  - `Show Button Dx#25:0` (BOOLEAN, default `true`)
  - Size: 430×60 per variant.

### BottomNavBar

- **Usage.** Bottom of every screen. Variant depends on context:
  - `Type=Navigation` — default browsing (4 tabs).
  - `Type=Product` — product detail screens (price + CTA).
  - `Type=Cart` — cart / checkout (total + checkout CTA).
- **Semantic purpose.** Persistent global affordance. Switches modes based on the task, never hidden.
- **Examples.**
  - ✅ PDP screen → `Type=Product`.
  - ❌ Do NOT stack a `Text Button` CTA above `BottomNavBar/Navigation` — switch variant to `Product` or `Cart` instead.
- **API.**
  - `Type`: `Cart` | `Navigation` | `Product` (default `Cart`)
  - Size: 430×90.

### BottomNavBar_Button

- **Usage.** Only inside `BottomNavBar/Type=Navigation`. One button per tab. Always used as a set of four (`Curated`, `Artist`, `Archive`, `Account`).
- **Semantic purpose.** Represents a top-level app section. The `Status` variant shows which section is active.
- **Examples.**
  - ✅ Exactly one button in `Status=Active` at a time; the rest `Idle`.
  - ❌ Do NOT reorder, rename, or add a fifth tab — if more entries needed, use a menu drawer, not this component.
- **API.**
  - `Type`: `Curated` | `Artist` | `Archive` | `Account` (default `Curated`)
  - `Status`: `Active` | `Idle` (default `Active`)
  - Size: 80×58.

### Tab Menu

- **Usage.** In-page tab navigation between sibling views (e.g. "Description / Reviews / Shipping" on a PDP).
- **Semantic purpose.** Lateral switching within one scope — NOT for global navigation (that's `BottomNavBar`).
- **Examples.**
  - ✅ Under a product hero, to switch body sections.
  - ❌ Do NOT use to route between unrelated screens.
- **API.** No variant props; renders a row of `Tab Menu_Tab` children. Size 342×72.

### Tab Menu_Tab

- **Usage.** Only inside `Tab Menu`. One per tab.
- **Semantic purpose.** Single selectable tab.
- **Examples.**
  - ✅ Exactly one `Active`; the rest `Idle`.
- **API.**
  - `Property 1`: `Active` | `Idle` (default `Active`)
  - Size: 109×64.

---

## Boxes & Cards

### Artisan Spotlight Card

- **Usage.** Editorial card on the home / curated feed to promote an artisan. Full-width, image-heavy.
- **Semantic purpose.** Hero-style promo block. One per feed section.
- **Examples.**
  - ✅ Placed after `Sub Section Title = "Featured artisan"`.
  - ❌ Do NOT use for listing multiple artisans — use `Product Carousel` instead.
- **API.** No props. Size 342×454.

### Product Specification Card

- **Usage.** PDP body — materials, dimensions, provenance.
- **Semantic purpose.** Structured static facts about a product.
- **Examples.**
  - ✅ Exactly one per PDP.
  - ❌ Do NOT use for CTAs or pricing (use `BottomNavBar/Type=Product`).
- **API.** No props. Size 342×206.

### Order Summary Card

- **Usage.** Checkout / order detail screen. Parent card that contains delivery address block.
- **Semantic purpose.** Groups all order meta (address, ETA, items count) in one place.
- **Examples.**
  - ✅ Renders `Order Summary Card_Delivery Info Card` as its inner block.
- **API.** No props. Size 342×639.

### Order Summary Card_Delivery Info Card

- **Usage.** Only inside `Order Summary Card`. Never standalone.
- **Semantic purpose.** Shipping address + ETA row.
- **API.** No props. Size 278×74.

### Delivery Info Card

- **Usage.** Standalone delivery panel on cart / tracking screens (distinct from the nested one inside `Order Summary Card`).
- **Semantic purpose.** Shipping status without the full order summary context.
- **Examples.**
  - ✅ Cart pre-checkout preview.
  - ❌ Do NOT use inside `Order Summary Card` — that slot uses `Order Summary Card_Delivery Info Card`.
- **API.** No props. Size 342×180.

### Payment Detail Card

- **Usage.** Checkout screen, between order summary and CTA. Shows payment method + last 4.
- **Semantic purpose.** Payment surface. Usually paired with `credit-card` icon.
- **API.** No props. Size 342×238.

### Total Expenses Card

- **Usage.** Cart / checkout recap. Subtotal, shipping, tax, total.
- **Semantic purpose.** Money breakdown. Always the last card before the checkout CTA.
- **Examples.**
  - ✅ Pair with `BottomNavBar/Type=Cart` so the final total appears twice for reassurance.
- **API.** No props. Size 342×221.

### Cart Items Card

- **Usage.** Cart screen. Parent card listing the purchased items.
- **Semantic purpose.** Container for the cart line items.
- **API.** No props. Size 342×333.

### Cart Items Card_Item

- **Usage.** Only inside `Cart Items Card`. One per product in the cart.
- **Semantic purpose.** Single line item with thumbnail, title, qty, price.
- **API.** No props. Size 278×103.

### Newsletter Join Card

- **Usage.** End of home / editorial screens. Prompts email signup.
- **Semantic purpose.** Promotional capture. Only one per screen.
- **Examples.**
  - ✅ Contains an `Input` (email) + `Text Button / Filled Primary` ("Join").
  - ❌ Do NOT place above the fold — it's a closing CTA.
- **API.** No props. Size 342×380.

### Value Card

- **Usage.** Editorial blocks that explain brand values / selling points. Used in pairs/triples on the home.
- **Semantic purpose.** Marketing tile.
- **Examples.**
  - ✅ Use `Property 1=Dark` on light sections and `Light` on dark sections for contrast.
  - ❌ Do NOT mix both variants in the same horizontal row.
- **API.**
  - `Property 1`: `Light` | `Dark` (default `Light`)
  - Size: 163×239 per variant.

---

## Form & Fields

### Input

- **Usage.** All text inputs. Supports optional label and leading icon.
- **Semantic purpose.** Single-line text entry. For search use `Search Field` instead.
- **Examples.**
  - ✅ Email field in `Newsletter Join Card` → `Show Label=false`, `Show Icon=true` (`email`).
  - ✅ Address form → `Show Label=true`, `Show Icon=false`.
  - ❌ Do NOT disable both `Show Label` and `Show Icon` without providing a placeholder.
- **API.**
  - `Show Label#5:0` (BOOLEAN, default `true`)
  - `Show Icon#5:1` (BOOLEAN, default `true`)
  - Size: 342×70.

### Search Field

- **Usage.** Dedicated search bar on list / catalog screens. Distinct from `Input`.
- **Semantic purpose.** Query entry with search-specific affordances (leading search icon, inline submit).
- **Examples.**
  - ✅ Under `TopAppBar/Type=Main` on catalog screens.
  - ❌ Do NOT use `Input` with a `search` icon as a substitute — the behaviour and styling differ.
- **API.** No props. Size 342×52.

---

## Media

### Product Carousel

- **Usage.** Home / category pages to list products horizontally.
- **Semantic purpose.** Horizontally-scrollable product collection with a section title.
- **Examples.**
  - ✅ Precede with `Sub Section Title` ("New arrivals", "Trending").
  - ❌ Do NOT use for a single product — promote it with `Artisan Spotlight Card` instead.
- **API.** No props. Size 816×320; renders `Product Carousel_Product Card` children.

### Product Carousel_Product Card

- **Usage.** Only inside `Product Carousel`. Minimum 2 per carousel.
- **Semantic purpose.** Product preview tile (image + name + price).
- **API.** No props. Size 256×320.

---

## Uncategorized

### Sub Section Title

- **Usage.** Section header on any scrollable screen (home, PDP body, etc.).
- **Semantic purpose.** Groups the content below under a short label; establishes visual rhythm.
- **Examples.**
  - ✅ Above every `Product Carousel` and editorial card block.
  - ❌ Do NOT use as the screen title — that's the `TopAppBar` slot.
- **API.** No props. Size 390×42.

### Artisan Name Strip

- **Usage.** Inline credit line on product cards or editorial blocks ("by {artisan name}").
- **Semantic purpose.** Attribution. Never a link target on its own.
- **API.** No props. Size 342×32.

### Color Selector

- **Usage.** PDP — pick a colour variant of the product.
- **Semantic purpose.** Swatch picker. One selected state at a time.
- **API.** No props. Size 120×32.

---

## Icons

16×16 SVG components. Use as leaf nodes inside buttons, inputs, list rows. Never scale above 16×16 — wrap in a button if you need a larger tap target.

| Name | ID | Typical usage |
|---|---|---|
| `search` | `16:1161` | `Search Field` leading icon, `TopAppBar` action |
| `hamburger-menu` | `16:1162` | `TopAppBar` menu action |
| `share` | `16:1188` | `TopAppBar/Internal` Dx action |
| `arrow-sx` | `16:1189` | Back button in `TopAppBar/Internal` |
| `arrow-dx` | `16:396` | `Text Button` trailing icon (default) |
| `shopping-bag` | `16:395` | `Text Button` leading icon for "Add to cart" (default) |
| `shopping-bag-full` | `16:393` | `BottomNavBar/Cart` active state |
| `wishlist` | `16:586` | Product card / PDP wishlist toggle |
| `email` | `16:394` | `Input` leading icon for email field |
| `credit-card` | `18:146` | `Payment Detail Card` leading icon |
| `settings` | `18:134` | Account screens |

Rules:
- **Always use the DS icon component** — never an inline `<svg>` or emoji.
- **Icons don't carry colour variants.** Colour is applied by the parent component (button state, nav state).
- **Default icon swap for `Text Button`:** Sx = `shopping-bag`, Dx = `arrow-dx`. Override via `Swap Icon Sx` / `Swap Icon Dx` props.

---

## Composition cheat-sheet

Typical screens to use as anchors when Make assembles UI:

- **Home.** `TopAppBar/Main` → `Sub Section Title` → `Artisan Spotlight Card` → `Sub Section Title` → `Product Carousel` → `Value Card` × N → `Newsletter Join Card` → `BottomNavBar/Navigation`.
- **PDP.** `TopAppBar/Internal` → product hero → `Color Selector` → `Tab Menu` + `Product Specification Card` → `Artisan Name Strip` → `BottomNavBar/Product`.
- **Cart.** `TopAppBar/Internal` → `Cart Items Card` → `Delivery Info Card` → `Total Expenses Card` → `BottomNavBar/Cart`.
- **Checkout.** `TopAppBar/Internal` → `Order Summary Card` (with nested `_Delivery Info Card`) → `Payment Detail Card` → `Text Button/Filled Primary` ("Pay now").
- **Search / catalog.** `TopAppBar/Main` → `Search Field` → `Product Carousel` × N → `BottomNavBar/Navigation`.

If the target layout doesn't fit one of the above, check whether you're reinventing an existing card before adding new markup.
