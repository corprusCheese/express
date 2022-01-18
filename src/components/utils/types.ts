abstract class Parameter<T> {
    value: T
    // this throws an exception if failed
    abstract verify(value: T): any
    // construct if everything is okay
    constructor(value: T) {
        try {
            this.verify(value)
        } catch (e) {
            if (isInstanceOfT<T>(e))
                console.log((e as unknown as TypeException<T>).message)
            else console.log("unexpected error")
            throw e
        } finally {
            this.value = value
        }
    }
}

class Id extends Parameter<IdParam> {
    verify(value: IdParam): any {
    }
}

class Email extends Parameter<EmailParam> {
    verify(value: EmailParam): any {
        if (!value.includes("@"))
            throw new EmailIsNotHaveADogException(value)
        if (value.length < MIN_EMAIL_LENGTH)
            throw new EmailHaveLittleLengthException(value)
    }
}

class Username extends Parameter<UsernameParam> {
    verify(value: UsernameParam): any {
        if (value.length < MIN_USERNAME_LENGTH)
            throw new UsernameHaveLittleLengthException(value)
    }
}

class Password extends Parameter<PasswordParam> {
    verify(value: PasswordParam): any {
    }
}

class Token extends Parameter<TokenParam> {
    verify(value: TokenParam): any {
    }
}