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
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isFocused, setIsFocused] = useState<
    { x: number; y: number } | null | 'close' | 'submit'
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setActivePanel(true);
    }, 1000);
    setTimeout(() => {
      setActivePromo(true);
    }, 500);
  }, []);

  useEffect(() => {
    const handlePressButton = (event: KeyboardEvent) => {
      //Обнулить бездействие
      switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          setPhoneNumber(phoneNumber + event.key);
          break;
        case 'Backspace':
          setPhoneNumber(phoneNumber.slice(0, -1));
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'ArrowLeft':
          handleChangeFocus(event.key);
          break;
      }
    };
    document.addEventListener('keydown', handlePressButton);
    return () => document.removeEventListener('keydown', handlePressButton);
  }, [phoneNumber, isFocused]);

  const handleChangeFocus = (direction: string) => {
    if (typeof isFocused === 'string') {
      setIsFocused({ x: 0, y: 0 });
      return;
    }
    const newFocused = isFocused ? { ...isFocused } : { x: 0, y: 0 };
    switch (direction) {
      case 'ArrowUp':
        newFocused.y -= 1;
        break;
      case 'ArrowDown':
        newFocused.y += 1;
        break;
      case 'ArrowRight':
        newFocused.x += 1;
        break;
      case 'ArrowLeft':
        newFocused.x -= 1;
        break;
    }
    if (newFocused.x < 0) return;
    if (newFocused.x > 2 || newFocused.y < 0) {
      setIsFocused('close');
      return;
    }
    if (newFocused.y > 3) {
      setIsFocused('submit');
      return;
    }
    setIsFocused(newFocused);
  };

  const handleClosePage = () => {
    setActivePromo(false);
    setActivePanel(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleClickCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleWriteNumber = (value: string) => {
    value === 'стереть'
      ? setPhoneNumber(phoneNumber.slice(0, -1))
      : setPhoneNumber(phoneNumber + value);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    //todo доделать функцию
    return phoneNumber;
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
          onClick={handleClosePage}
          isClose
          isFocused={isFocused === 'close'}
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
        <div className={styles.number}>{formatPhoneNumber(phoneNumber)}</div>
        <div className={styles.subtitle}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </div>
        <div className={styles['numpad-wrapper']}>
          <NumberPad
            onChange={handleWriteNumber}
            isFocused={isFocused as { x: number; y: number } | null}
          />
        </div>
        <div className={styles['checkbox-group']}>
          <CustomCheckbox checked={isChecked} onChange={handleClickCheckBox} />
          <div className={styles['checkbox-group_title']}>
            Согласие на обработку персональных данных
          </div>
        </div>
        <div className={styles.accept}>
          <CustomButton
            text={'Подтвердить номер'}
            disabled={phoneNumber.length < 10 || !isChecked}
            isFocused={isFocused === 'submit'}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoNumber;
