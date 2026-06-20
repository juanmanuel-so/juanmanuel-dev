import Piano from "@/components/piano/piano";
import { Stack } from "@/components/stack";
import { TypographyH1 } from "@/components/typography/typography-h1";
import { TypographyP } from "@/components/typography/typography-p";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 flex-1 items-center justify-center top-0 absolute  w-full">

      <section className="flex flex-1 w-full flex-col items-center justify-between sm:items-start  ">

        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center w-full h-dvh ">
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
              Ingeniero Civil Informático con experiencia en desarrollo web. He trabajado en la creación de aplicaciones empresariales utilizanod Node.js. Me gustan los desafios donde soy capaz de expresar mi creatividad, y resolver problemas con soluciones modernas e innovadoras.
            </TypographyP>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Piano />

          </div>
        </div>
      </section>
      <section className="flex h-dvh w-full flex-col items-center justify-center ">
        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center h-40 ">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-2xl ">
            <Stack />
          </div>
          <div className="max-w-md">
            <TypographyH1 className="text-left">
              Mi stack preferido
            </TypographyH1>
            <TypographyP className=" ">
              Este es mi stack preferido para hacer aplicaciones web (de todo tipo). Es un stack que he ocupado durante mas de 3 años, desde mis proyectos académicos. Esta alineación no significa que esté encerrado a usar estás tecnologías para siempre, sino que es el stack con el que me siento mas cómodo y con el que me gusta trabajar. Sin embargo, siempre estoy abierto a aprender nuevas tecnologías y herramientas para mejorar mis habilidades y adaptarme a las necesidades de cada proyecto.
            </TypographyP>
          </div>
        </div>
      </section>
    </main>
  );
}
