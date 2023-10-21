import React from 'react';
import styles from './CustomCheckbox.module.scss';
import SvgSelector from '../SvgSelector/SvgSelector';

type TCustomCheckboxProps = {
  checked?: boolean;
  onChange?: () => void;
};

const CustomCheckbox: React.FC<TCustomCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      {checked ? (
        <button className={styles.checkbox} onClick={onChange}>
          <SvgSelector id={'checkbox-checked'} />
        </button>
      ) : (
        <button className={styles.checkbox} onClick={onChange} />
      )}
    </div>
  );
};

export default CustomCheckbox;
