import { AccountBox, CatchingPokemon, Logout } from "@mui/icons-material";
import { Drawer, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { links } from "../../constants/links";

export const AdminDrawer = ({
  handleToggle,
  open,
}: {
  handleToggle: () => void;
  open: boolean;
}) => {
  return (
    <Drawer
      open={open}
      onClose={handleToggle}
      sx={{ display: { xs: "block", sm: "block", md: "none" } }}
    >
      <div className="w-[250px] ">
        <Stack
          className={`bg-white flex flex-col justify-between py-10 w-[200px] mx-auto p-4 h-[100vh]`}
        >
          <Stack className="mx-auto">
            <div className="flex justify-center items-center">
              <CatchingPokemon className="mb-10" onClick={handleToggle} />
            </div>
            <Stack spacing={3}>
              {links.map((link) => (
                <Link to={`${link.link}`} onClick={handleToggle}>
                  <Stack direction="row" gap={2}>
                    {link.icon}
                    <Typography>{link.name}</Typography>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack className="mx-auto">
            <Stack direction="row" gap={2} onClick={handleToggle}>
              <AccountBox />
              <Typography>Account</Typography>
            </Stack>
            <Stack direction="row" gap={2} onClick={handleToggle}>
              <Logout />
              <Typography>Logout</Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </Drawer>
  );
};
