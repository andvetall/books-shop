import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    try {
      const {
        data: { email, password }
      } = action;
      let users = yield call(request, 'GET')
    
      let currentUser: any = users.find(
        (item: any) => item.email === email &&  item.password === password 
      )
        
      if( currentUser ){
        yield put({
          type: `@@login/LOGIN_SUCCESS`,
          payload: {
            email: currentUser.email,
            password: currentUser.password,
            isAdmin: currentUser.isAdmin,
            userImage: currentUser.img,
            details: currentUser.details,
            id: currentUser.id,
            login: currentUser.login,
          }
        });
      }else {
        yield put({
          type: `@@login/LOGIN_FAILED`,
        });
      }
    } catch (error) {
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
