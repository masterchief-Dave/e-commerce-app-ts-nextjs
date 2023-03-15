import visaCard from 'public/assets/icons/visa-card.png'
import americanExpressCard from 'public/assets/icons/american-express-card.png'
import discoverCard from 'public/assets/icons/discover-card.png'
import paypalCard from 'public/assets/icons/paypal-card.png'
import masterCard from 'public/assets/icons/master-card.png'
import Image from 'next/image'

type Props = {}

export const Footer = (props: Props) => {
  const styles = {
    footerCardIcons: `h-10 w-10`,
  }

  return (
    <footer className='grid grid-cols-12 bg-primary-blue-100 py-8'>
      <section className='col-start-2 col-end-12 font-poppins'>
        <div></div>
        <div></div>
        <div></div>
      </section>

      <section className='col-span-full col-start-1 border-t font-roboto text-[1.3rem] font-medium text-white'>
        <div className='grid grid-cols-12'>
          <div className='col-start-2 col-end-12 flex items-center justify-between'>
            <p>Copyright &copy; 2023 Bodunrin. All rights reserved.</p>

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
