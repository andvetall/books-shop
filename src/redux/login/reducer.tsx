import { RootState } from "../rootReducer";
import { LoginState } from "./types";

export const initialState: LoginState = {
  details: {},
  email: "",
  userImage: "",
  password: "",
  error: "",
  message: "",
  isLoggedIn: false,
  isAdmin: false,
  id: '',
  login: ''
};

export function loginReducer(state: LoginState = initialState, action: any) {
  switch (action.type) {
    case `@@login/DO_LOGIN`: {
      return {
        ...state,
      };
    }
    case `@@login/LOGIN_FAILED`: {
      const {body} = action.payload;
      return {
        ...state,
        message: '',
        body,
        error: "Check Email or Password"
      };
    }

    case `@@login/LOGIN_SUCCESS`: {
      const { email, password, isAdmin, userImage, details, id, login } = action.payload;
      return {
        ...state,
        details: details,
        userImage: userImage,
        email: email,
        password: password,
        error: '',
        message: "Authentification Completed",
        isLoggedIn: true,
        isAdmin: isAdmin,
        id: id,
        login: login,
      };
    }

    

    default:
      return state;
  }
}

export const login = (state: RootState) => state.login;
