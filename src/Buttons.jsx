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

    // storeNum(str) {
    //     if (str.match(/\d/)) {
    //         let getNum = parseFloat(str);
    //         if (!this.state.calculate) {
    //             this.setState({
    //                calculate: getNum,
    //                memory: [...this.state.memory, getNum] 
    //             });
    //         } else {
    //             this.setState({
    //                 calculate: this.state.calculate + `${getNum}`,
    //                 memory: [...this.state.memory, getNum]
    //             });
    //         }
    //     } else if (str.match(/\+/)) {
    //         return false;
    //     }
    // }

    addNum(arr) {
        return arr.reduce((a, b) => {
            return a + b;
        });
    }

    doOperation(val) {
        switch (val) {
            case '+':
                console.log(val);
                this.setState({
                    peek: this.addNum([...this.state.memory]),
                    calculate: this.state.calculate
                });
                break;
            case '-':
                console.log(`${val} is minus`);
                break;
            case '*':
                console.log(`${val} is multiply`);
                break;
            case '/':
                console.log(`${val} is divide`);
                break;
            case '%':
                console.log(`${val} is percent`);
                break;
            case '=':
                console.log(`${val} is equals`);
                break;    
        }
    }

    handleClick(e) {
        if (e.target.className !== 'row') {
            let getAlt = e.target.getAttribute('alt');
            let matchDigit = /\d/;
            let matchOperator = /^(\+|-|\*|\/|=|\||%|\^|\(|\))$/;
            if (getAlt.match(matchDigit)) {
                let getNum = parseFloat(getAlt);
                if (!this.state.calculate) {
                    this.setState({
                        calculate: getNum,
                        memory: [...this.state.memory, getNum]
                    });
                } else {
                    this.setState({
                        calculate: this.state.calculate + `${getNum}`,
                        // When user clicks on a number (e.g. 3) and then another
                        // (e.g. 4) should push an array into the memory array.
                        // Meaning array inside of an array. So user can keep typing
                        // numbers until they hit an operator (+, -, *, /, %, =),
                        // from there what the next values will be will be a new        array. Then fix functions for add, sub, mult, etc. to do
                        // the operation between two or more arrays.
                        memory: [...this.state.memory, [getNum]]
                    });
                }
            } else if (getAlt.match(matchOperator)) {
                return this.doOperation(getAlt);   
            }
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