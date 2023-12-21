import Image from 'next/image'
import Link from 'next/link'

interface Props {
  data: {
    name: string
    categoryItems: ICategory[]
    link: string
  }
}

export const CategoryCard = ({ data: { categoryItems, name, link } }: Props) => {
  return (
    <div className='w-full bg-white p-8 shadow-product-card-box-shadow lg:w-fit xl:w-full'>
      <div>
        <div className='mb-8 flex items-center justify-between uppercase'>
          <h3 className=' text-[1.6rem] font-bold lg:text-[1.6rem]'>
            {name}
          </h3>
          <Link
            href={link}
            className='text-[1rem] text-primary-grey-500 hover:text-primary-blue-300'
          >
            View all categories
          </Link>
        </div>

        <section className='grid grid-cols-2 gap-4'>
          {categoryItems.map((data: ICategory, index): JSX.Element => {
            return (
              <Link href={data.link} key={index}>
                <div
                  className={`${index > 1 ? 'hidden lg:block' : ''
                    } flex h-[15rem] max-w-[15rem] flex-col items-center justify-center bg-primary-white-500 p-8 lg:flex-wrap lg:flex lg:w-full lg:max-w-full`}
                >
                  <div className='relative mb-4 h-[10rem] w-[10rem]'>
                    <Image
                      src={data.img}
                      alt={data.name}
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
