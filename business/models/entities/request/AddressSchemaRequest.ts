import * as superstruct from "superstruct";

export const Address = superstruct.object({
  id_user: superstruct.string(),
  createdDate: superstruct.date(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  number: superstruct.string(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
  complement: superstruct.string()
});

export type TAddressRegisterSchema = superstruct.Infer<typeof Address>;
export type TAddressUpdateSchema = superstruct.Infer<typeof Address>;