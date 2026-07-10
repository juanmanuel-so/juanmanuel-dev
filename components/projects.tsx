import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon } from "@hugeicons/core-free-icons"
import Image from "next/image"

type Project = {
  name: string
  description: string
  href: string
  repo: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: "Oklocher",
    description:
      "Editor de paletas de colores enfocado en Oklch para desarrolladores. Permite seleccionar y agregar colores de forma sencilla.",
    href: "https://oklocher.juanmanel.dev",
    repo: "https://github.com/juanmanuel-so/oklocher",
    image: "https://oklocher.juanmanel.dev/oklocher.svg",
    tags: ["Next.js 16", "Node", "Vercel", "Open Source"],
  },
]

export function Projects() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex h-72 w-72 flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
            <Image
              src={project.image}
              alt={`Logo de ${project.name}`}
              width={288}
              height={120}
              className="h-32 w-full object-contain p-6"
            />
            <CardContent className="flex flex-col items-center gap-3 text-center">
              <div>
                <h3 className="text-lg font-medium">{project.name}</h3>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <HugeiconsIcon
                    icon={Github01Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  Open source
                </a>
              </div>
              <p className="text-xs/relaxed">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}
