
type Props = {
  data: string
}

export const Description = (props: Props) => {
  return (
    <div className='text-[1.6rem]'>
      {props.data.split(/\r?\n/).map((text, index) => {
        return (
          <p key={index} className='py-2'>
            {text}
          </p>
        )
      })}
    </div>
  )
}
