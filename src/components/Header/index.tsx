import { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import { data } from '@/globals/header'

type Props = {}

export const Header = (props: Props) => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className='mx-auto max-h-[40rem] min-h-[40rem] w-full overflow-hidden'>
      <Slider {...settings} ref={sliderRef}>
        {data.map((data: Header, index: number): JSX.Element => {
          return (
            <div className='relative h-[100%] w-full max-w-[100vw]' key={index}>
              <div className='relative h-full w-full font-poppins'>
                <Image
                  src={data.img}
                  alt={data.title}
                  className='h-[40rem] w-full object-cover'
                  width='1000'
                  height='1000'
                  priority
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
                    <h1 className='max-w-[50rem] text-[6rem] uppercase leading-[5rem]'>
                      {' '}
                      <span className='font-extrabold leading-10'>
                        {data.nameBold}
                      </span>{' '}
                      {''}
                      <span className='font-thin'>{data.nameNormal}</span>
                    </h1>
                    <p className='max-w-[45rem] text-[1.5rem] font-light'>
                      {data.description}
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
