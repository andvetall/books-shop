import { RootState } from "../rootReducer";
import { RegisterState } from "./types";

export const initialState: RegisterState = {
  login: "",
  email: "",
  password: "",
  error: "",
  isRegistred: false,
};

export function registerReducer(state: RegisterState = initialState, action: any) {
  switch (action.type) {
    case `@@register/DO_REGISTER`: {
      return {
        ...state,
      };
    }
    case `@@register/REGISTER_FAILED`: {
      const { data } = action.payload;
      return {
        ...state,
        data,
        error: "User had been declared"
      };
    }

    case `@@register/REGISTER_SUCCESS`: {
      const { email, password } = action.payload;
      return {
        ...state,
        isRegistred: true,
        email: email,
        password: password
      };
    }

    default:
      return state;
  }
}

export const register = (state: RootState) => state.register;
