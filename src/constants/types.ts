import { ICategory } from "./categories";

export interface IBooking {
  _id: string;
  user: string;
  event: string;
  numTickets: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  bookings: unknown[];
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface IEvent {
  _id?: string;
  title?: string;
  description: string;
  date: string;
  location: string;
  category: ICategory;
  image: string;
  numTickets: number;
  price?: number | string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status: "ACTIVE" | "CANCELED" | "ENDED";
  type: string;
}
