import { useRef } from "react"
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

import { data } from "@/globals/header"

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleLeftSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleRightSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className="mx-auto h-[20rem] w-full  overflow-hidden lg:h-[40rem]">
      <Slider {...settings} ref={sliderRef}>
        {data.map((data: Header, index: number): JSX.Element => {
          return (
            <div className="relative h-[100%] w-full max-w-[100vw]" key={index}>
              <div className="relative h-full w-full ">
                <Image
                  src={data.img}
                  alt={data.title}
                  className="h-[20rem] w-full object-cover lg:h-[40rem]"
                  width="1000"
                  height="1000"
                  priority
                />
                <div className="absolute top-0 z-10  grid h-full w-full grid-cols-12 flex-col items-center justify-center">
                  <div
                    className={`col-start-2 col-end-7 space-y-10 text-black`}
                  >
                    <h2 className=" font-extralight lg:text-[2rem]">
                      Top Best Seller 2023
                    </h2>
                    <h1 className="max-w-[50rem]  uppercase leading-[5rem] lg:text-[6rem]">
                      {" "}
                      <span className="font-extrabold leading-10">
                        {data.nameBold}
                      </span>{" "}
                      {""}
                      <span className="font-thin">{data.nameNormal}</span>
                    </h1>
                    <p className="max-w-[45rem] text-xl font-light lg:text-xl leading-10">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 z-50 hidden h-full w-full items-center justify-between px-[5rem]  lg:flex">
                <div
                  className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#222] p-4 text-white ring-primary-yellow-100 hover:ring-2"
                  onClick={handleLeftSlide}
                >
                  <ChevronLeftIcon className="h-10 w-10 text-white" />
                </div>

                <div
                  className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#222] p-4 text-white ring-primary-yellow-100 hover:ring-2"
                  onClick={handleRightSlide}
                >
                  <ChevronRightIcon className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
