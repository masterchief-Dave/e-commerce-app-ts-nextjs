import Image from 'next/image'

type Props = {}

const CheckoutProduct = (props: Props) => {
  return (
    <div className='flex gap-x-12'>
      <div className='relative h-44 w-44'>
        <Image
          src='https://images.unsplash.com/photo-1675868375184-8d711f447b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          alt='product name'
          width={1000}
          height={1000}
          className=''
        />
      </div>
      <h2>Macbook air with M1 chip</h2>
    </div>
  )
}

export default CheckoutProduct
