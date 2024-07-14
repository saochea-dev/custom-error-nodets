import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../constant/HttpStatusCode";
export class UpdateNotAffectError extends BaseError{
    constructor(errorCode:string,errorMessage:string,statusCode:number=HttpStatusCode.UPDATE_NOT_AFFECT_ERROR.StatusCode){
        super(errorCode,errorMessage,statusCode);
    }
}