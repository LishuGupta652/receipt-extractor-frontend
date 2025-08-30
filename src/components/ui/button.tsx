
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-11 rounded-md px-8",
      xl: "h-14 rounded-lg px-10 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
