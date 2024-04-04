import { AddPaymentMethodForm } from "@/components/Form/PaymentForm/add-payment-form"
import { AccountLayout } from "@/components/Layout/Account"

const Addpayment = () => {
  return (
    <div className="">
      <AccountLayout>
        <div>
          <header className="flex items-center justify-between border-b p-4">
            <h1 className="text-xl font-semibold">Add new Payment method</h1>
          </header>

          <div className="p-8">
            <AddPaymentMethodForm />
          </div>
        </div>
      </AccountLayout>
    </div>
  )
}

export default Addpayment
