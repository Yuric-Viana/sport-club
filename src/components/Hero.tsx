import Image from "next/image"
import { Button } from "./ui/button"
import { ButtonLink } from "./ButtonLink"

export const Hero = () => {
  return (
    <section className="relative h-80 w-full">
      <Image
        src="/hero.png"
        alt="Hero"
        fill
        className="z-0 object-cover object-top"
        priority
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-[#063C6A] via-[#0B2447]/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-2 text-center">
        <h1 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Bem-vindo ao novo <br /> Clube Esportivo da Cidade!
        </h1>
        <p className="text-white">Esporte, saúde e lazer em um só lugar!</p>

        <div className="my-6 flex justify-center gap-3.5">
          <ButtonLink text="Conheça o clube" />
          <Button className="bg-transparent relative z-10 p-4 border-2 border-white">Saiba mais</Button>
        </div>
      </div>
    </section>
  )
}
