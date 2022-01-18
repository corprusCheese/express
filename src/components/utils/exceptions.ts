abstract class CustomException extends Error {
    // child classes using this
    constructor(msg: string) {
        super(msg)
        Object.setPrototypeOf(this, CustomException.prototype);
    }
}

// for constructor errors
abstract class TypeException<T> extends CustomException {
}

// guard for interface type
function isInstanceOfT<T>(object: any): object is T {
    return object
}

/* EXCEPTIONS */

class IdException extends TypeException<IdParam> {
    constructor(idParam: IdParam) {
        super(idExceptionMessage(idParam))
    }
}

class EmailIsNotHaveADogException extends TypeException<EmailParam> {
    constructor(emailParam: EmailParam) {
        super(emailIsNotHaveADogExceptionMessage(emailParam));
    }
}

class EmailHaveLittleLengthException extends TypeException<EmailParam> {
    constructor(emailParam: EmailParam) {
        super(emailHaveLittleLengthExceptionMessage(emailParam));
    }
}

class UsernameHaveLittleLengthException extends TypeException<UsernameParam> {
    constructor(usernameParam: UsernameParam) {
        super(usernameHaveLittleLengthExceptionMessage(usernameParam));
    }
}

/* MESSAGES */

function idExceptionMessage(
    idParam: IdParam
): string {
    return "Cannot initialize Id class (" + idParam + ")"
}

function emailIsNotHaveADogExceptionMessage(
    emailParam: EmailParam
): string {
    return "Cannot initialize class Email because there is no @ in (" + emailParam + ")"
}

function emailHaveLittleLengthExceptionMessage(
    emailParam: EmailParam,
    minLength: number = MIN_EMAIL_LENGTH
): string {
    return "Cannot initialize class Email because min email length is " + minLength + " in (" + emailParam + ")"
}

function usernameHaveLittleLengthExceptionMessage(
    usernameParam: UsernameParam,
    minLength: number = MIN_USERNAME_LENGTH
): string {
    return "Cannot initialize class Username because min email length is " + minLength + " in (" + usernameParam + ")"
}