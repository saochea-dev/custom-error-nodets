
export class BaseError extends Error {

    readonly errorCode: string;
    readonly statusCode?: number
    readonly message: string;
    constructor(errorCode: string, message: string, statusCode?: number) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype)
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }

}