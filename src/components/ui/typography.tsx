import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {BadgeProps, badgeVariants} from "@/components/ui/badge";

const typographyVariants = cva(
    "",
    {
        variants: {
            variant: {
                h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
                h4: "scroll-m-20 text-xl font-semibold tracking-tight",
                p:"leading-7 [&:not(:first-child)]:mt-6"
            },
        },
        defaultVariants: {
            variant: "p",
        },
    }
)

export interface TypographyProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof typographyVariants> {}

function Typography({ className, variant="p",children,  ...props }: TypographyProps) {
    const classes = cn(typographyVariants({ variant }), className)
    if(!variant) return  null

    return React.createElement(
        variant ,
        {...props, className: classes},
        children
    );
}

export { Typography, typographyVariants }
