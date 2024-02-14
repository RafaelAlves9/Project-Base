import { useForm } from "react-hook-form";
import { ExempleFormTypes, exempleSchema } from "./exemple.types";
import { yupResolver } from "@hookform/resolvers/yup";

const UseExempleController = () => {
  
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm<ExempleFormTypes>({
    defaultValues: {
      valor: "",
    },
    resolver: yupResolver(exempleSchema),
  });

  const onSubmit = async () => {
    
  };
  
  return {
    actions: {},
    states: {},
  };
};

export default UseExempleController;
