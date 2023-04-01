import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {}

const BreadCrumb = (props: Props) => {
  return (
    <section className='grid grid-cols-12 bg-primary-breadcrumb'>
      <div className='col-start-2 col-end-12 max-w-[144rem]'>
        <div className='flex items-center gap-x-4 py-12 font-matter text-[1.2rem]'>
          <span>Link 1</span>
          <ChevronRightIcon className='h-6 w-6' />
          <span>Link 2</span>
        </div>
      </div>
    </section>
  )
}

export default BreadCrumb
