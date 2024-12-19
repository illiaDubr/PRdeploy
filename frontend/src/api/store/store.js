import AuthService from "../services/AuthService.js";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { API_URl } from "../http/index.js";

export default class Store {
    user = {}
    isAuth = false;
    isLoading = false;
    errors = {
        registration: {},
        login: {},
        logout: {},
        checkAuth: {},
        verification: {}
    };

    constructor() {
        makeAutoObservable(this);
        this.initializeAuth()
    }

    initializeAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            this.checkAuth();
        }
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setError(operation, field, message) {
        this.errors[operation][field] = message;
    }

    clearError(operation, field) {
        if (field) {
            delete this.errors[operation][field];
        } else {
            this.errors[operation] = {};
        }
    }

    async login(email, password, event) {
        event.preventDefault();
        this.clearError('login');
        console.log('Отправляемые данные:', { email, password });
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            if (e.response?.data?.errors) {
                Object.entries(e.response.data.errors).forEach(([field, messages]) => {
                    this.setError('login', field, messages.join(', '));
                });
            } else {
                this.setError('login', 'general', e.response?.data?.message || "Ошибка при входе");
            }
            console.log(e.response?.data?.message);
            throw e;
        }
    }

    async registration(email, password, password_confirmation, event) {
        event.preventDefault();
        this.clearError('registration'); // Очистка предыдущих ошибок
        console.log('Отправляемые данные:', { email, password, password_confirmation });
        try {
            const response = await AuthService.registration(email, password, password_confirmation);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            if (e.response?.data?.errors) {
                Object.entries(e.response.data.errors).forEach(([field, messages]) => {
                    this.setError('registration', field, messages.join(', '));
                });
            } else {
                this.setError('registration', 'general', e.response?.data?.message || "Ошибка при регистрации");
            }
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URl}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async verification(email) {
        try {
            const response = await AuthService.verification(email);
            console.log(response);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}