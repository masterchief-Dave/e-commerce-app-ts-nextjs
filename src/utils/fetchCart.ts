import axios from "axios"

async function fetchCart() {

  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/user/cart`, {
    headers: {
      'Authorization': ``
    }
  })
}

export default fetchCart