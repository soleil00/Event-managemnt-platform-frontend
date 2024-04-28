import { Skeleton, Stack, Typography } from "@mui/material";

export const EventSkeleton = () => {
  return (
    <div>
      <Stack
        className="common  flex gap-5"
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Stack width={{ xs: "100%", sm: "100%", md: "70%" }}>
          <div>
            <div className="relative">
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={350}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={80}
                height={30}
                className="absolute top-2 right-2 bg-green-500"
                animation="wave"
              />
            </div>
          </div>
          {/* <Skeleton variant="text" width="100%" height={150} animation="wave" /> */}
        </Stack>
        <Stack
          className="p-4 flex flex-col gap-3"
          width={{ xs: "100%", sm: "100%", md: "30%" }}
        >
          <Skeleton
            variant="text"
            sx={{ width: "100%" }}
            height={40}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%" }}
            height={28}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%" }}
            height={28}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%" }}
            height={28}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%" }}
            height={28}
            animation="wave"
          />

          <div className="flex justify-between mt-5">
            <div className="flex gap-3">
              <Skeleton
                variant="rectangular"
                width={180}
                height={30}
                animation="wave"
              />
            </div>
            <div className="flex gap-3">
              <Skeleton
                variant="rectangular"
                width={80}
                height={30}
                animation="wave"
              />
            </div>
            <div className="flex gap-3">
              <Skeleton
                variant="rectangular"
                width={80}
                height={30}
                animation="wave"
              />
            </div>
          </div>

          <Typography>
            <Skeleton
              variant="text"
              width="100%"
              height={200}
              animation="wave"
            />
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
