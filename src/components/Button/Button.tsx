import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
export interface ButtonProps extends ButtonVariantProps {
  children: JSX.Element | React.ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  type?: "button" | "reset" | "submit";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  loadingIcon: JSX.Element | React.ReactNode
}

const ButtonVariants = cva(
  "h-fit w-[100%] transition-colors ease-linear delay-150",
  {
    variants: {
      intent: {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
      },

      style: {
        filled: "bg-teal-primary hover:bg-teal-hover",
        outlined: "border border-teal-primary hover:bg-teal-primary",
      },

      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },

      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },

      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "medium",
      roundness: "round",
    },
  }
);

export default function Button({
  children,
  intent,
  size,
  roundness,
  style,
  className,
  disabled,
  ariaLabel,
  ariaDescribedBy,
  type="button",
  onClick,
  loading,

}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      type={type}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${twMerge(
        ButtonVariants({ intent, size, roundness, style, disabled })
      )} ${className} justify-center items-center gap-1 flex`}
    >
      {loading && (
          <Spinner  />
      )}
      {children}
    </button>
  );
}
