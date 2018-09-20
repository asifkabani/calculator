import React from 'react';

const isDigit = /\d/;
const isOperator = /^(\+|-|\*|\/|=|%)$/;
const plusMinus = 'plusMinus';
const AC = 'AC';
const convertToNum = (n) => parseFloat(n);

export const findClicker = (e) => {
    let target = e.target.getAttribute('alt');
    if (target.match(isDigit)) {
        convertToNum(target);
    } else if (target.match(isOperator)) {
        console.log('this is an operator')
    } else if (target.match(AC)) {
        console.log('AC')
    } else if (target.match(plusMinus)) {
        console.log('plusMinus')
    }
};