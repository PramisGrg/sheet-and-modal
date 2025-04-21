import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utlis";

const selectVariants = cva(
  "flex w-full rounded-md border bg-white px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-blue-900 focus:ring-blue-900",
        error: "border-red-500 focus:border-red-900 focus:ring-red-900",
        success: "border-green-500 focus:border-green-900 focus:ring-green-900",
      },
      selectSize: {
        default: "h-9 py-2",
        sm: "h-8 text-xs py-1",
        lg: "h-10 text-base py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      selectSize: "default",
    },
  }
);

// ✅ Use Omit to avoid conflict with native HTML 'size'
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      selectSize,
      label,
      error,
      options = [],
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}

        <select
          ref={ref}
          className={cn(selectVariants({ variant, selectSize, className }))}
          {...props}
        >
          {placeholder && (
            <option
              value=""
              disabled
              selected={!props.value && !props.defaultValue}
            >
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
