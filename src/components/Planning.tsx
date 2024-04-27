import { Stack, Typography } from "@mui/material";

export const Planning = () => {
  return (
    <div className="bg-[#0D162E] ">
      <Stack
        className="common-flex"
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-blue-400">
            <p className="w-[100px] h-[4px] bg-blue-500 rounded-md"></p>
            <p>Secure</p>
          </div>
          <Typography
            variant="h2"
            className="text-white"
            fontSize={{ xs: "30px", sm: "35px", md: "45px" }}
          >
            Seamless Event Planning and Organisation
          </Typography>
        </div>
        <Typography className="text-gray-400 flex-1 ">
          Say goodbye to the hassles of event planning. Our user-friendly
          interface simplifies the process, allowing you to focus on your
          artistic endeavors. Create and manage events effortlessly, from
          setting dates and locations to providing event descriptions and
          ticketing options. Streamline your planning process and bring your
          vision to reality.
        </Typography>
      </Stack>
    </div>
  );
};
