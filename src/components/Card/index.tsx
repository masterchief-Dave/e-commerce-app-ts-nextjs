import { LockClosedIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

import { IconoirDeliveryTruck, RiCustomerService2Fill } from '@/globals/icons'

type Props = {
  title: String
  description: String
  img: String
}

const styles = {
  icons: `h-12 w-12`
}

const render = (img: String) => {
  if (img === 'delivery') {
    return <IconoirDeliveryTruck className={styles.icons} />
  } else if (img === 'support') {
    return <RiCustomerService2Fill className={styles.icons} />
  } else if (img === 'payment') {
    return <LockClosedIcon className={styles.icons} />
  } else if (img === 'confidence') {
    return <ShieldCheckIcon className={styles.icons} />
  }
}

export const FeaturesCard = ({ title, description, img }: Props) => {
  return (
    <div className="rounded-xl shadow-sm space-y-4 bg-white border p-8 w-fit">
      <div className="rounded-full h-24 w-24 mx-auto bg-[#FAFAFA] p-4 flex items-center justify-center">
        {render(img)}
      </div>
      <h3 className="font-semibold text-[1.6rem] text-center">{title}</h3>
      <p className="text-[1.2rem] text-center text-primary-grey-300 font-medium">{description}</p>
    </div>
  )
}