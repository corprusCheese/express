interface AuthService {
    getToken(): string
    verifyOldPassword(userId: Id, oldPassword: Password): boolean
}