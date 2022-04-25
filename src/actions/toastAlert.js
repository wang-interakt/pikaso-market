import { green, red } from "@material-ui/core/colors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastAlert(errorType, message, id) {
  if (errorType === "error") {
    toast.error(message, {
      autoClose: 3000,
      toastId: id,
      color: red,
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (errorType === "success") {
    toast.success(message, {
      autoClose: 3000,
      toastId: id,
      color: green,
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
