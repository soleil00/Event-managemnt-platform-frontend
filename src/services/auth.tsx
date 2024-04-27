import axios from "axios";

interface UserData {
  email: string;
  username?: string;
  password: string;
  isAdmin?: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
}

class Auth {
  async register(userData: UserData) {
    try {
      const response = await axios.post<{ message: string }>(
        "/api/user-registration",
        userData
      );
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  async login(credentials: LoginCredentials) {
    try {
      const response = await axios.post<{ message: string }>(
        "/api/user-login",
        credentials
      );
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
}

export default Auth;
