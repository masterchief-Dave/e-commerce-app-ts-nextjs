import { apiService } from "@/helpers/apiService"

class AuthService {
  static async login({ email, password }: { email: string, password: string }) {
    return apiService(`auth/login`, 'POST', {
      email,
      password
    })
  }
}

export default AuthService