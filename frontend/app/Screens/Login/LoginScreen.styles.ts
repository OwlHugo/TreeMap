import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding-top: 40px;
`;

export const LoginHere = styled.Text`
  color: #51007c;
  font-size: 32px;
  font-family: "Poppins-Bold";
  margin-bottom: 10px;
`;

export const WelcomeBack = styled.Text`
  color: #2e7d32;
  font-size: 18px;
  font-family: "Inter-Regular";
  margin-bottom: 5px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Inputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  margin-top: 30px;
`;

export const ForgetYourPassword = styled.Text`
  color: #51007c;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins-Bold";
  position: relative;
`;

export const Actions = styled.View`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
`;