import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
export interface ButtonProps extends ButtonVariantProps {
  label: string;
  className?: string;
}

const ButtonVariants = cva(
  "h-fit text-white uppercase transition-colors duration-150",
  {
    variants: {
      intent: {
        primary: "bg-green-500 hover:bg-green-600",
        secondary: "bg-red-500 hover:bg-red-600",
        default: "bg-gray-500 hover:bg-gray-600",
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
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

export default function Button({
  intent,
  size,
  roundness,
  label,
  className,
}: ButtonProps) {
  return (
    <button
      className={`${twMerge(
        ButtonVariants({ intent, size, roundness })
      )} ${className}`}
    >
      {label}
    </button>
  );
}
