import React, { useEffect, useState } from 'react';
import styles from './PromoNumber.module.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import NumberPad from '../../components/NumberPad/NumberPad';
import AcceptMessage from '../../components/AcceptMessage/AcceptMessage';
import { numverifyAPI } from '../../api/numverifyAPI';

type TPromoNumberProps = {};

const formatPhoneNumber = (phoneNumber: string) => {
  let formattedNumber: string = '+7(___)___-__-__';
  phoneNumber.split('').forEach((char) => {
    if (!['(', ')', '-'].includes(char))
      formattedNumber = formattedNumber.replace('_', char);
  });
  return formattedNumber;
};

const PromoNumber: React.FC<TPromoNumberProps> = ({}) => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);
  let timerId: NodeJS.Timeout | null = null;
  const [activePromo, setActivePromo] = useState<boolean>(false);
  const [activePanel, setActivePanel] = useState<boolean>(false);
  const [activeAcceptPanel, setActiveAcceptPanel] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [isValidNumber, setIsValidNumber] = useState<boolean>(true);

  const [isFocused, setIsFocused] = useState<
    { x: number; y: number } | null | 'close' | 'submit'
  >(null);

  useEffect(() => {
    const handleSomeActivity = () => {
      setTimer(0);
    };

    if (timer >= 10) {
      handleClose();
      setTimer(0);
    } else {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    document.addEventListener('mousemove', handleSomeActivity);
    document.addEventListener('keydown', handleSomeActivity);
    return () => {
      if (timerId) clearInterval(timerId);
      document.removeEventListener('mousemove', handleSomeActivity);
      document.removeEventListener('keydown', handleSomeActivity);
    };
  }, [timer]);

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
          if (phoneNumber.length >= 10) break;
          setPhoneNumber(phoneNumber + event.key);
          break;
        case 'Backspace':
          setIsValidNumber(true);
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

  const handleClose = () => {
    if (activeAcceptPanel) {
      setActiveAcceptPanel(false);
      setTimeout(() => {
        setActivePanel(true);
      }, 500);
    } else {
      setActivePromo(false);
      setActivePanel(false);
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  };

  const handleClickCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleWriteNumber = (value: string) => {
    if (value === 'стереть') {
      setIsValidNumber(true);
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + value);
    }
  };

  const handleAcceptNumber = async () => {
    if (isChecked && phoneNumber.length === 10) {
      const { data } = await numverifyAPI.checkNumber(phoneNumber);
      data.valid ? showSuccessMessage() : setIsValidNumber(false);
    }
  };

  const showSuccessMessage = () => {
    setActivePanel(false);
    setTimeout(() => {
      setActiveAcceptPanel(true);
    }, 500);
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
          onClick={handleClose}
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
        <div
          className={clsx(styles.number, { [styles.error]: !isValidNumber })}
        >
          {formatPhoneNumber(phoneNumber)}
        </div>
        <div className={styles.subtitle}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </div>
        <div className={styles['numpad-wrapper']}>
          <NumberPad
            onChange={handleWriteNumber}
            isFocused={isFocused as { x: number; y: number } | null}
          />
        </div>

        {isValidNumber ? (
          <div className={styles['checkbox-group']}>
            <CustomCheckbox
              checked={isChecked}
              onChange={handleClickCheckBox}
            />
            <div className={styles['checkbox-group_title']}>
              Согласие на обработку персональных данных
            </div>
          </div>
        ) : (
          <div className={styles['checkbox-group']}>
            <div className={clsx(styles.error, styles.errormessage)}>
              Неверно введён номер
            </div>
          </div>
        )}

        <div className={styles.accept}>
          <CustomButton
            text={'Подтвердить номер'}
            disabled={phoneNumber.length < 10 || !isChecked}
            isFocused={isFocused === 'submit'}
            onClick={handleAcceptNumber}
          />
        </div>
      </div>
      <div
        className={clsx(styles.panel, {
          [styles.panel_active]: activeAcceptPanel,
          [styles.panel_disabled]: !activeAcceptPanel,
        })}
      >
        <AcceptMessage />
      </div>
    </div>
  );
};

export default PromoNumber;
