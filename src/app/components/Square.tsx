import React from 'react';

type SquareProps = { onClick: () => void; value: string };

function Square(props: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
