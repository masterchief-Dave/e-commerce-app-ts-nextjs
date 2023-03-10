import Image, { StaticImageData } from 'next/image'
import appleLaptop from 'public/assets/img/apple-laptop.jpg'

type Props = {}

type Header = {
  id: number
  title: string
  nameBold: string
  nameNormal: string
  description: string
  price: string
  formerPrice: string
  promoPrice: string
  img: JSX.Element | string | StaticImageData
}[]

const data: Header = [
  {
    id: 1,
    title: 'Top Seller 2023',
    nameBold: 'Sport',
    nameNormal: 'Iwatch',
    price: '2455',
    formerPrice: '',
    promoPrice: '',
    description: `At Sage, we don't just provide a service, we create an experience. Our passion for innovation and commitment to excellence sets us apart from the rest`,
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/slidershow-1-1_3519e856-a85a-4a83-ad9c-a5b3896ed871_2048x.jpg?v=1614755383',
  },
  {
    id: 2,
    title: 'Top Seller 2023',
    nameBold: 'Phantom',
    nameNormal: 'Drone',
    price: '2455',
    formerPrice: '',
    promoPrice: '',
    description: `At Sage, we don't just provide a service, we create an experience. Our passion for innovation and commitment to excellence sets us apart from the rest`,
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/slider-show-1_66ffbc40-efeb-48a4-95d8-590eba9597fd_2048x.jpg?v=1614755002',
  },
  {
    id: 3,
    title: 'Top Seller 2023',
    nameBold: 'Phantom',
    nameNormal: 'Drone',
    price: '2455',
    formerPrice: '',
    promoPrice: '',
    description: `At Sage, we don't just provide a service, we create an experience. Our passion for innovation and commitment to excellence sets us apart from the rest`,
    img: appleLaptop,
  },
]

export const Header = (props: Props) => {
  return (
    <div className='relative w-full font-poppins'>
      <Image
        src='https://cdn.shopify.com/s/files/1/0272/1493/8165/files/slider-show-1_66ffbc40-efeb-48a4-95d8-590eba9597fd_2048x.jpg?v=1614755002'
        alt='landing'
        className='w-full object-cover'
        width='7000'
        height='7000'
      />
      <div className='absolute top-0 z-10  grid h-full w-full grid-cols-12 flex-col items-center justify-center'>
        <div
          className={`col-start-2 col-end-7 space-y-10 ${
            true ? 'text-black' : 'text-white'
          }`}
        >
          <h2 className='text-[2rem] font-extralight'>Top Best Seller 2023</h2>
          <h1 className='text-[6rem] uppercase leading-[5rem]'>
            {' '}
            <span className='font-extrabold'>Sport</span> {''}
            <span className='font-thin'>Iwatch</span>
          </h1>
          <p className='max-w-[45rem] text-[1.5rem] font-light'>
            Stay ahead of the game with our smartwatch - your personal assistant
            on your wrist
          </p>
        </div>
      </div>
    </div>
  )
}
