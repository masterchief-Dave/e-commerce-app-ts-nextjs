import Image, { StaticImageData } from 'next/image'
import appleLaptop from 'public/assets/img/apple-laptop.jpg'

type Props = {}
interface IHeader {
  title: string
  description: string
  price: string
  formerPrice: string
  promoPrice: string
  img: JSX.Element | string | StaticImageData
}

const data = [
  {
    title: 'Top Seller 2023',
    nameBold: 'Sport',
    nameNormal: 'Iwatch',
    price: '2455',
    formerPrice: '',
  },
]

export const Header = (props: Props) => {
  return (
    <div className='relative w-full font-poppins'>
      <Image
        src='https://cdn.shopify.com/s/files/1/0272/1493/8165/files/slidershow-1-1_3519e856-a85a-4a83-ad9c-a5b3896ed871_2048x.jpg?v=1614755383'
        alt='landing'
        className='w-full object-cover'
        width='7000'
        height='7000'
      />
      <div className='absolute top-0 z-10  grid h-full w-full grid-cols-12 flex-col items-center justify-center'>
        <div className='col-start-3 col-end-7 space-y-10'>
          <h2 className='text-[2rem] font-extralight text-white'>
            Top Seller 2023
          </h2>
          <h1 className='text-[6rem] leading-[5rem] text-white'>
            {' '}
            <span className='font-extrabold'>Sport</span> {''}
            <span className='font-thin'>Iwatch</span>
          </h1>
          <p className='max-w-[45rem] text-[1.5rem] font-light text-white'>
            some random text
          </p>
        </div>
      </div>
    </div>
  )
}
