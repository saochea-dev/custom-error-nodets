import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../constant/HttpStatusCode";
export class NotFoundError extends BaseError {
    constructor(errorCode:string,errorMessage:string,statusCode:number=HttpStatusCode.NOT_FOUND.StatusCode) {
        super(errorCode, errorMessage,statusCode);
    }
}