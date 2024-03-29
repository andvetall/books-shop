import { put, takeEvery, call } from "redux-saga/effects";
import request from './request'
import { async } from "q";

export function* showBooks(): IterableIterator<any> {
  yield takeEvery(`SHOW_BOOKS`, function*(action: any) {
    try {
      
      let books = yield call(request, 'GET', 'books')
    
    yield put({
      type: `SHOW_BOOKS_SUCCESS`,
      payload: {
        books
      }
    });
      
    } catch (error) {
      yield put({
        type: `SHOW_BOOKS_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* updateBook(): IterableIterator<any> {
  yield takeEvery(`UPDATE_BOOK`, function*(action: any) {
    try {
      const { id, body } = action
      
      yield call(request, "PUT", `books/${id}`, body)

      let books = yield call(request, 'GET', 'books')
    yield put({
      type: `UPDATE_BOOK_SUCCESS`,
      payload: {
        books
      }
    });
      
    } catch (error) {
      yield put({
        type: `UPDATE_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* addBook(): IterableIterator<any> {
  yield takeEvery(`ADD_BOOK`, function*(action: any) {
    try {
      const { body } = action
      
      yield call(request, "POST", 'books', body)

      let books = yield call(request, 'GET', 'books')
    yield put({
      type: `ADD_BOOK_SUCCESS`,
      payload: {
        books
      }
    });
      
    } catch (error) {
      yield put({
        type: `ADD_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* moveBook(): IterableIterator<any> {
  yield takeEvery(`MOVE_BOOK`, function*(action: any) {
    try {
      const { body } = action
      
      let bookS:any = yield call(request, 'GET', 'books')
      let arr:any = []
      bookS.map((book:any) => {
          if(action.body.find((title:any) => title == book.title)){
            arr.push(book.id);
            
          }
        })
        yield arr.forEach((item:any) =>  request("DELETE" , `books/${item}`))
       
       let books = yield call(request, 'GET', 'books')
      
    yield put({
      type: `MOVE_BOOK_SUCCESS`,
      payload: {
        books
      }
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

