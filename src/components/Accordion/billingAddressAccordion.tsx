"use client"

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { useEffect, useMemo, useState } from "react"
import { useFormik } from "formik"
import styles from "./index.module.scss"
import { countryCode } from "@/globals/countries"
import { Input } from "../ui/input"
import SelectComp from "../molecules/selectComp"
import {
  billingAddressSchema,
  billingAddressVal,
  titleOptions,
} from "@/lib/schema/auth.schema"
import { AddressForm } from "../Account/Address/addressForm"
import { useGetDefaultBillingAddress } from "@/lib/hooks/user/user.hook"
import addBillingAddressHelper from "@/utils/addBillingAddress.helper"
import { useToast } from "../ui/use-toast"
import useShippingAddress from "@/lib/store/shipping.store"

interface BillingAddressAccordionInterface {
  billingAddress: string
  setBillingAddress: React.Dispatch<React.SetStateAction<string>>
}

export const BillingAddress = ({
  billingAddress,
  setBillingAddress,
}: BillingAddressAccordionInterface) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const billingAddressQuery = useGetDefaultBillingAddress()
  // const [isSavedBillingAddress, setIsSavedBillingAddress] = useState(true)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const { setAddress } = useShippingAddress()
  // const countries = useMemo(() => {
  //   const countries = countryCode.map((country) => ({ label: country.country, value: country.country }))
  //   return countries
  // }, [countryCode])

  useEffect(() => {
    setMounted(true)
  }, [])

  // handle the form for the billingAddress
  const formik = useFormik({
    initialValues: billingAddressVal,
    validationSchema: billingAddressSchema,
    onSubmit: (values, formikHelpers) => {
      // add the billing address global state here
      setAddress({
        address: values.address,
        country: values.country,
        default: values.default,
        firstname: values.firstname,
        lastname: values.lastname,
        phoneNumber: values.phoneNumber,
        zipCode: values.zipCode,
      })
      addBillingAddressHelper({
        values,
        formik,
        setLoading,
        toast,
        reset: false,
      })
    },
  })

  function renderSavedBillingAddress() {
    if (
      billingAddressQuery.data &&
      billingAddressQuery.data?.address.length > 1 &&
      billingAddressQuery.data?.country.length > 1 &&
      billingAddressQuery.data?.zipCode.length > 1
    ) {
      return (
        <section className="grid grid-cols-12 gap-4 text-left font-medium">
          <div className="col-start-1 col-end-8">
            <h5 className={styles.cardTitle}>Address</h5>
            <p className={`${styles.cardText} `}>
              {billingAddressQuery.data?.address}
            </p>
          </div>
          <div className="col-start-8 col-end-10">
            <h5 className={styles.cardTitle}>City</h5>
            <p className={`${styles.cardText} `}>
              {billingAddressQuery.data?.country}
            </p>
          </div>
          <div className="col-start-10 col-end-13">
            <h5 className={styles.cardTitle}>Postcode</h5>
            <p className={`${styles.cardText} `}>
              {billingAddressQuery.data?.zipCode}
            </p>
          </div>
        </section>
      )
    } else {
      return (
        <section className="">
          <p> No Saved Billing Address. </p>
        </section>
      )
    }
  }

  return (
    <div className="py-10 w-[80%]">
      <div className="border-l border-r ">
        {mounted && (
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => {
                return (
                  <>
                    <h2>
                      <AccordionButton className="flex justify-between bg-[#f7f9fa] text-base w-full">
                        <div className="flex items-center justify-start gap-8 w-full">
                          <Input
                            type="radio"
                            name="savedAddress"
                            value="savedAddress"
                            checked={billingAddress === "savedAddress"}
                            onChange={(e) => setBillingAddress(e.target.value)}
                            className="w-fit"
                          />
                          <div className="rounded-md border p-2">
                            <GlobeAltIcon className="h-6 w-12" />
                          </div>
                          <p className={`${styles.accordionHeader}`}>
                            {" "}
                            Saved Billing Address{" "}
                          </p>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="space-y-8 px-8 py-2">
                        {renderSavedBillingAddress()}
                      </div>
                    </AccordionPanel>
                  </>
                )
              }}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionButton className="flex justify-between bg-[#f7f9fa] text-sm">
                      <div className="flex items-center gap-8 w-full justify-start">
                        <Input
                          type="radio"
                          name="newBillingAddress"
                          id="newBillingAddress"
                          value="newBillingAddress"
                          checked={billingAddress === "newBillingAddress"}
                          onChange={(e) => setBillingAddress(e.target.value)}
                          className="w-fit"
                        />
                        <div className="rounded-md border p-2">
                          <GlobeAltIcon className="h-6 w-12" />
                        </div>
                        <p className={`${styles.accordionHeader}`}>
                          Billing Address
                        </p>
                      </div>
                    </AccordionButton>
                    <AccordionPanel>
                      <div className="space-y-8 px-2 py-2 lg:px-4">
                        <AddressForm formik={formik} loading={loading} />
                      </div>
                    </AccordionPanel>
                  </>
                )
              }}
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  )
}
