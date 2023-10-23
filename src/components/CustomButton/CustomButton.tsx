import React, { useEffect, useRef } from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

type TCustomButtonProps = {
  text: JSX.Element | string;
  disabled?: boolean;
  isPromo?: boolean;
  isClose?: boolean;
  isNumPad?: boolean;
  isBackSpace?: boolean;
  isFocused?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  text,
  isPromo,
  disabled,
  isClose,
  isNumPad,
  isBackSpace,
  isFocused,
  onClick,
}) => {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!button.current) return;
    if (isFocused) {
      button.current.focus();
    }
  }, [button, isFocused]);

  return (
    <button
      ref={button}
      className={clsx(styles.customButton, {
        [styles.isPromo]: isPromo,
        [styles.isClose]: isClose,
        [styles.isNumPad]: isNumPad,
        [styles.isBackSpace]: isBackSpace,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
