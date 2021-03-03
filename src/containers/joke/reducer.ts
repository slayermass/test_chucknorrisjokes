import { AnyAction } from 'redux';
import { GET_JOKE_FAIL, GET_JOKE_OK, GET_JOKE_START, INIT_JOKES_START } from 'src/containers/joke/constants';
import { JokeModel } from 'src/models/JokeModel';

export type jokesReducerType = {
  isLoading: boolean;
  list: JokeModel[];
  error: null | Error;
};

const initialState: jokesReducerType = {
  isLoading: false,
  list: [],
  error: null,
};

export const storeName = 'jokes';

export const jokesReducer = {
  [storeName]: (state: jokesReducerType = initialState, { type, payload }: AnyAction) => {
    switch (type) {
      case INIT_JOKES_START: {
        if (payload.jokes) {
          return {
            ...state,
            list: payload.jokes,
          };
        }
        return {
          ...state,
        };
      }
      case GET_JOKE_START:
        return {
          ...state,
          isLoading: true,
        };
      case GET_JOKE_OK: {
        const newList = [...state.list];
        newList.push(payload.joke);

        return {
          ...state,
          isLoading: false,
          list: newList,
        };
      }
      case GET_JOKE_FAIL:
        return {
          ...state,
          isLoading: false,
        };

      default:
        return state;
    }
  },
};
