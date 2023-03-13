import { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import appleLaptop from 'public/assets/img/apple-laptop.jpg'
import heroOne from 'public/assets/img/hero-1.jpg'

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
  img: string | StaticImageData
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
    // img: appleLaptop,
    img: heroOne,
  },
]

export const Header = (props: Props) => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // console.log(sliderRef.current)
  const handleLeftSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const handleRightSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  return (
    <div className='max-w-[100vw]'>
      <Slider {...settings} ref={sliderRef}>
        {data.map((data: IHeader, index: number): JSX.Element => {
          return (
            <div
              className='relative max-h-[80vh] w-full max-w-[100vw]'
              key={index}
            >
              <div className='relative w-full font-poppins'>
                <Image
                  src={data.img}
                  alt='landing'
                  className='h-full w-full object-contain'
                  width='1000'
                  height='1000'
                />
                <div className='absolute top-0 z-10  grid h-full w-full grid-cols-12 flex-col items-center justify-center'>
                  <div
                    className={`col-start-2 col-end-7 space-y-10 ${
                      true ? 'text-black' : 'text-white'
                    }`}
                  >
                    <h2 className='text-[2rem] font-extralight'>
                      Top Best Seller 2023
                    </h2>
                    <h1 className='text-[6rem] uppercase leading-[5rem]'>
                      {' '}
                      <span className='font-extrabold'>Sport</span> {''}
                      <span className='font-thin'>Iwatch</span>
                    </h1>
                    <p className='max-w-[45rem] text-[1.5rem] font-light'>
                      Stay ahead of the game with our smartwatch - your personal
                      assistant on your wrist
                    </p>
                  </div>
                </div>
              </div>
              <div className='absolute top-0 z-50 flex h-full w-full items-center justify-between px-[5rem]'>
                <div
                  className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#222] p-4 text-white'
                  onClick={handleLeftSlide}
                >
                  <ChevronLeftIcon className='h-8 w-8 text-white' />
                </div>

                <div
                  className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#222] p-4 text-white'
                  onClick={handleRightSlide}
                >
                  <ChevronRightIcon className='h-8 w-8 text-white' />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
