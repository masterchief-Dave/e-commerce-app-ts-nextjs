import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  data: {
    name: string
    categoryItems: ICategory[]
  }
}

export const CategoryCard = ({ data: { categoryItems, name } }: Props) => {
  return (
    <div className='w-full bg-white p-8 shadow-product-card-box-shadow lg:w-fit'>
      <div>
        <div className='mb-8 flex items-center justify-between uppercase'>
          <h3 className='font-matter text-base font-bold lg:text-[1.4rem]'>
            {name}
          </h3>
          <Link
            href='#'
            className='text-[1rem] text-primary-grey-500 hover:text-primary-blue-300'
          >
            View all categories
          </Link>
        </div>

        <section className='grid grid-cols-2 gap-4'>
          {categoryItems.map((data: ICategory, index): JSX.Element => {
            return (
              <Link href='#' key={index}>
                <div
                  className={`${
                    index > 1 ? 'hidden lg:block' : ''
                  } flex h-[15rem] w-full flex-col items-center justify-center bg-primary-white-500 p-8 lg:max-w-[15rem]`}
                >
                  <div className='relative mb-4 h-[10rem] w-[10rem]'>
                    <Image
                      src={data.img}
                      alt={data.name}
                      width={1000}
                      height={1000}
                      className='object-fill'
                    />
                  </div>
                  <p className='truncate text-[1rem] font-semibold uppercase text-primary-grey-300'>
                    {data.name}
                  </p>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}
