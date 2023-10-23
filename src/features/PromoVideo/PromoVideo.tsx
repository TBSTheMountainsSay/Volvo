import React, { useEffect, useRef, useState } from 'react';
import styles from './PromoVideo.module.scss';
// @ts-ignore
import BgVideo from 'src/assets/TheEpicSplit.mp4';
import clsx from 'clsx';
import qr from '../../assets/qr-code.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../../hooks/useVideo';

type TPromoProps = {};

const PromoVideo: React.FC<TPromoProps> = ({}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const navigate = useNavigate();

  const [activePromo, setActivePromo] = useState<boolean>(false);
  const [activeBanner, setActiveBanner] = useState<boolean>(false);

  const { startTime, changeStartTime } = useVideo();

  useEffect(() => {
    handlePlay();
    setTimeout(() => {
      setActiveBanner(true);
    }, 5000);
    setTimeout(() => {
      setActivePromo(true);
    }, 750);
  }, []);

  const handleGoNextPage = () => {
    setActiveBanner(false);
    setActivePromo(false);
    setTimeout(() => {
      navigate('/promo-number');
    }, 500);
    if (!videoRef.current) return;
    changeStartTime(videoRef.current.currentTime);
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = startTime;
    videoRef.current.play();
    // videoRef.current.muted = false;
    // videoRef.current.volume = 0.1;
  };

  return (
    <div
      className={clsx(styles.promo_video, {
        promo_active: activePromo,
        promo_disabled: !activePromo,
      })}
    >
      <video
        src={BgVideo}
        muted
        autoPlay
        loop
        className={styles.video}
        ref={videoRef}
      />
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
        <CustomButton isPromo text={'Ок'} onClick={handleGoNextPage} />
      </div>
    </div>
  );
};

export default PromoVideo;
