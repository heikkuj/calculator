'use client'

import { useState, useEffect } from 'react';

export function useCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [pauseValue, setPauseValue] = useState('');

  useEffect(() => {
    setDisplayValue(pauseValue || currentValue || result || '0');
  },[pauseValue, currentValue, result]);

  const addNumber = (input) => {
    setCurrentValue(prevValue => prevValue + input.toString());
    console.log('Button ' + input + ' pressed.');
  }

  const handleNumberClick = (number) => {
    if (!currentValue && number === '.' || result && number === '.') {
      // Add leading 0 to decimal point as first input
      setResult('');
      setPauseValue('');
      setCurrentValue('0')
      addNumber(number);
      console.log('TEST 1');
      
    } else if (number == '.' && currentValue.includes('.')) {
      console.log('Error. Number already contains decimal point.');
      console.log('TEST 2');
      
    } else if (currentValue === '0' && number !== '.') {
      setPauseValue('');
      setCurrentValue('');
      addNumber(number);
      console.log('TEST 3');
      
    } else if (result) {
      setPauseValue('');
      setResult('');
      setCurrentValue('');
      addNumber(number);
      console.log('TEST 4');

    } else {
      setPauseValue('');
      addNumber(number);
      console.log('DEFAULT');
      
    }
  }
  
  const add = () => {
    setNum1(currentValue);
    setPauseValue(currentValue);
    setOperation('+');
    setCurrentValue('');
  }

  const subtract = () => {
    setNum1(currentValue);
    setPauseValue(currentValue);
    setOperation('-');
    setCurrentValue('');
  }

  const multiply = () => {
    setNum1(currentValue);
    setPauseValue(currentValue);
    setOperation('*');
    setCurrentValue('');
  }

  const divide = () => {
    setNum1(currentValue);
    setPauseValue(currentValue);
    setOperation('/');
    setCurrentValue('');
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
    pauseValue,
    result
  };
}