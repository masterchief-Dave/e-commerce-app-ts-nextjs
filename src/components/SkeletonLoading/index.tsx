import './skeleton.css'

type Props = {
  classes: string
}

export const Skeleton = ({ classes }: Props) => {
  const classNames = `skeleton ${classes} animate-pulse`

  return (
    <div className={classNames}>
      {/* <div className='skeleton.text skeleton.width-20'></div> */}
    </div>
  )
}
