type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return <div className='mx-auto w-full font-jost max-w-screen-2xl min-h-screen'>{children}</div>
}
