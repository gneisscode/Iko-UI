import "../../index.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


export type PopoverVariantProps = VariantProps<typeof PopoverVariants>


const PopoverVariants = cva("", {
    variants:{},

    defaultVariants:{

    },
});



export default function Popover({}) {

    return (
        <div>hello world</div>
    )

}