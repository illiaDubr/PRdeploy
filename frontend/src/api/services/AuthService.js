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
        try {
            // Получаем CSRF токен перед отправкой запроса
            await this.getCsrfToken();

            // Выполняем запрос на логин
            const response = await $api.post('/login', { 
                email, 
                password 
            }, {
                withCredentials: true  // Обязательно для передачи куки
            });
            return response;
        } catch (error) {
            console.error("Ошибка при логине:", error);
            throw error;
        }
    }

    static async registration(email, password, password_confirmation) {
        return $api.post('/api/register', { email, password,  password_confirmation});
    }

    static async logout() {
        return $api.post('/api/logout');
    }
}