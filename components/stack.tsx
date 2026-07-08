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
    icon: 'https://thesvg.org/icons/nextdotjs/default.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'Una base de datos relacional confiable.',
    icon: "https://thesvg.org/icons/postgresql/default.svg",
  },
  {
    name: 'Tailwind CSS',
    description: 'La librería que me hace sentir entusiasmo por el frontend.',
    icon: 'https://thesvg.org/icons/tailwind-css/default.svg',
  },
  {
    name: 'Prisma',
    description: 'Sin duda mi ORM favorito, facil de usar, facil de entender, y muy potente.',
    icon: 'https://thesvg.org/icons/prisma/default.svg',
  },

]
export function Stack() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >

      <CarouselContent className="-mt-1  h-120">
        {stack.map((tool, index) => (
          <CarouselItem key={index} className="basis-1/2 pt-1">
            <div className="p-1">
              <Card className=" h-60 flex justify-center items-center">
                <CardContent className="flex items-center justify-center p-6 w-full ">
                  <div className="flex flex-row items-center justify-evenly gap-4 w-full ">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={120}
                      height={120}
                      className="h-24 w-24 drop-shadow-sm"
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
