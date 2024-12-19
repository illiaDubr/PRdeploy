import $api from "../http/index.js";


export default class AuthService {
    static async getCsrfToken() {
        try {
            await $api.get('/sanctum/csrf-cookie', { withCredentials: true });
            console.log("CSRF-токен успешно получен.");
        } catch (error) {
            console.error("Ошибка получения CSRF-токена:", error);
            throw error;
        }
    }

    // Метод для входа в систему
    static async login(email, password) {
        await this.getCsrfToken();
        return $api.post('/login', { email, password });
    }

    static async registration(email, password, password_confirmation) {
        await this.getCsrfToken();
        return $api.post('/register', { email, password, password_confirmation }, { withCredentials: true });
    }

    static async logout() {
        return $api.post('/api/logout');
    }
}