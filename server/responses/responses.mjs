import {register} from "./register.mjs";
import {login} from "./login.mjs";

const responses = (app) => {
    register(app);
    login(app);
}

export {responses};