"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function NextSectionButton({children, className}: {className?: string, children?: React.ReactNode}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = e.currentTarget.closest("section");
    const next = section?.nextElementSibling as HTMLElement | null;

    next?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button onClick={handleClick} className={
      cn(
        "rounded-full bg-primary px-2 py-0.5 hover:bg-accent-foreground delay-100 transition-colors flex flex-row items-center justify-center text-white  fixed bottom-4 left-1/2 -translate-x-1/2",
        className
      )
    }>
      <ChevronDown />
      {children}
    </button>
  );
}