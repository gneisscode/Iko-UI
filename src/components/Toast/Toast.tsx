import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type ToastVariantProps = VariantProps<typeof ToastVariants>;

export interface ToastProps extends ToastVariantProps {
 //whatever other style-unrelated proptypes that you need for the toast go in here
 children: JSX.Element | React.ReactNode;
}


const ToastVariants = cva("", {
  variants: {
    intent: {
      success: " bg-green-500",
      danger: " bg-red-500",
      warning: "bg-yellow-500",
      neutral: " bg-gray-400", //examples to guide, defs switch these up ...
    },

    //add other variants here if necessary e.g. size, roundness, etc, see other components like button for examples..
  },

  defaultVariants: {
    intent: "neutral" //default variants if no variant is defined
  },
});

export default function Toast({children, intent}: ToastProps) {

    return(
        <div className={` ${twMerge(ToastVariants({intent}), "rest of your classes if necessary w-[100%]")}`}>
          {children}
        </div>
    )
}
