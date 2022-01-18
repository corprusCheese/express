import UserModel from "./UserModel";
import UserService from "./UserService";
import {User} from "./User";

export class UserServiceImpl implements UserService {
    async change(userId: Id, userModel: UserModel): Promise<User> {
        return await userSchema.findById(userId.value).exec().then(async (user: any) => {
                const model = new userSchema({
                    name: userModel.name.value,
                    email: userModel.email.value,
                    password: userModel.password.value,
                    active: user.value.active
                })

                return await model.save(function (err: any, user: any) {
                    return new User(new Id(user.id as IdParam), userModel)
                })
            }
        )
    }

    async create(userModel: UserModel): Promise<User> {
        const model = new userSchema({
            name: userModel.name.value,
            email: userModel.email.value,
            password: userModel.password.value,
            active: true
        })

        return await model.save(function (err: any, user: any) {
            return new User(new Id(user.id as IdParam), userModel)
        })
    }

    async remove(userId: Id): Promise<any> {
        return await userSchema.findById(userId.value).exec().then(async (user: any) => {
                if (user.value.active) {
                    const model = new userSchema({
                        name: user.value.name,
                        email: user.value.email,
                        password: user.value.password,
                        active: false
                    })

                    return await model.save()
                }
            }
        )
    }
}