import React, { memo } from 'react';

type Props = {
  onClick: () => void;
  listLoading: boolean;
};

export const ButtonMore = memo(({ onClick, listLoading }: Props) => (
  <button className="item more" type="button" onClick={onClick} disabled={listLoading}>
    MORE!!!!
  </button>
));
