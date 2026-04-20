import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  as?: "p" | "span" | "div";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function Text({
  children,
  className = "",
  size = "base",
  as: Component = "p",
}: TextProps) {
  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}

export function Small({ className = "", ...props }: Omit<TextProps, "size" | "as">) {
  return <Text size="sm" className={className} {...props} />;
}

export function Large({ className = "", ...props }: Omit<TextProps, "size" | "as">) {
  return <Text size="lg" className={className} {...props} />;
}
