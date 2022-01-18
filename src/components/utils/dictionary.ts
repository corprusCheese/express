import {Request} from 'express'

exports.dictionaryForPage = (req: Request, view: string) => {
    switch (view) {
        case "index":
            return mapDictionary(req, homePage)
        case "login":
            return mapDictionary(req, loginPage)
        case "register":
            return mapDictionary(req, registerPage)
        default:
            break;
    }
}

const homePage: string[] = ["title", "welcome_to", "login", 'register', 'desc']
const loginPage: string[] = ["title", "login", "login_desc", "username", "password", "submit", "return_home"]
const registerPage: string[] = ["title", "register", "register_desc", "username", "password", "submit", "return_home"]

const mapDictionary = (req: any, array: string[]) => {
    const map: Map<string, string> = new Map()
    array.map(str => map.set(str, req.t(str)))
    return Object.fromEntries(map)
}