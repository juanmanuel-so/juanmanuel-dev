"use client"

//import Link from "next/link"
import { useTheme } from "@teispace/next-themes"
import { Moon, Sun } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import React from "react"

const navItems = [
  { title: "Sobre mí", href: "/#sobre-mi" },
  { title: "Experiencia", href: "/#experiencia" },
  { title: "Educación", href: "/#educacion" },
  { title: "Habilidades", href: "/#habilidades" },
  { title: "Contacto", href: "/#contacto" },
]

export function TopBar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed z-20 flex flex-row items-center justify-between px-6 py-2 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </header>
  )
}