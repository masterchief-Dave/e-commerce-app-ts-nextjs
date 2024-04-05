import { useState } from "react"
import { usePaymentInputs } from "react-payment-inputs"

export const AddPaymentMethodForm = () => {
  const [formData, setFormData] = useState<PaymentFormInput>({
    userName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  })

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs()

  // handle form
  const handleForm = (e: any) => {
    e.preventDefault()

    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  // styles
  const styles = {
    cardTitle: `font-semibold`,
    cardText: `font-light`,
    cardInput: `h-[40px] text-base w-full border px-4 rounded-md`,
    cardImage: `h-12 w-12`,
    label: `block text-base font-normal`,
    accordionHeader: `text-[1.1rem] lg: font-semibold`,
  }

  return (
    <form className="grid grid-cols-12 gap-4 space-y-4 text-left">
      <div className="col-span-full col-start-1">
        <label htmlFor="username" className={styles.label}>
          Name on card
        </label>
        <input
          type="text"
          id="username"
          name="userName"
          className={styles.cardInput}
          placeholder="Name on card"
          onChange={handleForm}
          value={formData.userName}
        />
      </div>

      <div className="col-span-full col-start-1">
        <label htmlFor="cardNumber" className={styles.label}>
          Card Number
        </label>

        <input
          // type='text'
          // id='cardNumber'
          // name='cardNumber'
          className={styles.cardInput}
          // placeholder='Card Number'
          {...getCardNumberProps({
            onChange: handleForm,
          })}
          value={formData.cardNumber}
        />
      </div>

      <div className="col-span-full grid grid-cols-2 gap-4">
        <div className="w-full">
          <label htmlFor="CVV" className={styles.label}>
            CVC/CVV
          </label>
          <input
            // type='text'
            // id='CVC'
            // name='cvc'
            className={styles.cardInput}
            {...getCVCProps({ onChange: handleForm })}
            value={formData.cvc}
          />
        </div>
        <div className="w-full">
          <label htmlFor="expiryDate" className={styles.label}>
            Expiry Date
          </label>
          <input
            // type='text'
            // id='expiryDate'
            // name='expiryDate'
            // placeholder='Expiry Date'
            className={styles.cardInput}
            {...getExpiryDateProps({
              onChange: handleForm,
            })}
            value={formData.expiryDate}
          />
        </div>
      </div>

      <div className="item-center col-span-full flex w-full gap-4">
        <button className="bg-black px-8 py-2 text-base font-medium text-white rounded-md">
          Save
        </button>
      </div>
    </form>
  )
}
