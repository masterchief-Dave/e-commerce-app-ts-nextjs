
import { NavigationMenuDemo } from '@/components/Dropdown/NavigationDropdownMenu'
import ResetEmailSentModal from '@/components/Modal/ResetEmailSent'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const NavigationMenuDemoExample = () => {
  const fn = async () => {
    try {
      const response = await axios.post('/api/products/create-product')
      const data = await response.data
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    // <NavigationMenuDemo />
    <div className='flex p-24'>
      <Button variant={'solid'} onClick={() => fn()}>simulate post request</Button>
      {/* <ResetEmailSentModal /> */}
    </div>
  )
}



export default NavigationMenuDemoExample