import {
  BookOnline,
  EventSeat,
  Home,
  NotificationAdd,
  Dashboard,
} from "@mui/icons-material";

export const links = [
  {
    name: "Back Home",
    link: "/",
    icon: <Home />,
  },
  {
    name: "Dashboard",
    link: "/admin",
    icon: <Dashboard />,
  },
  {
    name: "Events",
    link: "/admin/events",
    icon: <EventSeat />,
  },
  {
    name: "Bookings",
    link: "/admin/bookings",
    icon: <BookOnline />,
  },
  {
    name: "Notifications",
    link: "/admin/notifications",
    icon: <NotificationAdd />,
  },
];
