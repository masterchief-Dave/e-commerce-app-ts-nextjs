import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

const ShippingReturns = () => {
  return (
    <div className='mx-auto max-w-screen-2xl grid grid-cols-12'>
      <div className='col-span-full'>
        <Navbar />
      </div>

      <main className='col-start-2 col-end-12 font-normal text-[1.6rem]  leading-normal py-24 space-y-8'>
        <h1 className='text-[2rem] font-bold'>Shipping Options</h1>

        At [Sage-Warehouse], we offer several shipping options to meet your needs:

        <h2>1.Standard Shipping:</h2> This is our most economical shipping option. Orders typically arrive within 5-7 business days.

        <h2> 2.Expedited Shipping:</h2> Need your items sooner? Choose expedited shipping at checkout, and your order will be delivered within 2-4 business days.

        <h2>3.Express Shipping:</h2> For the fastest delivery, opt for express shipping. Your order will arrive within 1-2 business days.

        <h3> Order Processing Time </h3>

        Please note that all orders require processing time before they are shipped. Our standard processing time is 1-2 business days. During peak seasons or promotions, processing times may be slightly longer, but we strive to get your orders out as quickly as possible.

        <h3> Shipping Costs </h3>

        Shipping costs are calculated based on your selected shipping option, the weight and dimensions of your items, and your delivery address. You can view the shipping cost during the checkout process before finalizing your order.

        <h3> Tracking Your Order </h3>

        Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number to monitor the progress of your shipment and estimate the delivery date.

        <h3> Shipping Restrictions </h3>

        We currently ship to addresses within [Your Country/Region]. Unfortunately, we do not offer international shipping at this time.

        <h3> Shipping Damage or Issues </h3>

        While we take great care in packaging your orders, accidents can happen during transit. If your order arrives damaged or if there are any issues with your shipment, please contact our customer support team within 7 days of receiving your order. We will work quickly to resolve the issue and ensure your satisfaction.

        <h3> Shipping Holidays </h3>

        Please be aware that our shipping carriers observe certain holidays, which may affect the delivery times. During these holidays, there may be slight delays in the delivery of your order.

        <h3> Contact Us </h3>

        If you have any questions or concerns about our shipping policy or need assistance with your order, please don't hesitate to [contact our customer support team](mailto:customersupport@yourcompany.com). We're here to help!

        ---

        Remember to update the placeholders in square brackets Sage-Warehouse, Nigeria/Lagos,
        <Link
          href='mailto:bodunrindavidbond@gmail.com' className='text-blue-500 inline-block px-1'>bodunrindavidbond@gmail.com</Link> with your specific business information. Additionally, ensure that this policy aligns with your actual shipping practices and any legal requirements in your jurisdiction.
      </main>
    </div>
  )
}

export default ShippingReturns