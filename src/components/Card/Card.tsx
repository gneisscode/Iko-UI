import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type CardVariantProps = VariantProps<typeof CardVariants>;

const CardVariants = cva("", {
  variants: {},

  defaultVariants: {},
});

export default function Card({}) {
  return <div>hello world</div>;
}
