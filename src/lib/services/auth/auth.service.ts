import { apiService } from "@/lib/helpers/apiService"
import axios from "axios"

class AuthService {
  static async login({ email, password }: { email: string; password: string }) {
    return apiService(`auth/login`, "POST", {
      email,
      password,
    })
  }

  static async register({
    name,
    email,
    password,
    confirmPassword,
  }: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) {
    return apiService(`auth/register`, "POST", {
      name,
      email,
      password,
      confirmPassword,
    })
  }

  static async resetPassword(
    query: string,
    { password, confirmPassword }: { password: string; confirmPassword: string }
  ) {
    return await apiService(`/auth/reset/${query}`, "POST", {
      password,
      confirmPassword,
    })
    // return await axios.post(`/api/auth/reset-password/${query}`, {
    //   password,
    //   confirmPassword,
    // })
  }

  static async forgotPassword(email: string) {
    return await axios.post(`/api/auth/forgot-password`, { email })
  }
}

export default AuthService
