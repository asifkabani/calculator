import React from 'react';
import './Calculator.css';
import Output from './components/Output';
import Buttons from './components/Buttons';

const isDigit = /\d/;
const isOperator = /^(\+|-|\*|\/|=|%)$/;
// const plusMinus = 'plusMinus';
// const AC = 'AC';
const convertToNum = (n) => parseFloat(n);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      previous: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // addOperator(s) {
  //   this.setState({
  //     memory: [...this.state.memory, s]
  //   });
  // }

  doOperation(e) {
    console.log(e)
  }

  showNum(n) {
    let number = convertToNum(n);
    if (this.state.current !== 0) {
      this.setState({
        current: this.state.current + number
      });
    } else if (this.state.current === 0) {
      this.setState({
        current: number.toString()
      });
    }
  }

  findClicker(e) {
    let key = e.target;
    console.log(key)
    let action = key.dataset.action;
    console.log(action)
    console.log(typeof action)
    console.log(action === isDigit)
    // if (key.match(isDigit)) {
    //   this.showNum(key);
    // }
    // if (target.match(isDigit)) {
    //   this.showNum(target);
    // }
    // else if (target.match(isOperator)) {
    //   this.doOperation(target);
    // }
    // } else if (target.match(isOperator)) {
    //   this.addOperator(target);
    // } else if (target.match(AC)) {
    //   console.log('AC');
    // } else if (target.match(plusMinus)) {
    //   console.log('plusMinus');
    // }
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
        <Output calculate={this.state.current} />
        <Buttons trigger={this.handleClick} />
      </div>
    );
  }
}

export default App;