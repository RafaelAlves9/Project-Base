import { toast } from "react-toastify";

const callToast = (message: string, type: "error" | "success" | "warning") => {
  return toast[type](message);
};

export { callToast };
