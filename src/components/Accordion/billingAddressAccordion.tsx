'use client'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useEffect, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import styles from './index.module.scss'
import { countryCode } from '@/globals/countries'
import { Input } from "../ui/input"
import SelectComp from "../molecules/selectComp"
import { billingAddressSchema, billingAddressVal, titleOptions } from "@/lib/schema/auth.schema"


export const BillingAddress = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [billingAddress, setBillingAddress] = useState<string>('')

  const countries = useMemo(() => {
    const countries = countryCode.map((country) => ({ label: country.country, value: country.country }))
    return countries
  }, [countryCode])


  useEffect(() => {
    setMounted(true)
  }, [])

  // handle the form for the billingAddress 
  const formik = useFormik({
    initialValues: billingAddressVal,
    validationSchema: billingAddressSchema,
    onSubmit: (values, formikHelpers) => {

    },
  })

  const handleTitleChange = (e: any) => {
    formik.setFieldValue('title', e)
  }

  const handleCountryChange = (e: any) => {
    formik.setFieldValue('country', e)
  }

  console.log(formik.values)

  return (
    <div className='py-10 w-[80%]  text-[1.6rem]'>
      <div className='border-l border-r '>
        {mounted && (
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => {
                return (
                  <>
                    <h2>
                      <AccordionButton className='flex justify-between bg-[#f7f9fa] text-[1.6rem] lg:text-[1.5rem] w-full'>
                        <div className='flex items-center justify-start gap-8 w-full'>
                          <Input
                            type='radio'
                            name='savedAddress'
                            value='savedAddress'
                            checked={billingAddress === 'savedAddress'}
                            onChange={(e) => setBillingAddress(e.target.value)}
                            className="w-fit"
                          />
                          <div className='rounded-md border p-2'>
                            <GlobeAltIcon className='h-8 w-16' />
                          </div>
                          <p className={`${styles.accordionHeader}`}>
                            {' '}
                            Saved Billing Address{' '}
                          </p>
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className='space-y-8 px-8 py-8'>
                        <section className='grid grid-cols-12 gap-4 text-left font-medium'>
                          <div className='col-start-1 col-end-8'>
                            <h5 className={styles.cardTitle}>Address</h5>
                            <p className={`${styles.cardText} text-[1.6rem]`}>
                              Osborne Foreshore Estate, 1A 2nd St, Ikoyi 106104,
                              Lagos
                            </p>
                          </div>
                          <div className='col-start-8 col-end-10'>
                            <h5 className={styles.cardTitle}>City</h5>
                            <p className={`${styles.cardText} text-[1.6rem]`}>Lagos</p>
                          </div>
                          <div className='col-start-10 col-end-13'>
                            <h5 className={styles.cardTitle}>Postcode</h5>
                            <p className={`${styles.cardText} text-[1.6rem]`}>122024</p>
                          </div>
                        </section>
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
                    <AccordionButton className='flex justify-between bg-[#f7f9fa] text-[1.1rem] lg:text-[1.6rem]'>
                      <div className='flex items-center gap-8 w-full justify-start'>
                        <Input
                          type='radio'
                          name='newBillingAddress'
                          id='newBillingAddress'
                          value='newBillingAddress'
                          checked={billingAddress === 'newBillingAddress'}
                          onChange={(e) => setBillingAddress(e.target.value)}
                          className="w-fit"
                        />
                        <div className='rounded-md border p-2'>
                          <GlobeAltIcon className='h-8 w-16' />
                        </div>
                        <p className={`${styles.accordionHeader}`}>
                          Billing Address
                        </p>
                      </div>
                    </AccordionButton>
                    <AccordionPanel>
                      <div className='space-y-8 px-2 py-8 lg:px-8'>
                        <form
                          action=''
                          className='grid grid-cols-2 gap-12 p-4'
                          onSubmit={formik.handleSubmit}
                        >
                          <div className='col-span-full'>
                            <label htmlFor='title' className={styles.label}>
                              Title
                            </label>
                            <SelectComp
                              placeholder="Title"
                              label="Select Title"
                              options={titleOptions}
                              onChange={handleTitleChange}
                              name="title"
                            />
                          </div>

                          <div>
                            <label htmlFor='firstname' className={styles.label}>
                              Firstname
                            </label>
                            <Input
                              type='text'
                              id='firstname'
                              name='firstname'
                              onChange={formik.handleChange}
                              value={formik.values.firstname as string}
                              placeholder='First Name'
                              className={styles.input}
                            />
                          </div>
                          <div>
                            <label htmlFor='lastname' className={styles.label}>
                              Lastname
                            </label>
                            <Input
                              type='text'
                              id='lastname'
                              name='lastname'
                              onChange={formik.handleChange}
                              value={formik.values.lastname as string}
                              placeholder='Last Name'
                              className={styles.input}
                            />
                          </div>

                          <div className='max-h-full'>
                            <label htmlFor='country' className={styles.label}>
                              Country
                            </label>

                            <SelectComp
                              placeholder="Select Country"
                              label="Billing Address Country"
                              options={countries}
                              name="country"
                              onChange={handleCountryChange}
                            />
                          </div>

                          <div>
                            <label htmlFor='zipcode' className={styles.label}>
                              Zip code
                            </label>
                            <Input
                              type='text'
                              id='zipcode'
                              name='zipcode'
                              onChange={formik.handleChange}
                              value={formik.values.zipcode as string}
                              placeholder='Zip code'
                              className={styles.input}
                            />
                          </div>

                          <div className='col-span-full'>
                            <label
                              htmlFor='AddressLine1'
                              className={styles.label}
                            >
                              Address Line 1
                            </label>
                            <Input
                              type='text'
                              id='AddressLine1'
                              name='addressLine1'
                              onChange={formik.handleChange}
                              value={formik.values.addressLine1 as string}
                              placeholder='Address Line 1'
                              className={styles.input}
                            />
                          </div>

                          <div className='col-span-full flex items-center gap-x-4'>
                            <Input
                              type='checkbox'
                              className='w-fit'
                              name='default'
                            />
                            <span className='text-[1.6rem]'>
                              Make this my default delivery address
                            </span>
                          </div>

                          {/* <div className='col-span-full flex items-center gap-x-4'>
                            <input type='checkbox' className='' />
                            <span className='text-[1.2rem]'>
                              Make this my default billing address
                            </span>
                          </div> */}

                          <div className='w-[1/2]'>
                            <button
                              type='submit'
                              className={styles.btn}>
                              Save
                            </button>
                          </div>
                        </form>
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
