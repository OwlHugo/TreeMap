import React, { useState } from "react";
import { View, Text, Animated, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useAnimation } from "@/hooks/useAnimation";
import Toast from "react-native-toast-message";
import FormInput from "@/components/FormInput";
import { useUser } from "@/hooks/useUser";
import {
  Actions,
  Container,
  ForgetYourPassword,
  InputContainer,
  Inputs,
  LoginHere,
  WelcomeBack,
} from "./LoginScreen.styles";
import {  Button, Button2, ButtonText, ButtonText2} from "./../../StyledGeral/Button.styles"

const Login: React.FC = () => {
  const router = useRouter();
  const { fadeIn, slideUp, scale } = useAnimation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useUser();

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
      await login({ email, password });

      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Login realizado com sucesso!",
      });

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
    <Container>
      <Animated.Text style={[{ opacity: fadeIn, transform: [{ scale }] }]}>
        <LoginHere>TreeMap</LoginHere>
      </Animated.Text>

      <Animated.View
        style={[{ transform: [{ translateY: slideUp }] }, { opacity: fadeIn }]}
      >
        <WelcomeBack>Mapeando um futuro mais verde</WelcomeBack>
        <WelcomeBack>Cada árvore conta uma história</WelcomeBack>

        <InputContainer>
          <Animated.View style={[{ transform: [{ translateY: slideUp }] }]}>
            <Inputs>
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
            </Inputs>
          </Animated.View>

          <Animated.Text style={[{ opacity: fadeIn }]}>
            <ForgetYourPassword>Esqueceu a senha?</ForgetYourPassword>
          </Animated.Text>

          <Animated.View style={[{ transform: [{ translateY: slideUp }] }]}>
            <Actions>
              <Button onPress={handleLogin} disabled={loading}>
                <ButtonText>
                  {loading ? (
                    <ActivityIndicator size="small" color="#ffffff" />
                  ) : (
                    "Entrar"
                  )}
                </ButtonText>
              </Button>
              <Button2 onPress={() => router.replace("/Register")}>
                <ButtonText2>Criar nova conta</ButtonText2>
              </Button2>
            </Actions>
          </Animated.View>
        </InputContainer>
      </Animated.View>
      <Toast />
    </Container>
  );
};

export default Login;
