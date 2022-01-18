export default class UserModel {
    name: Username
    email: Email
    password: Password
    active: boolean

    constructor(name: UsernameParam, email: EmailParam, password: PasswordParam, active: boolean) {
        this.name = new Username(name)
        this.email = new Email(email)
        this.password = new Password(password)
        this.active = active
    }
}