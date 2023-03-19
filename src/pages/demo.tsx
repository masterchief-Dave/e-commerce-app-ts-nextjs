import { ProductCard } from '@/components/Product/Card'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
type Props = {}

const demo = (props: Props) => {
  return (
    <div className='space-y-24 font-poppins text-[1.4rem]'>
      <div className='Navbar space-y-24'>{/* <Navbar /> */}</div>
      {/* <AnotherNavbar /> */}

      {/*  */}
      <Menu />

      {/* <DropdownMenu /> */}

      {/* product card */}
      <div className='mx-auto max-w-[70rem]'>
        <ProductCard
          img={''}
          productName='Apple watch series 5'
          productPrice='$500'
        />
      </div>
    </div>
  )
}

export default demo

export const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#home'>Home</a>
      <a href='#news'>News</a>
      <div className='dropdown'>
        <button className='dropbtn'>
          Dropdown
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <p>p 1</p>
          <p>p 2</p>
          <p>p 3</p>
        </div>
      </div>
    </div>
  )
}

const AnotherNavbar = () => {
  return (
    <div className='AnotherNavbar flex h-[3rem] items-center font-poppins'>
      <a href='#home'>Home</a>
      <a href='#news'>News</a>
      <div className='dropdown-container'>
        <button className='btn'>
          Dropdown
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content hidden space-y-4'>
          <p>p 1</p>
          <p>p 2</p>
          <p>p 3</p>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <nav>
      <div className='wrapper'>
        <div className='logo'>logo</div>
        <ul className='nav-links'>
          <li>
            {' '}
            <a href='#'>Home</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>About</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Services</a>{' '}
          </li>
          <li className='target-menu'>
            {' '}
            <a href='#'>Dropdown menu</a>{' '}
            <ul className='drop-menu'>
              <li>
                <a href=''>Dropdown 1</a>
              </li>
              <li>
                <a href=''>Dropdown 2</a>
              </li>
              <li>
                <a href=''>Dropdown 3</a>
              </li>
              <li>
                <a href=''>Dropdown 4</a>
              </li>
            </ul>
          </li>
          <li className='target-box'>
            {' '}
            <a href='#'>Mega menu</a>
            <div className='mega-box'>
              <div className='content'>
                <div className='row'>
                  <img src='#' alt='' />
                </div>
                <div className='row'>
                  <header>Design services</header>
                  <ul className='mega-links'>
                    <li>
                      <a href=''>Graphics</a>
                    </li>
                    <li>
                      <a href=''>Vectors</a>
                    </li>
                    <li>
                      <a href=''>Business Cards</a>
                    </li>
                    <li>
                      <a href=''>Custom logo</a>
                    </li>
                  </ul>
                </div>

                <div className='row'>
                  <header>Email services</header>
                  <ul className='mega-links'>
                    <li>
                      <a href=''>Personal Email</a>
                    </li>
                    <li>
                      <a href=''>Business Email</a>
                    </li>
                    <li>
                      <a href=''>Mobile Email</a>
                    </li>
                    <li>
                      <a href=''>Web Marketing</a>
                    </li>
                  </ul>
                </div>

                <div className='row'>
                  <header>Security services</header>
                  <ul className='mega-links'>
                    <li>
                      <a href=''>Site seals</a>
                    </li>
                    <li>
                      <a href=''>vps hosting</a>
                    </li>
                    <li>
                      <a href=''>privacy seal</a>
                    </li>
                    <li>
                      <a href=''>Website design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            {' '}
            <a href='#'>Feed</a>{' '}
          </li>
        </ul>
      </div>
    </nav>
  )
}

const DropdownMenu = () => {
  return (
    <nav>
      <div className='wrapper'>
        <div className='logo'>logo</div>
        <ul className='nav-links'>
          <li>
            {' '}
            <a href='#'>Home</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>About</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Services</a>{' '}
          </li>
          <li className='target-menu'>
            {' '}
            <a href='#'>Dropdown menu</a>{' '}
            <ul className='drop-menu'>
              <li>
                <a href=''>Dropdown 1</a>
              </li>
              <li>
                <a href=''>Dropdown 2</a>
              </li>
              <li>
                <a href=''>Dropdown 3</a>
              </li>
              <li>
                <a href=''>Dropdown 4</a>
              </li>
            </ul>
          </li>
          <li>
            {' '}
            <a href='#'>Mega menu</a>
          </li>
          <li>
            {' '}
            <a href='#'>Feed</a>{' '}
          </li>
        </ul>
      </div>
    </nav>
  )
}
