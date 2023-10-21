import React, { useEffect, useState } from 'react';
import styles from './PromoNumber.module.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import NumberPad from '../../components/NumberPad/NumberPad';

type TPromoNumberProps = {};

const PromoNumber: React.FC<TPromoNumberProps> = ({}) => {
  const navigate = useNavigate();

  const [activePromo, setActivePromo] = useState<boolean>(false);
  const [activePanel, setActivePanel] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setActivePanel(true);
    }, 1000);
    setTimeout(() => {
      setActivePromo(true);
    }, 500);
  }, []);

  const handleClick = () => {
    setActivePromo(false);
    setActivePanel(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleClickCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={clsx(styles.promo_number, {
        promo_active: activePromo,
        promo_disabled: !activePromo,
      })}
    >
      <div className={styles.close_button}>
        <CustomButton
          text={<SvgSelector id={'close'} className={styles.isClose} />}
          onClick={handleClick}
          isClose
        />
      </div>
      <div
        className={clsx(styles.panel, {
          [styles.panel_active]: activePanel,
          [styles.panel_disabled]: !activePanel,
        })}
      >
        <div className={styles.title}>
          Введите ваш номер мобильного телефона
        </div>
        <div className={styles.number}>+7(___)___-__-__</div>
        <div className={styles.subtitle}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </div>
        <div className={styles['numpad-wrapper']}>
          <NumberPad />
        </div>
        <div className={styles['checkbox-group']}>
          <CustomCheckbox checked={isChecked} onChange={handleClickCheckBox} />
          <div className={styles['checkbox-group_title']}>
            Согласие на обработку персональных данных
          </div>
        </div>
        <div className={styles.accept}>
          <CustomButton text={'Подтвердить номер'} notActive />
        </div>
      </div>
    </div>
  );
};

export default PromoNumber;
