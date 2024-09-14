import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputField = styled.TextInput`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

export const DivTitle = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  margin-left: 10px;
`;

export const ValidationContainer = styled.View`
  width: 100%;
  max-width: 430px;
  padding: 20px;
  border-radius: 27px;
  align-items: center;
  margin-top: -100px;
  z-index: 1;
  background-color: #fff;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const ForgotPassword = styled.Text`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  text-decoration-line: underline;
  color: #5CB15A;
`;

export const ForgotPasswordContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #5CB15A;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-family: Fredoka;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const RegisterAccount = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #5CB15A;
`;

export const RegisterAccountContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
  gap: 5px;
`;

export const RegisterAccountText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
