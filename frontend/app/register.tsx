import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";
export default function Register() {
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const fadeIn = new Animated.Value(0);
  const slideUp = new Animated.Value(15);
  const scale = new Animated.Value(0.95);

  useEffect(() => {
    if (loaded) {
      Animated.stagger(150, [
        Animated.timing(fadeIn, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(slideUp, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.spring(scale, {
          toValue: 1,
          tension: 35,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
        <Text style={styles.welcomeBack}>Junte-se à comunidade verde</Text>
        <Text style={styles.welcomeBack}>Faça parte desta história</Text>

        <View style={styles.inputContainer}>
          <Animated.View
            style={[styles.inputs, { transform: [{ translateY: slideUp }] }]}
          >
            <TextInput style={styles.input} placeholder="Nome completo" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            style={[styles.actions, { transform: [{ translateY: slideUp }] }]}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace("/login")}
              style={styles.button2}
            >
              <Text style={styles.buttonText2}>Já tenho uma conta</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

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
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#51007c",
    padding: 16,
    width: 350,
    height: 56,
    fontSize: 16,
    fontFamily: "Inter-Regular",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
