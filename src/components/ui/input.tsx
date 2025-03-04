import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-[#f66435] bg-[#f4efca] hover:border-[#f4efca] hover:bg-[#f66435] px-3 py-2 text-[#f66435] hover:text-[#f4efca] placeholder-[#f66435] hover:placeholder-[#f4efca] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f66435] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
