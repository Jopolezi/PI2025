import styled from "styled-components"
import * as C from "@/styles/colors"
import { Info, Check, X } from "lucide-react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./StyleToaster.css"

export const toastInfo = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "light",
    icon: <Info color="#60A5FA"/>,
    className: "custom-toast-info"
  });
};

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "light",
    icon: <Check color="#009035"/>,
    className: "custom-toast-success"
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "light",
    icon: <X color="#ce1a11ff"/>,
    className: "custom-toast-error"

  });
};