import {
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline'

type Props = {}

export const DropdownNav = (props: Props) => {
  const styles = {
    list: `flex items-center gap-1 uppercase cursor-pointer h-[3.5rem]`,
    icon: `font-bold h-5 w-5 mt-[.3rem]`,
  }

  return (
    <nav className='grid h-[7rem] grid-cols-12  bg-primary-blue-600 font-poppins text-[1.4rem] font-medium text-white'>
      <ul className='col-start-2 col-end-12 grid grid-cols-12 items-center'>
        <div className='col-start-1 flex h-[4.5rem] items-center'>
          <li className='flex h-[3.5rem] w-fit cursor-pointer items-center gap-2 rounded-md py-2 font-bold uppercase  text-primary-yellow-100 '>
            <span>Categories</span>
            <Bars3BottomRightIcon className='h-6 w-6 font-bold text-primary-yellow-100' />
          </li>
        </div>

        <div className='Dropdown col-start-4 col-end-10 flex items-center justify-evenly gap-x-8'>
          <li className={styles.list}>
            <span>Home</span>
          </li>
          <li className={styles.list}>
            <span>All demos</span>
            <ChevronDownIcon className={styles.icon} />
          </li>
          <li className='dropdown-target'>
            <div className='flex items-center'>
              <span>pages</span>
              <ChevronDownIcon className={styles.icon} />
            </div>
            <div className='dropdown-content absolute w-[15rem] rounded-xl px-8'>
              <ul className='divide-y divide-[#fff]'>
                <li className='cursor-pointer p-4'>Home</li>
                <li className='cursor-pointer p-4'>About Us</li>
                <li className='cursor-pointer p-4'>Contact Us</li>
              </ul>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <span>categories</span>
              <ChevronDownIcon className={styles.icon} />
            </div>
          </li>
          <li className={styles.list}>
            <span>blog</span>
            <ChevronDownIcon className={styles.icon} />
          </li>
        </div>
      </ul>
    </nav>
  )
}
