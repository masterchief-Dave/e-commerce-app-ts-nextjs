import { useState, useRef } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

import Slider from "react-slick"
import { bestDeals } from "@/globals/bestDeals"

import { DealCard } from "./DealCard"
import { Button } from "../ui/button"
import { MoveRightIcon } from "lucide-react"
import ContentSection from "../molecules/contentSection"

type Props = {}

export const WeeklyDeals = (props: Props) => {
  const [like, setLike] = useState<boolean>(false)
  const sliderRef = useRef<Slider | null>(null)

  const styles = {
    iconContainer: `h-[30px] w-[30px] bg-primary-white-500 flex items-center justify-center cursor-pointer`,
    icon: `h-6 w-6 text-primary-grey-400`,
    weeklyDealsTimeHead: `font-roboto font-normal text-sm text-[#999]`,
    weeklyDealsTimeText: `flex text-white font-bold`,
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <ContentSection
      title="Featured products"
      description="Explore the best collection of quality products on sale!"
      btnText="View featured products"
      slug="/featured"
    />
  )
}

/**
 *  <div className="py-2">
      <header className="flex items-end justify-between border-b px-4 py-3 lg:items-center">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <h2 className="w-full text-left font-bold uppercase text-primary-black-200 text-xl">
            Featured products
          </h2>
           <div className="flex gap-x-4">
            <div>
              <span className={styles.weeklyDealsTimeHead}>Days</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className="bg-primary-yellow-200 p-1">0</span>
                <span className="bg-primary-yellow-300 p-1">0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Hours</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className="bg-primary-yellow-200 p-1">0</span>
                <span className="bg-primary-yellow-300 p-1">0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Mins</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className="bg-primary-yellow-200 p-1">0</span>
                <span className="bg-primary-yellow-300 p-1">0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Secs</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className="bg-primary-yellow-200 p-1">0</span>
                <span className="bg-primary-yellow-300 p-1">0</span>
              </div>
            </div>
          </div> 
        </div>

         <div className="flex h-full items-end justify-end gap-2 lg:items-center">
          <div className={styles.iconContainer} onClick={handlePrev}>
            <ChevronLeftIcon className={styles.icon} />
          </div>
          <div className={styles.iconContainer} onClick={handleNext}>
            <ChevronRightIcon className={styles.icon} />
          </div>
        </div> 
      </header>

      <>
     <Slider {...settings} ref={sliderRef}>
          {bestDeals.map((data: BestDeals, index) => {
            return <DealCard key={index} data={data} />
          })}
        </Slider> 
      </>
    </div>
 */
