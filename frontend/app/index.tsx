import React, { useEffect } from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import TextLogo from "@/components/TextLogo";
const Index: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      const isAuthenticated = false;
      if (isAuthenticated) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.splashContainer}>
      <Logo />
      <TextLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Index;
