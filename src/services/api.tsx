/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { IEvent } from "../constants/types";

const token = localStorage.getItem("token");

class Api {
  private baseUrl: string =
    "https://event-managemnt-platform-backend.onrender.com/api/v1/events";
  private baseUrl2: string =
    "https://event-managemnt-platform-backend.onrender.com/api/v1/users";
  private baseUrl3: string =
    "https://event-managemnt-platform-backend.onrender.com/api/v1/bookings";
  // private baseUrl: string = "http://localhost:4000/api/v1/events";
  // private baseUrl2: string = "http://localhost:4000/api/v1/users";
  // private baseUrl3: string = "http://localhost:4000/api/v1/bookings";

  async getAllEvents() {
    try {
      const response = await axios.get<Partial<IEvent[]>>(this.baseUrl);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error fetching events: ${error.message}`);
    }
  }

  async createNewEvent(eventData: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/register-event`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(`Error creating event: ${error.message}`);
    }
  }

  async getSingleEvent(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error fetching event: ${error.message}`);
    }
  }

  async deleteSingleEvent(id: string) {
    try {
      const response = await axios.delete(`${this.baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("model----> : " + response);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error deleting event: ${error.message}`);
    }
  }
  async getUserTicket(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl2}/${id}/books`);
      return response;
    } catch (error: any) {
      throw new Error(`fetching user tickets: ${error.message}`);
    }
  }

  async updateSingleEvent(id: string, eventData: FormData) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}`, eventData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(`Error updating event: ${error.message}`);
    }
  }

  async cancelEvent(id) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}/cancel`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Error canceling event: ${error.message}`);
    }
  }

  async cancelBooking(id: string) {
    try {
      const response = await axios.post(
        `${this.baseUrl3}/${id}/cancel-booking`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error: any) {
      throw new Error(`Error canceling booking: ${error.message}`);
    }
  }

  async bookEvent(id: string, numTickets: number) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/${id}/book`,
        { numTickets },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Error booking event: ${error.toString()}`);
    }
  }
}

export default Api;
