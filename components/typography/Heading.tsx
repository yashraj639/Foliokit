import { ReactNode, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
}

const sizeClasses = {
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

export function Heading({
  children,
  className = "",
  as: Component = "h2",
  size,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={`font-semibold tracking-tight ${sizeClasses[size || "3xl"]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H1({ className = "", ...props }: Omit<HeadingProps, "as" | "size">) {
  return <Heading as="h1" size="5xl" className={className} {...props} />;
}

export function H2({ className = "", ...props }: Omit<HeadingProps, "as" | "size">) {
  return <Heading as="h2" size="4xl" className={className} {...props} />;
}

export function H3({ className = "", ...props }: Omit<HeadingProps, "as" | "size">) {
  return <Heading as="h3" size="3xl" className={className} {...props} />;
}