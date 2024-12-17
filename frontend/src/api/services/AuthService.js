import $api from "../http/index.js";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', { email, password });
    }

    static async registration(email, password, confirmPassword) {
        return $api.post('/api/register', { email, password,  confirmPassword});
    }

    static async logout() {
        return $api.post('/logout');
    }
}