import { useForm } from "react-hook-form";
import { ControllerProps, ExempleFormTypes, exempleSchema } from "./exemple.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const UseExempleController = (props: ControllerProps) => {
  
  const {
  } = useForm<ExempleFormTypes>({
    defaultValues: {
      valor: "",
    },
    resolver: yupResolver(exempleSchema),
  });

  const onSubmit = async () => {
    
  };

  useEffect(() => {
    console.log(props)
  }, []);
  
  return {
    actions: {
      onSubmit
    },
    states: {
      isOpen: props.isOpen
    },
    setters: {}
  };
};

export default UseExempleController;
