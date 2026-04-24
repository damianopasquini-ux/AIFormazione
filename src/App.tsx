import { useState } from "react";

import { TextButton } from "./components/TextButton";
import { FloatingButton } from "./components/FloatingButton";
import { TopAppBar } from "./components/TopAppBar";
import { BottomNavBar } from "./components/BottomNavBar";
import {
  BottomNavBarButton,
  type BottomNavBarButtonType,
} from "./components/BottomNavBar/BottomNavBarButton";
import { TabMenu } from "./components/TabMenu";
import { SearchField } from "./components/SearchField";
import { Input } from "./components/Input";
import { ColorSelector } from "./components/ColorSelector";
import { ArtisanNameStrip } from "./components/ArtisanNameStrip";
import { SubSectionTitle } from "./components/SubSectionTitle";
import { ValueCard } from "./components/ValueCard";
import { ProductSpecificationCard } from "./components/ProductSpecificationCard";
import { DeliveryInfoCard } from "./components/DeliveryInfoCard";
import { TotalExpensesCard } from "./components/TotalExpensesCard";
import { PaymentDetailCard } from "./components/PaymentDetailCard";
import { NewsletterJoinCard } from "./components/NewsletterJoinCard";
import { ArtisanSpotlightCard } from "./components/ArtisanSpotlightCard";
import { ProductCard } from "./components/ProductCard";
import { ProductCarousel } from "./components/ProductCarousel";
import { CartItemsCard } from "./components/CartItemsCard";
import { OrderSummaryCard } from "./components/OrderSummaryCard";

import product1 from "./assets/figma/product-1.png";
import product2 from "./assets/figma/product-2.png";
import product3 from "./assets/figma/product-3.png";
import cartItem1 from "./assets/figma/cart-item-1.png";
import cartItem2 from "./assets/figma/cart-item-2.png";
import orderItem1 from "./assets/figma/order-item-1.png";
import orderItem2 from "./assets/figma/order-item-2.png";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full flex-col gap-[24px]">
      <h2 className="heading-serif text-[32px] text-[var(--color-text-default)] border-b border-[var(--color-border-default)] pb-[8px]">
        {title}
      </h2>
      <div className="flex flex-wrap items-start gap-[32px]">{children}</div>
    </section>
  );
}

function Tile({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col gap-[12px] rounded-[8px] border border-[var(--color-border-neutral-secondary)] p-[24px] bg-[var(--color-bg-default)]",
        full ? "w-full" : "",
      ].join(" ")}
    >
      <span className="label-all-caps-sm text-[var(--color-text-default-secondary)]">
        {label}
      </span>
      <div className="flex items-start justify-start">{children}</div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("new");
  const [activeNav, setActiveNav] =
    useState<BottomNavBarButtonType>("curated");
  const [activeColor, setActiveColor] = useState("clay");

  return (
    <main className="min-h-screen bg-[var(--color-bg-default)] px-[24px] py-[48px] md:px-[48px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[64px]">
        <header className="flex flex-col gap-[8px]">
          <span className="label-all-caps-sm text-[var(--color-text-brand-secondary)]">
            Formazione-AI / Design System
          </span>
          <h1 className="heading-serif text-[48px] text-[var(--color-text-default)]">
            Component Gallery
          </h1>
          <p className="text-[16px] leading-[1.5] text-[var(--color-text-default-secondary)] max-w-[720px]">
            Vite 6 + React 19 + Tailwind CSS v4. Tokens, icons, and components
            generated from Figma via the super-hero-figma workflow.
          </p>
        </header>

        <Section title="Buttons">
          <Tile label="TextButton — filled-primary">
            <TextButton label="Add to cart" />
          </Tile>
          <Tile label="TextButton — filled-secondary">
            <TextButton label="Secondary" variant="filled-secondary" />
          </Tile>
          <Tile label="TextButton — ghost">
            <TextButton label="Ghost" variant="ghost" />
          </Tile>
          <Tile label="TextButton — sleek">
            <TextButton label="Explore all" variant="sleek" />
          </Tile>
          <Tile label="TextButton — sleek-underline">
            <TextButton label="Meet the maker" variant="sleek-underline" />
          </Tile>
          <Tile label="FloatingButton">
            <FloatingButton label="Open cart" />
          </Tile>
        </Section>

        <Section title="Navigation">
          <Tile label="TopAppBar — main" full>
            <TopAppBar variant="main" title="Curated" />
          </Tile>
          <Tile label="TopAppBar — internal" full>
            <TopAppBar variant="internal" title="Product Detail" />
          </Tile>
          <Tile label="BottomNavBar — navigation" full>
            <BottomNavBar
              variant="navigation"
              activeNavType={activeNav}
              onNavClick={setActiveNav}
            />
          </Tile>
          <Tile label="BottomNavBar — cart" full>
            <BottomNavBar variant="cart" />
          </Tile>
          <Tile label="BottomNavBar — product" full>
            <BottomNavBar variant="product" />
          </Tile>
          <Tile label="BottomNavBarButton — active">
            <BottomNavBarButton type="curated" status="active" />
          </Tile>
          <Tile label="BottomNavBarButton — idle">
            <BottomNavBarButton type="artist" status="idle" />
          </Tile>
          <Tile label="TabMenu" full>
            <TabMenu
              items={[
                { id: "new", label: "New Arrivals" },
                { id: "best", label: "Bestsellers" },
                { id: "sale", label: "Sale" },
              ]}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </Tile>
        </Section>

        <Section title="Form & Fields">
          <Tile label="SearchField">
            <SearchField />
          </Tile>
          <Tile label="Input">
            <Input label="First Name" placeholder="Your infos" />
          </Tile>
          <Tile label="ColorSelector">
            <ColorSelector
              swatches={[
                { id: "clay", color: "#c2a18a", label: "Clay" },
                { id: "moss", color: "#6a7a5a", label: "Moss" },
                { id: "ink", color: "#2f2a26", label: "Ink" },
                { id: "bone", color: "#efe7dc", label: "Bone" },
              ]}
              activeId={activeColor}
              onChange={setActiveColor}
            />
          </Tile>
        </Section>

        <Section title="Boxes & Cards">
          <Tile label="ArtisanNameStrip">
            <ArtisanNameStrip
              artisanName="Mara Belli"
              href="#"
            />
          </Tile>
          <Tile label="SubSectionTitle" full>
            <SubSectionTitle
              title="New Arrivals"
              actionLabel="Explore All"
            />
          </Tile>
          <Tile label="ValueCard — light">
            <ValueCard
              title={"Hand\nCrafted"}
              description="Each piece is made by hand in small batches."
              theme="light"
            />
          </Tile>
          <Tile label="ValueCard — dark">
            <ValueCard
              title={"Slow\nShipping"}
              description="We ship when it's ready, never before."
              theme="dark"
            />
          </Tile>
          <Tile label="ProductSpecificationCard">
            <ProductSpecificationCard
              items={[
                { label: "Material", value: "Stoneware" },
                { label: "Dimensions", value: "18 × 12 cm" },
                { label: "Finish", value: "Matte glaze" },
                { label: "Care", value: "Hand wash" },
              ]}
            />
          </Tile>
          <Tile label="DeliveryInfoCard">
            <DeliveryInfoCard
              addressLines={[
                "Mara Belli",
                "Via delle Ceramiche 24",
                "50100 Firenze, IT",
                "+39 055 123 4567",
              ]}
            />
          </Tile>
          <Tile label="TotalExpensesCard">
            <TotalExpensesCard
              lines={[
                { label: "Subtotal", amount: "€ 180,00" },
                { label: "Shipping", amount: "€ 12,00" },
                { label: "Tax", amount: "€ 21,60" },
              ]}
              totalAmount="€ 213,60"
            />
          </Tile>
          <Tile label="PaymentDetailCard">
            <PaymentDetailCard />
          </Tile>
          <Tile label="NewsletterJoinCard">
            <NewsletterJoinCard
              onSubmit={(email) => console.log("Subscribe:", email)}
            />
          </Tile>
          <Tile label="ArtisanSpotlightCard">
            <ArtisanSpotlightCard
              name="Mara Belli"
              quote="I shape clay the way my grandmother taught me — one breath at a time."
            />
          </Tile>
        </Section>

        <Section title="Media">
          <Tile label="ProductCard">
            <ProductCard
              title="Terracotta Vessel"
              priceLabel="€ 120"
              imageSrc={product1}
              artisanName="Mara Belli"
              artisanHref="#"
            />
          </Tile>
          <Tile label="ProductCarousel" full>
            <ProductCarousel
              title="New Arrivals"
              ctaLabel="View all"
              products={[
                {
                  title: "Terracotta Vessel",
                  priceLabel: "€ 120",
                  imageSrc: product1,
                  artisanName: "Mara Belli",
                },
                {
                  title: "Stoneware Jar",
                  priceLabel: "€ 95",
                  imageSrc: product2,
                  artisanName: "Luca Conti",
                },
                {
                  title: "Glazed Bowl",
                  priceLabel: "€ 70",
                  imageSrc: product3,
                  artisanName: "Ines Ruggeri",
                },
              ]}
            />
          </Tile>
          <Tile label="CartItemsCard">
            <CartItemsCard
              items={[
                {
                  title: "Terracotta Vessel",
                  priceLabel: "€ 120",
                  quantityLabel: "Qty 1",
                  imageSrc: cartItem1,
                },
                {
                  title: "Stoneware Jar",
                  priceLabel: "€ 95",
                  quantityLabel: "Qty 2",
                  imageSrc: cartItem2,
                },
              ]}
            />
          </Tile>
          <Tile label="OrderSummaryCard">
            <OrderSummaryCard
              orderLabel="Order #A2401"
              items={[
                {
                  title: "Terracotta Vessel",
                  priceLabel: "€ 120",
                  quantityLabel: "Qty 1",
                  imageSrc: orderItem1,
                },
                {
                  title: "Glazed Bowl",
                  priceLabel: "€ 70",
                  quantityLabel: "Qty 1",
                  imageSrc: orderItem2,
                },
              ]}
              delivery={{
                message:
                  "Ships in 3–5 business days from Florence, IT. Tracking included.",
              }}
              totalValue="€ 213,60"
            />
          </Tile>
        </Section>
      </div>
    </main>
  );
}

export default App;
