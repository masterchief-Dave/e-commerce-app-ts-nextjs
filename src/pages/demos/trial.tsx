/* eslint-disable react/no-children-prop */
import { fetchProducts } from '@/features/fetchProducts'
import { Box, Heading } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import useSWR from 'swr'

const Trial = () => {
  return (
    <div className=''>
      <Card />
    </div>
  )
}

export default Trial

function Card() {
  const { data, error, isLoading } = useSWR(
    '/api/products/getProducts',
    fetchProducts
  )
  if (error || data === undefined) return <Box children='error' />

  return (
    <Box>
      <Skeleton height='40px' isLoaded={isLoading}>
        <Heading>{data.data.products[0].name}</Heading>
      </Skeleton>
    </Box>
  )
}

// const VideoContainer = () => {
//   return (
//     <div className='w-[20rem] rounded-xl border p-2'>
//       <video
//         // src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4'
//         className='h-[20rem] w-[20rem] object-cover'
//         autoPlay
//         loop
//         muted
//       >
//         <source src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4' />
//       </video>
//     </div>
//   )
// }
