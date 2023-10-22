import React from 'react';
import styles from './AcceptMessage.module.scss';

type TAcceptMessageProps = {};

const AcceptMessage: React.FC<TAcceptMessageProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        ЗАЯВКА <br /> ПРИНЯТА
      </div>
      <div className={styles.subtitle}>
        Держите телефон под рукой. <br />  Скоро с Вами свяжется наш менеджер.
      </div>
    </div>
  );
};

export default AcceptMessage;
