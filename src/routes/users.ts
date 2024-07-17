import { Request, Response, Router, NextFunction } from "express";
import { ErrorCode } from "../constant/ErrorCode"
import { NotFoundError } from "../exception/NotFoundError";
import { users, User, getUserById, updateUserById, removeUserOneById, addUser } from "../data";
import { UpdateNotAffectError } from "../exception/UpdateNotAffectError";
import { BaseError } from "../exception/BaseError";
import { DataValidator } from "../util/DataValidator";

const router = Router();

const retrieveListUser = (req: Request, res: Response, next: NextFunction): any => {
  try {
    const list: User[] = users;
    if (list.length <= 0) {
      throw new NotFoundError(ErrorCode.LIST_ERROR.Code, ErrorCode.LIST_ERROR.Description);
    }
    res.send({ data: list })
  } catch (error) {
    next(error)
  }

}

const retrieveUserById = (req: Request, res: Response, next: NextFunction) => {
  try {

    DataValidator.validate(req.params,"name");

    const id: number = parseInt(req.params.id, 10);

    console.log(Object.keys(req.params))
    const user: {} | User = getUserById(id);
    console.log(Object.keys(user))
    if (Object.keys(user).length) {
      res.send({ data: user })
    } else {
      throw new NotFoundError(ErrorCode.NOT_FOUND_ERROR.Code, ErrorCode.NOT_FOUND_ERROR.Description);
    }
  } catch (error) {
    next(error);
  }

}

const updateUserOneById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    let updateUser = req.body || {};

    updateUser = updateUserById(id, updateUser);

    if (updateUser) {
      return res.send({ data: updateUser });
    } else {
      throw new UpdateNotAffectError(ErrorCode.UPDATE_NOT_AFFECT_ERROR.Code, ErrorCode.UPDATE_NOT_AFFECT_ERROR.Description);
    }

  } catch (error) {
    next(error)
  }
}

const deleteUserById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const result = removeUserOneById(id);
    if (Object.keys(result).length) {
      return res.send({ data: result });
    } else {
      throw new BaseError(ErrorCode.DELETE_DATA_ERROR.Code, ErrorCode.DELETE_DATA_ERROR.Description);
    }
  } catch (error) {
    next(error)
  }
}

const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    let user = req.body;
    if (user.username.trim() === "") {
      throw new BaseError("000008", "Create User Error")
    }
    user = addUser(user);
    return res.send({ data: user });
  } catch (error) {
    next(error)
  }
}

router.post("/users/", createUser);
router.get("/users/", retrieveListUser);
router.get("/users/:id", retrieveUserById);
router.put("/users/:id", updateUserOneById);
router.delete("/users/:id", deleteUserById);

export default router;