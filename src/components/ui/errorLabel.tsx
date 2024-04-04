import { twMerge } from "tailwind-merge"

interface ErrorLabelProps extends React.HTMLProps<HTMLParagraphElement> {
  children?: React.ReactNode
  text?: string
}

export const ErrorLabel = ({
  className,
  text,
  children,
  ...props
}: ErrorLabelProps) => {
  return (
    <p
      className={twMerge("text-red-500 text-sm font-normal", className)}
      {...props}
    >
      {text ? text : children}
    </p>
  )
}
