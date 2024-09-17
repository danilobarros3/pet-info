import React, { useState } from "react";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  LogoContainer,
  InputField,
  ButtonContainer,
  ErrorMessage,
  ValidationContainer,
  Title,
  DivTitle,
  ForgotPassword,
  ForgotPasswordContainer,
  Button,
  ButtonText,
  RegisterAccount,
  RegisterAccountContainer,
  RegisterAccountText,
  SafeContainer,
} from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FooterCopy } from "../../components/FooterCopy/footercopy";
import api from "../../services";
import { ILoginInfo } from "../../types/loginInfo";
import { RootStackParamList } from "../../routes/Router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async (values: ILoginInfo) => {
    setLoading(true);
    try {
      const { data } = await api.post("/login", values);
      await AsyncStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeContainer>
      <Container>
        <LogoContainer>
          <Image
            source={require("../../assets/images/dogIa.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </LogoContainer>
        <ValidationContainer>
          <DivTitle>
            <Image
              source={require("../../assets/images/image2.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Title>Sejam bem-vindos ao PETINFO!</Title>
          </DivTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <InputField
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}

                <InputField
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}

                <ForgotPasswordContainer>
                  <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                </ForgotPasswordContainer>

                <ButtonContainer>
                  <Button onPress={() => handleSubmit()}>
                    <ButtonText>Login</ButtonText>
                  </Button>
                </ButtonContainer>
                <RegisterAccountContainer>
                  <RegisterAccountText>
                    Ainda não possui uma conta?
                  </RegisterAccountText>
                  <RegisterAccount onPress={()=> handleRegister()}>Registre-se</RegisterAccount>
                </RegisterAccountContainer>
              </>
            )}
          </Formik>
          <FooterCopy />
        </ValidationContainer>
      </Container>
    </SafeContainer>
  );
}
