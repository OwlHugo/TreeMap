import React, { useEffect, useState } from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo";
import TextLogo from "@/components/TextLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserToken, removeUserToken } from "@/utils/auth";
import { validateAuthToken } from "@/services/api";
const Index: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isValidToken = await validateAuthToken();
      if (isValidToken) {
        router.replace("/home");
      } else {
        await removeUserToken();
        router.replace("/login");
      }
      setLoading(false);
    };

    checkAuth();
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
