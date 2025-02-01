import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { Camera, CameraView } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    console.log("QR Code lido:", data);
    alert(`QR Code lido: ${data}`);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.qrScannerContainer, { opacity: fadeAnim }]}>
        <CameraView
          style={styles.camera}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        />
        {/* Overlay com os cantos do quadrado */}
        <Animated.View
          style={[styles.overlay, { transform: [{ scale: scaleAnim }] }]}
        >
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </Animated.View>

        {/* Ícone de QR Code e texto abaixo do quadrado */}
        <Animated.View style={[styles.qrCodeHint, { opacity: fadeAnim }]}>
          <MaterialIcons name="qr-code" size={24} color="#fff" />
          <Text style={styles.qrCodeText}>QR Code</Text>
        </Animated.View>
      </Animated.View>

      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.text}>
          Basta digitalizar um código QR para conseguir detalhes da árvore
        </Text>
      </Animated.View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const cornerSize = 20; // Tamanho dos cantos

const styles = StyleSheet.create({
  qrScannerContainer: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    width: width,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  cornerTopLeft: {
    position: "absolute",
    top: "20%",
    left: "15%",
    width: cornerSize,
    height: cornerSize,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
  },
  cornerTopRight: {
    position: "absolute",
    top: "20%",
    right: "15%",
    width: cornerSize,
    height: cornerSize,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: "#fff",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: "30%",
    left: "15%",
    width: cornerSize,
    height: cornerSize,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: "30%",
    right: "15%",
    width: cornerSize,
    height: cornerSize,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#fff",
  },
  qrCodeHint: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  qrCodeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default HomeScreen;
