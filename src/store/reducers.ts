import { combineReducers } from 'redux';
import { jokesReducer, jokesReducerType, storeName } from 'src/containers/joke/reducer';

export type AppReducer = {
  [storeName]: jokesReducerType;
};

// eslint-disable-next-line no-unused-vars
const appReducer: { [K in keyof AppReducer]: any } = {
  ...jokesReducer,
};

export const reducers = (state: any, action: any) => combineReducers(appReducer)(state, action);
