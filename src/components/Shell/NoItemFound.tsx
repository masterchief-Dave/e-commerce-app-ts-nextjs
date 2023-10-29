import { MaterialSymbolsRemoveShoppingCart } from "@/globals/icons"
import { Pill } from "./Pill"

const NoItemFound = () => {
  return (
    <div className='col-start-2 col-end-12 flex items-center justify-center w-full h-full'>
      <div className='border rounded-2xl w-fit space-y-8 py-24 px-8 shadow-sm'>
        <div className='flex justify-center'>
          <MaterialSymbolsRemoveShoppingCart className='w-24 h-24' />
        </div>

        <article className='flex flex-col items-center justify-center'>
          <h4 className='font-medium text-[2rem]'>We couldn't find what you were looking for.</h4>
          <p className='text-[1.6rem] text-center font-normal text-primary-grey-100'>Keep calm and try searching for more general terms or shop from categories below</p>
        </article>

        <section className='flex items-center justify-center gap-x-4'>
          <Pill content='apple' link='apple' />
          <Pill content='watch' link='watch' />
          <Pill content='usb' link='usb' />
          <Pill content='bose' link='bose' />
          <Pill content='samsung' link='samsung' />
        </section>
      </div>
    </div>
  )
}

export default NoItemFound