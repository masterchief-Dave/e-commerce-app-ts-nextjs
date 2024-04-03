import { apiService } from "@/lib/helpers/apiService"

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
}

export default AuthService
