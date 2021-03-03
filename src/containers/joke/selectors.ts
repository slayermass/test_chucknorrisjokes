import { storeName } from 'src/containers/joke/reducer';
import { AppReducer } from 'src/store/reducers';

export const getJokesListSelector = (state: AppReducer) => state[storeName].list;
export const getJokesListLoadingSelector = (state: AppReducer) => state[storeName].isLoading;
