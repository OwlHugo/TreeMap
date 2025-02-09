// src/services/authService.ts
import axios from 'axios';
import { getUserToken, setUserToken, clearUserToken } from '@/utils/auth';
import { api } from './api';

export const registerUser = async (userData: {
    name: string;
    email: string;
    password: string;
    c_password: string;
}) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await api.post('/login', credentials);
        const result = await response.data.data;
        setUserToken(result.token);
        return result; 
    } catch (error: any) {
        throw error.response.data;
    }
};

export const validateAuthToken = async () => {
    const token = await getUserToken();
    if (!token) {
        return false;
    }

    try {
        const response = await api.post("/validate-token", { token });
        return response.data.isValid;
    } catch (error) {
        return false;
    }
};

export const logoutUser = async () => {
    await clearUserToken(); 
};