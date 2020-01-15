import * as React from 'react'

interface SquareProps {
  value: number;
  onClick: any;
}

// function Square(props: any) {
//   return (
//     <button 
//       className="square" 
//       onClick= {props.onClick()}>
//       {props.value}
//     </button>
//   );
// }

export class Square extends React.Component<SquareProps, {}> {
  public render(): JSX.Element {
    return (
      <button 
        className="square" 
        onClick={(): void => {this.props.onClick()}}>
        {this.props.value}
      </button>
    );
  }
}