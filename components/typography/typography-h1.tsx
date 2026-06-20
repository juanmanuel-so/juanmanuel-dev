import { cn } from "@/lib/utils";
import { TypographyProps } from "../types/typography";

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={
      cn(
        'scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance',
        className
      )
    }>
      {children}
    </h1>
  )
}
