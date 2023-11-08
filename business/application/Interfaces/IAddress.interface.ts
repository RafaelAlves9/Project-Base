import { TCepApiSchemaResponse } from "../../models/entities/response/AddressSchemaResponse";

export interface IAddressInterface {
    getCep(cep: string): Promise<TCepApiSchemaResponse>;
};
