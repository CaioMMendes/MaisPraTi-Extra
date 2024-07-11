import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

const Button = forwardRef(
  ({ className, disabled = false, variant = "primary", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        className={twMerge(
          "flex items-center justify-center rounded-lg px-4 py-2 text-base transition-all duration-300",
          className,
          disabled && "opacity-70 hover:bg-onyx-600",
          variant === "primary" &&
            "bg-onyx-600 text-slate-100 hover:bg-onyx-400",
          variant === "secondary" && "bg-red-500 text-black",
          variant === "tertiary" && "bg-orange-500 text-green-400"
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

// Serve para aparecer em alguns lugares o nome do componente do lugar de button
// Como por exemplo no react-dev-tools
Button.displayName = "Button"

export { Button }
