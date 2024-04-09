import { LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/solid"

import { IconoirDeliveryTruck, RiCustomerService2Fill } from "@/globals/icons"
import { Card } from "../ui/card"

type Props = {
  title: String
  description: String
  img: String
}

const styles = {
  icons: `h-12 w-12`,
}

const render = (img: String) => {
  if (img === "delivery") {
    return <IconoirDeliveryTruck className={styles.icons} />
  } else if (img === "support") {
    return <RiCustomerService2Fill className={styles.icons} />
  } else if (img === "payment") {
    return <LockClosedIcon className={styles.icons} />
  } else if (img === "confidence") {
    return <ShieldCheckIcon className={styles.icons} />
  }
}

export const FeaturesCard = ({ title, description, img }: Props) => {
  return (
    <Card className="shadow-sm space-y-4 bg-white border p-4">
      <div className="rounded-full h-16 w-16 mx-auto bg-[#FAFAFA] p-4 flex items-center justify-center">
        {render(img)}
      </div>
      <h3 className="font-semibold  text-center">{title}</h3>
      <p className="text-sm text-center text-primary-grey-300 font-medium">
        {description}
      </p>
    </Card>
  )
}
