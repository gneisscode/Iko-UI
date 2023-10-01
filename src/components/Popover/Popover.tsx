import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


export type PopoverVariantProps = VariantProps<typeof PopoverVariants>

export interface PopoverProps extends PopoverVariantProps {
  children: JSX.Element | React.ReactNode;
  className?: string;
  arrow?: "top" | "bottom" | "left"| "right";
}

const PopoverVariants = cva(
  " absolute flex flex-col items-center z-40 p-2 bg-background-light border border-border-primary rounded shadow-sm w-fit md:w-max h-fit ",
  {
    variants: {
      placement: {
        top: "top-[-55px] left-[50%]",
        bottom: "bottom-[-55px] left-[50%]",
        left: "",
        right: "right-0",
      },
    },

    defaultVariants: {
      placement: "top",
    },
  }
);



export default function Popover({children, className, placement, arrow}:PopoverProps) {

    return (
      <div
        className={`${twMerge(
          PopoverVariants({ className, placement }),
          "w-[100%]"
        )}`}
      >
        {arrow && (
          <div className="flex justify-center w-[100%]">
            <div
              className={`${
                arrow === "top"
                  ? "arrow-top"
                  : arrow === "bottom"
                  ? "arrow-bottom"
                  : ""
              } absolute bg-background-light w-[12px] h-[12px] border-border-primary `}
            ></div>
          </div>
        )}

        {children}
      </div>
    );

}