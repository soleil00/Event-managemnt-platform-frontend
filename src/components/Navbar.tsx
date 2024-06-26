import { CatchingPokemon, MenuOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Provider";
import { ClientDrawer } from "./drawers/ClientDrawer";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const { isLoggedIn, setCurrentUser, setIsLoggedIn, currentUser } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  console.log;
  return (
    <nav className="items-center bg-[#0D162E] p-[20px] flex justify-between">
      <Stack
        direction={"row"}
        className="justify-center items-center gap-1"
        onClick={() => navigate("/")}
      >
        <CatchingPokemon className="text-white" />
        <h4 className="text-white">SpotLight</h4>
      </Stack>
      <Stack
        className="flex-cols gap-5"
        direction={"row"}
        display={{ xs: "none", sm: "none", md: "flex" }}
      >
        <Link to="/explore" className="text-white">
          Explore
        </Link>

        {isLoggedIn ? (
          <>
            {currentUser?.isAdmin ? (
              <>
                <Link to="/dashboard" className="text-white">
                  Dashboard
                </Link>
                <Link to="/admin" className="text-white">
                  Admin
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
            )}

            <div className="text-white cursor-pointer" onClick={handleLogout}>
              Logout
            </div>
          </>
        ) : (
          <>
            <Link to="/auth/sign-in" className="text-white">
              Login
            </Link>
            <Link to="/auth/sign-up" className="text-white">
              Signup
            </Link>
          </>
        )}
      </Stack>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: "white",
        }}
        onClick={() => setOpen(!open)}
      >
        <MenuOutlined fontSize="small" />
      </IconButton>
      <ClientDrawer handleToggle={handleToggle} open={open} />
    </nav>
  );
};
