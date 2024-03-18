import { Skeleton, SkeletonText } from '@chakra-ui/react'

type Props = {
  isLoading: boolean
  children: JSX.Element
  className: string
}

export const ProductCardSkeleton = () => {
  return (
    <div className='mb-24 h-[20rem] min-h-[20rem] max-w-[25rem]'>
      <Skeleton height={'20rem'} />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </div>
  )
}

export const CategorySkeleton = () => {
  return (
    <div className="mb-24 h-[20rem] min-h-[20rem]">
      <Skeleton height={'20rem'} />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </div>
  )
}

export const CartSkeleton = () => {
  return (
    <div className="mb-24 h-[20rem] min-h-[20rem]">
      <Skeleton height={'10rem'} />
      <SkeletonText mt={'4'} noOfLines={4} spacing={'4'} skeletonHeight={'2'} />
    </div>
  )
}