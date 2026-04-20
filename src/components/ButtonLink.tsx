import { cn } from "@/lib/utils";
import { Button } from "./ui/button"

interface ButtonLinkProps {
  text: string;
  className?: string;
}

export const ButtonLink = ({ text, className }: ButtonLinkProps) => {
    return (
        <Button className={
          cn([
            "bg-accent border-accent cursor-pointer rounded-lg p-4 shadow-[0_8px_15px_rgba(0,0,0,0.3)] inset-shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:translate-y-0 lg:py-5 lg:px-12.5",
            className
          ])
        }>
          <p className="text-sm lg:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)]">
            {text}
          </p>
        </Button>
    )
}