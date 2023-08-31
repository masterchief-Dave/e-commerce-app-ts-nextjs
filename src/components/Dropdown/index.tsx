import {
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline'

type Props = {}

export const DropdownNav = (props: Props) => {
  const styles = {
    list: `flex items-center gap-1 cursor-pointer h-[3.5rem]`,
    icon: `font-bold h-5 w-5 mt-[.3rem]`,
  }

  return (
    <nav className='z-[999] hidden h-[7rem] grid-cols-12 bg-primary-blue-600  font-jost text-[1.4rem] font-medium text-white lg:grid'>
      <ul className='relative z-[999] col-start-2 col-end-12 mx-auto grid w-full max-w-[144rem] grid-cols-12 items-center'>
        <div className='col-start-1 flex h-[4.5rem] items-center'>
          <li className='flex h-[3.5rem] w-fit cursor-pointer items-center gap-2 rounded-md py-2 font-bold uppercase  text-primary-yellow-100 '>
            <span>Categories</span>
            <Bars3BottomRightIcon className='h-6 w-6 font-bold text-primary-yellow-100' />
          </li>
        </div>

        <div className='Dropdown col-start-4 col-end-10 flex items-center justify-evenly gap-x-8 text-[1.2rem]'>
          <li className={styles.list}>
            <span>Home</span>
          </li>
          <li className={styles.list}>
            <span>All demos</span>
            <ChevronDownIcon className={styles.icon} />
          </li>
          <li className='dropdown-target'>
            <div className='flex items-center'>
              <span className='cursor-pointer'>pages</span>
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
          <li className='dropdown-target__menu'>
            <div className='flex items-center'>
              <span className='cursor-pointer'>categories</span>
              <ChevronDownIcon className={styles.icon} />
            </div>
            <div className='mega-menu absolute flex text-white'>
              <div className='row'>
                <ul className='space-y-8'>
                  <li>Header links 1</li>
                  <li>Category 1 </li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                </ul>
              </div>
              <div className='row'>
                <ul className='space-y-8'>
                  <li>Header links 2</li>
                  <li>Category 1 </li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                </ul>
              </div>
              <div className='row'>
                <ul className='space-y-8'>
                  <li>Header links 3</li>
                  <li>Category 1 </li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                </ul>
              </div>
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
