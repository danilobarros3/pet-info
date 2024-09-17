import React, { useState } from "react";
import { Image, Platform, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Container,
  LogoContainer,
  InputField,
  ButtonContainer,
  ErrorMessage,
  ValidationContainer,
  Title,
  DivTitle,
  Button,
  ButtonText,
  RegisterAccount,
  RegisterAccountContainer,
  RegisterAccountText,
  SafeContainer,
} from "./style";
import { ILoginInfo } from "../../types/loginInfo";
import api from "../../services";
import { FooterCopy } from "../../components/FooterCopy/footercopy";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/Router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default function RegisterScreen() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
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

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleNavigateLogin = () => {
    navigation.navigate("Login");
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
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              birthday: "",
            }}
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
                  placeholder="Nome"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {touched.name && errors.name ? (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                ) : null}

                <InputField
                  placeholder="Sobrenome"
                  onChangeText={handleChange("surname")}
                  onBlur={handleBlur("surname")}
                  value={values.surname}
                />
                {touched.surname && errors.surname ? (
                  <ErrorMessage>{errors.surname}</ErrorMessage>
                ) : null}

                <InputField
                  placeholder="Data de aniversário"
                  value={date.toLocaleDateString("pt-BR")}
                  onFocus={showDatepicker} 
                  editable={false} 
                />
                {show && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    maximumDate={new Date()} 
                  />
                )}
                {touched.birthday && errors.birthday ? (
                  <ErrorMessage>{errors.birthday}</ErrorMessage>
                ) : null}

                <InputField
                  placeholder="E-mail"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}

                <InputField
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}

                <ButtonContainer>
                  <Button>
                    <ButtonText>Registre-se</ButtonText>
                  </Button>
                </ButtonContainer>
                <RegisterAccountContainer>
                  <RegisterAccountText>
                    Já possue uma conta?
                  </RegisterAccountText>
                  <RegisterAccount onPress={() => handleNavigateLogin()}>Login</RegisterAccount>
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
