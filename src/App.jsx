import React from 'react';
import './App.css';
import Output from './components/Output';
import Buttons from './components/Buttons';


const isDigit = /\d/;
const isOperator = /^(\+|-|\*|\/|=|%)$/;
const plusMinus = 'plusMinus';
const AC = 'AC';

const convertToNum = (n) => parseFloat(n);




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peek: 0,
      calculate: 0,
      memory: [],
      answer: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  addOperator(s) {
    this.setState({
      memory: [...this.state.memory, s]
    });
  }

  showNum(n) {
    let number = convertToNum(n);
    if (this.state.calculate !== 0) {
      this.setState({
        calculate: this.state.calculate += `${number}`,
        memory: [...this.state.memory, number]
      });
    } else {
      this.setState({
        calculate: number,
        memory: [...this.state.memory, number]
      });
    }
  }

  findClicker(e) {
    let target = e.target.getAttribute('alt');
    if (target.match(isDigit)) {
      this.showNum(target);
    } else if (target.match(isOperator)) {
      this.addOperator(target);
    } else if (target.match(AC)) {
      console.log('AC');
    } else if (target.match(plusMinus)) {
      console.log('plusMinus');
    }
  }

  handleClick(e) {
    if (e.target.className !== 'row') {
      this.findClicker(e);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="App">
        <Output
          peek={this.state.peek}
          calculate={this.state.calculate}
        />
        <Buttons trigger={this.handleClick} />
      </div>
    );
  }
}

export default App;