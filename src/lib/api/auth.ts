import {
  clearCookie,
  fetchClient,
  getStorageData,
  setClientCookie,
} from '../client';
import {type User} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function register(params: AuthParams) {
  const response = await fetchClient.post<AuthResult>(
    '/api/auth/register',
    params,
  );

  const result = response.data;

  return {result, headers: response.headers};
}

export async function login(params: AuthParams) {
  const response = await fetchClient.post<AuthResult>(
    '/api/auth/login',
    params,
  );
  const result = response.data;
  const cookie = response.headers.get('set-cookie');
  await setClientCookie(cookie as string);
  return {result, headers: response.headers};
}

export async function logout() {
  await fetchClient.post('/api/auth/logout');
  await clearCookie();
}

export async function getMyAccount(accessToken?: string) {
  const response = await fetchClient.get<AuthResult>('/api/me', {
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {},
  });
  return response.data;
}

export async function refreshToken() {
  const response = await fetchClient.post<Tokens>('/api/auth/refresh', {});
  const tokens = response.data;
  const headers = response.headers;

  return {
    headers,
    tokens,
  };
}

interface AuthParams {
  userId: string;
  password: string;
}

export interface AuthResult {
  tokens: Tokens;
  user: User;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
