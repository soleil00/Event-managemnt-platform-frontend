import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Stack className="justify-between h-[100%] bg-white" direction={"row"}>
      <section className="flex-1">
        <Outlet />
      </section>

      <Stack
        className="flex-1 justify-center items-center "
        display={{ xs: "none", sm: "none", md: "flex" }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/105858896?v=4"
          alt="no quality"
          className="h-screen w-full object-cover bg-no-repeat"
        />
      </Stack>
    </Stack>
  );
};
