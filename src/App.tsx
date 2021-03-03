import React, { useCallback } from 'react';
// @ts-ignore предлагает типы установить, но нет такого пакета
import Masonry from 'react-responsive-masonry';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonMore } from 'src/components/ButtonMore';
import { getJokeStartAction } from 'src/containers/joke/actions';
import { getJokesListLoadingSelector, getJokesListSelector } from 'src/containers/joke/selectors';

const App = () => {
  const dispatch = useDispatch();

  const list = useSelector(getJokesListSelector);
  const listLoading = useSelector(getJokesListLoadingSelector);

  const onAddJoke = useCallback(() => dispatch(getJokeStartAction()), []);

  return (
    <div className="wrapper">
      <Masonry columnsCount={3}>
        <ButtonMore onClick={onAddJoke} listLoading={listLoading} />
        {list.map(({ id, text }) => (
          <div key={id} className="item">
            {text}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default App;
