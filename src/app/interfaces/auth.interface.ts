export interface LoginOptions {
  email: string;
  password: string;
}

export interface RegisterOptions extends LoginOptions {
  name: string;
}

export interface LoginRegisterResponse {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  role: string[];
}
