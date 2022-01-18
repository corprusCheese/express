import UserModel from "./UserModel";

export class User {
    id: Id
    userModel: UserModel

    constructor(id: Id, userModel: UserModel) {
        this.id = id
        this.userModel = userModel
    }
}