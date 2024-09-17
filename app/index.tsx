import { AuthProvider } from "../src/context/authContext";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import {
  useFonts,
  Fredoka_700Bold,
  Fredoka_400Regular,
} from "@expo-google-fonts/fredoka";
import React from 'react';
import { Main } from "../src/main"

export default function Page() {
  const [fontsLoaded] = useFonts({
    Fredoka_700Bold,
    Fredoka_400Regular,
  });
  return (
    <GluestackUIProvider>
      {!fontsLoaded ? <Text>Loading...</Text> : null}
      <AuthProvider>
        <Main />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
