'use client'

import { useState, useEffect } from 'react';

export function useCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    setDisplayValue(currentValue || result || '0');
  },[currentValue, result]);

  const addNumber = (input) => {
    setCurrentValue(prevValue => prevValue + input.toString());
    console.log('Button ' + input + ' pressed.');
  }

  const handleNumberClick = (number) => {
    if (
      !currentValue && number === '.' ||
      currentValue && result && number === '.') {
        setResult('');
        setCurrentValue('0');
        addNumber(number);
        console.log('TEST: Add leading 0')
    } else if (
      number === '.' && currentValue.includes('.')) {
        console.log('Error. Number already contains decimal point.');
        console.log('TEST: Limit to one decimal');
    } else if (
      currentValue === '0' && number !== '.') {
        setCurrentValue('');
        addNumber(number);
        console.log('TEST: Remove starting 0');
      } else if (result) {
          setNum1(result);
          setResult('');
          setCurrentValue('');
          addNumber(number);
          console.log('TEST: Continue calc from result');
      // } else if (
      //   currentValue &&
      //   num1
      // ) {
      //     setCurrentValue('');
      //     addNumber(number);
      //     console.log('TEST: Continue calc.');
          
      } else {
          addNumber(number);
          console.log('Default');
        }
  }
  
  const add = () => {
    if (num1) {
      calculateResult;
    } else {
    setOperator('+');
    setNum1(currentValue);}
  }

  const subtract = () => {
    if (num1) {
      calculateResult;
    } else {
      setNum1(currentValue);
      setOperator('-');
    }
  }

  const multiply = () => {
    if (num1) {
      calculateResult;
    } else {
    setNum1(currentValue);
    setOperator('*');
    }
  }

  const divide = () => {
    if (num1) {
      calculateResult;
    } else {
      setNum1(currentValue);
      setOperator('/');
    }
  }

  const calculateResult = () => {
    const x = parseFloat(num1);
    const y = parseFloat(currentValue);
    let calculatedResult;
    
    switch(operator) {
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
    setOperator(null);
  }

  const clearCurrent = () => {
    if (result && currentValue && !operator) {
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
    setOperator(null);
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