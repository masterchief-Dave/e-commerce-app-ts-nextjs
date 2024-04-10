import Spinner from "@/components/molecules/spinner"
import { Button } from "@/components/ui/button"
import { ErrorLabel } from "@/components/ui/errorLabel"
import { Input } from "@/components/ui/input"
import type { BillingAddressInterface } from "@/lib/types/user/user.type"
import { type FormikProps } from "formik"

interface AddressFormInterface {
  formik: FormikProps<BillingAddressInterface>
  loading: boolean
}

export const AddressForm = ({ formik, loading }: AddressFormInterface) => {
  const styles = {
    input: ` font-medium border h-[40px] w-full px-4`,
    label: ` font-medium text-primary block`,
  }

  return (
    <div>
      <form
        action=""
        className="grid grid-cols-2 gap-8 p-8"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="firstname" className={styles.label}>
            Firstname
          </label>
          <Input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            className={styles.input}
          />
          {formik.errors.firstname && (
            <ErrorLabel text={formik.errors.firstname} />
          )}
        </div>

        <div>
          <label htmlFor="lastname" className={styles.label}>
            Lastname
          </label>
          <Input
            type="text"
            id="lastname"
            className={styles.input}
            name="lastname"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.errors.lastname && (
            <ErrorLabel text={formik.errors.lastname} />
          )}
        </div>

        <div className="col-span-full">
          <label htmlFor="phoneNumber" className={styles.label}>
            {" "}
            Phone Number{" "}
          </label>
          <Input
            type="text"
            id="phoneNumber"
            className={styles.input}
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber && (
            <ErrorLabel text={formik.errors.phoneNumber} />
          )}
        </div>

        <div className="col-span-full">
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <Input
            type="text"
            placeholder="Address"
            className={styles.input}
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address && <ErrorLabel text={formik.errors.address} />}
        </div>

        <div>
          <label htmlFor="country" className={styles.label}>
            Country
          </label>
          <Input
            type="text"
            id="country"
            placeholder="Country"
            className={styles.input}
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          {formik.errors.country && <ErrorLabel text={formik.errors.country} />}
        </div>

        <div>
          <label htmlFor="zipCode" className={styles.label}>
            Zip Code
          </label>
          <Input
            type="text"
            id="zipCode"
            className={`${styles.input}`}
            placeholder="Zip Code"
            name="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          {formik.errors.zipCode && <ErrorLabel text={formik.errors.zipCode} />}
        </div>

        <div className="flex gap-4 items-center">
          <Input
            type="checkbox"
            id="default"
            className="w-fit"
            name="default"
            checked={formik.values.default}
            onChange={formik.handleChange}
          />
          <label htmlFor="default" className="">
            Save as default billing address
          </label>
        </div>

        <div className="col-span-full">
          <Button
            className="h-[40px] flex items-center justify-center w-full bg-primary-blue-300  font-semibold text-white"
            type="submit"
          >
            {loading && <Spinner className="h-6 w-6 text-white" />}
            <span>Continue</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
