import { useFonts } from "expo-font";
import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, Platform, Animated, Easing } from "react-native";

export default function TextLogo() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "LaBelleAurore-Regular": require("../assets/fonts/LaBelleAurore-Regular.ttf"),
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.Text 
      style={[
        styles.text,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }
      ]}
    >
      TreeMap
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#51007c",
    textAlign: "center",
    fontSize: 48,
    fontWeight: Platform.OS === 'ios' ? '800' : '400',
    fontFamily: "LaBelleAurore-Regular",
    textShadowColor: "rgba(81, 0, 124, 0.45)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginTop: "15%",
    letterSpacing: 1.2,
    elevation: 3,
  },
});
