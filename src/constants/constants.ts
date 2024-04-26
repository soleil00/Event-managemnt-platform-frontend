import {
  Edit,
  Group,
  InsertInvitation,
  List,
  NotificationAdd,
  Shield,
} from "@mui/icons-material";

export interface IFeature {
  icon: any;
  header: string;
  description: string;
}

export const features: IFeature[] = [
  {
    icon: Edit,
    header: "Event Creation",
    description:
      "Effortlessly create and customize events to suit your needs. Add details such as event title, date, location, and ticket availability with ease.",
  },
  {
    icon: NotificationAdd,
    header: "Event Notifications",
    description:
      "Stay updated with real-time notifications for important event-related updates, such as ticket availability, event changes, and more.",
  },
  {
    icon: InsertInvitation,
    header: "Event Scheduling",
    description:
      "Easily schedule and manage events according to your calendar. Set dates, times, and recurring patterns effortlessly.",
  },
  {
    icon: Shield,
    header: "Security & Privacy",
    description:
      "Ensure the security and privacy of your events and attendees with robust security measures and privacy settings.",
  },
  {
    icon: Group,
    header: "Attendee Management",
    description:
      "Efficiently manage attendees with our comprehensive attendee management feature. Easily view and manage RSVPs, track attendance, and collect essential participant information. Scan QR Codes to check-in attendees and ensure a smooth event experience for all participants.",
  },
  {
    icon: List,
    header: "Easy Attendees Tracking",
    description:
      "Keep track of attendees with our comprehensive attendee management feature. Easily view and manage RSVPs, track attendance, and collect essential participant information. Scan QR Codes to check-in attendees and ensure a smooth event experience for all participants.",
  },
];
