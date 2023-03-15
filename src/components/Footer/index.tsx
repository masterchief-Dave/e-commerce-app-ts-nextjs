import Image from 'next/image'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import visaCard from 'public/assets/icons/visa-card.png'
import americanExpressCard from 'public/assets/icons/american-express-card.png'
import discoverCard from 'public/assets/icons/discover-card.png'
import paypalCard from 'public/assets/icons/paypal-card.png'
import masterCard from 'public/assets/icons/master-card.png'

import instagram from 'public/assets/icons/instagram.svg'
import linkedin from 'public/assets/icons/linkedin.svg'
import twitter from 'public/assets/icons/twitter.svg'

type Props = {}

export const Footer = (props: Props) => {
  const styles = {
    footerCardIcons: `h-10 w-10`,
    footerHeader: `text-[1.8rem] font-semibold text-white`,
    socialMediaIcons: `h-8 w-8`,
  }

  return (
    <footer className='grid grid-cols-12 space-y-8 bg-primary-blue-100 py-16'>
      <section className='col-start-2 col-end-12 mb-10 grid grid-cols-4 font-poppins'>
        <div className='space-y-8'>
          <h4 className='text-[1.8rem] font-semibold text-white'>Warehouse</h4>
          <div className='flex items-center gap-6'>
            <PhoneIcon className='h-12 w-12' fill='#fff' />
            <div className='text-[1.3rem]'>
              <p className='font-roboto text-primary-blue-700'>
                {' '}
                Call Customer Services, We Support 24/7 :
              </p>
              <p className='text-[1.5rem] font-bold text-white'>
                949-0123-456-789
              </p>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <MapPinIcon className='h-12 w-12 text-white' />
            <div className='text-[1.3rem]'>
              <p className='font-roboto text-white'>Address :</p>
              <p className='text-primary-blue-700'>
                PO Box 1622 Wellington Street West Virginia
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <h4 className={styles.footerHeader}>Legal</h4>
          <ul className='space-y-6 font-roboto text-[1.3rem] font-normal text-primary-blue-700'>
            <li>
              <Link href='#'>Terms and Condition</Link>
            </li>
            <li>
              <Link href='#'> Privacy Policy </Link>
            </li>
            <li>
              <Link href='#'>Faq</Link>
            </li>
          </ul>
        </div>

        <div className='space-y-8'>
          <h4 className={styles.footerHeader}>Company</h4>
          <ul className='space-y-6 font-roboto text-[1.3rem] font-normal text-primary-blue-700'>
            <li>
              <Link href='#'>Shipping and Returns</Link>
            </li>
            <li>
              <Link href='#'> Refund Policy </Link>
            </li>
            {/* <li>
              <Link href='#'>Faq</Link>
            </li> */}
          </ul>
        </div>

        <div className='space-y-8'>
          <h4 className={styles.footerHeader}>Newsletter</h4>
          <form>
            <div className='flex h-[4.5rem] items-center gap-2 font-poppins text-[1.2rem]'>
              <input
                type='text'
                placeholder='email'
                className='h-full rounded-md px-[1rem]'
              />
              <button className='h-full w-fit rounded-md bg-primary-yellow-200 px-6 font-roboto text-[1.1rem] font-bold uppercase'>
                Subscribe
              </button>
            </div>
          </form>

          <div className='flex items-center gap-6'>
            <Image
              src={instagram}
              alt='instagram'
              className={styles.socialMediaIcons}
            />
            <Image
              src={linkedin}
              alt='linkedin'
              className={styles.socialMediaIcons}
            />
            <Image
              src={twitter}
              alt='twitter'
              className={styles.socialMediaIcons}
            />
          </div>
        </div>
      </section>

      <section className='col-span-full col-start-1 border-t font-roboto text-[1.3rem] font-medium text-white'>
        <div className='grid grid-cols-12'>
          <div className='col-start-2 col-end-12 flex items-center justify-between'>
            <p className='font-roboto text-[1.2rem] font-bold'>
              Copyright &copy; {new Date().getFullYear()} Bodunrin. All rights
              reserved.
            </p>

            <div className='flex items-center gap-x-6'>
              <Image
                src={masterCard}
                alt='master card'
                className={styles.footerCardIcons}
              />
              <Image
                src={visaCard}
                alt='visa card'
                className={styles.footerCardIcons}
              />
              <Image
                src={paypalCard}
                alt='paypal card'
                className={styles.footerCardIcons}
              />
              <Image
                src={americanExpressCard}
                alt='american express card'
                className={styles.footerCardIcons}
              />
              <Image
                src={discoverCard}
                alt='disover card'
                className={styles.footerCardIcons}
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
