import axios from "axios"

export const globalAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
})

// globalAxios.interceptors.request.use((request) => {

//   return request
// }, (err) => {

//   return err
// })

// Add an interceptor to the axios instance to modify the request headers
// globalAxios.interceptors.response.use((response) => {
//   console.log({ response })
//   return response
// }, async (err) => {

//   if (err.response.status === 401) {
//     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/auth/refresh`, {}, { withCredentials: true })

//     if (response.status === 200) {
//       axios.defaults.headers.common['Authorization'] = response.data.user.token

//       sessionStorage.setItem('user', JSON.stringify({
//         name: response.data.user.name,
//         email: response.data.user.email,
//         role: response.data.user.role,
//         photo: response.data.user.photo,
//         id: response.data.user._id
//       }))
//       return axios(err.config)
//     }
//   }

//   sessionStorage.removeItem('user')
//   return err
// })

export const apiService = (
  url: string,
  method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
  data?: any
): Promise<any> => {
  return new Promise((resolve) => {
    if (process.env.NODE_ENV === "development") {
      console.log(url)
    }
    globalAxios({
      url,
      method,
      data,
    })
      .then((res) => resolve(res.data))
      .catch((err) => {
        resolve(err.response)
      })
  })
}
