import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  position?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, position="left-3", ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && (
          <span className={`absolute ${position} text-custom-gray`}>{icon}</span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-full border border-input bg-transparent px-3 py-2 pl-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
