import { AnyAction } from 'redux';
import { initJokesStartAction } from 'src/containers/joke/actions';
import { GET_JOKE_OK, INIT_JOKES_START } from 'src/containers/joke/constants';
import { storeName } from 'src/containers/joke/reducer';

const JOKES_KEY_NAME = 'jokes';

export const syncJokesMiddleware = (store: any) => (next: any) => (action: AnyAction) => {
  if (action.type === INIT_JOKES_START) {
    const storageJokes: string | null = localStorage.getItem(JOKES_KEY_NAME);

    if (storageJokes) {
      next(initJokesStartAction(JSON.parse(storageJokes)));
      return;
    }
  }

  if (action.type === GET_JOKE_OK) {
    const { list } = store.getState()[storeName];

    // дублирование логики, зато независимо
    const newList = [...list];
    newList.push(action.payload.joke);

    localStorage.setItem(JOKES_KEY_NAME, JSON.stringify(newList));
  }
  // eslint-disable-next-line consistent-return
  return next(action);
};
