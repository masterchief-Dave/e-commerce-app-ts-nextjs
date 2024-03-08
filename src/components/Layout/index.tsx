import AuthWrapper from "./Auth/authWrapper"

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return <AuthWrapper>{children}</AuthWrapper>
}
