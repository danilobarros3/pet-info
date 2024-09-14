import React, { ReactNode, createContext, useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorageKeys } from '../config/localStorageKeys'; // Certifique-se de que esse arquivo está correto

interface AuthContextValue {
  signedIn: boolean;
  userId: string | null;
  signin(accessToken: string, name: string, email: string, userId: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem(localStorageKeys.ACCESS_USER);
        if (storedUser) {
          const { userId } = JSON.parse(storedUser);
          setSignedIn(true);
          setUserId(userId || null);
        }
      } catch (error) {
        console.error('Erro ao verificar o status de autenticação:', error);
      }
    };

    checkAuthStatus();
  }, []);

  const signin = useCallback(async (accessToken: string, name: string, email: string, userId: string) => {
    try {
      const object = { token: accessToken, name, email, userId };
      await AsyncStorage.setItem(localStorageKeys.ACCESS_USER, JSON.stringify(object));
      
      setSignedIn(true);
      setUserId(userId);
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
    }
  }, []);

  const signout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(localStorageKeys.ACCESS_USER);
      setSignedIn(false);
      setUserId(null);
    } catch (error) {
      console.error('Erro ao realizar o logout:', error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, userId, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
