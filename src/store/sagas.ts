import { all, put } from 'redux-saga/effects';
import { initJokesStartAction } from 'src/containers/joke/actions';
import { jokesSagas } from 'src/containers/joke/saga';

function* initialSaga() {
  yield put(initJokesStartAction());
}

export function* rootSagas() {
  yield all([initialSaga(), jokesSagas()]);
}
