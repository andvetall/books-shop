
export enum LoginActions {
  DO_LOGIN = "DO_LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED"
}

export interface LoginState {
  details: object,
  email: string;
  password: string;
  error: string;
  message: string;
  isLoggedIn: boolean,
  isAdmin: boolean,
  userImage: string,
  id: any,
  login: string,
}

export interface DoLoginProps {
  email: string;
  password: string;
  payloadFunc: Function;
}
export interface LoginRequest {
  details: object,
  login: string;
  email: string;
  password: string;
  userImage: string
}

export interface LoginResult {
  token: string;
}
