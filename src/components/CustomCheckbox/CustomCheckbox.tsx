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
      <button className={styles.checkbox} onClick={onChange}>
        {checked && <SvgSelector id={'checkbox-checked'} />}
      </button>
    </div>
  );
};

export default CustomCheckbox;
