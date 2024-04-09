import useCategoryStore from "@/lib/store/category.store"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  category: string
  products: Product[] | undefined
}

export const FeatureCard = ({ products, category }: Props) => {
  const router = useRouter()
  const { setParams, params } = useCategoryStore((state) => state)

  const handleNavigation = (categoryname: string) => {
    setParams({ name: categoryname })
    router.push(`/category`, {
      pathname: "/category",
      query: {
        name: category.toLowerCase(),
        limit: params.limit,
        price: params.price,
        page: params.page,
        rating: params.rating,
      },
    })
  }

  return (
    <div className="w-full bg-white p-8 shadow-product-card-box-shadow lg:w-fit xl:w-full">
      <div>
        <div className="mb-8 flex items-center justify-between uppercase">
          <h3 className="  font-bold lg:">{category}</h3>
          <button
            onClick={() => handleNavigation(category)}
            // href={`/category?name=${category?.toLowerCase()}`}
            className="text-[15px] text-primary-grey-500 hover:text-primary-blue-300"
          >
            View all categories
          </button>
        </div>

        <section className="grid grid-cols-2 gap-4">
          {products &&
            products.map((product: Product, index): JSX.Element => {
              return (
                <Link href={`/product/${product._id}`} key={index}>
                  <div
                    className={`${
                      index > 1 ? "hidden lg:block" : ""
                    } flex h-[150px] max-w-[150px] flex-col items-center justify-center bg-primary-white-500 p-8 lg:flex-wrap lg:flex lg:w-full lg:max-w-full`}
                  >
                    <div className="relative mb-4 h-[100px] w-[100px]">
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        width={1000}
                        height={1000}
                        className="object-cover h-[100px] w-[100px]"
                      />
                    </div>
                    {/* <p className='truncate text-[1rem] font-semibold uppercase text-primary-grey-300'>
                    {data.name}
                  </p> */}
                  </div>
                </Link>
              )
            })}
        </section>
      </div>
    </div>
  )
}
