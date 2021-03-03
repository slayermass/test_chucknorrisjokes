import { takeEvery, put, call } from 'redux-saga/effects';
import { apiGetJoke } from 'src/api/jokes';
import { getJokeFailAction, getJokeOkAction } from 'src/containers/joke/actions';
import { GET_JOKE_START } from 'src/containers/joke/constants';
import { JokeModel, JokeResponseModel } from 'src/models/JokeModel';

function* getJokeSaga(): Generator {
  try {
    const response = yield call(apiGetJoke);
    yield put(getJokeOkAction(new JokeModel(response as JokeResponseModel)));
  } catch (e) {
    yield put(getJokeFailAction(e));
  }
}

export function* jokesSagas() {
  yield takeEvery(GET_JOKE_START, getJokeSaga); // реагировать на каждый запрос
}
