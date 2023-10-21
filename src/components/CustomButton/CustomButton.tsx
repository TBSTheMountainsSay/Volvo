import React from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

type TCustomButtonProps = {
  text: any;
  notActive?: boolean;
  isPromo?: boolean;
  isClose?: boolean;
  isNumPad?: boolean;
  isBackSpace?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  text,
  isPromo,
  notActive,
  isClose,
  isNumPad,
  isBackSpace,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.customButton, {
        [styles.notActive]: notActive,
        [styles.isPromo]: isPromo,
        [styles.isClose]: isClose,
        [styles.isNumPad]: isNumPad,
        [styles.isBackSpace]: isBackSpace,
      })}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CustomButton;
