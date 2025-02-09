import { CameraView } from "expo-camera";
import { Animated, Dimensions } from "react-native";
import styled from 'styled-components/native';

const { width } = Dimensions.get("window");
const cornerSize = 20; 

export const Container = styled.View`
  flex: 1;
`;

export const AnimatedQRScannerContainer = styled(Animated.View)`
  height: 60%;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const CameraViewStyled = styled(CameraView)`
  flex: 1;
  width: ${width}px;
`;

export const AnimatedContainer = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HintText = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const AnimatedOverlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const Corner = styled.View`
  position: absolute;
  width: ${cornerSize}px;
  height: ${cornerSize}px;
  border-color: #fff;
`;

export const CornerTopLeft = styled(Corner)`
  top: 20%;
  left: 15%;
  border-left-width: 4px;
  border-top-width: 4px;
`;

export const CornerTopRight = styled(Corner)`
  top: 20%;
  right: 15%;
  border-right-width: 4px;
  border-top-width: 4px;
`;

export const CornerBottomLeft = styled(Corner)`
  bottom: 30%;
  left: 15%;
  border-left-width: 4px;
  border-bottom-width: 4px;
`;

export const CornerBottomRight = styled(Corner)`
  bottom: 30%;
  right: 15%;
  border-right-width: 4px;
  border-bottom-width: 4px;
`;

export const AnimatedQRCodeHint = styled(Animated.View)`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const QRCodeText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const styles = {
    camera: {
        flex: 1,
        width: width,
    },
};

