import { Request, Response, NextFunction } from "express"
import { BaseError } from "../exception/BaseError";
import { ErrorCode } from "../constant/ErrorCode";
import { UncaughtError } from "../exception/UncaughtError";
import { HttpStatusCode } from "../constant/HttpStatusCode";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): any => {

  try {

    if (error instanceof BaseError) {
      console.error(error);
      return res.send({ error, ...{ data: {} } });
    } else {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR.StatusCode).send({ error: { errorCode: ErrorCode.UNCAUGHT_ERROR.Code }, data: {} });
      throw new UncaughtError(ErrorCode.UNCAUGHT_ERROR.Description, ErrorCode.UNCAUGHT_ERROR.Code);
    }
    
  } catch (err) {
    console.error(err)
  }

}