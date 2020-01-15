import * as React from 'react'

import {Board} from './Board'

function calculateWinner(squares: Array<any>) {
  const lines: Array<any> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i: number = 0; i < lines.length; i++) {
    const [a, b, c]: Array<3> = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

interface GameState {
  history: any;
  xIsNext: Boolean;
  stepNumber: number;
}

export class Game extends React.Component<{}, GameState> {

  constructor(props: any) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i: number) {
    const history: any = this.state.history.slice(0, this.state.stepNumber + 1);
    const current: any = history[history.length - 1];
    const squares: Array<any> = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history: Array<any> = this.state.history;
    const current: any = history[this.state.stepNumber];
    const winner : any = calculateWinner(current.squares);
    let status : String;
    if (winner) {
      status = `Выиграл ${winner}`;
    } else {
      status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Перейти к ходу №' + move :
        'К началу игры';
      return (
        <li key={move}>
          <button onClick = { () => this.jumpTo(move) }>{desc}</button>
        </li>
      )
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares = {current.squares}
            onClick = { (i: number) : void => {this.handleClick(i)} }
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}