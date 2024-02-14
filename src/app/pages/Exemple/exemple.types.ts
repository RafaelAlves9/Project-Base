import { fields } from "src/extensions/messages";
import { object, string } from "yup";

export type HomeControllerType = {
  controller: {
    actions: {
      [key: string]: unknown;
    };
    states: {
      [key: string]: unknown;
    };
  };
};

export type ExempleFormTypes = {
  valor: string;
}

export const exempleSchema = object({
  valor: string().required(fields.required),
});