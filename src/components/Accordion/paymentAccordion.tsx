
// payment accordion
'use client'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CreditCardIcon } from '@heroicons/react/24/solid'
import { usePaymentInputs } from 'react-payment-inputs'

import visaCard from 'public/assets/icons/visa-card.png'
import masterCard from 'public/assets/icons/master-card.png'
import discoverCard from 'public/assets/icons/discover-card.png'
import americanExpress from 'public/assets/icons/american-express-card.png'

export const PaymentAccordion = () => {
  const [mounted, setMounted] = useState(false)
  const [cardDetails, setCardDetails] = useState()

  const [formData, setFormData] = useState({
    userName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  })

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs()

  // handle form
  const handleForm = (e) => {
    e.preventDefault()

    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // styles
  const styles = {
    cardTitle: `font-semibold`,
    cardText: `font-light`,
    cardInput: `h-[4rem] w-full border px-4`,
    cardImage: `h-12 w-12`,
    label: `block text-[1.3rem] font-semibold`,
  }

  console.log(cardDetails)

  return (
    <div className='py-10 font-inter text-[1.4rem]'>
      <div className='font-poppins border-l border-r'>
        {mounted && (
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => {
                // setCardDetails('default')
                return (
                  <>
                    <h2>
                      <AccordionButton className='flex justify-between bg-[#F3F6F8] text-[1rem] lg:text-[1.4rem]'>
                        <div className='flex items-center gap-8'>
                          <input
                            type='radio'
                            name='paymentType'
                            value='savedCard'
                            checked={cardDetails === 'savedCard'}
                            onChange={(e) => setCardDetails(e.target.value)}
                          />
                          <div className='rounded-md border p-2'>
                            <CreditCardIcon className='h-8 w-16' />
                          </div>
                          <p className='font-bold'> Mastercard **** 8833</p>
                        </div>
                        <Box as='span' textAlign='left'>
                          <Image
                            src={visaCard}
                            alt='user-card'
                            className='h-12 w-12'
                          />
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className='space-y-8 px-8 py-8'>
                        <section className='grid grid-cols-12 gap-4 text-left'>
                          <div className='col-start-1 col-end-7'>
                            <h5 className={styles.cardTitle}>Name on Card</h5>
                            <p className={styles.cardText}>
                              Bodunrin Esther Jolayemi
                            </p>
                          </div>
                          <div className='col-start-7 col-end-10'>
                            <h5 className={styles.cardTitle}>Card Number</h5>
                            <p className={styles.cardText}>**** 5685</p>
                          </div>
                          <div className='col-start-10 col-end-13'>
                            <h5 className={styles.cardTitle}>Expiry Date</h5>
                            <p className={styles.cardText}>12/2024</p>
                          </div>
                        </section>

                        <section>
                          <p className='font-light'>
                            Certain banks in Nigeria do not allow local currency
                            NGN payments for international payments, therefore
                            your payment will be in USD.
                          </p>
                        </section>

                        <section>
                          <p className='text-[1.4rem] font-bold'>
                            The amount your card will be charged is $64.95.
                          </p>
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
                    <AccordionButton className='flex justify-between bg-[#F3F6F8] text-[1rem] lg:text-[1.4rem]'>
                      <div className='flex items-center gap-8'>
                        <input
                          type='radio'
                          name='createCard'
                          id='createCard'
                          value='createCard'
                          checked={cardDetails === 'createCard'}
                          onChange={(e) => setCardDetails(e.target.value)}
                        />
                        <div className='rounded-md border p-2'>
                          <CreditCardIcon className='h-8 w-16' />
                        </div>
                        <p className='font-bold'>Credit/Debit Card</p>
                      </div>
                      <Box as='div' className='flex items-center gap-4'>
                        <Image
                          src={visaCard}
                          alt='user-card'
                          className={styles.cardImage}
                        />
                        <Image
                          src={masterCard}
                          alt='master-card'
                          className={styles.cardImage}
                        />
                        <Image
                          src={discoverCard}
                          alt='discover-card'
                          className={styles.cardImage}
                        />
                        <Image
                          src={americanExpress}
                          alt='american-card'
                          className={styles.cardImage}
                        />
                      </Box>
                    </AccordionButton>
                    <AccordionPanel>
                      <div className='space-y-8 px-8 py-8'>
                        <form className='grid grid-cols-12 gap-4 space-y-4 text-left'>
                          <div className='col-span-full col-start-1'>
                            <label htmlFor='username' className={styles.label}>
                              Name on card
                            </label>
                            <input
                              type='text'
                              id='username'
                              name='userName'
                              className={styles.cardInput}
                              placeholder='Name on card'
                              onChange={handleForm}
                              value={formData.userName}
                            />
                          </div>

                          <div className='col-span-full col-start-1'>
                            <label
                              htmlFor='cardNumber'
                              className={styles.label}
                            >
                              Card Number
                            </label>
                            <input
                              type='text'
                              id='cardNumber'
                              name='cardNumber'
                              className={styles.cardInput}
                              placeholder='Card Number'
                              {...getCardNumberProps({
                                onChange: handleForm,
                              })}
                              value={formData.cardNumber}
                            />
                          </div>

                          <div className='col-span-full grid grid-cols-2 gap-4'>
                            <div className='w-full'>
                              <label htmlFor='CVV' className={styles.label}>
                                CVC/CVV
                              </label>
                              <input
                                type='text'
                                id='CVC'
                                name='cvc'
                                className={styles.cardInput}
                                {...getCVCProps({ onChange: handleForm })}
                                value={formData.cvc}
                              />
                            </div>
                            <div className='w-full'>
                              <label
                                htmlFor='expiryDate'
                                className={styles.label}
                              >
                                Expiry Date
                              </label>
                              <input
                                type='text'
                                id='expiryDate'
                                name='expiryDate'
                                placeholder='Expiry Date'
                                className={styles.cardInput}
                                {...getExpiryDateProps({
                                  onChange: handleForm,
                                })}
                                value={formData.expiryDate}
                              />
                            </div>
                          </div>

                          <div className='item-center col-span-full flex w-full gap-4'>
                            <input
                              type='checkbox'
                              id='saveCard'
                              className='accent-black'
                            />
                            <label htmlFor='saveCard'>
                              Securely save this card for my later purchase
                            </label>
                          </div>
                        </form>

                        <section>
                          <p className='font-light'>
                            Certain banks in Nigeria do not allow local currency
                            NGN payments for international payments, therefore
                            your payment will be in USD.
                          </p>
                        </section>

                        <section>
                          <p className='text-[1.4rem] font-bold'>
                            The amount your card will be charged is $64.95.
                          </p>
                        </section>
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

export default PaymentAccordion
