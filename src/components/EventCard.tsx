import { Button, Stack } from "@mui/material";

export const EventCard = () => {
  return (
    <div className=" shadow-2xl relative">
      <div className="relative">
        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/6488600b698ae8223e7c/files/648c6c4870e14303090e/preview?project=64885b43d529fd22b538"
          alt="event img"
          className="rounded-md"
        />
        <p className=" absolute bottom-3 left-3 bg-yellow-200 p-2">category</p>
      </div>
      <h2 className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores
        quas sapiente deserunt, fugit accusamus nulla omnis modi ad! Consectetur
      </h2>
      <p className=" absolute top-3 right-3 bg-yellow-200 p-2">date</p>
      <div className="flex justify-between items-center p-2">
        <Button variant="contained" color="secondary" size="small">
          Edit
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Delete
        </Button>
      </div>
    </div>
  );
};
