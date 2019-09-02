import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'

export function* showUsers(): IterableIterator<any> {
  yield takeEvery(`SHOW_USERS`, function*(action: any) {
    try {
      
      let users = yield call(request, 'GET', 'users')
    
    yield put({
      type: `SHOW_USERS_SUCCESS`,
      payload: {
        users
      }
    });
      
    } catch (error) {
      yield put({
        type: `SHOW_USERS_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* updateUser(): IterableIterator<any> {
  yield takeEvery(`UPDATE_USER`, function*(action: any) {
    try {

      const { id, body } = action
      yield call(request, "PUT", `users/${action.id}`, body)
      
      let users = yield call(request, 'GET', 'users')
    
    yield put({
      type: `UPDATE_USER_SUCCESS`,
      payload: {
        users
      }
    });
      
    } catch (error) {
      yield put({
        type: `UPDATE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}


export function* moveUser(): IterableIterator<any> {
  yield takeEvery(`MOVE_USER`, function*(action: any) {
    try {
      const { user } = action
      yield call(request, 'DELETE', `users/${action.body}`)

      let users = yield call(request, 'GET', 'users')
      
    yield put({
      type: `MOVE_USER_SUCCESS`,
      payload: {
        users
      }
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

