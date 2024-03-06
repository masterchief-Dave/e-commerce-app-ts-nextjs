import Image from 'next/image'
import Link from 'next/link'

interface Props {
  category: string | undefined
  products: Product[] | undefined
}

export const CategoryCard = ({ products, category }: Props) => {
  console.log({ products })
  return (
    <div className='w-full bg-white p-8 shadow-product-card-box-shadow lg:w-fit xl:w-full'>
      <div>
        <div className='mb-8 flex items-center justify-between uppercase'>
          <h3 className=' text-[1.6rem] font-bold lg:text-[1.6rem]'>
            {category}
          </h3>
          <Link
            href={`/category/${category?.toLowerCase()}`}
            className='text-[1.5rem] text-primary-grey-500 hover:text-primary-blue-300'
          >
            View all categories
          </Link>
        </div>

        <section className='grid grid-cols-2 gap-4'>
          {products && products.map((product: Product, index): JSX.Element => {
            return (
              <Link href={`/product/${product._id}`} key={index}>
                <div
                  className={`${index > 1 ? 'hidden lg:block' : ''
                    } flex h-[15rem] max-w-[15rem] flex-col items-center justify-center bg-primary-white-500 p-8 lg:flex-wrap lg:flex lg:w-full lg:max-w-full`}
                >
                  <div className='relative mb-4 h-[10rem] w-[10rem]'>
                    <Image
                      src={product.images[0].url}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      className='object-cover h-[10rem] w-[10rem]'
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
