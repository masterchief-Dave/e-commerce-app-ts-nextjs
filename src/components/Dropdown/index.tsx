import {
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline'

type Props = {}

export const DropdownNav = (props: Props) => {
  const styles = {
    list: `flex items-center gap-2 uppercase cursor-pointer h-[4.5rem]`,
  }

  return (
    <nav className='grid grid-cols-12 bg-primary-blue-600  font-poppins text-[1.4rem] font-medium text-white'>
      <ul className='col-start-2 col-end-12 grid grid-cols-12'>
        <div className='col-start-2 flex h-[4.5rem] items-center'>
          <li className='flex h-[3.5rem] w-fit cursor-pointer items-center gap-2 rounded-md bg-primary-yellow-300 py-2 px-4  uppercase text-white'>
            <span>Categories</span>
            <Bars3BottomRightIcon className='h-6 w-6 font-bold' />
          </li>
        </div>

        <div className='col-start-4 col-end-10 flex items-center justify-evenly gap-x-8'>
          <li className={styles.list}>
            <span>Home</span>
          </li>
          <li className={styles.list}>
            <span>All demos</span>
            <ChevronDownIcon className='h-4 w-4' />
          </li>
          <li className={styles.list}>
            <span>pages</span>
            <ChevronDownIcon className='h-4 w-4' />
          </li>
          <li className={styles.list}>
            <span>categories</span>
            <ChevronDownIcon className='h-4 w-4' />
          </li>
          <li className={styles.list}>
            <span>blog</span>
            <ChevronDownIcon className='h-4 w-4' />
          </li>
        </div>
      </ul>
    </nav>
  )
}
