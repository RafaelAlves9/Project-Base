import * as superstruct from "superstruct";
import { AddressResponse } from "./AddressSchemaResponse";

export const ClientUserData = superstruct.object({
  id_user: superstruct.string(),
  userName: superstruct.string(),
  email: superstruct.string(),
  gender: superstruct.string(),
  cellPhone: superstruct.string(),
  dateOfBirth: superstruct.nullable(superstruct.date()),
  isActive: superstruct.boolean(),
  createdDate: superstruct.date(),
  inactiveDate: superstruct.nullable(superstruct.date()),
  address: AddressResponse
});

export type TClientUserDataSchemaResponse = superstruct.Infer<typeof ClientUserData>;
