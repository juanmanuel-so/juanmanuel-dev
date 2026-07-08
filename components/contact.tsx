import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons"

const contacts = [
  {
    name: "GitHub",
    // TODO: reemplazar con tu usuario/URL real
    handle: "@juanmanuel-so",
    description: "Revisa mis proyectos y código open source.",
    href: "https://github.com/juanmanuel-so",
    icon: Github01Icon,
  },
  {
    name: "LinkedIn",
    // TODO: reemplazar con tu perfil/URL real
    handle: "Juan Manuel Sandoval Olavarría",
    description: "Conectemos y conversemos sobre oportunidades.",
    href: "https://www.linkedin.com/in/juanmanuelso",
    icon: Linkedin01Icon,
  },
]

export function Contact() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      {contacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex h-48 w-72 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
            <CardContent className="flex flex-col items-center gap-3 text-center w-full">
              <HugeiconsIcon
                icon={contact.icon}
                strokeWidth={2}
                className="size-12 drop-shadow-sm"
              />
              <div>
                <h3 className="text-lg font-medium">{contact.name}</h3>
                <p className="text-sm text-muted-foreground">{contact.handle}</p>
              </div>
              <p className="text-xs/relaxed">{contact.description}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}
