
export const fetchLogin = async () => {
  const response = await fetch('http://localhost:3002/api/auth/login')

  const data = await response.json()

  console.log(data)
  return data
}