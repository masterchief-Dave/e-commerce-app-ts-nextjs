import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface Props {
  open: boolean
  onClose: () => void
  headerText: string
  description: string
  buttonProp?: {
    title: string
    method: () => void
  }
  showBtn?: boolean
}

const AlertDialogComp = ({
  open,
  onClose,
  headerText,
  description,
  buttonProp,
  showBtn = false,
}: Props) => {
  const styles = {
    btn: `text-[1.4rem] px-8 py-4 h-[4rem] font-rubik`,
  }

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="w-[500px] max-w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[1.8rem]">
            {headerText}
          </AlertDialogTitle>
          <AlertDialogDescription className=" font-normal">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={`${styles.btn}`}>
            Close
          </AlertDialogCancel>
          {showBtn && <AlertDialogAction>Continue</AlertDialogAction>}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogComp
