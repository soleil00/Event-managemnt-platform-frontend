import { ICategory } from "./categories";

export interface IEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: Partial<ICategory>;
  image: string;
  numTickets: number;
  price: number;
}

export const events: IEvent[] = [
  {
    id: 1,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 20,
    price: 1,
  },
  {
    id: 2,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 80,
    price: 1,
  },
  {
    id: 3,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 20,
    price: 1,
  },
  {
    id: 4,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 20,
    price: 1,
  },
  {
    id: 5,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 200,
    price: 100,
  },
  {
    id: 6,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 65,
    price: 14,
  },
  {
    id: 7,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 2,
    price: 10,
  },
  {
    id: 1,
    title: "Title here",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur",
    date: "21 jusly",
    location: "kg arena",
    category: {
      id: 1,
      name: "Music",
    },
    image:
      "https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538",
    numTickets: 20,
    price: 1,
  },
];
