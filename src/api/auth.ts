import { fetchApi } from './index';

export interface LoginData {
  username: string;
  email: string;
  password: string;
}

export const authApi = {
  login: (data: LoginData) => 
    fetchApi('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }),
    
  register: (data: LoginData) => 
    fetchApi('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
}; 