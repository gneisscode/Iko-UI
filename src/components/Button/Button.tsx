import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";
import { ScaleX } from "../../animations";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
export interface ButtonProps extends ButtonVariantProps {
  children?: JSX.Element | React.ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  spring?: boolean
}

const ButtonVariants = cva(
  "h-fit w-[100%] transition-colors ease-linear delay-150 transform bg-teal-primary",
  {
    variants: {
      intent: {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
      },

      ripple: {
        true: "ripple-bg-gray-300",
        false: "",
      },

      style: {
        filled:
          "bg-teal-primary border-[2.5px] border-teal-primary hover:border-teal-hover hover:bg-teal-hover active:bg-background-neutral active:text-text-secondary active:border-black",
        outlined:
          "border-[2.5px] bg-white border-teal-primary hover:border-teal-hover active:bg-background-neutral active:text-text-secondary active:border-black",

        danger: "bg-system-alert hover:bg-system-error-hover",
        success: " bg-system-success hover:bg-system-success-hover"
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
      style: "filled",
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
  ripple,
  spring,

}: ButtonProps) {
  return spring && !disabled ? (
    <ScaleX>
      <button
        onClick={onClick}
        disabled={(disabled && disabled) || loading}
        type={type}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        className={`${twMerge(
          ButtonVariants({
            intent,
            size,
            roundness,
            style,
            disabled,
            ripple,
            className,
          }),
          "justify-center items-center gap-1 flex"
        )}`}
      >
        {loading && <Spinner />}
        {children}
      </button>
    </ScaleX>
  ) : (
    <button
      onClick={onClick}
      disabled={(disabled && disabled) || loading}
      type={type}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${twMerge(
        ButtonVariants({
          intent,
          size,
          roundness,
          style,
          disabled,
          ripple,
          className,
        }),
        "justify-center items-center gap-1 flex"
      )}`}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
