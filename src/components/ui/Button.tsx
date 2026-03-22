"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary: [
    "bg-nexora-black text-nexora-white border border-nexora-black",
    "hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(0,0,0,0.22)]",
    "focus-visible:outline-2 focus-visible:outline-nexora-black focus-visible:outline-offset-2",
  ].join(" "),
  secondary: [
    "bg-transparent text-nexora-graphite border border-nexora-gray-300",
    "hover:border-nexora-coral hover:text-nexora-coral",
    "focus-visible:outline-2 focus-visible:outline-nexora-black focus-visible:outline-offset-2",
  ].join(" "),
  whatsapp: [
    "bg-transparent text-[#25D366] border border-[#25D366]",
    "hover:bg-[#25D366] hover:text-white",
    "focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[14px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base = [
    "inline-flex items-center justify-center gap-2 rounded-lg",
    "font-body font-medium tracking-[0.03em]",
    "transition-all duration-200 cursor-pointer whitespace-nowrap",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ((props as ButtonAsAnchor).as === "a") {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor;
    return <a className={base} {...anchorProps} />;
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton;
  return <button className={base} {...buttonProps} />;
}
