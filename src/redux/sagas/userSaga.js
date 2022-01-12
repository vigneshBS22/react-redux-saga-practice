import { put, call, takeEvery } from 'redux-saga/effects';

const Url = 'https://jsonplaceholder.typicode.com/users';

async function getUrl() {
  try {
    const response = await fetch(Url, {
      method: 'GET',
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(getUrl);
    yield put({ type: 'GET_USERS_SUCCESS', users: users });
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message });
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
