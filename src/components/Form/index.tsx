import { twMerge } from "tailwind-merge"

interface InputContainerProps extends React.HTMLProps<HTMLElement> {
  children: React.ReactNode
}

export const InputContainer = ({
  className,
  children,
  ...props
}: InputContainerProps) => {
  return (
    <section
      className={twMerge(
        "flex items-center h-[45px] gap-2 border ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white ring-black px-2 rounded-lg focus-within:ring-2 focus-within:ring-black",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
