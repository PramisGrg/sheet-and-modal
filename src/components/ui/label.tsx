import * as React from "react";
import { cn } from "../../lib/utlis";

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<"label">>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-sm font-medium leading-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label };
