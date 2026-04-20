"use client";

import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  href?: string;
}

type ButtonAsButton = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-border bg-background hover:bg-secondary",
  ghost: "hover:bg-secondary",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", size = "md", fullWidth = false, className = "", href, ...rest } = props;
  
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}