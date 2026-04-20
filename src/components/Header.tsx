import Image from "next/image"
import { ButtonLink } from "./ButtonLink"

export const Header = () => {
  return (
    <header className="via-[#0B2447]/ relative flex h-22 w-full items-center bg-linear-to-b from-[#063C6A]">
      <div className="relative flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={55} height={45} />
          <h2 className="text-sm font-bold text-white uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] min-[425]:text-lg md:text-2xl">
            Sport Club
          </h2>
        </div>

        <nav className="mr-6.25 ml-auto hidden lg:flex">
          <ul className="flex gap-5.5">
            {["Início", "Atividades", "Sobre nós", "Contato"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${["home", "activities", "about", "contact"][i]}`}
                  className="relative text-xl font-bold text-white transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:-translate-y-0.5 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ButtonLink className="text-xl" text="Seja sócio" />
        </div>
      </div>
    </header>
  )
}
