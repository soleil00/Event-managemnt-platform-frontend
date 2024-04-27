/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Add, MenuOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<boolean>;
}) => {
  return (
    <Stack>
      <Stack direction={"row"} className=" items-center justify-between">
        <IconButton
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          //@ts-ignore
          onClick={() => setIsOpen((prv) => !prv)}
        >
          <MenuOutlined />
        </IconButton>
        <Link to="/admin/create-event" className=" float-right ml-auto">
          <Stack
            direction={"row"}
            gap={2}
            className="bg-[#EB0E66] rounded-lg p-2 justify-center items-center"
          >
            <Add className="text-white" />
            <p className="text-white">Create Event</p>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
