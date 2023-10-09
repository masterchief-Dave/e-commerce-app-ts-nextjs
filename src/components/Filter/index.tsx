import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { Star } from 'lucide-react'
import Link from 'next/link'

export const Filter = () => {
  return (
    <div className="max-w-[30rem]">
      <div>
        <div>
          <BrowseCategories />
          <Price />
          <Rating />
        </div>
      </div>
    </div>
  )
}


const BrowseCategories = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className='text-[1.8rem] font-semibold'>
              Browse Categories
            </Box>
            <AccordionIcon className='h-12 w-12' width={'12px'} height={'12px'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className='text-[1.4rem] font-medium text-primary-grey-100'>
          <Link href=''>Electronics</Link>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

const Price = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className='text-[1.8rem] font-semibold'>
              Price
            </Box>
            <AccordionIcon className='h-12 w-12' width={'12px'} height={'12px'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className='space-y-4'>
          {priceCategory.map((price) => {
            return (
              <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100' key={price.id}>
                <input type='radio' />
                <p>{price.text}</p>
              </Link>
            )
          })}

        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

const priceCategory = [
  { id: 1, link: ``, text: 'Under $20' },
  { id: 2, link: ``, text: '$20 - $50' },
  { id: 3, link: ``, text: '$50 - $100' },
  { id: 4, link: ``, text: '$100 - $200' },
  { id: 5, link: ``, text: '$200 - $400' },
  { id: 6, link: ``, text: 'Above $400' }
]

const Brand = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className='text-[1.8rem] font-semibold'>
              Price
            </Box>
            <AccordionIcon className='h-12 w-12' width={'12px'} height={'12px'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className='space-y-4'>
          {priceCategory.map((price) => {
            return (
              <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100' key={price.id}>
                <input type='radio' />
                <label htmlFor=''>{price.text}</label>
              </Link>
            )
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

const Rating = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' className='text-[1.8rem] font-semibold'>
              Rating
            </Box>
            <AccordionIcon className='h-12 w-12' width={'12px'} height={'12px'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className='space-y-4'>
          <div className='space-y-4'>
            <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100'>
              <input type='radio' />
              <label htmlFor='' className='flex items-center'>
                {[4, 3, 2, 1].map((star, index) => {
                  return <Star className='h-8 w-8' key={index} fill='#edab56' stroke='none' />
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100'>
              <input type='radio' />
              <label htmlFor='' className='flex items-center'>
                {[3, 2, 1].map((star, index) => {
                  return <Star className='h-8 w-8' key={index} fill='#edab56' stroke='none' />
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100'>
              <input type='radio' />
              <label htmlFor='' className='flex items-center'>
                {[2, 1].map((star, index) => {
                  return <Star className='h-8 w-8' key={index} fill='#edab56' stroke='none' />
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link href='#' className='flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100'>
              <input type='radio' />
              <label htmlFor='' className='flex items-center'>
                {[1].map((star, index) => {
                  return <Star className='h-8 w-8' key={index} fill='#edab56' stroke='none' />
                })}
                <span>& Up</span>
              </label>
            </Link>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}



