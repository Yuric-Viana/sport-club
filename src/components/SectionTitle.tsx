import { cn } from "@/lib/classMerge"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div className={cn(["flex w-full items-center gap-4", className])}>
      <div className="from-primary h-0.5 flex-1 bg-linear-to-l to-transparent" />

      <span className="text-primary">
        {children}
      </span>

      <div className="from-primary h-0.5 flex-1 bg-linear-to-r to-transparent" />
    </div>
  )
}
