import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {}

const bestDeals = [
  {
    name: '',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 5,
    price: 450,
    formerPrice: 500,
  },
]

export const WeeklyDeals = (props: Props) => {
  const styles = {
    iconContainer: `h-[3rem] w-[3rem] bg-primary-white-500 flex items-center justify-center`,
    icon: `h-6 w-6 text-primary-grey-400`,
  }
  return (
    <div className='py-2 font-poppins'>
      <header className='flex items-center justify-between border-b px-4 py-3'>
        <div className='flex items-center gap-4'>
          <h2 className='text-[2rem] font-bold uppercase text-primary-black-200'>
            Weekly Deals
          </h2>
          <div className='flex gap-x-4'>
            <div>
              <span>Days</span>
              <div className='flex'>
                <span>0</span>
                <span>0</span>
              </div>
            </div>

            <div>
              <span>Hours</span>
              <div className='flex'>
                <span>0</span>
                <span>0</span>
              </div>
            </div>

            <div>
              <span>Mins</span>
              <div className='flex'>
                <span>0</span>
                <span>0</span>
              </div>
            </div>

            <div>
              <span>Secs</span>
              <div className='flex'>
                <span>0</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <div className={styles.iconContainer}>
            <ChevronLeftIcon className={styles.icon} />
          </div>
          <div className={styles.iconContainer}>
            <ChevronRightIcon className={styles.icon} />
          </div>
        </div>
      </header>

      <section className='flex space-x-1'>
        <div className='h-[17rem] py-8 px-8'>
          <div className='h-full w-[17rem] bg-[#999]'></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </section>
    </div>
  )
}
