import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  src: string
  alt: string
  fallback: string
}

function AvatarComp({ src, alt, fallback }: Props) {
  return (
    <Avatar className="h-20 w-20">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

export default AvatarComp