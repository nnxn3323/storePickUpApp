import {View, Text} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {clearCookie, fetchClient, getStorageData} from '../lib/client';
import {login, logout} from '../lib/api/auth';
import {extractError} from '../lib/error';
export const AuthContext = createContext({
  loginFn: async ({userId, password}: {userId: string; password: string}) => {},
  logoutFn: () => {},
  isLoading: false,
  cookie: '',
  error: '',
});

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoading, setLoading] = useState(true);
  const [cookie, setCookie] = useState('');
  const [error, setError] = useState('');
  const loginAndSave = async ({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }) => {
    setLoading(true);

    try {
      const LoginData = await login({userId, password});
      setError('');
      wasLoggedIn();
      return setLoading(false);
    } catch (e) {
      setLoading(false);
      const error = extractError(e);
      setError(error.message);
    }
  };
  const logoutAndSave = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
      await clearCookie();
      setCookie('');
      return setLoading(false);
    }
  };
  const wasLoggedIn = async () => {
    setLoading(true);
    const storage = await getStorageData('cookie');
    console.log(storage?.data);
    if (!storage) {
      setLoading(false);
      setCookie('');
      return;
    }
    if (!storage.data) {
      setLoading(false);
      setCookie('');
      return;
    }
    setLoading(false);
    setCookie(storage.data);
  };
  useEffect(() => {
    wasLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loginFn: loginAndSave,
        logoutFn: logoutAndSave,
        isLoading,
        cookie,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
