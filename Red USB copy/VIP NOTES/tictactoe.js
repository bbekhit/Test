// https://www.data-blogger.com/2017/04/07/building-a-tic-tac-toe-web-app-with-webpack-babel-react-redux/


const square = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.value}</button>
        </div>
    )
}

class Board extends Component{
    state = {
        squares:Array(9).fill(null),
        xIsNext:true,
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,        
        });
      }
    renderSquare = (i) => {
        return (
            <Square 
              onClick = {() => this.handleClick(i)}
              value={this.state.squares[i]}
            />
        )
    }
    render() {
        return (
          <div>
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

