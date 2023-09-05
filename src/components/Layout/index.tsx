type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return <div className='mx-auto w-full  max-w-screen-2xl min-h-screen'>{children}</div>
}
