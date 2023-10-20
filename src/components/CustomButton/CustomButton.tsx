import React from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

type TCustomButtonProps = {
  text: string;
  isActive: boolean;
  isPromo: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  text,
  isActive,
  isPromo,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.customButton, {
        [styles.isActive]: isActive,
        [styles.isPromo]: isPromo,
      })}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CustomButton;
