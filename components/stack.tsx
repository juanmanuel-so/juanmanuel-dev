import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const stack = [
  {
    name: 'Next',
    description: 'Mi herramienta favorita y elección principal para desarrollar un frontend robusto, moderno y escalable.',
    image: '/nextjs.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'La biblioteca de JavaScript que impulsa mi desarrollo frontend, permitiéndome crear interfaces de usuario dinámicas y eficientes.',
    image: '/react.svg',
  },
  {
    name: 'Tailwind CSS',
    description: 'Mi herramienta de diseño preferida para crear interfaces de usuario modernas y responsivas con facilidad.',
    image: '/tailwind.svg',
  },
  {
    name: 'Prisma',
    description: 'Mi ORM favorito para interactuar con bases de datos de manera eficiente y segura.',
    image: '/prisma.svg',
  },

]
export function Stack() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1  h-120">
        {stack.map((tool, index) => (
          <CarouselItem key={index} className="basis-1/2 pt-1">
            <div className="p-1">
              <Card className="bg-linear-to-bl from-gradient to-gradient-end h-60">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="h-12 w-12"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-medium">{tool.name}</h3>
                      <p className="text-sm ">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
