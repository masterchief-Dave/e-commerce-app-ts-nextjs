type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return <div className='mx-auto w-full  max-w-screen-4xl min-h-screen'>{children}</div>
}
