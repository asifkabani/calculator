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

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {output: 0};
    }

    

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <Output />
                </div>
                <div className="row">
                    <img src={AC} alt="AC"/>
                    <img src={plusMinus} alt=""/>
                    <img src={percent} alt=""/>
                    <img src={divide} alt=""/>
                </div>
                <div className="row">
                    <img src={seven} alt=""/>
                    <img src={eight} alt=""/>
                    <img src={nine} alt=""/>
                    <img src={multiply} alt=""/>
                </div>
                <div className="row">
                    <img src={four} alt=""/>
                    <img src={five} alt=""/>
                    <img src={six} alt=""/>
                    <img src={subtract} alt=""/>
                </div>
                <div className="row">
                    <img src={one} alt=""/>
                    <img src={two} alt=""/>
                    <img src={three} alt=""/>
                    <img src={add} alt=""/>
                </div>
                <div className="row">
                    <img src={zero} alt="" className='zero'/>
                    <img src={decimal} alt=""/>
                    <img src={equals} alt=""/>
                </div>
            </React.Fragment>
        );
    }
}

export default Buttons;