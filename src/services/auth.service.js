import API from "./../utils/api";

export class AuthService {
    static getPartnersListMethod = () => {
        return API.get('/Partners');
    };

    static signIn = (model) => {
        return API.post('login', model);
    }

    static logOut = () => {
        return API.get('logout');
    }

    static signUp = (model) => {
        return API.post('registration', model);
    }

    static remindPassword = (model) => {
        return API.post('restore', model);
    }
}
