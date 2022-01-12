import { put, call, takeEvery } from 'redux-saga/effects';

const Url = 'https://jsonplaceholder.typicode.com/posts';

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

function* fetchPosts(action) {
  try {
    const posts = yield call(getUrl);
    yield put({ type: 'GET_POSTS_SUCCESS', posts: posts });
  } catch (e) {
    yield put({ type: 'GET_POSTS_FAILED', message: e.message });
  }
}

function* postSaga() {
  yield takeEvery('GET_POSTS_REQUESTED', fetchPosts);
}

export default postSaga;
