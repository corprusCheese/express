class AuthServiceImpl implements AuthService {
    getToken(): string {
        return "";
    }

    verifyOldPassword(userId: Id, oldPassword: Password): boolean {
        return false;
    }
}