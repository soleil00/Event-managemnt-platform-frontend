/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { IBooking, IUser } from "../constants/types";

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

export interface IResponse {
  status: number;
  message: string;
  token: string;
  user: IUser;
  bookings: IBooking[];
}

class Auth {
  public baseUrl: string =
    "https://event-managemnt-platform-backend.onrender.com/api/v1/users";
  // public baseUrl: string = "http://localhost:4000/api/v1/users";
  async register(userData: UserData) {
    try {
      const response = await axios.post(`${this.baseUrl}/register`, userData);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  async login(credentials: LoginCredentials) {
    try {
      const response = await axios.post(`${this.baseUrl}/login`, credentials);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
  async verifyToken(token: string) {
    try {
      const response = await axios.post<IResponse>(
        `${this.baseUrl}/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
}

export default Auth;
