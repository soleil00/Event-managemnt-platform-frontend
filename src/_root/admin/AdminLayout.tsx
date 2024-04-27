import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { AdminSidebar } from "../../components/AdminSidebar";
import { AdminDrawer } from "../../components/drawers/AdminDrawer";
import { useState } from "react";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Stack
      className="bg-white h-[100vh] relative"
      direction={{ xs: "column", sm: "column", md: "row" }}
    >
      <AdminSidebar visible={"none"} />
      <Stack
        className="flex-1 p-4"
        width={{ xs: "100%", sm: "100%", md: "80%" }}
        marginLeft={{ xs: "0", sm: "0", md: "20%" }}
      >
        <Header setIsOpen={setIsOpen} />
        <Outlet />
      </Stack>
      <AdminDrawer open={isOpen} handleToggle={handleToggle} />
    </Stack>
  );
};

export default AdminLayout;
