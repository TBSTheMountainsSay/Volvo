import React, { useState } from 'react';
import styles from './NumberPad.module.scss';
import CustomButton from '../CustomButton/CustomButton';

type TNumberPadProps = {};

const NumberPad: React.FC<TNumberPadProps> = ({}) => {
  const [IsFocused, setIsFocused] = useState<{ x: number; y: number } | null>(
    null
  );

  type Button = {
    x: number;
    y: number;
    value: string;
  };

  const buttons: Button[][] = [
    [
      { x: 0, y: 0, value: '1' },
      { x: 0, y: 1, value: '2' },
      { x: 0, y: 2, value: '3' },
    ],
    [
      { x: 1, y: 0, value: '4' },
      { x: 1, y: 1, value: '5' },
      { x: 1, y: 2, value: '6' },
    ],
    [
      { x: 2, y: 0, value: '7' },
      { x: 2, y: 1, value: '8' },
      { x: 2, y: 2, value: '9' },
    ],
    [
      { x: 3, y: 0, value: 'стереть' },
      { x: 3, y: 1, value: '0' },
    ],
  ];

  return (
    <div className={styles['numpad-wrapper']}>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className={styles['numpad-row']}>
          {row.map((button) =>
            button.value === 'стереть' ? (
              <CustomButton text={`${button.value}`} isNumPad isBackSpace />
            ) : (
              <CustomButton text={`${button.value}`} isNumPad />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default NumberPad;
