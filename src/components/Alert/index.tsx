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
    btn: `text-sm px-4 py-2 font-rubik`,
  }

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="w-[500px] max-w-[500px] font-rubik">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">{headerText}</AlertDialogTitle>
          <AlertDialogDescription className="text-base font-normal">
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
