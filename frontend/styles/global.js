import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      paddingTop: 40,
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
    buttonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
  });