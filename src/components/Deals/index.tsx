import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {}

export const WeeklyDeals = (props: Props) => {
  const styles = {
    iconContainer: `h-[3rem] w-[3rem] bg-primary-white-500 flex items-center justify-center`,
    icon: `h-6 w-6 text-primary-grey-400`,
  }
  return (
    <div className='py-2 font-poppins'>
      <header className='flex items-center justify-between border-b px-4 py-3'>
        <h2 className='text-[2rem] font-bold uppercase text-primary-black-200'>
          Weekly Deals
        </h2>

        <div className='flex items-center gap-2'>
          <div className={styles.iconContainer}>
            <ChevronLeftIcon className={styles.icon} />
          </div>
          <div className={styles.iconContainer}>
            <ChevronRightIcon className={styles.icon} />
          </div>
        </div>
      </header>
    </div>
  )
}
