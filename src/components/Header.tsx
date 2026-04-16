import Image from "next/image"
import { Button } from "./ui/button"
import { ButtonLink } from "./ButtonLink"

export const Header = () => {
  return (
    <header className="relative flex h-22 w-full items-center bg-[#063C6A]">
      <div className="relative flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={55} height={45} />
          <h2 className="text-2xl font-bold text-white uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Sport Club
          </h2>
        </div>

        <ButtonLink text="Seja sócio" />
      </div>
    </header>
  )
}
