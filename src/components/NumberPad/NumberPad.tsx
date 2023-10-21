import React, { useState } from 'react';
import styles from './NumberPad.module.scss';
import CustomButton from '../CustomButton/CustomButton';

type TNumberPadProps = {
  isFocused: { x: number; y: number } | null;
  onChange: (value: string) => void;
};

const NumberPad: React.FC<TNumberPadProps> = ({ isFocused, onChange }) => {
  type Button = {
    value: string;
  };

  const buttons: Button[][] = [
    [{ value: '1' }, { value: '2' }, { value: '3' }],
    [{ value: '4' }, { value: '5' }, { value: '6' }],
    [{ value: '7' }, { value: '8' }, { value: '9' }],
    [{ value: 'стереть' }, { value: '0' }],
  ];

  return (
    <div className={styles['numpad-wrapper']}>
      {buttons.map((row, y) => (
        <div key={y} className={styles['numpad-row']}>
          {row.map((button, x) => {
            return (
              <CustomButton
                key={x}
                text={`${button.value}`}
                isNumPad
                isBackSpace={button.value === 'стереть'}
                isFocused={isFocused?.x === x && isFocused?.y === y}
                onClick={() => onChange(button.value)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default NumberPad;
