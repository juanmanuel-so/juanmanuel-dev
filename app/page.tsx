import Piano from "@/components/piano/piano";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center top-0 absolute  w-full">
    
      <section className="flex flex-1 w-full flex-col items-center justify-between sm:items-start ">

        <div className="flex flex-col lg:flex-row space-x-12 lg:justify-center items-center w-full h-dvh ">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left w-2xl">
            <Image
              className="dark:invert"
              src="/JuanManuel.svg"
              alt="Logo"
              width={300}
              height={20}
              priority
            />
            <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight ">
              Desarrollador Web Fullstack
            </h1>
            <p className=" text-md leading-8 ">
              Ingeniero Civil Informático con experiencia en desarrollo web. He trabajado en la creación de aplicaciones empresariales utilizanod Node.js. Me gustan los desafios donde soy capaz de expresar mi creatividad, y resolver problemas con soluciones modernas e innovadoras.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Piano />

          </div>
        </div>
      </section>
    </main>
  );
}
