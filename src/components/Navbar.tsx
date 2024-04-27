import { CatchingPokemon, MenuOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Provider";

export const Navbar = () => {
  const { isLoggedIn, setCurrentUser, setIsLoggedIn, currentUser } =
    useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    console.log(" from nav bar check ---> ", currentUser);
  }, [currentUser]);

  console.log;
  return (
    <nav className="items-center bg-[#0D162E] p-[20px] flex justify-between">
      <Stack direction={"row"} className="justify-center items-center gap-1">
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
      >
        <MenuOutlined fontSize="small" />
      </IconButton>
    </nav>
  );
};
