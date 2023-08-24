'use client'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import styles from './index.module.scss'
import { countryCode } from '@/globals/countries'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { addShippingAddress } from '@/features/shipping-address/address-slice'

export const BillingAddress = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [billingAddress, setBillingAddress] = useState<string>('')
  const dispatch = useAppDispatch()
  // console.log({ billingAddress })
  useEffect(() => {
    setMounted(true)
  }, [])

  // handle the form for the billingAddress 
  const formik = useFormik<BillingAddress>({
    initialValues: {
      title: '',
      firstname: '',
      lastname: '',
      addressLine1: '',
      addressLine2: '',
      country: '',
      zipcode: '',
      // default: false
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      addressLine1: Yup.string().required(),
      country: Yup.string().required(),
      zipcode: Yup.string().required()
    }),
    onSubmit: (values, formikHelpers) => {
      dispatch(addShippingAddress({
        value: {
          title: values.title,
          firstname: values.firstname,
          lastname: values.lastname,
          country: values.country,
          zipcode: values.zipcode,
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2
        }
      }))
      // store the value into session storage
    },
  })

  return (
    <div className='py-10 font-inter text-[1.4rem]'>
      <div className='border-l border-r font-poppins'>
        {mounted && (
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => {
                return (
                  <>
                    <h2>
                      <AccordionButton className='flex justify-between bg-[#f7f9fa] text-base lg:text-[1.5rem]'>
                        <div className='flex items-center gap-8'>
                          <input
                            type='radio'
                            name='savedAddress'
                            value='savedAddress'
                            checked={billingAddress === 'savedAddress'}
                            onChange={(e) => setBillingAddress(e.target.value)}
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
                        <section className='grid grid-cols-12 gap-4 text-left'>
                          <div className='col-start-1 col-end-8'>
                            <h5 className={styles.cardTitle}>Address</h5>
                            <p className={`${styles.cardText} lg:text-[1.6rem]`}>
                              Osborne Foreshore Estate, 1A 2nd St, Ikoyi 106104,
                              Lagos
                            </p>
                          </div>
                          <div className='col-start-8 col-end-10'>
                            <h5 className={styles.cardTitle}>City</h5>
                            <p className={`${styles.cardText} lg:text-[1.6rem]`}>Lagos</p>
                          </div>
                          <div className='col-start-10 col-end-13'>
                            <h5 className={styles.cardTitle}>Postcode</h5>
                            <p className={`${styles.cardText} lg:text-[1.6rem]`}>122024</p>
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
                    <AccordionButton className='flex justify-between bg-[#f7f9fa] text-[1.1rem] lg:text-[1.5rem]'>
                      <div className='flex items-center gap-8'>
                        <input
                          type='radio'
                          name='newBillingAddress'
                          id='newBillingAddress'
                          value='newBillingAddress'
                          checked={billingAddress === 'newBillingAddress'}
                          onChange={(e) => setBillingAddress(e.target.value)}
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
                            <select
                              name='title'
                              id='title'
                              className={styles.select}
                              defaultValue={''}
                              onChange={formik.handleChange}
                            >
                              <option
                                value={formik.values.title as string}
                                disabled
                                className='text-[1.2rem] italic'
                              >
                                {' '}
                                Select Title
                              </option>
                              <option value='mr'>Mr.</option>
                              <option value='mrs'>Mrs.</option>
                              <option value='miss'>Miss</option>
                              <option value='ms'>Ms</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor='firstname' className={styles.label}>
                              Firstname
                            </label>
                            <input
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
                            <input
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
                            <select
                              name='country'
                              id='country'
                              onChange={formik.handleChange}
                              value={formik.values.country as string}
                              className={`h-[4.233rem] w-full border px-4 text-[1.2rem]`}
                            >
                              <option
                                value=''
                                disabled
                                className='text-[1.2rem] italic'
                              >
                                {' '}
                                Select Country
                              </option>
                              {countryCode.map((data) => {
                                return (
                                  <option
                                    key={data.iso}
                                    className={styles.option}
                                    value={data.country}
                                  >
                                    {' '}
                                    {data.country}{' '}
                                  </option>
                                )
                              })}
                            </select>
                          </div>

                          <div>
                            <label htmlFor='zipcode' className={styles.label}>
                              Zip code
                            </label>
                            <input
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
                            <input
                              type='text'
                              id='AddressLine1'
                              name='addressLine1'
                              onChange={formik.handleChange}
                              value={formik.values.addressLine1 as string}
                              placeholder='Address Line 1'
                              className={styles.input}
                            />
                          </div>

                          <div className='col-span-full'>
                            <label
                              htmlFor='AddressLine2'
                              className={styles.label}
                            >
                              Address Line 2
                            </label>
                            <input
                              type='text'
                              id='AddressLine2'
                              name='addressLine2'
                              onChange={formik.handleChange}
                              value={formik.values.addressLine2 as string}
                              placeholder='Address Line 2'
                              className={styles.input}
                            />
                          </div>

                          <div className='col-span-full flex items-center gap-x-4'>
                            <input
                              type='checkbox'
                              className=''
                              name='default'
                            />
                            <span className='text-[1.2rem]'>
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
