import * as React from 'react';

import {Square} from './Square';

interface BoardProps {
  squares: Array<any>;
  onClick: any;
}

export class Board extends React.Component< BoardProps, {} > {

  public renderSquare(i: number) {
    return (
      <Square 
        value = { this.props.squares[i] } 
        onClick = { () : void => { this.props.onClick(i) } }
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}