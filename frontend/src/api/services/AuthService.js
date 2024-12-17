import $api from "../http/index.js";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/api/login', { email, password });
    }

    static async registration(email, password, password_confirmation) {
        return $api.post('/api/register', { email, password,  password_confirmation});
    }

    static async logout() {
        return $api.post('/logout');
    }
}