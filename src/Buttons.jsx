import React, { Component } from 'react';
import Output from '../src/Output';
import AC from '../src/img/AC.svg';
import plusMinus from '../src/img/plus-minus.svg';
import percent from '../src/img/percent.svg';
import divide from '../src/img/divide.svg';
import seven from '../src/img/7.svg';
import eight from '../src/img/8.svg';
import nine from '../src/img/9.svg';
import multiply from '../src/img/multiply.svg';
import four from '../src/img/4.svg';
import five from '../src/img/5.svg';
import six from '../src/img/6.svg';
import subtract from '../src/img/subtract.svg';
import one from '../src/img/1.svg';
import two from '../src/img/2.svg';
import three from '../src/img/3.svg';
import add from '../src/img/add.svg';
import zero from '../src/img/0.svg';
import decimal from '../src/img/decimal.svg';
import equals from '../src/img/equals.svg';

const addNum = (arr) => {
    return arr.reduce((a, b) => {
        return a + b;
    });
};


const subtNum = (arr) => {
    return arr.reduce((a, b) => {
        return a - b;
    });
}; 


const multiNum = (arr) => {
    return arr.reduce((a, b) => {
        return a * b;
    });
};


const divNum = (arr) => {
    return arr.reduce((a, b) => {
        return a / b;
    });
};


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peek: 0,
            calculate: 0,
            memory: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    getVal(e) {
        let buttonVal = e.target.getAttribute('alt');
        if (this.state.calculate === 0) {
            this.setState({
                calculate: buttonVal,
                memory: this.state.memory + buttonVal
            });
        } else {
            this.setState({
                calculate: this.state.calculate + buttonVal,
                memory: this.state.memory + buttonVal
            });
        }
    }

    handleClick(e) {
        if (e.target.className !== 'row') {
            return this.getVal(e);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <Output peek={this.state.peek} calculate={this.state.calculate} />
                </div>
                <div onClick={this.handleClick} className="row">
                    <img src={AC} alt="AC" />
                    <img src={plusMinus} alt="plusMinus" />
                    <img src={percent} alt="%" />
                    <img src={divide} alt="/" />
                </div>
                <div onClick={this.handleClick} className="row">
                    <img src={seven} alt="7" />
                    <img src={eight} alt="8" />
                    <img src={nine} alt="9" />
                    <img src={multiply} alt="*" />
                </div>
                <div onClick={this.handleClick} className="row">
                    <img src={four} alt="4" />
                    <img src={five} alt="5" />
                    <img src={six} alt="6" />
                    <img src={subtract} alt="-" />
                </div>
                <div onClick={this.handleClick} className="row">
                    <img src={one} alt="1" />
                    <img src={two} alt="2" />
                    <img src={three} alt="3" />
                    <img src={add} alt="+" />
                </div>
                <div onClick={this.handleClick} className="row">
                    <img src={zero} alt="0" className='zero' />
                    <img src={decimal} alt="." />
                    <img src={equals} alt="=" />
                </div>
            </React.Fragment>
        );
    }
}

export default Buttons;