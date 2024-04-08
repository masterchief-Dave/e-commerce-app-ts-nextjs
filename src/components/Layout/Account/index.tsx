"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  UserCircleIcon,
  WalletIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import BreadCrumb from "@/components/BreadCrumb"
import { DashboardNavbar } from "@/components/Navbar/dashboardNavbar"
import useMediaQuery from "@/lib/hooks/useMediaQuery"
import { MobileSideBar } from "./sidebar"
import useAuth from "@/lib/hooks/useAuth"
import { Layout } from ".."
import { ShoppingBag, UserCircle, Wallet } from "lucide-react"
import { Navbar } from "@/components/Navbar"

type Props = {
  children?: JSX.Element
  user?: User | null
}

export const AccountLayout = ({ children }: Props) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)
  const isAboveMediaQuery = useMediaQuery("(min-width: 900px)")
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [breadcrumbs, setBreadcrumbs] = useState<
    { title: string; path: string }[]
  >([])
  const { route } = router

  if (!isAuthenticated) {
    router.push("/auth/login")
  }

  // implementing breadcrumbs
  useEffect(() => {
    const updateBreadcrumbs = () => {
      const newBreadcrumbs = [
        { title: "Account", path: "/account/profile" },
        { title: route.split("/")[2] as string, path: `${route}` },
      ]
      setBreadcrumbs(newBreadcrumbs)
    }

    updateBreadcrumbs()
  }, [router.query])

  return (
    <Layout>
      {isAuthenticated ? (
        <>
          {/* <DashboardNavbar
            setShowMobileSidebar={setShowMobileSidebar}
            showMobileSidebar={showMobileSidebar}
          /> */}
          <Navbar />

          <section className="grid grid-cols-12 py-12">
            <div className="col-start-2 col-end-12">
              <BreadCrumb breadcrumbs={breadcrumbs} />
            </div>
          </section>

          {isAboveMediaQuery ? (
            <div className="relative grid grid-cols-12 py-10">
              <section className="col-start-2 col-end-4">
                <SideBar />
              </section>

              <section className="col-start-5 col-end-12 min-h-screen">
                <main className="h-fit rounded-xl border min-h-[20rem]">
                  {children}
                </main>
              </section>
            </div>
          ) : (
            <div className="grid grid-cols-12 py-24">
              <section className="col-start-2 col-end-12 mx-auto w-full rounded-[1rem] border min-h-[20rem]">
                {children}
              </section>
              {showMobileSidebar ? (
                <MobileSideBar
                  setShowMobileSidebar={setShowMobileSidebar}
                  showMobileSidebar={showMobileSidebar}
                />
              ) : (
                ""
              )}
            </div>
          )}
        </>
      ) : (
        <main className="min-h-screen h-screen w-full bg-white/70"></main>
      )}
    </Layout>
  )
}

export const SideBar = () => {
  const router = useRouter()

  const styles = {
    header: `font-medium text-lg`,
    active: `text-gray-900  font-normal`,
    link: ` font-normal text-gray-400`,
  }
  // sticky top-[100px] w-full space-y-4 divide-y rounded-[1rem] border
  return (
    <div className="w-full space-y-4 divide-y rounded-[1rem] border">
      <section className="flex gap-x-8 p-8">
        <div>
          <UserCircle />
        </div>
        <ul className="space-y-4">
          <h2 className={styles.header}>My Profile</h2>
          <li>
            <Link
              href="/account/profile"
              className={
                router.pathname === "/account/profile"
                  ? styles.active
                  : styles.link
              }
            >
              Account information
            </Link>
          </li>

          <li>
            <Link
              href="/account/delivery-address"
              className={
                ["/account/delivery-address", "/account/add-address"].includes(
                  router.pathname
                )
                  ? styles.active
                  : styles.link
              }
            >
              Delivery address
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex gap-x-8 p-8 py-4">
        <div>
          <ShoppingBag />
        </div>
        <ul className="space-y-4">
          <h2 className={styles.header}>My Orders</h2>
          <li>
            <Link
              href="/account/orders"
              className={
                router.pathname === "/account/orders"
                  ? styles.active
                  : styles.link
              }
            >
              Order History
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                router.pathname === "/account/reviews"
                  ? styles.active
                  : styles.link
              }
            >
              My reviews
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex gap-x-8 p-8 py-4">
        <div>
          <Wallet />
        </div>
        <ul className="space-y-4">
          <h2 className={styles.header}>My Wallet</h2>
          <li>
            <Link
              href="/account/add-billing-address"
              className={
                router.pathname === "/account/add-billing-address"
                  ? styles.active
                  : styles.link
              }
            >
              Add Billing Address
            </Link>
          </li>
          <li>
            <Link
              href="/account/add-payment"
              className={
                router.pathname === "/account/add-payment"
                  ? styles.active
                  : styles.link
              }
            >
              Add payment method
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                router.pathname === "/account/saved-card"
                  ? styles.active
                  : styles.link
              }
            >
              Saved card
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
