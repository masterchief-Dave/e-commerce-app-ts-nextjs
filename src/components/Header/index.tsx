import Image from 'next/image'

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className='relative w-full'>
      <Image
        src='https://cdn.shopify.com/s/files/1/0272/1493/8165/files/slider-show-2_341dac96-3ed1-4ce8-8343-daa4c6d8b224_2048x.jpg?v=1614755002'
        alt='landing'
        className='w-full object-cover'
        width='7000'
        height='7000'
      />
    </div>
  )
}
