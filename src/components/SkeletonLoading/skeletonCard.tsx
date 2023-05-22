// import { Skeleton } from './skeleton'

import { Skeleton } from '.'

const SkeletonPost = () => {
  return (
    <>
      {/* <div className='post grid grid-cols-5 gap-12'>
      <Skeleton classes='title text card width-20' />
      <Skeleton classes='card width-20' />
      <Skeleton classes='card width-20' />
      <Skeleton classes='card width-20' />
      <Skeleton classes='title width-50' />
      <Skeleton classes='text width-100' />
      <Skeleton classes='text width-100' />
      <Skeleton classes='text width-100' />
    </div> */}

      <div className='post'>
        <Skeleton classes='card width-20' />
        <Skeleton classes='text width-20' />
        <Skeleton classes='text width-20' />
        <Skeleton classes='text width-20' />
      </div>
    </>
  )
}

export default SkeletonPost

/**
 * 
 *  <Skeleton classes='title width-50' />
        <Skeleton classes='text width-100' />
        <Skeleton classes='text width-100' />
        <Skeleton classes='text width-100' />
 */
