import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { reducers } from 'src/store/reducers';
import { rootSagas } from 'src/store/sagas';
import { syncJokesMiddleware } from 'src/store/syncJokesMiddleware';

export const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware({
    onError(err) {
      // eslint-disable-next-line no-console
      console.error(err); // ну вот так
    },
  });

  const composeEnhancers = (...args: any[]): any => {
    const compose = composeWithDevTools({
      name: 'testproject-devtools',
      trace: true,
    });

    return compose(...args);
  };

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, syncJokesMiddleware));

  const store: Store = createStore(reducers, enhancer);

  sagaMiddleware.run(rootSagas);

  return store;
};

export const store = configureStore();
