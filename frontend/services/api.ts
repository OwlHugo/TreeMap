import { getUserToken } from '@/utils/auth';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.15:8000/api',
});

export const registerUser = async (userData: {
    name: string;
    email: string;
    password: string;
    c_password: string;
}) => {
    try {
        console.log('User data:', userData);
        const response = await api.post('/register', userData);
        console.log('API response:', response.data);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
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
      console.log(token)
      console.log(response.data.isValid)
      return response.data.isValid; 
    } catch (error) {
      return false;
    }
  };