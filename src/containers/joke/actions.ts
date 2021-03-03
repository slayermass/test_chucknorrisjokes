import { GET_JOKE_FAIL, GET_JOKE_OK, GET_JOKE_START, INIT_JOKES_START } from 'src/containers/joke/constants';
import { JokeModel } from 'src/models/JokeModel';

export const initJokesStartAction = (list?: JokeModel[]) => ({
  type: INIT_JOKES_START,
  payload: {
    jokes: list,
  },
});

export const getJokeStartAction = () => ({
  type: GET_JOKE_START,
});

export const getJokeOkAction = (joke: JokeModel) => ({
  type: GET_JOKE_OK,
  payload: {
    joke,
  },
});

export const getJokeFailAction = (e: Error) => ({
  type: GET_JOKE_FAIL,
  error: e,
});
