import { CatchingPokemon, MenuOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
        <Link to="/auth/sign-in" className="text-white">
          Login
        </Link>
        <Link to="/auth/sign-up" className="text-white">
          Signup
        </Link>
        <Link to="/auth/sign-up" className="text-white">
          Explore
        </Link>
        <Link to="/dashboard" className="text-white">
          Dashboard
        </Link>
        <Link to="/admin" className="text-white">
          Admin
        </Link>
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
