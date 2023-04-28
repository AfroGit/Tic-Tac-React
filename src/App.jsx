import { useState } from 'react';
import './styles.css'

 function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>;
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {//Defined to update the squares array holding your board’s state:
    const nextSquares = squares.slice();// returns a shallow copy of a portion of an array into a new array 
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  
  
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
