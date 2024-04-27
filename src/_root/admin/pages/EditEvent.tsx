/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Close, Upload } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/Provider";
import Api from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditEvent = () => {
  const { selectedEvent, setSelectedEvent } = useContext(AppContext);
  const [title, setTitle] = useState(selectedEvent?.name);
  const [description, setDescription] = useState(selectedEvent?.description);
  const [medium, setMedium] = useState("online");
  const [location, setLocation] = useState(selectedEvent?.location);
  const [startDate, setStartDate] = useState(selectedEvent?.date);
  const [endDate, setEndDate] = useState(selectedEvent?.date);
  const [numTickets, setNumTickets] = useState(selectedEvent?.numTickets);
  const [image, setImage] = useState(selectedEvent?.image);
  const [imagePreview, setImagePreview] = useState(selectedEvent?.image);
  const [termsAndConditions, setTermsAndConditions] =
    useState("selectedEvent.term");
  const [isLoading, setIsLoading] = useState(false);

  const eventService = new Api();

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
      console.log(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        //@ts-ignore
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  useEffect(() => {
    console.log("selected task her -----> : ", selectedEvent);
    return () => {
      setSelectedEvent(null);
    };
  }, [selectedEvent, setSelectedEvent]);

  const handleEdit = async () => {
    console.log("clicked");
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("image", image);
      formdata.append("name", title);
      formdata.append("description", description);
      formdata.append("type", medium);
      formdata.append("location", location);
      formdata.append("price", "20");
      formdata.append("date", startDate);
      formdata.append("numTickets", `${numTickets}`);
      formdata.append("term", termsAndConditions);

      const response = await eventService.updateSingleEvent(
        selectedEvent?._id,
        formdata
      );

      console.log(response);
      toast.success(response?.message, { autoClose: 1000 });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error, { autoClose: 1000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h5">Edit an Event</Typography>
      <Stack className="mt-3">
        <ToastContainer />
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-[#737373]"
          >
            Title
          </label>
          <TextField
            id="title"
            name="title"
            variant="outlined"
            fullWidth
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event Title"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-[#737373]"
          >
            Description
          </label>
          <TextField
            id="description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event Description"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="medium"
            className="block text-sm font-medium text-[#737373]"
          >
            Medium
          </label>
          <Stack direction={"row"} spacing={2} mt={"20px"}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setMedium("online")}
            >
              Online
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setMedium("offline")}
            >
              Offline
            </Button>
          </Stack>
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-[#737373]"
          >
            Location
          </label>
          <TextField
            id="location"
            name="location"
            variant="outlined"
            fullWidth
            size="small"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event Location"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-[#737373]"
          >
            Start Date
          </label>
          <TextField
            id="startDate"
            name="startDate"
            type="date"
            variant="outlined"
            fullWidth
            size="small"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event Start Date"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-[#737373]"
          >
            End Date
          </label>
          <TextField
            id="endDate"
            name="endDate"
            type="date"
            variant="outlined"
            fullWidth
            size="small"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event End Date"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numTickets"
            className="block text-sm font-medium text-[#737373]"
          >
            Tickets
          </label>
          <TextField
            id="numTickets"
            name="numTickets"
            type="number"
            variant="outlined"
            fullWidth
            size="small"
            value={numTickets}
            onChange={(e) => setNumTickets(parseInt(e.target.value))}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Number of Tickets or Seats"
            focused={false}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="text-center text-white font-medium bg-[#EB0E66] px-4 py-2 rounded-xl w-[200px]"
          >
            {imagePreview ? "Change Banner" : "Upload Event Banner"} <Upload />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <div className="my-4 flex justify-center items-center ">
              <div className="border-2 border-green-500 relative rounded-lg">
                {" "}
                <img
                  src={imagePreview}
                  alt="Event Banner Preview"
                  className="w-[200px] h-auto rounded-lg"
                />
                <Close
                  className=" absolute top-2 right-2"
                  onClick={() => setImagePreview("")}
                />
              </div>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="termsAndConditions"
            className="block text-sm font-medium text-[#737373]"
          >
            Terms and Conditions
          </label>
          <TextField
            id="termsAndConditions"
            name="termsAndConditions"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            size="small"
            value={termsAndConditions}
            onChange={(e) => setTermsAndConditions(e.target.value)}
            InputProps={{ sx: { borderRadius: "20px" } }}
            placeholder="Event Terms and Conditions"
            focused={false}
            className="mb-4"
          />
        </div>
        <Button
          onClick={handleEdit}
          variant="contained"
          color="primary"
          className="my-4"
        >
          {isLoading ? "Editing..." : "Confirm Edit"}
        </Button>
      </Stack>
    </div>
  );
};
