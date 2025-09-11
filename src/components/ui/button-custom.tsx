import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary:
        "border border-secondary bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      sm: "text-sm",
      default: "",
      lg: "",
      cta: "",
      icon: "size-9",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
  },
  compoundVariants: [
    // Primary sizes
    {
      variant: "primary",
      size: "cta",
      className: "h-9 px-8 w-auto min-w-[14rem]",
    },
    { variant: "primary", size: "default", className: "h-10 px-6" },
    { variant: "primary", size: "sm", className: "h-8 px-3" },
    { variant: "primary", size: "lg", className: "h-12 px-8" },
    // Secondary sizes (full width by default as requested)
    {
      variant: "secondary",
      size: "cta",
      className: "h-9 px-8 w-auto min-w-[14rem]",
    },
    { variant: "secondary", size: "sm", className: "h-8 px-3 py-1.5 " },
    { variant: "secondary", size: "lg", className: "h-12 px-8 " },
  ],
  defaultVariants: {
    variant: "primary",
    size: "cta",
    rounded: false,
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  rounded,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
