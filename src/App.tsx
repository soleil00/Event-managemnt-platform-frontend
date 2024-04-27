import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { AuthLayout } from "./_auth/AuthLayout";
import { SignupForm } from "./_auth/forms/SignupForm";
import { SigninForm } from "./_auth/forms/SigninForm";
import { RootLayout } from "./_root/RootLayout";
import { HomePage } from "./_root/client/pages/HomePage";
import { Explore } from "./_root/client/pages/Explore";
import { EventDetailPage } from "./_root/client/pages/EventDetailPage";
import { UserDashboard } from "./_root/client/pages/UserDashboard";
import AdminLayout from "./_root/admin/AdminLayout";
import AllEvents from "./_root/admin/pages/AllEvents";
import AllBookings from "./_root/admin/pages/AllBookings";
import AdminDashboard from "./_root/admin/pages/AdminDashboard";
import { AdminNotifications } from "./_root/admin/pages/AdminNotifications";
import { CreateEvent } from "./_root/admin/pages/CreateEvent";
import { EditEvent } from "./_root/admin/pages/EditEvent";
// import { useEffect } from "react";
// import Auth from "./services/auth";

function App() {
  return (
    <main className="w-[100%] h-[100%] ">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SigninForm />} />
          <Route path="/auth/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create-event" element={<CreateEvent />} />
          <Route path="/admin/edit-event" element={<EditEvent />} />
          <Route path="/admin/events" element={<AllEvents />} />
          <Route path="/admin/bookings" element={<AllBookings />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
