import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useAnimation } from "../hooks/useAnimation";
import { loginUser } from "../services/api";
import Toast from "react-native-toast-message";
import { setUserToken } from "@/utils/auth";
import FormInput from "@/components/FormInput";

const login: React.FC = () => {
  const router = useRouter();
  const { fadeIn, slideUp, scale } = useAnimation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Por favor, preencha todos os campos",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser({ email, password });

      setUserToken(response.data.token);

      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Login realizado com sucesso!",
      });

      // Redireciona para a tela inicial (home)
      router.replace("/home");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: error.message || "Erro ao realizar login",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.loginHere, { opacity: fadeIn, transform: [{ scale }] }]}
      >
        TreeMap
      </Animated.Text>

      <Animated.View
        style={[{ transform: [{ translateY: slideUp }] }, { opacity: fadeIn }]}
      >
        <Text style={styles.welcomeBack}>Mapeando um futuro mais verde</Text>
        <Text style={styles.welcomeBack}>Cada árvore conta uma história</Text>

        <View style={styles.inputContainer}>
          <Animated.View
            style={[styles.inputs, { transform: [{ translateY: slideUp }] }]}
          >
            <FormInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <FormInput
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Animated.View>

          <Animated.Text
            style={[styles.forgetYourPassword, { opacity: fadeIn }]}
          >
            Esqueceu a senha?
          </Animated.Text>

          <Animated.View
            style={[styles.actions, { transform: [{ translateY: slideUp }] }]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  "Entrar"
                )}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => router.replace("/register")}
            >
              <Text style={styles.buttonText2}>Criar nova conta</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  loginHere: {
    color: "#51007c",
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
  },
  welcomeBack: {
    color: "#2E7D32",
    fontSize: 18,
    fontFamily: "Inter-Regular",
    marginBottom: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexShrink: 0,
    position: "relative",
    marginTop: 30,
  },
  forgetYourPassword: {
    color: "#51007c",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins-Bold",
    position: "relative",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexShrink: 0,
    position: "relative",
  },
  button: {
    backgroundColor: "#51007c",
    borderRadius: 12,
    padding: 16,
    width: 350,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button2: {
    backgroundColor: "#ffffff",
    padding: 15,
    width: 350,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonText2: {
    color: "#494949",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default login;
