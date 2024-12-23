import $api from "../http/index.js"
import { SearchData } from "../../utils/SearchData.js";


export default class SearchService {
    static async getCsrfToken() {
        try {
            await $api.get('/sanctum/csrf-cookie', { withCredentials: true });
            console.log("CSRF-токен успешно получен.");
        } catch (error) {
            console.error("Ошибка получения CSRF-токена:", error);
            throw error;
        }
    }

    static async search() {
        await this.getCsrfToken();

        return $api.post('/api/search-players', SearchData);
    }
}