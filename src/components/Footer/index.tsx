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
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

export const Footer = (props: Props) => {
  const styles = {
    footerCardIcons: `lg:h-12 lg:w-12 w-6 h-6`,
    footerHeader: `text-[1.6rem] lg:text-[1.8rem] font-semibold text-white `,
    socialMediaIcons: `lg:h-12 lg:w-12 w-6 h-6 cursor-pointer`,
  }

  return (
    <footer className='mx-auto grid  w-full grid-cols-12'>
      <div className='col-span-full grid-cols-12 border-b bg-primary-blue-400 lg:grid'>
        <section className='col-start-2 col-end-12 flex flex-col items-center justify-between gap-4 p-12 lg:flex-row'>
          <div className='order-2 w-full space-y-8'>
            <h4 className={styles.footerHeader}>Newsletter</h4>
            <form>
              <div className='flex w-full items-center gap-x-4 text-[1.6rem] lg:w-[40rem] lg:text-[1.2rem]'>
                <Input
                  type='text'
                  placeholder='email'
                  className='subscribe-btn h-full w-[90%] rounded-md border py-4 px-2 text-[1.6rem] lg:py-4 lg:px-[1rem]'
                />
                <Button className='h-full w-fit rounded-md bg-primary-yellow-200 px-4 py-4 text-[1.6rem] font-bold uppercase text-white lg:px-6 lg:py-4 lg:text-[1.6rem]'>
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <div className='flex w-full items-start gap-6 lg:items-center'>
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
        </section>
      </div>

      <div className='col-span-full grid grid-cols-12 bg-primary-blue-100 py-8'>
        <section className='col-start-2 col-end-12 mb-10 flex flex-col gap-8 lg:grid  lg:grid-cols-3'>
          <div className='space-y-8'>
            <h4 className='text-[1.6rem] font-semibold text-white lg:text-[1.8rem]'>
              Warehouse
            </h4>
            <div className='flex items-center gap-6'>
              <PhoneIcon
                className='h-6 w-6 text-white lg:h-12 lg:w-12'
                fill='#fff'
              />
              <div className='text-[1.6rem] lg:text-[1.3rem]'>
                <p className='text-primary-blue-700'>
                  {' '}
                  Call Customer Services, We Support 24/7 :
                </p>
                <p className='text-[1.6rem] font-bold text-white lg:text-[1.5rem]'>
                  949-0123-456-789
                </p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <MapPinIcon className='h-6 w-6 text-white lg:h-12 lg:w-12' />
              <div className='text-[1.6rem] lg:text-[1.3rem]'>
                <p className='text-white'>Address :</p>
                <p className='text-primary-blue-700'>
                  PO Box 1622 Wellington Street West Virginia
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <h4 className={styles.footerHeader}>Legal</h4>
            <ul className='grid grid-cols-2 items-center gap-4 text-[1.6rem] font-normal text-primary-blue-700 lg:block lg:gap-0 lg:space-y-6 lg:text-[1.3rem]'>
              <li>
                <Link href='/legal/terms-and-condition'>Terms and Condition</Link>
              </li>
              <li>
                <Link href='/legal/privacy-policy'> Privacy Policy </Link>
              </li>
              <li>
                <Link href='#'>Faq</Link>
              </li>
            </ul>
          </div>

          <div className='space-y-8'>
            <h4 className={styles.footerHeader}>Company</h4>
            <ul className='grid grid-cols-2 items-center gap-4 text-[1.6rem] font-normal text-primary-blue-700 lg:block lg:gap-0 lg:space-y-6 lg:text-[1.3rem]'>
              <li>
                <Link href='/company/shipping-returns'>Shipping and Returns</Link>
              </li>
              <li>
                <Link href='/company/refund-policy'> Refund Policy </Link>
              </li>
              {/* <li>
              <Link href='#'>Faq</Link>
            </li> */}
            </ul>
          </div>
        </section>
      </div>

      <section className='col-span-full col-start-1 border-t bg-primary-blue-300 text-[1.3rem] font-medium text-white'>
        <div className='grid grid-cols-12'>
          <div className='col-start-2 col-end-12 flex flex-col items-center justify-between lg:flex-row'>
            <p className='text-[1.2rem] font-bold'>
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
