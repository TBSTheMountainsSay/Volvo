import React, { useEffect, useState } from 'react';
import styles from './Promo.module.scss';
// @ts-ignore
import BgVideo from 'src/assets/TheEpicSplit.mp4';
import clsx from 'clsx';
import qr from '../../assets/qr-code.png';
import CustomButton from '../../components/CustomButton/CustomButton';

type TPromoProps = {};

const Promo: React.FC<TPromoProps> = ({}) => {
  const [activePromo, setActivePromo] = useState<boolean>(false);
  const [activeBanner, setActiveBanner] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveBanner(true);
    }, 5000);
    setTimeout(() => {
      setActivePromo(true);
    }, 1500);
  }, []);

  const handleClick = () => {
    setActiveBanner(false);
    setActivePromo(false);
  };

  return (
    <div
      className={clsx(styles.promo, {
        [styles.promo_active]: activePromo,
        [styles.promo_disabled]: !activePromo,
      })}
    >
      <video src={BgVideo} autoPlay loop muted className={styles.video} />
      <div
        className={clsx(styles.banner, {
          [styles.banner_active]: activeBanner,
          [styles.banner_disabled]: !activeBanner,
        })}
      >
        <div className={styles.title}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <img className={styles.qr} src={qr} alt={'qr-code'} />
        <div className={styles.text}>Сканируйте QR-код или нажмите ОК</div>
        <CustomButton isPromo isActive text={'ОК'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Promo;
