import { AccountBox, CatchingPokemon, Logout } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { links } from "../constants/links";

export const AdminSidebar = ({ visible }: { visible: string }) => {
  return (
    <Stack
      width={{ xs: "34", sm: "40", md: "20%" }}
      display={{ xs: "none", sm: "none", md: "flex" }}
      className={`bg-white flex flex-col justify-between py-10 mx-auto ${
        visible === "none" ? "border-slate-800 border-r-2" : ""
      }  p-4 fixed top-0 bottom-0`}
    >
      <Stack className="mx-auto">
        <div className="flex justify-center items-center">
          <CatchingPokemon className="mb-10" />
        </div>
        <Stack spacing={3}>
          {links.map((link) => (
            <Link to={`${link.link}`}>
              <Stack direction={"row"} gap={2}>
                {link.icon}
                <Typography>{link.name}</Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
      <Stack className="mx-auto">
        <Stack direction={"row"} gap={2}>
          <AccountBox />
          <Typography>Logout</Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Logout />
          <Typography>Logout</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
