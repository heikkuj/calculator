'use client'

import React, { useState } from 'react'

export default function Calculation() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [currentValue, setCurrentValue] = ('');
  const [result, setResult] = useState('');

  const handleNum1 = (number) => {
    setNum1(number.target.value);
  }

  const handleNum2 = (number) => {
    setNum2(number.target.value);
  }

  const add = () => {
    setResult((num1) + (num2));
  }

  const subtract = () => {
    setResult((num1) - (num2));
  }

  const divide = () => {
    setResult((num1) / (num2));
  }

  const multiply = () => {
    setResult((num1) * (num2));
  }

  const clearCurrent = () => {
    // setNum1('')
  }

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult('');
  }
  
    return (
    <div>
      {result}
    </div>
  )
}
