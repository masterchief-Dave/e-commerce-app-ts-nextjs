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

import { GithubIcon, TwitterIcon, LinkedinIcon, SendIcon } from "lucide-react"
import { useState } from "react"
import AlertDialogComp from "../Alert"

type Props = {}

export const Footer = (props: Props) => {
  const styles = {
    footerCardIcons: `lg:h-8 lg:w-8 w-6 h-6`,
    footerHeader: `text-sm font-semibold text-black `,
    socialMediaIcons: `w-5 h-5 cursor-pointer text-black`,
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
      <footer className="mx-auto grid w-full grid-cols-12 border-t mt-12">
        <div className="col-span-full grid grid-cols-12 bg-white py-8">
          <section className="col-start-2 col-end-12 mb-10 sm:flex sm:flex-col gap-8 md:grid lg:grid-cols-4">
            <div className="space-y-8">
              <h4 className=" font-semibold text-black text-sm">Warehouse</h4>
              <div className="flex items-center gap-6">
                <PhoneIcon className="h-5 w-5 text-black" fill="#fff" />
                <div className="text-sm">
                  <p className="text-black"> Call Customer Services:</p>
                  <p className=" font-bold text-black text-sm">
                    bodunrindavidbond@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <MapPinIcon className="h-5 w-5 text-black" />
                <div className="text-sm">
                  <p className="text-black">Address:</p>
                  <p className="text-black">
                    PO Box 1622, Hidden Leaf Village.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className={styles.footerHeader}>Legal</h4>
              <ul className="grid grid-cols-2 items-center gap-4 font-normal text-black lg:block lg:gap-0 lg:space-y-6 text-sm">
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
              <ul className="grid grid-cols-2 items-center gap-4 font-normal text-black lg:block lg:gap-0 lg:space-y-6 text-sm">
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

                {/* <li>
              <Link href='#'>Faq</Link>
            </li> */}
              </ul>
            </div>

            <div>
              <div className="space-y-8 flex flex-col items-start">
                <h4 className={styles.footerHeader}>
                  Subscribe to our Newsletter
                </h4>
                <form>
                  <div className="flex w-full items-center gap-x-2 text-sm border p-1 rounded-md bg-white">
                    <Input
                      type="text"
                      placeholder="Enter email address"
                      className="h-full w-[90%] rounded-md border-0"
                      id="lose-your-charm"
                    />
                    <Button
                      variant="default"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpen({
                          name: "email-subscribe-modal",
                          state: true,
                        })
                      }}
                      className="h-full w-fit rounded-md font-normal text-white btn p-2"
                    >
                      <SendIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        <section className="col-span-full col-start-1 border-t bg-white text-sm font-medium text-black">
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
