import UserModel from "./UserModel";
import {User} from "./User";

export default interface UserService {
    create(user: UserModel): Promise<User>
    change(userId: Id, user: UserModel): Promise<User>
    remove(userId: Id): Promise<any>
}