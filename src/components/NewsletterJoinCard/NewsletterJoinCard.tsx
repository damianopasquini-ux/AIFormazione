import { type FormEvent, useState } from "react";
import { TextButton } from "../TextButton";

export interface NewsletterJoinCardProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  placeholder?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export function NewsletterJoinCard({
  title = "Join the\nCollective",
  description = "Receive early access to seasonal drops and stories from the kiln. No noise, just craftsmanship.",
  ctaLabel = "Subscribe",
  placeholder = "Email Address",
  onSubmit,
  className,
}: NewsletterJoinCardProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section
      className={[
        "relative flex flex-col items-center justify-center overflow-hidden",
        "rounded-[8px] bg-[var(--color-bg-neutral-tertiary)] p-[48px]",
        className ?? "",
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className="absolute -top-[82px] -left-[48px] size-[256px] rounded-[12px] bg-[var(--color-bg-default-tertiary)]/20"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[68px] -right-[48px] size-[192px] rounded-[12px] bg-[var(--color-bg-brand-secondary)]/10"
      />

      <div className="relative z-10 flex w-[246px] max-w-full flex-col items-start gap-[16px]">
        <div className="flex w-full flex-col items-center gap-[16px] text-center">
          <h3 className="heading-serif text-[32px] text-[var(--color-text-default)] whitespace-pre-line w-full">
            {title}
          </h3>
          <p className="text-[16px] leading-[1.5] text-[var(--color-text-default-secondary)]">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[16px]">
          <label className="sr-only" htmlFor="newsletter-email">
            {placeholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="flex h-[52px] w-full items-center bg-[var(--color-bg-default)] px-[12px] py-[12px] text-[16px] leading-[1.5] outline-none text-[var(--color-text-default)] placeholder:text-[var(--color-text-neutral-on-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--color-bg-brand)]"
          />
          <TextButton
            type="submit"
            variant="filled-primary"
            label={ctaLabel}
            showIconStart={false}
            showIconEnd={false}
            fullWidth
          />
        </form>
      </div>
    </section>
  );
}
