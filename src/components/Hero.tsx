import Image from "next/image"
import { Button } from "./ui/button"
import { ButtonLink } from "./ButtonLink"

export const Hero = () => {
  return (
    <section className="relative h-80 w-full lg:h-133">
      <Image
        src="/hero.png"
        alt="Hero"
        fill
        className="z-0 object-cover object-[center_12%]"
        priority
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-[#063C6A]/40 via-[#0B2447]/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-2 text-center lg:justify-center">
        <h1 className="relative text-xl font-bold lg:text-[40px]">
          <span className="absolute inset-0 text-transparent [-webkit-text-stroke:3px_black]">
            Bem-vindo ao novo <br /> Clube Esportivo da Cidade!
          </span>

          <span className="relative text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Bem-vindo ao novo <br /> Clube Esportivo da Cidade!
          </span>
        </h1>

        <p className="text-sm text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] lg:text-2xl">
          Esporte, saúde e lazer em um só lugar!
        </p>

        <div className="mx-auto my-6 flex gap-3.5 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2">
          <ButtonLink text="Conheça o clube" />
          <Button className="cursor-pointer border-2 border-white bg-transparent p-4 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black lg:p-5 lg:text-lg">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  )
}
