import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { Camera, CameraView } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimatedContainer, AnimatedOverlay, AnimatedQRCodeHint, AnimatedQRScannerContainer, Container, CornerBottomLeft, CornerBottomRight, CornerTopLeft, CornerTopRight, HintText, QRCodeText } from "./HomeScreen.styles";


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
    <Container>
      <AnimatedQRScannerContainer style={{ opacity: fadeAnim }}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        />
        <AnimatedOverlay style={{ transform: [{ scale: scaleAnim }] }}>
          <CornerTopLeft />
          <CornerTopRight />
          <CornerBottomLeft />
          <CornerBottomRight />
        </AnimatedOverlay>

        <AnimatedQRCodeHint style={{ opacity: fadeAnim }}>
          <MaterialIcons name="qr-code" size={24} color="#fff" />
          <QRCodeText>QR Code</QRCodeText>
        </AnimatedQRCodeHint>
      </AnimatedQRScannerContainer>

      <AnimatedContainer style={{ opacity: fadeAnim }}>
        <HintText>
          Basta digitalizar um código QR para conseguir detalhes da árvore
        </HintText>
      </AnimatedContainer>
    </Container>
  );
};

export default HomeScreen;