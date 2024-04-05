import Image from "next/image"
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import visaCard from "public/assets/icons/visa-card.png"
import americanExpressCard from "public/assets/icons/american-express-card.png"
import discoverCard from "public/assets/icons/discover-card.png"
import paypalCard from "public/assets/icons/paypal-card.png"
import masterCard from "public/assets/icons/master-card.png"
import instagram from "public/assets/icons/instagram.svg"
import linkedin from "public/assets/icons/linkedin.svg"
import twitter from "public/assets/icons/twitter.svg"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { useState } from "react"
import AlertDialogComp from "../Alert"

type Props = {}

export const Footer = (props: Props) => {
  const styles = {
    footerCardIcons: `lg:h-8 lg:w-8 w-6 h-6`,
    footerHeader: `text-sm font-semibold text-white `,
    socialMediaIcons: `lg:h-8 lg:w-8 w-6 h-6 cursor-pointer text-white`,
  }

  const [open, setOpen] = useState({
    state: false,
    name: "",
  })

  const handleClose = (name: string) => {
    setOpen((prev) => {
      return {
        ...prev,
        state: false,
        name: name,
      }
    })
  }

  return (
    <>
      <footer className="mx-auto grid  w-full grid-cols-12">
        <div className="col-span-full grid grid-cols-12 bg-primary-blue-100 py-8">
          <section className="col-start-2 col-end-12 mb-10 sm:flex sm:flex-col gap-8 md:grid  lg:grid-cols-3">
            <div className="space-y-8">
              <h4 className=" font-semibold text-white text-sm">Warehouse</h4>
              <div className="flex items-center gap-6">
                <PhoneIcon
                  className="h-6 w-6 text-white lg:h-8 lg:w-8"
                  fill="#fff"
                />
                <div className="text-sm">
                  <p className="text-primary-blue-700">
                    {" "}
                    Call Customer Services, We Support 24/7 :
                  </p>
                  <p className=" font-bold text-white text-sm">
                    949-0123-456-789
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <MapPinIcon className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                <div className="text-sm">
                  <p className="text-white">Address :</p>
                  <p className="text-primary-blue-700">
                    PO Box 1622 Wellington Street West Virginia
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className={styles.footerHeader}>Legal</h4>
              <ul className="grid grid-cols-2 items-center gap-4 font-normal text-primary-blue-700 lg:block lg:gap-0 lg:space-y-6 text-sm">
                <li>
                  <Link href="/legal/terms-and-condition">
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy-policy"> Privacy Policy </Link>
                </li>
                <li>
                  <Link href="#">Faq</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className={styles.footerHeader}>Company</h4>
              <ul className="grid grid-cols-2 items-center gap-4 font-normal text-primary-blue-700 lg:block lg:gap-0 lg:space-y-6 text-sm">
                <li>
                  <Link href="/company/shipping-returns">
                    Shipping and Returns
                  </Link>
                </li>
                <li>
                  <Link href="/company/refund-policy"> Refund Policy </Link>
                </li>
                <div className="flex w-full items-start gap-6 lg:items-center">
                  <Link href="https://github.com/davieoba">
                    <GithubIcon className={styles.socialMediaIcons} />
                  </Link>
                  <Link href="https://twitter.com/bodunrindavid">
                    <TwitterIcon className={styles.socialMediaIcons} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/david-bodunrin-oluwaseun/">
                    <LinkedinIcon className={styles.socialMediaIcons} />
                  </Link>
                </div>
                <div className="space-y-8 flex flex-col items-start">
                  <h4 className={styles.footerHeader}>
                    Subscribe to our Newsletter
                  </h4>
                  <form>
                    <div className="flex w-full items-center gap-x-4 lg:w-[450px] text-sm">
                      <Input
                        type="text"
                        placeholder="Enter email address"
                        className="subscribe-btn h-full w-[90%] rounded-md border py-4 px-2  lg:py-4 lg:px-[1rem]"
                      />
                      <Button
                        variant="secondary"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setOpen({
                            name: "email-subscribe-modal",
                            state: true,
                          })
                        }}
                        className="h-full w-fit rounded-md bg-primary-yellow-300 px-4 py-4 font-normal uppercase text-white lg:px-6 lg:py-4"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                </div>

                {/* <li>
              <Link href='#'>Faq</Link>
            </li> */}
              </ul>
            </div>
          </section>
        </div>

        <section className="col-span-full col-start-1 border-t bg-primary-blue-300 text-sm font-medium text-white">
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-end-12 flex sm:flex-col items-center justify-between lg:flex-row">
              <p className="text-sm font-normal">
                Copyright &copy; {new Date().getFullYear()} Bodunrin. All rights
                reserved.
              </p>

              <div className="flex items-center gap-x-6">
                <Image
                  src={masterCard}
                  alt="master card"
                  className={styles.footerCardIcons}
                />
                <Image
                  src={visaCard}
                  alt="visa card"
                  className={styles.footerCardIcons}
                />
                <Image
                  src={paypalCard}
                  alt="paypal card"
                  className={styles.footerCardIcons}
                />
                <Image
                  src={americanExpressCard}
                  alt="american express card"
                  className={styles.footerCardIcons}
                />
                <Image
                  src={discoverCard}
                  alt="disover card"
                  className={styles.footerCardIcons}
                />
              </div>
            </div>
          </div>
        </section>
      </footer>

      <AlertDialogComp
        description="I am hard at work bringing you a new feature. Stay tuned for updates!"
        headerText="Exciting Feature Coming Soon!"
        open={open.state && open.name === "email-subscribe-modal"}
        onClose={() => handleClose("email-subscribe-modal")}
      />
    </>
  )
}
