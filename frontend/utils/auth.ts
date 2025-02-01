import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserToken = async (token: string) => {
    try {
        await AsyncStorage.setItem("userToken", token);
        console.log("Token salvo com sucesso no AsyncStorage.");
        console.log("Token:", token);
    } catch (error) {
        console.error("Erro ao salvar o token no AsyncStorage:", error);
    }
};

export const getUserToken = async () => {
    try {
        const token = await AsyncStorage.getItem("userToken");
        return token;
    } catch (error) {
        console.error("Erro ao obter o token do AsyncStorage:", error);
        return null;
    }
};

export const removeUserToken = async () => {
    try {
        await AsyncStorage.removeItem("userToken");
    } catch (error) {
        console.error("Erro ao remover o token do AsyncStorage:", error);
    }
};