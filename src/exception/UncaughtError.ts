import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../constant/HttpStatusCode";
export class UncaughtError extends BaseError{
    constructor(message:string,errorCode:string,statusCode:number=HttpStatusCode.INTERNAL_SERVER_ERROR.StatusCode){
        super(errorCode,message,statusCode);
    }
}