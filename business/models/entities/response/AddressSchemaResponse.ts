import * as superstruct from "superstruct";

export const AddressResponse = superstruct.object({
  id_user: superstruct.string(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  number: superstruct.string(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
  complement: superstruct.string(),
  createdDate: superstruct.date(),
});

export const CepApiResponse = superstruct.object({
  cep: superstruct.string(),
  logradouro: superstruct.string(),
  uf: superstruct.string(),
  localidade: superstruct.string(),
  bairro: superstruct.string(),
  complemento: superstruct.string(),
});

export type TAddressSchemaResponse = superstruct.Infer<typeof AddressResponse>;
export type TCepApiSchemaResponse = superstruct.Infer<typeof CepApiResponse>;
