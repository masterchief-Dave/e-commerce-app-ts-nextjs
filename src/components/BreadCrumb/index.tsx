import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {}

const BreadCrumb = (props: Props) => {
  return (
    <section className='grid w-full grid-cols-12 bg-primary-breadcrumb'>
      <div className='col-start-2 col-end-12 mx-auto w-full'>
        <div className='flex items-center gap-x-4 py-12 font-matter text-[1.2rem]'>
          <Link href='#'>Link 1</Link>
          <ChevronRightIcon className='h-4 w-4' />
          <Link href='#'>Link 2</Link>
        </div>
      </div>
    </section>
  )
}

export default BreadCrumb
