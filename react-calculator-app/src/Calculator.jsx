import { useState } from 'react';

export function Calculator() {
  const [display, onDisplay] = useState('');

  const clearDisplay = () => onDisplay('');


  const displaySum = () => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = display.match(validExpression);

    if (!match) {
      onDisplay('エラー'); 
    }

    const num1 = Number(match[1]); // 1つ目の整数
    const operator = match[2]; // 演算子
    const num2 = Number(match[3]); // 2つ目の整数

    let value;

    switch (operator) {
      case '+':
        value = num1 + num2;
        break;
      case '-':
        value = num1 - num2;
        break;
      case '*':
        value = num1 * num2;
        break;
      case '/':
        value = num1 / num2;
        break;
      default:
        throw new Error('エラー');
    }
    onDisplay(value);
    }; 

  const handleClick = (value) => {
    if (value === 'C') 
      return clearDisplay();
    else if (value === '=') 
      return displaySum();
    else 
      onDisplay(display + value);
  };


 // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <div className='calculator'>
      <h2>電卓アプリ</h2>
      <p>{display}</p>
      <div className='button-grid'>
        {buttons.map((btn) => (
        <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  )
}