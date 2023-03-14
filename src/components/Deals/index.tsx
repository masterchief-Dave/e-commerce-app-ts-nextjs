import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

type Props = {}

export const WeeklyDeals = (props: Props) => {
  const styles = {
    iconContainer: `h-[3rem] w-[3rem] bg-primary-white-500 flex items-center justify-center`,
    icon: `h-6 w-6 text-primary-grey-400`,
    weeklyDealsTimeHead: `font-roboto font-bold text-[#999]`,
    weeklyDealsTimeText: `flex text-white font-bold`,
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
              <span className={styles.weeklyDealsTimeHead}>Days</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className='bg-primary-yellow-200 p-2'>0</span>
                <span className='bg-primary-yellow-300 p-2'>0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Hours</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className='bg-primary-yellow-200 p-2'>0</span>
                <span className='bg-primary-yellow-300 p-2'>0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Mins</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className='bg-primary-yellow-200 p-2'>0</span>
                <span className='bg-primary-yellow-300 p-2'>0</span>
              </div>
            </div>

            <div>
              <span className={styles.weeklyDealsTimeHead}>Secs</span>
              <div className={styles.weeklyDealsTimeText}>
                <span className='bg-primary-yellow-200 p-2'>0</span>
                <span className='bg-primary-yellow-300 p-2'>0</span>
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

      <section className='grid grid-cols-3 divide-x font-poppins'>
        {[0, 0, 0].map((_index, data) => {
          return (
            <>
              <div className='flex h-[17rem] items-start gap-4 py-8 px-8'>
                <div className='h-full w-[17rem] bg-[#eee]'></div>
                <div className='space-y-4'>
                  <p className='text-[1.2rem] font-medium text-[#222]'>
                    Diamond Halo stud
                  </p>
                  <div className='flex gap-1'>
                    {[0, 0, 0, 0].map((_, index: number) => {
                      return (
                        <StarIcon
                          key={index}
                          className='h-4 w-4 text-primary-yellow-400'
                          fill='#ffd201'
                        />
                      )
                    })}
                  </div>
                  <div className='flex gap-4 text-xl font-bold'>
                    <p>$450</p>
                    <p className='text-primary-white-200 line-through'>$650</p>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex h-[3rem] w-[3rem] items-center justify-center bg-[#d9d9d9]'>
                      <CheckIcon className='h-8 w-8 text-[#222]' />
                    </div>
                    <div className='flex h-[3rem] w-[3rem] items-center justify-center bg-[#d9d9d9]'>
                      <HeartIcon className='h-8 w-8 text-[#222]' />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </div>
  )
}
