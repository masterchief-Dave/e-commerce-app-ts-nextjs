import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
type Props = {}

const demo = (props: Props) => {
  return (
    <div>
      <div className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#eee] p-4'>
        <ChevronLeftIcon className='h-8 w-8' />
      </div>

      <div className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#eee] p-4'>
        <ChevronRightIcon className='h-8 w-8' />
      </div>
    </div>
  )
}

export default demo
