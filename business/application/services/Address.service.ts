import { Base } from "./Base.service";
import { TCepApiSchemaResponse } from "../../models/entities/response/AddressSchemaResponse";
import { IAddressInterface } from "../Interfaces/IAddress.interface";

export class AddressService extends Base implements IAddressInterface {
    
    async getCep(cep: string): Promise<TCepApiSchemaResponse> {
        try{
            const result = await this._public.get(`https://viacep.com.br/ws/${cep}/json/`);
            
            return result.data;
        }
        catch(error: any){
            return error;
        };
    };
    
};
