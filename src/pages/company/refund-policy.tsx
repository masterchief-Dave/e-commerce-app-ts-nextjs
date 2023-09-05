import Link from 'next/link'

import { Navbar } from '@/components/Navbar'

const RefunPolicy = () => {
  return (
    <div className='mx-auto max-w-screen-2xl grid grid-cols-12'>
      <div className='col-span-full'>
        <Navbar />
      </div>

      <main className='col-start-2 col-end-12 font-normal text-[1.4rem]  leading-normal py-24 space-y-8'>

        <h1 className='text-[2rem] font-bold'>Refund Policy</h1>
        <h2>Last Updated: 03/09/2023</h2>

        Thank you for shopping at Sage-warehouse.

        We want you to be completely satisfied with your purchase. If you have any questions or concerns about your order, please contact our Customer Support team at
        <Link
          className='inline-block px-1 text-blue-500' href='mailto:bodunrindavidbond@gmail.com'>
          bodunrindavidbond@gmail.com
        </Link> for assistance.

        <h2>1. Refunds</h2>

        <h2>1.1 Eligibility for Refund</h2>

        We offer refunds under the following circumstances:

        - <h2>Damaged or Defective Products:</h2> If you receive a damaged or defective product, please contact us within [2] days of receiving your order. We will arrange for a return or replacement at no additional cost to you.

        - <h2>Incorrect Item:</h2> If you receive an incorrect item in your order, please notify us within [2] days of receiving your order. We will arrange for the correct item to be shipped to you or provide a refund.

        - <h2>Order Cancellation:</h2> If you decide to cancel your order before it has been shipped, we will issue a full refund.

        <h2>1.2 Non-Refundable Items</h2>

        Certain items are non-refundable. These include:

        - <h2>Downloadable Products:</h2> We do not offer refunds for digital downloads, such as software, ebooks, or music.

        - <h2>Services:</h2> Fees for services, such as subscriptions or memberships, are non-refundable.

        <h2>2. Return Process</h2>

        <h2>2.1 Requesting a Return or Refund</h2>

        To request a return or refund, please follow these steps:

        - Contact our Customer Support team at
        <Link
          className='inline-block px-1 text-blue-500'
          href='mailto:bodunrindavidbond@gmail.com'>
          bodunrindavidbond@gmail.com
        </Link> to initiate the return or refund process. Provide your order number and details about the issue.

        - Our team will guide you through the return process, which may include providing photographs of damaged items, returning the product, or other necessary steps.

        <h2>2.2 Return Shipping</h2>

        If a return is required, you will be responsible for shipping the product back to us unless otherwise instructed by our Customer Support team. We recommend using a trackable shipping method to ensure the product reaches us safely.

        <h2>3. Processing Refunds</h2>

        Once we receive and inspect the returned item(s), we will process your refund within [2] days. The refund will be issued to the original payment method used for the purchase.

        <h2>4. Contact Us</h2>

        If you have any questions about our refund policy or need assistance with a return or refund, please contact our Customer Support team at  <Link className='inline-block space-x-1 text-blue-500' href='mailto:bodunrindavidbond@gmail.com'>bodunrindavidbond@gmail.com</Link>.

        <h2>5. Changes to this Policy</h2>

        We reserve the right to update or modify this refund policy at any time. Any changes will be posted on this page, and the date of the last update will be revised accordingly.

        ---

        Remember that the above is a general template. You should tailor it to fit your specific business operations, products, and legal requirements. Additionally, ensure that your customers can easily find and access your refund policy on your website, typically in the footer or checkout process.
      </main>
    </div>
  )
}

export default RefunPolicy