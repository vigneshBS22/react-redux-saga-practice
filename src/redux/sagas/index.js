import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([userSaga(), postSaga()]);
}
