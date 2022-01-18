import {Request, Response} from "express";
import UserModel from "../user/UserModel";
import {UserServiceImpl} from "../user/UserServiceImpl";
import UserService from "../user/UserService";

const authService: AuthService = new AuthServiceImpl()
const userService: UserService = new UserServiceImpl()

exports.register = function (req: Request, res: Response) {
    const newUser: UserModel = new UserModel(req.body.username, req.body.email, req.body.password, true)
    userService.create(newUser).then(user => {
            res.send(JSON.stringify(user))
        }
    )
}

exports.login = function (req: Request, res: Response) {

}

exports.logout = function (req: Request, res: Response) {

}