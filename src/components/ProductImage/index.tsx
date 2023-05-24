import Image from 'next/image'

type Props = {
  fill: boolean
  product: Product
}

export const ProductImage = ({ fill, product }: Props) => {
  return (
    <>
      {fill ? (
        <Image src={product.images[0].url} alt={product.name} fill />
      ) : (
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={1000}
          height={1000}
        />
      )}
    </>
  )
}
