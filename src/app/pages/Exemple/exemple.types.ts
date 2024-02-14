import { fields } from "@extensions/messages";
import { object, string } from "yup";

// #region - PROPS
export type HomeControllerType = {
  controller: {
    states: {
      isOpen: boolean;
    };
    actions: {
      [key: string]: unknown;
    };
    setters: {
      [key: string]: unknown;
    };
  };
};

export type ControllerProps = {
  isOpen: boolean;
};

// #endregion

// #region - TYPES
export type ExempleFormTypes = {
  valor: string;
};

// #endregion

// #region - SCHEMA
export const exempleSchema = object({
  valor: string().required(fields.required),
});

// #endregion
