import $api from "../http/index.js";

export default class AuthService {
    static async getCsrfToken() {
        try {
            await $api.get('/sanctum/csrf-cookie',{
                withCredentials: true,
            });
            console.log("хуй");
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async login(email, password) {
        await this.getCsrfToken();
        const csrfToken = getCookie('XSRF-TOKEN');
        return $api.post('/login', { email, password,headers: {
            
            'X-XSRF-TOKEN': csrfToken,
        }, }
            
        );
    }

    static async registration(email, password, password_confirmation) {
        return $api.post('/api/register', { email, password,  password_confirmation});
    }

    static async logout() {
        return $api.post('/api/logout');
    }
}