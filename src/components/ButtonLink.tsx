import { Button } from "./ui/button"

export const ButtonLink = ({ text }: { text: string }) => {
    return (
        <Button className="bg-accent cursor-pointer rounded-lg p-4 shadow-[0_8px_15px_rgba(0,0,0,0.3)] inset-shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:translate-y-0">
          <p className="text-sm font-bold tracking-wide text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)]">
            {text}
          </p>
        </Button>
    )
}