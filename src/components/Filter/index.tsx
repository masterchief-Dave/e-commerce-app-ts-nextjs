import { brandCategory, priceCategory, productCategory } from "@/globals/sort"
import useCategoryStore from "@/lib/store/category.store"
import type { CategoryParamInterface } from "@/lib/types/product"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"

const styles = {
  accoordionHeader: `text-[1.4rem] font-normal text-primary-grey-100 py-4`,
}

export const Filter = () => {
  const { params, setParams } = useCategoryStore((state) => state)
  console.log({ params })

  return (
    <div className="max-w-[30rem]">
      <div>
        <div>
          <BrowseCategories params={params} setParams={setParams} />
          <Price />
          <Rating />
        </div>
      </div>
    </div>
  )
}

interface Props {
  params: CategoryParamInterface
  setParams: (data: CategoryParamInterface) => void
}

const BrowseCategories = ({ params, setParams }: Props) => {
  const router = useRouter()

  const handleNavigation = (link: string) => {
    setParams({ name: link })
    router.replace(
      `?name=${link}&limit=${10}&page=${params.page}&price=${
        params.price
      }&rating=${params.rating}`
    )
  }
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className={`${styles.accoordionHeader}`}
            >
              Browse Categories
            </Box>
            <AccordionIcon
              className="h-12 w-12"
              width={"12px"}
              height={"12px"}
            />
          </AccordionButton>
        </h2>
        {productCategory.map(({ title }, idx) => {
          const link = title.toLowerCase()
          return (
            <AccordionPanel
              pb={4}
              className="text-[1.4rem] font-medium text-primary-grey-100"
              key={idx}
            >
              <span
                onClick={() => handleNavigation(link)}
                className="cursor-pointer"
                // href={`?name=${link}&limit=${10}&page=${page}&price=${price}&rating=${rating}`}
              >
                {title}
              </span>
            </AccordionPanel>
          )
        })}
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
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className={`${styles.accoordionHeader}`}
            >
              Price
            </Box>
            <AccordionIcon
              className="h-12 w-12"
              width={"12px"}
              height={"12px"}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="space-y-4">
          {priceCategory.map((price) => {
            return (
              <Link
                href="#"
                className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
                key={price.id}
              >
                <input type="radio" />
                <p>{price.title}</p>
              </Link>
            )
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

const Brand = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className={`${styles.accoordionHeader}`}
            >
              Price
            </Box>
            <AccordionIcon
              className="h-12 w-12"
              width={"12px"}
              height={"12px"}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="space-y-4">
          {brandCategory.map((price) => {
            return (
              <Link
                href="#"
                className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
                key={price.id}
              >
                <input type="radio" />
                <label htmlFor="">{price.title}</label>
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
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className={`${styles.accoordionHeader}`}
            >
              Rating
            </Box>
            <AccordionIcon
              className="h-12 w-12"
              width={"12px"}
              height={"12px"}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="space-y-4">
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
            >
              <input type="radio" />
              <label htmlFor="" className="flex items-center">
                {[5, 4, 3, 2, 1].map((star, index) => {
                  return (
                    <Star
                      className="h-8 w-8"
                      key={index}
                      fill="#edab56"
                      stroke="none"
                    />
                  )
                })}
              </label>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
            >
              <input type="radio" />
              <label htmlFor="" className="flex items-center">
                {[4, 3, 2, 1].map((star, index) => {
                  return (
                    <Star
                      className="h-8 w-8"
                      key={index}
                      fill="#edab56"
                      stroke="none"
                    />
                  )
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
            >
              <input type="radio" />
              <label htmlFor="" className="flex items-center">
                {[3, 2, 1].map((star, index) => {
                  return (
                    <Star
                      className="h-8 w-8"
                      key={index}
                      fill="#edab56"
                      stroke="none"
                    />
                  )
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
            >
              <input type="radio" />
              <label htmlFor="" className="flex items-center">
                {[2, 1].map((star, index) => {
                  return (
                    <Star
                      className="h-8 w-8"
                      key={index}
                      fill="#edab56"
                      stroke="none"
                    />
                  )
                })}
                <span>& Up</span>
              </label>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-x-2 text-[1.4rem] font-medium text-primary-grey-100"
            >
              <input type="radio" />
              <label htmlFor="" className="flex items-center">
                {[1].map((star, index) => {
                  return (
                    <Star
                      className="h-8 w-8"
                      key={index}
                      fill="#edab56"
                      stroke="none"
                    />
                  )
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
