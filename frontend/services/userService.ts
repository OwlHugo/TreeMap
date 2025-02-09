import { getUserToken } from "@/utils/auth";
import { api } from "./api";

const getUserInfo = async () => {
    try {
        const token = await getUserToken();

        console.log("Token Enviado:", token);
        const response = await api.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
        throw error;
    }
}

export { getUserInfo };