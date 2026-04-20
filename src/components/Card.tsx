import { cn } from "@/lib/classMerge"
import Image from "next/image"

interface CardProps {
    title: string
    imageSrc: string
    imageAlt: string
    className?: string
}

export const Card = ({ title, imageSrc, imageAlt, className }: CardProps) => {
    return (
        <div className={
            cn([
                "relative",
                className
            ])
        }>
            <Image className="rounded-2xl object-cover object-top" src={imageSrc} alt={imageAlt} fill />

            <div className="bg-primary/80 absolute bottom-0 right-0 left-0 rounded-b-2xl py-1 lg:py-2 min-[1440px]:py-4 text-center">
                <span className="text-white font-bold text-[10px] lg:text-lg min-[1440px]:text-2xl">{title}</span>
            </div>
        </div>
    )
}