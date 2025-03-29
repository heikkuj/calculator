'use client'

import { useState, useEffect } from 'react';

export function useCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    setDisplayValue(currentValue || result || '0');
  },[currentValue, result]);

  const addNumber = (input) => {
    setCurrentValue(prevValue => prevValue + input.toString());
    console.log('Button ' + input + ' pressed.');
  }

  const handleNumberClick = (number) => {
    if (!currentValue && number === '.') {
      // Add leading 0 to decimal point as first input
      setCurrentValue('0')
      addNumber(number);
    } else if (number == '.' && currentValue.includes('.')) {
      // Limit to one decimal point
      console.log('Error. Number already contains decimal point.');
    } else if (currentValue === '0' && number !== '.') {
      // Remove starting 0 from integer numbers
      setCurrentValue('');
      addNumber(number);
    } else if (num1 && currentValue || result) {
        // Continue calculation from result
        setResult('');
        setCurrentValue('');
        addNumber(number);
    } else {
      addNumber(number);
    }
  }
  
  const add = () => {
    if (num1) {
      calculateResult;
    } else {
    setNum1(currentValue);
    setOperation('+');}
  }

  const subtract = () => {
    setNum1(currentValue);
    setOperation('-');
  }

  const multiply = () => {
    setNum1(currentValue);
    setOperation('*');
  }

  const divide = () => {
    setNum1(currentValue);
    setOperation('/');
  }

  const calculateResult = () => {
    const x = parseFloat(num1);
    const y = parseFloat(currentValue);
    let calculatedResult;
    
    switch(operation) {
      case '+':
        calculatedResult = x + y;
        break;
      case '-':
        calculatedResult = x - y;
        break;
      case '*':
        calculatedResult = x * y;
        break;
      case '/':
        calculatedResult = x / y;
        break;

      default:
        calculatedResult = currentValue;
    }
    
    setResult(calculatedResult.toString());
    setCurrentValue(calculatedResult.toString().substring(0, 14));
    setNum1('');
    setOperation(null);
  }

  const clearCurrent = () => {
    if (result && currentValue && !operation) {
      setResult('');
      setCurrentValue('');
    } else if (currentValue) {
      setCurrentValue('');
    }
  }

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setCurrentValue('');
    setResult('');
    setOperation(null);
  }

  return {
    addNumber,
    handleNumberClick,
    add,
    subtract,
    multiply,
    divide,
    calculateResult,
    clearCurrent,
    clearAll,
    currentValue,
    displayValue,
    result
  };
}