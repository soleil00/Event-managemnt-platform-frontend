import { Drawer, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/Provider";

export const ClientDrawer = ({
  handleToggle,
  open,
}: {
  handleToggle: () => void;
  open: boolean;
}) => {
  const { isLoggedIn, currentUser, setCurrentUser, setIsLoggedIn } =
    useContext(AppContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Drawer
      open={open}
      onClose={handleToggle}
      sx={{ display: { xs: "block", sm: "block", md: "none" } }}
    >
      <div className="w-[250px] bg-[#0D162E] ">
        <Stack
          className={`flex flex-col justify-between py-10 w-[200px] mx-auto p-4 h-[100vh]`}
        >
          <Stack
            className="flex-cols gap-5"
            // direction={"row"}
            display={{ xs: "flex", sm: "flex", md: "none" }}
          >
            <Link to="/explore" className="text-white" onClick={handleToggle}>
              Explore
            </Link>

            {isLoggedIn ? (
              <>
                {currentUser?.isAdmin ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-white"
                      onClick={handleToggle}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin"
                      className="text-white"
                      onClick={handleToggle}
                    >
                      Admin
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/dashboard"
                    className="text-white"
                    onClick={handleToggle}
                  >
                    Dashboard
                  </Link>
                )}

                <div
                  className="text-white cursor-pointer mt-auto"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth/sign-in"
                  className="text-white"
                  onClick={handleToggle}
                >
                  Login
                </Link>
                <Link
                  to="/auth/sign-up"
                  className="text-white"
                  onClick={handleToggle}
                >
                  Signup
                </Link>
              </>
            )}
          </Stack>
        </Stack>
      </div>
    </Drawer>
  );
};
