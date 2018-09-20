import React, { Component } from 'react';
import AC from '../img/AC.svg';
import plusMinus from '../img/plus-minus.svg';
import percent from '../img/percent.svg';
import divide from '../img/divide.svg';
import seven from '../img/7.svg';
import eight from '../img/8.svg';
import nine from '../img/9.svg';
import multiply from '../img/multiply.svg';
import four from '../img/4.svg';
import five from '../img/5.svg';
import six from '../img/6.svg';
import subtract from '../img/subtract.svg';
import one from '../img/1.svg';
import two from '../img/2.svg';
import three from '../img/3.svg';
import add from '../img/add.svg';
import zero from '../img/0.svg';
import decimal from '../img/decimal.svg';
import equals from '../img/equals.svg';

export default function Buttons(props) {
    return (
        <React.Fragment>
            <div onClick={props.trigger} className="row">
                <img src={AC} alt="AC" />
                <img src={plusMinus} alt="plusMinus" />
                <img src={percent} alt="%" />
                <img src={divide} alt="/" />
            </div>
            <div onClick={props.trigger} className="row">
                <img src={seven} alt="7" />
                <img src={eight} alt="8" />
                <img src={nine} alt="9" />
                <img src={multiply} alt="*" />
            </div>
            <div onClick={props.trigger} className="row">
                <img src={four} alt="4" />
                <img src={five} alt="5" />
                <img src={six} alt="6" />
                <img src={subtract} alt="-" />
            </div>
            <div onClick={props.trigger} className="row">
                <img src={one} alt="1" />
                <img src={two} alt="2" />
                <img src={three} alt="3" />
                <img src={add} alt="+" />
            </div>
            <div onClick={props.trigger} className="row">
                <img src={zero} alt="0" className='zero' />
                <img src={decimal} alt="." />
                <img src={equals} alt="=" />
            </div>
        </React.Fragment>
    );
}


// const subtNum = (arr) => {
//     return arr.reduce((a, b) => {
//         return a - b;
//     });
// }; 


// const multiNum = (arr) => {
//     return arr.reduce((a, b) => {
//         return a * b;
//     });
// };


// const divNum = (arr) => {
//     return arr.reduce((a, b) => {
//         return a / b;
//     });
// };

// doOperation(val) {
//     switch (val) {
//         case '+':
//             console.log(val)
//             break;
//         case '-':
//             console.log(`${val} is minus`);
//             break;
//         case '*':
//             console.log(`${val} is multiply`);
//             break;
//         case '/':
//             console.log(`${val} is divide`);
//             break;
//         case '%':
//             console.log(`${val} is percent`);
//             break;
//         case '=':
//             console.log(`${val} is equals`);
//             break;
//     }
// }