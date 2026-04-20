import { ButtonLink } from "@/components/ButtonLink"
import { Card } from "@/components/Card"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const cards = [
  {
    title: "Tênis & Beach Tennis",
    imageSrc: "/activities/beach-tennis.png",
    imageAlt: "Beach Tennis",
  },
  {
    title: "Futevôlei",
    imageSrc: "/activities/footvolley.png",
    imageAlt: "Volleyball",
  },
  {
    title: "Pilates & Academia",
    imageSrc: "/activities/pilates.png",
    imageAlt: "Pilates",
  },
  {
    title: "Massagem relaxante",
    imageSrc: "/activities/massage.png",
    imageAlt: "Massagem relaxante",
  },
]

const inputs = [
  {
    placeholder: "Nome",
    type: "text",
  },
  {
    placeholder: "E-mail",
    type: "email",
  },
  {
    placeholder: "Telefone",
    type: "tel",
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionTitle
        className="my-4.5 lg:mt-7 lg:mb-13 lg:text-4xl"
      >
        Nossas atividades
      </SectionTitle>

      <Carousel className="flex justify-center px-4 min-[1440px]:hidden">
        <CarouselContent className="-ml-6">
          {cards.map((card, i) => (
            <CarouselItem
              key={i}
              className="basis-1/2 pl-6 min-[480px]:basis-1/3 min-[768px]:basis-1/4 lg:pl-9"
            >
              <Card
                className="h-31.25 w-37.5 min-[1440px]:h-69.5 min-[1440px]:w-72.5 lg:h-50 lg:w-55"
                title={card.title}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mb-13 hidden px-4 min-[1440px]:flex">
        {cards.map((card, i) => (
          <div
            key={i}
            className="basis-1/2 min-[480px]:basis-1/3 min-[768px]:basis-1/4 lg:pl-9"
          >
            <Card
              className="h-31.25 w-37.5 lg:h-69.5 lg:w-72.5"
              title={card.title}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          </div>
        ))}
      </div>

      <section className="relative mt-4 h-45 w-full lg:h-90 lg:mt-14">
        <Image
          src="/room-about.jpeg"
          alt="Sobre o nosso clube"
          className="object-cover lg:hidden"
          fill
        />
        <Image
          src="/about.png"
          alt="Sobre o nosso clube"
          className="hidden object-cover object-[center_40%] lg:block"
          fill
        />
        <Image
          src="/room-about.jpeg"
          alt="Sobre o nosso clube"
          className="object-cover lg:hidden"
          fill
        />
        <Image
          src="/about.png"
          alt="Sobre o nosso clube"
          className="hidden object-cover object-[center_40%] lg:block"
          fill
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,_#063C6A_0%,_rgba(6,60,106,0.6)_60%,_#E2E2E2_100%)]" />

        <div className="relative top-1/2 ml-4.5 grid -translate-y-1/2 gap-3.5 lg:ml-20">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] lg:text-5xl">
                Sobre o clube
              </h2>

              <div className="h-0.5 flex-1 max-w-[300px] bg-linear-to-r from-white to-transparent" />
            </div>
            <h3 className="text-[14px] font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] lg:mt-12 lg:text-2xl">
              Um espaço moderno e completo para você!
            </h3>
          </div>
          <p className="max-w-90 text-[12px] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] lg:mt-7 lg:max-w-[600px] lg:text-[20px]">
            Ofereçemos infraestrutura de ponta e diversas ativades para todas as
            idades. Venha conhecer e se surpreender com nosso clube esportivo!
          </p>
        </div>
        <Image
          src="/room-desktop.png"
          alt="Clube"
          width={600}
          height={250}
          sizes="600px"
          className="absolute top-1/2 right-40 h-[250px] w-[600px] -translate-y-1/2 rounded-2xl object-cover hidden min-[1440px]:block"
        />
      </section>

      <section className="relative h-full w-full py-4">
        <Image
          src="/footer.jpeg"
          alt="Fale conosco"
          className="absolute -z-10"
          fill
        />
        <SectionTitle className="lg:mt-11 lg:[&>span]:text-4xl">Fale conosco</SectionTitle>
        <p className="text-primary mt-1 text-center text-[12px] lg:text-xl lg:mt-7 lg:mb-14">
          Entre em contato e venha nos visitar!
        </p>

        <div className="mx-auto my-3 grid gap-1 lg:gap-4 justify-center">
          {inputs.map((input, i) => (
            <Input
              key={i}
              placeholder={input.placeholder}
              type={input.type}
              className="border-none bg-white placeholder:text-black focus-visible:ring-1 min-w-3xs  lg:w-2xl lg:h-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            />
          ))}
          <Textarea
            placeholder="Mensagem"
            className="border-none bg-white placeholder:text-black focus-visible:ring-1 lg:w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          />
        </div>

        <div className="flex w-full justify-center lg:mt-11">
          <ButtonLink text="Enviar" className="w-[200px]" />
        </div>
      </section>
    </div>
  )
}
