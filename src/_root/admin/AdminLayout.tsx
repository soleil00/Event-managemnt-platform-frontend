/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "./pages/Header";
import { AdminSidebar } from "../../components/AdminSidebar";
import { AdminDrawer } from "../../components/drawers/AdminDrawer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn, currentUser } = useContext(AppContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isLoggedIn || !currentUser?.isAdmin) navigate("/");
  }, [currentUser?.isAdmin, isLoggedIn, navigate]);

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
