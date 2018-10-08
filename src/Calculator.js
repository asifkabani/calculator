import React from 'react';
import './Calculator.css';
import Output from './components/Output';
import Buttons from './components/Buttons';

// const isOperator = /^(\+|-|\*|\/|=|%)$/;
// const plusMinus = 'plusMinus';
// const AC = 'AC';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      next: 0,
      result: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // doOperation(key) {
  //   const { current, next } = this.state;
  //   if (current || next === 0) {
  //     return false;
  //   }
  //   return this.doArithmetic(key);
  // }

  getOperator(key) {
    const { current } = this.state;
    switch (key) {
      case 'AC':
        this.setState({ current: 0, result: 0 });
        break;
      case 'add':
        this.setState({ current: current + `+` });
        break;
      default:
    }
    // if (key === 'AC') {
    //   this.setState({ current: 0 });
    // } else {
    //   return this.doOperation(key);
    // }
  }

  numOperation(key) {
    const { current } = this.state;
    const number = parseFloat(key);
    if (current !== 0) {
      this.setState({ current: current + `${number}` });
    } else if (current === 0) {
      this.setState({ current: number });
    }
  }

  findClicker(e) {
    const key = e.target.dataset.action;
    if (isNaN(key)) {
      this.getOperator(key);
    } else {
      this.numOperation(key);
    }
  }

  handleClick(e) {
    if (e.target.className !== 'row') {
      return this.findClicker(e);
    }
    return false;
  }

  render() {
    const { current } = this.state;

    return (
      <div className="App">
        <Output calculate={current} />
        <Buttons trigger={this.handleClick} />
      </div>
    );
  }
}

export default App;
