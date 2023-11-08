import { toast } from "react-toastify";

type TToastMessage = "success" | "warning" | "error";

const toastMessage = (message: string, toastType: TToastMessage) => {
  return toast[toastType](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
};

export { toastMessage };
