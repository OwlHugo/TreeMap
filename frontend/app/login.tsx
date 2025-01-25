import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

export default function Login() {
  const router = useRouter();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const fadeIn = new Animated.Value(0);
  const slideUp = new Animated.Value(25);
  const scale = new Animated.Value(0.8);

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
        <Text style={styles.welcomeBack}>Mapeando um futuro mais verde</Text>
        <Text style={styles.welcomeBack}>Cada árvore conta uma história</Text>

        <View style={styles.inputContainer}>
          <Animated.View
            style={[styles.inputs, { transform: [{ translateY: slideUp }] }]}
          >
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />
          </Animated.View>

          <Animated.Text
            style={[styles.forgetYourPassword, { opacity: fadeIn }]}
          >
            Esqueceu a senha?
          </Animated.Text>

          <Animated.View
            style={[styles.actions, { transform: [{ translateY: slideUp }] }]}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => router.replace("/register")}
            >
              <Text style={styles.buttonText2}>Criar nova conta</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View
          style={[
            styles.socialMedia,
            { opacity: fadeIn, transform: [{ scale }] },
          ]}
        >
          <Text style={styles.socialMediaText}>Ou entre com</Text>
          <View style={styles.google}>
            <View style={styles.frame}>
              <Image
                source={require("../assets/images/google-logo-bold-svgrepo-com.png")}
                style={styles.googleImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </Animated.View>
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
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
    gap: 29,
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
    gap: 20,
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
    alignItems: "center",
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
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative",
    width: 350,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    position: "relative",
  },
  buttonText2: {
    color: "#494949",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    position: "relative",
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "flex-start",
    position: "relative",
  },
  socialMediaText: {
    color: "#51007c",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    position: "relative",
  },
  google: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative",
  },
  frame: {},
  googleImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  createAccountButton: {
    borderWidth: 2,
    borderColor: "#2E7D32",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
