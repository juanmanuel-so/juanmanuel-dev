import { Focus } from "@/components/focus";
import { NextSectionButton } from "@/components/next-section-button";
import Piano from "@/components/piano/piano";
import { Stack } from "@/components/stack";
import { TypographyH1 } from "@/components/typography/typography-h1";
import { TypographyP } from "@/components/typography/typography-p";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 absolute flex-1 items-center justify-center h-dvh overflow-y-auto w-full snap-y snap-mandatory scroll-smooth">

      <section className="flex h-dvh w-full flex-col items-center justify-center snap-start ">

        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center w-full ">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-2xl">
            <Image
              className="dark:invert"
              src="/JuanManuel-gradient.svg"
              alt="Logo"
              width={300}
              height={20}
              priority
            />
            <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight ">
              Desarrollador Web Fullstack
            </h1>
            <TypographyP>
              Ingeniero Civil Informático con experiencia en desarrollo web. He trabajado en la creación de aplicaciones empresariales utilizando Node.js. Me gustan los desafios donde soy capaz de expresar mi creatividad, y resolver problemas con soluciones modernas e innovadoras.
            </TypographyP>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Piano />
          </div>

        </div>
       {/*  <NextSectionButton className="mt-12">
          Mi stack :)
        </NextSectionButton> */}
      </section>
      <section className="flex h-dvh w-full flex-col items-center justify-center snap-start ">
        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center h-40 ">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-2xl ">
            <Stack />
          </div>
          <div className="max-w-md">
            <TypographyH1 className="text-left">
              Mi stack preferido
            </TypographyH1>
            <TypographyP className=" ">
              Este es mi stack preferido para hacer aplicaciones web (de todo tipo). Es un stack que he ocupado durante mas de 3 años, desde mis proyectos académicos. Esta alineación no significa que esté encerrado a usar estas tecnologías para siempre, sino que es el stack con el que me siento mas cómodo y con el que me gusta trabajar. Sin embargo, siempre estoy abierto a aprender nuevas tecnologías y herramientas para mejorar mis habilidades y adaptarme a las necesidades de cada proyecto.
            </TypographyP>
          </div>
        </div>
      </section>
      <section className="flex h-dvh w-full flex-col items-center justify-center snap-start">
        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center h-40 ">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-2xl ">
            <TypographyH1 className="text-left">
              Enfoque
            </TypographyH1>
            <TypographyP className=" ">
              A la hora de crear aplicaciones web, existen algunas directrices que a mi parecer son fundamentales para lograr el éxito de un proyecto. Indiferente del usuario final o el cliente, aplicar esta visión marca la diferencia entre una aplicación que funciona y una aplicación que encanta.
            </TypographyP>
          </div>
          <Focus/>
        </div>
      </section>
    </main>
  );
}
