/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { CardMembership, Close, Upload } from "@mui/icons-material";
import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../../../services/api";

export const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [medium, setMedium] = useState("online");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numTickets, setNumTickets] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [eventType, setEventType] = useState("free");

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

  const handleCreateEvent = async () => {
    if (
      !title ||
      !description ||
      !location ||
      !startDate ||
      !endDate ||
      !numTickets ||
      !image ||
      !termsAndConditions
    ) {
      toast.error("Please fill out all required fields", { autoClose: 1000 });
      return;
    }

    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("image", image);
      formdata.append("name", title);
      formdata.append("description", description);
      formdata.append("type", medium);
      formdata.append("location", location);
      formdata.append("price", `${price}`);
      formdata.append("date", startDate);
      formdata.append("numTickets", numTickets);
      formdata.append("term", termsAndConditions);

      const response = await eventService.createNewEvent(formdata);

      if (response.status === 201) {
        toast.success("Successfuly created Event", {
          autoClose: 1000,
        });

        setTitle("");
        setDescription("");
        setMedium("online");
        setLocation("");
        setStartDate("");
        setEndDate("");
        setNumTickets("");
        setImage(null);
        setImagePreview("");
        setTermsAndConditions("");
        setIsLoading(false);
      }

      console.log(response);
    } catch (error) {
      console.error("Error creating event:", error.message);
      setIsLoading(false);
      toast.error("Error creating event. Please try again later.", {
        autoClose: 1000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h5">Create an Event</Typography>
      <Stack className="mt-3">
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
          <Stack direction={"row"} spacing={2} mt={"10px"}>
            <TextField
              select
              fullWidth
              label="Medium"
              size="small"
              InputProps={{ sx: { borderRadius: "20px" } }}
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </TextField>
            <TextField
              select
              fullWidth
              label="Event Type"
              size="small"
              InputProps={{ sx: { borderRadius: "20px" } }}
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <MenuItem value="free">Free</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
            </TextField>
          </Stack>
          <Stack direction={"row"} spacing={2} mt={"10px"}>
            {eventType === "paid" && (
              <TextField
                fullWidth
                type="number"
                label="Ticket Price"
                size="small"
                InputProps={{
                  endAdornment: <p>$</p>,
                  sx: { borderRadius: "20px" },
                }}
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            )}

            <TextField
              id="numTickets"
              name="numTickets"
              label="Number of tickets"
              type="number"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <Stack>
                    <CardMembership />
                  </Stack>
                ),
                sx: { borderRadius: "20px" },
              }}
              fullWidth
              size="small"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
              focused={false}
            />
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
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleCreateEvent}>
          {isLoading ? "Processing..." : "Create an Event"}
        </Button>
        <ToastContainer />
      </Stack>
    </div>
  );
};
