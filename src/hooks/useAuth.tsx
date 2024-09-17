import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import React from 'react';

export const useAuth = () => {
  return useContext(AuthContext);
};
