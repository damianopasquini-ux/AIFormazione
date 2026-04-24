import { Input } from "../Input";
import { IconCreditCard } from "../icons";

export interface PaymentDetailCardProps {
  className?: string;
  onChange?: (field: "card" | "expiry" | "cvv", value: string) => void;
}

export function PaymentDetailCard({ className, onChange }: PaymentDetailCardProps) {
  return (
    <section
      aria-label="Payment details"
      className={[
        "flex w-[342px] max-w-full flex-col items-start gap-[32px] p-[32px]",
        "rounded-[8px] border border-[var(--color-border-default)] bg-[var(--color-bg-default)]",
        className ?? "",
      ].join(" ")}
    >
      <Input
        label="Card Number"
        placeholder="Your infos"
        iconEnd={<IconCreditCard className="size-[14px]" />}
        inputMode="numeric"
        autoComplete="cc-number"
        containerClassName="w-full"
        onChange={(e) => onChange?.("card", e.currentTarget.value)}
      />
      <div className="flex w-full items-start gap-[24px]">
        <Input
          label="Expiry Date"
          placeholder="MM/YY"
          inputMode="numeric"
          autoComplete="cc-exp"
          containerClassName="flex-1 w-auto"
          onChange={(e) => onChange?.("expiry", e.currentTarget.value)}
        />
        <Input
          label="CVV"
          placeholder="•••"
          inputMode="numeric"
          autoComplete="cc-csc"
          containerClassName="flex-1 w-auto"
          onChange={(e) => onChange?.("cvv", e.currentTarget.value)}
        />
      </div>
    </section>
  );
}
