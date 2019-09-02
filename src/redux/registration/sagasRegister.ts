import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'


export function* doRegister(): IterableIterator<any> {
  yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
    try {
      const {
        data: { login, email, password }
      } = action;
      let users = yield call(request, 'GET')
      let user = {
        img: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",  
            login: login,
            email: email,
            password: password,
            isAdmin: false,
            details: {
                email: email,
                address: {
                    country: "No data yet",
                    city: "No data yet",
                    street: "No data yet",
                    house: "No data yet",
                    appartment: "No data yet"
                },
                mobile:"No data yet",
                website: "No data yet"
            }
      }
      
      if(users.find((item: any) => item.email === user.email || item.login === user.login)){
        yield put({
          type: `@@register/REGISTER_FAILED`,
        });
      }else {
        yield call(request, "POST", user)
        yield put({
          type: `@@register/REGISTER_SUCCESS`,
          payload: {
            email: user.email,
            password: user.password
          }
        });
      }


    } catch (error) {
      yield put({
        type: `@@register/REGISTER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
