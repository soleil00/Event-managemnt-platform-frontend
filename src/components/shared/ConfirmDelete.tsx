/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { AppContext } from "../../context/Provider";
import Api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ConfirmDelete = () => {
  const [iseDeleting, setIsDeleting] = useState(false);
  const { selectedEvent, setSelectedEvent, setRefetch } =
    useContext(AppContext);

  const eventService = new Api();

  const handleCancel = () => {
    setSelectedEvent(null);
  };

  const handleConfirm = async () => {
    try {
      //@ts-ignore
      setRefetch((val) => !val);
      setIsDeleting(true);
      const response = await eventService.deleteSingleEvent(selectedEvent._id);
      toast.success(response?.message, { autoClose: 1000 });
    } catch (error) {
      toast.error("yesy", { autoClose: 1000 });
      console.log(error);
      setIsDeleting(false);
    } finally {
      setIsDeleting(false);
      setSelectedEvent(null);
    }
  };

  return (
    <Dialog open={Boolean(selectedEvent)} fullWidth onClose={handleCancel}>
      <ToastContainer />
      <DialogTitle className="text-center">Confirm Deletion</DialogTitle>

      <DialogContent>
        <Box>
          <p>
            Are you sure you want to delete{" "}
            <span className=" font-bold">{selectedEvent?.title}</span> the event{" "}
          </p>
          <p>This action cannot be undone.</p>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={handleConfirm}
          startIcon={
            iseDeleting && <CircularProgress color="error" size={27} />
          }
        >
          {!iseDeleting ? "Confirm" : "Deleting..."}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
